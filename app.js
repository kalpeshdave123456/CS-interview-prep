const STORAGE_KEY = 'csInterviewPrepState';
const defaultState = {
  completedTasks: [],
  progress: {},
  flashRevised: [],
  mockHistory: {}
};

let state = loadState();

function loadState() {
  try {
    return { ...defaultState, ...(JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}) };
  } catch {
    return { ...defaultState };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function initNav() {
  const nav = document.getElementById('navMenu');
  nav.innerHTML = APP_DATA.nav.map((item, idx) => `
    <button class="nav-btn ${idx === 0 ? 'active' : ''}" data-page="${item.id}">${item.label}</button>
  `).join('');

  nav.addEventListener('click', (e) => {
    const btn = e.target.closest('.nav-btn');
    if (!btn) return;
    document.querySelectorAll('.nav-btn').forEach(el => el.classList.remove('active'));
    btn.classList.add('active');
    showPage(btn.dataset.page);
  });
}

function showPage(id) {
  document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
  const page = document.getElementById(`page-${id}`);
  if (page) page.classList.add('active');
  const item = APP_DATA.nav.find(x => x.id === id);
  document.getElementById('pageTitle').textContent = item ? item.label : 'CS Interview Prep';
}

function renderDashboard() {
  const totalTasks = APP_DATA.tasks.length;
  const doneTasks = state.completedTasks.length;
  const totalFlash = APP_DATA.flashcards.length;
  const revisedFlash = state.flashRevised.length;
  const mockCount = Object.keys(state.mockHistory).length;
  const progress = Math.round(((doneTasks + revisedFlash + mockCount) / (totalTasks + totalFlash + APP_DATA.mockTests.length)) * 100);

  document.getElementById('page-dashboard').innerHTML = `
    <div class="hero">
      <div class="card hero-card">
        <div class="hero-content">
          <p class="eyebrow">Launch your software career</p>
          <h3>Final-year and fresher interview prep in one focused portal.</h3>
          <p>Practice aptitude, logic, C++, Python, and Perl. Revise with flashcards, take mock tests, improve your resume, and train your interview communication with a realistic workflow.</p>
          <div class="badges">
            <span class="badge">Analytical</span>
            <span class="badge">Logical</span>
            <span class="badge">C++</span>
            <span class="badge">Python</span>
            <span class="badge">Perl</span>
            <span class="badge">Resume</span>
          </div>
        </div>
      </div>
      <div class="grid-2">
        <div class="card stat">
          <p class="eyebrow">Overall Progress</p>
          <h4>${progress}%</h4>
          <p>Based on tasks completed, flashcards revised, and mock tests attempted.</p>
          <div class="progress-wrap"><div class="progress-bar" style="width:${progress}%"></div></div>
        </div>
        <div class="card stat">
          <p class="eyebrow">Today’s Focus</p>
          <h4>${doneTasks}/${totalTasks}</h4>
          <p>Daily preparation tasks completed.</p>
        </div>
        <div class="card stat">
          <p class="eyebrow">Flashcards</p>
          <h4>${revisedFlash}/${totalFlash}</h4>
          <p>Quick revision cards marked as revised.</p>
        </div>
        <div class="card stat">
          <p class="eyebrow">Mocks Taken</p>
          <h4>${mockCount}/${APP_DATA.mockTests.length}</h4>
          <p>Build confidence by taking at least 3 before interviews.</p>
        </div>
      </div>
    </div>

    <div class="grid-3">
      <div class="topic-card">
        <p class="eyebrow">High-impact workflow</p>
        <h4>What strong freshers do differently</h4>
        <ol class="clean">
          <li>Practice aptitude and logic with a timer.</li>
          <li>Revise language basics until answers sound natural.</li>
          <li>Explain projects like a builder, not a passenger.</li>
          <li>Keep a crisp one-page ATS-ready resume.</li>
          <li>Take mocks and speak answers aloud.</li>
        </ol>
      </div>
      <div class="topic-card">
        <p class="eyebrow">Interview formula</p>
        <h4>30-minute daily minimum</h4>
        <ul class="clean">
          <li>10 minutes aptitude or logic</li>
          <li>10 minutes technical revision</li>
          <li>5 minutes resume/project updates</li>
          <li>5 minutes spoken answer practice</li>
        </ul>
      </div>
      <div class="topic-card">
        <p class="eyebrow">Ready-to-use</p>
        <h4>Best sections to start now</h4>
        <div class="badges">
          <span class="badge">Mini mocks</span>
          <span class="badge">Flashcards</span>
          <span class="badge">Resume bullets</span>
          <span class="badge">HR answers</span>
        </div>
        <p class="muted">Use this app like a daily preparation dashboard, not a one-time reading site.</p>
      </div>
    </div>

    <p class="footer-note">Built for GitHub Pages hosting. Progress is saved locally in your browser.</p>
  `;
}

function renderRoadmap() {
  document.getElementById('page-roadmap').innerHTML = `
    <div class="section-header">
      <div>
        <h3>4-Week Interview Roadmap</h3>
        <p>Follow this as your final fresher readiness sequence.</p>
      </div>
    </div>
    <div class="grid-2">
      ${APP_DATA.roadmap.map(item => `
        <div class="timeline-card">
          <p class="eyebrow">${item.week}</p>
          <h4>${item.title}</h4>
          <p class="muted">${item.focus}</p>
          <ul class="clean">${item.tasks.map(task => `<li>${task}</li>`).join('')}</ul>
        </div>
      `).join('')}
    </div>
  `;
}

function renderTopics(pageId, title, topics) {
  document.getElementById(pageId).innerHTML = `
    <div class="section-header">
      <div>
        <h3>${title}</h3>
        <p>Core concepts, formulas, and quick interview-oriented revision.</p>
      </div>
    </div>
    <div class="grid-2">
      ${topics.map(topic => `
        <div class="topic-card">
          <p class="eyebrow">Topic</p>
          <h4>${topic.title}</h4>
          <p class="muted">${topic.summary || topic.practice}</p>
          ${topic.formulas ? `<div><p class="kicker">Key formulas</p><ul class="clean">${topic.formulas.map(x => `<li>${x}</li>`).join('')}</ul></div>` : ''}
          ${topic.patterns ? `<div><p class="kicker">Patterns to spot</p><ul class="clean">${topic.patterns.map(x => `<li>${x}</li>`).join('')}</ul></div>` : ''}
          ${topic.tips ? `<div><p class="kicker">Quick tips</p><ul class="clean">${topic.tips.map(x => `<li>${x}</li>`).join('')}</ul></div>` : ''}
        </div>
      `).join('')}
    </div>
    <div class="card" style="margin-top:18px;">
      <p class="eyebrow">Mini quiz</p>
      <h3>${title} practice set</h3>
      ${buildQuiz(pageId.includes('aptitude') ? 'aptitude' : 'logic')}
    </div>
  `;
  attachQuizHandlers(pageId.includes('aptitude') ? 'aptitude' : 'logic');
}

function renderTechnical() {
  const tracks = Object.values(APP_DATA.technicalTracks);
  document.getElementById('page-technical').innerHTML = `
    <div class="section-header">
      <div>
        <h3>Technical Interview Prep</h3>
        <p>Fast revision tracks for C++, Python, and Perl.</p>
      </div>
    </div>
    <div class="grid-3">
      ${tracks.map(track => `
        <div class="topic-card">
          <p class="eyebrow">Track</p>
          <h4>${track.title}</h4>
          <p class="kicker">Modules</p>
          <ul class="clean">${track.modules.map(x => `<li>${x}</li>`).join('')}</ul>
          <p class="kicker">High-frequency interview questions</p>
          <ul class="clean">${track.quickQuestions.map(x => `<li>${x}</li>`).join('')}</ul>
        </div>
      `).join('')}
    </div>
    <div class="card" style="margin-top:18px;">
      <p class="eyebrow">Technical mini mock</p>
      <h3>Quick concept check</h3>
      ${buildQuiz('technical')}
    </div>
  `;
  attachQuizHandlers('technical');
}

function buildQuiz(key) {
  const source = APP_DATA.quizzes[key];
  return `
    <div class="quiz-card">
      ${source.map((item, idx) => `
        <div class="question-block" data-quiz="${key}" data-index="${idx}">
          <h5>Q${idx + 1}. ${escapeHtml(item.q)}</h5>
          <div class="options">
            ${item.options.map((opt, optIndex) => `
              <label class="option">
                <input type="radio" name="${key}-${idx}" value="${optIndex}" />
                <span>${escapeHtml(opt)}</span>
              </label>
            `).join('')}
          </div>
          <button class="btn btn-primary submit-question" data-quiz="${key}" data-index="${idx}">Submit</button>
          <div class="feedback" id="feedback-${key}-${idx}"></div>
        </div>
      `).join('')}
    </div>
  `;
}

function attachQuizHandlers(key) {
  document.querySelectorAll(`.submit-question[data-quiz="${key}"]`).forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = Number(btn.dataset.index);
      const block = btn.closest('.question-block');
      const selected = block.querySelector(`input[name="${key}-${idx}"]:checked`);
      const feedback = document.getElementById(`feedback-${key}-${idx}`);
      const options = block.querySelectorAll('.option');
      options.forEach(el => el.classList.remove('correct', 'wrong'));

      if (!selected) {
        feedback.textContent = 'Select an option first.';
        return;
      }

      const answer = APP_DATA.quizzes[key][idx].answer;
      const explanation = APP_DATA.quizzes[key][idx].explanation;
      const selectedIndex = Number(selected.value);
      options[answer].classList.add('correct');
      if (selectedIndex !== answer) options[selectedIndex].classList.add('wrong');

      feedback.innerHTML = selectedIndex === answer
        ? `✅ Correct. ${escapeHtml(explanation)}`
        : `❌ Not quite. ${escapeHtml(explanation)}`;
    });
  });
}

