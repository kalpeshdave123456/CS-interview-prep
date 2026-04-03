const STORAGE_KEY = 'cs_interview_prep_pro_v3';
const state = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
state.page = state.page || 'dashboard';
state.flashIndex = state.flashIndex || 0;
state.flashShowBack = false;
state.technicalArea = state.technicalArea || 'dsa';
state.practice = state.practice || {
  analytical: { topic: 'All', level: 'All', company: 'All', loadedIds: [] },
  logical: { topic: 'All', level: 'All', company: 'All', loadedIds: [] },
  technical: { area: 'All', level: 'All', loadedIds: [] }
};
state.currentMockId = state.currentMockId || APP_DATA.mockTests[0].id;
state.currentCompanyId = state.currentCompanyId || APP_DATA.companyTests[0].id;
state.testHistory = state.testHistory || [];
state.completedTasks = state.completedTasks || {};
state.revisedFlashcards = state.revisedFlashcards || {};
state.feedback = state.feedback || '';
state.timers = state.timers || {};

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const save = () => localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const uniq = arr => [...new Set(arr)];

function pageLabel(id) { return APP_DATA.nav.find(x => x.id === id)?.label || 'Dashboard'; }
function fmt(sec) { return `${String(Math.floor(sec / 60)).padStart(2,'0')}:${String(sec % 60).padStart(2,'0')}`; }
function getByIds(pool, ids) { const map = new Map(pool.map(x => [x.id, x])); return ids.map(id => map.get(id)).filter(Boolean); }
function seededPick(pool, count, seed) { return shuffleWithSeed(pool, seed).slice(0, Math.min(count, pool.length)); }

function renderNav() {
  $('#nav').innerHTML = APP_DATA.nav.map(item => `<button class="nav-btn ${item.id === state.page ? 'active' : ''}" data-page="${item.id}">${esc(item.label)}</button>`).join('');
  $$('.nav-btn').forEach(btn => btn.onclick = () => switchPage(btn.dataset.page));
}

function switchPage(id) {
  state.page = id;
  save();
  $$('.page').forEach(p => p.classList.toggle('active', p.id === id));
  $('#pageTitle').textContent = pageLabel(id);
  renderNav();
  renderCurrentPage();
  $('#sidebar').classList.remove('open');
}

function stats() {
  return {
    flashcards: Object.values(state.revisedFlashcards).filter(Boolean).length,
    tests: state.testHistory.length,
    tasks: Object.values(state.completedTasks).filter(Boolean).length
  };
}

function renderDashboard() {
  const s = stats();
  $('#dashboard').innerHTML = `
    <div class="hero">
      <div class="card">
        <div class="eyebrow">Final professional tool</div>
        <h3>CS fresher interview preparation portal</h3>
        <p class="muted">Includes 200+ analytical MCQs, 200+ logical MCQs, technical prep across DSA/DBMS/OS/OOPs/CN/C++/Python/Perl, 25 timed mock tests, and distinct company mini-tests for GOOG, MSFT, AMD, NVIDIA, TCS, and Infosys.</p>
        <div class="select-row">
          <button class="btn" data-jump="technical">Start Technical Prep</button>
          <button class="btn btn-secondary" data-jump="company">Company Mini-Test</button>
          <button class="btn btn-secondary" data-jump="mocktests">Take 30-Min Mock</button>
        </div>
      </div>
      <div class="grid">
        <div class="card"><div class="eyebrow">Flashcards Revised</div><div class="stat">${s.flashcards}</div></div>
        <div class="card"><div class="eyebrow">Tests Attempted</div><div class="stat">${s.tests}</div></div>
        <div class="card"><div class="eyebrow">Tasks Completed</div><div class="stat">${s.tasks}</div></div>
      </div>
    </div>
    <div class="grid grid-3">
      <div class="card"><h4>Technical-heavy</h4><p class="muted">Company tests and mocks now prioritize DSA + core CS over math-heavy questioning.</p></div>
      <div class="card"><h4>Role-aligned</h4><p class="muted">Separate sets for service-company and product-company style preparation.</p></div>
      <div class="card"><h4>Execution focused</h4><p class="muted">Study -> solve -> review -> revise flow, all inside one GitHub-ready app.</p></div>
    </div>`;
  $$('[data-jump]').forEach(btn => btn.onclick = () => switchPage(btn.dataset.jump));
}

function renderRoadmap() {
  $('#roadmap').innerHTML = `<div class="grid grid-2">${APP_DATA.roadmap.map(r => `
    <div class="roadmap-item">
      <div class="eyebrow">${esc(r.week)}</div>
      <h3>${esc(r.title)}</h3>
      <ul>${r.points.map(p => `<li>${esc(p)}</li>`).join('')}</ul>
    </div>`).join('')}</div>`;
}

