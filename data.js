const TODAY_STR = 'April 3, 2026';

function shuffleWithSeed(arr, seed = 1) {
  const out = [...arr];
  let s = seed >>> 0;
  for (let i = out.length - 1; i > 0; i--) {
    s = (1664525 * s + 1013904223) >>> 0;
    const j = s % (i + 1);
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

function buildGeneratedMcqs(config) {
  const out = [];
  let id = 1;
  for (const t of config.topics) {
    for (let i = 0; i < t.templates.length; i++) {
      const tpl = t.templates[i];
      for (let j = 0; j < tpl.count; j++) {
        const q = tpl.make(j, id, t.topic, config.companies[j % config.companies.length], config.levels[j % config.levels.length]);
        out.push({ id: `${config.prefix}${id++}`, topic: t.topic, ...q });
      }
    }
  }
  return out;
}

const analyticalQuestions = buildGeneratedMcqs({
  prefix: 'an',
  companies: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'GOOG', 'MSFT', 'AMD', 'NVIDIA'],
  levels: ['Easy', 'Medium', 'Hard'],
  topics: [
    {
      topic: 'Percentages',
      templates: [{
        count: 22,
        make: (j, id, topic, company, level) => {
          const base = 120 + j * 7;
          const pct = 5 + (j % 11);
          const ans = +(base * pct / 100).toFixed(2);
          return {
            company, level,
            q: `${pct}% of ${base} is:`,
            options: shuffleWithSeed([String(ans), String(ans + 2), String(ans - 3), String(ans + 5)], id),
            answer: String(ans),
            explanation: `${pct}% means ${pct}/100. So (${pct}/100) × ${base} = ${ans}.`
          };
        }
      }]
    },
    {
      topic: 'Profit & Loss',
      templates: [{
        count: 24,
        make: (j, id, topic, company, level) => {
          const cp = 250 + j * 13;
          const p = 5 + (j % 12);
          const sp = +(cp * (100 + p) / 100).toFixed(2);
          return {
            company, level,
            q: `An item with cost price ₹${cp} is sold at a profit of ${p}%. What is its selling price?`,
            options: shuffleWithSeed([`₹${sp}`, `₹${(sp+12).toFixed(2)}`, `₹${(sp-10).toFixed(2)}`, `₹${(sp+25).toFixed(2)}`], id),
            answer: `₹${sp}`,
            explanation: `Selling price = CP × (100 + profit%)/100 = ${cp} × ${100+p}/100 = ${sp}.`
          };
        }
      }]
    },
    {
      topic: 'Ratio & Proportion',
      templates: [{
        count: 24,
        make: (j, id, topic, company, level) => {
          const a = 2 + (j % 5);
          const b = 3 + (j % 7);
          const total = (a + b) * (10 + (j % 6));
          const ans = total * a / (a + b);
          return {
            company, level,
            q: `If A:B = ${a}:${b} and A + B = ${total}, find A.`,
            options: shuffleWithSeed([String(ans), String(ans + b), String(ans + a), String(ans - a)], id),
            answer: String(ans),
            explanation: `Total parts = ${a+b}. One part = ${total}/(${a+b}) = ${total/(a+b)}. A = ${a} parts = ${ans}.`
          };
        }
      }]
    },
    {
      topic: 'Averages',
      templates: [{
        count: 24,
        make: (j, id, topic, company, level) => {
          const avg = 20 + (j % 9);
          const n = 5;
          const added = 30 + j;
          const ans = +(((avg * n) + added) / (n + 1)).toFixed(2);
          return {
            company, level,
            q: `The average of ${n} numbers is ${avg}. If another number ${added} is added, what is the new average?`,
            options: shuffleWithSeed([String(ans), String(ans + 1), String(ans - 1), String((ans + 2).toFixed(2))], id),
            answer: String(ans),
            explanation: `Old total = ${n} × ${avg} = ${n*avg}. New total = ${n*avg + added}. New average = ${(n*avg + added)}/${n+1} = ${ans}.`
          };
        }
      }]
    },
    {
      topic: 'Time & Work',
      templates: [{
        count: 24,
        make: (j, id, topic, company, level) => {
          const a = 8 + (j % 7);
          const b = 10 + (j % 6);
          const ans = +(1 / (1/a + 1/b)).toFixed(2);
          return {
            company, level,
            q: `A can finish a job in ${a} days and B in ${b} days. Working together, in how many days will they finish it?`,
            options: shuffleWithSeed([String(ans), String((ans+1).toFixed(2)), String((ans-1).toFixed(2)), String((ans+2).toFixed(2))], id),
            answer: String(ans),
            explanation: `Combined one-day work = 1/${a} + 1/${b}. Time = 1 / (1/${a} + 1/${b}) = ${ans} days.`
          };
        }
      }]
    },
    {
      topic: 'Time Speed Distance',
      templates: [{
        count: 24,
        make: (j, id, topic, company, level) => {
          const speed = 35 + j;
          const hrs = 2 + (j % 5);
          const ans = speed * hrs;
          return {
            company, level,
            q: `A vehicle moves at ${speed} km/h for ${hrs} hours. What distance does it cover?`,
            options: shuffleWithSeed([String(ans), String(ans+15), String(ans-10), String(ans+25)], id),
            answer: String(ans),
            explanation: `Distance = speed × time = ${speed} × ${hrs} = ${ans} km.`
          };
        }
      }]
    },
    {
      topic: 'Simple Interest',
      templates: [{
        count: 30,
        make: (j, id, topic, company, level) => {
          const p = 1000 + j * 150;
          const r = 4 + (j % 7);
          const t = 2 + (j % 4);
          const ans = +(p * r * t / 100).toFixed(2);
          return {
            company, level,
            q: `Find the simple interest on ₹${p} at ${r}% per annum for ${t} years.`,
            options: shuffleWithSeed([String(ans), String(ans+50), String(ans-30), String(ans+100)], id),
            answer: String(ans),
            explanation: `SI = (P × R × T)/100 = (${p} × ${r} × ${t})/100 = ${ans}.`
          };
        }
      }]
    },
    {
      topic: 'Probability & PnC',
      templates: [{
        count: 30,
        make: (j, id, topic, company, level) => {
          const n = 5 + (j % 5);
          const r = 2;
          const ans = (n * (n - 1)) / 2;
          return {
            company, level,
            q: `How many ways can 2 people be chosen from ${n} people?`,
            options: shuffleWithSeed([String(ans), String(ans+1), String(ans-1), String(ans+3)], id),
            answer: String(ans),
            explanation: `Use combination nC2 = n(n-1)/2 = ${n}×${n-1}/2 = ${ans}.`
          };
        }
      }]
    }]
});

const logicalQuestions = buildGeneratedMcqs({
  prefix: 'lg',
  companies: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'GOOG', 'MSFT', 'AMD', 'NVIDIA'],
  levels: ['Easy', 'Medium', 'Hard'],
  topics: [
    { topic: 'Number Series', templates: [{ count: 30, make: (j, id, topic, company, level) => {
      const start = 3 + (j % 6), step = 2 + (j % 4), n4 = start + step * 3, ans = n4 + step;
      return { company, level, q: `Find the next number in the series: ${start}, ${start+step}, ${start+2*step}, ${n4}, ?`, options: shuffleWithSeed([String(ans), String(ans+1), String(ans+2), String(ans-1)], id), answer: String(ans), explanation: `This is an arithmetic progression with common difference ${step}.` };
    }}]},
    { topic: 'Coding-Decoding', templates: [{ count: 25, make: (j, id, topic, company, level) => {
      const words = ['CODE','DATA','JAVA','TASK','LOGIC'];
      const w = words[j % words.length];
      const shifted = [...w].map(ch => String.fromCharCode(ch.charCodeAt(0)+1)).join('');
      return { company, level, q: `If each letter in ${w} is shifted by +1 alphabetically, what is the new word?`, options: shuffleWithSeed([shifted, shifted.slice(1)+shifted[0], w, shifted.split('').reverse().join('')], id), answer: shifted, explanation: `Shift each character one step ahead alphabetically.` };
    }}]},
    { topic: 'Blood Relations', templates: [{ count: 20, make: (j, id, topic, company, level) => ({ company, level, q: `Pointing to a child, Riya says, "She is the daughter of my mother's only daughter." How is the child related to Riya?`, options: shuffleWithSeed(['Daughter', 'Sister', 'Niece', 'Cousin'], id), answer: 'Daughter', explanation: `Mother's only daughter is Riya herself, so the child is her daughter.` }) }]},
    { topic: 'Direction Sense', templates: [{ count: 20, make: (j, id, topic, company, level) => {
      const n = 4 + (j % 5), e = 3 + (j % 4);
      return { company, level, q: `A person walks ${n} m north and then ${e} m east. In which direction is the final position from the start?`, options: shuffleWithSeed(['North-East','North-West','South-East','West'], id), answer: 'North-East', explanation: `North followed by east places the final position in the north-east quadrant.` };
    }}]},
    { topic: 'Syllogisms', templates: [{ count: 25, make: (j, id, topic, company, level) => ({ company, level, q: `Statements: All coders are thinkers. Some thinkers are gamers. Which conclusion definitely follows?`, options: shuffleWithSeed(['No definite conclusion about coders being gamers','All gamers are coders','Some coders are definitely gamers','No thinkers are gamers'], id), answer: 'No definite conclusion about coders being gamers', explanation: `The second statement does not guarantee overlap between coders and gamers.` }) }]},
    { topic: 'Seating Arrangement', templates: [{ count: 20, make: (j, id, topic, company, level) => ({ company, level, q: `Five friends sit in a row. A is immediately left of B. C sits at one end. Which can be true?`, options: shuffleWithSeed(['A and B occupy middle seats','B is left of A','C never sits at an end','A must sit at an end'], id), answer: 'A and B occupy middle seats', explanation: `The conditions only require A to be immediately left of B and C to be at an end.` }) }]},
    { topic: 'Statement & Conclusion', templates: [{ count: 20, make: (j, id, topic, company, level) => ({ company, level, q: `Statement: Regular debugging improves coding quality. Conclusion: Debugging can help interview performance.`, options: shuffleWithSeed(['Conclusion follows','Conclusion does not follow','Neither','Cannot be determined'], id), answer: 'Conclusion follows', explanation: `Better coding quality usually helps during interview coding rounds.` }) }]},
    { topic: 'Puzzles', templates: [{ count: 42, make: (j, id, topic, company, level) => ({ company, level, q: `Three boxes are labeled Red, Blue, and Mixed. All labels are wrong. If you pick one ball from the box labeled Mixed and it is red, which box contains only red balls?`, options: shuffleWithSeed(['The box labeled Blue','The box labeled Mixed','The box labeled Red','Cannot be determined'], id), answer: 'The box labeled Blue', explanation: `If the Mixed label is wrong and you drew red, that box is actually all red. Therefore the box labeled Blue must contain only red.` }) }]}]
});