function renderFlashcards() {
  document.getElementById('page-flashcards').innerHTML = `
    <div class="section-header">
      <div>
        <h3>Flashcards</h3>
        <p>Click a card to flip. Mark cards revised as you go.</p>
      </div>
    </div>
    <div class="flashcard-wrap">
      ${APP_DATA.flashcards.map((card, idx) => `
        <div class="flashcard ${state.flashRevised.includes(idx) ? 'revised' : ''}" data-index="${idx}">
          <div class="flash-inner">
            <div class="flash-front">
              <p class="eyebrow">${card.category}</p>
              <h4>${escapeHtml(card.front)}</h4>
              <p class="muted">Click to reveal answer</p>
            </div>
            <div class="flash-back">
              <p class="eyebrow">Answer</p>
              <h4>${escapeHtml(card.back)}</h4>
              <button class="btn btn-success revise-btn" data-index="${idx}">${state.flashRevised.includes(idx) ? 'Revised ✓' : 'Mark Revised'}</button>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  document.querySelectorAll('.flashcard').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.classList.contains('revise-btn')) return;
      card.classList.toggle('flipped');
    });
  });

  document.querySelectorAll('.revise-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const idx = Number(btn.dataset.index);
      if (!state.flashRevised.includes(idx)) state.flashRevised.push(idx);
      saveState();
      renderFlashcards();
      renderDashboard();
    });
  });
}