function selectOptions(values, current) {
  return values.map(v => `<option value="${esc(v)}" ${v === current ? 'selected' : ''}>${esc(v)}</option>`).join('');
}

function renderMcqCards(questions, groupPrefix) {
  return questions.map((q, i) => `
    <div class="q-card">
      <div class="tags">
        ${q.topic ? `<span class="tag">${esc(q.topic)}</span>` : ''}
        ${q.area ? `<span class="tag">${esc(q.area)}</span>` : ''}
        ${q.company ? `<span class="tag">${esc(q.company)}</span>` : ''}
        ${q.level ? `<span class="tag">${esc(q.level)}</span>` : ''}
      </div>
      <h4>Q${i + 1}. ${esc(q.q)}</h4>
      <div class="option-list">
        ${q.options.map(opt => `<label class="option"><input type="radio" name="${groupPrefix}_${i}" value="${esc(opt)}"> <span>${esc(opt)}</span></label>`).join('')}
      </div>
    </div>`).join('');
}

function evaluateSet(questions, groupPrefix, resultEl, testLabel) {
  if (!questions.length) {
    resultEl.innerHTML = `<div class="result-box"><h3>No questions loaded</h3><p class="muted">Use the controls above to load a question set first.</p></div>`;
    return;
  }
  let score = 0;
  const review = questions.map((q, i) => {
    const selected = document.querySelector(`input[name="${groupPrefix}_${i}"]:checked`)?.value || 'Not answered';
    const correct = selected === q.answer;
    if (correct) score++;
    return `<div class="review-item ${correct ? 'correct' : 'incorrect'}">
      <strong>Q${i+1}. ${esc(q.q)}</strong>
      <div>Your answer: <b>${esc(selected)}</b></div>
      <div>Correct answer: <b>${esc(q.answer)}</b></div>
      <p class="muted">${esc(q.explanation)}</p>
    </div>`;
  }).join('');
  state.testHistory.push({ label: testLabel, score, total: questions.length, at: new Date().toISOString() });
  save();
  resultEl.innerHTML = `<div class="result-box"><h3>Score: ${score}/${questions.length}</h3><p class="muted">Review every miss below and maintain an error notebook.</p></div>${review}`;
}

function renderPracticePage(pageId, pool, title, description, count = 20) {
  const key = pageId;
  const conf = state.practice[key];
  const topics = ['All', ...uniq(pool.map(q => q.topic))];
  const levels = ['All', ...uniq(pool.map(q => q.level))];
  const companies = ['All', ...uniq(pool.map(q => q.company))];
  const loaded = getByIds(pool, conf.loadedIds);
  $(`#${pageId}`).innerHTML = `
    <div class="card">
      <div class="eyebrow">Practice Bank</div>
      <h3>${esc(title)}</h3>
      <p class="muted">${esc(description)}</p>
      <div class="select-row compact">
        <select id="${pageId}Topic">${selectOptions(topics, conf.topic)}</select>
        <select id="${pageId}Level">${selectOptions(levels, conf.level)}</select>
        <select id="${pageId}Company">${selectOptions(companies, conf.company)}</select>
        <button class="btn" id="${pageId}LoadBtn">Load Set</button>
        <button class="btn btn-secondary" id="${pageId}SubmitBtn">Submit</button>
      </div>
      <p class="muted small">Question count: ${pool.length}. Current loaded set: ${loaded.length || count} questions.</p>
    </div>
    <div id="${pageId}Questions">${renderMcqCards(loaded, pageId)}</div>
    <div id="${pageId}Result"></div>`;

  $(`#${pageId}Topic`).onchange = e => { conf.topic = e.target.value; save(); };
  $(`#${pageId}Level`).onchange = e => { conf.level = e.target.value; save(); };
  $(`#${pageId}Company`).onchange = e => { conf.company = e.target.value; save(); };
  $(`#${pageId}LoadBtn`).onclick = () => {
    const filtered = pool.filter(q => (conf.topic === 'All' || q.topic === conf.topic) && (conf.level === 'All' || q.level === conf.level) && (conf.company === 'All' || q.company === conf.company));
    const chosen = seededPick(filtered, count, filtered.length + pool.length + title.length);
    conf.loadedIds = chosen.map(q => q.id);
    save();
    renderCurrentPage();
  };
  $(`#${pageId}SubmitBtn`).onclick = () => evaluateSet(getByIds(pool, conf.loadedIds), pageId, $(`#${pageId}Result`), title);

  if (!loaded.length) {
    const defaultSet = seededPick(pool, count, pool.length + title.length);
    conf.loadedIds = defaultSet.map(q => q.id);
    save();
    renderCurrentPage();
  }
}

