const APP_DATA = {
  modules: [
    { title: 'Analytical', desc: 'Quant concepts, speed, formulas, and practice.' },
    { title: 'Logical', desc: 'Patterns, reasoning, puzzles, and elimination skills.' },
    { title: 'Technical', desc: 'C++, Python, Perl, coding interview readiness.' },
    { title: 'Flashcards', desc: 'Fast revision for concepts, syntax, and HR cues.' },
    { title: 'Mock Tests', desc: 'Timed-style practice with scoring and explanations.' },
    { title: 'Resume', desc: 'ATS-friendly resume upgrades and project bullets.' },
    { title: 'HR Prep', desc: 'Tell-me-about-yourself, strengths, teamwork, conflict.' },
    { title: 'Company Tests', desc: 'Service, product, and startup-style mini rounds.' }
  ],
  todayFocus: [
    'Solve 10 aptitude problems with timer.',
    'Revise 8 flashcards from Python and HR.',
    'Practice 2 coding problems in C++ or Python.',
    'Improve one project bullet in your resume.',
    'Record a 60-second self-introduction.'
  ],
  roadmap: [
    { week: 'Week 1', title: 'Foundation Reset', points: ['Resume cleanup', 'Aptitude formulas', 'C++ syntax refresh', 'Self-introduction draft'] },
    { week: 'Week 2', title: 'Coding Fluency', points: ['Python core structures', 'Arrays and strings', 'Practice easy coding questions', 'Logical reasoning drills'] },
    { week: 'Week 3', title: 'Interview Core', points: ['OOP concepts', 'STL and Python collections', 'Project explanation practice', 'HR question bank'] },
    { week: 'Week 4', title: 'Mock Intensive', points: ['Mixed technical quizzes', 'Aptitude mock', 'Behavioral response refinement', 'Resume bullet polishing'] },
    { week: 'Week 5', title: 'Company Targeting', points: ['Service company prep', 'Product-style questions', 'Timed mini tests', 'Common coding patterns'] },
    { week: 'Week 6', title: 'Final Sprint', points: ['Mock interviews', 'Weak-area fixes', 'Interview day checklist', 'Confidence rehearsal'] }
  ],
  analyticalConcepts: [
    { title: 'Percentages', content: 'Percentage = (Part / Whole) × 100. Interview use: discounts, score comparisons, salary hike, profit and loss.' },
    { title: 'Profit & Loss', content: 'Profit = SP - CP. Loss = CP - SP. Profit % = Profit/CP × 100. Common interview twist: marked price and discount combinations.' },
    { title: 'Time & Work', content: 'If A completes work in x days, one day work = 1/x. Together add efficiencies. Common test trick: work remaining or partial attendance.' },
    { title: 'Time Speed Distance', content: 'Distance = Speed × Time. Relative speed is key for trains, meeting points, and opposite-direction movement.' },
    { title: 'Ratio & Proportion', content: 'Use ratios to compare parts. For distribution problems, convert ratios into total parts first.' },
    { title: 'Probability', content: 'Probability = favorable outcomes / total outcomes. Watch for independent events and complementary cases.' }
  ],
  formulas: [
    { topic: 'Percentage Change', formula: '((new - old) / old) × 100' },
    { topic: 'Profit %', formula: '(profit / cost price) × 100' },
    { topic: 'Average', formula: 'sum of observations / number of observations' },
    { topic: 'Simple Interest', formula: '(P × R × T) / 100' },
    { topic: 'Compound Amount', formula: 'P(1 + R/100)^T' },
    { topic: 'Work Together', formula: '1/T = 1/A + 1/B + ...' },
    { topic: 'Relative Speed', formula: 'sum for opposite, difference for same direction' },
    { topic: 'Probability', formula: 'favorable / total' }
  ],
  logicalPacks: [
    { title: 'Number Series', desc: 'Detect arithmetic, geometric, alternating, and square/cube patterns.' },
    { title: 'Coding-Decoding', desc: 'Master letter shifts, replacement maps, and symbolic logic.' },
    { title: 'Blood Relations', desc: 'Use family trees and direction of relation words carefully.' },
    { title: 'Seating Arrangement', desc: 'Linear and circular arrangement clues using elimination tables.' },
    { title: 'Syllogisms', desc: 'Practice all/some/no cases with Venn diagram thinking.' },
    { title: 'Statement & Conclusion', desc: 'Differentiate assumption, inference, and valid conclusion.' },
    { title: 'Direction Sense', desc: 'Track turns and final displacement step by step.' },
    { title: 'Puzzle Logic', desc: 'Multi-condition elimination for ranking, schedule, and mapping questions.' }
  ],
  tech: {
    cpp: {
      title: 'C++ Interview Prep',
      sections: [
        { heading: 'Core Topics', items: ['Variables, data types, operators', 'Functions and recursion', 'Pointers and references', 'Arrays, strings, vectors', 'OOP: encapsulation, inheritance, polymorphism', 'STL basics: vector, map, set, stack, queue'] },
        { heading: 'Interview Favorites', items: ['Difference between class and struct', 'Virtual functions and runtime polymorphism', 'Memory management and RAII basics', 'Call by value vs reference', 'Const correctness', 'Time complexity of common STL operations'] },
        { heading: 'Practice Tasks', items: ['Reverse a string', 'Check palindrome', 'Frequency map', 'Second largest element', 'Two-sum style problem', 'Simple class-based mini project'] }
      ]
    },
    python: {
      title: 'Python Interview Prep',
      sections: [
        { heading: 'Core Topics', items: ['Lists, tuples, sets, dictionaries', 'Functions and lambda', 'Comprehensions', 'OOP and dunder basics', 'File handling', 'Exception handling'] },
        { heading: 'Interview Favorites', items: ['List vs tuple', 'Deep copy vs shallow copy', 'Mutable vs immutable', 'Generators and iterators', 'Decorators basics', 'Why Python is productive for scripting and automation'] },
        { heading: 'Practice Tasks', items: ['Word counter', 'Anagram checker', 'CSV reader script', 'Basic class model', 'Frequency dictionary', 'Simple regex script'] }
      ]
    },
    perl: {
      title: 'Perl Interview Prep',
      sections: [
        { heading: 'Core Topics', items: ['Scalars, arrays, hashes', 'Control flow and loops', 'Subroutines', 'Regular expressions', 'File handling', 'Command-line scripting'] },
        { heading: 'Interview Favorites', items: ['Use cases for Perl in legacy automation', 'Regex power in text processing', 'Difference between scalar and list context', 'Hashes and key lookup', 'Basic script debugging approach'] },
        { heading: 'Practice Tasks', items: ['Log parser', 'Pattern matcher', 'File line counter', 'Simple report generator', 'Config text extractor'] }
      ]
    }
  },
  flashcards: [
    { cat: 'C++', q: 'What is polymorphism in C++?', a: 'Polymorphism allows the same interface to represent different underlying forms. In interviews, mention compile-time and runtime polymorphism.' },
    { cat: 'C++', q: 'What is a pointer?', a: 'A pointer stores the memory address of another variable. It enables dynamic memory work and efficient parameter passing.' },
    { cat: 'Python', q: 'Difference between list and tuple?', a: 'Lists are mutable; tuples are immutable. Tuples can be safer and slightly lighter for fixed collections.' },
    { cat: 'Python', q: 'What is a dictionary?', a: 'A key-value data structure with near constant-time lookup in common cases.' },
    { cat: 'Perl', q: 'What is a hash in Perl?', a: 'A hash is an associative array mapping keys to values, commonly used for quick lookups.' },
    { cat: 'Aptitude', q: 'Average of first n natural numbers?', a: 'n(n+1)/2 divided by n, which simplifies to (n+1)/2.' },
    { cat: 'Aptitude', q: 'If successive discounts are 10% and 20%, is total discount 30%?', a: 'No. Combined discount = a + b - ab/100 = 28%.' },
    { cat: 'HR', q: 'Best structure for “Tell me about yourself”?', a: 'Present, past, future: current profile, relevant academic/project background, then why this role fits your direction.' },
    { cat: 'Resume', q: 'How should a project bullet read?', a: 'Action + tool/tech + measurable outcome. Example: Built a Flask dashboard reducing report generation time by 40%.' },
    { cat: 'Logical', q: 'How do you solve seating arrangement faster?', a: 'Start with fixed or absolute clues, place extremes, then use elimination tables for uncertain positions.' }
  ],
  mockTests: [
    {
      id: 'mixed_fresher', title: 'Mixed Fresher Mock', desc: 'Balanced aptitude + coding + HR style quiz.', duration: '20 min',
      questions: [
        { q: 'If the cost price is 500 and selling price is 575, what is the profit %?', options: ['10%', '12%', '15%', '18%'], answer: '15%', explain: 'Profit = 75. 75/500 × 100 = 15%.' },
        { q: 'Which Python data structure uses key-value pairs?', options: ['List', 'Tuple', 'Dictionary', 'Set'], answer: 'Dictionary', explain: 'Dictionary stores key-value mappings.' },
        { q: 'Which concept allows one interface, many forms?', options: ['Inheritance', 'Abstraction', 'Polymorphism', 'Encapsulation'], answer: 'Polymorphism', explain: 'That is the standard definition of polymorphism.' },
        { q: 'In a series 2, 6, 12, 20, 30, ?', options: ['36', '40', '42', '44'], answer: '42', explain: 'Differences are 4, 6, 8, 10, then 12.' },
        { q: 'Best opening for a fresher self-introduction?', options: ['My family is...', 'My weaknesses are many', 'Brief intro + degree + project strengths', 'I need a job badly'], answer: 'Brief intro + degree + project strengths', explain: 'That is professional and role-relevant.' }
      ]
    },
    {
      id: 'python_focus', title: 'Python Focus Mock', desc: 'Python syntax, logic, and scripting basics.', duration: '15 min',
      questions: [
        { q: 'Which of these is mutable?', options: ['Tuple', 'String', 'List', 'Integer'], answer: 'List', explain: 'Lists can be modified after creation.' },
        { q: 'What does try-except handle?', options: ['Loops', 'Exceptions', 'Imports', 'Comments'], answer: 'Exceptions', explain: 'Used for error handling.' },
        { q: 'What is produced by x = [i*i for i in range(3)]?', options: ['[1,4,9]', '[0,1,4]', '[0,1,2]', '[1,2,3]'], answer: '[0,1,4]', explain: 'Squares of 0,1,2.' },
        { q: 'Which structure avoids duplicate items?', options: ['List', 'Tuple', 'Set', 'Dictionary'], answer: 'Set', explain: 'Sets keep unique elements.' },
        { q: 'Why mention Python in interviews?', options: ['Readable syntax and productivity', 'Because it is old', 'Only for web', 'No use in automation'], answer: 'Readable syntax and productivity', explain: 'This is a strong concise answer.' }
      ]
    },
    {
      id: 'aptitude_speed', title: 'Aptitude Speed Mock', desc: 'Quick quantitative reasoning for campus tests.', duration: '15 min',
      questions: [
        { q: 'Average of 10, 20, 30, 40?', options: ['20', '25', '30', '35'], answer: '25', explain: 'Sum 100 divided by 4.' },
        { q: 'If A can finish work in 5 days, one-day work is:', options: ['1/2', '1/3', '1/5', '5'], answer: '1/5', explain: 'Standard efficiency approach.' },
        { q: 'A train 100m long crosses a pole in 10s. Speed?', options: ['5 m/s', '10 m/s', '15 m/s', '20 m/s'], answer: '10 m/s', explain: 'Distance 100 / time 10.' },
        { q: 'Ratio 2:3 means total parts are:', options: ['2', '3', '5', '6'], answer: '5', explain: '2 + 3 = 5 total parts.' },
        { q: 'Probability can never be:', options: ['0', '0.4', '1', '1.5'], answer: '1.5', explain: 'Probability lies between 0 and 1.' }
      ]
    }
  ],
  videos: [
    { title: 'Aptitude Basics for Placements', type: 'Analytical', duration: '45 min', url: 'https://www.youtube.com/results?search_query=aptitude+basics+placements', reason: 'Quick way to reset percentages, averages, time-work, and speed-distance.' },
    { title: 'C++ Interview Questions for Freshers', type: 'C++', duration: '60 min', url: 'https://www.youtube.com/results?search_query=c%2B%2B+interview+questions+for+freshers', reason: 'Good for OOP, STL, pointers, and common viva-style questions.' },
    { title: 'Python Interview Preparation', type: 'Python', duration: '50 min', url: 'https://www.youtube.com/results?search_query=python+interview+questions+for+freshers', reason: 'Useful for core syntax, collections, OOP, and beginner scripting interview topics.' },
    { title: 'Perl Tutorial and Regex Basics', type: 'Perl', duration: '40 min', url: 'https://www.youtube.com/results?search_query=perl+regex+tutorial', reason: 'Helpful for text processing and automation-oriented roles.' },
    { title: 'Resume Tips for Software Freshers', type: 'Resume', duration: '25 min', url: 'https://www.youtube.com/results?search_query=software+fresher+resume+tips', reason: 'Shows what to add, remove, and how to make project bullets stronger.' },
    { title: 'HR Interview Questions for Freshers', type: 'HR', duration: '35 min', url: 'https://www.youtube.com/results?search_query=hr+interview+questions+for+freshers', reason: 'Helps with confidence and cleaner behavioral answers.' }
  ],
  resumeChecklist: [
    { title: 'One-page format', desc: 'Keep fresher resume concise unless you have substantial internships/publications.' },
    { title: 'Strong headline', desc: 'Add degree, target role, and 2–3 strengths instead of vague objective lines.' },
    { title: 'Project bullets', desc: 'Use action verb + tech stack + measurable output or impact.' },
    { title: 'Skills ordering', desc: 'Put strongest and interview-ready skills first: C++, Python, SQL, Git, OOP, DSA basics.' },
    { title: 'ATS keywords', desc: 'Mirror job description keywords where truthful and relevant.' },
    { title: 'No clutter', desc: 'Remove weak hobbies, outdated school achievements, and decorative charts.' }
  ],
  resumeBullets: [
    { title: 'Project Bullet 1', desc: 'Built a Python-based attendance analysis tool using pandas, reducing manual report preparation time by 60%.' },
    { title: 'Project Bullet 2', desc: 'Developed a C++ console application implementing file-based student record management with modular functions and input validation.' },
    { title: 'Project Bullet 3', desc: 'Created a mini web dashboard to visualize placement preparation metrics and quiz progress for peers.' },
    { title: 'Project Bullet 4', desc: 'Automated log parsing through regex-based scripting to extract error summaries from raw text files.' }
  ],
  hr: [
    { title: 'Tell me about yourself', desc: 'Structure: present role/degree, relevant project/internship strengths, then why this role fits your next step.' },
    { title: 'Strengths', desc: 'Pick 2–3 job-relevant strengths backed by examples: disciplined learner, debugging mindset, collaborative working style.' },
    { title: 'Weaknesses', desc: 'Use a real but manageable weakness and show what you are doing to improve it.' },
    { title: 'Why should we hire you?', desc: 'Connect your learning speed, project exposure, and willingness to execute under guidance.' },
    { title: 'Project explanation', desc: 'Always explain problem, your role, stack used, logic, result, and one challenge faced.' },
    { title: 'Questions to ask interviewer', desc: 'Ask about team onboarding, success metrics in first 90 days, and tools/workflow used.' }
  ],
  tasks: [
    { id: 'task1', title: 'Solve 10 aptitude questions', desc: 'Practice with timer and review wrong answers.' },
    { id: 'task2', title: 'Revise 10 flashcards', desc: 'Pick a technical category plus HR.' },
    { id: 'task3', title: 'Code one easy problem', desc: 'Use C++ or Python and explain your solution aloud.' },
    { id: 'task4', title: 'Improve one resume bullet', desc: 'Add metrics, stack, or clear action verb.' },
    { id: 'task5', title: 'Practice self-introduction', desc: 'Record yourself for 60–90 seconds.' },
    { id: 'task6', title: 'Watch one targeted video', desc: 'Choose weak area: aptitude, coding, resume, or HR.' }
  ],
  interviewDay: [
    { id: 'day1', title: 'Resume and links ready', desc: 'Resume PDF, GitHub, LinkedIn, and project links should be accessible.' },
    { id: 'day2', title: 'Top 3 projects revised', desc: 'Be ready to explain problem, architecture, stack, and result.' },
    { id: 'day3', title: 'Aptitude formulas revised', desc: 'Review percentages, averages, time-work, and ratios.' },
    { id: 'day4', title: 'Environment check', desc: 'Laptop, browser, coding IDE, internet, charger, and quiet room.' },
    { id: 'day5', title: 'Questions for interviewer prepared', desc: 'Keep 2–3 role-relevant questions ready.' }
  ],
  companyTests: [
    {
      id: 'service', name: 'Service Company Round', intro: 'Focus on aptitude, reasoning, basic coding syntax, communication, and consistency. Think TCS/Infosys/Wipro style.',
      questions: [
        { q: 'Which matters most in service-company interviews for freshers?', options: ['Only advanced DSA', 'Balanced aptitude, basics, communication', 'Only open-source history', 'Only college marks'], answer: 'Balanced aptitude, basics, communication', explain: 'These companies value trainability and balanced readiness.' },
        { q: 'In Python, which structure is ordered and mutable?', options: ['Tuple', 'List', 'Set', 'Frozen set'], answer: 'List', explain: 'List preserves order and is mutable.' },
        { q: 'Find the next number: 3, 6, 11, 18, 27, ?', options: ['34', '36', '38', '40'], answer: '38', explain: 'Differences: 3,5,7,9 then 11.' },
        { q: 'Strong resume bullet includes:', options: ['Random adjectives', 'Family details', 'Action + tech + impact', 'Long paragraph'], answer: 'Action + tech + impact', explain: 'That is the strongest structure.' },
        { q: 'Best response to “Why this company?”', options: ['Any job is okay', 'Role learning path and delivery exposure', 'Higher cafeteria budget', 'My friend joined'], answer: 'Role learning path and delivery exposure', explain: 'Professional and company-relevant.' }
      ]
    },
    {
      id: 'product', name: 'Product Company Mini Round', intro: 'More weight on problem solving, code quality, data structures, debugging, and project depth.',
      questions: [
        { q: 'Which is the best reason to discuss time complexity?', options: ['To sound smart', 'To compare solution efficiency', 'To avoid coding', 'Not needed in interviews'], answer: 'To compare solution efficiency', explain: 'Efficiency comparison is the point.' },
        { q: 'Which C++ container is best for LIFO behavior?', options: ['queue', 'stack', 'map', 'set'], answer: 'stack', explain: 'Stack follows last-in-first-out.' },
        { q: 'What is a hash map useful for?', options: ['Sorting only', 'Fast lookup by key', 'Only recursion', 'Only graphs'], answer: 'Fast lookup by key', explain: 'Hash maps are commonly used for quick lookup.' },
        { q: 'A good project explanation starts with:', options: ['Random code details', 'Problem statement and user need', 'Team lunch story', 'Tool version numbers'], answer: 'Problem statement and user need', explain: 'Context first, then implementation.' },
        { q: 'What shows fresher potential in product interviews?', options: ['Rote memorization', 'Structured thinking and debugging ability', 'Very long self-introduction', 'Decorative resume'], answer: 'Structured thinking and debugging ability', explain: 'Potential is judged through thought process.' }
      ]
    },
    {
      id: 'startup', name: 'Startup Interview Sprint', intro: 'Expect hands-on execution, ownership mindset, quick learning, and practical project discussions.',
      questions: [
        { q: 'Best quality for startup fresher roles?', options: ['Slow adaptation', 'Ownership and quick learning', 'Avoid ambiguity', 'Only theory'], answer: 'Ownership and quick learning', explain: 'Startups value speed and initiative.' },
        { q: 'Why is Python popular in startups?', options: ['Verbose syntax', 'Fast development cycle', 'No libraries exist', 'Only hardware use'], answer: 'Fast development cycle', explain: 'Python is valued for rapid development.' },
        { q: 'Which answer sounds strongest?', options: ['I know everything', 'I learn fast and ship practical solutions', 'I prefer zero feedback', 'I dislike collaboration'], answer: 'I learn fast and ship practical solutions', explain: 'This signals execution and growth mindset.' },
        { q: 'Best project proof for startup roles?', options: ['Title only', 'Live demo, GitHub, metrics', 'Only screenshots', 'No explanation'], answer: 'Live demo, GitHub, metrics', explain: 'Concrete proof matters.' },
        { q: 'How should you handle an unknown interview question?', options: ['Panic', 'Guess wildly', 'Clarify, reason aloud, attempt systematically', 'Stay silent'], answer: 'Clarify, reason aloud, attempt systematically', explain: 'Structured reasoning is valued.' }
      ]
    }
  ]
};