function getMockSource(id) {
  if (id === 'service') return APP_DATA.quizzes.company.service;
  if (id === 'product') return APP_DATA.quizzes.company.product;
  return APP_DATA.quizzes[id];
}

function renderMockTests() {
  document.getElementById('page-mock-tests').innerHTML = `
    <div class="section-header">
      <div>
        <h3>Mock Tests</h3>
        <p>Attempt short focused tests and get an instant score.</p>
      </div>
    </div>
    <div class="grid-3">
      ${APP_DATA.mockTests.map(test => `
        <div class="score-card">
          <p class="eyebrow">${test.category}</p>
          <h4>${test.title}</h4>
          <p class="muted">${test.description}</p>
          <p class="small">Questions: ${test.count}</p>
          <p class="small">Last score: ${state.mockHistory[test.id] ?? 'Not attempted yet'}</p>
          <button class="btn btn-primary start-mock" data-mock="${test.id}">Start Test</button>
        </div>
      `).join('')}
    </div>
    <div id="mockArea" class="card" style="margin-top:18px; display:none;"></div>
  `;

  document.querySelectorAll('.start-mock').forEach(btn => {
    btn.addEventListener('click', () => startMock(btn.dataset.mock));
  });
}

function startMock(id) {
  const source = getMockSource(id);
  const area = document.getElementById('mockArea');
  area.style.display = 'block';
  area.innerHTML = `
    <p class="eyebrow">Live test</p>
    <h3>${APP_DATA.mockTests.find(x => x.id === id).title}</h3>
    ${source.map((item, idx) => `
      <div class="question-block">
        <h5>Q${idx + 1}. ${escapeHtml(item.q)}</h5>
        <div class="options">
          ${item.options.map((opt, optIndex) => `
            <label class="option">
              <input type="radio" name="mock-${id}-${idx}" value="${optIndex}" />
              <span>${escapeHtml(opt)}</span>
            </label>
          `).join('')}
        </div>
      </div>
    `).join('')}
    <button class="btn btn-success" id="submitMockBtn">Submit Test</button>
    <div id="mockResult" class="feedback"></div>
  `;
  area.scrollIntoView({ behavior: 'smooth' });

  document.getElementById('submitMockBtn').onclick = () => {
    let correct = 0;
    source.forEach((item, idx) => {
      const selected = document.querySelector(`input[name="mock-${id}-${idx}"]:checked`);
      if (selected && Number(selected.value) === item.answer) correct += 1;
    });
    const score = `${correct}/${source.length}`;
    state.mockHistory[id] = score;
    saveState();
    document.getElementById('mockResult').innerHTML = `Your score: <strong>${score}</strong>. ${correct === source.length ? 'Excellent work.' : 'Review explanations in the topic sections and retry.'}`;
    renderDashboard();
    renderMockTests();
    startMock(id);
    document.getElementById('mockResult').innerHTML = `Your score: <strong>${score}</strong>. ${correct === source.length ? 'Excellent work.' : 'Review explanations in the topic sections and retry.'}`;
  };
}

