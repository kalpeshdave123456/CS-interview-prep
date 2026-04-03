const STORAGE_KEY = 'csInterviewPrepProState';
const FEEDBACK_KEY = 'csInterviewPrepFeedback';
const state = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
state.progress = state.progress || { revised:0, tests:[], checks:{} };
state.currentPage = state.currentPage || 'dashboard';
state.flashIndex = state.flashIndex || 0;
state.flashCat = state.flashCat || 'All';
state.currentTech = state.currentTech || 'cpp';
state.currentMock = state.currentMock || APP_DATA.mockTests[0].id;
state.currentCompany = state.currentCompany || APP_DATA.companyTests[0].id;
state.analytical = state.analytical || { topic:'All', level:'All', company:'All', loaded:[] };
state.logical = state.logical || { topic:'All', level:'All', company:'All', loaded:[] };
state.timers = {};

const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];
const save = () => localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
const esc = s => String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function pageTitle(label){ $('#pageTitle').textContent = label; }
function fmt(sec){ const m = Math.floor(sec/60).toString().padStart(2,'0'); const s = (sec%60).toString().padStart(2,'0'); return `${m}:${s}`; }

function renderNav(){
  $('#nav').innerHTML = APP_DATA.nav.map(n => `<button class="nav-btn ${state.currentPage===n.id?'active':''}" data-page="${n.id}">${n.label}</button>`).join('');
  $$('.nav-btn').forEach(btn => btn.onclick = () => switchPage(btn.dataset.page));
}
function switchPage(id){
  state.currentPage = id; save();
  $$('.page').forEach(p => p.classList.toggle('active', p.id===id));
  const label = APP_DATA.nav.find(n => n.id===id)?.label || 'Dashboard';
  pageTitle(label); renderNav(); $('#sidebar').classList.remove('open');
}
function stats(){
  const completed = Object.values(state.progress.checks).filter(Boolean).length;
  return { revised: state.progress.revised, tests: state.progress.tests.length, checks: completed };
}

function renderDashboard(){
  const s = stats();
  $('#dashboard').innerHTML = `
    <div class="hero">
      <div class="card">
        <div class="eyebrow">Interview system</div>
        <h3>Professional CS fresher preparation tool</h3>
        <p class="muted">Includes analytical and logical banks with 200 questions each, 25 timed mock tests, company mini-tests, videos, flashcards, resume guidance, and interview-day execution tasks.</p>
        <div class="select-row">
          <button class="btn" data-jump="analytical">Start Analytical</button>
          <button class="btn btn-secondary" data-jump="mocktests">Take Timed Mock</button>
          <button class="btn btn-secondary" data-jump="company">Company Test</button>
        </div>
      </div>
      <div class="grid">
        <div class="card"><div class="eyebrow">Flashcards revised</div><div class="stat">${s.revised}</div></div>
        <div class="card"><div class="eyebrow">Tests attempted</div><div class="stat">${s.tests}</div></div>
        <div class="card"><div class="eyebrow">Checklist items done</div><div class="stat">${s.checks}</div></div>
      </div>
    </div>
    <div class="grid grid-3">
      <div class="card"><h4>Analytical Bank</h4><p class="muted">200 MCQs with explanations, filters, answer checking, and 20-question set loader.</p></div>
      <div class="card"><h4>Logical Bank</h4><p class="muted">200 MCQs across series, direction, syllogism, puzzles, data sufficiency, and more.</p></div>
      <div class="card"><h4>Mock Engine</h4><p class="muted">25 tests × 25 questions × 30 minutes, with instant score and review.</p></div>
    </div>`;
  $$('[data-jump]').forEach(b=>b.onclick=()=>switchPage(b.dataset.jump));
}

function renderRoadmap(){
  $('#roadmap').innerHTML = `<div class="grid grid-2">${APP_DATA.roadmap.map(r=>`<div class="roadmap-item"><div class="eyebrow">${esc(r.week)}</div><h3>${esc(r.title)}</h3><ul>${r.points.map(p=>`<li>${esc(p)}</li>`).join('')}</ul></div>`).join('')}</div>`;
}