const technicalBanks = {
  dsa: {
    title: 'DSA',
    summary: 'Arrays, strings, recursion, sorting, hashing, stacks, queues, linked lists, trees, graphs, heaps, DP, greedy, binary search, sliding window, two pointers.',
    mustKnow: ['Time/space complexity', 'Recursion and backtracking', 'Sorting and searching', 'Hash maps and sets', 'Linked list operations', 'Trees/BST/traversals', 'Graph traversal and shortest path', 'Dynamic programming patterns'],
    questions: [
      ['What is the time complexity of binary search?', 'O(log n)', 'Binary search halves the search space each step.'],
      ['When would you prefer a hash map over an array lookup?', 'When keys are sparse or not continuous integers.', 'Hash maps support expected O(1) access for arbitrary keys.'],
      ['Difference between stack and queue?', 'Stack is LIFO; queue is FIFO.', 'The removal order is the key distinction.'],
      ['Why is merge sort preferred for linked lists?', 'Because linked lists allow efficient splitting/merging without random access.', 'Quick sort relies heavily on indexing.'],
      ['What problem pattern is solved well by sliding window?', 'Contiguous subarray or substring optimization.', 'It avoids recomputing full ranges repeatedly.'],
      ['How do memoization and tabulation differ?', 'Memoization is top-down with caching; tabulation is bottom-up table filling.', 'Both are DP techniques.'],
      ['What traversal gives sorted order in BST?', 'Inorder traversal.', 'Left, root, right yields sorted keys in a BST.'],
      ['When do you use union-find?', 'For connectivity and cycle detection in disjoint sets.', 'Useful in Kruskal and dynamic connectivity.'],
      ['What is the use of a min-heap?', 'Efficient retrieval of minimum element.', 'Insert/delete-min are O(log n).'],
      ['What makes a greedy solution valid?', 'A proof that local optimal choice leads to global optimum.', 'Without proof, greedy is just a guess.']
    ]
  },
  dbms: {
    title: 'DBMS',
    summary: 'ER modeling, keys, normalization, indexing, transactions, ACID, locking, SQL joins, query optimization, isolation levels.',
    mustKnow: ['Primary/foreign/candidate keys', '1NF/2NF/3NF/BCNF', 'Inner/left/right/full joins', 'ACID properties', 'Index vs full scan', 'Normalization vs denormalization', 'Transactions and concurrency', 'Isolation anomalies'],
    questions: [
      ['What is normalization?', 'Structuring tables to reduce redundancy and improve integrity.', 'It decomposes relations based on dependencies.'],
      ['What is a foreign key?', 'A column that references a key in another table.', 'It enforces referential integrity.'],
      ['Difference between DELETE, TRUNCATE, DROP?', 'DELETE removes rows, TRUNCATE clears table data, DROP removes the table object.', 'Their logging and rollback behavior also differ.'],
      ['What is an index?', 'A data structure that speeds up lookups at the cost of extra storage and writes.', 'Common types include B-tree and hash indexes.'],
      ['What is a transaction?', 'A logical unit of work executed completely or not at all.', 'Transactions preserve consistency.'],
      ['Explain ACID.', 'Atomicity, Consistency, Isolation, Durability.', 'These properties ensure reliable transaction processing.'],
      ['What is a deadlock in DBMS?', 'A cycle of transactions waiting on each other’s locks.', 'Detection or prevention is required.'],
      ['What is the difference between WHERE and HAVING?', 'WHERE filters rows before grouping; HAVING filters groups after aggregation.', 'HAVING works with aggregate results.'],
      ['What is a composite key?', 'A key formed by multiple columns together.', 'Used when no single column uniquely identifies a row.'],
      ['When is denormalization useful?', 'For read-heavy systems where join reduction matters.', 'It trades some redundancy for performance.']
    ]
  },
  os: {
    title: 'Operating Systems',
    summary: 'Processes, threads, scheduling, memory, paging, synchronization, deadlock, file systems, system calls, virtual memory.',
    mustKnow: ['Process vs thread', 'Scheduling algorithms', 'Context switch', 'Paging and segmentation', 'Deadlock conditions', 'Mutex/semaphore/monitor', 'Virtual memory and page faults', 'User mode vs kernel mode'],
    questions: [
      ['Difference between process and thread?', 'Processes have separate address spaces; threads share process memory.', 'Threads are lighter weight for concurrency.'],
      ['What is a context switch?', 'Saving one running task state and loading another.', 'It enables multitasking but adds overhead.'],
      ['What causes deadlock?', 'Mutual exclusion, hold and wait, no preemption, circular wait.', 'All four Coffman conditions are required.'],
      ['What is paging?', 'Memory is divided into fixed-size pages and frames.', 'It helps non-contiguous allocation.'],
      ['What is thrashing?', 'Excessive paging causing poor CPU utilization.', 'The system spends more time swapping than executing.'],
      ['What is a semaphore?', 'A synchronization primitive used to control access to shared resources.', 'Can be binary or counting.'],
      ['What is the purpose of virtual memory?', 'To give processes a larger logical address space than physical RAM.', 'It also improves isolation.'],
      ['Difference between user mode and kernel mode?', 'Kernel mode has privileged access to hardware and memory.', 'User mode is restricted for safety.'],
      ['What is starvation?', 'A process waits indefinitely because resources keep going to others.', 'Aging can reduce starvation.'],
      ['What is the role of CPU scheduling?', 'Selecting the next ready process to run.', 'It affects throughput, waiting time, and fairness.']
    ]
  },
  oops: {
    title: 'OOPs',
    summary: 'Class, object, abstraction, encapsulation, inheritance, polymorphism, constructors, overriding, overloading, interfaces.',
    mustKnow: ['Four pillars of OOP', 'Class vs object', 'Constructor and destructor', 'Method overloading and overriding', 'Abstract class vs interface', 'Access specifiers', 'Composition vs inheritance', 'Static vs instance members'],
    questions: [
      ['What is encapsulation?', 'Bundling data and methods together while restricting direct access.', 'Usually implemented with access modifiers.'],
      ['What is abstraction?', 'Showing essential behavior while hiding implementation details.', 'Interfaces and abstract classes help achieve it.'],
      ['Difference between overloading and overriding?', 'Overloading changes parameter list; overriding redefines inherited behavior.', 'Overloading is compile-time; overriding is runtime polymorphism.'],
      ['Why use inheritance?', 'To reuse and extend existing behavior.', 'It models an is-a relationship.'],
      ['What is polymorphism?', 'The ability of the same interface to have different implementations.', 'Example: virtual methods in C++.'],
      ['What is composition?', 'Building classes using other class objects.', 'Often preferred over inheritance for flexibility.'],
      ['What is a virtual function?', 'A function enabling runtime dispatch through base-class pointers/references.', 'Used for runtime polymorphism in C++.'],
      ['What is a constructor?', 'A special method that initializes an object.', 'It runs automatically on object creation.'],
      ['What is an interface?', 'A contract specifying methods without full implementation.', 'Languages implement this differently.'],
      ['What is the difference between class and object?', 'A class is a blueprint; an object is an instance.', 'Objects occupy memory at runtime.']
    ]
  },
  cn: {
    title: 'Computer Networks',
    summary: 'OSI/TCP-IP, routing, switching, IP, TCP/UDP, DNS, HTTP/HTTPS, ports, congestion control, subnetting basics.',
    mustKnow: ['OSI layers', 'TCP vs UDP', 'IP addressing', 'MAC vs IP', 'DNS and DHCP', 'Three-way handshake', 'HTTP/HTTPS', 'Subnetting basics'],
    questions: [
      ['What is the difference between TCP and UDP?', 'TCP is connection-oriented and reliable; UDP is connectionless and faster.', 'TCP adds acknowledgments and retransmission.'],
      ['What does DNS do?', 'Translates domain names to IP addresses.', 'It acts like the internet’s phonebook.'],
      ['What is an IP address?', 'A logical address used for identifying devices on a network.', 'IPv4 and IPv6 are common versions.'],
      ['What is the OSI model?', 'A 7-layer conceptual framework for network communication.', 'It helps separate responsibilities.'],
      ['What is the three-way handshake?', 'SYN, SYN-ACK, ACK used to establish a TCP connection.', 'It synchronizes sequence numbers.'],
      ['What is the difference between hub, switch, and router?', 'Hub broadcasts, switch forwards by MAC, router forwards by IP.', 'Each works at different logical levels.'],
      ['What is HTTPS?', 'HTTP over TLS/SSL for secure encrypted communication.', 'It protects data in transit.'],
      ['What is subnetting?', 'Dividing a network into smaller logical networks.', 'It improves allocation and routing.'],
      ['What is NAT?', 'Network Address Translation maps private addresses to public ones.', 'Common in home/office routers.'],
      ['Why is UDP used in streaming?', 'Lower latency and no retransmission overhead.', 'Some packet loss is acceptable in real-time media.']
    ]
  },
  cpp: {
    title: 'C++',
    summary: 'Syntax, STL, OOP, references, pointers, memory management, templates, exception handling, recursion, strings, vectors, maps.',
    mustKnow: ['Pointers vs references', 'const correctness', 'STL containers', 'pass by value/reference', 'smart pointers', 'virtual function', 'templates', 'exception handling'],
    questions: [
      ['Difference between pointer and reference?', 'Pointers can be reassigned/null; references must alias an existing object.', 'References are often safer aliases.'],
      ['What is STL?', 'The Standard Template Library providing containers, iterators, and algorithms.', 'Examples: vector, map, sort.'],
      ['Why use const references in function parameters?', 'To avoid copying while preventing modification.', 'Especially useful for large objects.'],
      ['What is RAII?', 'Resource Acquisition Is Initialization.', 'Resources are tied to object lifetime.'],
      ['What is a smart pointer?', 'An object that manages dynamic memory automatically.', 'Examples: unique_ptr, shared_ptr.'],
      ['What is the difference between map and unordered_map?', 'map is ordered tree-based; unordered_map is hash-based.', 'Average lookup is O(log n) vs O(1).'],
      ['What is function overloading?', 'Multiple functions with same name but different parameter lists.', 'Resolved at compile time.'],
      ['What is a virtual destructor?', 'A destructor that ensures proper cleanup through base pointers.', 'Essential for polymorphic base classes.'],
      ['What does new do?', 'Allocates memory dynamically and returns a pointer.', 'delete releases it.'],
      ['What is template programming?', 'Writing generic code parameterized by types.', 'Used across STL.']
    ]
  },
  python: {
    title: 'Python',
    summary: 'Data types, list/dict/set/tuple, comprehensions, functions, OOP, exceptions, file handling, iterators, generators, modules.',
    mustKnow: ['Mutable vs immutable', 'List vs tuple', 'dict/set basics', 'comprehensions', 'args/kwargs', 'generator', 'decorator basics', 'exception handling'],
    questions: [
      ['Difference between list and tuple?', 'Lists are mutable; tuples are immutable.', 'Tuples can be hashable if contents are hashable.'],
      ['What is a dictionary?', 'A key-value mapping data structure.', 'Average lookup is O(1).'],
      ['What is a generator?', 'A function that yields values lazily.', 'It saves memory for large sequences.'],
      ['What is list comprehension?', 'Compact syntax to build lists from iterables.', 'Useful for readable transformations/filters.'],
      ['What are *args and **kwargs?', 'Variable positional and keyword arguments.', 'They make functions flexible.'],
      ['What is the difference between is and ==?', 'is checks identity; == checks value equality.', 'Two equal objects may not be the same object.'],
      ['What is exception handling?', 'Catching and managing runtime errors using try/except.', 'It prevents crashes and enables recovery.'],
      ['What is PEP 8?', 'Python style guide.', 'It promotes readable consistent code.'],
      ['What is the purpose of __init__?', 'Initializer method called when creating an object.', 'Used to set instance state.'],
      ['What is slicing?', 'Extracting a subsequence using start:stop:step.', 'Works on strings, lists, tuples, etc.']
    ]
  },
  perl: {
    title: 'Perl',
    summary: 'Scalars, arrays, hashes, regular expressions, file handling, scripting, command-line processing, text parsing.',
    mustKnow: ['Scalar/array/hash', 'Regex basics', 'split/join', 'File open/read/write', 'ARGV', 'foreach loop', 'subroutines', 'Text processing'],
    questions: [
      ['What is a scalar in Perl?', 'A single value such as number or string.', 'Scalars are prefixed with $.'],
      ['What is a hash in Perl?', 'An associative array of key-value pairs.', 'Hashes are prefixed with %.'],
      ['Why is Perl strong in scripting?', 'It excels at text processing and regular expressions.', 'That made it popular in automation and log parsing.'],
      ['What does @ARGV contain?', 'Command-line arguments passed to the script.', 'It is useful for CLI scripts.'],
      ['What is a regex used for?', 'Pattern matching and text extraction.', 'Perl is famous for regex support.'],
      ['How do you define a subroutine?', 'Using the sub keyword.', 'Example: sub hello { ... }'],
      ['What is chomp?', 'It removes trailing newline from input.', 'Common after reading lines.'],
      ['Difference between array and hash?', 'Array uses numeric indices; hash uses keys.', 'They solve different storage needs.'],
      ['How do you open a file in Perl?', 'Using open with a file handle and mode.', 'Always handle errors while opening files.'],
      ['What is the benefit of strict and warnings?', 'They catch bugs early.', 'Good Perl scripts usually enable both.']
    ]
  }
};