function renderTechnical() {
  const areaKey = state.technicalArea;
  const bank = APP_DATA.technicalBanks[areaKey];
  const pool = APP_DATA.technicalMcqs;
  const conf = state.practice.technical;
  const areas = ['All', ...uniq(pool.map(q => q.area))];
  const levels = ['All', ...uniq(pool.map(q => q.level))];
  const loaded = getByIds(pool, conf.loadedIds);
  $('#technical').innerHTML = `
    <div class="grid grid-2">
      <div class="card">
        <div class="eyebrow">Topic coverage</div>
        <h3>Comprehensive technical preparation</h3>
        <p class="muted">Core topics included: DSA, DBMS, OS, OOPs, Computer Networks, C++, Python, and Perl.</p>
        <div class="pill-row">${Object.keys(APP_DATA.technicalBanks).map(k => `<button class="pill ${k===areaKey?'active':''}" data-area="${k}">${esc(APP_DATA.technicalBanks[k].title)}</button>`).join('')}</div>
        <div class="sub-card">
          <h4>${esc(bank.title)}</h4>
          <p class="muted">${esc(bank.summary)}</p>
          <ul>${bank.mustKnow.map(x => `<li>${esc(x)}</li>`).join('')}</ul>
        </div>
      </div>
      <div class="card">
        <div class="eyebrow">Technical MCQ Bank</div>
        <h3>Practice core CS + language questions</h3>
        <div class="select-row compact">
          <select id="technicalAreaFilter">${selectOptions(areas, conf.area)}</select>
          <select id="technicalLevelFilter">${selectOptions(levels, conf.level)}</select>
          <button class="btn" id="technicalLoadBtn">Load Set</button>
          <button class="btn btn-secondary" id="technicalSubmitBtn">Submit</button>
        </div>
        <p class="muted small">Use this bank for quick checks after reading each area.</p>
      </div>
    </div>
    <div id="technicalQuestions">${renderMcqCards(loaded, 'technical')}</div>
    <div id="technicalResult"></div>`;

  $$('.pill').forEach(btn => btn.onclick = () => { state.technicalArea = btn.dataset.area; save(); renderTechnical(); });
  $('#technicalAreaFilter').onchange = e => { conf.area = e.target.value; save(); };
  $('#technicalLevelFilter').onchange = e => { conf.level = e.target.value; save(); };
  $('#technicalLoadBtn').onclick = () => {
    const filtered = pool.filter(q => (conf.area === 'All' || q.area === conf.area) && (conf.level === 'All' || q.level === conf.level));
    const chosen = seededPick(filtered, 15, filtered.length + 77);
    conf.loadedIds = chosen.map(q => q.id);
    save();
    renderTechnical();
  };
  $('#technicalSubmitBtn').onclick = () => evaluateSet(getByIds(pool, conf.loadedIds), 'technical', $('#technicalResult'), 'Technical MCQ Bank');

  if (!loaded.length) {
    const starter = seededPick(pool.filter(q => q.area === bank.title), 12, 88);
    conf.loadedIds = starter.map(q => q.id);
    save();
    renderTechnical();
  }
}

function renderFlashcards() {
  const cards = APP_DATA.flashcards;
  const current = cards[state.flashIndex % cards.length];
  const revised = !!state.revisedFlashcards[current.id];
  $('#flashcards').innerHTML = `
    <div class="card flash-wrap">
      <div class="eyebrow">Quick revision</div>
      <h3>Flashcards</h3>
      <div class="flashcard ${state.flashShowBack ? 'flipped' : ''}" id="flashcard">
        <div class="flash-face"><div class="flash-label">Front</div><h4>${esc(current.front)}</h4></div>
        <div class="flash-face back"><div class="flash-label">Back</div><p>${esc(current.back)}</p></div>
      </div>
      <div class="select-row compact">
        <button class="btn btn-secondary" id="prevFlash">Prev</button>
        <button class="btn" id="flipFlash">Flip</button>
        <button class="btn btn-secondary" id="nextFlash">Next</button>
        <button class="btn ${revised ? 'btn-secondary' : ''}" id="markRev">${revised ? 'Revised' : 'Mark Revised'}</button>
      </div>
    </div>`;
  $('#flashcard').onclick = () => { state.flashShowBack = !state.flashShowBack; save(); renderFlashcards(); };
  $('#flipFlash').onclick = () => { state.flashShowBack = !state.flashShowBack; save(); renderFlashcards(); };
  $('#prevFlash').onclick = () => { state.flashIndex = (state.flashIndex - 1 + cards.length) % cards.length; state.flashShowBack = false; save(); renderFlashcards(); };
  $('#nextFlash').onclick = () => { state.flashIndex = (state.flashIndex + 1) % cards.length; state.flashShowBack = false; save(); renderFlashcards(); };
  $('#markRev').onclick = () => { state.revisedFlashcards[current.id] = true; save(); renderFlashcards(); };
}