function uniqVals(list, key){ return ['All', ...new Set(list.map(x=>x[key]))]; }
function options(vals, current){ return vals.map(v=>`<option value="${esc(v)}" ${v===current?'selected':''}>${esc(v)}</option>`).join(''); }
function filtered(kind){
  const source = kind==='analytical' ? APP_DATA.analyticalQuestions : APP_DATA.logicalQuestions;
  const f = state[kind];
  return source.filter(q => (f.topic==='All'||q.topic===f.topic) && (f.level==='All'||q.level===f.level) && (f.company==='All'||q.company===f.company));
}
function deterministicSample(arr, size){
  const n = Math.min(size, arr.length); const out=[]; let step = arr.length>1 ? 7 : 1; let idx = arr.length ? (arr.length+size)%arr.length : 0;
  while(out.length<n){ const item = arr[idx % arr.length]; if(!out.includes(item)) out.push(item); idx += step; }
  return out;
}
function questionCard(q, group, i){
  return `<div class="q-card"><div class="tags"><span class="tag">${esc(q.topic)}</span><span class="tag">${esc(q.level)}</span><span class="tag">${esc(q.company)}</span></div><h4>Q${i+1}. ${esc(q.q)}</h4>${q.options.map(opt=>`<label class="option"><input type="radio" name="${group}_${i}" value="${esc(opt)}">${esc(opt)}</label>`).join('')}</div>`;
}
function evaluate(set, group, resultNode, testId){
  let score = 0;
  const html = set.map((q,i)=>{
    const selected = document.querySelector(`input[name="${group}_${i}"]:checked`)?.value || 'Not answered';
    const ok = selected === q.answer; if(ok) score++;
    return `<div class="review-item"><strong>${esc(q.q)}</strong><div class="${ok?'correct':'wrong'}">Your answer: ${esc(selected)}</div><div class="correct">Correct answer: ${esc(q.answer)}</div><div class="muted">Explanation: ${esc(q.explanation)}</div></div>`;
  }).join('');
  resultNode.innerHTML = `<div class="result-box"><h3>Score: ${score} / ${set.length}</h3>${html}</div>`;
  state.progress.tests.push({ id:testId, at:new Date().toISOString(), score, total:set.length });
  save(); renderDashboard();
}
function renderPractice(kind){
  const source = kind==='analytical'?APP_DATA.analyticalQuestions:APP_DATA.logicalQuestions;
  const current = state[kind];
  const wrapper = $('#'+kind);
  wrapper.innerHTML = `
    <div class="card"><div class="eyebrow">Practice bank</div><h3>${kind==='analytical'?'Analytical MCQ Practice':'Logical MCQ Practice'}</h3><p class="muted">${source.length} total questions. Use filters, then click Load Set. Each load brings 20 MCQs with detailed explanation after submission.</p>
      <div class="select-row">
        <select id="${kind}Topic">${options(uniqVals(source,'topic'), current.topic)}</select>
        <select id="${kind}Level">${options(uniqVals(source,'level'), current.level)}</select>
        <select id="${kind}Company">${options(uniqVals(source,'company'), current.company)}</select>
        <button class="btn" id="${kind}Load">Load Set</button>
        <button class="btn btn-secondary" id="${kind}Submit">Submit Answers</button>
      </div>
      <div id="${kind}Count" class="muted"></div>
    </div>
    <div id="${kind}Questions" class="grid"></div>
    <div id="${kind}Result"></div>`;

  const topicSel = $('#'+kind+'Topic'); const levelSel = $('#'+kind+'Level'); const companySel = $('#'+kind+'Company');
  topicSel.onchange = e => { state[kind].topic = e.target.value; save(); updateCount(kind); };
  levelSel.onchange = e => { state[kind].level = e.target.value; save(); updateCount(kind); };
  companySel.onchange = e => { state[kind].company = e.target.value; save(); updateCount(kind); };
  $('#'+kind+'Load').onclick = () => loadPractice(kind);
  $('#'+kind+'Submit').onclick = () => evaluate(state[kind].loaded, kind+'q', $('#'+kind+'Result'), kind+'_practice');
  updateCount(kind); loadPractice(kind);
}
function updateCount(kind){
  const count = filtered(kind).length; $('#'+kind+'Count').textContent = `Matching questions: ${count}`;
}
function loadPractice(kind){
  const arr = filtered(kind); const set = deterministicSample(arr, 20); state[kind].loaded = set; save();
  $('#'+kind+'Questions').innerHTML = set.length ? set.map((q,i)=>questionCard(q, kind+'q', i)).join('') : `<div class="card">No questions match these filters.</div>`;
  $('#'+kind+'Result').innerHTML = '';
}