function buildTechMcqs() {
  const mcqs = [];
  let idx = 1;
  Object.entries(technicalBanks).forEach(([key, bank], bankIdx) => {
    bank.questions.forEach((qset, qIdx) => {
      const [q, ans, exp] = qset;
      const distractors = {
        dsa: ['O(n^2)', 'Use recursion only', 'Always use arrays'],
        dbms: ['UI rendering layer', 'Network packet header', 'Compiler optimization only'],
        os: ['Frontend rendering issue', 'CSS memory leak', 'A database schema rule'],
        oops: ['A sorting algorithm', 'A database index', 'A network protocol'],
        cn: ['A loop statement', 'A database trigger', 'A Python package'],
        cpp: ['A browser cache', 'A SQL join', 'A network cable'],
        python: ['A hardware register', 'A compiled C header', 'An HTML element'],
        perl: ['A Java interface', 'A CSS selector', 'A TCP port']
      }[key];
      mcqs.push({
        id: `tm${idx++}`,
        area: bank.title,
        level: qIdx < 3 ? 'Easy' : qIdx < 7 ? 'Medium' : 'Hard',
        q,
        options: shuffleWithSeed([ans, ...distractors], idx + bankIdx + qIdx),
        answer: ans,
        explanation: exp
      });
    });
  });
  return mcqs;
}