function startTimer(containerId, key, minutes) {
  const total = minutes * 60;
  if (!state.timers[key]) state.timers[key] = total;
  save();
  const el = $(`#${containerId}`);
  clearInterval(window[`timer_${key}`]);
  el.textContent = fmt(state.timers[key]);
  window[`timer_${key}`] = setInterval(() => {
    if (state.timers[key] <= 0) {
      clearInterval(window[`timer_${key}`]);
      el.textContent = '00:00';
      return;
    }
    state.timers[key] -= 1;
    el.textContent = fmt(state.timers[key]);
    save();
  }, 1000);
}

function renderMockTests() {
  const current = APP_DATA.mockTests.find(m => m.id === state.currentMockId) || APP_DATA.mockTests[0];
  $('#mocktests').innerHTML = `
    <div class="card">
      <div class="eyebrow">Timed mocks</div>
      <h3>25 mock tests · 25 questions · 30 minutes</h3>
      <div class="select-row compact">
        <select id="mockSelect">${APP_DATA.mockTests.map(m => `<option value="${m.id}" ${m.id===current.id?'selected':''}>${esc(m.title)} · ${esc(m.companyFocus)}</option>`).join('')}</select>
        <button class="btn" id="mockStartBtn">Start Timer</button>
        <span class="timer-pill" id="mockTimer"></span>
        <button class="btn btn-secondary" id="mockSubmitBtn">Submit</button>
      </div>
      <p class="muted small">Composition: ${esc(current.composition)} · Company tilt: ${esc(current.companyFocus)}</p>
    </div>
    <div id="mockQuestions">${renderMcqCards(current.questions, current.id)}</div>
    <div id="mockResult"></div>`;
  $('#mockSelect').onchange = e => { state.currentMockId = e.target.value; state.timers[`mock_${e.target.value}`] = APP_DATA.mockTests.find(m => m.id === e.target.value).durationMinutes * 60; save(); renderMockTests(); };
  $('#mockStartBtn').onclick = () => startTimer('mockTimer', `mock_${current.id}`, current.durationMinutes);
  $('#mockSubmitBtn').onclick = () => evaluateSet(current.questions, current.id, $('#mockResult'), current.title);
  $('#mockTimer').textContent = fmt(state.timers[`mock_${current.id}`] ?? current.durationMinutes * 60);
}

function renderVideos() {
  $('#videos').innerHTML = `
    <div class="grid grid-2">${Object.entries(APP_DATA.videos).map(([key, items]) => `
      <div class="card">
        <div class="eyebrow">${esc(key.toUpperCase())}</div>
        <h3>${esc(key === 'corecs' ? 'Core CS Resources' : key === 'cpppython' ? 'C++ / Python / Perl' : key === 'resumehr' ? 'Resume + HR' : key === 'dsa' ? 'DSA' : 'Aptitude + Logic')}</h3>
        <ul class="link-list">${items.map(v => `<li><a href="${esc(v.url)}" target="_blank" rel="noopener noreferrer">${esc(v.title)}</a><p class="muted">${esc(v.note)}</p></li>`).join('')}</ul>
      </div>`).join('')}</div>`;
}

function renderResume() {
  $('#resume').innerHTML = `
    <div class="grid grid-2">
      <div class="card"><div class="eyebrow">Resume strategy</div><h3>What to fix before applying</h3><ul>
        <li>Keep it one page for fresher roles.</li><li>Use action verbs and measurable project bullets.</li><li>Put strongest projects first.</li><li>List only real, interview-defensible skills.</li><li>Add GitHub/LinkedIn if clean and relevant.</li><li>Remove vague soft-skill fillers.</li></ul></div>
      <div class="card"><div class="eyebrow">Strong bullet format</div><h3>Use this template</h3><p class="muted"><b>Built</b> / <b>designed</b> / <b>optimized</b> + what you made + tech stack + impact.</p><div class="sub-card"><p>Example: Built a Python-based log analyzer using regex and dictionaries, reducing manual triage time by 40% on sample datasets.</p></div></div>
    </div>`;
}