function renderVideos() {
  document.getElementById('page-videos').innerHTML = `
    <div class="section-header">
      <div>
        <h3>Relevant Video Shelf</h3>
        <p>Curated revision videos for technical prep, aptitude, HR, and resume work.</p>
      </div>
    </div>
    <div class="grid-2">
      ${APP_DATA.videos.map(video => `
        <div class="video-card">
          <p class="eyebrow">${video.tag}</p>
          <h4>${video.title}</h4>
          <p class="muted">${video.why}</p>
          <a class="video-link" href="${video.url}" target="_blank" rel="noopener noreferrer">Open on YouTube</a>
          <iframe src="${video.embed}" title="${escapeHtml(video.title)}" allowfullscreen></iframe>
        </div>
      `).join('')}
    </div>
  `;
}

function renderResume() {
  document.getElementById('page-resume').innerHTML = `
    <div class="section-header">
      <div>
        <h3>Resume Updation Strategy</h3>
        <p>Make your fresher resume short, credible, and easy to defend in interviews.</p>
      </div>
    </div>
    <div class="grid-2">
      ${APP_DATA.resumeSections.map(section => `
        <div class="resume-card">
          <p class="eyebrow">Resume playbook</p>
          <h4>${section.title}</h4>
          <ul class="clean">${section.body.map(x => `<li>${x}</li>`).join('')}</ul>
        </div>
      `).join('')}
    </div>
    <div class="card" style="margin-top:18px;">
      <p class="eyebrow">Strong vs weak</p>
      <h3>Upgrade your resume bullets</h3>
      <table class="table">
        <thead><tr><th>Weak</th><th>Better</th></tr></thead>
        <tbody>
          <tr><td>Worked on Python project</td><td>Built a Python-based student result analyzer that automated grade processing for 200+ records.</td></tr>
          <tr><td>Know C++</td><td>Implemented OOP-based console applications in C++ and practiced STL-driven coding problems.</td></tr>
          <tr><td>Team player</td><td>Coordinated a 3-member academic project team, managed task breakdown, and delivered the demo on time.</td></tr>
        </tbody>
      </table>
    </div>
  `;
}

