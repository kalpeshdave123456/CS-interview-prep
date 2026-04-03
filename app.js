const state = {
  progress: JSON.parse(localStorage.getItem('csInterviewPrepProgress') || '{}'),
  currentSection: 'dashboard',
  tech: 'cpp',
  flashcat: 'All',
  flashIndex: 0,
  currentMock: APP_DATA.mockTests[0].id,
  currentCompany: APP_DATA.companyTests[0].id,
  analyticalFilters: { topic: 'All', level: 'All', company: 'All' },
  logicalFilters: { topic: 'All', level: 'All', company: 'All' },
  analyticalSet: [],
  logicalSet: [],
  mockTimer: null,
  companyTimer: null,
  mockRemaining: APP_DATA.mockTests[0].durationMinutes * 60,
  companyRemaining: 20 * 60,
};

function saveProgress() { localStorage.setItem('csInterviewPrepProgress', JSON.stringify(state.progress)); }
function $(sel, root = document) { return root.querySelector(sel); }
function $all(sel, root = document) { return Array.from(root.querySelectorAll(sel)); }
function escapeHtml(str) { return String(str).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }

function updateStats() {
  const revised = state.progress.revisedCards || 0;
  const tests = (state.progress.testsAttempted || []).length;
  const tasks = Object.values(state.progress.tasks || {}).filter(Boolean).length + Object.values(state.progress.interviewDay || {}).filter(Boolean).length + Object.values(state.progress.resume || {}).filter(Boolean).length;
  const denominator = APP_DATA.flashcards.length + APP_DATA.tasks.length + APP_DATA.interviewDay.length + APP_DATA.resumeChecklist.length + 40;
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
  $('#todayFocus').innerHTML = APP_DATA.todayFocus.map(item => `<div class="item-card"><h5>${escapeHtml(item)}</h5></div>`).join('');
  $('#moduleGrid').innerHTML = APP_DATA.modules.map(m => `<div class="module-card"><h5>${escapeHtml(m.title)}</h5><p>${escapeHtml(m.desc)}</p></div>`).join('');
}

function renderRoadmap() {
  $('#roadmapGrid').innerHTML = APP_DATA.roadmap.map(w => `
    <div class="roadmap-card">
      <div class="week-tag">${escapeHtml(w.week)}</div>
      <h4>${escapeHtml(w.title)}</h4>
      <p>${w.points.map(escapeHtml).join(' • ')}</p>
    </div>`).join('');
}

function renderAnalyticalOverview() {
  $('#analyticalConcepts').innerHTML = APP_DATA.analyticalConcepts.map((c, i) => `
    <div class="accordion-item ${i === 0 ? 'open' : ''}">
      <button class="accordion-btn">${escapeHtml(c.title)}<span>+</span></button>
      <div class="accordion-content">${escapeHtml(c.content)}</div>
    </div>`).join('');
  $('#formulaBoard').innerHTML = APP_DATA.formulas.map(f => `<div class="formula-item"><strong>${escapeHtml(f.topic)}</strong><code>${escapeHtml(f.formula)}</code></div>`).join('');
  $all('.accordion-btn').forEach(btn => btn.addEventListener('click', () => btn.parentElement.classList.toggle('open')));
  $('#analyticalCount').textContent = `${APP_DATA.analyticalQuestions.length} questions in bank • filtered set shows 15 at a time.`;
}

function renderLogicalOverview() {
  $('#logicalPacks').innerHTML = APP_DATA.logicalPacks.map(l => `<div class="logic-card"><h5>${escapeHtml(l.title)}</h5><p>${escapeHtml(l.desc)}</p></div>`).join('');
  $('#logicalCount').textContent = `${APP_DATA.logicalQuestions.length} questions in bank • filtered set shows 15 at a time.`;
}

function renderTech() {
  const data = APP_DATA.tech[state.tech];
  $('#techTitle').textContent = data.title;
  $('#techContent').innerHTML = `<div class="tech-list">${data.sections.map(sec => `
    <div class="tech-section"><h5>${escapeHtml(sec.heading)}</h5><ul>${sec.items.map(i => `<li>${escapeHtml(i)}</li>`).join('')}</ul></div>`).join('')}</div>`;
  $all('.tech-tab').forEach(btn => btn.classList.toggle('active', btn.dataset.tech === state.tech));
}

function flashcardPool() {
  return state.flashcat === 'All' ? APP_DATA.flashcards : APP_DATA.flashcards.filter(c => c.cat === state.flashcat);
}