const technicalMcqs = buildTechMcqs();

function companyQuestion(company, i, topic, q, answer, explanation, options) {
  return { id: `${company}_${i}`, topic, company, level: i < 4 ? 'Easy' : i < 8 ? 'Medium' : 'Hard', q, options, answer, explanation };
}

const companyTests = [
  {
    id: 'goog', title: 'Google Mini-Test', durationMinutes: 20,
    focus: 'DSA, OOP, complexity, DBMS, networks, Python/C++ coding logic',
    questions: [
      companyQuestion('GOOG',1,'DSA','What is the average-case lookup time in a hash table?','O(1)','Hash tables are designed for expected constant-time access.',['O(1)','O(log n)','O(n)','O(n log n)']),
      companyQuestion('GOOG',2,'DSA','Which traversal is best to serialize a binary tree with null markers?','Preorder or level order with null markers','Both can preserve structure if null markers are included.',['Only inorder','Preorder or level order with null markers','Postorder without nulls','None']),
      companyQuestion('GOOG',3,'OOPs','What enables runtime polymorphism in C++?','Virtual functions','Runtime dispatch in C++ needs virtual functions.',['Templates','Virtual functions','Namespaces','Macros']),
      companyQuestion('GOOG',4,'DBMS','Which normal form removes transitive dependency?','3NF','3NF eliminates transitive dependency on candidate keys.',['1NF','2NF','3NF','4NF']),
      companyQuestion('GOOG',5,'OS','What is the main cost of a context switch?','CPU time spent saving/restoring state','Context switching adds overhead without useful application work.',['Extra disk space','CPU time spent saving/restoring state','More SQL joins','Reduced compile time']),
      companyQuestion('GOOG',6,'CN','Which protocol provides reliable ordered delivery?','TCP','TCP includes acknowledgments and sequence numbers.',['UDP','IP','TCP','ARP']),
      companyQuestion('GOOG',7,'Python','What does a generator return?','An iterator-like object that yields lazily','Generators yield values on demand.',['A fully built list','A random value','An iterator-like object that yields lazily','A class only']),
      companyQuestion('GOOG',8,'DSA','Which technique best finds shortest path in unweighted graph?','BFS','BFS discovers nodes by distance in edges.',['DFS','BFS','Dijkstra with heaps only','Greedy sorting']),
      companyQuestion('GOOG',9,'DBMS','What is an index trade-off?','Faster reads but slower writes and more storage','Indexes speed reads but must be maintained.',['Only faster writes','Only less storage','Faster reads but slower writes and more storage','No trade-off']),
      companyQuestion('GOOG',10,'DSA','Which paradigm suits "overlapping subproblems + optimal substructure"?','Dynamic programming','That combination is the classic DP signal.',['Greedy only','Dynamic programming','Binary search only','Hashing only'])
    ]
  },
  {
    id: 'msft', title: 'Microsoft Mini-Test', durationMinutes: 20,
    focus: 'OOP, OS, DBMS, trees, complexity, system fundamentals',
    questions: [
      companyQuestion('MSFT',1,'OOPs','Which principle hides internal implementation details?','Abstraction','Abstraction exposes what an object does, not how it does it.',['Inheritance','Abstraction','Aggregation','Compilation']),
      companyQuestion('MSFT',2,'OS','Which scheduling metric focuses on minimizing average wait time?','Shortest Job First','SJF minimizes average waiting time in the ideal case.',['Round Robin','Shortest Job First','FCFS only','Priority inversion']),
      companyQuestion('MSFT',3,'DBMS','Which join returns matching rows from both tables only?','Inner join','Inner join keeps only matched rows.',['Left join','Right join','Inner join','Cross join']),
      companyQuestion('MSFT',4,'DSA','Which traversal uses a queue?','Level order traversal','BFS/level order uses a queue.',['Inorder','Preorder','Postorder','Level order traversal']),
      companyQuestion('MSFT',5,'CN','What resolves a domain name to IP?','DNS','DNS maps names to addresses.',['DHCP','DNS','NAT','FTP']),
      companyQuestion('MSFT',6,'C++','Why use smart pointers?','Automatic resource management','Smart pointers prevent many memory leaks.',['Faster syntax highlighting','Automatic resource management','Network retries','Database locking']),
      companyQuestion('MSFT',7,'OS','What does semaphore help with?','Synchronization','Semaphores coordinate access to shared resources.',['Compilation','Compression','Synchronization','Serialization']),
      companyQuestion('MSFT',8,'DSA','Best structure for LRU cache core operations?','Hash map + doubly linked list','This combo supports O(1) updates and eviction.',['Queue only','Hash map + doubly linked list','Array only','Tree only']),
      companyQuestion('MSFT',9,'DBMS','Which property ensures committed data survives crashes?','Durability','Durability is the D in ACID.',['Isolation','Durability','Atomicity','Consistency']),
      companyQuestion('MSFT',10,'Python','Which keyword handles exceptions?','try/except','Python catches exceptions with try/except.',['for/in','match/case','try/except','yield/from'])
    ]
  },
  {
    id: 'amd', title: 'AMD Mini-Test', durationMinutes: 20,
    focus: 'C++, OS, CN, low-level thinking, performance, pointers',
    questions: [
      companyQuestion('AMD',1,'C++','What is a dangling pointer?','A pointer referring to freed or invalid memory','Dereferencing it is undefined behavior.',['A constant pointer','A pointer referring to freed or invalid memory','A null reference','A smart pointer']),
      companyQuestion('AMD',2,'OS','What is virtual memory?','A technique that gives processes larger logical memory via disk-backed pages','It maps logical to physical memory with paging.',['A GPU-only memory mode','A technique that gives processes larger logical memory via disk-backed pages','A network cache','A compiler flag']),
      companyQuestion('AMD',3,'CN','Which address works at network layer?','IP address','Routing decisions are made using IP addresses.',['MAC address only','IP address','Port number','URL']),
      companyQuestion('AMD',4,'DSA','What is the time complexity of heap insertion?','O(log n)','The heap property is restored up the tree.',['O(1)','O(log n)','O(n)','O(n log n)']),
      companyQuestion('AMD',5,'OOPs','Which relation is stronger: composition or aggregation?','Composition','Composition implies stronger ownership/lifecycle relation.',['Aggregation','Composition','Inheritance','Association']),
      companyQuestion('AMD',6,'OS','What causes deadlock?','Circular waiting among resource holders','Deadlock requires circular wait among the Coffman conditions.',['Fast I/O only','Circular waiting among resource holders','Low CPU temperature','Static memory only']),
      companyQuestion('AMD',7,'C++','Which container gives contiguous dynamic storage?','vector','std::vector stores elements contiguously.',['map','set','vector','list']),
      companyQuestion('AMD',8,'DBMS','What is the purpose of normalization?','Reduce redundancy and anomalies','It improves structure and data integrity.',['Increase duplicate rows','Reduce redundancy and anomalies','Replace indexes','Encrypt network packets']),
      companyQuestion('AMD',9,'DSA','Which algorithm finds minimum spanning tree?','Kruskal or Prim','Both are standard MST algorithms.',['BFS only','Kruskal or Prim','Kadane','Bellman-Ford']),
      companyQuestion('AMD',10,'CN','Which protocol is typically used for low-latency streaming?','UDP','UDP avoids retransmission overhead.',['TCP','SMTP','UDP','SSH'])
    ]
  },
  {
    id: 'nvidia', title: 'NVIDIA Mini-Test', durationMinutes: 20,
    focus: 'Performance, C++, parallel/concurrency basics, memory, DSA',
    questions: [
      companyQuestion('NVIDIA',1,'C++','Why is pass-by-reference useful for large objects?','It avoids copying overhead','Reference passing can reduce time and memory overhead.',['It randomizes memory','It avoids copying overhead','It encrypts data','It changes ownership']),
      companyQuestion('NVIDIA',2,'OS','What is race condition?','Outcome depends on timing of concurrent execution','Shared mutable state without coordination can cause it.',['A sorting bug','Outcome depends on timing of concurrent execution','A DNS issue','A database key']),
      companyQuestion('NVIDIA',3,'DSA','Which structure is ideal for priority scheduling?','Heap','Priority queues are commonly implemented with heaps.',['Stack','Heap','Array only','Trie']),
      companyQuestion('NVIDIA',4,'CN','What is congestion control concerned with?','Preventing network overload','It adjusts sending behavior to avoid collapse.',['Increasing RAM','Preventing network overload','Parsing JSON','Tree balancing']),
      companyQuestion('NVIDIA',5,'DBMS','What does isolation protect against?','Interference between concurrent transactions','Isolation limits visible side effects across concurrent work.',['Disk failure only','Interference between concurrent transactions','Compilation errors','Cache misses']),
      companyQuestion('NVIDIA',6,'OOPs','Which concept allows one interface with many implementations?','Polymorphism','Polymorphism lets callers use a common contract.',['Encapsulation','Polymorphism','Serialization','Compilation']),
      companyQuestion('NVIDIA',7,'Python','What is the benefit of generators?', 'Lower memory use for streamed data', 'Values are produced lazily instead of all at once.', ['More GPU memory','Lower memory use for streamed data','Faster DNS','More SQL joins']),
      companyQuestion('NVIDIA',8,'DSA','Which traversal is natural for topological sorting implementation?','DFS or indegree-based BFS','Both standard approaches are used.',['Inorder only','DFS or indegree-based BFS','Level order in BST only','Merge sort']),
      companyQuestion('NVIDIA',9,'OS','What does mutex enforce?','Mutual exclusion','Only one thread can enter critical section at a time.',['Packet routing','Mutual exclusion','Schema migration','Inheritance']),
      companyQuestion('NVIDIA',10,'C++','What is move semantics mainly for?','Avoiding expensive deep copies of temporaries','Moves transfer resources efficiently.',['Network retries','Avoiding expensive deep copies of temporaries','Stronger typing only','SQL optimization'])
    ]
  },
  {
    id: 'tcs', title: 'TCS Mini-Test', durationMinutes: 20,
    focus: 'DBMS, OOP, OS, CN, coding basics, service-company technical round',
    questions: [
      companyQuestion('TCS',1,'OOPs','What are the four pillars of OOP?','Encapsulation, abstraction, inheritance, polymorphism','These are the standard OOP pillars.',['Inheritance, SQL, recursion, sockets','Encapsulation, abstraction, inheritance, polymorphism','Loops, arrays, graphs, trees','CPU, RAM, disk, cache']),
      companyQuestion('TCS',2,'DBMS','What does SQL stand for?','Structured Query Language','SQL is the standard language for relational databases.',['Structured Queue Language','Structured Query Language','Simple Query Logic','Sequential Query Layer']),
      companyQuestion('TCS',3,'OS','Which memory management technique uses fixed-size pages?','Paging','Paging maps pages to frames.',['Segmentation only','Paging','Swapping only','Indexing']),
      companyQuestion('TCS',4,'CN','Which layer handles routing in OSI?','Network layer','Routing decisions are made at the network layer.',['Transport layer','Session layer','Network layer','Application layer']),
      companyQuestion('TCS',5,'Python','Which structure stores key-value pairs?','Dictionary','Python dict stores key-value mappings.',['Tuple','Dictionary','String','List only']),
      companyQuestion('TCS',6,'C++','What is function overloading?','Same function name with different parameter lists','Compiler selects the correct overload.',['Changing return type only','Same function name with different parameter lists','Calling a function twice','Using many files']),
      companyQuestion('TCS',7,'DSA','Which structure follows FIFO?','Queue','Queue removes in first-in-first-out order.',['Stack','Queue','Heap','Tree']),
      companyQuestion('TCS',8,'DBMS','Which key uniquely identifies a row?','Primary key','Primary key uniquely identifies a tuple/row.',['Foreign key','Composite view','Primary key','Alias']),
      companyQuestion('TCS',9,'OS','What is a thread?', 'A lightweight unit of execution within a process', 'Threads share process resources.', ['A disk partition','A lightweight unit of execution within a process','A database row','A router entry']),
      companyQuestion('TCS',10,'CN','Which protocol is used to transfer web pages?','HTTP','Browsers commonly use HTTP/HTTPS.',['FTP','SMTP','HTTP','SNMP'])
    ]
  },
  {
    id: 'infosys', title: 'Infosys Mini-Test', durationMinutes: 20,
    focus: 'Core CS theory + coding basics + project discussion readiness',
    questions: [
      companyQuestion('Infosys',1,'DBMS','What is a foreign key used for?','Referential integrity between tables','It links related tables safely.',['Sorting arrays','Referential integrity between tables','Encrypting data','Running threads']),
      companyQuestion('Infosys',2,'OOPs','What is inheritance?','Creating a new class from an existing class','It supports reuse and extension.',['Hiding data','Creating a new class from an existing class','Deleting objects','Allocating memory']),
      companyQuestion('Infosys',3,'OS','What is deadlock?', 'A state where processes wait indefinitely for each other', 'Circular wait can create deadlock.', ['A state where processes wait indefinitely for each other','A sorting technique','A syntax error','A DNS timeout']),
      companyQuestion('Infosys',4,'CN','What does IP stand for?','Internet Protocol','IP is used for addressing and routing.',['Internal Process','Internet Protocol','Indexed Packet','Input Port']),
      companyQuestion('Infosys',5,'Python','What is the output type of range(5)?','A range object','In Python 3, range returns a lazy range object.',['List','Tuple','A range object','Set']),
      companyQuestion('Infosys',6,'C++','What is a class?', 'A blueprint for creating objects', 'Objects are instances of a class.', ['A memory address','A blueprint for creating objects','A SQL table','A router device']),
      companyQuestion('Infosys',7,'DSA','Which search works on sorted arrays by halving the range?','Binary search','Binary search requires sorted data.',['Linear search','Binary search','DFS','BFS']),
      companyQuestion('Infosys',8,'DBMS','What is 1NF mainly about?','Atomic values in each field','First normal form removes repeating groups/non-atomic values.',['Only primary keys','Atomic values in each field','Distributed joins','Compression']),
      companyQuestion('Infosys',9,'OS','What is paging?', 'Dividing memory into pages and frames', 'Paging supports non-contiguous allocation.', ['A graph algorithm','Dividing memory into pages and frames','A web protocol','An OOP feature']),
      companyQuestion('Infosys',10,'CN','What is DNS?', 'A service that maps domain names to IP addresses', 'It helps users access services by human-readable names.', ['A CPU scheduler','A service that maps domain names to IP addresses','A SQL optimizer','A file format'])
    ]
  }
];