function renderHR() {
  document.getElementById('page-hr').innerHTML = `
    <div class="section-header">
      <div>
        <h3>HR & Soft Skills</h3>
        <p>Use concise, evidence-backed answers and practice them aloud.</p>
      </div>
    </div>
    <div class="grid-2">
      ${APP_DATA.hrPrep.map(item => `
        <div class="hr-card">
          <p class="eyebrow">Common question</p>
          <h4>${item.q}</h4>
          <p class="muted">${item.a}</p>
        </div>
      `).join('')}
    </div>
    <div class="card" style="margin-top:18px;">
      <p class="eyebrow">Interview communication</p>
      <h3>Habits that improve selection odds</h3>
      <ul class="clean">
        <li>Pause and structure before answering.</li>
        <li>Use examples from projects, internships, coursework, or team activities.</li>
        <li>When stuck, communicate your thought process clearly.</li>
        <li>Keep tone calm, positive, and professional.</li>
        <li>Prepare 2–3 questions to ask the interviewer.</li>
      </ul>
    </div>
  `;
}

function renderTasks() {
  const done = state.completedTasks;
  document.getElementById('page-tasks').innerHTML = `
    <div class="section-header">
      <div>
        <h3>Interview Task Tracker</h3>
        <p>Use these daily actions to convert preparation into measurable progress.</p>
      </div>
    </div>
    <div class="task-card">
      <p class="eyebrow">Daily checklist</p>
      <h4>Complete and save progress locally</h4>
      <div class="checklist">
        ${APP_DATA.tasks.map((task, idx) => `
          <label class="check-item ${done.includes(idx) ? 'done' : ''}">
            <input type="checkbox" data-task="${idx}" ${done.includes(idx) ? 'checked' : ''} />
            <div>
              <div class="kicker">${task}</div>
              <div class="small">Small daily wins build interview confidence fast.</div>
            </div>
          </label>
        `).join('')}
      </div>
    </div>
  `;

  document.querySelectorAll('input[data-task]').forEach(input => {
    input.addEventListener('change', () => {
      const idx = Number(input.dataset.task);
      if (input.checked && !state.completedTasks.includes(idx)) state.completedTasks.push(idx);
      if (!input.checked) state.completedTasks = state.completedTasks.filter(x => x !== idx);
      saveState();
      renderTasks();
      renderDashboard();
    });
  });
}