function renderFlashcardCategories() {
  const cats = ['All', ...new Set(APP_DATA.flashcards.map(f => f.cat))];
  $('#flashcardCategory').innerHTML = cats.map(c => `<option ${state.flashcat === c ? 'selected' : ''}>${escapeHtml(c)}</option>`).join('');
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

function populateQuestionFilters(prefix, questions) {
  const topics = ['All', ...new Set(questions.map(q => q.topic))];
  const levels = ['All', ...new Set(questions.map(q => q.level))];
  const companies = ['All', ...new Set(questions.map(q => q.company))];
  $(`#${prefix}TopicFilter`).innerHTML = topics.map(v => `<option>${escapeHtml(v)}</option>`).join('');
  $(`#${prefix}LevelFilter`).innerHTML = levels.map(v => `<option>${escapeHtml(v)}</option>`).join('');
  $(`#${prefix}CompanyFilter`).innerHTML = companies.map(v => `<option>${escapeHtml(v)}</option>`).join('');
}

function getFilteredQuestions(kind) {
  const filters = state[`${kind}Filters`];
  const source = APP_DATA[`${kind}Questions`];
  return source.filter(q =>
    (filters.topic === 'All' || q.topic === filters.topic) &&
    (filters.level === 'All' || q.level === filters.level) &&
    (filters.company === 'All' || q.company === filters.company)
  );
}

function pickDeterministicSet(arr, size) {
  if (!arr.length) return [];
  const set = [];
  let idx = (arr.length * 7 + size) % arr.length;
  while (set.length < Math.min(size, arr.length)) {
    const q = arr[idx % arr.length];
    if (!set.includes(q)) set.push(q);
    idx += 3;
  }
  return set;
}

function renderPractice(kind) {
  const filtered = getFilteredQuestions(kind);
  const form = $(`#${kind}Form`);
  const result = $(`#${kind}Result`);
  state[`${kind}Set`] = pickDeterministicSet(filtered, 15);
  const set = state[`${kind}Set`];
  form.innerHTML = set.length ? set.map((q, i) => renderQuestionCard(q, `${kind}_q`, i)).join('') : `<div class="item-card"><p>No questions match the selected filters. Change filters and load again.</p></div>`;
  result.innerHTML = '';
}

function renderQuestionCard(q, prefix, i) {
  return `
    <div class="question-card">
      <div class="question-tags">
        <span class="mini-pill">${escapeHtml(q.topic)}</span>
        <span class="mini-pill">${escapeHtml(q.level)}</span>
        <span class="mini-pill">${escapeHtml(q.company)}</span>
      </div>
      <h5>Q${i + 1}. ${escapeHtml(q.q)}</h5>
      ${q.options.map(opt => `<label class="option-label"><input type="radio" name="${prefix}_${i}" value="${escapeHtml(opt)}"> ${escapeHtml(opt)}</label>`).join('')}
    </div>`;
}

function evaluateQuiz(questions, prefix, resultNode, testKey, storeAttempt = true) {
  let score = 0;
  const review = questions.map((q, i) => {
    const selected = document.querySelector(`input[name="${prefix}_${i}"]:checked`)?.value || '';
    const correct = selected === q.answer;
    if (correct) score++;
    return { ...q, selected, correct };
  });
  const pct = Math.round((score / Math.max(1, questions.length)) * 100);
  let cls = 'result-bad';
  let label = 'Needs work';
  if (pct >= 80) { cls = 'result-good'; label = 'Excellent'; }
  else if (pct >= 60) { cls = 'result-warn'; label = 'Good, but sharpen more'; }
  resultNode.innerHTML = `
    <h4 class="${cls}">${label}: ${score}/${questions.length} (${pct}%)</h4>
    <div class="stack-list">
      ${review.map((r, i) => `<div class="item-card"><h5>Q${i + 1}. ${r.correct ? '✅' : '❌'} ${escapeHtml(r.q)}</h5><p><strong>Your answer:</strong> ${escapeHtml(r.selected || 'Not attempted')}<br><strong>Correct answer:</strong> ${escapeHtml(r.answer)}<br><strong>Explanation:</strong> ${escapeHtml(r.explain)}</p></div>`).join('')}
    </div>`;
  if (storeAttempt) {
    state.progress.testsAttempted = state.progress.testsAttempted || [];
    state.progress.testsAttempted.push({ key: testKey, score, total: questions.length, date: new Date().toISOString() });
    saveProgress();
    updateStats();
  }
}

function renderMockSelector() {
  $('#mockSelector').innerHTML = APP_DATA.mockTests.map(t => `<option value="${t.id}" ${state.currentMock === t.id ? 'selected' : ''}>${escapeHtml(t.title)}</option>`).join('');
}

function formatTime(sec) {
  const m = String(Math.floor(sec / 60)).padStart(2, '0');
  const s = String(sec % 60).padStart(2, '0');
  return `${m}:${s}`;
}

function startTimer(type, totalSeconds, displayId, onExpire) {
  clearInterval(state[`${type}Timer`]);
  state[`${type}Remaining`] = totalSeconds;
  const node = $(displayId);
  node.textContent = formatTime(totalSeconds);
  state[`${type}Timer`] = setInterval(() => {
    state[`${type}Remaining`] -= 1;
    node.textContent = formatTime(Math.max(0, state[`${type}Remaining`]));
    if (state[`${type}Remaining`] <= 0) {
      clearInterval(state[`${type}Timer`]);
      onExpire();
    }
  }, 1000);
}

function renderMock() {
  const mock = APP_DATA.mockTests.find(t => t.id === state.currentMock);
  $('#mockMeta').textContent = `${mock.desc} • 30-minute time limit • ${mock.questions.length} questions`;
  $('#mockForm').innerHTML = mock.questions.map((q, i) => renderQuestionCard(q, 'mock_q', i)).join('');
  $('#mockResult').innerHTML = '';
  startTimer('mock', mock.durationMinutes * 60, '#mockTimer', () => evaluateQuiz(mock.questions, 'mock_q', $('#mockResult'), mock.id));
}

function renderVideos() {
  $('#videoGrid').innerHTML = APP_DATA.videoCategories.map(cat => `
    <div class="video-category glass-lite">
      <h5>${escapeHtml(cat.category)}</h5>
      <div class="video-list">${cat.items.map(v => `
        <div class="video-card">
          <div>
            <h6>${escapeHtml(v.title)}</h6>
            <div class="video-meta">${escapeHtml(v.duration)}</div>
            <p>${escapeHtml(v.reason)}</p>
          </div>
          <a href="${escapeHtml(v.url)}" target="_blank" rel="noopener noreferrer">Open Video</a>
        </div>`).join('')}</div>
    </div>`).join('');
}

function renderResume() {
  $('#resumeChecklist').innerHTML = APP_DATA.resumeChecklist.map((item, idx) => `
    <label class="check-item"><input type="checkbox" data-group="resume" data-id="resume_${idx}" ${state.progress.resume?.[`resume_${idx}`] ? 'checked' : ''}><div class="check-text"><strong>${escapeHtml(item.title)}</strong><span>${escapeHtml(item.desc)}</span></div></label>`).join('');
  $('#resumeBullets').innerHTML = APP_DATA.resumeBullets.map(b => `<div class="resume-bullet"><h5>${escapeHtml(b.title)}</h5><p>${escapeHtml(b.desc)}</p></div>`).join('');
}

function renderHR() {
  $('#hrGrid').innerHTML = APP_DATA.hr.map(item => `<div class="hr-card"><h5>${escapeHtml(item.title)}</h5><p>${escapeHtml(item.desc)}</p></div>`).join('');
}

function renderTasks() {
  $('#taskList').innerHTML = APP_DATA.tasks.map(item => checkMarkup(item, 'tasks')).join('');
  $('#interviewDayChecklist').innerHTML = APP_DATA.interviewDay.map(item => checkMarkup(item, 'interviewDay')).join('');
}

function checkMarkup(item, group) {
  const checked = state.progress[group]?.[item.id] ? 'checked' : '';
  return `<label class="check-item"><input type="checkbox" data-group="${group}" data-id="${escapeHtml(item.id)}" ${checked}><div class="check-text"><strong>${escapeHtml(item.title)}</strong><span>${escapeHtml(item.desc)}</span></div></label>`;
}

function renderCompanySelector() {
  $('#companySelector').innerHTML = APP_DATA.companyTests.map(t => `<option value="${t.id}" ${state.currentCompany === t.id ? 'selected' : ''}>${escapeHtml(t.name)}</option>`).join('');
}

function renderCompanyTest() {
  const company = APP_DATA.companyTests.find(t => t.id === state.currentCompany);
  $('#companyIntro').textContent = `${company.intro} • 10 questions • suggested time: 20 minutes.`;
  $('#companyForm').innerHTML = company.questions.map((q, i) => renderQuestionCard(q, 'company_q', i)).join('');
  $('#companyResult').innerHTML = '';
  startTimer('company', 20 * 60, '#companyTimer', () => evaluateQuiz(company.questions, 'company_q', $('#companyResult'), company.id));
}

function bindCheckboxPersistence() {
  document.addEventListener('change', (e) => {
    if (!e.target.matches('input[type="checkbox"][data-group]')) return;
    const group = e.target.dataset.group;
    const id = e.target.dataset.id;
    state.progress[group] = state.progress[group] || {};
    state.progress[group][id] = e.target.checked;
    saveProgress();
    updateStats();
  });
}

function resetProgress() {
  if (!confirm('Reset all saved progress, checkboxes, feedback, and test history?')) return;
  localStorage.removeItem('csInterviewPrepProgress');
  localStorage.removeItem('csInterviewPrepFeedback');
  location.reload();
}

function applySearch() {
  const term = $('#globalSearch').value.trim().toLowerCase();
  $all('mark.search-hit').forEach(mark => {
    const parent = mark.parentNode;
    parent.replaceChild(document.createTextNode(mark.textContent), mark);
    parent.normalize();
  });
  if (!term) return;
  $all('.content-section.active p, .content-section.active h5, .content-section.active li, .content-section.active strong').forEach(node => {
    const text = node.textContent;
    const idx = text.toLowerCase().indexOf(term);
    if (idx >= 0 && node.childNodes.length === 1) {
      const before = text.slice(0, idx);
      const match = text.slice(idx, idx + term.length);
      const after = text.slice(idx + term.length);
      node.innerHTML = `${escapeHtml(before)}<mark class="search-hit">${escapeHtml(match)}</mark>${escapeHtml(after)}`;
    }
  });
}

function initFooter() {
  $('#footerDate').textContent = APP_DATA.feedback.date;
  $('#footerName').textContent = APP_DATA.feedback.name;
  $('#footerEmail').textContent = APP_DATA.feedback.email;
  const saved = localStorage.getItem('csInterviewPrepFeedback') || '';
  $('#feedbackText').value = saved;
  $('#feedbackText').addEventListener('input', (e) => localStorage.setItem('csInterviewPrepFeedback', e.target.value));
}

function initEvents() {
  $all('.nav-btn').forEach(btn => btn.addEventListener('click', () => switchSection(btn.dataset.section)));
  $all('.quick-nav').forEach(btn => btn.addEventListener('click', () => switchSection(btn.dataset.target)));
  $('#mobileMenu').addEventListener('click', () => $('#sidebar').classList.toggle('open'));
  $('#resetProgress').addEventListener('click', resetProgress);
  $('#globalSearch').addEventListener('input', applySearch);

  $all('.tech-tab').forEach(btn => btn.addEventListener('click', () => { state.tech = btn.dataset.tech; renderTech(); }));
  $('#flashcardCategory').addEventListener('change', (e) => { state.flashcat = e.target.value; state.flashIndex = 0; renderFlashcard(); });
  $('#flashcard').addEventListener('click', () => $('#flashcard').classList.toggle('flipped'));
  $('#prevCard').addEventListener('click', () => { state.flashIndex -= 1; renderFlashcard(); });
  $('#nextCard').addEventListener('click', () => { state.flashIndex += 1; renderFlashcard(); });
  $('#markRevised').addEventListener('click', () => { state.progress.revisedCards = (state.progress.revisedCards || 0) + 1; saveProgress(); updateStats(); });

  ['analytical', 'logical'].forEach(kind => {
    $(`#${kind}TopicFilter`).addEventListener('change', e => { state[`${kind}Filters`].topic = e.target.value; });
    $(`#${kind}LevelFilter`).addEventListener('change', e => { state[`${kind}Filters`].level = e.target.value; });
    $(`#${kind}CompanyFilter`).addEventListener('change', e => { state[`${kind}Filters`].company = e.target.value; });
    $(`#refresh${kind.charAt(0).toUpperCase() + kind.slice(1)}`).addEventListener('click', () => renderPractice(kind));
  });
  $('#submitAnalytical').addEventListener('click', () => evaluateQuiz(state.analyticalSet, 'analytical_q', $('#analyticalResult'), 'analytical_practice'));
  $('#submitLogical').addEventListener('click', () => evaluateQuiz(state.logicalSet, 'logical_q', $('#logicalResult'), 'logical_practice'));

  $('#mockSelector').addEventListener('change', (e) => { state.currentMock = e.target.value; renderMock(); });
  $('#submitMock').addEventListener('click', () => {
    clearInterval(state.mockTimer);
    const mock = APP_DATA.mockTests.find(t => t.id === state.currentMock);
    evaluateQuiz(mock.questions, 'mock_q', $('#mockResult'), mock.id);
  });

  $('#companySelector').addEventListener('change', (e) => { state.currentCompany = e.target.value; renderCompanyTest(); });
  $('#submitCompany').addEventListener('click', () => {
    clearInterval(state.companyTimer);
    const test = APP_DATA.companyTests.find(t => t.id === state.currentCompany);
    evaluateQuiz(test.questions, 'company_q', $('#companyResult'), test.id);
  });
}

function init() {
  renderDashboard();
  renderRoadmap();
  renderAnalyticalOverview();
  renderLogicalOverview();
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
  populateQuestionFilters('analytical', APP_DATA.analyticalQuestions);
  populateQuestionFilters('logical', APP_DATA.logicalQuestions);
  renderPractice('analytical');
  renderPractice('logical');
  bindCheckboxPersistence();
  initFooter();
  initEvents();
  updateStats();
}

document.addEventListener('DOMContentLoaded', init);