function renderTechnical(){
  const tabs = Object.entries(APP_DATA.tech).map(([k,v])=>`<button class="btn ${state.currentTech===k?'':'btn-secondary'}" data-tech="${k}">${v.title.replace(' Interview Prep','')}</button>`).join('');
  const t = APP_DATA.tech[state.currentTech];
  $('#technical').innerHTML = `<div class="card"><div class="eyebrow">Technical preparation</div><h3>${esc(t.title)}</h3><div class="select-row">${tabs}</div></div><div class="grid grid-3">${t.cards.map(card=>`<div class="tech-card"><h4>${esc(card[0])}</h4><ul>${card[1].map(i=>`<li>${esc(i)}</li>`).join('')}</ul></div>`).join('')}</div>`;
  $$('[data-tech]').forEach(b=>b.onclick=()=>{ state.currentTech=b.dataset.tech; save(); renderTechnical(); });
}

function renderFlashcards(){
  const cats = ['All', ...new Set(APP_DATA.flashcards.map(f=>f.cat))];
  const pool = state.flashCat==='All' ? APP_DATA.flashcards : APP_DATA.flashcards.filter(f=>f.cat===state.flashCat);
  const idx = pool.length ? ((state.flashIndex % pool.length)+pool.length)%pool.length : 0; state.flashIndex = idx; save();
  const card = pool[idx];
  $('#flashcards').innerHTML = `<div class="card"><div class="eyebrow">Revision engine</div><h3>Flashcards</h3><div class="select-row"><select id="flashCat">${options(cats, state.flashCat)}</select><button class="btn btn-secondary" id="prevFlash">Prev</button><button class="btn btn-secondary" id="nextFlash">Next</button><button class="btn" id="markRev">Mark Revised</button></div></div>
    <div class="flashcard" id="flashcard">${card?`<div class="flashcard-inner"><div class="flashface"><div class="eyebrow">${esc(card.cat)}</div><h3>${esc(card.q)}</h3><p class="muted">Tap card to flip</p></div><div class="flashface flashback"><div class="eyebrow">Answer</div><p>${esc(card.a)}</p></div></div>`:'<div class="card">No cards</div>'}</div>`;
  $('#flashCat').onchange = e => { state.flashCat=e.target.value; state.flashIndex=0; save(); renderFlashcards(); };
  $('#prevFlash').onclick = () => { state.flashIndex--; save(); renderFlashcards(); };
  $('#nextFlash').onclick = () => { state.flashIndex++; save(); renderFlashcards(); };
  $('#markRev').onclick = () => { state.progress.revised++; save(); renderDashboard(); };
  $('#flashcard').onclick = ()=> $('#flashcard').classList.toggle('flipped');
}

function startTimer(key, secs, node, onEnd){
  clearInterval(state.timers[key]); let remaining = secs; node.textContent = fmt(remaining);
  state.timers[key] = setInterval(()=>{ remaining--; node.textContent = fmt(remaining); if(remaining<=0){ clearInterval(state.timers[key]); onEnd(); } },1000);
}
function renderMocktests(){
  const current = APP_DATA.mockTests.find(m=>m.id===state.currentMock) || APP_DATA.mockTests[0];
  $('#mocktests').innerHTML = `<div class="card"><div class="eyebrow">Timed tests</div><h3>Mock Tests</h3><div class="select-row"><select id="mockSelector">${APP_DATA.mockTests.map(m=>`<option value="${m.id}" ${m.id===current.id?'selected':''}>${m.title}</option>`).join('')}</select><span class="timer" id="mockTimer">30:00</span><button class="btn btn-secondary" id="mockStart">Start / Restart</button><button class="btn" id="mockSubmit">Submit Mock</button></div><p class="muted">25 mock tests. Each mock has 25 questions and a 30-minute timer.</p></div><div id="mockQuestions" class="grid"></div><div id="mockResult"></div>`;
  $('#mockQuestions').innerHTML = current.questions.map((q,i)=>questionCard(q,'mockq',i)).join('');
  $('#mockSelector').onchange = e => { state.currentMock=e.target.value; save(); renderMocktests(); };
  $('#mockStart').onclick = () => startTimer('mock', current.durationMinutes*60, $('#mockTimer'), ()=> evaluate(current.questions,'mockq',$('#mockResult'),current.id));
  $('#mockSubmit').onclick = () => { clearInterval(state.timers.mock); evaluate(current.questions,'mockq',$('#mockResult'),current.id); };
}