function buildMockTests() {
  const coreCompanies = ['GOOG','MSFT','AMD','NVIDIA','TCS','Infosys'];
  const techPool = technicalMcqs;
  const analyticalPool = analyticalQuestions.filter(q => ['Easy','Medium'].includes(q.level));
  const logicalPool = logicalQuestions.filter(q => ['Easy','Medium'].includes(q.level));
  const tests = [];
  for (let i = 0; i < 25; i++) {
    const companyFocus = coreCompanies[i % coreCompanies.length];
    const techSlice = shuffleWithSeed(techPool, 100 + i).slice(0, 17).map((q, idx) => ({ ...q, company: companyFocus, id: `${q.id}_m${i}_${idx}` }));
    const dsaExtra = shuffleWithSeed(technicalMcqs.filter(q => ['DSA','DBMS','Operating Systems','OOPs','Computer Networks','C++','Python'].includes(q.area)), 200 + i).slice(0, 5).map((q, idx) => ({ ...q, company: companyFocus, id: `${q.id}_mx${i}_${idx}` }));
    const analyticalSlice = shuffleWithSeed(analyticalPool.filter(q => q.company === companyFocus || ['TCS','Infosys','GOOG','MSFT','AMD','NVIDIA'].includes(q.company)), 300 + i).slice(0, 4);
    const logicalSlice = shuffleWithSeed(logicalPool.filter(q => q.company === companyFocus || ['TCS','Infosys','GOOG','MSFT','AMD','NVIDIA'].includes(q.company)), 400 + i).slice(0, 4);
    const questions = [...techSlice, ...dsaExtra, ...analyticalSlice, ...logicalSlice].slice(0,25);
    tests.push({
      id: `mock_${i+1}`,
      title: `Mock Test ${i+1}`,
      durationMinutes: 30,
      companyFocus,
      composition: '17 technical + 4 analytical + 4 logical',
      questions
    });
  }
  return tests;
}