function renderCompany() {
  document.getElementById('page-company').innerHTML = `
    <div class="section-header">
      <div>
        <h3>Company-Oriented Readiness</h3>
        <p>Prepare differently for service companies, product companies, and startups.</p>
      </div>
    </div>
    <div class="grid-3">
      ${APP_DATA.companyTracks.map(track => `
        <div class="company-card">
          <p class="eyebrow">Interview style</p>
          <h4>${track.title}</h4>
          <p class="muted"><strong>Fit:</strong> ${track.fit}</p>
          <p class="kicker">Priorities</p>
          <ul class="clean">${track.priorities.map(p => `<li>${p}</li>`).join('')}</ul>
          <p class="muted">${track.strategy}</p>
        </div>
      `).join('')}
    </div>
    <div class="grid-2" style="margin-top:18px;">
      <div class="card">
        <p class="eyebrow">Mini company test</p>
        <h3>Service company readiness</h3>
        ${buildCompanyMiniQuiz('service')}
      </div>
      <div class="card">
        <p class="eyebrow">Mini company test</p>
        <h3>Product company readiness</h3>
        ${buildCompanyMiniQuiz('product')}
      </div>
    </div>
  `;
  attachCompanyQuizHandlers('service');
  attachCompanyQuizHandlers('product');
}

function buildCompanyMiniQuiz(type) {
  const source = APP_DATA.quizzes.company[type];
  return source.map((item, idx) => `
    <div class="question-block" data-company="${type}" data-index="${idx}">
      <h5>Q${idx + 1}. ${escapeHtml(item.q)}</h5>
      <div class="options">
        ${item.options.map((opt, optIndex) => `
          <label class="option">
            <input type="radio" name="company-${type}-${idx}" value="${optIndex}" />
            <span>${escapeHtml(opt)}</span>
          </label>
        `).join('')}
      </div>
      <button class="btn btn-primary submit-company" data-company="${type}" data-index="${idx}">Submit</button>
      <div class="feedback" id="feedback-company-${type}-${idx}"></div>
    </div>
  `).join('');
}

function attachCompanyQuizHandlers(type) {
  document.querySelectorAll(`.submit-company[data-company="${type}"]`).forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = Number(btn.dataset.index);
      const block = btn.closest('.question-block');
      const selected = block.querySelector(`input[name="company-${type}-${idx}"]:checked`);
      const feedback = document.getElementById(`feedback-company-${type}-${idx}`);
      const options = block.querySelectorAll('.option');
      options.forEach(el => el.classList.remove('correct', 'wrong'));
      if (!selected) {
        feedback.textContent = 'Select an option first.';
        return;
      }
      const item = APP_DATA.quizzes.company[type][idx];
      const selectedIndex = Number(selected.value);
      options[item.answer].classList.add('correct');
      if (selectedIndex !== item.answer) options[selectedIndex].classList.add('wrong');
      feedback.textContent = selectedIndex === item.answer ? `Correct. ${item.explanation}` : `Not correct. ${item.explanation}`;
    });
  });
}

function setDailyFocus() {
  const focusBank = [
    ['Master one concept', 'Revise one weak topic deeply instead of reading everything lightly.'],
    ['Practice under timer', 'Speed and calmness improve when you solve with a clock.'],
    ['Refine your project story', 'Be ready to explain problem, role, stack, and result in under 90 seconds.'],
    ['Make your resume defensible', 'Every skill and bullet should be something you can explain clearly.']
  ];
  const today = new Date().getDate() % focusBank.length;
  document.getElementById('dailyFocusTitle').textContent = focusBank[today][0];
  document.getElementById('dailyFocusText').textContent = focusBank[today][1];
}

function attachReset() {
  document.getElementById('resetProgressBtn').addEventListener('click', () => {
    if (!confirm('Reset all saved progress in this browser?')) return;
    state = { ...defaultState };
    saveState();
    renderAll();
  });
}

function renderAll() {
  renderDashboard();
  renderRoadmap();
  renderTopics('page-aptitude', 'Analytical Aptitude', APP_DATA.aptitudeTopics);
  renderTopics('page-logic', 'Logical Reasoning', APP_DATA.logicTopics);
  renderTechnical();
  renderFlashcards();
  renderMockTests();
  renderVideos();
  renderResume();
  renderHR();
  renderTasks();
  renderCompany();
}

initNav();
setDailyFocus();
attachReset();
renderAll();
showPage('dashboard');
