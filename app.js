const state = {
  progress: JSON.parse(localStorage.getItem('csInterviewPrepProgress') || '{}'),
  currentSection: 'dashboard',
  tech: 'cpp',
  flashcat: 'All',
  flashIndex: 0,
  currentMock: APP_DATA.mockTests[0].id,
  currentCompany: APP_DATA.companyTests[0].id
};

function saveProgress() {
  localStorage.setItem('csInterviewPrepProgress', JSON.stringify(state.progress));
}

function $(sel, root = document) { return root.querySelector(sel); }
function $all(sel, root = document) { return Array.from(root.querySelectorAll(sel)); }

function updateStats() {
  const revised = state.progress.revisedCards || 0;
  const tests = (state.progress.testsAttempted || []).length;
  const tasks = Object.keys(state.progress.tasks || {}).filter(k => state.progress.tasks[k]).length +
                Object.keys(state.progress.interviewDay || {}).filter(k => state.progress.interviewDay[k]).length;
  const denominator = APP_DATA.flashcards.length + APP_DATA.tasks.length + APP_DATA.interviewDay.length + 12;
  const achieved = revised + tasks + tests * 2;
  const pct = Math.min(100, Math.round((achieved / denominator) * 100));
  $('#cardsRevisedCount').textContent = revised;
  $('#testsAttemptedCount').textContent = tests;
  $('#tasksCompletedCount').textContent = tasks;
  $('#overallProgress').textContent = `${pct}%`;
}