const mockTests = buildMockTests();

const flashcards = [
  ['Big-O', 'Always speak both time and space complexity in coding interviews.'],
  ['Normalization', '1NF atomic values, 2NF remove partial dependency, 3NF remove transitive dependency.'],
  ['TCP', 'Reliable, ordered, connection-oriented.'],
  ['UDP', 'Fast, connectionless, not reliability-guaranteed.'],
  ['Virtual Function', 'Needed for runtime polymorphism in C++.'],
  ['Generator', 'Yields lazily in Python and saves memory.'],
  ['Semaphore', 'Synchronization primitive controlling access to shared resources.'],
  ['Deadlock', 'Mutual exclusion, hold/wait, no preemption, circular wait.'],
  ['Hash Map', 'Great for expected O(1) lookups.'],
  ['Resume Bullet', 'Use action verb + task + tech + measurable result.']
].map((x, i) => ({ id: `f${i+1}`, front: x[0], back: x[1], category: i < 5 ? 'Technical' : 'Interview' }));

const videos = {
  aptitude: [
    { title: 'Quantitative Aptitude Full Course - Placement Preparation', url: 'https://www.youtube.com/results?search_query=quantitative+aptitude+full+course+placement+preparation', note: 'Fast way to revise percentages, ratios, averages, SI/CI, time-work.' },
    { title: 'Aptitude Tricks for Placements', url: 'https://www.youtube.com/results?search_query=aptitude+tricks+for+placements', note: 'Useful for service-company aptitude rounds.' },
    { title: 'Logical Reasoning Placement Playlist', url: 'https://www.youtube.com/results?search_query=logical+reasoning+placement+playlist', note: 'Practice series, coding-decoding, syllogisms, arrangement.' }
  ],
  dsa: [
    { title: 'Striver A2Z DSA Sheet', url: 'https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z/', note: 'Structured roadmap from basics to advanced DSA.' },
    { title: 'Striver SDE Sheet', url: 'https://takeuforward.org/dsa/strivers-sde-sheet-top-coding-interview-problems/', note: 'Most-asked interview problems for product companies.' },
    { title: 'freeCodeCamp DSA Course Search', url: 'https://www.youtube.com/results?search_query=freecodecamp+data+structures+and+algorithms', note: 'Long-form revision if you want one full pass.' }
  ],
  corecs: [
    { title: 'Striver Core CS Subjects Hub', url: 'https://takeuforward.org/home', note: 'Entry point for OS, DBMS, and CN sheets.' },
    { title: 'DBMS Interview Questions', url: 'https://www.interviewbit.com/dbms-interview-questions/', note: 'Common fresher DBMS questions with answers.' },
    { title: 'OS Interview Questions', url: 'https://www.interviewbit.com/operating-system-interview-questions/', note: 'Strong OS theory revision before interviews.' }
  ],
  cpppython: [
    { title: 'C++ Interview Questions Search', url: 'https://www.youtube.com/results?search_query=c%2B%2B+interview+questions+for+freshers', note: 'Good for quick C++ viva-style revision.' },
    { title: 'Python Interview Questions Search', url: 'https://www.youtube.com/results?search_query=python+interview+questions+for+freshers', note: 'Good for syntax, OOP, exceptions, and common pitfalls.' },
    { title: 'Perl Basics Search', url: 'https://www.youtube.com/results?search_query=perl+programming+basics', note: 'Useful if a role still expects Perl scripting familiarity.' }
  ],
  resumehr: [
    { title: 'ATS Resume for Freshers Search', url: 'https://www.youtube.com/results?search_query=ATS+resume+for+freshers+software+engineer', note: 'Resume cleanup before applying.' },
    { title: 'Tell Me About Yourself for Freshers Search', url: 'https://www.youtube.com/results?search_query=tell+me+about+yourself+for+freshers+software+engineer', note: 'Good for HR and introduction rounds.' },
    { title: 'Mock Interview for Software Engineer Search', url: 'https://www.youtube.com/results?search_query=software+engineer+mock+interview+fresher', note: 'Watch how strong answers are structured.' }
  ]
};

