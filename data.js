const APP_DATA = {
  nav: [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'roadmap', label: 'Roadmap' },
    { id: 'aptitude', label: 'Analytical Aptitude' },
    { id: 'logic', label: 'Logical Reasoning' },
    { id: 'technical', label: 'C++ / Python / Perl' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'mock-tests', label: 'Mock Tests' },
    { id: 'videos', label: 'Videos' },
    { id: 'resume', label: 'Resume Strategy' },
    { id: 'hr', label: 'HR & Soft Skills' },
    { id: 'tasks', label: 'Tasks & Tracker' },
    { id: 'company', label: 'Company Readiness' }
  ],
  roadmap: [
    {
      week: 'Week 1',
      title: 'Foundation + Resume Reset',
      focus: 'Self-introduction, resume rewrite, percentages, ratios, Python basics',
      tasks: ['Draft one-page resume', 'Solve 20 aptitude questions', 'Practice Python syntax and loops', 'Record 60-second intro']
    },
    {
      week: 'Week 2',
      title: 'Logic + C++ Fundamentals',
      focus: 'Series, puzzles, C++ syntax, OOP basics, project storytelling',
      tasks: ['Finish 3 logic topics', 'Revise C++ classes and pointers', 'Write project bullets with action verbs', 'Take mini mock 1']
    },
    {
      week: 'Week 3',
      title: 'Coding and Technical Depth',
      focus: 'Arrays, strings, STL, Python collections, Perl regex and scripting',
      tasks: ['Code 8 problems', 'Revise Python data structures', 'Learn Perl regex basics', 'Mock interview with friend']
    },
    {
      week: 'Week 4',
      title: 'Interview Simulation',
      focus: 'Mixed mocks, HR answers, communication, company-style question sets',
      tasks: ['Take full mock', 'Finalize resume', 'Prepare STAR stories', 'Practice 2 company mini-tests']
    }
  ],
  aptitudeTopics: [
    {
      title: 'Percentages & Ratios',
      summary: 'Core campus placement math used in pricing, growth, and comparison questions.',
      formulas: ['x% of y = (x/100) × y', 'If A:B = m:n, then A = mk and B = nk', '% increase = (increase/original) × 100'],
      tips: ['Convert to fractions for speed', 'Use base 100 thinking', 'Practice mental math shortcuts']
    },
    {
      title: 'Profit, Loss & Discount',
      summary: 'Tests business math and numerical confidence under time pressure.',
      formulas: ['Profit% = (profit/CP) × 100', 'Loss% = (loss/CP) × 100', 'SP = CP × (100 ± p)/100'],
      tips: ['Track CP, SP, MP carefully', 'Beware of successive discount traps', 'Use unitary method for sanity check']
    },
    {
      title: 'Time, Work & Speed',
      summary: 'Frequent in service-company aptitude rounds.',
      formulas: ['Work = rate × time', 'If A finishes in x days, rate = 1/x', 'Speed = distance/time'],
      tips: ['Convert workers to rates', 'Use LCM for combined work', 'Draw simple tables']
    },
    {
      title: 'Probability & Counting',
      summary: 'Basic interview-friendly probability and arrangement questions.',
      formulas: ['P(E) = favorable/total', 'nPr = n!/(n-r)!', 'nCr = n!/(r!(n-r)!)'],
      tips: ['List sample space first', 'Check repetition rule', 'Count complement when easier']
    }
  ],
  logicTopics: [
    {
      title: 'Number Series',
      patterns: ['Arithmetic gaps', 'Squares/cubes', 'Alternate patterns', 'Prime-based jumps'],
      practice: 'Look for second differences, multiplication shifts, and alternating positions.'
    },
    {
      title: 'Coding-Decoding',
      patterns: ['Letter shifts', 'Symbol substitution', 'Position-based rules'],
      practice: 'Write A=1, B=2 quickly and test one-letter hypothesis first.'
    },
    {
      title: 'Syllogisms & Conclusions',
      patterns: ['All / some / none mapping', 'Venn diagram elimination'],
      practice: 'Convert statements into circles before evaluating conclusions.'
    },
    {
      title: 'Seating & Arrangement',
      patterns: ['Linear arrangement', 'Circular arrangement', 'Conditional neighbor rules'],
      practice: 'Use slots and deduce fixed anchors early.'
    }
  ],
  technicalTracks: {
    cpp: {
      title: 'C++ Interview Track',
      modules: ['Syntax & data types', 'Functions and recursion', 'Pointers & references', 'OOP and inheritance', 'STL: vector, map, stack, queue', 'Memory management', 'Exception handling'],
      quickQuestions: [
        'What is the difference between pointer and reference?',
        'Why is virtual destructor important?',
        'When would you use vector instead of array?',
        'Explain pass by value vs reference.'
      ]
    },
    python: {
      title: 'Python Interview Track',
      modules: ['Data types', 'Functions & lambda', 'Lists, tuples, sets, dicts', 'OOP basics', 'File handling', 'Exception handling', 'Iterators and generators'],
      quickQuestions: [
        'List vs tuple?',
        'What is a dictionary comprehension?',
        'How does Python handle memory?',
        'What is the use of __init__?'
      ]
    },
    perl: {
      title: 'Perl Interview Track',
      modules: ['Scalars, arrays, hashes', 'String handling', 'Regular expressions', 'File operations', 'Scripting habits', 'Command-line automation'],
      quickQuestions: [
        'What are scalars, arrays, and hashes?',
        'How is Perl strong for regex-heavy scripting?',
        'How do you open and read a file in Perl?',
        'What does chomp do?'
      ]
    }
  },
  flashcards: [
    { category: 'C++', front: 'What is polymorphism?', back: 'The ability of one interface to represent many forms. In C++, it is often achieved through inheritance and virtual functions.' },
    { category: 'Python', front: 'What is a list comprehension?', back: 'A compact way to create lists using an expression with optional filtering, such as [x*x for x in nums if x%2==0].' },
    { category: 'Perl', front: 'What is a hash in Perl?', back: 'A key-value data structure similar to a dictionary or map.' },
    { category: 'Aptitude', front: 'Successive discounts of 10% and 20% result in?', back: 'Net discount = 1 - (0.9 × 0.8) = 28%.' },
    { category: 'Resume', front: 'Weak bullet: Worked on website', back: 'Strong bullet: Built a responsive placement portal using HTML, CSS, and JS, reducing manual navigation time for students.' },
    { category: 'HR', front: 'Best structure for “Tell me about yourself”', back: 'Present → past → strengths → role fit. Keep it around 60–90 seconds.' },
    { category: 'Logic', front: 'First step in syllogism questions?', back: 'Convert statements into a quick Venn diagram or relation sketch.' },
    { category: 'Interview', front: 'Best answer style for project questions?', back: 'Problem, your role, technologies, measurable outcome, and what you learned.' }
  ],
  quizzes: {
    aptitude: [
      {
        q: 'A number is increased by 25% and then decreased by 20%. What is the net change?',
        options: ['0%', '5% increase', '5% decrease', '10% increase'],
        answer: 0,
        explanation: '1.25 × 0.80 = 1.00, so there is no net change.'
      },
      {
        q: 'The ratio of boys to girls is 3:2. If there are 30 boys, how many girls are there?',
        options: ['18', '20', '24', '30'],
        answer: 1,
        explanation: 'If 3 parts = 30, then 1 part = 10. Girls = 2 parts = 20.'
      },
      {
        q: 'A man can finish a work in 12 days. How much work does he finish in 3 days?',
        options: ['1/2', '1/3', '1/4', '1/6'],
        answer: 2,
        explanation: 'Daily rate is 1/12, so in 3 days work done = 3/12 = 1/4.'
      }
    ],
    logic: [
      {
        q: 'Find the next number: 2, 6, 12, 20, 30, ?',
        options: ['36', '40', '42', '44'],
        answer: 2,
        explanation: 'Pattern is n(n+1): 1×2, 2×3, 3×4, 4×5, 5×6, so next is 6×7 = 42.'
      },
      {
        q: 'If CAT = DBU, then DOG = ?',
        options: ['EPH', 'FPH', 'EPG', 'EOH'],
        answer: 0,
        explanation: 'Each letter shifts by +1: D→E, O→P, G→H.'
      },
      {
        q: 'All coders are problem solvers. Some problem solvers are gamers. Which conclusion is definitely true?',
        options: ['All gamers are coders', 'Some coders are gamers', 'Some problem solvers may be gamers', 'No coder is gamer'],
        answer: 2,
        explanation: 'Only “some problem solvers are gamers” is given; anything stronger is not definite.'
      }
    ],
    technical: [
      {
        q: 'Which C++ feature enables runtime polymorphism?',
        options: ['Templates', 'Virtual functions', 'Operator overloading', 'Namespaces'],
        answer: 1,
        explanation: 'Virtual functions enable runtime polymorphism using dynamic dispatch.'
      },
      {
        q: 'Which Python data structure stores unique unordered values?',
        options: ['List', 'Tuple', 'Set', 'Dictionary'],
        answer: 2,
        explanation: 'A set stores unique unordered elements.'
      },
      {
        q: 'In Perl, which symbol is used for a scalar variable?',
        options: ['@', '$', '%', '&'],
        answer: 1,
        explanation: 'Scalars in Perl begin with $.'
      }
    ],
    company: {
      service: [
        {
          q: 'What is usually the biggest differentiator in service-company campus rounds?',
          options: ['Patents', 'Aptitude speed + communication', 'Open-source followers', 'Competitive programming rating alone'],
          answer: 1,
          explanation: 'Large service-company rounds heavily reward aptitude speed, consistency, and spoken clarity.'
        },
        {
          q: 'What should a fresher emphasize while explaining a project?',
          options: ['Only tools used', 'Only team size', 'Problem, role, logic, and result', 'Only final grade'],
          answer: 2,
          explanation: 'Interviewers want ownership and clarity, not just tool names.'
        },
        {
          q: 'Which is the best interview habit?',
          options: ['Guess loudly', 'Interrupt the interviewer', 'Think aloud and structure answer', 'Memorize and recite'],
          answer: 2,
          explanation: 'Structured thinking matters more than speed alone.'
        }
      ],
      product: [
        {
          q: 'For product-company fresher rounds, what matters more than surface syntax?',
          options: ['Fancy resume color', 'Problem-solving and code clarity', 'Number of pages in resume', 'Using rare libraries'],
          answer: 1,
          explanation: 'Product companies weigh reasoning, DS/Algo basics, and code clarity heavily.'
        },
        {
          q: 'Which answer is stronger for “Why Python here?”',
          options: ['Because it is easy', 'Because everyone uses it', 'Because it enables faster prototyping and readable code for the given task', 'Because I saw it online'],
          answer: 2,
          explanation: 'Tie the language choice to task fit and engineering reasoning.'
        },
        {
          q: 'What is a good first step before coding?',
          options: ['Open editor immediately', 'Clarify input, constraints, and edge cases', 'Write final code in one go', 'Skip examples'],
          answer: 1,
          explanation: 'Strong candidates frame the problem before implementation.'
        }
      ]
    }
  },
  mockTests: [
    { id: 'aptitude', title: 'Analytical Sprint', description: 'Timed aptitude-focused set for campus rounds.', category: 'Aptitude', count: 3 },
    { id: 'logic', title: 'Logical Reasoning Drill', description: 'Series, coding-decoding, and syllogism mix.', category: 'Logical', count: 3 },
    { id: 'technical', title: 'Technical Core Mock', description: 'C++, Python, and Perl basics in one scorecard.', category: 'Technical', count: 3 },
    { id: 'service', title: 'Service Company Mini-Test', description: 'Interview style mix with aptitude and communication emphasis.', category: 'Company', count: 3 },
    { id: 'product', title: 'Product Company Mini-Test', description: 'Problem-solving and technical reasoning focused.', category: 'Company', count: 3 }
  ],
  videos: [
    {
      title: 'C++ Full Course for Beginners',
      tag: 'C++',
      why: 'A strong refresh for syntax, OOP, STL, and coding basics before interviews.',
      url: 'https://www.youtube.com/watch?v=vLnPwxZdW4Y',
      embed: 'https://www.youtube.com/embed/vLnPwxZdW4Y'
    },
    {
      title: 'Python Tutorial for Beginners',
      tag: 'Python',
      why: 'Good for fast revision of Python basics, functions, collections, and practical usage.',
      url: 'https://www.youtube.com/watch?v=_uQrJ0TkZlc',
      embed: 'https://www.youtube.com/embed/_uQrJ0TkZlc'
    },
    {
      title: 'Perl Tutorial for Beginners',
      tag: 'Perl',
      why: 'Useful for scripting and regex revision when Perl appears in hardware, automation, or legacy stacks.',
      url: 'https://www.youtube.com/watch?v=WEghIXs8F6c',
      embed: 'https://www.youtube.com/embed/WEghIXs8F6c'
    },
    {
      title: 'Aptitude Tricks and Shortcuts',
      tag: 'Aptitude',
      why: 'Improves speed in campus-placement arithmetic and time-pressure solving.',
      url: 'https://www.youtube.com/watch?v=J3fCnfnY0Ow',
      embed: 'https://www.youtube.com/embed/J3fCnfnY0Ow'
    },
    {
      title: 'Tell Me About Yourself – Best Answer Strategy',
      tag: 'HR',
      why: 'Helps freshers structure a confident introduction and avoid vague answers.',
      url: 'https://www.youtube.com/watch?v=Y95eI-ek_E8',
      embed: 'https://www.youtube.com/embed/Y95eI-ek_E8'
    },
    {
      title: 'ATS-Friendly Resume Writing Tips',
      tag: 'Resume',
      why: 'Useful for improving shortlist odds with a clean fresher resume.',
      url: 'https://www.youtube.com/watch?v=Tt08KmFfIYQ',
      embed: 'https://www.youtube.com/embed/Tt08KmFfIYQ'
    }
  ],
  resumeSections: [
    {
      title: 'One-Page Resume Rule',
      body: ['Keep it to one page for fresher roles.', 'Order sections: Summary, Skills, Projects, Education, Experience/Internship, Achievements.', 'Use clean fonts and enough white space.']
    },
    {
      title: 'Project Bullets That Win Interviews',
      body: ['Start with action verbs: Built, Developed, Automated, Designed.', 'Show your specific role, not only team effort.', 'Mention outcomes: accuracy, speed, automation, user benefit.']
    },
    {
      title: 'Skills Section Upgrade',
      body: ['Separate languages, tools, frameworks, and databases.', 'Do not list skills you cannot defend in interview.', 'Prioritize C++, Python, SQL, Git, Linux basics, and relevant project stack.']
    },
    {
      title: 'ATS and Recruiter Checklist',
      body: ['Match keywords with job description.', 'Avoid graphics-heavy resume templates.', 'Use standard headings and save as PDF.']
    }
  ],
  hrPrep: [
    {
      q: 'Tell me about yourself',
      a: 'Use a 60–90 second structure: current education status, technical strengths, key project, and why you fit the role.'
    },
    {
      q: 'What are your strengths?',
      a: 'Pick 2–3 strengths with proof. Example: structured problem-solving, quick learning, ownership of project tasks.'
    },
    {
      q: 'What is your weakness?',
      a: 'Choose a real but non-fatal weakness and show correction. Example: Earlier I rushed into coding; now I spend time clarifying requirements first.'
    },
    {
      q: 'Why should we hire you?',
      a: 'Connect your foundation, discipline, coding readiness, and willingness to learn quickly in team settings.'
    },
    {
      q: 'How do you explain a project?',
      a: 'Problem → approach → your role → tech stack → challenge handled → measurable outcome → learning.'
    }
  ],
  tasks: [
    'Solve 10 analytical questions',
    'Solve 10 logical reasoning questions',
    'Revise 5 C++ interview questions',
    'Revise 5 Python interview questions',
    'Read 3 Perl regex examples',
    'Update 1 resume bullet with impact',
    'Practice self-introduction for 3 minutes',
    'Watch 1 interview-prep video',
    'Attempt 1 mock test',
    'Review one project explanation using STAR format'
  ],
  companyTracks: [
    {
      title: 'Service Companies',
      fit: 'TCS, Infosys, Wipro, Cognizant style rounds',
      priorities: ['Aptitude speed', 'Clear communication', 'Basic coding syntax', 'Consistency over complexity'],
      strategy: 'Focus on accuracy, calm communication, and predictable execution. Freshers are judged on trainability and discipline.'
    },
    {
      title: 'Product Companies',
      fit: 'Developer-focused fresher hiring',
      priorities: ['Problem-solving', 'Data structure basics', 'Code quality', 'Project depth'],
      strategy: 'Explain tradeoffs, think aloud, and show clarity in code structure and debugging.'
    },
    {
      title: 'Startups',
      fit: 'Lean teams looking for adaptable builders',
      priorities: ['Ownership', 'Fast learning', 'Hands-on projects', 'Practical debugging'],
      strategy: 'Highlight real project work, initiative, and willingness to work across multiple tasks.'
    }
  ]
};