function renderHR() {
  $('#hr').innerHTML = `
    <div class="grid grid-2">
      <div class="card"><div class="eyebrow">Common prompts</div><h3>Prepare these answers</h3><ul>
        <li>Tell me about yourself.</li><li>Why should we hire you?</li><li>Explain your best project.</li><li>Where did you face difficulty and how did you solve it?</li><li>Why this company?</li><li>Your strengths and one real weakness.</li></ul></div>
      <div class="card"><div class="eyebrow">Answer framework</div><h3>Keep it concise</h3><p class="muted">Present -> past -> project -> role fit. Use STAR for stories. Avoid memorized robotic wording.</p><div class="sub-card"><p>For project answers, speak problem, approach, tech choices, your contribution, challenge, and result.</p></div></div>
    </div>`;
}

function renderTasks() {
  $('#tasks').innerHTML = `<div class="card"><div class="eyebrow">Execution checklist</div><h3>Daily and weekly tasks</h3><div class="task-list">${APP_DATA.tasks.map((t, i) => `
    <label class="task-item"><input type="checkbox" data-task="${i}" ${state.completedTasks[i] ? 'checked' : ''}> <span>${esc(t)}</span></label>`).join('')}</div></div>`;
  $$('[data-task]').forEach(cb => cb.onchange = e => { state.completedTasks[e.target.dataset.task] = e.target.checked; save(); });
}

function renderCompany() {
  const current = APP_DATA.companyTests.find(c => c.id === state.currentCompanyId) || APP_DATA.companyTests[0];
  $('#company').innerHTML = `
    <div class="card">
      <div class="eyebrow">Company-specific mini-tests</div>
      <h3>Distinct question sets by company</h3>
      <div class="select-row compact">
        <select id="companySelect">${APP_DATA.companyTests.map(c => `<option value="${c.id}" ${c.id===current.id?'selected':''}>${esc(c.title)}</option>`).join('')}</select>
        <button class="btn" id="companyStartBtn">Start Timer</button>
        <span class="timer-pill" id="companyTimer"></span>
        <button class="btn btn-secondary" id="companySubmitBtn">Submit</button>
      </div>
      <p class="muted small">Focus: ${esc(current.focus)}</p>
    </div>
    <div id="companyQuestions">${renderMcqCards(current.questions, current.id)}</div>
    <div id="companyResult"></div>`;
  $('#companySelect').onchange = e => { state.currentCompanyId = e.target.value; state.timers[`company_${e.target.value}`] = APP_DATA.companyTests.find(c => c.id === e.target.value).durationMinutes * 60; save(); renderCompany(); };
  $('#companyStartBtn').onclick = () => startTimer('companyTimer', `company_${current.id}`, current.durationMinutes);
  $('#companySubmitBtn').onclick = () => evaluateSet(current.questions, current.id, $('#companyResult'), current.title);
  $('#companyTimer').textContent = fmt(state.timers[`company_${current.id}`] ?? current.durationMinutes * 60);
}

function renderFooter() {
  $('#footerDate').textContent = APP_DATA.today;
  $('#footerName').textContent = APP_DATA.owner.name;
  $('#footerEmail').textContent = APP_DATA.owner.email;
  $('#footerEmailLink').href = `mailto:${APP_DATA.owner.email}`;
  $('#feedbackText').value = state.feedback || '';
  $('#feedbackText').oninput = e => { state.feedback = e.target.value; save(); };
}

function renderCurrentPage() {
  if (state.page === 'dashboard') renderDashboard();
  if (state.page === 'roadmap') renderRoadmap();
  if (state.page === 'analytical') renderPracticePage('analytical', APP_DATA.analyticalQuestions, 'Analytical Practice Bank', '200+ MCQs across aptitude topics, companies, and difficulty levels.', 20);
  if (state.page === 'logical') renderPracticePage('logical', APP_DATA.logicalQuestions, 'Logical Practice Bank', '200+ reasoning MCQs with correctness checks and detailed explanations.', 20);
  if (state.page === 'technical') renderTechnical();
  if (state.page === 'flashcards') renderFlashcards();
  if (state.page === 'mocktests') renderMockTests();
  if (state.page === 'videos') renderVideos();
  if (state.page === 'resume') renderResume();
  if (state.page === 'hr') renderHR();
  if (state.page === 'tasks') renderTasks();
  if (state.page === 'company') renderCompany();
}

function init() {
  renderNav();
  switchPage(state.page);
  renderFooter();
  $('#menuBtn').onclick = () => $('#sidebar').classList.toggle('open');
  $('#resetBtn').onclick = () => {
    localStorage.removeItem(STORAGE_KEY);
    location.reload();
  };
}

document.addEventListener('DOMContentLoaded', init);