function switchSection(sectionId) {
  state.currentSection = sectionId;
  $all('.content-section').forEach(s => s.classList.toggle('active', s.id === sectionId));
  $all('.nav-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.section === sectionId));
  $('#sectionTitle').textContent = $(`.nav-btn[data-section="${sectionId}"]`).textContent;
  if (window.innerWidth <= 980) $('#sidebar').classList.remove('open');
}

function renderDashboard() {
  $('#todayFocus').innerHTML = APP_DATA.todayFocus.map(item => `<div class="item-card"><h5>${item}</h5></div>`).join('');
  $('#moduleGrid').innerHTML = APP_DATA.modules.map(m => `<div class="module-card"><h5>${m.title}</h5><p>${m.desc}</p></div>`).join('');
}

function renderRoadmap() {
  $('#roadmapGrid').innerHTML = APP_DATA.roadmap.map(w => `
    <div class="roadmap-card">
      <div class="week-tag">${w.week}</div>
      <h4>${w.title}</h4>
      <p>${w.points.join(' • ')}</p>
    </div>
  `).join('');
}

function renderAnalytical() {
  $('#analyticalConcepts').innerHTML = APP_DATA.analyticalConcepts.map((c, i) => `
    <div class="accordion-item ${i===0?'open':''}">
      <button class="accordion-btn">${c.title}<span>+</span></button>
      <div class="accordion-content">${c.content}</div>
    </div>`).join('');
  $('#formulaBoard').innerHTML = APP_DATA.formulas.map(f => `<div class="formula-item"><strong>${f.topic}</strong><code>${f.formula}</code></div>`).join('');
  $all('.accordion-btn').forEach(btn => btn.addEventListener('click', () => btn.parentElement.classList.toggle('open')));
}

function renderLogical() {
  $('#logicalPacks').innerHTML = APP_DATA.logicalPacks.map(l => `<div class="logic-card"><h5>${l.title}</h5><p>${l.desc}</p></div>`).join('');
}

function renderTech() {
  const data = APP_DATA.tech[state.tech];
  $('#techTitle').textContent = data.title;
  $('#techContent').innerHTML = `<div class="tech-list">${data.sections.map(sec => `
      <div class="tech-section"><h5>${sec.heading}</h5><ul>${sec.items.map(i => `<li>${i}</li>`).join('')}</ul></div>`).join('')}
    </div>`;
  $all('.tech-tab').forEach(btn => btn.classList.toggle('active', btn.dataset.tech === state.tech));
}

function flashcardPool() {
  return state.flashcat === 'All' ? APP_DATA.flashcards : APP_DATA.flashcards.filter(c => c.cat === state.flashcat);
}

function renderFlashcardCategories() {
  const cats = ['All', ...new Set(APP_DATA.flashcards.map(f => f.cat))];
  $('#flashcardCategory').innerHTML = cats.map(c => `<option ${state.flashcat===c?'selected':''}>${c}</option>`).join('');
}

function renderFlashcard() {
  const pool = flashcardPool();
  if (!pool.length) return;
  const idx = ((state.flashIndex % pool.length) + pool.length) % pool.length;
  state.flashIndex = idx;
  const card = pool[idx];
  $('#flashcardBadge').textContent = card.cat;
  $('#flashcardQuestion').textContent = card.q;
  $('#flashcardAnswer').textContent = card.a;
  $('#flashcard').classList.remove('flipped');
}

function renderMockSelector() {
  $('#mockSelector').innerHTML = APP_DATA.mockTests.map(t => `<option value="${t.id}" ${state.currentMock===t.id?'selected':''}>${t.title}</option>`).join('');
}

function renderMock() {
  const mock = APP_DATA.mockTests.find(t => t.id === state.currentMock);
  $('#mockMeta').textContent = `${mock.desc} • Suggested duration: ${mock.duration} • ${mock.questions.length} questions`;
  $('#mockForm').innerHTML = mock.questions.map((q, i) => `
    <div class="question-card">
      <h5>Q${i+1}. ${q.q}</h5>
      ${q.options.map(opt => `<label class="option-label"><input type="radio" name="mock_q_${i}" value="${escapeHtml(opt)}"> ${opt}</label>`).join('')}
    </div>`).join('');
  $('#mockResult').innerHTML = '';
}

function evaluateQuiz(questions, prefix, resultNode, testKey) {
  let score = 0;
  const review = questions.map((q, i) => {
    const selected = document.querySelector(`input[name="${prefix}_${i}"]:checked`)?.value || '';
    const correct = selected === q.answer;
    if (correct) score++;
    return { ...q, selected, correct };
  });
  const pct = Math.round((score / questions.length) * 100);
  let cls = 'result-bad';
  let label = 'Needs work';
  if (pct >= 80) { cls = 'result-good'; label = 'Excellent'; }
  else if (pct >= 60) { cls = 'result-warn'; label = 'Good, but sharpen more'; }
  resultNode.innerHTML = `
    <h4 class="${cls}">${label}: ${score}/${questions.length} (${pct}%)</h4>
    <div class="stack-list">
      ${review.map((r, i) => `<div class="item-card"><h5>Q${i+1}. ${r.correct ? '✅' : '❌'} ${r.q}</h5><p>Your answer: ${r.selected || 'Not attempted'}<br>Correct answer: ${r.answer}<br>Why: ${r.explain}</p></div>`).join('')}
    </div>`;

  state.progress.testsAttempted = state.progress.testsAttempted || [];
  state.progress.testsAttempted.push({ key: testKey, score, total: questions.length, date: new Date().toISOString() });
  saveProgress();
  updateStats();
}

function renderVideos() {
  $('#videoGrid').innerHTML = APP_DATA.videos.map(v => `
    <div class="video-card">
      <h5>${v.title}</h5>
      <div class="video-meta">${v.type} • ${v.duration}</div>
      <p>${v.reason}</p>
      <p><a href="${v.url}" target="_blank" rel="noopener noreferrer">Open YouTube results</a></p>
    </div>`).join('');
}

function renderResume() {
  $('#resumeChecklist').innerHTML = APP_DATA.resumeChecklist.map((item, idx) => `
    <label class="check-item"><input type="checkbox" data-group="resume" data-id="resume_${idx}" ${state.progress.resume?.[`resume_${idx}`] ? 'checked' : ''}><div class="check-text"><strong>${item.title}</strong><span>${item.desc}</span></div></label>`).join('');
  $('#resumeBullets').innerHTML = APP_DATA.resumeBullets.map(b => `<div class="resume-bullet"><h5>${b.title}</h5><p>${b.desc}</p></div>`).join('');
}

function renderHR() {
  $('#hrGrid').innerHTML = APP_DATA.hr.map(h => `<div class="hr-card"><h5>${h.title}</h5><p>${h.desc}</p></div>`).join('');
}

function renderTasks() {
  $('#taskList').innerHTML = APP_DATA.tasks.map(task => `
    <label class="check-item"><input type="checkbox" data-group="tasks" data-id="${task.id}" ${state.progress.tasks?.[task.id] ? 'checked' : ''}><div class="check-text"><strong>${task.title}</strong><span>${task.desc}</span></div></label>`).join('');
  $('#interviewDayChecklist').innerHTML = APP_DATA.interviewDay.map(task => `
    <label class="check-item"><input type="checkbox" data-group="interviewDay" data-id="${task.id}" ${state.progress.interviewDay?.[task.id] ? 'checked' : ''}><div class="check-text"><strong>${task.title}</strong><span>${task.desc}</span></div></label>`).join('');
}

function renderCompanySelector() {
  $('#companySelector').innerHTML = APP_DATA.companyTests.map(c => `<option value="${c.id}" ${state.currentCompany===c.id?'selected':''}>${c.name}</option>`).join('');
}

function renderCompanyTest() {
  const company = APP_DATA.companyTests.find(c => c.id === state.currentCompany);
  $('#companyIntro').textContent = company.intro;
  $('#companyForm').innerHTML = company.questions.map((q, i) => `
    <div class="question-card">
      <h5>Q${i+1}. ${q.q}</h5>
      ${q.options.map(opt => `<label class="option-label"><input type="radio" name="company_q_${i}" value="${escapeHtml(opt)}"> ${opt}</label>`).join('')}
    </div>`).join('');
  $('#companyResult').innerHTML = '';
}

function escapeHtml(text) {
  return text.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
}

function bindChecklistPersistence() {
  document.body.addEventListener('change', (e) => {
    const target = e.target;
    if (target.matches('input[type="checkbox"][data-group]')) {
      const group = target.dataset.group;
      state.progress[group] = state.progress[group] || {};
      state.progress[group][target.dataset.id] = target.checked;
      saveProgress();
      updateStats();
    }
  });
}

function bindEvents() {
  $all('.nav-btn').forEach(btn => btn.addEventListener('click', () => switchSection(btn.dataset.section)));
  $all('.quick-nav').forEach(btn => btn.addEventListener('click', () => switchSection(btn.dataset.target)));
  $('#mobileMenu').addEventListener('click', () => $('#sidebar').classList.toggle('open'));
  $all('.tech-tab').forEach(btn => btn.addEventListener('click', () => { state.tech = btn.dataset.tech; renderTech(); }));
  $('#flashcardCategory').addEventListener('change', (e) => { state.flashcat = e.target.value; state.flashIndex = 0; renderFlashcard(); });
  $('#flashcard').addEventListener('click', () => $('#flashcard').classList.toggle('flipped'));
  $('#prevCard').addEventListener('click', () => { state.flashIndex--; renderFlashcard(); });
  $('#nextCard').addEventListener('click', () => { state.flashIndex++; renderFlashcard(); });
  $('#markRevised').addEventListener('click', () => {
    state.progress.revisedCards = (state.progress.revisedCards || 0) + 1;
    saveProgress(); updateStats();
  });
  $('#mockSelector').addEventListener('change', e => { state.currentMock = e.target.value; renderMock(); });
  $('#submitMock').addEventListener('click', () => {
    const mock = APP_DATA.mockTests.find(t => t.id === state.currentMock);
    evaluateQuiz(mock.questions, 'mock_q', $('#mockResult'), mock.id);
  });
  $('#companySelector').addEventListener('change', e => { state.currentCompany = e.target.value; renderCompanyTest(); });
  $('#submitCompany').addEventListener('click', () => {
    const company = APP_DATA.companyTests.find(c => c.id === state.currentCompany);
    evaluateQuiz(company.questions, 'company_q', $('#companyResult'), company.id);
  });
  $('#resetProgress').addEventListener('click', () => {
    localStorage.removeItem('csInterviewPrepProgress');
    state.progress = {};
    renderAll();
  });
  $('#globalSearch').addEventListener('input', e => applySearch(e.target.value.trim()));
}

function applySearch(query) {
  document.querySelectorAll('mark.search-hit').forEach(m => {
    const parent = m.parentNode;
    parent.replaceChild(document.createTextNode(m.textContent), m);
    parent.normalize();
  });
  if (!query) return;
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      if (node.parentElement.closest('script, style')) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });
  const regex = new RegExp(query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'ig');
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(node => {
    if (!regex.test(node.nodeValue)) return;
    const frag = document.createDocumentFragment();
    let lastIndex = 0;
    node.nodeValue.replace(regex, (match, offset) => {
      frag.appendChild(document.createTextNode(node.nodeValue.slice(lastIndex, offset)));
      const mark = document.createElement('mark');
      mark.className = 'search-hit';
      mark.textContent = match;
      frag.appendChild(mark);
      lastIndex = offset + match.length;
      return match;
    });
    frag.appendChild(document.createTextNode(node.nodeValue.slice(lastIndex)));
    node.parentNode.replaceChild(frag, node);
  });
}

function renderAll() {
  renderDashboard();
  renderRoadmap();
  renderAnalytical();
  renderLogical();
  renderTech();
  renderFlashcardCategories();
  renderFlashcard();
  renderMockSelector();
  renderMock();
  renderVideos();
  renderResume();
  renderHR();
  renderTasks();
  renderCompanySelector();
  renderCompanyTest();
  updateStats();
}

renderAll();
bindEvents();
bindChecklistPersistence();
switchSection(state.currentSection);