function renderVideos(){
  $('#videos').innerHTML = `<div class="grid grid-2">${APP_DATA.videos.map(v=>`<div class="card"><div class="eyebrow">${esc(v.category)}</div><h3>Top picks</h3>${v.items.map(item=>`<div class="video-item"><strong>${esc(item.title)}</strong><p class="muted">${esc(item.why)}</p><a href="${item.url}" target="_blank" rel="noopener noreferrer">Open direct link</a></div>`).join('')}</div>`).join('')}</div>`;
}

function renderResume(){
  $('#resume').innerHTML = `<div class="grid grid-2">${APP_DATA.resumeCards.map(c=>`<div class="card"><h3>${esc(c.title)}</h3><p class="muted">${esc(c.desc)}</p></div>`).join('')}</div>`;
}
function renderHR(){
  $('#hr').innerHTML = `<div class="grid grid-2">${APP_DATA.hrCards.map(c=>`<div class="card"><h3>${esc(c.title)}</h3><p class="muted">${esc(c.desc)}</p></div>`).join('')}</div>`;
}
function renderTasks(){
  const item = (x)=>`<label class="check-item"><input type="checkbox" data-check="${x.id}" ${state.progress.checks[x.id]?'checked':''}> <div><strong>${esc(x.title)}</strong><div class="muted">${esc(x.desc)}</div></div></label>`;
  $('#tasks').innerHTML = `<div class="grid grid-2"><div class="card"><div class="eyebrow">Daily tasks</div><h3>Execution checklist</h3>${APP_DATA.tasks.map(item).join('')}</div><div class="card"><div class="eyebrow">Interview day</div><h3>Final readiness</h3>${APP_DATA.interviewDay.map(item).join('')}</div></div>`;
  $$('[data-check]').forEach(c=>c.onchange=e=>{ state.progress.checks[e.target.dataset.check]=e.target.checked; save(); renderDashboard(); });
}

function renderCompany(){
  const current = APP_DATA.companyTests.find(c=>c.id===state.currentCompany) || APP_DATA.companyTests[0];
  $('#company').innerHTML = `<div class="card"><div class="eyebrow">Targeted rounds</div><h3>Company Mini-Tests</h3><div class="select-row"><select id="companySelector">${APP_DATA.companyTests.map(c=>`<option value="${c.id}" ${c.id===current.id?'selected':''}>${c.name}</option>`).join('')}</select><span class="timer" id="companyTimer">20:00</span><button class="btn btn-secondary" id="companyStart">Start / Restart</button><button class="btn" id="companySubmit">Submit Test</button></div><p class="muted">Dropdown includes GOOG, MSFT, AMD, NVIDIA, TCS, and Infosys. Each mini-test contains 10 relevant screening questions.</p></div><div id="companyQuestions" class="grid"></div><div id="companyResult"></div>`;
  $('#companyQuestions').innerHTML = current.questions.map((q,i)=>questionCard(q,'companyq',i)).join('');
  $('#companySelector').onchange = e => { state.currentCompany=e.target.value; save(); renderCompany(); };
  $('#companyStart').onclick = () => startTimer('company', current.durationMinutes*60, $('#companyTimer'), ()=> evaluate(current.questions,'companyq',$('#companyResult'),current.id));
  $('#companySubmit').onclick = () => { clearInterval(state.timers.company); evaluate(current.questions,'companyq',$('#companyResult'),current.id); };
}

function renderFooter(){
  $('#footerDate').textContent = APP_DATA.feedback.date;
  $('#footerName').textContent = APP_DATA.feedback.name;
  $('#footerEmail').textContent = APP_DATA.feedback.email;
  $('#footerEmailLink').href = 'mailto:' + APP_DATA.feedback.email;
  $('#feedbackText').value = localStorage.getItem(FEEDBACK_KEY) || '';
  $('#feedbackText').oninput = e => localStorage.setItem(FEEDBACK_KEY, e.target.value);
}
function bindGlobal(){
  $('#menuBtn').onclick = ()=> $('#sidebar').classList.toggle('open');
  $('#resetBtn').onclick = ()=> { if(confirm('Reset saved progress and feedback?')){ localStorage.removeItem(STORAGE_KEY); localStorage.removeItem(FEEDBACK_KEY); location.reload(); } };
}

function init(){
  renderNav(); renderDashboard(); renderRoadmap(); renderPractice('analytical'); renderPractice('logical'); renderTechnical(); renderFlashcards(); renderMocktests(); renderVideos(); renderResume(); renderHR(); renderTasks(); renderCompany(); renderFooter(); bindGlobal(); switchPage(state.currentPage);
}
document.addEventListener('DOMContentLoaded', init);