const roadmap = [
  { week: 'Week 1', title: 'Resume + Aptitude Foundation', points: ['Fix one-page ATS resume', 'Percentages, ratios, averages, SI/CI', 'Daily 20 MCQs + 5 flashcards'] },
  { week: 'Week 2', title: 'Logical + Language Core', points: ['Series, coding-decoding, syllogisms', 'C++ / Python fundamentals', 'Build intro + project summary'] },
  { week: 'Week 3', title: 'Core CS Subjects', points: ['DBMS, OS, OOPs, Computer Networks', 'Write SQL + revise OOP examples', 'Practice 2 coding problems daily'] },
  { week: 'Week 4', title: 'DSA + Company Sprint', points: ['Arrays, hashing, trees, graphs, DP basics', 'Company mini-tests', 'Timed mocks + HR practice'] }
];

const tasks = [
  'Solve one analytical set of 15 MCQs.', 'Solve one logical set of 15 MCQs.', 'Revise 10 core CS questions.', 'Practice 2 DSA problems from Striver sheet.', 'Improve one resume bullet with metrics.', 'Record 60-second self-introduction.', 'Write project architecture in STAR format.', 'Take one company mini-test.', 'Take one 30-minute mock test.', 'Review mistakes and maintain an error log.'
];

const APP_DATA = {
  nav: [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'roadmap', label: 'Roadmap' },
    { id: 'analytical', label: 'Analytical' },
    { id: 'logical', label: 'Logical' },
    { id: 'technical', label: 'Technical Prep' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'mocktests', label: 'Mock Tests' },
    { id: 'videos', label: 'Videos' },
    { id: 'resume', label: 'Resume' },
    { id: 'hr', label: 'HR Prep' },
    { id: 'tasks', label: 'Tasks' },
    { id: 'company', label: 'Company Mini-Tests' }
  ],
  analyticalQuestions,
  logicalQuestions,
  technicalBanks,
  technicalMcqs,
  companyTests,
  mockTests,
  flashcards,
  videos,
  roadmap,
  tasks,
  today: TODAY_STR,
  owner: { name: 'Kalpesh Dave', email: 'kalpeshdave@gmail.com' }
};
