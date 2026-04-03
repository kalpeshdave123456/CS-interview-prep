const APP_DATA = {
  "todayFocus": [
    "1 mock test or 20 practice MCQs",
    "Revise 10 flashcards",
    "Fix 3 weak concepts from yesterday",
    "Practice 1 project explanation out loud",
    "Review resume headline and two bullets"
  ],
  "modules": [
    {
      "title": "Analytical",
      "desc": "120 MCQs with explanations across placement-style aptitude."
    },
    {
      "title": "Logical",
      "desc": "100 MCQs across series, directions, syllogisms, seating, and more."
    },
    {
      "title": "Technical",
      "desc": "C++, Python, and Perl interview notes and quick checks."
    },
    {
      "title": "Mock Tests",
      "desc": "25 timed mock tests of 25 questions each."
    },
    {
      "title": "Company Rounds",
      "desc": "GOOG, MSFT, AMD, NVIDIA, TCS, Infosys style mini-tests."
    },
    {
      "title": "Resume + HR",
      "desc": "Actionable fresher resume and communication strategy."
    }
  ],
  "roadmap": [
    {
      "week": "Week 1",
      "title": "Foundation Reset",
      "points": [
        "Resume cleanup and LinkedIn refresh",
        "Percentages, averages, ratios",
        "Python and C++ syntax refresh",
        "Start 60-second self-introduction"
      ]
    },
    {
      "week": "Week 2",
      "title": "Logical + Coding Basics",
      "points": [
        "Number series, coding-decoding, direction sense",
        "OOP, STL, Python collections",
        "Two easy coding questions daily",
        "Flashcard revision streak"
      ]
    },
    {
      "week": "Week 3",
      "title": "Technical Depth",
      "points": [
        "Pointers, references, complexity, debugging",
        "File handling and exception handling",
        "Perl regex basics if role needs scripting",
        "Project explanation practice"
      ]
    },
    {
      "week": "Week 4",
      "title": "Placement Test Mode",
      "points": [
        "Daily timed aptitude blocks",
        "Mixed logical sets",
        "Three 30-minute mocks",
        "Fix weak areas from score review"
      ]
    },
    {
      "week": "Week 5",
      "title": "Interview Simulation",
      "points": [
        "Mock HR answers",
        "Project storytelling with metrics",
        "Company-specific rounds: GOOG/MSFT/AMD/NVIDIA/TCS/Infosys",
        "Resume bullet strengthening"
      ]
    },
    {
      "week": "Week 6",
      "title": "Final Sprint",
      "points": [
        "25-question timed mocks",
        "Revision of errors notebook",
        "Interview-day checklist",
        "Sleep, confidence, and execution discipline"
      ]
    }
  ],
  "analyticalConcepts": [
    {
      "title": "Percentages",
      "content": "Convert percentage to fraction or decimal quickly. Placement questions often combine percentages with profit/loss, population, and increase/decrease comparisons."
    },
    {
      "title": "Averages",
      "content": "Average is balance point. When one value changes by x, total sum changes by x. Use this to avoid recomputing from scratch."
    },
    {
      "title": "Ratio and Proportion",
      "content": "Treat ratios as parts. Find one-part value first, then multiply by the required share. Great for class mix and money division problems."
    },
    {
      "title": "Profit and Loss",
      "content": "Keep CP as base unless the question clearly switches base. Discount, markup, and profit are often chained in service-company exams."
    },
    {
      "title": "Time and Work",
      "content": "Convert workers into one-day work rates. Combined efficiency is the sum of individual efficiencies."
    },
    {
      "title": "Time, Speed and Distance",
      "content": "Remember speed = distance/time. For relative speed and train-style questions, check whether objects move in same or opposite direction."
    }
  ],
  "formulas": [
    {
      "topic": "Percentage",
      "formula": "x% of y = (x/100) × y"
    },
    {
      "topic": "Average",
      "formula": "Average = Sum of observations / Number of observations"
    },
    {
      "topic": "Profit %",
      "formula": "Profit % = (Profit / Cost Price) × 100"
    },
    {
      "topic": "Loss %",
      "formula": "Loss % = (Loss / Cost Price) × 100"
    },
    {
      "topic": "Ratio Share",
      "formula": "Required part = Total × individual part / sum of ratio parts"
    },
    {
      "topic": "Work Rate",
      "formula": "If A finishes in n days, A's one-day work = 1/n"
    },
    {
      "topic": "Speed",
      "formula": "Speed = Distance / Time"
    }
  ],
  "logicalPacks": [
    {
      "title": "Number Series",
      "desc": "Spot common patterns: constant difference, multiplication, squares, cubes, and alternating operations."
    },
    {
      "title": "Coding-Decoding",
      "desc": "Practice reverse order, shift by one, alphabetical positioning, and letter replacement logic."
    },
    {
      "title": "Blood Relations",
      "desc": "Draw mini family trees; avoid solving only in words when the chain is long."
    },
    {
      "title": "Direction Sense",
      "desc": "Track north/east/south/west on a simple sketch to avoid left-right confusion."
    },
    {
      "title": "Syllogisms",
      "desc": "Focus on what definitely follows, not what seems possible."
    },
    {
      "title": "Seating Arrangement",
      "desc": "Start from fixed conditions such as immediate left or one end before placing flexible positions."
    },
    {
      "title": "Statement & Conclusion",
      "desc": "Check logical necessity, not personal agreement with the statement."
    }
  ],
  "tech": {
    "cpp": {
      "title": "C++ Interview Prep",
      "sections": [
        {
          "heading": "Core fundamentals",
          "items": [
            "Syntax, data types, operators, loops, and functions",
            "Classes, objects, constructors, destructors",
            "Pointers, references, memory basics",
            "Arrays, strings, vector, map, set, stack, queue"
          ]
        },
        {
          "heading": "Interview-heavy topics",
          "items": [
            "OOP: abstraction, encapsulation, inheritance, polymorphism",
            "STL usage and common complexity expectations",
            "Recursion and basic dynamic thinking",
            "Debugging segmentation faults and off-by-one errors"
          ]
        },
        {
          "heading": "What freshers should be able to explain",
          "items": [
            "Difference between pointer and reference",
            "Why virtual destructors matter",
            "vector vs array vs list",
            "How you would optimize a simple brute-force solution"
          ]
        }
      ]
    },
    "python": {
      "title": "Python Interview Prep",
      "sections": [
        {
          "heading": "Core fundamentals",
          "items": [
            "Data types, loops, functions, modules",
            "Lists, tuples, sets, dictionaries",
            "String methods and slicing",
            "File handling and exception handling"
          ]
        },
        {
          "heading": "Interview-heavy topics",
          "items": [
            "OOP in Python and __init__",
            "List comprehensions and generators",
            "Mutable vs immutable objects",
            "Common scripting and automation use cases"
          ]
        },
        {
          "heading": "What freshers should be able to explain",
          "items": [
            "list vs tuple",
            "dict vs set",
            "append vs extend",
            "How you would parse a text file or CSV quickly"
          ]
        }
      ]
    },
    "perl": {
      "title": "Perl Interview Prep",
      "sections": [
        {
          "heading": "Core fundamentals",
          "items": [
            "Scalars, arrays, hashes",
            "String processing and file handling",
            "Basic loops and conditionals",
            "Subroutines and common built-ins"
          ]
        },
        {
          "heading": "Interview-heavy topics",
          "items": [
            "Regex matching and substitutions",
            "Text parsing use cases",
            "Simple automation scripts",
            "Pattern extraction from log files"
          ]
        },
        {
          "heading": "What freshers should be able to explain",
          "items": [
            "$ vs @ vs %",
            "What =~ does",
            "Why Perl is still relevant in text-heavy scripting",
            "A small regex example to parse log lines"
          ]
        }
      ]
    }
  },
  "flashcards": [
    {
      "cat": "Core",
      "q": "What is polymorphism?",
      "a": "Ability of the same interface to show different behavior for different objects or inputs."
    },
    {
      "cat": "Core",
      "q": "What is a pointer?",
      "a": "A variable that stores the memory address of another variable."
    },
    {
      "cat": "Core",
      "q": "Difference between vector and array in C++?",
      "a": "Vector is dynamic and resizable; array has fixed size after declaration."
    },
    {
      "cat": "Core",
      "q": "What is a Python list?",
      "a": "An ordered, mutable collection that can store mixed data types."
    },
    {
      "cat": "Core",
      "q": "What is a Python tuple?",
      "a": "An ordered, immutable collection useful for fixed records."
    },
    {
      "cat": "Core",
      "q": "What is a hash in Perl?",
      "a": "A key-value data structure prefixed with %."
    },
    {
      "cat": "Core",
      "q": "What is time complexity?",
      "a": "A measure of how runtime grows with input size."
    },
    {
      "cat": "Core",
      "q": "What is O(1)?",
      "a": "Constant-time complexity independent of input size."
    },
    {
      "cat": "Core",
      "q": "Best structure for Tell me about yourself?",
      "a": "Present status, strongest skills/projects, then why the role fits you."
    },
    {
      "cat": "Core",
      "q": "Best resume bullet format?",
      "a": "Action verb + tool/skill + what you built + measurable result."
    },
    {
      "cat": "Formula",
      "q": "What is the key formula for Percentages?",
      "a": "x% of y = (x/100) × y"
    },
    {
      "cat": "Formula",
      "q": "What is the key formula for Average?",
      "a": "Average = sum of values / number of values"
    },
    {
      "cat": "Formula",
      "q": "What is the key formula for Speed?",
      "a": "Speed = distance / time"
    },
    {
      "cat": "Formula",
      "q": "What is the key formula for Ratio share?",
      "a": "Required share = total × part / sum of parts"
    },
    {
      "cat": "Formula",
      "q": "What is the key formula for Profit?",
      "a": "Profit% = profit / CP × 100"
    },
    {
      "cat": "Revision",
      "q": "Quick reminder 1: What should you do after getting a quiz question wrong?",
      "a": "Write the reason, classify the mistake, and revisit the concept before retrying similar questions."
    },
    {
      "cat": "Revision",
      "q": "Quick reminder 2: What should you do after getting a quiz question wrong?",
      "a": "Write the reason, classify the mistake, and revisit the concept before retrying similar questions."
    },
    {
      "cat": "Revision",
      "q": "Quick reminder 3: What should you do after getting a quiz question wrong?",
      "a": "Write the reason, classify the mistake, and revisit the concept before retrying similar questions."
    },
    {
      "cat": "Revision",
      "q": "Quick reminder 4: What should you do after getting a quiz question wrong?",
      "a": "Write the reason, classify the mistake, and revisit the concept before retrying similar questions."
    },
    {
      "cat": "Revision",
      "q": "Quick reminder 5: What should you do after getting a quiz question wrong?",
      "a": "Write the reason, classify the mistake, and revisit the concept before retrying similar questions."
    },
    {
      "cat": "Revision",
      "q": "Quick reminder 6: What should you do after getting a quiz question wrong?",
      "a": "Write the reason, classify the mistake, and revisit the concept before retrying similar questions."
    },
    {
      "cat": "Revision",
      "q": "Quick reminder 7: What should you do after getting a quiz question wrong?",
      "a": "Write the reason, classify the mistake, and revisit the concept before retrying similar questions."
    },
    {
      "cat": "Revision",
      "q": "Quick reminder 8: What should you do after getting a quiz question wrong?",
      "a": "Write the reason, classify the mistake, and revisit the concept before retrying similar questions."
    },
    {
      "cat": "Revision",
      "q": "Quick reminder 9: What should you do after getting a quiz question wrong?",
      "a": "Write the reason, classify the mistake, and revisit the concept before retrying similar questions."
    },
    {
      "cat": "Revision",
      "q": "Quick reminder 10: What should you do after getting a quiz question wrong?",
      "a": "Write the reason, classify the mistake, and revisit the concept before retrying similar questions."
    },
    {
      "cat": "Revision",
      "q": "Quick reminder 11: What should you do after getting a quiz question wrong?",
      "a": "Write the reason, classify the mistake, and revisit the concept before retrying similar questions."
    },
    {
      "cat": "Revision",
      "q": "Quick reminder 12: What should you do after getting a quiz question wrong?",
      "a": "Write the reason, classify the mistake, and revisit the concept before retrying similar questions."
    },
    {
      "cat": "Revision",
      "q": "Quick reminder 13: What should you do after getting a quiz question wrong?",
      "a": "Write the reason, classify the mistake, and revisit the concept before retrying similar questions."
    },
    {
      "cat": "Revision",
      "q": "Quick reminder 14: What should you do after getting a quiz question wrong?",
      "a": "Write the reason, classify the mistake, and revisit the concept before retrying similar questions."
    },
    {
      "cat": "Revision",
      "q": "Quick reminder 15: What should you do after getting a quiz question wrong?",
      "a": "Write the reason, classify the mistake, and revisit the concept before retrying similar questions."
    },
    {
      "cat": "Revision",
      "q": "Quick reminder 16: What should you do after getting a quiz question wrong?",
      "a": "Write the reason, classify the mistake, and revisit the concept before retrying similar questions."
    },
    {
      "cat": "Revision",
      "q": "Quick reminder 17: What should you do after getting a quiz question wrong?",
      "a": "Write the reason, classify the mistake, and revisit the concept before retrying similar questions."
    },
    {
      "cat": "Revision",
      "q": "Quick reminder 18: What should you do after getting a quiz question wrong?",
      "a": "Write the reason, classify the mistake, and revisit the concept before retrying similar questions."
    },
    {
      "cat": "Revision",
      "q": "Quick reminder 19: What should you do after getting a quiz question wrong?",
      "a": "Write the reason, classify the mistake, and revisit the concept before retrying similar questions."
    },
    {
      "cat": "Revision",
      "q": "Quick reminder 20: What should you do after getting a quiz question wrong?",
      "a": "Write the reason, classify the mistake, and revisit the concept before retrying similar questions."
    },
    {
      "cat": "Revision",
      "q": "Quick reminder 21: What should you do after getting a quiz question wrong?",
      "a": "Write the reason, classify the mistake, and revisit the concept before retrying similar questions."
    },
    {
      "cat": "Revision",
      "q": "Quick reminder 22: What should you do after getting a quiz question wrong?",
      "a": "Write the reason, classify the mistake, and revisit the concept before retrying similar questions."
    },
    {
      "cat": "Revision",
      "q": "Quick reminder 23: What should you do after getting a quiz question wrong?",
      "a": "Write the reason, classify the mistake, and revisit the concept before retrying similar questions."
    },
    {
      "cat": "Revision",
      "q": "Quick reminder 24: What should you do after getting a quiz question wrong?",
      "a": "Write the reason, classify the mistake, and revisit the concept before retrying similar questions."
    },
    {
      "cat": "Revision",
      "q": "Quick reminder 25: What should you do after getting a quiz question wrong?",
      "a": "Write the reason, classify the mistake, and revisit the concept before retrying similar questions."
    },
    {
      "cat": "Revision",
      "q": "Quick reminder 26: What should you do after getting a quiz question wrong?",
      "a": "Write the reason, classify the mistake, and revisit the concept before retrying similar questions."
    },
    {
      "cat": "Revision",
      "q": "Quick reminder 27: What should you do after getting a quiz question wrong?",
      "a": "Write the reason, classify the mistake, and revisit the concept before retrying similar questions."
    },
    {
      "cat": "Revision",
      "q": "Quick reminder 28: What should you do after getting a quiz question wrong?",
      "a": "Write the reason, classify the mistake, and revisit the concept before retrying similar questions."
    },
    {
      "cat": "Revision",
      "q": "Quick reminder 29: What should you do after getting a quiz question wrong?",
      "a": "Write the reason, classify the mistake, and revisit the concept before retrying similar questions."
    },
    {
      "cat": "Revision",
      "q": "Quick reminder 30: What should you do after getting a quiz question wrong?",
      "a": "Write the reason, classify the mistake, and revisit the concept before retrying similar questions."
    }
  ],
  "analyticalQuestions": [
    {
      "id": "per_1",
      "topic": "Percentages",
      "level": "Easy",
      "company": "TCS",
      "q": "What is 10% of 120?",
      "options": [
        "7",
        "12",
        "17",
        "22"
      ],
      "answer": "12",
      "explain": "Convert 10% to 10/100 and multiply: 120 × 10/100 = 12."
    },
    {
      "id": "per_2",
      "topic": "Percentages",
      "level": "Medium",
      "company": "Infosys",
      "q": "What is 15% of 130?",
      "options": [
        "14",
        "19",
        "24",
        "29"
      ],
      "answer": "19",
      "explain": "Convert 15% to 15/100 and multiply: 130 × 15/100 = 19."
    },
    {
      "id": "per_3",
      "topic": "Percentages",
      "level": "Hard",
      "company": "GOOG",
      "q": "What is 20% of 140?",
      "options": [
        "23",
        "28",
        "33",
        "38"
      ],
      "answer": "28",
      "explain": "Convert 20% to 20/100 and multiply: 140 × 20/100 = 28."
    },
    {
      "id": "per_4",
      "topic": "Percentages",
      "level": "Easy",
      "company": "MSFT",
      "q": "What is 25% of 150?",
      "options": [
        "32",
        "37",
        "42",
        "47"
      ],
      "answer": "37",
      "explain": "Convert 25% to 25/100 and multiply: 150 × 25/100 = 37."
    },
    {
      "id": "per_5",
      "topic": "Percentages",
      "level": "Medium",
      "company": "AMD",
      "q": "What is 30% of 160?",
      "options": [
        "43",
        "48",
        "53",
        "58"
      ],
      "answer": "48",
      "explain": "Convert 30% to 30/100 and multiply: 160 × 30/100 = 48."
    },
    {
      "id": "per_6",
      "topic": "Percentages",
      "level": "Hard",
      "company": "NVIDIA",
      "q": "What is 10% of 170?",
      "options": [
        "12",
        "17",
        "22",
        "27"
      ],
      "answer": "17",
      "explain": "Convert 10% to 10/100 and multiply: 170 × 10/100 = 17."
    },
    {
      "id": "per_7",
      "topic": "Percentages",
      "level": "Easy",
      "company": "General",
      "q": "What is 15% of 180?",
      "options": [
        "22",
        "27",
        "32",
        "37"
      ],
      "answer": "27",
      "explain": "Convert 15% to 15/100 and multiply: 180 × 15/100 = 27."
    },
    {
      "id": "per_8",
      "topic": "Percentages",
      "level": "Medium",
      "company": "TCS",
      "q": "What is 20% of 190?",
      "options": [
        "33",
        "38",
        "43",
        "48"
      ],
      "answer": "38",
      "explain": "Convert 20% to 20/100 and multiply: 190 × 20/100 = 38."
    },
    {
      "id": "per_9",
      "topic": "Percentages",
      "level": "Hard",
      "company": "Infosys",
      "q": "What is 25% of 200?",
      "options": [
        "45",
        "50",
        "55",
        "60"
      ],
      "answer": "50",
      "explain": "Convert 25% to 25/100 and multiply: 200 × 25/100 = 50."
    },
    {
      "id": "per_10",
      "topic": "Percentages",
      "level": "Easy",
      "company": "GOOG",
      "q": "What is 30% of 210?",
      "options": [
        "58",
        "63",
        "68",
        "73"
      ],
      "answer": "63",
      "explain": "Convert 30% to 30/100 and multiply: 210 × 30/100 = 63."
    },
    {
      "id": "per_11",
      "topic": "Percentages",
      "level": "Medium",
      "company": "MSFT",
      "q": "What is 10% of 220?",
      "options": [
        "17",
        "22",
        "27",
        "32"
      ],
      "answer": "22",
      "explain": "Convert 10% to 10/100 and multiply: 220 × 10/100 = 22."
    },
    {
      "id": "per_12",
      "topic": "Percentages",
      "level": "Hard",
      "company": "AMD",
      "q": "What is 15% of 230?",
      "options": [
        "29",
        "34",
        "39",
        "44"
      ],
      "answer": "34",
      "explain": "Convert 15% to 15/100 and multiply: 230 × 15/100 = 34."
    },
    {
      "id": "per_13",
      "topic": "Percentages",
      "level": "Easy",
      "company": "NVIDIA",
      "q": "What is 20% of 240?",
      "options": [
        "43",
        "48",
        "53",
        "58"
      ],
      "answer": "48",
      "explain": "Convert 20% to 20/100 and multiply: 240 × 20/100 = 48."
    },
    {
      "id": "per_14",
      "topic": "Percentages",
      "level": "Medium",
      "company": "General",
      "q": "What is 25% of 250?",
      "options": [
        "57",
        "62",
        "67",
        "72"
      ],
      "answer": "62",
      "explain": "Convert 25% to 25/100 and multiply: 250 × 25/100 = 62."
    },
    {
      "id": "per_15",
      "topic": "Percentages",
      "level": "Hard",
      "company": "TCS",
      "q": "What is 30% of 260?",
      "options": [
        "73",
        "78",
        "83",
        "88"
      ],
      "answer": "78",
      "explain": "Convert 30% to 30/100 and multiply: 260 × 30/100 = 78."
    },
    {
      "id": "per_16",
      "topic": "Percentages",
      "level": "Easy",
      "company": "Infosys",
      "q": "What is 10% of 270?",
      "options": [
        "22",
        "27",
        "32",
        "37"
      ],
      "answer": "27",
      "explain": "Convert 10% to 10/100 and multiply: 270 × 10/100 = 27."
    },
    {
      "id": "per_17",
      "topic": "Percentages",
      "level": "Medium",
      "company": "GOOG",
      "q": "What is 15% of 280?",
      "options": [
        "37",
        "42",
        "47",
        "52"
      ],
      "answer": "42",
      "explain": "Convert 15% to 15/100 and multiply: 280 × 15/100 = 42."
    },
    {
      "id": "per_18",
      "topic": "Percentages",
      "level": "Hard",
      "company": "MSFT",
      "q": "What is 20% of 290?",
      "options": [
        "53",
        "58",
        "63",
        "68"
      ],
      "answer": "58",
      "explain": "Convert 20% to 20/100 and multiply: 290 × 20/100 = 58."
    },
    {
      "id": "per_19",
      "topic": "Percentages",
      "level": "Easy",
      "company": "AMD",
      "q": "What is 25% of 300?",
      "options": [
        "70",
        "75",
        "80",
        "85"
      ],
      "answer": "75",
      "explain": "Convert 25% to 25/100 and multiply: 300 × 25/100 = 75."
    },
    {
      "id": "per_20",
      "topic": "Percentages",
      "level": "Medium",
      "company": "NVIDIA",
      "q": "What is 30% of 310?",
      "options": [
        "88",
        "93",
        "98",
        "103"
      ],
      "answer": "93",
      "explain": "Convert 30% to 30/100 and multiply: 310 × 30/100 = 93."
    },
    {
      "id": "pro_21",
      "topic": "Profit and Loss",
      "level": "Medium",
      "company": "GOOG",
      "q": "An article has cost price ₹80. It is sold at a profit of 10%. What is the selling price?",
      "options": [
        "88",
        "96",
        "80",
        "100"
      ],
      "answer": "88",
      "explain": "Selling price = CP × (100 + profit%)/100 = 80 × 110/100 = ₹88."
    },
    {
      "id": "pro_22",
      "topic": "Profit and Loss",
      "level": "Hard",
      "company": "MSFT",
      "q": "An article has cost price ₹92. It is sold at a profit of 15%. What is the selling price?",
      "options": [
        "106",
        "114",
        "98",
        "118"
      ],
      "answer": "106",
      "explain": "Selling price = CP × (100 + profit%)/100 = 92 × 115/100 = ₹106."
    },
    {
      "id": "pro_23",
      "topic": "Profit and Loss",
      "level": "Easy",
      "company": "AMD",
      "q": "An article has cost price ₹104. It is sold at a profit of 20%. What is the selling price?",
      "options": [
        "125",
        "133",
        "117",
        "137"
      ],
      "answer": "125",
      "explain": "Selling price = CP × (100 + profit%)/100 = 104 × 120/100 = ₹125."
    },
    {
      "id": "pro_24",
      "topic": "Profit and Loss",
      "level": "Medium",
      "company": "NVIDIA",
      "q": "An article has cost price ₹116. It is sold at a profit of 25%. What is the selling price?",
      "options": [
        "145",
        "153",
        "137",
        "157"
      ],
      "answer": "145",
      "explain": "Selling price = CP × (100 + profit%)/100 = 116 × 125/100 = ₹145."
    },
    {
      "id": "pro_25",
      "topic": "Profit and Loss",
      "level": "Hard",
      "company": "General",
      "q": "An article has cost price ₹128. It is sold at a profit of 12%. What is the selling price?",
      "options": [
        "143",
        "151",
        "135",
        "155"
      ],
      "answer": "143",
      "explain": "Selling price = CP × (100 + profit%)/100 = 128 × 112/100 = ₹143."
    },
    {
      "id": "pro_26",
      "topic": "Profit and Loss",
      "level": "Easy",
      "company": "TCS",
      "q": "An article has cost price ₹140. It is sold at a profit of 10%. What is the selling price?",
      "options": [
        "154",
        "162",
        "146",
        "166"
      ],
      "answer": "154",
      "explain": "Selling price = CP × (100 + profit%)/100 = 140 × 110/100 = ₹154."
    },
    {
      "id": "pro_27",
      "topic": "Profit and Loss",
      "level": "Medium",
      "company": "Infosys",
      "q": "An article has cost price ₹152. It is sold at a profit of 15%. What is the selling price?",
      "options": [
        "175",
        "183",
        "167",
        "187"
      ],
      "answer": "175",
      "explain": "Selling price = CP × (100 + profit%)/100 = 152 × 115/100 = ₹175."
    },
    {
      "id": "pro_28",
      "topic": "Profit and Loss",
      "level": "Hard",
      "company": "GOOG",
      "q": "An article has cost price ₹164. It is sold at a profit of 20%. What is the selling price?",
      "options": [
        "197",
        "205",
        "189",
        "209"
      ],
      "answer": "197",
      "explain": "Selling price = CP × (100 + profit%)/100 = 164 × 120/100 = ₹197."
    },
    {
      "id": "pro_29",
      "topic": "Profit and Loss",
      "level": "Easy",
      "company": "MSFT",
      "q": "An article has cost price ₹176. It is sold at a profit of 25%. What is the selling price?",
      "options": [
        "220",
        "228",
        "212",
        "232"
      ],
      "answer": "220",
      "explain": "Selling price = CP × (100 + profit%)/100 = 176 × 125/100 = ₹220."
    },
    {
      "id": "pro_30",
      "topic": "Profit and Loss",
      "level": "Medium",
      "company": "AMD",
      "q": "An article has cost price ₹188. It is sold at a profit of 12%. What is the selling price?",
      "options": [
        "211",
        "219",
        "203",
        "223"
      ],
      "answer": "211",
      "explain": "Selling price = CP × (100 + profit%)/100 = 188 × 112/100 = ₹211."
    },
    {
      "id": "pro_31",
      "topic": "Profit and Loss",
      "level": "Hard",
      "company": "NVIDIA",
      "q": "An article has cost price ₹200. It is sold at a profit of 10%. What is the selling price?",
      "options": [
        "220",
        "228",
        "212",
        "232"
      ],
      "answer": "220",
      "explain": "Selling price = CP × (100 + profit%)/100 = 200 × 110/100 = ₹220."
    },
    {
      "id": "pro_32",
      "topic": "Profit and Loss",
      "level": "Easy",
      "company": "General",
      "q": "An article has cost price ₹212. It is sold at a profit of 15%. What is the selling price?",
      "options": [
        "244",
        "252",
        "236",
        "256"
      ],
      "answer": "244",
      "explain": "Selling price = CP × (100 + profit%)/100 = 212 × 115/100 = ₹244."
    },
    {
      "id": "pro_33",
      "topic": "Profit and Loss",
      "level": "Medium",
      "company": "TCS",
      "q": "An article has cost price ₹224. It is sold at a profit of 20%. What is the selling price?",
      "options": [
        "269",
        "277",
        "261",
        "281"
      ],
      "answer": "269",
      "explain": "Selling price = CP × (100 + profit%)/100 = 224 × 120/100 = ₹269."
    },
    {
      "id": "pro_34",
      "topic": "Profit and Loss",
      "level": "Hard",
      "company": "Infosys",
      "q": "An article has cost price ₹236. It is sold at a profit of 25%. What is the selling price?",
      "options": [
        "295",
        "303",
        "287",
        "307"
      ],
      "answer": "295",
      "explain": "Selling price = CP × (100 + profit%)/100 = 236 × 125/100 = ₹295."
    },
    {
      "id": "pro_35",
      "topic": "Profit and Loss",
      "level": "Easy",
      "company": "GOOG",
      "q": "An article has cost price ₹248. It is sold at a profit of 12%. What is the selling price?",
      "options": [
        "278",
        "286",
        "270",
        "290"
      ],
      "answer": "278",
      "explain": "Selling price = CP × (100 + profit%)/100 = 248 × 112/100 = ₹278."
    },
    {
      "id": "pro_36",
      "topic": "Profit and Loss",
      "level": "Medium",
      "company": "MSFT",
      "q": "An article has cost price ₹260. It is sold at a profit of 10%. What is the selling price?",
      "options": [
        "286",
        "294",
        "278",
        "298"
      ],
      "answer": "286",
      "explain": "Selling price = CP × (100 + profit%)/100 = 260 × 110/100 = ₹286."
    },
    {
      "id": "pro_37",
      "topic": "Profit and Loss",
      "level": "Hard",
      "company": "AMD",
      "q": "An article has cost price ₹272. It is sold at a profit of 15%. What is the selling price?",
      "options": [
        "313",
        "321",
        "305",
        "325"
      ],
      "answer": "313",
      "explain": "Selling price = CP × (100 + profit%)/100 = 272 × 115/100 = ₹313."
    },
    {
      "id": "pro_38",
      "topic": "Profit and Loss",
      "level": "Easy",
      "company": "NVIDIA",
      "q": "An article has cost price ₹284. It is sold at a profit of 20%. What is the selling price?",
      "options": [
        "341",
        "349",
        "333",
        "353"
      ],
      "answer": "341",
      "explain": "Selling price = CP × (100 + profit%)/100 = 284 × 120/100 = ₹341."
    },
    {
      "id": "pro_39",
      "topic": "Profit and Loss",
      "level": "Medium",
      "company": "General",
      "q": "An article has cost price ₹296. It is sold at a profit of 25%. What is the selling price?",
      "options": [
        "370",
        "378",
        "362",
        "382"
      ],
      "answer": "370",
      "explain": "Selling price = CP × (100 + profit%)/100 = 296 × 125/100 = ₹370."
    },
    {
      "id": "pro_40",
      "topic": "Profit and Loss",
      "level": "Hard",
      "company": "TCS",
      "q": "An article has cost price ₹308. It is sold at a profit of 12%. What is the selling price?",
      "options": [
        "345",
        "353",
        "337",
        "357"
      ],
      "answer": "345",
      "explain": "Selling price = CP × (100 + profit%)/100 = 308 × 112/100 = ₹345."
    },
    {
      "id": "ave_41",
      "topic": "Averages",
      "level": "Hard",
      "company": "AMD",
      "q": "Find the average of 10, 14, 18, and 22.",
      "options": [
        "16",
        "17",
        "18",
        "15"
      ],
      "answer": "16",
      "explain": "Average = sum of observations / number of observations = 64/4 = 16."
    },
    {
      "id": "ave_42",
      "topic": "Averages",
      "level": "Easy",
      "company": "NVIDIA",
      "q": "Find the average of 11, 15, 19, and 23.",
      "options": [
        "17",
        "18",
        "19",
        "16"
      ],
      "answer": "17",
      "explain": "Average = sum of observations / number of observations = 68/4 = 17."
    },
    {
      "id": "ave_43",
      "topic": "Averages",
      "level": "Medium",
      "company": "General",
      "q": "Find the average of 12, 16, 20, and 24.",
      "options": [
        "18",
        "19",
        "20",
        "17"
      ],
      "answer": "18",
      "explain": "Average = sum of observations / number of observations = 72/4 = 18."
    },
    {
      "id": "ave_44",
      "topic": "Averages",
      "level": "Hard",
      "company": "TCS",
      "q": "Find the average of 13, 17, 21, and 25.",
      "options": [
        "19",
        "20",
        "21",
        "18"
      ],
      "answer": "19",
      "explain": "Average = sum of observations / number of observations = 76/4 = 19."
    },
    {
      "id": "ave_45",
      "topic": "Averages",
      "level": "Easy",
      "company": "Infosys",
      "q": "Find the average of 14, 18, 22, and 26.",
      "options": [
        "20",
        "21",
        "22",
        "19"
      ],
      "answer": "20",
      "explain": "Average = sum of observations / number of observations = 80/4 = 20."
    },
    {
      "id": "ave_46",
      "topic": "Averages",
      "level": "Medium",
      "company": "GOOG",
      "q": "Find the average of 15, 19, 23, and 27.",
      "options": [
        "21",
        "22",
        "23",
        "20"
      ],
      "answer": "21",
      "explain": "Average = sum of observations / number of observations = 84/4 = 21."
    },
    {
      "id": "ave_47",
      "topic": "Averages",
      "level": "Hard",
      "company": "MSFT",
      "q": "Find the average of 16, 20, 24, and 28.",
      "options": [
        "22",
        "23",
        "24",
        "21"
      ],
      "answer": "22",
      "explain": "Average = sum of observations / number of observations = 88/4 = 22."
    },
    {
      "id": "ave_48",
      "topic": "Averages",
      "level": "Easy",
      "company": "AMD",
      "q": "Find the average of 17, 21, 25, and 29.",
      "options": [
        "23",
        "24",
        "25",
        "22"
      ],
      "answer": "23",
      "explain": "Average = sum of observations / number of observations = 92/4 = 23."
    },
    {
      "id": "ave_49",
      "topic": "Averages",
      "level": "Medium",
      "company": "NVIDIA",
      "q": "Find the average of 18, 22, 26, and 30.",
      "options": [
        "24",
        "25",
        "26",
        "23"
      ],
      "answer": "24",
      "explain": "Average = sum of observations / number of observations = 96/4 = 24."
    },
    {
      "id": "ave_50",
      "topic": "Averages",
      "level": "Hard",
      "company": "General",
      "q": "Find the average of 19, 23, 27, and 31.",
      "options": [
        "25",
        "26",
        "27",
        "24"
      ],
      "answer": "25",
      "explain": "Average = sum of observations / number of observations = 100/4 = 25."
    },
    {
      "id": "ave_51",
      "topic": "Averages",
      "level": "Easy",
      "company": "TCS",
      "q": "Find the average of 20, 24, 28, and 32.",
      "options": [
        "26",
        "27",
        "28",
        "25"
      ],
      "answer": "26",
      "explain": "Average = sum of observations / number of observations = 104/4 = 26."
    },
    {
      "id": "ave_52",
      "topic": "Averages",
      "level": "Medium",
      "company": "Infosys",
      "q": "Find the average of 21, 25, 29, and 33.",
      "options": [
        "27",
        "28",
        "29",
        "26"
      ],
      "answer": "27",
      "explain": "Average = sum of observations / number of observations = 108/4 = 27."
    },
    {
      "id": "ave_53",
      "topic": "Averages",
      "level": "Hard",
      "company": "GOOG",
      "q": "Find the average of 22, 26, 30, and 34.",
      "options": [
        "28",
        "29",
        "30",
        "27"
      ],
      "answer": "28",
      "explain": "Average = sum of observations / number of observations = 112/4 = 28."
    },
    {
      "id": "ave_54",
      "topic": "Averages",
      "level": "Easy",
      "company": "MSFT",
      "q": "Find the average of 23, 27, 31, and 35.",
      "options": [
        "29",
        "30",
        "31",
        "28"
      ],
      "answer": "29",
      "explain": "Average = sum of observations / number of observations = 116/4 = 29."
    },
    {
      "id": "ave_55",
      "topic": "Averages",
      "level": "Medium",
      "company": "AMD",
      "q": "Find the average of 24, 28, 32, and 36.",
      "options": [
        "30",
        "31",
        "32",
        "29"
      ],
      "answer": "30",
      "explain": "Average = sum of observations / number of observations = 120/4 = 30."
    },
    {
      "id": "ave_56",
      "topic": "Averages",
      "level": "Hard",
      "company": "NVIDIA",
      "q": "Find the average of 25, 29, 33, and 37.",
      "options": [
        "31",
        "32",
        "33",
        "30"
      ],
      "answer": "31",
      "explain": "Average = sum of observations / number of observations = 124/4 = 31."
    },
    {
      "id": "ave_57",
      "topic": "Averages",
      "level": "Easy",
      "company": "General",
      "q": "Find the average of 26, 30, 34, and 38.",
      "options": [
        "32",
        "33",
        "34",
        "31"
      ],
      "answer": "32",
      "explain": "Average = sum of observations / number of observations = 128/4 = 32."
    },
    {
      "id": "ave_58",
      "topic": "Averages",
      "level": "Medium",
      "company": "TCS",
      "q": "Find the average of 27, 31, 35, and 39.",
      "options": [
        "33",
        "34",
        "35",
        "32"
      ],
      "answer": "33",
      "explain": "Average = sum of observations / number of observations = 132/4 = 33."
    },
    {
      "id": "ave_59",
      "topic": "Averages",
      "level": "Hard",
      "company": "Infosys",
      "q": "Find the average of 28, 32, 36, and 40.",
      "options": [
        "34",
        "35",
        "36",
        "33"
      ],
      "answer": "34",
      "explain": "Average = sum of observations / number of observations = 136/4 = 34."
    },
    {
      "id": "ave_60",
      "topic": "Averages",
      "level": "Easy",
      "company": "GOOG",
      "q": "Find the average of 29, 33, 37, and 41.",
      "options": [
        "35",
        "36",
        "37",
        "34"
      ],
      "answer": "35",
      "explain": "Average = sum of observations / number of observations = 140/4 = 35."
    },
    {
      "id": "rat_61",
      "topic": "Ratio and Proportion",
      "level": "Easy",
      "company": "Infosys",
      "q": "The ratio of boys to girls is 2:5. If the total number of students is 28, how many boys are there?",
      "options": [
        "8",
        "15",
        "1",
        "10"
      ],
      "answer": "8",
      "explain": "Total parts = 7. One part = 28/(7) = 4. Boys = 2 × 4 = 8."
    },
    {
      "id": "rat_62",
      "topic": "Ratio and Proportion",
      "level": "Medium",
      "company": "GOOG",
      "q": "The ratio of boys to girls is 3:6. If the total number of students is 45, how many boys are there?",
      "options": [
        "15",
        "24",
        "6",
        "19"
      ],
      "answer": "15",
      "explain": "Total parts = 9. One part = 45/(9) = 5. Boys = 3 × 5 = 15."
    },
    {
      "id": "rat_63",
      "topic": "Ratio and Proportion",
      "level": "Hard",
      "company": "MSFT",
      "q": "The ratio of boys to girls is 4:7. If the total number of students is 66, how many boys are there?",
      "options": [
        "24",
        "35",
        "13",
        "30"
      ],
      "answer": "24",
      "explain": "Total parts = 11. One part = 66/(11) = 6. Boys = 4 × 6 = 24."
    },
    {
      "id": "rat_64",
      "topic": "Ratio and Proportion",
      "level": "Easy",
      "company": "AMD",
      "q": "The ratio of boys to girls is 5:3. If the total number of students is 56, how many boys are there?",
      "options": [
        "35",
        "43",
        "27",
        "37"
      ],
      "answer": "35",
      "explain": "Total parts = 8. One part = 56/(8) = 7. Boys = 5 × 7 = 35."
    },
    {
      "id": "rat_65",
      "topic": "Ratio and Proportion",
      "level": "Medium",
      "company": "NVIDIA",
      "q": "The ratio of boys to girls is 6:4. If the total number of students is 40, how many boys are there?",
      "options": [
        "24",
        "34",
        "14",
        "28"
      ],
      "answer": "24",
      "explain": "Total parts = 10. One part = 40/(10) = 4. Boys = 6 × 4 = 24."
    },
    {
      "id": "rat_66",
      "topic": "Ratio and Proportion",
      "level": "Hard",
      "company": "General",
      "q": "The ratio of boys to girls is 2:5. If the total number of students is 35, how many boys are there?",
      "options": [
        "10",
        "17",
        "3",
        "16"
      ],
      "answer": "10",
      "explain": "Total parts = 7. One part = 35/(7) = 5. Boys = 2 × 5 = 10."
    },
    {
      "id": "rat_67",
      "topic": "Ratio and Proportion",
      "level": "Easy",
      "company": "TCS",
      "q": "The ratio of boys to girls is 3:6. If the total number of students is 54, how many boys are there?",
      "options": [
        "18",
        "27",
        "9",
        "20"
      ],
      "answer": "18",
      "explain": "Total parts = 9. One part = 54/(9) = 6. Boys = 3 × 6 = 18."
    },
    {
      "id": "rat_68",
      "topic": "Ratio and Proportion",
      "level": "Medium",
      "company": "Infosys",
      "q": "The ratio of boys to girls is 4:7. If the total number of students is 77, how many boys are there?",
      "options": [
        "28",
        "39",
        "17",
        "32"
      ],
      "answer": "28",
      "explain": "Total parts = 11. One part = 77/(11) = 7. Boys = 4 × 7 = 28."
    },
    {
      "id": "rat_69",
      "topic": "Ratio and Proportion",
      "level": "Hard",
      "company": "GOOG",
      "q": "The ratio of boys to girls is 5:3. If the total number of students is 32, how many boys are there?",
      "options": [
        "20",
        "28",
        "12",
        "26"
      ],
      "answer": "20",
      "explain": "Total parts = 8. One part = 32/(8) = 4. Boys = 5 × 4 = 20."
    },
    {
      "id": "rat_70",
      "topic": "Ratio and Proportion",
      "level": "Easy",
      "company": "MSFT",
      "q": "The ratio of boys to girls is 6:4. If the total number of students is 50, how many boys are there?",
      "options": [
        "30",
        "40",
        "20",
        "32"
      ],
      "answer": "30",
      "explain": "Total parts = 10. One part = 50/(10) = 5. Boys = 6 × 5 = 30."
    },
    {
      "id": "rat_71",
      "topic": "Ratio and Proportion",
      "level": "Medium",
      "company": "AMD",
      "q": "The ratio of boys to girls is 2:5. If the total number of students is 42, how many boys are there?",
      "options": [
        "12",
        "19",
        "5",
        "16"
      ],
      "answer": "12",
      "explain": "Total parts = 7. One part = 42/(7) = 6. Boys = 2 × 6 = 12."
    },
    {
      "id": "rat_72",
      "topic": "Ratio and Proportion",
      "level": "Hard",
      "company": "NVIDIA",
      "q": "The ratio of boys to girls is 3:6. If the total number of students is 63, how many boys are there?",
      "options": [
        "21",
        "30",
        "12",
        "27"
      ],
      "answer": "21",
      "explain": "Total parts = 9. One part = 63/(9) = 7. Boys = 3 × 7 = 21."
    },
    {
      "id": "rat_73",
      "topic": "Ratio and Proportion",
      "level": "Easy",
      "company": "General",
      "q": "The ratio of boys to girls is 4:7. If the total number of students is 44, how many boys are there?",
      "options": [
        "16",
        "27",
        "5",
        "18"
      ],
      "answer": "16",
      "explain": "Total parts = 11. One part = 44/(11) = 4. Boys = 4 × 4 = 16."
    },
    {
      "id": "rat_74",
      "topic": "Ratio and Proportion",
      "level": "Medium",
      "company": "TCS",
      "q": "The ratio of boys to girls is 5:3. If the total number of students is 40, how many boys are there?",
      "options": [
        "25",
        "33",
        "17",
        "29"
      ],
      "answer": "25",
      "explain": "Total parts = 8. One part = 40/(8) = 5. Boys = 5 × 5 = 25."
    },
    {
      "id": "rat_75",
      "topic": "Ratio and Proportion",
      "level": "Hard",
      "company": "Infosys",
      "q": "The ratio of boys to girls is 6:4. If the total number of students is 60, how many boys are there?",
      "options": [
        "36",
        "46",
        "26",
        "42"
      ],
      "answer": "36",
      "explain": "Total parts = 10. One part = 60/(10) = 6. Boys = 6 × 6 = 36."
    },
    {
      "id": "rat_76",
      "topic": "Ratio and Proportion",
      "level": "Easy",
      "company": "GOOG",
      "q": "The ratio of boys to girls is 2:5. If the total number of students is 49, how many boys are there?",
      "options": [
        "14",
        "21",
        "7",
        "16"
      ],
      "answer": "14",
      "explain": "Total parts = 7. One part = 49/(7) = 7. Boys = 2 × 7 = 14."
    },
    {
      "id": "rat_77",
      "topic": "Ratio and Proportion",
      "level": "Medium",
      "company": "MSFT",
      "q": "The ratio of boys to girls is 3:6. If the total number of students is 36, how many boys are there?",
      "options": [
        "12",
        "21",
        "3",
        "16"
      ],
      "answer": "12",
      "explain": "Total parts = 9. One part = 36/(9) = 4. Boys = 3 × 4 = 12."
    },
    {
      "id": "rat_78",
      "topic": "Ratio and Proportion",
      "level": "Hard",
      "company": "AMD",
      "q": "The ratio of boys to girls is 4:7. If the total number of students is 55, how many boys are there?",
      "options": [
        "20",
        "31",
        "9",
        "26"
      ],
      "answer": "20",
      "explain": "Total parts = 11. One part = 55/(11) = 5. Boys = 4 × 5 = 20."
    },
    {
      "id": "rat_79",
      "topic": "Ratio and Proportion",
      "level": "Easy",
      "company": "NVIDIA",
      "q": "The ratio of boys to girls is 5:3. If the total number of students is 48, how many boys are there?",
      "options": [
        "30",
        "38",
        "22",
        "32"
      ],
      "answer": "30",
      "explain": "Total parts = 8. One part = 48/(8) = 6. Boys = 5 × 6 = 30."
    },
    {
      "id": "rat_80",
      "topic": "Ratio and Proportion",
      "level": "Medium",
      "company": "General",
      "q": "The ratio of boys to girls is 6:4. If the total number of students is 70, how many boys are there?",
      "options": [
        "42",
        "52",
        "32",
        "46"
      ],
      "answer": "42",
      "explain": "Total parts = 10. One part = 70/(10) = 7. Boys = 6 × 7 = 42."
    },
    {
      "id": "tim_81",
      "topic": "Time and Work",
      "level": "Medium",
      "company": "MSFT",
      "q": "If A alone can complete a piece of work in 4 days, what fraction of the work does A complete in one day?",
      "options": [
        "1/4",
        "1/3",
        "1/5",
        "1/6"
      ],
      "answer": "1/4",
      "explain": "If total work is 1, daily work = 1/4. So A completes 1/4 of the work per day."
    },
    {
      "id": "tim_82",
      "topic": "Time and Work",
      "level": "Hard",
      "company": "AMD",
      "q": "If A alone can complete a piece of work in 5 days, what fraction of the work does A complete in one day?",
      "options": [
        "1/5",
        "1/4",
        "1/6",
        "1/7"
      ],
      "answer": "1/5",
      "explain": "If total work is 1, daily work = 1/5. So A completes 1/5 of the work per day."
    },
    {
      "id": "tim_83",
      "topic": "Time and Work",
      "level": "Easy",
      "company": "NVIDIA",
      "q": "If A alone can complete a piece of work in 6 days, what fraction of the work does A complete in one day?",
      "options": [
        "1/6",
        "1/5",
        "1/7",
        "1/8"
      ],
      "answer": "1/6",
      "explain": "If total work is 1, daily work = 1/6. So A completes 1/6 of the work per day."
    },
    {
      "id": "tim_84",
      "topic": "Time and Work",
      "level": "Medium",
      "company": "General",
      "q": "If A alone can complete a piece of work in 7 days, what fraction of the work does A complete in one day?",
      "options": [
        "1/7",
        "1/6",
        "1/8",
        "1/9"
      ],
      "answer": "1/7",
      "explain": "If total work is 1, daily work = 1/7. So A completes 1/7 of the work per day."
    },
    {
      "id": "tim_85",
      "topic": "Time and Work",
      "level": "Hard",
      "company": "TCS",
      "q": "If A alone can complete a piece of work in 8 days, what fraction of the work does A complete in one day?",
      "options": [
        "1/8",
        "1/7",
        "1/9",
        "1/10"
      ],
      "answer": "1/8",
      "explain": "If total work is 1, daily work = 1/8. So A completes 1/8 of the work per day."
    },
    {
      "id": "tim_86",
      "topic": "Time and Work",
      "level": "Easy",
      "company": "Infosys",
      "q": "If A alone can complete a piece of work in 9 days, what fraction of the work does A complete in one day?",
      "options": [
        "1/9",
        "1/8",
        "1/10",
        "1/11"
      ],
      "answer": "1/9",
      "explain": "If total work is 1, daily work = 1/9. So A completes 1/9 of the work per day."
    },
    {
      "id": "tim_87",
      "topic": "Time and Work",
      "level": "Medium",
      "company": "GOOG",
      "q": "If A alone can complete a piece of work in 10 days, what fraction of the work does A complete in one day?",
      "options": [
        "1/10",
        "1/9",
        "1/11",
        "1/12"
      ],
      "answer": "1/10",
      "explain": "If total work is 1, daily work = 1/10. So A completes 1/10 of the work per day."
    },
    {
      "id": "tim_88",
      "topic": "Time and Work",
      "level": "Hard",
      "company": "MSFT",
      "q": "If A alone can complete a piece of work in 11 days, what fraction of the work does A complete in one day?",
      "options": [
        "1/11",
        "1/10",
        "1/12",
        "1/13"
      ],
      "answer": "1/11",
      "explain": "If total work is 1, daily work = 1/11. So A completes 1/11 of the work per day."
    },
    {
      "id": "tim_89",
      "topic": "Time and Work",
      "level": "Easy",
      "company": "AMD",
      "q": "If A alone can complete a piece of work in 4 days, what fraction of the work does A complete in one day?",
      "options": [
        "1/4",
        "1/3",
        "1/5",
        "1/6"
      ],
      "answer": "1/4",
      "explain": "If total work is 1, daily work = 1/4. So A completes 1/4 of the work per day."
    },
    {
      "id": "tim_90",
      "topic": "Time and Work",
      "level": "Medium",
      "company": "NVIDIA",
      "q": "If A alone can complete a piece of work in 5 days, what fraction of the work does A complete in one day?",
      "options": [
        "1/5",
        "1/4",
        "1/6",
        "1/7"
      ],
      "answer": "1/5",
      "explain": "If total work is 1, daily work = 1/5. So A completes 1/5 of the work per day."
    },
    {
      "id": "tim_91",
      "topic": "Time and Work",
      "level": "Hard",
      "company": "General",
      "q": "If A alone can complete a piece of work in 6 days, what fraction of the work does A complete in one day?",
      "options": [
        "1/6",
        "1/5",
        "1/7",
        "1/8"
      ],
      "answer": "1/6",
      "explain": "If total work is 1, daily work = 1/6. So A completes 1/6 of the work per day."
    },
    {
      "id": "tim_92",
      "topic": "Time and Work",
      "level": "Easy",
      "company": "TCS",
      "q": "If A alone can complete a piece of work in 7 days, what fraction of the work does A complete in one day?",
      "options": [
        "1/7",
        "1/6",
        "1/8",
        "1/9"
      ],
      "answer": "1/7",
      "explain": "If total work is 1, daily work = 1/7. So A completes 1/7 of the work per day."
    },
    {
      "id": "tim_93",
      "topic": "Time and Work",
      "level": "Medium",
      "company": "Infosys",
      "q": "If A alone can complete a piece of work in 8 days, what fraction of the work does A complete in one day?",
      "options": [
        "1/8",
        "1/7",
        "1/9",
        "1/10"
      ],
      "answer": "1/8",
      "explain": "If total work is 1, daily work = 1/8. So A completes 1/8 of the work per day."
    },
    {
      "id": "tim_94",
      "topic": "Time and Work",
      "level": "Hard",
      "company": "GOOG",
      "q": "If A alone can complete a piece of work in 9 days, what fraction of the work does A complete in one day?",
      "options": [
        "1/9",
        "1/8",
        "1/10",
        "1/11"
      ],
      "answer": "1/9",
      "explain": "If total work is 1, daily work = 1/9. So A completes 1/9 of the work per day."
    },
    {
      "id": "tim_95",
      "topic": "Time and Work",
      "level": "Easy",
      "company": "MSFT",
      "q": "If A alone can complete a piece of work in 10 days, what fraction of the work does A complete in one day?",
      "options": [
        "1/10",
        "1/9",
        "1/11",
        "1/12"
      ],
      "answer": "1/10",
      "explain": "If total work is 1, daily work = 1/10. So A completes 1/10 of the work per day."
    },
    {
      "id": "tim_96",
      "topic": "Time and Work",
      "level": "Medium",
      "company": "AMD",
      "q": "If A alone can complete a piece of work in 11 days, what fraction of the work does A complete in one day?",
      "options": [
        "1/11",
        "1/10",
        "1/12",
        "1/13"
      ],
      "answer": "1/11",
      "explain": "If total work is 1, daily work = 1/11. So A completes 1/11 of the work per day."
    },
    {
      "id": "tim_97",
      "topic": "Time and Work",
      "level": "Hard",
      "company": "NVIDIA",
      "q": "If A alone can complete a piece of work in 4 days, what fraction of the work does A complete in one day?",
      "options": [
        "1/4",
        "1/3",
        "1/5",
        "1/6"
      ],
      "answer": "1/4",
      "explain": "If total work is 1, daily work = 1/4. So A completes 1/4 of the work per day."
    },
    {
      "id": "tim_98",
      "topic": "Time and Work",
      "level": "Easy",
      "company": "General",
      "q": "If A alone can complete a piece of work in 5 days, what fraction of the work does A complete in one day?",
      "options": [
        "1/5",
        "1/4",
        "1/6",
        "1/7"
      ],
      "answer": "1/5",
      "explain": "If total work is 1, daily work = 1/5. So A completes 1/5 of the work per day."
    },
    {
      "id": "tim_99",
      "topic": "Time and Work",
      "level": "Medium",
      "company": "TCS",
      "q": "If A alone can complete a piece of work in 6 days, what fraction of the work does A complete in one day?",
      "options": [
        "1/6",
        "1/5",
        "1/7",
        "1/8"
      ],
      "answer": "1/6",
      "explain": "If total work is 1, daily work = 1/6. So A completes 1/6 of the work per day."
    },
    {
      "id": "tim_100",
      "topic": "Time and Work",
      "level": "Hard",
      "company": "Infosys",
      "q": "If A alone can complete a piece of work in 7 days, what fraction of the work does A complete in one day?",
      "options": [
        "1/7",
        "1/6",
        "1/8",
        "1/9"
      ],
      "answer": "1/7",
      "explain": "If total work is 1, daily work = 1/7. So A completes 1/7 of the work per day."
    },
    {
      "id": "tim_101",
      "topic": "Time, Speed and Distance",
      "level": "Hard",
      "company": "NVIDIA",
      "q": "A car travels 90 km in 3 hours. What is its speed?",
      "options": [
        "30",
        "35",
        "25",
        "40"
      ],
      "answer": "30",
      "explain": "Speed = distance/time = 90/3 = 30 km/h."
    },
    {
      "id": "tim_102",
      "topic": "Time, Speed and Distance",
      "level": "Easy",
      "company": "General",
      "q": "A car travels 105 km in 4 hours. What is its speed?",
      "options": [
        "26",
        "31",
        "21",
        "36"
      ],
      "answer": "26",
      "explain": "Speed = distance/time = 105/4 = 26 km/h."
    },
    {
      "id": "tim_103",
      "topic": "Time, Speed and Distance",
      "level": "Medium",
      "company": "TCS",
      "q": "A car travels 120 km in 5 hours. What is its speed?",
      "options": [
        "24",
        "29",
        "19",
        "34"
      ],
      "answer": "24",
      "explain": "Speed = distance/time = 120/5 = 24 km/h."
    },
    {
      "id": "tim_104",
      "topic": "Time, Speed and Distance",
      "level": "Hard",
      "company": "Infosys",
      "q": "A car travels 135 km in 6 hours. What is its speed?",
      "options": [
        "22",
        "27",
        "17",
        "32"
      ],
      "answer": "22",
      "explain": "Speed = distance/time = 135/6 = 22 km/h."
    },
    {
      "id": "tim_105",
      "topic": "Time, Speed and Distance",
      "level": "Easy",
      "company": "GOOG",
      "q": "A car travels 150 km in 7 hours. What is its speed?",
      "options": [
        "21",
        "26",
        "16",
        "31"
      ],
      "answer": "21",
      "explain": "Speed = distance/time = 150/7 = 21 km/h."
    },
    {
      "id": "tim_106",
      "topic": "Time, Speed and Distance",
      "level": "Medium",
      "company": "MSFT",
      "q": "A car travels 165 km in 3 hours. What is its speed?",
      "options": [
        "55",
        "60",
        "50",
        "65"
      ],
      "answer": "55",
      "explain": "Speed = distance/time = 165/3 = 55 km/h."
    },
    {
      "id": "tim_107",
      "topic": "Time, Speed and Distance",
      "level": "Hard",
      "company": "AMD",
      "q": "A car travels 180 km in 4 hours. What is its speed?",
      "options": [
        "45",
        "50",
        "40",
        "55"
      ],
      "answer": "45",
      "explain": "Speed = distance/time = 180/4 = 45 km/h."
    },
    {
      "id": "tim_108",
      "topic": "Time, Speed and Distance",
      "level": "Easy",
      "company": "NVIDIA",
      "q": "A car travels 195 km in 5 hours. What is its speed?",
      "options": [
        "39",
        "44",
        "34",
        "49"
      ],
      "answer": "39",
      "explain": "Speed = distance/time = 195/5 = 39 km/h."
    },
    {
      "id": "tim_109",
      "topic": "Time, Speed and Distance",
      "level": "Medium",
      "company": "General",
      "q": "A car travels 210 km in 6 hours. What is its speed?",
      "options": [
        "35",
        "40",
        "30",
        "45"
      ],
      "answer": "35",
      "explain": "Speed = distance/time = 210/6 = 35 km/h."
    },
    {
      "id": "tim_110",
      "topic": "Time, Speed and Distance",
      "level": "Hard",
      "company": "TCS",
      "q": "A car travels 225 km in 7 hours. What is its speed?",
      "options": [
        "32",
        "37",
        "27",
        "42"
      ],
      "answer": "32",
      "explain": "Speed = distance/time = 225/7 = 32 km/h."
    },
    {
      "id": "tim_111",
      "topic": "Time, Speed and Distance",
      "level": "Easy",
      "company": "Infosys",
      "q": "A car travels 240 km in 3 hours. What is its speed?",
      "options": [
        "80",
        "85",
        "75",
        "90"
      ],
      "answer": "80",
      "explain": "Speed = distance/time = 240/3 = 80 km/h."
    },
    {
      "id": "tim_112",
      "topic": "Time, Speed and Distance",
      "level": "Medium",
      "company": "GOOG",
      "q": "A car travels 255 km in 4 hours. What is its speed?",
      "options": [
        "63",
        "68",
        "58",
        "73"
      ],
      "answer": "63",
      "explain": "Speed = distance/time = 255/4 = 63 km/h."
    },
    {
      "id": "tim_113",
      "topic": "Time, Speed and Distance",
      "level": "Hard",
      "company": "MSFT",
      "q": "A car travels 270 km in 5 hours. What is its speed?",
      "options": [
        "54",
        "59",
        "49",
        "64"
      ],
      "answer": "54",
      "explain": "Speed = distance/time = 270/5 = 54 km/h."
    },
    {
      "id": "tim_114",
      "topic": "Time, Speed and Distance",
      "level": "Easy",
      "company": "AMD",
      "q": "A car travels 285 km in 6 hours. What is its speed?",
      "options": [
        "47",
        "52",
        "42",
        "57"
      ],
      "answer": "47",
      "explain": "Speed = distance/time = 285/6 = 47 km/h."
    },
    {
      "id": "tim_115",
      "topic": "Time, Speed and Distance",
      "level": "Medium",
      "company": "NVIDIA",
      "q": "A car travels 300 km in 7 hours. What is its speed?",
      "options": [
        "42",
        "47",
        "37",
        "52"
      ],
      "answer": "42",
      "explain": "Speed = distance/time = 300/7 = 42 km/h."
    },
    {
      "id": "tim_116",
      "topic": "Time, Speed and Distance",
      "level": "Hard",
      "company": "General",
      "q": "A car travels 315 km in 3 hours. What is its speed?",
      "options": [
        "105",
        "110",
        "100",
        "115"
      ],
      "answer": "105",
      "explain": "Speed = distance/time = 315/3 = 105 km/h."
    },
    {
      "id": "tim_117",
      "topic": "Time, Speed and Distance",
      "level": "Easy",
      "company": "TCS",
      "q": "A car travels 330 km in 4 hours. What is its speed?",
      "options": [
        "82",
        "87",
        "77",
        "92"
      ],
      "answer": "82",
      "explain": "Speed = distance/time = 330/4 = 82 km/h."
    },
    {
      "id": "tim_118",
      "topic": "Time, Speed and Distance",
      "level": "Medium",
      "company": "Infosys",
      "q": "A car travels 345 km in 5 hours. What is its speed?",
      "options": [
        "69",
        "74",
        "64",
        "79"
      ],
      "answer": "69",
      "explain": "Speed = distance/time = 345/5 = 69 km/h."
    },
    {
      "id": "tim_119",
      "topic": "Time, Speed and Distance",
      "level": "Hard",
      "company": "GOOG",
      "q": "A car travels 360 km in 6 hours. What is its speed?",
      "options": [
        "60",
        "65",
        "55",
        "70"
      ],
      "answer": "60",
      "explain": "Speed = distance/time = 360/6 = 60 km/h."
    },
    {
      "id": "tim_120",
      "topic": "Time, Speed and Distance",
      "level": "Easy",
      "company": "MSFT",
      "q": "A car travels 375 km in 7 hours. What is its speed?",
      "options": [
        "53",
        "58",
        "48",
        "63"
      ],
      "answer": "53",
      "explain": "Speed = distance/time = 375/7 = 53 km/h."
    }
  ],
  "logicalQuestions": [
    {
      "id": "num_1",
      "topic": "Number Series",
      "level": "Easy",
      "company": "TCS",
      "q": "Find the next number in the series: 2, 5, 8, 11, 14, ?",
      "options": [
        "17",
        "19",
        "15",
        "21"
      ],
      "answer": "17",
      "explain": "Each term increases by 3, so the next term after 14 is 17."
    },
    {
      "id": "num_2",
      "topic": "Number Series",
      "level": "Medium",
      "company": "Infosys",
      "q": "Find the next number in the series: 1, 4, 9, 16, ?",
      "options": [
        "25",
        "27",
        "23",
        "29"
      ],
      "answer": "25",
      "explain": "These are consecutive squares: [1, 4, 9, 16]. The next square is 5² = 25."
    },
    {
      "id": "num_3",
      "topic": "Number Series",
      "level": "Hard",
      "company": "GOOG",
      "q": "Find the next number in the series: 2, 4, 8, 16, 32, ?",
      "options": [
        "64",
        "66",
        "62",
        "68"
      ],
      "answer": "64",
      "explain": "Each term doubles. 32 × 2 = 64."
    },
    {
      "id": "num_4",
      "topic": "Number Series",
      "level": "Easy",
      "company": "MSFT",
      "q": "Find the next number in the series: 4, 9, 14, 19, 24, ?",
      "options": [
        "29",
        "31",
        "27",
        "33"
      ],
      "answer": "29",
      "explain": "Difference is 5 each time, so next term is 29."
    },
    {
      "id": "num_5",
      "topic": "Number Series",
      "level": "Medium",
      "company": "AMD",
      "q": "Find the next number in the series: 2, 5, 8, 11, 14, ?",
      "options": [
        "17",
        "19",
        "15",
        "21"
      ],
      "answer": "17",
      "explain": "Each term increases by 3, so the next term after 14 is 17."
    },
    {
      "id": "num_6",
      "topic": "Number Series",
      "level": "Hard",
      "company": "NVIDIA",
      "q": "Find the next number in the series: 4, 9, 16, 25, ?",
      "options": [
        "36",
        "38",
        "34",
        "40"
      ],
      "answer": "36",
      "explain": "These are consecutive squares: [4, 9, 16, 25]. The next square is 6² = 36."
    },
    {
      "id": "num_7",
      "topic": "Number Series",
      "level": "Easy",
      "company": "General",
      "q": "Find the next number in the series: 2, 4, 8, 16, 32, ?",
      "options": [
        "64",
        "66",
        "62",
        "68"
      ],
      "answer": "64",
      "explain": "Each term doubles. 32 × 2 = 64."
    },
    {
      "id": "num_8",
      "topic": "Number Series",
      "level": "Medium",
      "company": "TCS",
      "q": "Find the next number in the series: 5, 10, 15, 20, 25, ?",
      "options": [
        "30",
        "32",
        "28",
        "34"
      ],
      "answer": "30",
      "explain": "Difference is 5 each time, so next term is 30."
    },
    {
      "id": "num_9",
      "topic": "Number Series",
      "level": "Hard",
      "company": "Infosys",
      "q": "Find the next number in the series: 2, 5, 8, 11, 14, ?",
      "options": [
        "17",
        "19",
        "15",
        "21"
      ],
      "answer": "17",
      "explain": "Each term increases by 3, so the next term after 14 is 17."
    },
    {
      "id": "num_10",
      "topic": "Number Series",
      "level": "Easy",
      "company": "GOOG",
      "q": "Find the next number in the series: 9, 16, 25, 36, ?",
      "options": [
        "49",
        "51",
        "47",
        "53"
      ],
      "answer": "49",
      "explain": "These are consecutive squares: [9, 16, 25, 36]. The next square is 7² = 49."
    },
    {
      "id": "num_11",
      "topic": "Number Series",
      "level": "Medium",
      "company": "MSFT",
      "q": "Find the next number in the series: 2, 4, 8, 16, 32, ?",
      "options": [
        "64",
        "66",
        "62",
        "68"
      ],
      "answer": "64",
      "explain": "Each term doubles. 32 × 2 = 64."
    },
    {
      "id": "num_12",
      "topic": "Number Series",
      "level": "Hard",
      "company": "AMD",
      "q": "Find the next number in the series: 6, 11, 16, 21, 26, ?",
      "options": [
        "31",
        "33",
        "29",
        "35"
      ],
      "answer": "31",
      "explain": "Difference is 5 each time, so next term is 31."
    },
    {
      "id": "num_13",
      "topic": "Number Series",
      "level": "Easy",
      "company": "NVIDIA",
      "q": "Find the next number in the series: 2, 5, 8, 11, 14, ?",
      "options": [
        "17",
        "19",
        "15",
        "21"
      ],
      "answer": "17",
      "explain": "Each term increases by 3, so the next term after 14 is 17."
    },
    {
      "id": "num_14",
      "topic": "Number Series",
      "level": "Medium",
      "company": "General",
      "q": "Find the next number in the series: 16, 25, 36, 49, ?",
      "options": [
        "64",
        "66",
        "62",
        "68"
      ],
      "answer": "64",
      "explain": "These are consecutive squares: [16, 25, 36, 49]. The next square is 8² = 64."
    },
    {
      "id": "num_15",
      "topic": "Number Series",
      "level": "Hard",
      "company": "TCS",
      "q": "Find the next number in the series: 2, 4, 8, 16, 32, ?",
      "options": [
        "64",
        "66",
        "62",
        "68"
      ],
      "answer": "64",
      "explain": "Each term doubles. 32 × 2 = 64."
    },
    {
      "id": "num_16",
      "topic": "Number Series",
      "level": "Easy",
      "company": "Infosys",
      "q": "Find the next number in the series: 7, 12, 17, 22, 27, ?",
      "options": [
        "32",
        "34",
        "30",
        "36"
      ],
      "answer": "32",
      "explain": "Difference is 5 each time, so next term is 32."
    },
    {
      "id": "num_17",
      "topic": "Number Series",
      "level": "Medium",
      "company": "GOOG",
      "q": "Find the next number in the series: 2, 5, 8, 11, 14, ?",
      "options": [
        "17",
        "19",
        "15",
        "21"
      ],
      "answer": "17",
      "explain": "Each term increases by 3, so the next term after 14 is 17."
    },
    {
      "id": "num_18",
      "topic": "Number Series",
      "level": "Hard",
      "company": "MSFT",
      "q": "Find the next number in the series: 25, 36, 49, 64, ?",
      "options": [
        "81",
        "83",
        "79",
        "85"
      ],
      "answer": "81",
      "explain": "These are consecutive squares: [25, 36, 49, 64]. The next square is 9² = 81."
    },
    {
      "id": "num_19",
      "topic": "Number Series",
      "level": "Easy",
      "company": "AMD",
      "q": "Find the next number in the series: 2, 4, 8, 16, 32, ?",
      "options": [
        "64",
        "66",
        "62",
        "68"
      ],
      "answer": "64",
      "explain": "Each term doubles. 32 × 2 = 64."
    },
    {
      "id": "num_20",
      "topic": "Number Series",
      "level": "Medium",
      "company": "NVIDIA",
      "q": "Find the next number in the series: 8, 13, 18, 23, 28, ?",
      "options": [
        "33",
        "35",
        "31",
        "37"
      ],
      "answer": "33",
      "explain": "Difference is 5 each time, so next term is 33."
    },
    {
      "id": "cod_21",
      "topic": "Coding-Decoding",
      "level": "Medium",
      "company": "GOOG",
      "q": "If each letter in 'CODE' is shifted one step forward in the alphabet, how will it be written?",
      "options": [
        "DPEF",
        "EDOC",
        "EQFG",
        "CODE"
      ],
      "answer": "DPEF",
      "explain": "Shift every letter by +1: CODE → DPEF."
    },
    {
      "id": "cod_22",
      "topic": "Coding-Decoding",
      "level": "Hard",
      "company": "MSFT",
      "q": "In a certain code, the word 'DATA' is written in reverse order. What is its code?",
      "options": [
        "ATAD",
        "AADT",
        "DATA",
        "EBUB"
      ],
      "answer": "ATAD",
      "explain": "Reverse the order of letters in DATA; the coded form is ATAD."
    },
    {
      "id": "cod_23",
      "topic": "Coding-Decoding",
      "level": "Easy",
      "company": "AMD",
      "q": "If each letter in 'LOGIC' is shifted one step forward in the alphabet, how will it be written?",
      "options": [
        "MPHJD",
        "CIGOL",
        "NQIKE",
        "LOGIC"
      ],
      "answer": "MPHJD",
      "explain": "Shift every letter by +1: LOGIC → MPHJD."
    },
    {
      "id": "cod_24",
      "topic": "Coding-Decoding",
      "level": "Medium",
      "company": "NVIDIA",
      "q": "In a certain code, the word 'BRAIN' is written in reverse order. What is its code?",
      "options": [
        "NIARB",
        "ABINR",
        "BRAIN",
        "CSBJO"
      ],
      "answer": "NIARB",
      "explain": "Reverse the order of letters in BRAIN; the coded form is NIARB."
    },
    {
      "id": "cod_25",
      "topic": "Coding-Decoding",
      "level": "Hard",
      "company": "General",
      "q": "If each letter in 'MIND' is shifted one step forward in the alphabet, how will it be written?",
      "options": [
        "NJOE",
        "DNIM",
        "OKPF",
        "MIND"
      ],
      "answer": "NJOE",
      "explain": "Shift every letter by +1: MIND → NJOE."
    },
    {
      "id": "cod_26",
      "topic": "Coding-Decoding",
      "level": "Easy",
      "company": "TCS",
      "q": "In a certain code, the word 'STACK' is written in reverse order. What is its code?",
      "options": [
        "KCATS",
        "ACKST",
        "STACK",
        "TUBDL"
      ],
      "answer": "KCATS",
      "explain": "Reverse the order of letters in STACK; the coded form is KCATS."
    },
    {
      "id": "cod_27",
      "topic": "Coding-Decoding",
      "level": "Medium",
      "company": "Infosys",
      "q": "If each letter in 'QUEUE' is shifted one step forward in the alphabet, how will it be written?",
      "options": [
        "RVFVF",
        "EUEUQ",
        "SWGWG",
        "QUEUE"
      ],
      "answer": "RVFVF",
      "explain": "Shift every letter by +1: QUEUE → RVFVF."
    },
    {
      "id": "cod_28",
      "topic": "Coding-Decoding",
      "level": "Hard",
      "company": "GOOG",
      "q": "In a certain code, the word 'ARRAY' is written in reverse order. What is its code?",
      "options": [
        "YARRA",
        "AARRY",
        "ARRAY",
        "BSSBZ"
      ],
      "answer": "YARRA",
      "explain": "Reverse the order of letters in ARRAY; the coded form is YARRA."
    },
    {
      "id": "cod_29",
      "topic": "Coding-Decoding",
      "level": "Easy",
      "company": "MSFT",
      "q": "If each letter in 'GRAPH' is shifted one step forward in the alphabet, how will it be written?",
      "options": [
        "HSBQI",
        "HPARG",
        "ITCRJ",
        "GRAPH"
      ],
      "answer": "HSBQI",
      "explain": "Shift every letter by +1: GRAPH → HSBQI."
    },
    {
      "id": "cod_30",
      "topic": "Coding-Decoding",
      "level": "Medium",
      "company": "AMD",
      "q": "In a certain code, the word 'DEBUG' is written in reverse order. What is its code?",
      "options": [
        "GUBED",
        "BDEGU",
        "DEBUG",
        "EFCVH"
      ],
      "answer": "GUBED",
      "explain": "Reverse the order of letters in DEBUG; the coded form is GUBED."
    },
    {
      "id": "cod_31",
      "topic": "Coding-Decoding",
      "level": "Hard",
      "company": "NVIDIA",
      "q": "If each letter in 'CODE' is shifted one step forward in the alphabet, how will it be written?",
      "options": [
        "DPEF",
        "EDOC",
        "EQFG",
        "CODE"
      ],
      "answer": "DPEF",
      "explain": "Shift every letter by +1: CODE → DPEF."
    },
    {
      "id": "cod_32",
      "topic": "Coding-Decoding",
      "level": "Easy",
      "company": "General",
      "q": "In a certain code, the word 'DATA' is written in reverse order. What is its code?",
      "options": [
        "ATAD",
        "AADT",
        "DATA",
        "EBUB"
      ],
      "answer": "ATAD",
      "explain": "Reverse the order of letters in DATA; the coded form is ATAD."
    },
    {
      "id": "cod_33",
      "topic": "Coding-Decoding",
      "level": "Medium",
      "company": "TCS",
      "q": "If each letter in 'LOGIC' is shifted one step forward in the alphabet, how will it be written?",
      "options": [
        "MPHJD",
        "CIGOL",
        "NQIKE",
        "LOGIC"
      ],
      "answer": "MPHJD",
      "explain": "Shift every letter by +1: LOGIC → MPHJD."
    },
    {
      "id": "cod_34",
      "topic": "Coding-Decoding",
      "level": "Hard",
      "company": "Infosys",
      "q": "In a certain code, the word 'BRAIN' is written in reverse order. What is its code?",
      "options": [
        "NIARB",
        "ABINR",
        "BRAIN",
        "CSBJO"
      ],
      "answer": "NIARB",
      "explain": "Reverse the order of letters in BRAIN; the coded form is NIARB."
    },
    {
      "id": "cod_35",
      "topic": "Coding-Decoding",
      "level": "Easy",
      "company": "GOOG",
      "q": "If each letter in 'MIND' is shifted one step forward in the alphabet, how will it be written?",
      "options": [
        "NJOE",
        "DNIM",
        "OKPF",
        "MIND"
      ],
      "answer": "NJOE",
      "explain": "Shift every letter by +1: MIND → NJOE."
    },
    {
      "id": "cod_36",
      "topic": "Coding-Decoding",
      "level": "Medium",
      "company": "MSFT",
      "q": "In a certain code, the word 'STACK' is written in reverse order. What is its code?",
      "options": [
        "KCATS",
        "ACKST",
        "STACK",
        "TUBDL"
      ],
      "answer": "KCATS",
      "explain": "Reverse the order of letters in STACK; the coded form is KCATS."
    },
    {
      "id": "cod_37",
      "topic": "Coding-Decoding",
      "level": "Hard",
      "company": "AMD",
      "q": "If each letter in 'QUEUE' is shifted one step forward in the alphabet, how will it be written?",
      "options": [
        "RVFVF",
        "EUEUQ",
        "SWGWG",
        "QUEUE"
      ],
      "answer": "RVFVF",
      "explain": "Shift every letter by +1: QUEUE → RVFVF."
    },
    {
      "id": "cod_38",
      "topic": "Coding-Decoding",
      "level": "Easy",
      "company": "NVIDIA",
      "q": "In a certain code, the word 'ARRAY' is written in reverse order. What is its code?",
      "options": [
        "YARRA",
        "AARRY",
        "ARRAY",
        "BSSBZ"
      ],
      "answer": "YARRA",
      "explain": "Reverse the order of letters in ARRAY; the coded form is YARRA."
    },
    {
      "id": "cod_39",
      "topic": "Coding-Decoding",
      "level": "Medium",
      "company": "General",
      "q": "If each letter in 'GRAPH' is shifted one step forward in the alphabet, how will it be written?",
      "options": [
        "HSBQI",
        "HPARG",
        "ITCRJ",
        "GRAPH"
      ],
      "answer": "HSBQI",
      "explain": "Shift every letter by +1: GRAPH → HSBQI."
    },
    {
      "id": "cod_40",
      "topic": "Coding-Decoding",
      "level": "Hard",
      "company": "TCS",
      "q": "In a certain code, the word 'DEBUG' is written in reverse order. What is its code?",
      "options": [
        "GUBED",
        "BDEGU",
        "DEBUG",
        "EFCVH"
      ],
      "answer": "GUBED",
      "explain": "Reverse the order of letters in DEBUG; the coded form is GUBED."
    },
    {
      "id": "blo_41",
      "topic": "Blood Relations",
      "level": "Hard",
      "company": "Infosys",
      "q": "A is the mother of B. B is the sister of C. What is A to C?",
      "options": [
        "Mother",
        "Son",
        "Father",
        "Daughter"
      ],
      "answer": "Mother",
      "explain": "If A is mother of B and B is sister of C, then A is also C's mother."
    },
    {
      "id": "blo_42",
      "topic": "Blood Relations",
      "level": "Easy",
      "company": "GOOG",
      "q": "P is the brother of Q. Q is the daughter of R. How is P related to R?",
      "options": [
        "Son",
        "Mother",
        "Brother",
        "Uncle"
      ],
      "answer": "Son",
      "explain": "If Q is R's daughter and P is Q's brother, then P is R's son."
    },
    {
      "id": "blo_43",
      "topic": "Blood Relations",
      "level": "Medium",
      "company": "MSFT",
      "q": "M is the father of N. N is the wife of O. How is M related to O?",
      "options": [
        "Father-in-law",
        "Mother",
        "Brother",
        "Uncle"
      ],
      "answer": "Father-in-law",
      "explain": "M is father of N, and N is wife of O, so M is O's father-in-law."
    },
    {
      "id": "blo_44",
      "topic": "Blood Relations",
      "level": "Hard",
      "company": "AMD",
      "q": "X is the sister of Y. Y is the son of Z. How is X related to Z?",
      "options": [
        "Daughter",
        "Mother",
        "Brother",
        "Uncle"
      ],
      "answer": "Daughter",
      "explain": "If Y is son of Z and X is Y's sister, then X is Z's daughter."
    },
    {
      "id": "blo_45",
      "topic": "Blood Relations",
      "level": "Easy",
      "company": "NVIDIA",
      "q": "T is the husband of U. U is the mother of V. How is T related to V?",
      "options": [
        "Father",
        "Mother",
        "Brother",
        "Uncle"
      ],
      "answer": "Father",
      "explain": "If U is mother of V and T is U's husband, T is V's father."
    },
    {
      "id": "blo_46",
      "topic": "Blood Relations",
      "level": "Medium",
      "company": "General",
      "q": "A is the mother of B. B is the sister of C. What is A to C?",
      "options": [
        "Mother",
        "Son",
        "Father",
        "Daughter"
      ],
      "answer": "Mother",
      "explain": "If A is mother of B and B is sister of C, then A is also C's mother."
    },
    {
      "id": "blo_47",
      "topic": "Blood Relations",
      "level": "Hard",
      "company": "TCS",
      "q": "P is the brother of Q. Q is the daughter of R. How is P related to R?",
      "options": [
        "Son",
        "Mother",
        "Brother",
        "Uncle"
      ],
      "answer": "Son",
      "explain": "If Q is R's daughter and P is Q's brother, then P is R's son."
    },
    {
      "id": "blo_48",
      "topic": "Blood Relations",
      "level": "Easy",
      "company": "Infosys",
      "q": "M is the father of N. N is the wife of O. How is M related to O?",
      "options": [
        "Father-in-law",
        "Mother",
        "Brother",
        "Uncle"
      ],
      "answer": "Father-in-law",
      "explain": "M is father of N, and N is wife of O, so M is O's father-in-law."
    },
    {
      "id": "blo_49",
      "topic": "Blood Relations",
      "level": "Medium",
      "company": "GOOG",
      "q": "X is the sister of Y. Y is the son of Z. How is X related to Z?",
      "options": [
        "Daughter",
        "Mother",
        "Brother",
        "Uncle"
      ],
      "answer": "Daughter",
      "explain": "If Y is son of Z and X is Y's sister, then X is Z's daughter."
    },
    {
      "id": "blo_50",
      "topic": "Blood Relations",
      "level": "Hard",
      "company": "MSFT",
      "q": "T is the husband of U. U is the mother of V. How is T related to V?",
      "options": [
        "Father",
        "Mother",
        "Brother",
        "Uncle"
      ],
      "answer": "Father",
      "explain": "If U is mother of V and T is U's husband, T is V's father."
    },
    {
      "id": "blo_51",
      "topic": "Blood Relations",
      "level": "Easy",
      "company": "AMD",
      "q": "A is the mother of B. B is the sister of C. What is A to C?",
      "options": [
        "Mother",
        "Son",
        "Father",
        "Daughter"
      ],
      "answer": "Mother",
      "explain": "If A is mother of B and B is sister of C, then A is also C's mother."
    },
    {
      "id": "blo_52",
      "topic": "Blood Relations",
      "level": "Medium",
      "company": "NVIDIA",
      "q": "P is the brother of Q. Q is the daughter of R. How is P related to R?",
      "options": [
        "Son",
        "Mother",
        "Brother",
        "Uncle"
      ],
      "answer": "Son",
      "explain": "If Q is R's daughter and P is Q's brother, then P is R's son."
    },
    {
      "id": "blo_53",
      "topic": "Blood Relations",
      "level": "Hard",
      "company": "General",
      "q": "M is the father of N. N is the wife of O. How is M related to O?",
      "options": [
        "Father-in-law",
        "Mother",
        "Brother",
        "Uncle"
      ],
      "answer": "Father-in-law",
      "explain": "M is father of N, and N is wife of O, so M is O's father-in-law."
    },
    {
      "id": "blo_54",
      "topic": "Blood Relations",
      "level": "Easy",
      "company": "TCS",
      "q": "X is the sister of Y. Y is the son of Z. How is X related to Z?",
      "options": [
        "Daughter",
        "Mother",
        "Brother",
        "Uncle"
      ],
      "answer": "Daughter",
      "explain": "If Y is son of Z and X is Y's sister, then X is Z's daughter."
    },
    {
      "id": "blo_55",
      "topic": "Blood Relations",
      "level": "Medium",
      "company": "Infosys",
      "q": "T is the husband of U. U is the mother of V. How is T related to V?",
      "options": [
        "Father",
        "Mother",
        "Brother",
        "Uncle"
      ],
      "answer": "Father",
      "explain": "If U is mother of V and T is U's husband, T is V's father."
    },
    {
      "id": "dir_56",
      "topic": "Direction Sense",
      "level": "Easy",
      "company": "MSFT",
      "q": "A person walks 5 km north, then 3 km east. In which direction is the person from the starting point?",
      "options": [
        "North-East",
        "North-West",
        "South-West",
        "North-East"
      ],
      "answer": "North-East",
      "explain": "From the starting point, the final position has a north component and an east component, so it is North-East."
    },
    {
      "id": "dir_57",
      "topic": "Direction Sense",
      "level": "Medium",
      "company": "AMD",
      "q": "Ravi walks 4 km south and then 4 km west. In which direction is he from the starting point?",
      "options": [
        "South-West",
        "North-West",
        "South-West",
        "North-East"
      ],
      "answer": "South-West",
      "explain": "The final point is below and left of the start, so it is South-West."
    },
    {
      "id": "dir_58",
      "topic": "Direction Sense",
      "level": "Hard",
      "company": "NVIDIA",
      "q": "Anita walks 6 km east, then 2 km north. In which direction is she from the starting point?",
      "options": [
        "North-East",
        "North-West",
        "South-West",
        "North-East"
      ],
      "answer": "North-East",
      "explain": "East plus north gives a North-East position."
    },
    {
      "id": "dir_59",
      "topic": "Direction Sense",
      "level": "Easy",
      "company": "General",
      "q": "Aman walks 3 km west and then 7 km north. In which direction is he from the start?",
      "options": [
        "North-West",
        "North-West",
        "South-West",
        "North-East"
      ],
      "answer": "North-West",
      "explain": "West plus north gives North-West."
    },
    {
      "id": "dir_60",
      "topic": "Direction Sense",
      "level": "Medium",
      "company": "TCS",
      "q": "Priya walks 8 km south, then 2 km east. In which direction is she from the starting point?",
      "options": [
        "South-East",
        "North-West",
        "South-West",
        "North-East"
      ],
      "answer": "South-East",
      "explain": "South plus east gives South-East."
    },
    {
      "id": "dir_61",
      "topic": "Direction Sense",
      "level": "Hard",
      "company": "Infosys",
      "q": "A person walks 5 km north, then 3 km east. In which direction is the person from the starting point?",
      "options": [
        "North-East",
        "North-West",
        "South-West",
        "North-East"
      ],
      "answer": "North-East",
      "explain": "From the starting point, the final position has a north component and an east component, so it is North-East."
    },
    {
      "id": "dir_62",
      "topic": "Direction Sense",
      "level": "Easy",
      "company": "GOOG",
      "q": "Ravi walks 4 km south and then 4 km west. In which direction is he from the starting point?",
      "options": [
        "South-West",
        "North-West",
        "South-West",
        "North-East"
      ],
      "answer": "South-West",
      "explain": "The final point is below and left of the start, so it is South-West."
    },
    {
      "id": "dir_63",
      "topic": "Direction Sense",
      "level": "Medium",
      "company": "MSFT",
      "q": "Anita walks 6 km east, then 2 km north. In which direction is she from the starting point?",
      "options": [
        "North-East",
        "North-West",
        "South-West",
        "North-East"
      ],
      "answer": "North-East",
      "explain": "East plus north gives a North-East position."
    },
    {
      "id": "dir_64",
      "topic": "Direction Sense",
      "level": "Hard",
      "company": "AMD",
      "q": "Aman walks 3 km west and then 7 km north. In which direction is he from the start?",
      "options": [
        "North-West",
        "North-West",
        "South-West",
        "North-East"
      ],
      "answer": "North-West",
      "explain": "West plus north gives North-West."
    },
    {
      "id": "dir_65",
      "topic": "Direction Sense",
      "level": "Easy",
      "company": "NVIDIA",
      "q": "Priya walks 8 km south, then 2 km east. In which direction is she from the starting point?",
      "options": [
        "South-East",
        "North-West",
        "South-West",
        "North-East"
      ],
      "answer": "South-East",
      "explain": "South plus east gives South-East."
    },
    {
      "id": "dir_66",
      "topic": "Direction Sense",
      "level": "Medium",
      "company": "General",
      "q": "A person walks 5 km north, then 3 km east. In which direction is the person from the starting point?",
      "options": [
        "North-East",
        "North-West",
        "South-West",
        "North-East"
      ],
      "answer": "North-East",
      "explain": "From the starting point, the final position has a north component and an east component, so it is North-East."
    },
    {
      "id": "dir_67",
      "topic": "Direction Sense",
      "level": "Hard",
      "company": "TCS",
      "q": "Ravi walks 4 km south and then 4 km west. In which direction is he from the starting point?",
      "options": [
        "South-West",
        "North-West",
        "South-West",
        "North-East"
      ],
      "answer": "South-West",
      "explain": "The final point is below and left of the start, so it is South-West."
    },
    {
      "id": "dir_68",
      "topic": "Direction Sense",
      "level": "Easy",
      "company": "Infosys",
      "q": "Anita walks 6 km east, then 2 km north. In which direction is she from the starting point?",
      "options": [
        "North-East",
        "North-West",
        "South-West",
        "North-East"
      ],
      "answer": "North-East",
      "explain": "East plus north gives a North-East position."
    },
    {
      "id": "dir_69",
      "topic": "Direction Sense",
      "level": "Medium",
      "company": "GOOG",
      "q": "Aman walks 3 km west and then 7 km north. In which direction is he from the start?",
      "options": [
        "North-West",
        "North-West",
        "South-West",
        "North-East"
      ],
      "answer": "North-West",
      "explain": "West plus north gives North-West."
    },
    {
      "id": "dir_70",
      "topic": "Direction Sense",
      "level": "Hard",
      "company": "MSFT",
      "q": "Priya walks 8 km south, then 2 km east. In which direction is she from the starting point?",
      "options": [
        "South-East",
        "North-West",
        "South-West",
        "North-East"
      ],
      "answer": "South-East",
      "explain": "South plus east gives South-East."
    },
    {
      "id": "syl_71",
      "topic": "Syllogisms",
      "level": "Medium",
      "company": "AMD",
      "q": "Statements: All coders are problem solvers. Some students are coders. Which conclusion follows?",
      "options": [
        "Some students are problem solvers",
        "All students are coders",
        "Some bugs are features",
        "None follows"
      ],
      "answer": "Some students are problem solvers",
      "explain": "If some students are coders and all coders are problem solvers, those students are problem solvers."
    },
    {
      "id": "syl_72",
      "topic": "Syllogisms",
      "level": "Hard",
      "company": "NVIDIA",
      "q": "Statements: All laptops are machines. All machines need power. Which conclusion follows?",
      "options": [
        "All laptops need power",
        "All students are coders",
        "Some bugs are features",
        "None follows"
      ],
      "answer": "All laptops need power",
      "explain": "The relation passes through both statements: laptops → machines → need power."
    },
    {
      "id": "syl_73",
      "topic": "Syllogisms",
      "level": "Easy",
      "company": "General",
      "q": "Statements: Some apps are scalable. All scalable products are tested. Which conclusion follows?",
      "options": [
        "Some apps are tested",
        "All students are coders",
        "Some bugs are features",
        "None follows"
      ],
      "answer": "Some apps are tested",
      "explain": "Some apps belong to the scalable set, and all scalable products are tested."
    },
    {
      "id": "syl_74",
      "topic": "Syllogisms",
      "level": "Medium",
      "company": "TCS",
      "q": "Statements: All APIs are interfaces. Some interfaces are public. Which conclusion definitely follows?",
      "options": [
        "No definite conclusion about APIs being public",
        "All students are coders",
        "Some bugs are features",
        "None follows"
      ],
      "answer": "No definite conclusion about APIs being public",
      "explain": "We only know some interfaces are public; we do not know whether those interfaces are APIs."
    },
    {
      "id": "syl_75",
      "topic": "Syllogisms",
      "level": "Hard",
      "company": "Infosys",
      "q": "Statements: No bugs are features. Some features are requested. Which conclusion follows?",
      "options": [
        "Some requested items are not bugs",
        "All students are coders",
        "Some bugs are features",
        "None follows"
      ],
      "answer": "Some requested items are not bugs",
      "explain": "Requested features are features, and no feature is a bug."
    },
    {
      "id": "syl_76",
      "topic": "Syllogisms",
      "level": "Easy",
      "company": "GOOG",
      "q": "Statements: All coders are problem solvers. Some students are coders. Which conclusion follows?",
      "options": [
        "Some students are problem solvers",
        "All students are coders",
        "Some bugs are features",
        "None follows"
      ],
      "answer": "Some students are problem solvers",
      "explain": "If some students are coders and all coders are problem solvers, those students are problem solvers."
    },
    {
      "id": "syl_77",
      "topic": "Syllogisms",
      "level": "Medium",
      "company": "MSFT",
      "q": "Statements: All laptops are machines. All machines need power. Which conclusion follows?",
      "options": [
        "All laptops need power",
        "All students are coders",
        "Some bugs are features",
        "None follows"
      ],
      "answer": "All laptops need power",
      "explain": "The relation passes through both statements: laptops → machines → need power."
    },
    {
      "id": "syl_78",
      "topic": "Syllogisms",
      "level": "Hard",
      "company": "AMD",
      "q": "Statements: Some apps are scalable. All scalable products are tested. Which conclusion follows?",
      "options": [
        "Some apps are tested",
        "All students are coders",
        "Some bugs are features",
        "None follows"
      ],
      "answer": "Some apps are tested",
      "explain": "Some apps belong to the scalable set, and all scalable products are tested."
    },
    {
      "id": "syl_79",
      "topic": "Syllogisms",
      "level": "Easy",
      "company": "NVIDIA",
      "q": "Statements: All APIs are interfaces. Some interfaces are public. Which conclusion definitely follows?",
      "options": [
        "No definite conclusion about APIs being public",
        "All students are coders",
        "Some bugs are features",
        "None follows"
      ],
      "answer": "No definite conclusion about APIs being public",
      "explain": "We only know some interfaces are public; we do not know whether those interfaces are APIs."
    },
    {
      "id": "syl_80",
      "topic": "Syllogisms",
      "level": "Medium",
      "company": "General",
      "q": "Statements: No bugs are features. Some features are requested. Which conclusion follows?",
      "options": [
        "Some requested items are not bugs",
        "All students are coders",
        "Some bugs are features",
        "None follows"
      ],
      "answer": "Some requested items are not bugs",
      "explain": "Requested features are features, and no feature is a bug."
    },
    {
      "id": "sea_81",
      "topic": "Seating Arrangement",
      "level": "Hard",
      "company": "NVIDIA",
      "q": "Five friends A, B, C, D, and E sit in a row. A sits left of B and B sits left of C. Who is definitely to the right of A?",
      "options": [
        "B",
        "A",
        "Position 5",
        "No one"
      ],
      "answer": "B",
      "explain": "Since A is left of B, B is definitely to A's right."
    },
    {
      "id": "sea_82",
      "topic": "Seating Arrangement",
      "level": "Easy",
      "company": "General",
      "q": "In a row of five seats, R is to the immediate left of S. Which statement is true?",
      "options": [
        "S is to the immediate right of R",
        "A",
        "Position 5",
        "No one"
      ],
      "answer": "S is to the immediate right of R",
      "explain": "Immediate left/right relations are exact opposites."
    },
    {
      "id": "sea_83",
      "topic": "Seating Arrangement",
      "level": "Medium",
      "company": "TCS",
      "q": "P, Q, and R sit in a row. Q is between P and R. Who is in the middle?",
      "options": [
        "Q",
        "A",
        "Position 5",
        "No one"
      ],
      "answer": "Q",
      "explain": "The statement directly says Q is between P and R."
    },
    {
      "id": "sea_84",
      "topic": "Seating Arrangement",
      "level": "Hard",
      "company": "Infosys",
      "q": "L sits at one end of a row. Which statement must be true?",
      "options": [
        "L has only one adjacent seat",
        "A",
        "Position 5",
        "No one"
      ],
      "answer": "L has only one adjacent seat",
      "explain": "At an end position, there is only one neighbor."
    },
    {
      "id": "sea_85",
      "topic": "Seating Arrangement",
      "level": "Easy",
      "company": "GOOG",
      "q": "M is second from the left in a row of five. Which position is M in?",
      "options": [
        "Position 2",
        "A",
        "Position 5",
        "No one"
      ],
      "answer": "Position 2",
      "explain": "Counting from left, second means position 2."
    },
    {
      "id": "sea_86",
      "topic": "Seating Arrangement",
      "level": "Medium",
      "company": "MSFT",
      "q": "Five friends A, B, C, D, and E sit in a row. A sits left of B and B sits left of C. Who is definitely to the right of A?",
      "options": [
        "B",
        "A",
        "Position 5",
        "No one"
      ],
      "answer": "B",
      "explain": "Since A is left of B, B is definitely to A's right."
    },
    {
      "id": "sea_87",
      "topic": "Seating Arrangement",
      "level": "Hard",
      "company": "AMD",
      "q": "In a row of five seats, R is to the immediate left of S. Which statement is true?",
      "options": [
        "S is to the immediate right of R",
        "A",
        "Position 5",
        "No one"
      ],
      "answer": "S is to the immediate right of R",
      "explain": "Immediate left/right relations are exact opposites."
    },
    {
      "id": "sea_88",
      "topic": "Seating Arrangement",
      "level": "Easy",
      "company": "NVIDIA",
      "q": "P, Q, and R sit in a row. Q is between P and R. Who is in the middle?",
      "options": [
        "Q",
        "A",
        "Position 5",
        "No one"
      ],
      "answer": "Q",
      "explain": "The statement directly says Q is between P and R."
    },
    {
      "id": "sea_89",
      "topic": "Seating Arrangement",
      "level": "Medium",
      "company": "General",
      "q": "L sits at one end of a row. Which statement must be true?",
      "options": [
        "L has only one adjacent seat",
        "A",
        "Position 5",
        "No one"
      ],
      "answer": "L has only one adjacent seat",
      "explain": "At an end position, there is only one neighbor."
    },
    {
      "id": "sea_90",
      "topic": "Seating Arrangement",
      "level": "Hard",
      "company": "TCS",
      "q": "M is second from the left in a row of five. Which position is M in?",
      "options": [
        "Position 2",
        "A",
        "Position 5",
        "No one"
      ],
      "answer": "Position 2",
      "explain": "Counting from left, second means position 2."
    },
    {
      "id": "sta_91",
      "topic": "Statement and Conclusion",
      "level": "Easy",
      "company": "General",
      "q": "Statement: All interview-ready candidates revise regularly. Rohan revises regularly. Conclusion: Rohan is interview-ready.",
      "options": [
        "Conclusion does not definitely follow",
        "Neither statement nor conclusion",
        "Both follow",
        "Conclusion is opposite"
      ],
      "answer": "Conclusion does not definitely follow",
      "explain": "The statement gives a one-way condition; revising regularly alone does not prove interview-readiness."
    },
    {
      "id": "sta_92",
      "topic": "Statement and Conclusion",
      "level": "Medium",
      "company": "TCS",
      "q": "Statement: If code is tested, defects reduce. The code was tested. Conclusion: Defects reduce.",
      "options": [
        "Conclusion follows",
        "Neither statement nor conclusion",
        "Both follow",
        "Conclusion is opposite"
      ],
      "answer": "Conclusion follows",
      "explain": "This matches the given conditional statement directly."
    },
    {
      "id": "sta_93",
      "topic": "Statement and Conclusion",
      "level": "Hard",
      "company": "Infosys",
      "q": "Statement: Some graduates know Python. Every Python learner can write scripts. Conclusion: Some graduates can write scripts.",
      "options": [
        "Conclusion follows",
        "Neither statement nor conclusion",
        "Both follow",
        "Conclusion is opposite"
      ],
      "answer": "Conclusion follows",
      "explain": "Graduates who know Python belong to the Python learner set and can write scripts."
    },
    {
      "id": "sta_94",
      "topic": "Statement and Conclusion",
      "level": "Easy",
      "company": "GOOG",
      "q": "Statement: No late candidate is selected. Amit was selected. Conclusion: Amit was not late.",
      "options": [
        "Conclusion follows",
        "Neither statement nor conclusion",
        "Both follow",
        "Conclusion is opposite"
      ],
      "answer": "Conclusion follows",
      "explain": "Contrapositive reasoning applies: selected implies not late."
    },
    {
      "id": "sta_95",
      "topic": "Statement and Conclusion",
      "level": "Medium",
      "company": "MSFT",
      "q": "Statement: All strong resumes are concise. This resume is concise. Conclusion: This resume is strong.",
      "options": [
        "Conclusion does not definitely follow",
        "Neither statement nor conclusion",
        "Both follow",
        "Conclusion is opposite"
      ],
      "answer": "Conclusion does not definitely follow",
      "explain": "Being concise is necessary here, but not sufficient."
    },
    {
      "id": "sta_96",
      "topic": "Statement and Conclusion",
      "level": "Hard",
      "company": "AMD",
      "q": "Statement: All interview-ready candidates revise regularly. Rohan revises regularly. Conclusion: Rohan is interview-ready.",
      "options": [
        "Conclusion does not definitely follow",
        "Neither statement nor conclusion",
        "Both follow",
        "Conclusion is opposite"
      ],
      "answer": "Conclusion does not definitely follow",
      "explain": "The statement gives a one-way condition; revising regularly alone does not prove interview-readiness."
    },
    {
      "id": "sta_97",
      "topic": "Statement and Conclusion",
      "level": "Easy",
      "company": "NVIDIA",
      "q": "Statement: If code is tested, defects reduce. The code was tested. Conclusion: Defects reduce.",
      "options": [
        "Conclusion follows",
        "Neither statement nor conclusion",
        "Both follow",
        "Conclusion is opposite"
      ],
      "answer": "Conclusion follows",
      "explain": "This matches the given conditional statement directly."
    },
    {
      "id": "sta_98",
      "topic": "Statement and Conclusion",
      "level": "Medium",
      "company": "General",
      "q": "Statement: Some graduates know Python. Every Python learner can write scripts. Conclusion: Some graduates can write scripts.",
      "options": [
        "Conclusion follows",
        "Neither statement nor conclusion",
        "Both follow",
        "Conclusion is opposite"
      ],
      "answer": "Conclusion follows",
      "explain": "Graduates who know Python belong to the Python learner set and can write scripts."
    },
    {
      "id": "sta_99",
      "topic": "Statement and Conclusion",
      "level": "Hard",
      "company": "TCS",
      "q": "Statement: No late candidate is selected. Amit was selected. Conclusion: Amit was not late.",
      "options": [
        "Conclusion follows",
        "Neither statement nor conclusion",
        "Both follow",
        "Conclusion is opposite"
      ],
      "answer": "Conclusion follows",
      "explain": "Contrapositive reasoning applies: selected implies not late."
    },
    {
      "id": "sta_100",
      "topic": "Statement and Conclusion",
      "level": "Easy",
      "company": "Infosys",
      "q": "Statement: All strong resumes are concise. This resume is concise. Conclusion: This resume is strong.",
      "options": [
        "Conclusion does not definitely follow",
        "Neither statement nor conclusion",
        "Both follow",
        "Conclusion is opposite"
      ],
      "answer": "Conclusion does not definitely follow",
      "explain": "Being concise is necessary here, but not sufficient."
    }
  ],
  "technicalMcqs": [
    {
      "id": "tech_1",
      "topic": "C++",
      "level": "Easy",
      "company": "TCS",
      "q": "Which feature enables one interface to behave differently for different objects?",
      "options": [
        "Polymorphism",
        "Inheritance",
        "Compilation",
        "Linking"
      ],
      "answer": "Polymorphism",
      "explain": "Polymorphism lets the same interface trigger different implementations."
    },
    {
      "id": "tech_2",
      "topic": "C++",
      "level": "Medium",
      "company": "Infosys",
      "q": "Which symbol is used to access members of an object through a pointer in C++?",
      "options": [
        ".",
        "::",
        "->",
        "*"
      ],
      "answer": "->",
      "explain": "The arrow operator is used when accessing object members via a pointer."
    },
    {
      "id": "tech_3",
      "topic": "C++",
      "level": "Hard",
      "company": "GOOG",
      "q": "What does STL stand for?",
      "options": [
        "Standard Template Library",
        "Structured Type Library",
        "System Template Logic",
        "Simple Type List"
      ],
      "answer": "Standard Template Library",
      "explain": "STL in C++ expands to Standard Template Library."
    },
    {
      "id": "tech_4",
      "topic": "C++",
      "level": "Easy",
      "company": "MSFT",
      "q": "Which container stores unique sorted keys?",
      "options": [
        "vector",
        "queue",
        "set",
        "stack"
      ],
      "answer": "set",
      "explain": "A set stores unique keys in sorted order."
    },
    {
      "id": "tech_5",
      "topic": "C++",
      "level": "Medium",
      "company": "AMD",
      "q": "Which keyword prevents a derived class method from overriding a base class method further?",
      "options": [
        "final",
        "const",
        "virtual",
        "static"
      ],
      "answer": "final",
      "explain": "The final specifier prevents further overriding."
    },
    {
      "id": "tech_6",
      "topic": "C++",
      "level": "Hard",
      "company": "NVIDIA",
      "q": "Which complexity is expected for lookup in unordered_map on average?",
      "options": [
        "O(1)",
        "O(n log n)",
        "O(log n)",
        "O(n²)"
      ],
      "answer": "O(1)",
      "explain": "Hash-table based unordered_map gives average constant-time lookup."
    },
    {
      "id": "tech_7",
      "topic": "C++",
      "level": "Easy",
      "company": "General",
      "q": "What is recursion?",
      "options": [
        "A loop with break",
        "A function calling itself",
        "A sorting method only",
        "A memory leak"
      ],
      "answer": "A function calling itself",
      "explain": "Recursion solves a problem by defining it in terms of smaller subproblems."
    },
    {
      "id": "tech_8",
      "topic": "C++",
      "level": "Medium",
      "company": "TCS",
      "q": "What happens if a base class destructor is not virtual and you delete a derived object through a base pointer?",
      "options": [
        "Always safe",
        "Only base destructor may run",
        "Compiler error",
        "Program doubles memory"
      ],
      "answer": "Only base destructor may run",
      "explain": "A virtual destructor ensures correct cleanup in inheritance hierarchies."
    },
    {
      "id": "tech_9",
      "topic": "C++",
      "level": "Hard",
      "company": "Infosys",
      "q": "Which keyword creates a reference variable?",
      "options": [
        "ptr",
        "ref",
        "&",
        "*"
      ],
      "answer": "&",
      "explain": "References are declared using the & symbol."
    },
    {
      "id": "tech_10",
      "topic": "C++",
      "level": "Easy",
      "company": "GOOG",
      "q": "Which header is commonly used for dynamic arrays in STL?",
      "options": [
        "<queue>",
        "<vector>",
        "<map>",
        "<stack>"
      ],
      "answer": "<vector>",
      "explain": "The vector container from <vector> is a dynamic array."
    },
    {
      "id": "tech_11",
      "topic": "C++",
      "level": "Medium",
      "company": "MSFT",
      "q": "Which OOP concept hides implementation details?",
      "options": [
        "Abstraction",
        "Friendship",
        "Compilation",
        "Templates"
      ],
      "answer": "Abstraction",
      "explain": "Abstraction exposes essentials and hides internal details."
    },
    {
      "id": "tech_12",
      "topic": "C++",
      "level": "Hard",
      "company": "AMD",
      "q": "What is the default access specifier in a class?",
      "options": [
        "public",
        "protected",
        "private",
        "internal"
      ],
      "answer": "private",
      "explain": "Members of a class are private by default."
    },
    {
      "id": "tech_13",
      "topic": "C++",
      "level": "Easy",
      "company": "NVIDIA",
      "q": "Which keyword is used to define a constant member function?",
      "options": [
        "final",
        "static",
        "const",
        "volatile"
      ],
      "answer": "const",
      "explain": "A const member function promises not to modify object state."
    },
    {
      "id": "tech_14",
      "topic": "C++",
      "level": "Medium",
      "company": "General",
      "q": "What is function overloading?",
      "options": [
        "Using one function many times",
        "Same function name with different parameter lists",
        "Overwriting a file",
        "Running two functions together"
      ],
      "answer": "Same function name with different parameter lists",
      "explain": "Overloading is compile-time polymorphism using different signatures."
    },
    {
      "id": "tech_15",
      "topic": "C++",
      "level": "Hard",
      "company": "TCS",
      "q": "Which of these is a LIFO container adaptor?",
      "options": [
        "queue",
        "stack",
        "priority_queue",
        "deque"
      ],
      "answer": "stack",
      "explain": "Stack follows last-in-first-out."
    },
    {
      "id": "tech_16",
      "topic": "C++",
      "level": "Easy",
      "company": "Infosys",
      "q": "Which feature enables one interface to behave differently for different objects?",
      "options": [
        "Polymorphism",
        "Inheritance",
        "Compilation",
        "Linking"
      ],
      "answer": "Polymorphism",
      "explain": "Polymorphism lets the same interface trigger different implementations."
    },
    {
      "id": "tech_17",
      "topic": "C++",
      "level": "Medium",
      "company": "GOOG",
      "q": "Which symbol is used to access members of an object through a pointer in C++?",
      "options": [
        ".",
        "::",
        "->",
        "*"
      ],
      "answer": "->",
      "explain": "The arrow operator is used when accessing object members via a pointer."
    },
    {
      "id": "tech_18",
      "topic": "C++",
      "level": "Hard",
      "company": "MSFT",
      "q": "What does STL stand for?",
      "options": [
        "Standard Template Library",
        "Structured Type Library",
        "System Template Logic",
        "Simple Type List"
      ],
      "answer": "Standard Template Library",
      "explain": "STL in C++ expands to Standard Template Library."
    },
    {
      "id": "tech_19",
      "topic": "C++",
      "level": "Easy",
      "company": "AMD",
      "q": "Which container stores unique sorted keys?",
      "options": [
        "vector",
        "queue",
        "set",
        "stack"
      ],
      "answer": "set",
      "explain": "A set stores unique keys in sorted order."
    },
    {
      "id": "tech_20",
      "topic": "C++",
      "level": "Medium",
      "company": "NVIDIA",
      "q": "Which keyword prevents a derived class method from overriding a base class method further?",
      "options": [
        "final",
        "const",
        "virtual",
        "static"
      ],
      "answer": "final",
      "explain": "The final specifier prevents further overriding."
    },
    {
      "id": "tech_21",
      "topic": "C++",
      "level": "Hard",
      "company": "General",
      "q": "Which complexity is expected for lookup in unordered_map on average?",
      "options": [
        "O(1)",
        "O(n log n)",
        "O(log n)",
        "O(n²)"
      ],
      "answer": "O(1)",
      "explain": "Hash-table based unordered_map gives average constant-time lookup."
    },
    {
      "id": "tech_22",
      "topic": "C++",
      "level": "Easy",
      "company": "TCS",
      "q": "What is recursion?",
      "options": [
        "A loop with break",
        "A function calling itself",
        "A sorting method only",
        "A memory leak"
      ],
      "answer": "A function calling itself",
      "explain": "Recursion solves a problem by defining it in terms of smaller subproblems."
    },
    {
      "id": "tech_23",
      "topic": "C++",
      "level": "Medium",
      "company": "Infosys",
      "q": "What happens if a base class destructor is not virtual and you delete a derived object through a base pointer?",
      "options": [
        "Always safe",
        "Only base destructor may run",
        "Compiler error",
        "Program doubles memory"
      ],
      "answer": "Only base destructor may run",
      "explain": "A virtual destructor ensures correct cleanup in inheritance hierarchies."
    },
    {
      "id": "tech_24",
      "topic": "C++",
      "level": "Hard",
      "company": "GOOG",
      "q": "Which keyword creates a reference variable?",
      "options": [
        "ptr",
        "ref",
        "&",
        "*"
      ],
      "answer": "&",
      "explain": "References are declared using the & symbol."
    },
    {
      "id": "tech_25",
      "topic": "C++",
      "level": "Easy",
      "company": "MSFT",
      "q": "Which header is commonly used for dynamic arrays in STL?",
      "options": [
        "<queue>",
        "<vector>",
        "<map>",
        "<stack>"
      ],
      "answer": "<vector>",
      "explain": "The vector container from <vector> is a dynamic array."
    },
    {
      "id": "tech_26",
      "topic": "C++",
      "level": "Medium",
      "company": "AMD",
      "q": "Which OOP concept hides implementation details?",
      "options": [
        "Abstraction",
        "Friendship",
        "Compilation",
        "Templates"
      ],
      "answer": "Abstraction",
      "explain": "Abstraction exposes essentials and hides internal details."
    },
    {
      "id": "tech_27",
      "topic": "C++",
      "level": "Hard",
      "company": "NVIDIA",
      "q": "What is the default access specifier in a class?",
      "options": [
        "public",
        "protected",
        "private",
        "internal"
      ],
      "answer": "private",
      "explain": "Members of a class are private by default."
    },
    {
      "id": "tech_28",
      "topic": "C++",
      "level": "Easy",
      "company": "General",
      "q": "Which keyword is used to define a constant member function?",
      "options": [
        "final",
        "static",
        "const",
        "volatile"
      ],
      "answer": "const",
      "explain": "A const member function promises not to modify object state."
    },
    {
      "id": "tech_29",
      "topic": "C++",
      "level": "Medium",
      "company": "TCS",
      "q": "What is function overloading?",
      "options": [
        "Using one function many times",
        "Same function name with different parameter lists",
        "Overwriting a file",
        "Running two functions together"
      ],
      "answer": "Same function name with different parameter lists",
      "explain": "Overloading is compile-time polymorphism using different signatures."
    },
    {
      "id": "tech_30",
      "topic": "C++",
      "level": "Hard",
      "company": "Infosys",
      "q": "Which of these is a LIFO container adaptor?",
      "options": [
        "queue",
        "stack",
        "priority_queue",
        "deque"
      ],
      "answer": "stack",
      "explain": "Stack follows last-in-first-out."
    },
    {
      "id": "tech_31",
      "topic": "Python",
      "level": "Medium",
      "company": "MSFT",
      "q": "Which data type is mutable?",
      "options": [
        "tuple",
        "string",
        "list",
        "frozenset"
      ],
      "answer": "list",
      "explain": "Lists can be modified in place."
    },
    {
      "id": "tech_32",
      "topic": "Python",
      "level": "Hard",
      "company": "AMD",
      "q": "What does len() return?",
      "options": [
        "Index",
        "Length",
        "Type",
        "Memory size only"
      ],
      "answer": "Length",
      "explain": "len() returns the number of items in a sequence or collection."
    },
    {
      "id": "tech_33",
      "topic": "Python",
      "level": "Easy",
      "company": "NVIDIA",
      "q": "Which keyword is used to define a function?",
      "options": [
        "func",
        "define",
        "def",
        "lambda"
      ],
      "answer": "def",
      "explain": "Functions are declared with def."
    },
    {
      "id": "tech_34",
      "topic": "Python",
      "level": "Medium",
      "company": "General",
      "q": "Which collection stores key-value pairs?",
      "options": [
        "list",
        "set",
        "dict",
        "tuple"
      ],
      "answer": "dict",
      "explain": "A dictionary stores key-value mappings."
    },
    {
      "id": "tech_35",
      "topic": "Python",
      "level": "Hard",
      "company": "TCS",
      "q": "What is the output type of range(5)?",
      "options": [
        "list",
        "tuple",
        "range object",
        "set"
      ],
      "answer": "range object",
      "explain": "range() returns a range object in Python 3."
    },
    {
      "id": "tech_36",
      "topic": "Python",
      "level": "Easy",
      "company": "Infosys",
      "q": "Which statement handles exceptions?",
      "options": [
        "catch-except",
        "do-except",
        "try-except",
        "error-if"
      ],
      "answer": "try-except",
      "explain": "Python exception handling uses try-except."
    },
    {
      "id": "tech_37",
      "topic": "Python",
      "level": "Medium",
      "company": "GOOG",
      "q": "What is a lambda?",
      "options": [
        "Named class",
        "Anonymous function",
        "Loop type",
        "Module"
      ],
      "answer": "Anonymous function",
      "explain": "lambda creates a small anonymous function."
    },
    {
      "id": "tech_38",
      "topic": "Python",
      "level": "Hard",
      "company": "MSFT",
      "q": "Which method adds one item to a list?",
      "options": [
        "append()",
        "add()",
        "push()",
        "insertall()"
      ],
      "answer": "append()",
      "explain": "append() adds a single item to the end of a list."
    },
    {
      "id": "tech_39",
      "topic": "Python",
      "level": "Easy",
      "company": "AMD",
      "q": "What does __init__ do?",
      "options": [
        "Starts interpreter",
        "Initializes an object",
        "Closes file",
        "Prints object"
      ],
      "answer": "Initializes an object",
      "explain": "__init__ is the initializer called on object creation."
    },
    {
      "id": "tech_40",
      "topic": "Python",
      "level": "Medium",
      "company": "NVIDIA",
      "q": "Which of these is immutable?",
      "options": [
        "list",
        "dict",
        "set",
        "tuple"
      ],
      "answer": "tuple",
      "explain": "Tuples cannot be changed after creation."
    },
    {
      "id": "tech_41",
      "topic": "Python",
      "level": "Hard",
      "company": "General",
      "q": "Which operator checks membership?",
      "options": [
        "->",
        "in",
        "is not",
        "@"
      ],
      "answer": "in",
      "explain": "The in operator checks whether an element exists in a container."
    },
    {
      "id": "tech_42",
      "topic": "Python",
      "level": "Easy",
      "company": "TCS",
      "q": "Which function opens a file?",
      "options": [
        "open()",
        "read()",
        "file()",
        "load()"
      ],
      "answer": "open()",
      "explain": "open() returns a file handle."
    },
    {
      "id": "tech_43",
      "topic": "Python",
      "level": "Medium",
      "company": "Infosys",
      "q": "Which structure removes duplicates automatically?",
      "options": [
        "list",
        "tuple",
        "set",
        "str"
      ],
      "answer": "set",
      "explain": "Sets contain unique elements."
    },
    {
      "id": "tech_44",
      "topic": "Python",
      "level": "Hard",
      "company": "GOOG",
      "q": "What is list comprehension mainly used for?",
      "options": [
        "Defining classes",
        "Concise list creation",
        "Networking",
        "Exception raising"
      ],
      "answer": "Concise list creation",
      "explain": "List comprehensions create lists compactly and readably."
    },
    {
      "id": "tech_45",
      "topic": "Python",
      "level": "Easy",
      "company": "MSFT",
      "q": "Which method sorts a list in place?",
      "options": [
        "sorted()",
        "sort()",
        "arrange()",
        "order()"
      ],
      "answer": "sort()",
      "explain": "sort() modifies the original list; sorted() returns a new list."
    },
    {
      "id": "tech_46",
      "topic": "Python",
      "level": "Medium",
      "company": "AMD",
      "q": "Which data type is mutable?",
      "options": [
        "tuple",
        "string",
        "list",
        "frozenset"
      ],
      "answer": "list",
      "explain": "Lists can be modified in place."
    },
    {
      "id": "tech_47",
      "topic": "Python",
      "level": "Hard",
      "company": "NVIDIA",
      "q": "What does len() return?",
      "options": [
        "Index",
        "Length",
        "Type",
        "Memory size only"
      ],
      "answer": "Length",
      "explain": "len() returns the number of items in a sequence or collection."
    },
    {
      "id": "tech_48",
      "topic": "Python",
      "level": "Easy",
      "company": "General",
      "q": "Which keyword is used to define a function?",
      "options": [
        "func",
        "define",
        "def",
        "lambda"
      ],
      "answer": "def",
      "explain": "Functions are declared with def."
    },
    {
      "id": "tech_49",
      "topic": "Python",
      "level": "Medium",
      "company": "TCS",
      "q": "Which collection stores key-value pairs?",
      "options": [
        "list",
        "set",
        "dict",
        "tuple"
      ],
      "answer": "dict",
      "explain": "A dictionary stores key-value mappings."
    },
    {
      "id": "tech_50",
      "topic": "Python",
      "level": "Hard",
      "company": "Infosys",
      "q": "What is the output type of range(5)?",
      "options": [
        "list",
        "tuple",
        "range object",
        "set"
      ],
      "answer": "range object",
      "explain": "range() returns a range object in Python 3."
    },
    {
      "id": "tech_51",
      "topic": "Python",
      "level": "Easy",
      "company": "GOOG",
      "q": "Which statement handles exceptions?",
      "options": [
        "catch-except",
        "do-except",
        "try-except",
        "error-if"
      ],
      "answer": "try-except",
      "explain": "Python exception handling uses try-except."
    },
    {
      "id": "tech_52",
      "topic": "Python",
      "level": "Medium",
      "company": "MSFT",
      "q": "What is a lambda?",
      "options": [
        "Named class",
        "Anonymous function",
        "Loop type",
        "Module"
      ],
      "answer": "Anonymous function",
      "explain": "lambda creates a small anonymous function."
    },
    {
      "id": "tech_53",
      "topic": "Python",
      "level": "Hard",
      "company": "AMD",
      "q": "Which method adds one item to a list?",
      "options": [
        "append()",
        "add()",
        "push()",
        "insertall()"
      ],
      "answer": "append()",
      "explain": "append() adds a single item to the end of a list."
    },
    {
      "id": "tech_54",
      "topic": "Python",
      "level": "Easy",
      "company": "NVIDIA",
      "q": "What does __init__ do?",
      "options": [
        "Starts interpreter",
        "Initializes an object",
        "Closes file",
        "Prints object"
      ],
      "answer": "Initializes an object",
      "explain": "__init__ is the initializer called on object creation."
    },
    {
      "id": "tech_55",
      "topic": "Python",
      "level": "Medium",
      "company": "General",
      "q": "Which of these is immutable?",
      "options": [
        "list",
        "dict",
        "set",
        "tuple"
      ],
      "answer": "tuple",
      "explain": "Tuples cannot be changed after creation."
    },
    {
      "id": "tech_56",
      "topic": "Python",
      "level": "Hard",
      "company": "TCS",
      "q": "Which operator checks membership?",
      "options": [
        "->",
        "in",
        "is not",
        "@"
      ],
      "answer": "in",
      "explain": "The in operator checks whether an element exists in a container."
    },
    {
      "id": "tech_57",
      "topic": "Python",
      "level": "Easy",
      "company": "Infosys",
      "q": "Which function opens a file?",
      "options": [
        "open()",
        "read()",
        "file()",
        "load()"
      ],
      "answer": "open()",
      "explain": "open() returns a file handle."
    },
    {
      "id": "tech_58",
      "topic": "Python",
      "level": "Medium",
      "company": "GOOG",
      "q": "Which structure removes duplicates automatically?",
      "options": [
        "list",
        "tuple",
        "set",
        "str"
      ],
      "answer": "set",
      "explain": "Sets contain unique elements."
    },
    {
      "id": "tech_59",
      "topic": "Python",
      "level": "Hard",
      "company": "MSFT",
      "q": "What is list comprehension mainly used for?",
      "options": [
        "Defining classes",
        "Concise list creation",
        "Networking",
        "Exception raising"
      ],
      "answer": "Concise list creation",
      "explain": "List comprehensions create lists compactly and readably."
    },
    {
      "id": "tech_60",
      "topic": "Python",
      "level": "Easy",
      "company": "AMD",
      "q": "Which method sorts a list in place?",
      "options": [
        "sorted()",
        "sort()",
        "arrange()",
        "order()"
      ],
      "answer": "sort()",
      "explain": "sort() modifies the original list; sorted() returns a new list."
    },
    {
      "id": "tech_61",
      "topic": "Perl",
      "level": "Hard",
      "company": "NVIDIA",
      "q": "Which symbol prefixes a scalar variable in Perl?",
      "options": [
        "$",
        "@",
        "%",
        "&"
      ],
      "answer": "$",
      "explain": "Scalars use the $ sigil in Perl."
    },
    {
      "id": "tech_62",
      "topic": "Perl",
      "level": "Easy",
      "company": "General",
      "q": "Which symbol prefixes an array?",
      "options": [
        "$",
        "@",
        "%",
        "*"
      ],
      "answer": "@",
      "explain": "Arrays use the @ sigil."
    },
    {
      "id": "tech_63",
      "topic": "Perl",
      "level": "Medium",
      "company": "TCS",
      "q": "Which symbol prefixes a hash?",
      "options": [
        "#",
        "%",
        "&",
        "@"
      ],
      "answer": "%",
      "explain": "Hashes use the % sigil."
    },
    {
      "id": "tech_64",
      "topic": "Perl",
      "level": "Hard",
      "company": "Infosys",
      "q": "What is Perl especially known for?",
      "options": [
        "Game engines only",
        "Text processing and regex",
        "Mobile app stores",
        "Binary firmware only"
      ],
      "answer": "Text processing and regex",
      "explain": "Perl is widely known for strong text processing capabilities."
    },
    {
      "id": "tech_65",
      "topic": "Perl",
      "level": "Easy",
      "company": "GOOG",
      "q": "Which operator matches a regex pattern?",
      "options": [
        "=~",
        "==",
        "=>",
        "~~"
      ],
      "answer": "=~",
      "explain": "The =~ operator binds a string to a regex match."
    },
    {
      "id": "tech_66",
      "topic": "Perl",
      "level": "Medium",
      "company": "MSFT",
      "q": "What does chomp do?",
      "options": [
        "Deletes file",
        "Removes trailing newline",
        "Sorts array",
        "Adds whitespace"
      ],
      "answer": "Removes trailing newline",
      "explain": "chomp removes a trailing input record separator, usually a newline."
    },
    {
      "id": "tech_67",
      "topic": "Perl",
      "level": "Hard",
      "company": "AMD",
      "q": "Which keyword prints output?",
      "options": [
        "echo",
        "print",
        "show",
        "display"
      ],
      "answer": "print",
      "explain": "print is commonly used for output in Perl."
    },
    {
      "id": "tech_68",
      "topic": "Perl",
      "level": "Easy",
      "company": "NVIDIA",
      "q": "Which structure stores key-value pairs?",
      "options": [
        "hash",
        "array",
        "scalar",
        "filehandle"
      ],
      "answer": "hash",
      "explain": "Hashes map keys to values."
    },
    {
      "id": "tech_69",
      "topic": "Perl",
      "level": "Medium",
      "company": "General",
      "q": "Which built-in function opens files?",
      "options": [
        "open",
        "readfile",
        "attach",
        "load"
      ],
      "answer": "open",
      "explain": "open is used to open files and filehandles."
    },
    {
      "id": "tech_70",
      "topic": "Perl",
      "level": "Hard",
      "company": "TCS",
      "q": "Why is regex skill useful in Perl interviews?",
      "options": [
        "It is never used",
        "Many scripting tasks rely on pattern matching",
        "Only GUI design needs it",
        "Perl has no regex"
      ],
      "answer": "Many scripting tasks rely on pattern matching",
      "explain": "Pattern matching is one of Perl's strongest practical uses."
    },
    {
      "id": "tech_71",
      "topic": "Perl",
      "level": "Easy",
      "company": "Infosys",
      "q": "Which symbol prefixes a scalar variable in Perl?",
      "options": [
        "$",
        "@",
        "%",
        "&"
      ],
      "answer": "$",
      "explain": "Scalars use the $ sigil in Perl."
    },
    {
      "id": "tech_72",
      "topic": "Perl",
      "level": "Medium",
      "company": "GOOG",
      "q": "Which symbol prefixes an array?",
      "options": [
        "$",
        "@",
        "%",
        "*"
      ],
      "answer": "@",
      "explain": "Arrays use the @ sigil."
    },
    {
      "id": "tech_73",
      "topic": "Perl",
      "level": "Hard",
      "company": "MSFT",
      "q": "Which symbol prefixes a hash?",
      "options": [
        "#",
        "%",
        "&",
        "@"
      ],
      "answer": "%",
      "explain": "Hashes use the % sigil."
    },
    {
      "id": "tech_74",
      "topic": "Perl",
      "level": "Easy",
      "company": "AMD",
      "q": "What is Perl especially known for?",
      "options": [
        "Game engines only",
        "Text processing and regex",
        "Mobile app stores",
        "Binary firmware only"
      ],
      "answer": "Text processing and regex",
      "explain": "Perl is widely known for strong text processing capabilities."
    },
    {
      "id": "tech_75",
      "topic": "Perl",
      "level": "Medium",
      "company": "NVIDIA",
      "q": "Which operator matches a regex pattern?",
      "options": [
        "=~",
        "==",
        "=>",
        "~~"
      ],
      "answer": "=~",
      "explain": "The =~ operator binds a string to a regex match."
    },
    {
      "id": "tech_76",
      "topic": "Perl",
      "level": "Hard",
      "company": "General",
      "q": "What does chomp do?",
      "options": [
        "Deletes file",
        "Removes trailing newline",
        "Sorts array",
        "Adds whitespace"
      ],
      "answer": "Removes trailing newline",
      "explain": "chomp removes a trailing input record separator, usually a newline."
    },
    {
      "id": "tech_77",
      "topic": "Perl",
      "level": "Easy",
      "company": "TCS",
      "q": "Which keyword prints output?",
      "options": [
        "echo",
        "print",
        "show",
        "display"
      ],
      "answer": "print",
      "explain": "print is commonly used for output in Perl."
    },
    {
      "id": "tech_78",
      "topic": "Perl",
      "level": "Medium",
      "company": "Infosys",
      "q": "Which structure stores key-value pairs?",
      "options": [
        "hash",
        "array",
        "scalar",
        "filehandle"
      ],
      "answer": "hash",
      "explain": "Hashes map keys to values."
    },
    {
      "id": "tech_79",
      "topic": "Perl",
      "level": "Hard",
      "company": "GOOG",
      "q": "Which built-in function opens files?",
      "options": [
        "open",
        "readfile",
        "attach",
        "load"
      ],
      "answer": "open",
      "explain": "open is used to open files and filehandles."
    },
    {
      "id": "tech_80",
      "topic": "Perl",
      "level": "Easy",
      "company": "MSFT",
      "q": "Why is regex skill useful in Perl interviews?",
      "options": [
        "It is never used",
        "Many scripting tasks rely on pattern matching",
        "Only GUI design needs it",
        "Perl has no regex"
      ],
      "answer": "Many scripting tasks rely on pattern matching",
      "explain": "Pattern matching is one of Perl's strongest practical uses."
    }
  ],
  "mockTests": [
    {
      "id": "mock_1",
      "title": "Placement Mock Test 1",
      "desc": "30-minute mixed mock covering aptitude, logic, and technical basics. Difficulty blend tuned for fresher interviews.",
      "durationMinutes": 30,
      "questions": [
        {
          "id": "per_1",
          "topic": "Percentages",
          "level": "Easy",
          "company": "TCS",
          "q": "What is 10% of 120?",
          "options": [
            "7",
            "12",
            "17",
            "22"
          ],
          "answer": "12",
          "explain": "Convert 10% to 10/100 and multiply: 120 × 10/100 = 12."
        },
        {
          "id": "per_8",
          "topic": "Percentages",
          "level": "Medium",
          "company": "TCS",
          "q": "What is 20% of 190?",
          "options": [
            "33",
            "38",
            "43",
            "48"
          ],
          "answer": "38",
          "explain": "Convert 20% to 20/100 and multiply: 190 × 20/100 = 38."
        },
        {
          "id": "per_15",
          "topic": "Percentages",
          "level": "Hard",
          "company": "TCS",
          "q": "What is 30% of 260?",
          "options": [
            "73",
            "78",
            "83",
            "88"
          ],
          "answer": "78",
          "explain": "Convert 30% to 30/100 and multiply: 260 × 30/100 = 78."
        },
        {
          "id": "pro_22",
          "topic": "Profit and Loss",
          "level": "Hard",
          "company": "MSFT",
          "q": "An article has cost price ₹92. It is sold at a profit of 15%. What is the selling price?",
          "options": [
            "106",
            "114",
            "98",
            "118"
          ],
          "answer": "106",
          "explain": "Selling price = CP × (100 + profit%)/100 = 92 × 115/100 = ₹106."
        },
        {
          "id": "pro_29",
          "topic": "Profit and Loss",
          "level": "Easy",
          "company": "MSFT",
          "q": "An article has cost price ₹176. It is sold at a profit of 25%. What is the selling price?",
          "options": [
            "220",
            "228",
            "212",
            "232"
          ],
          "answer": "220",
          "explain": "Selling price = CP × (100 + profit%)/100 = 176 × 125/100 = ₹220."
        },
        {
          "id": "pro_36",
          "topic": "Profit and Loss",
          "level": "Medium",
          "company": "MSFT",
          "q": "An article has cost price ₹260. It is sold at a profit of 10%. What is the selling price?",
          "options": [
            "286",
            "294",
            "278",
            "298"
          ],
          "answer": "286",
          "explain": "Selling price = CP × (100 + profit%)/100 = 260 × 110/100 = ₹286."
        },
        {
          "id": "ave_43",
          "topic": "Averages",
          "level": "Medium",
          "company": "General",
          "q": "Find the average of 12, 16, 20, and 24.",
          "options": [
            "18",
            "19",
            "20",
            "17"
          ],
          "answer": "18",
          "explain": "Average = sum of observations / number of observations = 72/4 = 18."
        },
        {
          "id": "ave_50",
          "topic": "Averages",
          "level": "Hard",
          "company": "General",
          "q": "Find the average of 19, 23, 27, and 31.",
          "options": [
            "25",
            "26",
            "27",
            "24"
          ],
          "answer": "25",
          "explain": "Average = sum of observations / number of observations = 100/4 = 25."
        },
        {
          "id": "ave_57",
          "topic": "Averages",
          "level": "Easy",
          "company": "General",
          "q": "Find the average of 26, 30, 34, and 38.",
          "options": [
            "32",
            "33",
            "34",
            "31"
          ],
          "answer": "32",
          "explain": "Average = sum of observations / number of observations = 128/4 = 32."
        },
        {
          "id": "rat_64",
          "topic": "Ratio and Proportion",
          "level": "Easy",
          "company": "AMD",
          "q": "The ratio of boys to girls is 5:3. If the total number of students is 56, how many boys are there?",
          "options": [
            "35",
            "43",
            "27",
            "37"
          ],
          "answer": "35",
          "explain": "Total parts = 8. One part = 56/(8) = 7. Boys = 5 × 7 = 35."
        },
        {
          "id": "rat_71",
          "topic": "Ratio and Proportion",
          "level": "Medium",
          "company": "AMD",
          "q": "The ratio of boys to girls is 2:5. If the total number of students is 42, how many boys are there?",
          "options": [
            "12",
            "19",
            "5",
            "16"
          ],
          "answer": "12",
          "explain": "Total parts = 7. One part = 42/(7) = 6. Boys = 2 × 6 = 12."
        },
        {
          "id": "rat_78",
          "topic": "Ratio and Proportion",
          "level": "Hard",
          "company": "AMD",
          "q": "The ratio of boys to girls is 4:7. If the total number of students is 55, how many boys are there?",
          "options": [
            "20",
            "31",
            "9",
            "26"
          ],
          "answer": "20",
          "explain": "Total parts = 11. One part = 55/(11) = 5. Boys = 4 × 5 = 20."
        },
        {
          "id": "tim_85",
          "topic": "Time and Work",
          "level": "Hard",
          "company": "TCS",
          "q": "If A alone can complete a piece of work in 8 days, what fraction of the work does A complete in one day?",
          "options": [
            "1/8",
            "1/7",
            "1/9",
            "1/10"
          ],
          "answer": "1/8",
          "explain": "If total work is 1, daily work = 1/8. So A completes 1/8 of the work per day."
        },
        {
          "id": "tim_92",
          "topic": "Time and Work",
          "level": "Easy",
          "company": "TCS",
          "q": "If A alone can complete a piece of work in 7 days, what fraction of the work does A complete in one day?",
          "options": [
            "1/7",
            "1/6",
            "1/8",
            "1/9"
          ],
          "answer": "1/7",
          "explain": "If total work is 1, daily work = 1/7. So A completes 1/7 of the work per day."
        },
        {
          "id": "tim_99",
          "topic": "Time and Work",
          "level": "Medium",
          "company": "TCS",
          "q": "If A alone can complete a piece of work in 6 days, what fraction of the work does A complete in one day?",
          "options": [
            "1/6",
            "1/5",
            "1/7",
            "1/8"
          ],
          "answer": "1/6",
          "explain": "If total work is 1, daily work = 1/6. So A completes 1/6 of the work per day."
        },
        {
          "id": "tim_106",
          "topic": "Time, Speed and Distance",
          "level": "Medium",
          "company": "MSFT",
          "q": "A car travels 165 km in 3 hours. What is its speed?",
          "options": [
            "55",
            "60",
            "50",
            "65"
          ],
          "answer": "55",
          "explain": "Speed = distance/time = 165/3 = 55 km/h."
        },
        {
          "id": "tim_113",
          "topic": "Time, Speed and Distance",
          "level": "Hard",
          "company": "MSFT",
          "q": "A car travels 270 km in 5 hours. What is its speed?",
          "options": [
            "54",
            "59",
            "49",
            "64"
          ],
          "answer": "54",
          "explain": "Speed = distance/time = 270/5 = 54 km/h."
        },
        {
          "id": "tim_120",
          "topic": "Time, Speed and Distance",
          "level": "Easy",
          "company": "MSFT",
          "q": "A car travels 375 km in 7 hours. What is its speed?",
          "options": [
            "53",
            "58",
            "48",
            "63"
          ],
          "answer": "53",
          "explain": "Speed = distance/time = 375/7 = 53 km/h."
        },
        {
          "id": "num_7",
          "topic": "Number Series",
          "level": "Easy",
          "company": "General",
          "q": "Find the next number in the series: 2, 4, 8, 16, 32, ?",
          "options": [
            "64",
            "66",
            "62",
            "68"
          ],
          "answer": "64",
          "explain": "Each term doubles. 32 × 2 = 64."
        },
        {
          "id": "num_14",
          "topic": "Number Series",
          "level": "Medium",
          "company": "General",
          "q": "Find the next number in the series: 16, 25, 36, 49, ?",
          "options": [
            "64",
            "66",
            "62",
            "68"
          ],
          "answer": "64",
          "explain": "These are consecutive squares: [16, 25, 36, 49]. The next square is 8² = 64."
        },
        {
          "id": "cod_21",
          "topic": "Coding-Decoding",
          "level": "Medium",
          "company": "GOOG",
          "q": "If each letter in 'CODE' is shifted one step forward in the alphabet, how will it be written?",
          "options": [
            "DPEF",
            "EDOC",
            "EQFG",
            "CODE"
          ],
          "answer": "DPEF",
          "explain": "Shift every letter by +1: CODE → DPEF."
        },
        {
          "id": "cod_28",
          "topic": "Coding-Decoding",
          "level": "Hard",
          "company": "GOOG",
          "q": "In a certain code, the word 'ARRAY' is written in reverse order. What is its code?",
          "options": [
            "YARRA",
            "AARRY",
            "ARRAY",
            "BSSBZ"
          ],
          "answer": "YARRA",
          "explain": "Reverse the order of letters in ARRAY; the coded form is YARRA."
        },
        {
          "id": "cod_35",
          "topic": "Coding-Decoding",
          "level": "Easy",
          "company": "GOOG",
          "q": "If each letter in 'MIND' is shifted one step forward in the alphabet, how will it be written?",
          "options": [
            "NJOE",
            "DNIM",
            "OKPF",
            "MIND"
          ],
          "answer": "NJOE",
          "explain": "Shift every letter by +1: MIND → NJOE."
        },
        {
          "id": "blo_42",
          "topic": "Blood Relations",
          "level": "Easy",
          "company": "GOOG",
          "q": "P is the brother of Q. Q is the daughter of R. How is P related to R?",
          "options": [
            "Son",
            "Mother",
            "Brother",
            "Uncle"
          ],
          "answer": "Son",
          "explain": "If Q is R's daughter and P is Q's brother, then P is R's son."
        },
        {
          "id": "blo_49",
          "topic": "Blood Relations",
          "level": "Medium",
          "company": "GOOG",
          "q": "X is the sister of Y. Y is the son of Z. How is X related to Z?",
          "options": [
            "Daughter",
            "Mother",
            "Brother",
            "Uncle"
          ],
          "answer": "Daughter",
          "explain": "If Y is son of Z and X is Y's sister, then X is Z's daughter."
        }
      ]
    },
    {
      "id": "mock_2",
      "title": "Placement Mock Test 2",
      "desc": "30-minute mixed mock covering aptitude, logic, and technical basics. Difficulty blend tuned for fresher interviews.",
      "durationMinutes": 30,
      "questions": [
        {
          "id": "per_12",
          "topic": "Percentages",
          "level": "Hard",
          "company": "AMD",
          "q": "What is 15% of 230?",
          "options": [
            "29",
            "34",
            "39",
            "44"
          ],
          "answer": "34",
          "explain": "Convert 15% to 15/100 and multiply: 230 × 15/100 = 34."
        },
        {
          "id": "per_19",
          "topic": "Percentages",
          "level": "Easy",
          "company": "AMD",
          "q": "What is 25% of 300?",
          "options": [
            "70",
            "75",
            "80",
            "85"
          ],
          "answer": "75",
          "explain": "Convert 25% to 25/100 and multiply: 300 × 25/100 = 75."
        },
        {
          "id": "pro_26",
          "topic": "Profit and Loss",
          "level": "Easy",
          "company": "TCS",
          "q": "An article has cost price ₹140. It is sold at a profit of 10%. What is the selling price?",
          "options": [
            "154",
            "162",
            "146",
            "166"
          ],
          "answer": "154",
          "explain": "Selling price = CP × (100 + profit%)/100 = 140 × 110/100 = ₹154."
        },
        {
          "id": "pro_33",
          "topic": "Profit and Loss",
          "level": "Medium",
          "company": "TCS",
          "q": "An article has cost price ₹224. It is sold at a profit of 20%. What is the selling price?",
          "options": [
            "269",
            "277",
            "261",
            "281"
          ],
          "answer": "269",
          "explain": "Selling price = CP × (100 + profit%)/100 = 224 × 120/100 = ₹269."
        },
        {
          "id": "pro_40",
          "topic": "Profit and Loss",
          "level": "Hard",
          "company": "TCS",
          "q": "An article has cost price ₹308. It is sold at a profit of 12%. What is the selling price?",
          "options": [
            "345",
            "353",
            "337",
            "357"
          ],
          "answer": "345",
          "explain": "Selling price = CP × (100 + profit%)/100 = 308 × 112/100 = ₹345."
        },
        {
          "id": "ave_47",
          "topic": "Averages",
          "level": "Hard",
          "company": "MSFT",
          "q": "Find the average of 16, 20, 24, and 28.",
          "options": [
            "22",
            "23",
            "24",
            "21"
          ],
          "answer": "22",
          "explain": "Average = sum of observations / number of observations = 88/4 = 22."
        },
        {
          "id": "ave_54",
          "topic": "Averages",
          "level": "Easy",
          "company": "MSFT",
          "q": "Find the average of 23, 27, 31, and 35.",
          "options": [
            "29",
            "30",
            "31",
            "28"
          ],
          "answer": "29",
          "explain": "Average = sum of observations / number of observations = 116/4 = 29."
        },
        {
          "id": "rat_61",
          "topic": "Ratio and Proportion",
          "level": "Easy",
          "company": "Infosys",
          "q": "The ratio of boys to girls is 2:5. If the total number of students is 28, how many boys are there?",
          "options": [
            "8",
            "15",
            "1",
            "10"
          ],
          "answer": "8",
          "explain": "Total parts = 7. One part = 28/(7) = 4. Boys = 2 × 4 = 8."
        },
        {
          "id": "rat_68",
          "topic": "Ratio and Proportion",
          "level": "Medium",
          "company": "Infosys",
          "q": "The ratio of boys to girls is 4:7. If the total number of students is 77, how many boys are there?",
          "options": [
            "28",
            "39",
            "17",
            "32"
          ],
          "answer": "28",
          "explain": "Total parts = 11. One part = 77/(11) = 7. Boys = 4 × 7 = 28."
        },
        {
          "id": "rat_75",
          "topic": "Ratio and Proportion",
          "level": "Hard",
          "company": "Infosys",
          "q": "The ratio of boys to girls is 6:4. If the total number of students is 60, how many boys are there?",
          "options": [
            "36",
            "46",
            "26",
            "42"
          ],
          "answer": "36",
          "explain": "Total parts = 10. One part = 60/(10) = 6. Boys = 6 × 6 = 36."
        },
        {
          "id": "tim_82",
          "topic": "Time and Work",
          "level": "Hard",
          "company": "AMD",
          "q": "If A alone can complete a piece of work in 5 days, what fraction of the work does A complete in one day?",
          "options": [
            "1/5",
            "1/4",
            "1/6",
            "1/7"
          ],
          "answer": "1/5",
          "explain": "If total work is 1, daily work = 1/5. So A completes 1/5 of the work per day."
        },
        {
          "id": "tim_89",
          "topic": "Time and Work",
          "level": "Easy",
          "company": "AMD",
          "q": "If A alone can complete a piece of work in 4 days, what fraction of the work does A complete in one day?",
          "options": [
            "1/4",
            "1/3",
            "1/5",
            "1/6"
          ],
          "answer": "1/4",
          "explain": "If total work is 1, daily work = 1/4. So A completes 1/4 of the work per day."
        },
        {
          "id": "tim_96",
          "topic": "Time and Work",
          "level": "Medium",
          "company": "AMD",
          "q": "If A alone can complete a piece of work in 11 days, what fraction of the work does A complete in one day?",
          "options": [
            "1/11",
            "1/10",
            "1/12",
            "1/13"
          ],
          "answer": "1/11",
          "explain": "If total work is 1, daily work = 1/11. So A completes 1/11 of the work per day."
        },
        {
          "id": "tim_103",
          "topic": "Time, Speed and Distance",
          "level": "Medium",
          "company": "TCS",
          "q": "A car travels 120 km in 5 hours. What is its speed?",
          "options": [
            "24",
            "29",
            "19",
            "34"
          ],
          "answer": "24",
          "explain": "Speed = distance/time = 120/5 = 24 km/h."
        },
        {
          "id": "tim_110",
          "topic": "Time, Speed and Distance",
          "level": "Hard",
          "company": "TCS",
          "q": "A car travels 225 km in 7 hours. What is its speed?",
          "options": [
            "32",
            "37",
            "27",
            "42"
          ],
          "answer": "32",
          "explain": "Speed = distance/time = 225/7 = 32 km/h."
        },
        {
          "id": "tim_117",
          "topic": "Time, Speed and Distance",
          "level": "Easy",
          "company": "TCS",
          "q": "A car travels 330 km in 4 hours. What is its speed?",
          "options": [
            "82",
            "87",
            "77",
            "92"
          ],
          "answer": "82",
          "explain": "Speed = distance/time = 330/4 = 82 km/h."
        },
        {
          "id": "num_4",
          "topic": "Number Series",
          "level": "Easy",
          "company": "MSFT",
          "q": "Find the next number in the series: 4, 9, 14, 19, 24, ?",
          "options": [
            "29",
            "31",
            "27",
            "33"
          ],
          "answer": "29",
          "explain": "Difference is 5 each time, so next term is 29."
        },
        {
          "id": "num_11",
          "topic": "Number Series",
          "level": "Medium",
          "company": "MSFT",
          "q": "Find the next number in the series: 2, 4, 8, 16, 32, ?",
          "options": [
            "64",
            "66",
            "62",
            "68"
          ],
          "answer": "64",
          "explain": "Each term doubles. 32 × 2 = 64."
        },
        {
          "id": "num_18",
          "topic": "Number Series",
          "level": "Hard",
          "company": "MSFT",
          "q": "Find the next number in the series: 25, 36, 49, 64, ?",
          "options": [
            "81",
            "83",
            "79",
            "85"
          ],
          "answer": "81",
          "explain": "These are consecutive squares: [25, 36, 49, 64]. The next square is 9² = 81."
        },
        {
          "id": "cod_25",
          "topic": "Coding-Decoding",
          "level": "Hard",
          "company": "General",
          "q": "If each letter in 'MIND' is shifted one step forward in the alphabet, how will it be written?",
          "options": [
            "NJOE",
            "DNIM",
            "OKPF",
            "MIND"
          ],
          "answer": "NJOE",
          "explain": "Shift every letter by +1: MIND → NJOE."
        },
        {
          "id": "cod_32",
          "topic": "Coding-Decoding",
          "level": "Easy",
          "company": "General",
          "q": "In a certain code, the word 'DATA' is written in reverse order. What is its code?",
          "options": [
            "ATAD",
            "AADT",
            "DATA",
            "EBUB"
          ],
          "answer": "ATAD",
          "explain": "Reverse the order of letters in DATA; the coded form is ATAD."
        },
        {
          "id": "cod_39",
          "topic": "Coding-Decoding",
          "level": "Medium",
          "company": "General",
          "q": "If each letter in 'GRAPH' is shifted one step forward in the alphabet, how will it be written?",
          "options": [
            "HSBQI",
            "HPARG",
            "ITCRJ",
            "GRAPH"
          ],
          "answer": "HSBQI",
          "explain": "Shift every letter by +1: GRAPH → HSBQI."
        },
        {
          "id": "blo_46",
          "topic": "Blood Relations",
          "level": "Medium",
          "company": "General",
          "q": "A is the mother of B. B is the sister of C. What is A to C?",
          "options": [
            "Mother",
            "Son",
            "Father",
            "Daughter"
          ],
          "answer": "Mother",
          "explain": "If A is mother of B and B is sister of C, then A is also C's mother."
        },
        {
          "id": "blo_53",
          "topic": "Blood Relations",
          "level": "Hard",
          "company": "General",
          "q": "M is the father of N. N is the wife of O. How is M related to O?",
          "options": [
            "Father-in-law",
            "Mother",
            "Brother",
            "Uncle"
          ],
          "answer": "Father-in-law",
          "explain": "M is father of N, and N is wife of O, so M is O's father-in-law."
        },
        {
          "id": "dir_60",
          "topic": "Direction Sense",
          "level": "Medium",
          "company": "TCS",
          "q": "Priya walks 8 km south, then 2 km east. In which direction is she from the starting point?",
          "options": [
            "South-East",
            "North-West",
            "South-West",
            "North-East"
          ],
          "answer": "South-East",
          "explain": "South plus east gives South-East."
        }
      ]
    },
    {
      "id": "mock_3",
      "title": "Placement Mock Test 3",
      "desc": "30-minute mixed mock covering aptitude, logic, and technical basics. Difficulty blend tuned for fresher interviews.",
      "durationMinutes": 30,
      "questions": [
        {
          "id": "pro_23",
          "topic": "Profit and Loss",
          "level": "Easy",
          "company": "AMD",
          "q": "An article has cost price ₹104. It is sold at a profit of 20%. What is the selling price?",
          "options": [
            "125",
            "133",
            "117",
            "137"
          ],
          "answer": "125",
          "explain": "Selling price = CP × (100 + profit%)/100 = 104 × 120/100 = ₹125."
        },
        {
          "id": "pro_30",
          "topic": "Profit and Loss",
          "level": "Medium",
          "company": "AMD",
          "q": "An article has cost price ₹188. It is sold at a profit of 12%. What is the selling price?",
          "options": [
            "211",
            "219",
            "203",
            "223"
          ],
          "answer": "211",
          "explain": "Selling price = CP × (100 + profit%)/100 = 188 × 112/100 = ₹211."
        },
        {
          "id": "pro_37",
          "topic": "Profit and Loss",
          "level": "Hard",
          "company": "AMD",
          "q": "An article has cost price ₹272. It is sold at a profit of 15%. What is the selling price?",
          "options": [
            "313",
            "321",
            "305",
            "325"
          ],
          "answer": "313",
          "explain": "Selling price = CP × (100 + profit%)/100 = 272 × 115/100 = ₹313."
        },
        {
          "id": "ave_44",
          "topic": "Averages",
          "level": "Hard",
          "company": "TCS",
          "q": "Find the average of 13, 17, 21, and 25.",
          "options": [
            "19",
            "20",
            "21",
            "18"
          ],
          "answer": "19",
          "explain": "Average = sum of observations / number of observations = 76/4 = 19."
        },
        {
          "id": "ave_51",
          "topic": "Averages",
          "level": "Easy",
          "company": "TCS",
          "q": "Find the average of 20, 24, 28, and 32.",
          "options": [
            "26",
            "27",
            "28",
            "25"
          ],
          "answer": "26",
          "explain": "Average = sum of observations / number of observations = 104/4 = 26."
        },
        {
          "id": "ave_58",
          "topic": "Averages",
          "level": "Medium",
          "company": "TCS",
          "q": "Find the average of 27, 31, 35, and 39.",
          "options": [
            "33",
            "34",
            "35",
            "32"
          ],
          "answer": "33",
          "explain": "Average = sum of observations / number of observations = 132/4 = 33."
        },
        {
          "id": "rat_65",
          "topic": "Ratio and Proportion",
          "level": "Medium",
          "company": "NVIDIA",
          "q": "The ratio of boys to girls is 6:4. If the total number of students is 40, how many boys are there?",
          "options": [
            "24",
            "34",
            "14",
            "28"
          ],
          "answer": "24",
          "explain": "Total parts = 10. One part = 40/(10) = 4. Boys = 6 × 4 = 24."
        },
        {
          "id": "rat_72",
          "topic": "Ratio and Proportion",
          "level": "Hard",
          "company": "NVIDIA",
          "q": "The ratio of boys to girls is 3:6. If the total number of students is 63, how many boys are there?",
          "options": [
            "21",
            "30",
            "12",
            "27"
          ],
          "answer": "21",
          "explain": "Total parts = 9. One part = 63/(9) = 7. Boys = 3 × 7 = 21."
        },
        {
          "id": "rat_79",
          "topic": "Ratio and Proportion",
          "level": "Easy",
          "company": "NVIDIA",
          "q": "The ratio of boys to girls is 5:3. If the total number of students is 48, how many boys are there?",
          "options": [
            "30",
            "38",
            "22",
            "32"
          ],
          "answer": "30",
          "explain": "Total parts = 8. One part = 48/(8) = 6. Boys = 5 × 6 = 30."
        },
        {
          "id": "tim_86",
          "topic": "Time and Work",
          "level": "Easy",
          "company": "Infosys",
          "q": "If A alone can complete a piece of work in 9 days, what fraction of the work does A complete in one day?",
          "options": [
            "1/9",
            "1/8",
            "1/10",
            "1/11"
          ],
          "answer": "1/9",
          "explain": "If total work is 1, daily work = 1/9. So A completes 1/9 of the work per day."
        },
        {
          "id": "tim_93",
          "topic": "Time and Work",
          "level": "Medium",
          "company": "Infosys",
          "q": "If A alone can complete a piece of work in 8 days, what fraction of the work does A complete in one day?",
          "options": [
            "1/8",
            "1/7",
            "1/9",
            "1/10"
          ],
          "answer": "1/8",
          "explain": "If total work is 1, daily work = 1/8. So A completes 1/8 of the work per day."
        },
        {
          "id": "tim_100",
          "topic": "Time and Work",
          "level": "Hard",
          "company": "Infosys",
          "q": "If A alone can complete a piece of work in 7 days, what fraction of the work does A complete in one day?",
          "options": [
            "1/7",
            "1/6",
            "1/8",
            "1/9"
          ],
          "answer": "1/7",
          "explain": "If total work is 1, daily work = 1/7. So A completes 1/7 of the work per day."
        },
        {
          "id": "tim_107",
          "topic": "Time, Speed and Distance",
          "level": "Hard",
          "company": "AMD",
          "q": "A car travels 180 km in 4 hours. What is its speed?",
          "options": [
            "45",
            "50",
            "40",
            "55"
          ],
          "answer": "45",
          "explain": "Speed = distance/time = 180/4 = 45 km/h."
        },
        {
          "id": "tim_114",
          "topic": "Time, Speed and Distance",
          "level": "Easy",
          "company": "AMD",
          "q": "A car travels 285 km in 6 hours. What is its speed?",
          "options": [
            "47",
            "52",
            "42",
            "57"
          ],
          "answer": "47",
          "explain": "Speed = distance/time = 285/6 = 47 km/h."
        },
        {
          "id": "num_1",
          "topic": "Number Series",
          "level": "Easy",
          "company": "TCS",
          "q": "Find the next number in the series: 2, 5, 8, 11, 14, ?",
          "options": [
            "17",
            "19",
            "15",
            "21"
          ],
          "answer": "17",
          "explain": "Each term increases by 3, so the next term after 14 is 17."
        },
        {
          "id": "num_8",
          "topic": "Number Series",
          "level": "Medium",
          "company": "TCS",
          "q": "Find the next number in the series: 5, 10, 15, 20, 25, ?",
          "options": [
            "30",
            "32",
            "28",
            "34"
          ],
          "answer": "30",
          "explain": "Difference is 5 each time, so next term is 30."
        },
        {
          "id": "num_15",
          "topic": "Number Series",
          "level": "Hard",
          "company": "TCS",
          "q": "Find the next number in the series: 2, 4, 8, 16, 32, ?",
          "options": [
            "64",
            "66",
            "62",
            "68"
          ],
          "answer": "64",
          "explain": "Each term doubles. 32 × 2 = 64."
        },
        {
          "id": "cod_22",
          "topic": "Coding-Decoding",
          "level": "Hard",
          "company": "MSFT",
          "q": "In a certain code, the word 'DATA' is written in reverse order. What is its code?",
          "options": [
            "ATAD",
            "AADT",
            "DATA",
            "EBUB"
          ],
          "answer": "ATAD",
          "explain": "Reverse the order of letters in DATA; the coded form is ATAD."
        },
        {
          "id": "cod_29",
          "topic": "Coding-Decoding",
          "level": "Easy",
          "company": "MSFT",
          "q": "If each letter in 'GRAPH' is shifted one step forward in the alphabet, how will it be written?",
          "options": [
            "HSBQI",
            "HPARG",
            "ITCRJ",
            "GRAPH"
          ],
          "answer": "HSBQI",
          "explain": "Shift every letter by +1: GRAPH → HSBQI."
        },
        {
          "id": "cod_36",
          "topic": "Coding-Decoding",
          "level": "Medium",
          "company": "MSFT",
          "q": "In a certain code, the word 'STACK' is written in reverse order. What is its code?",
          "options": [
            "KCATS",
            "ACKST",
            "STACK",
            "TUBDL"
          ],
          "answer": "KCATS",
          "explain": "Reverse the order of letters in STACK; the coded form is KCATS."
        },
        {
          "id": "blo_43",
          "topic": "Blood Relations",
          "level": "Medium",
          "company": "MSFT",
          "q": "M is the father of N. N is the wife of O. How is M related to O?",
          "options": [
            "Father-in-law",
            "Mother",
            "Brother",
            "Uncle"
          ],
          "answer": "Father-in-law",
          "explain": "M is father of N, and N is wife of O, so M is O's father-in-law."
        },
        {
          "id": "blo_50",
          "topic": "Blood Relations",
          "level": "Hard",
          "company": "MSFT",
          "q": "T is the husband of U. U is the mother of V. How is T related to V?",
          "options": [
            "Father",
            "Mother",
            "Brother",
            "Uncle"
          ],
          "answer": "Father",
          "explain": "If U is mother of V and T is U's husband, T is V's father."
        },
        {
          "id": "dir_57",
          "topic": "Direction Sense",
          "level": "Medium",
          "company": "AMD",
          "q": "Ravi walks 4 km south and then 4 km west. In which direction is he from the starting point?",
          "options": [
            "South-West",
            "North-West",
            "South-West",
            "North-East"
          ],
          "answer": "South-West",
          "explain": "The final point is below and left of the start, so it is South-West."
        },
        {
          "id": "dir_64",
          "topic": "Direction Sense",
          "level": "Hard",
          "company": "AMD",
          "q": "Aman walks 3 km west and then 7 km north. In which direction is he from the start?",
          "options": [
            "North-West",
            "North-West",
            "South-West",
            "North-East"
          ],
          "answer": "North-West",
          "explain": "West plus north gives North-West."
        },
        {
          "id": "syl_71",
          "topic": "Syllogisms",
          "level": "Medium",
          "company": "AMD",
          "q": "Statements: All coders are problem solvers. Some students are coders. Which conclusion follows?",
          "options": [
            "Some students are problem solvers",
            "All students are coders",
            "Some bugs are features",
            "None follows"
          ],
          "answer": "Some students are problem solvers",
          "explain": "If some students are coders and all coders are problem solvers, those students are problem solvers."
        }
      ]
    },
    {
      "id": "mock_4",
      "title": "Placement Mock Test 4",
      "desc": "30-minute mixed mock covering aptitude, logic, and technical basics. Difficulty blend tuned for fresher interviews.",
      "durationMinutes": 30,
      "questions": [
        {
          "id": "pro_34",
          "topic": "Profit and Loss",
          "level": "Hard",
          "company": "Infosys",
          "q": "An article has cost price ₹236. It is sold at a profit of 25%. What is the selling price?",
          "options": [
            "295",
            "303",
            "287",
            "307"
          ],
          "answer": "295",
          "explain": "Selling price = CP × (100 + profit%)/100 = 236 × 125/100 = ₹295."
        },
        {
          "id": "ave_41",
          "topic": "Averages",
          "level": "Hard",
          "company": "AMD",
          "q": "Find the average of 10, 14, 18, and 22.",
          "options": [
            "16",
            "17",
            "18",
            "15"
          ],
          "answer": "16",
          "explain": "Average = sum of observations / number of observations = 64/4 = 16."
        },
        {
          "id": "ave_48",
          "topic": "Averages",
          "level": "Easy",
          "company": "AMD",
          "q": "Find the average of 17, 21, 25, and 29.",
          "options": [
            "23",
            "24",
            "25",
            "22"
          ],
          "answer": "23",
          "explain": "Average = sum of observations / number of observations = 92/4 = 23."
        },
        {
          "id": "ave_55",
          "topic": "Averages",
          "level": "Medium",
          "company": "AMD",
          "q": "Find the average of 24, 28, 32, and 36.",
          "options": [
            "30",
            "31",
            "32",
            "29"
          ],
          "answer": "30",
          "explain": "Average = sum of observations / number of observations = 120/4 = 30."
        },
        {
          "id": "rat_62",
          "topic": "Ratio and Proportion",
          "level": "Medium",
          "company": "GOOG",
          "q": "The ratio of boys to girls is 3:6. If the total number of students is 45, how many boys are there?",
          "options": [
            "15",
            "24",
            "6",
            "19"
          ],
          "answer": "15",
          "explain": "Total parts = 9. One part = 45/(9) = 5. Boys = 3 × 5 = 15."
        },
        {
          "id": "rat_69",
          "topic": "Ratio and Proportion",
          "level": "Hard",
          "company": "GOOG",
          "q": "The ratio of boys to girls is 5:3. If the total number of students is 32, how many boys are there?",
          "options": [
            "20",
            "28",
            "12",
            "26"
          ],
          "answer": "20",
          "explain": "Total parts = 8. One part = 32/(8) = 4. Boys = 5 × 4 = 20."
        },
        {
          "id": "rat_76",
          "topic": "Ratio and Proportion",
          "level": "Easy",
          "company": "GOOG",
          "q": "The ratio of boys to girls is 2:5. If the total number of students is 49, how many boys are there?",
          "options": [
            "14",
            "21",
            "7",
            "16"
          ],
          "answer": "14",
          "explain": "Total parts = 7. One part = 49/(7) = 7. Boys = 2 × 7 = 14."
        },
        {
          "id": "tim_83",
          "topic": "Time and Work",
          "level": "Easy",
          "company": "NVIDIA",
          "q": "If A alone can complete a piece of work in 6 days, what fraction of the work does A complete in one day?",
          "options": [
            "1/6",
            "1/5",
            "1/7",
            "1/8"
          ],
          "answer": "1/6",
          "explain": "If total work is 1, daily work = 1/6. So A completes 1/6 of the work per day."
        },
        {
          "id": "tim_90",
          "topic": "Time and Work",
          "level": "Medium",
          "company": "NVIDIA",
          "q": "If A alone can complete a piece of work in 5 days, what fraction of the work does A complete in one day?",
          "options": [
            "1/5",
            "1/4",
            "1/6",
            "1/7"
          ],
          "answer": "1/5",
          "explain": "If total work is 1, daily work = 1/5. So A completes 1/5 of the work per day."
        },
        {
          "id": "tim_97",
          "topic": "Time and Work",
          "level": "Hard",
          "company": "NVIDIA",
          "q": "If A alone can complete a piece of work in 4 days, what fraction of the work does A complete in one day?",
          "options": [
            "1/4",
            "1/3",
            "1/5",
            "1/6"
          ],
          "answer": "1/4",
          "explain": "If total work is 1, daily work = 1/4. So A completes 1/4 of the work per day."
        },
        {
          "id": "tim_104",
          "topic": "Time, Speed and Distance",
          "level": "Hard",
          "company": "Infosys",
          "q": "A car travels 135 km in 6 hours. What is its speed?",
          "options": [
            "22",
            "27",
            "17",
            "32"
          ],
          "answer": "22",
          "explain": "Speed = distance/time = 135/6 = 22 km/h."
        },
        {
          "id": "tim_111",
          "topic": "Time, Speed and Distance",
          "level": "Easy",
          "company": "Infosys",
          "q": "A car travels 240 km in 3 hours. What is its speed?",
          "options": [
            "80",
            "85",
            "75",
            "90"
          ],
          "answer": "80",
          "explain": "Speed = distance/time = 240/3 = 80 km/h."
        },
        {
          "id": "tim_118",
          "topic": "Time, Speed and Distance",
          "level": "Medium",
          "company": "Infosys",
          "q": "A car travels 345 km in 5 hours. What is its speed?",
          "options": [
            "69",
            "74",
            "64",
            "79"
          ],
          "answer": "69",
          "explain": "Speed = distance/time = 345/5 = 69 km/h."
        },
        {
          "id": "num_5",
          "topic": "Number Series",
          "level": "Medium",
          "company": "AMD",
          "q": "Find the next number in the series: 2, 5, 8, 11, 14, ?",
          "options": [
            "17",
            "19",
            "15",
            "21"
          ],
          "answer": "17",
          "explain": "Each term increases by 3, so the next term after 14 is 17."
        },
        {
          "id": "num_12",
          "topic": "Number Series",
          "level": "Hard",
          "company": "AMD",
          "q": "Find the next number in the series: 6, 11, 16, 21, 26, ?",
          "options": [
            "31",
            "33",
            "29",
            "35"
          ],
          "answer": "31",
          "explain": "Difference is 5 each time, so next term is 31."
        },
        {
          "id": "num_19",
          "topic": "Number Series",
          "level": "Easy",
          "company": "AMD",
          "q": "Find the next number in the series: 2, 4, 8, 16, 32, ?",
          "options": [
            "64",
            "66",
            "62",
            "68"
          ],
          "answer": "64",
          "explain": "Each term doubles. 32 × 2 = 64."
        },
        {
          "id": "cod_26",
          "topic": "Coding-Decoding",
          "level": "Easy",
          "company": "TCS",
          "q": "In a certain code, the word 'STACK' is written in reverse order. What is its code?",
          "options": [
            "KCATS",
            "ACKST",
            "STACK",
            "TUBDL"
          ],
          "answer": "KCATS",
          "explain": "Reverse the order of letters in STACK; the coded form is KCATS."
        },
        {
          "id": "cod_33",
          "topic": "Coding-Decoding",
          "level": "Medium",
          "company": "TCS",
          "q": "If each letter in 'LOGIC' is shifted one step forward in the alphabet, how will it be written?",
          "options": [
            "MPHJD",
            "CIGOL",
            "NQIKE",
            "LOGIC"
          ],
          "answer": "MPHJD",
          "explain": "Shift every letter by +1: LOGIC → MPHJD."
        },
        {
          "id": "cod_40",
          "topic": "Coding-Decoding",
          "level": "Hard",
          "company": "TCS",
          "q": "In a certain code, the word 'DEBUG' is written in reverse order. What is its code?",
          "options": [
            "GUBED",
            "BDEGU",
            "DEBUG",
            "EFCVH"
          ],
          "answer": "GUBED",
          "explain": "Reverse the order of letters in DEBUG; the coded form is GUBED."
        },
        {
          "id": "blo_47",
          "topic": "Blood Relations",
          "level": "Hard",
          "company": "TCS",
          "q": "P is the brother of Q. Q is the daughter of R. How is P related to R?",
          "options": [
            "Son",
            "Mother",
            "Brother",
            "Uncle"
          ],
          "answer": "Son",
          "explain": "If Q is R's daughter and P is Q's brother, then P is R's son."
        },
        {
          "id": "blo_54",
          "topic": "Blood Relations",
          "level": "Easy",
          "company": "TCS",
          "q": "X is the sister of Y. Y is the son of Z. How is X related to Z?",
          "options": [
            "Daughter",
            "Mother",
            "Brother",
            "Uncle"
          ],
          "answer": "Daughter",
          "explain": "If Y is son of Z and X is Y's sister, then X is Z's daughter."
        },
        {
          "id": "dir_61",
          "topic": "Direction Sense",
          "level": "Hard",
          "company": "Infosys",
          "q": "A person walks 5 km north, then 3 km east. In which direction is the person from the starting point?",
          "options": [
            "North-East",
            "North-West",
            "South-West",
            "North-East"
          ],
          "answer": "North-East",
          "explain": "From the starting point, the final position has a north component and an east component, so it is North-East."
        },
        {
          "id": "dir_68",
          "topic": "Direction Sense",
          "level": "Easy",
          "company": "Infosys",
          "q": "Anita walks 6 km east, then 2 km north. In which direction is she from the starting point?",
          "options": [
            "North-East",
            "North-West",
            "South-West",
            "North-East"
          ],
          "answer": "North-East",
          "explain": "East plus north gives a North-East position."
        },
        {
          "id": "syl_75",
          "topic": "Syllogisms",
          "level": "Hard",
          "company": "Infosys",
          "q": "Statements: No bugs are features. Some features are requested. Which conclusion follows?",
          "options": [
            "Some requested items are not bugs",
            "All students are coders",
            "Some bugs are features",
            "None follows"
          ],
          "answer": "Some requested items are not bugs",
          "explain": "Requested features are features, and no feature is a bug."
        },
        {
          "id": "sea_82",
          "topic": "Seating Arrangement",
          "level": "Easy",
          "company": "General",
          "q": "In a row of five seats, R is to the immediate left of S. Which statement is true?",
          "options": [
            "S is to the immediate right of R",
            "A",
            "Position 5",
            "No one"
          ],
          "answer": "S is to the immediate right of R",
          "explain": "Immediate left/right relations are exact opposites."
        }
      ]
    },
    {
      "id": "mock_5",
      "title": "Placement Mock Test 5",
      "desc": "30-minute mixed mock covering aptitude, logic, and technical basics. Difficulty blend tuned for fresher interviews.",
      "durationMinutes": 30,
      "questions": [
        {
          "id": "ave_45",
          "topic": "Averages",
          "level": "Easy",
          "company": "Infosys",
          "q": "Find the average of 14, 18, 22, and 26.",
          "options": [
            "20",
            "21",
            "22",
            "19"
          ],
          "answer": "20",
          "explain": "Average = sum of observations / number of observations = 80/4 = 20."
        },
        {
          "id": "ave_52",
          "topic": "Averages",
          "level": "Medium",
          "company": "Infosys",
          "q": "Find the average of 21, 25, 29, and 33.",
          "options": [
            "27",
            "28",
            "29",
            "26"
          ],
          "answer": "27",
          "explain": "Average = sum of observations / number of observations = 108/4 = 27."
        },
        {
          "id": "ave_59",
          "topic": "Averages",
          "level": "Hard",
          "company": "Infosys",
          "q": "Find the average of 28, 32, 36, and 40.",
          "options": [
            "34",
            "35",
            "36",
            "33"
          ],
          "answer": "34",
          "explain": "Average = sum of observations / number of observations = 136/4 = 34."
        },
        {
          "id": "rat_66",
          "topic": "Ratio and Proportion",
          "level": "Hard",
          "company": "General",
          "q": "The ratio of boys to girls is 2:5. If the total number of students is 35, how many boys are there?",
          "options": [
            "10",
            "17",
            "3",
            "16"
          ],
          "answer": "10",
          "explain": "Total parts = 7. One part = 35/(7) = 5. Boys = 2 × 5 = 10."
        },
        {
          "id": "rat_73",
          "topic": "Ratio and Proportion",
          "level": "Easy",
          "company": "General",
          "q": "The ratio of boys to girls is 4:7. If the total number of students is 44, how many boys are there?",
          "options": [
            "16",
            "27",
            "5",
            "18"
          ],
          "answer": "16",
          "explain": "Total parts = 11. One part = 44/(11) = 4. Boys = 4 × 4 = 16."
        },
        {
          "id": "rat_80",
          "topic": "Ratio and Proportion",
          "level": "Medium",
          "company": "General",
          "q": "The ratio of boys to girls is 6:4. If the total number of students is 70, how many boys are there?",
          "options": [
            "42",
            "52",
            "32",
            "46"
          ],
          "answer": "42",
          "explain": "Total parts = 10. One part = 70/(10) = 7. Boys = 6 × 7 = 42."
        },
        {
          "id": "tim_87",
          "topic": "Time and Work",
          "level": "Medium",
          "company": "GOOG",
          "q": "If A alone can complete a piece of work in 10 days, what fraction of the work does A complete in one day?",
          "options": [
            "1/10",
            "1/9",
            "1/11",
            "1/12"
          ],
          "answer": "1/10",
          "explain": "If total work is 1, daily work = 1/10. So A completes 1/10 of the work per day."
        },
        {
          "id": "tim_94",
          "topic": "Time and Work",
          "level": "Hard",
          "company": "GOOG",
          "q": "If A alone can complete a piece of work in 9 days, what fraction of the work does A complete in one day?",
          "options": [
            "1/9",
            "1/8",
            "1/10",
            "1/11"
          ],
          "answer": "1/9",
          "explain": "If total work is 1, daily work = 1/9. So A completes 1/9 of the work per day."
        },
        {
          "id": "tim_101",
          "topic": "Time, Speed and Distance",
          "level": "Hard",
          "company": "NVIDIA",
          "q": "A car travels 90 km in 3 hours. What is its speed?",
          "options": [
            "30",
            "35",
            "25",
            "40"
          ],
          "answer": "30",
          "explain": "Speed = distance/time = 90/3 = 30 km/h."
        },
        {
          "id": "tim_108",
          "topic": "Time, Speed and Distance",
          "level": "Easy",
          "company": "NVIDIA",
          "q": "A car travels 195 km in 5 hours. What is its speed?",
          "options": [
            "39",
            "44",
            "34",
            "49"
          ],
          "answer": "39",
          "explain": "Speed = distance/time = 195/5 = 39 km/h."
        },
        {
          "id": "tim_115",
          "topic": "Time, Speed and Distance",
          "level": "Medium",
          "company": "NVIDIA",
          "q": "A car travels 300 km in 7 hours. What is its speed?",
          "options": [
            "42",
            "47",
            "37",
            "52"
          ],
          "answer": "42",
          "explain": "Speed = distance/time = 300/7 = 42 km/h."
        },
        {
          "id": "num_2",
          "topic": "Number Series",
          "level": "Medium",
          "company": "Infosys",
          "q": "Find the next number in the series: 1, 4, 9, 16, ?",
          "options": [
            "25",
            "27",
            "23",
            "29"
          ],
          "answer": "25",
          "explain": "These are consecutive squares: [1, 4, 9, 16]. The next square is 5² = 25."
        },
        {
          "id": "num_9",
          "topic": "Number Series",
          "level": "Hard",
          "company": "Infosys",
          "q": "Find the next number in the series: 2, 5, 8, 11, 14, ?",
          "options": [
            "17",
            "19",
            "15",
            "21"
          ],
          "answer": "17",
          "explain": "Each term increases by 3, so the next term after 14 is 17."
        },
        {
          "id": "num_16",
          "topic": "Number Series",
          "level": "Easy",
          "company": "Infosys",
          "q": "Find the next number in the series: 7, 12, 17, 22, 27, ?",
          "options": [
            "32",
            "34",
            "30",
            "36"
          ],
          "answer": "32",
          "explain": "Difference is 5 each time, so next term is 32."
        },
        {
          "id": "cod_23",
          "topic": "Coding-Decoding",
          "level": "Easy",
          "company": "AMD",
          "q": "If each letter in 'LOGIC' is shifted one step forward in the alphabet, how will it be written?",
          "options": [
            "MPHJD",
            "CIGOL",
            "NQIKE",
            "LOGIC"
          ],
          "answer": "MPHJD",
          "explain": "Shift every letter by +1: LOGIC → MPHJD."
        },
        {
          "id": "cod_30",
          "topic": "Coding-Decoding",
          "level": "Medium",
          "company": "AMD",
          "q": "In a certain code, the word 'DEBUG' is written in reverse order. What is its code?",
          "options": [
            "GUBED",
            "BDEGU",
            "DEBUG",
            "EFCVH"
          ],
          "answer": "GUBED",
          "explain": "Reverse the order of letters in DEBUG; the coded form is GUBED."
        },
        {
          "id": "cod_37",
          "topic": "Coding-Decoding",
          "level": "Hard",
          "company": "AMD",
          "q": "If each letter in 'QUEUE' is shifted one step forward in the alphabet, how will it be written?",
          "options": [
            "RVFVF",
            "EUEUQ",
            "SWGWG",
            "QUEUE"
          ],
          "answer": "RVFVF",
          "explain": "Shift every letter by +1: QUEUE → RVFVF."
        },
        {
          "id": "blo_44",
          "topic": "Blood Relations",
          "level": "Hard",
          "company": "AMD",
          "q": "X is the sister of Y. Y is the son of Z. How is X related to Z?",
          "options": [
            "Daughter",
            "Mother",
            "Brother",
            "Uncle"
          ],
          "answer": "Daughter",
          "explain": "If Y is son of Z and X is Y's sister, then X is Z's daughter."
        },
        {
          "id": "blo_51",
          "topic": "Blood Relations",
          "level": "Easy",
          "company": "AMD",
          "q": "A is the mother of B. B is the sister of C. What is A to C?",
          "options": [
            "Mother",
            "Son",
            "Father",
            "Daughter"
          ],
          "answer": "Mother",
          "explain": "If A is mother of B and B is sister of C, then A is also C's mother."
        },
        {
          "id": "dir_58",
          "topic": "Direction Sense",
          "level": "Hard",
          "company": "NVIDIA",
          "q": "Anita walks 6 km east, then 2 km north. In which direction is she from the starting point?",
          "options": [
            "North-East",
            "North-West",
            "South-West",
            "North-East"
          ],
          "answer": "North-East",
          "explain": "East plus north gives a North-East position."
        },
        {
          "id": "dir_65",
          "topic": "Direction Sense",
          "level": "Easy",
          "company": "NVIDIA",
          "q": "Priya walks 8 km south, then 2 km east. In which direction is she from the starting point?",
          "options": [
            "South-East",
            "North-West",
            "South-West",
            "North-East"
          ],
          "answer": "South-East",
          "explain": "South plus east gives South-East."
        },
        {
          "id": "syl_72",
          "topic": "Syllogisms",
          "level": "Hard",
          "company": "NVIDIA",
          "q": "Statements: All laptops are machines. All machines need power. Which conclusion follows?",
          "options": [
            "All laptops need power",
            "All students are coders",
            "Some bugs are features",
            "None follows"
          ],
          "answer": "All laptops need power",
          "explain": "The relation passes through both statements: laptops → machines → need power."
        },
        {
          "id": "syl_79",
          "topic": "Syllogisms",
          "level": "Easy",
          "company": "NVIDIA",
          "q": "Statements: All APIs are interfaces. Some interfaces are public. Which conclusion definitely follows?",
          "options": [
            "No definite conclusion about APIs being public",
            "All students are coders",
            "Some bugs are features",
            "None follows"
          ],
          "answer": "No definite conclusion about APIs being public",
          "explain": "We only know some interfaces are public; we do not know whether those interfaces are APIs."
        },
        {
          "id": "sea_86",
          "topic": "Seating Arrangement",
          "level": "Medium",
          "company": "MSFT",
          "q": "Five friends A, B, C, D, and E sit in a row. A sits left of B and B sits left of C. Who is definitely to the right of A?",
          "options": [
            "B",
            "A",
            "Position 5",
            "No one"
          ],
          "answer": "B",
          "explain": "Since A is left of B, B is definitely to A's right."
        },
        {
          "id": "sta_93",
          "topic": "Statement and Conclusion",
          "level": "Hard",
          "company": "Infosys",
          "q": "Statement: Some graduates know Python. Every Python learner can write scripts. Conclusion: Some graduates can write scripts.",
          "options": [
            "Conclusion follows",
            "Neither statement nor conclusion",
            "Both follow",
            "Conclusion is opposite"
          ],
          "answer": "Conclusion follows",
          "explain": "Graduates who know Python belong to the Python learner set and can write scripts."
        }
      ]
    },
    {
      "id": "mock_6",
      "title": "Placement Mock Test 6",
      "desc": "30-minute mixed mock covering aptitude, logic, and technical basics. Difficulty blend tuned for fresher interviews.",
      "durationMinutes": 30,
      "questions": [
        {
          "id": "ave_56",
          "topic": "Averages",
          "level": "Hard",
          "company": "NVIDIA",
          "q": "Find the average of 25, 29, 33, and 37.",
          "options": [
            "31",
            "32",
            "33",
            "30"
          ],
          "answer": "31",
          "explain": "Average = sum of observations / number of observations = 124/4 = 31."
        },
        {
          "id": "rat_63",
          "topic": "Ratio and Proportion",
          "level": "Hard",
          "company": "MSFT",
          "q": "The ratio of boys to girls is 4:7. If the total number of students is 66, how many boys are there?",
          "options": [
            "24",
            "35",
            "13",
            "30"
          ],
          "answer": "24",
          "explain": "Total parts = 11. One part = 66/(11) = 6. Boys = 4 × 6 = 24."
        },
        {
          "id": "rat_70",
          "topic": "Ratio and Proportion",
          "level": "Easy",
          "company": "MSFT",
          "q": "The ratio of boys to girls is 6:4. If the total number of students is 50, how many boys are there?",
          "options": [
            "30",
            "40",
            "20",
            "32"
          ],
          "answer": "30",
          "explain": "Total parts = 10. One part = 50/(10) = 5. Boys = 6 × 5 = 30."
        },
        {
          "id": "rat_77",
          "topic": "Ratio and Proportion",
          "level": "Medium",
          "company": "MSFT",
          "q": "The ratio of boys to girls is 3:6. If the total number of students is 36, how many boys are there?",
          "options": [
            "12",
            "21",
            "3",
            "16"
          ],
          "answer": "12",
          "explain": "Total parts = 9. One part = 36/(9) = 4. Boys = 3 × 4 = 12."
        },
        {
          "id": "tim_84",
          "topic": "Time and Work",
          "level": "Medium",
          "company": "General",
          "q": "If A alone can complete a piece of work in 7 days, what fraction of the work does A complete in one day?",
          "options": [
            "1/7",
            "1/6",
            "1/8",
            "1/9"
          ],
          "answer": "1/7",
          "explain": "If total work is 1, daily work = 1/7. So A completes 1/7 of the work per day."
        },
        {
          "id": "tim_91",
          "topic": "Time and Work",
          "level": "Hard",
          "company": "General",
          "q": "If A alone can complete a piece of work in 6 days, what fraction of the work does A complete in one day?",
          "options": [
            "1/6",
            "1/5",
            "1/7",
            "1/8"
          ],
          "answer": "1/6",
          "explain": "If total work is 1, daily work = 1/6. So A completes 1/6 of the work per day."
        },
        {
          "id": "tim_98",
          "topic": "Time and Work",
          "level": "Easy",
          "company": "General",
          "q": "If A alone can complete a piece of work in 5 days, what fraction of the work does A complete in one day?",
          "options": [
            "1/5",
            "1/4",
            "1/6",
            "1/7"
          ],
          "answer": "1/5",
          "explain": "If total work is 1, daily work = 1/5. So A completes 1/5 of the work per day."
        },
        {
          "id": "tim_105",
          "topic": "Time, Speed and Distance",
          "level": "Easy",
          "company": "GOOG",
          "q": "A car travels 150 km in 7 hours. What is its speed?",
          "options": [
            "21",
            "26",
            "16",
            "31"
          ],
          "answer": "21",
          "explain": "Speed = distance/time = 150/7 = 21 km/h."
        },
        {
          "id": "tim_112",
          "topic": "Time, Speed and Distance",
          "level": "Medium",
          "company": "GOOG",
          "q": "A car travels 255 km in 4 hours. What is its speed?",
          "options": [
            "63",
            "68",
            "58",
            "73"
          ],
          "answer": "63",
          "explain": "Speed = distance/time = 255/4 = 63 km/h."
        },
        {
          "id": "tim_119",
          "topic": "Time, Speed and Distance",
          "level": "Hard",
          "company": "GOOG",
          "q": "A car travels 360 km in 6 hours. What is its speed?",
          "options": [
            "60",
            "65",
            "55",
            "70"
          ],
          "answer": "60",
          "explain": "Speed = distance/time = 360/6 = 60 km/h."
        },
        {
          "id": "num_6",
          "topic": "Number Series",
          "level": "Hard",
          "company": "NVIDIA",
          "q": "Find the next number in the series: 4, 9, 16, 25, ?",
          "options": [
            "36",
            "38",
            "34",
            "40"
          ],
          "answer": "36",
          "explain": "These are consecutive squares: [4, 9, 16, 25]. The next square is 6² = 36."
        },
        {
          "id": "num_13",
          "topic": "Number Series",
          "level": "Easy",
          "company": "NVIDIA",
          "q": "Find the next number in the series: 2, 5, 8, 11, 14, ?",
          "options": [
            "17",
            "19",
            "15",
            "21"
          ],
          "answer": "17",
          "explain": "Each term increases by 3, so the next term after 14 is 17."
        },
        {
          "id": "num_20",
          "topic": "Number Series",
          "level": "Medium",
          "company": "NVIDIA",
          "q": "Find the next number in the series: 8, 13, 18, 23, 28, ?",
          "options": [
            "33",
            "35",
            "31",
            "37"
          ],
          "answer": "33",
          "explain": "Difference is 5 each time, so next term is 33."
        },
        {
          "id": "cod_27",
          "topic": "Coding-Decoding",
          "level": "Medium",
          "company": "Infosys",
          "q": "If each letter in 'QUEUE' is shifted one step forward in the alphabet, how will it be written?",
          "options": [
            "RVFVF",
            "EUEUQ",
            "SWGWG",
            "QUEUE"
          ],
          "answer": "RVFVF",
          "explain": "Shift every letter by +1: QUEUE → RVFVF."
        },
        {
          "id": "cod_34",
          "topic": "Coding-Decoding",
          "level": "Hard",
          "company": "Infosys",
          "q": "In a certain code, the word 'BRAIN' is written in reverse order. What is its code?",
          "options": [
            "NIARB",
            "ABINR",
            "BRAIN",
            "CSBJO"
          ],
          "answer": "NIARB",
          "explain": "Reverse the order of letters in BRAIN; the coded form is NIARB."
        },
        {
          "id": "blo_41",
          "topic": "Blood Relations",
          "level": "Hard",
          "company": "Infosys",
          "q": "A is the mother of B. B is the sister of C. What is A to C?",
          "options": [
            "Mother",
            "Son",
            "Father",
            "Daughter"
          ],
          "answer": "Mother",
          "explain": "If A is mother of B and B is sister of C, then A is also C's mother."
        },
        {
          "id": "blo_48",
          "topic": "Blood Relations",
          "level": "Easy",
          "company": "Infosys",
          "q": "M is the father of N. N is the wife of O. How is M related to O?",
          "options": [
            "Father-in-law",
            "Mother",
            "Brother",
            "Uncle"
          ],
          "answer": "Father-in-law",
          "explain": "M is father of N, and N is wife of O, so M is O's father-in-law."
        },
        {
          "id": "blo_55",
          "topic": "Blood Relations",
          "level": "Medium",
          "company": "Infosys",
          "q": "T is the husband of U. U is the mother of V. How is T related to V?",
          "options": [
            "Father",
            "Mother",
            "Brother",
            "Uncle"
          ],
          "answer": "Father",
          "explain": "If U is mother of V and T is U's husband, T is V's father."
        },
        {
          "id": "dir_62",
          "topic": "Direction Sense",
          "level": "Easy",
          "company": "GOOG",
          "q": "Ravi walks 4 km south and then 4 km west. In which direction is he from the starting point?",
          "options": [
            "South-West",
            "North-West",
            "South-West",
            "North-East"
          ],
          "answer": "South-West",
          "explain": "The final point is below and left of the start, so it is South-West."
        },
        {
          "id": "dir_69",
          "topic": "Direction Sense",
          "level": "Medium",
          "company": "GOOG",
          "q": "Aman walks 3 km west and then 7 km north. In which direction is he from the start?",
          "options": [
            "North-West",
            "North-West",
            "South-West",
            "North-East"
          ],
          "answer": "North-West",
          "explain": "West plus north gives North-West."
        },
        {
          "id": "syl_76",
          "topic": "Syllogisms",
          "level": "Easy",
          "company": "GOOG",
          "q": "Statements: All coders are problem solvers. Some students are coders. Which conclusion follows?",
          "options": [
            "Some students are problem solvers",
            "All students are coders",
            "Some bugs are features",
            "None follows"
          ],
          "answer": "Some students are problem solvers",
          "explain": "If some students are coders and all coders are problem solvers, those students are problem solvers."
        },
        {
          "id": "sea_83",
          "topic": "Seating Arrangement",
          "level": "Medium",
          "company": "TCS",
          "q": "P, Q, and R sit in a row. Q is between P and R. Who is in the middle?",
          "options": [
            "Q",
            "A",
            "Position 5",
            "No one"
          ],
          "answer": "Q",
          "explain": "The statement directly says Q is between P and R."
        },
        {
          "id": "sea_90",
          "topic": "Seating Arrangement",
          "level": "Hard",
          "company": "TCS",
          "q": "M is second from the left in a row of five. Which position is M in?",
          "options": [
            "Position 2",
            "A",
            "Position 5",
            "No one"
          ],
          "answer": "Position 2",
          "explain": "Counting from left, second means position 2."
        },
        {
          "id": "sta_97",
          "topic": "Statement and Conclusion",
          "level": "Easy",
          "company": "NVIDIA",
          "q": "Statement: If code is tested, defects reduce. The code was tested. Conclusion: Defects reduce.",
          "options": [
            "Conclusion follows",
            "Neither statement nor conclusion",
            "Both follow",
            "Conclusion is opposite"
          ],
          "answer": "Conclusion follows",
          "explain": "This matches the given conditional statement directly."
        },
        {
          "id": "tech_4",
          "topic": "C++",
          "level": "Easy",
          "company": "MSFT",
          "q": "Which container stores unique sorted keys?",
          "options": [
            "vector",
            "queue",
            "set",
            "stack"
          ],
          "answer": "set",
          "explain": "A set stores unique keys in sorted order."
        }
      ]
    },
    {
      "id": "mock_7",
      "title": "Placement Mock Test 7",
      "desc": "30-minute mixed mock covering aptitude, logic, and technical basics. Difficulty blend tuned for fresher interviews.",
      "durationMinutes": 30,
      "questions": [
        {
          "id": "rat_67",
          "topic": "Ratio and Proportion",
          "level": "Easy",
          "company": "TCS",
          "q": "The ratio of boys to girls is 3:6. If the total number of students is 54, how many boys are there?",
          "options": [
            "18",
            "27",
            "9",
            "20"
          ],
          "answer": "18",
          "explain": "Total parts = 9. One part = 54/(9) = 6. Boys = 3 × 6 = 18."
        },
        {
          "id": "rat_74",
          "topic": "Ratio and Proportion",
          "level": "Medium",
          "company": "TCS",
          "q": "The ratio of boys to girls is 5:3. If the total number of students is 40, how many boys are there?",
          "options": [
            "25",
            "33",
            "17",
            "29"
          ],
          "answer": "25",
          "explain": "Total parts = 8. One part = 40/(8) = 5. Boys = 5 × 5 = 25."
        },
        {
          "id": "tim_81",
          "topic": "Time and Work",
          "level": "Medium",
          "company": "MSFT",
          "q": "If A alone can complete a piece of work in 4 days, what fraction of the work does A complete in one day?",
          "options": [
            "1/4",
            "1/3",
            "1/5",
            "1/6"
          ],
          "answer": "1/4",
          "explain": "If total work is 1, daily work = 1/4. So A completes 1/4 of the work per day."
        },
        {
          "id": "tim_88",
          "topic": "Time and Work",
          "level": "Hard",
          "company": "MSFT",
          "q": "If A alone can complete a piece of work in 11 days, what fraction of the work does A complete in one day?",
          "options": [
            "1/11",
            "1/10",
            "1/12",
            "1/13"
          ],
          "answer": "1/11",
          "explain": "If total work is 1, daily work = 1/11. So A completes 1/11 of the work per day."
        },
        {
          "id": "tim_95",
          "topic": "Time and Work",
          "level": "Easy",
          "company": "MSFT",
          "q": "If A alone can complete a piece of work in 10 days, what fraction of the work does A complete in one day?",
          "options": [
            "1/10",
            "1/9",
            "1/11",
            "1/12"
          ],
          "answer": "1/10",
          "explain": "If total work is 1, daily work = 1/10. So A completes 1/10 of the work per day."
        },
        {
          "id": "tim_102",
          "topic": "Time, Speed and Distance",
          "level": "Easy",
          "company": "General",
          "q": "A car travels 105 km in 4 hours. What is its speed?",
          "options": [
            "26",
            "31",
            "21",
            "36"
          ],
          "answer": "26",
          "explain": "Speed = distance/time = 105/4 = 26 km/h."
        },
        {
          "id": "tim_109",
          "topic": "Time, Speed and Distance",
          "level": "Medium",
          "company": "General",
          "q": "A car travels 210 km in 6 hours. What is its speed?",
          "options": [
            "35",
            "40",
            "30",
            "45"
          ],
          "answer": "35",
          "explain": "Speed = distance/time = 210/6 = 35 km/h."
        },
        {
          "id": "tim_116",
          "topic": "Time, Speed and Distance",
          "level": "Hard",
          "company": "General",
          "q": "A car travels 315 km in 3 hours. What is its speed?",
          "options": [
            "105",
            "110",
            "100",
            "115"
          ],
          "answer": "105",
          "explain": "Speed = distance/time = 315/3 = 105 km/h."
        },
        {
          "id": "num_3",
          "topic": "Number Series",
          "level": "Hard",
          "company": "GOOG",
          "q": "Find the next number in the series: 2, 4, 8, 16, 32, ?",
          "options": [
            "64",
            "66",
            "62",
            "68"
          ],
          "answer": "64",
          "explain": "Each term doubles. 32 × 2 = 64."
        },
        {
          "id": "num_10",
          "topic": "Number Series",
          "level": "Easy",
          "company": "GOOG",
          "q": "Find the next number in the series: 9, 16, 25, 36, ?",
          "options": [
            "49",
            "51",
            "47",
            "53"
          ],
          "answer": "49",
          "explain": "These are consecutive squares: [9, 16, 25, 36]. The next square is 7² = 49."
        },
        {
          "id": "num_17",
          "topic": "Number Series",
          "level": "Medium",
          "company": "GOOG",
          "q": "Find the next number in the series: 2, 5, 8, 11, 14, ?",
          "options": [
            "17",
            "19",
            "15",
            "21"
          ],
          "answer": "17",
          "explain": "Each term increases by 3, so the next term after 14 is 17."
        },
        {
          "id": "cod_24",
          "topic": "Coding-Decoding",
          "level": "Medium",
          "company": "NVIDIA",
          "q": "In a certain code, the word 'BRAIN' is written in reverse order. What is its code?",
          "options": [
            "NIARB",
            "ABINR",
            "BRAIN",
            "CSBJO"
          ],
          "answer": "NIARB",
          "explain": "Reverse the order of letters in BRAIN; the coded form is NIARB."
        },
        {
          "id": "cod_31",
          "topic": "Coding-Decoding",
          "level": "Hard",
          "company": "NVIDIA",
          "q": "If each letter in 'CODE' is shifted one step forward in the alphabet, how will it be written?",
          "options": [
            "DPEF",
            "EDOC",
            "EQFG",
            "CODE"
          ],
          "answer": "DPEF",
          "explain": "Shift every letter by +1: CODE → DPEF."
        },
        {
          "id": "cod_38",
          "topic": "Coding-Decoding",
          "level": "Easy",
          "company": "NVIDIA",
          "q": "In a certain code, the word 'ARRAY' is written in reverse order. What is its code?",
          "options": [
            "YARRA",
            "AARRY",
            "ARRAY",
            "BSSBZ"
          ],
          "answer": "YARRA",
          "explain": "Reverse the order of letters in ARRAY; the coded form is YARRA."
        },
        {
          "id": "blo_45",
          "topic": "Blood Relations",
          "level": "Easy",
          "company": "NVIDIA",
          "q": "T is the husband of U. U is the mother of V. How is T related to V?",
          "options": [
            "Father",
            "Mother",
            "Brother",
            "Uncle"
          ],
          "answer": "Father",
          "explain": "If U is mother of V and T is U's husband, T is V's father."
        },
        {
          "id": "blo_52",
          "topic": "Blood Relations",
          "level": "Medium",
          "company": "NVIDIA",
          "q": "P is the brother of Q. Q is the daughter of R. How is P related to R?",
          "options": [
            "Son",
            "Mother",
            "Brother",
            "Uncle"
          ],
          "answer": "Son",
          "explain": "If Q is R's daughter and P is Q's brother, then P is R's son."
        },
        {
          "id": "dir_59",
          "topic": "Direction Sense",
          "level": "Easy",
          "company": "General",
          "q": "Aman walks 3 km west and then 7 km north. In which direction is he from the start?",
          "options": [
            "North-West",
            "North-West",
            "South-West",
            "North-East"
          ],
          "answer": "North-West",
          "explain": "West plus north gives North-West."
        },
        {
          "id": "dir_66",
          "topic": "Direction Sense",
          "level": "Medium",
          "company": "General",
          "q": "A person walks 5 km north, then 3 km east. In which direction is the person from the starting point?",
          "options": [
            "North-East",
            "North-West",
            "South-West",
            "North-East"
          ],
          "answer": "North-East",
          "explain": "From the starting point, the final position has a north component and an east component, so it is North-East."
        },
        {
          "id": "syl_73",
          "topic": "Syllogisms",
          "level": "Easy",
          "company": "General",
          "q": "Statements: Some apps are scalable. All scalable products are tested. Which conclusion follows?",
          "options": [
            "Some apps are tested",
            "All students are coders",
            "Some bugs are features",
            "None follows"
          ],
          "answer": "Some apps are tested",
          "explain": "Some apps belong to the scalable set, and all scalable products are tested."
        },
        {
          "id": "syl_80",
          "topic": "Syllogisms",
          "level": "Medium",
          "company": "General",
          "q": "Statements: No bugs are features. Some features are requested. Which conclusion follows?",
          "options": [
            "Some requested items are not bugs",
            "All students are coders",
            "Some bugs are features",
            "None follows"
          ],
          "answer": "Some requested items are not bugs",
          "explain": "Requested features are features, and no feature is a bug."
        },
        {
          "id": "sea_87",
          "topic": "Seating Arrangement",
          "level": "Hard",
          "company": "AMD",
          "q": "In a row of five seats, R is to the immediate left of S. Which statement is true?",
          "options": [
            "S is to the immediate right of R",
            "A",
            "Position 5",
            "No one"
          ],
          "answer": "S is to the immediate right of R",
          "explain": "Immediate left/right relations are exact opposites."
        },
        {
          "id": "sta_94",
          "topic": "Statement and Conclusion",
          "level": "Easy",
          "company": "GOOG",
          "q": "Statement: No late candidate is selected. Amit was selected. Conclusion: Amit was not late.",
          "options": [
            "Conclusion follows",
            "Neither statement nor conclusion",
            "Both follow",
            "Conclusion is opposite"
          ],
          "answer": "Conclusion follows",
          "explain": "Contrapositive reasoning applies: selected implies not late."
        },
        {
          "id": "tech_1",
          "topic": "C++",
          "level": "Easy",
          "company": "TCS",
          "q": "Which feature enables one interface to behave differently for different objects?",
          "options": [
            "Polymorphism",
            "Inheritance",
            "Compilation",
            "Linking"
          ],
          "answer": "Polymorphism",
          "explain": "Polymorphism lets the same interface trigger different implementations."
        },
        {
          "id": "tech_8",
          "topic": "C++",
          "level": "Medium",
          "company": "TCS",
          "q": "What happens if a base class destructor is not virtual and you delete a derived object through a base pointer?",
          "options": [
            "Always safe",
            "Only base destructor may run",
            "Compiler error",
            "Program doubles memory"
          ],
          "answer": "Only base destructor may run",
          "explain": "A virtual destructor ensures correct cleanup in inheritance hierarchies."
        },
        {
          "id": "tech_15",
          "topic": "C++",
          "level": "Hard",
          "company": "TCS",
          "q": "Which of these is a LIFO container adaptor?",
          "options": [
            "queue",
            "stack",
            "priority_queue",
            "deque"
          ],
          "answer": "stack",
          "explain": "Stack follows last-in-first-out."
        }
      ]
    },
    {
      "id": "mock_8",
      "title": "Placement Mock Test 8",
      "desc": "30-minute mixed mock covering aptitude, logic, and technical basics. Difficulty blend tuned for fresher interviews.",
      "durationMinutes": 30,
      "questions": [
        {
          "id": "rat_78",
          "topic": "Ratio and Proportion",
          "level": "Hard",
          "company": "AMD",
          "q": "The ratio of boys to girls is 4:7. If the total number of students is 55, how many boys are there?",
          "options": [
            "20",
            "31",
            "9",
            "26"
          ],
          "answer": "20",
          "explain": "Total parts = 11. One part = 55/(11) = 5. Boys = 4 × 5 = 20."
        },
        {
          "id": "tim_85",
          "topic": "Time and Work",
          "level": "Hard",
          "company": "TCS",
          "q": "If A alone can complete a piece of work in 8 days, what fraction of the work does A complete in one day?",
          "options": [
            "1/8",
            "1/7",
            "1/9",
            "1/10"
          ],
          "answer": "1/8",
          "explain": "If total work is 1, daily work = 1/8. So A completes 1/8 of the work per day."
        },
        {
          "id": "tim_92",
          "topic": "Time and Work",
          "level": "Easy",
          "company": "TCS",
          "q": "If A alone can complete a piece of work in 7 days, what fraction of the work does A complete in one day?",
          "options": [
            "1/7",
            "1/6",
            "1/8",
            "1/9"
          ],
          "answer": "1/7",
          "explain": "If total work is 1, daily work = 1/7. So A completes 1/7 of the work per day."
        },
        {
          "id": "tim_99",
          "topic": "Time and Work",
          "level": "Medium",
          "company": "TCS",
          "q": "If A alone can complete a piece of work in 6 days, what fraction of the work does A complete in one day?",
          "options": [
            "1/6",
            "1/5",
            "1/7",
            "1/8"
          ],
          "answer": "1/6",
          "explain": "If total work is 1, daily work = 1/6. So A completes 1/6 of the work per day."
        },
        {
          "id": "tim_106",
          "topic": "Time, Speed and Distance",
          "level": "Medium",
          "company": "MSFT",
          "q": "A car travels 165 km in 3 hours. What is its speed?",
          "options": [
            "55",
            "60",
            "50",
            "65"
          ],
          "answer": "55",
          "explain": "Speed = distance/time = 165/3 = 55 km/h."
        },
        {
          "id": "tim_113",
          "topic": "Time, Speed and Distance",
          "level": "Hard",
          "company": "MSFT",
          "q": "A car travels 270 km in 5 hours. What is its speed?",
          "options": [
            "54",
            "59",
            "49",
            "64"
          ],
          "answer": "54",
          "explain": "Speed = distance/time = 270/5 = 54 km/h."
        },
        {
          "id": "tim_120",
          "topic": "Time, Speed and Distance",
          "level": "Easy",
          "company": "MSFT",
          "q": "A car travels 375 km in 7 hours. What is its speed?",
          "options": [
            "53",
            "58",
            "48",
            "63"
          ],
          "answer": "53",
          "explain": "Speed = distance/time = 375/7 = 53 km/h."
        },
        {
          "id": "num_7",
          "topic": "Number Series",
          "level": "Easy",
          "company": "General",
          "q": "Find the next number in the series: 2, 4, 8, 16, 32, ?",
          "options": [
            "64",
            "66",
            "62",
            "68"
          ],
          "answer": "64",
          "explain": "Each term doubles. 32 × 2 = 64."
        },
        {
          "id": "num_14",
          "topic": "Number Series",
          "level": "Medium",
          "company": "General",
          "q": "Find the next number in the series: 16, 25, 36, 49, ?",
          "options": [
            "64",
            "66",
            "62",
            "68"
          ],
          "answer": "64",
          "explain": "These are consecutive squares: [16, 25, 36, 49]. The next square is 8² = 64."
        },
        {
          "id": "cod_21",
          "topic": "Coding-Decoding",
          "level": "Medium",
          "company": "GOOG",
          "q": "If each letter in 'CODE' is shifted one step forward in the alphabet, how will it be written?",
          "options": [
            "DPEF",
            "EDOC",
            "EQFG",
            "CODE"
          ],
          "answer": "DPEF",
          "explain": "Shift every letter by +1: CODE → DPEF."
        },
        {
          "id": "cod_28",
          "topic": "Coding-Decoding",
          "level": "Hard",
          "company": "GOOG",
          "q": "In a certain code, the word 'ARRAY' is written in reverse order. What is its code?",
          "options": [
            "YARRA",
            "AARRY",
            "ARRAY",
            "BSSBZ"
          ],
          "answer": "YARRA",
          "explain": "Reverse the order of letters in ARRAY; the coded form is YARRA."
        },
        {
          "id": "cod_35",
          "topic": "Coding-Decoding",
          "level": "Easy",
          "company": "GOOG",
          "q": "If each letter in 'MIND' is shifted one step forward in the alphabet, how will it be written?",
          "options": [
            "NJOE",
            "DNIM",
            "OKPF",
            "MIND"
          ],
          "answer": "NJOE",
          "explain": "Shift every letter by +1: MIND → NJOE."
        },
        {
          "id": "blo_42",
          "topic": "Blood Relations",
          "level": "Easy",
          "company": "GOOG",
          "q": "P is the brother of Q. Q is the daughter of R. How is P related to R?",
          "options": [
            "Son",
            "Mother",
            "Brother",
            "Uncle"
          ],
          "answer": "Son",
          "explain": "If Q is R's daughter and P is Q's brother, then P is R's son."
        },
        {
          "id": "blo_49",
          "topic": "Blood Relations",
          "level": "Medium",
          "company": "GOOG",
          "q": "X is the sister of Y. Y is the son of Z. How is X related to Z?",
          "options": [
            "Daughter",
            "Mother",
            "Brother",
            "Uncle"
          ],
          "answer": "Daughter",
          "explain": "If Y is son of Z and X is Y's sister, then X is Z's daughter."
        },
        {
          "id": "dir_56",
          "topic": "Direction Sense",
          "level": "Easy",
          "company": "MSFT",
          "q": "A person walks 5 km north, then 3 km east. In which direction is the person from the starting point?",
          "options": [
            "North-East",
            "North-West",
            "South-West",
            "North-East"
          ],
          "answer": "North-East",
          "explain": "From the starting point, the final position has a north component and an east component, so it is North-East."
        },
        {
          "id": "dir_63",
          "topic": "Direction Sense",
          "level": "Medium",
          "company": "MSFT",
          "q": "Anita walks 6 km east, then 2 km north. In which direction is she from the starting point?",
          "options": [
            "North-East",
            "North-West",
            "South-West",
            "North-East"
          ],
          "answer": "North-East",
          "explain": "East plus north gives a North-East position."
        },
        {
          "id": "dir_70",
          "topic": "Direction Sense",
          "level": "Hard",
          "company": "MSFT",
          "q": "Priya walks 8 km south, then 2 km east. In which direction is she from the starting point?",
          "options": [
            "South-East",
            "North-West",
            "South-West",
            "North-East"
          ],
          "answer": "South-East",
          "explain": "South plus east gives South-East."
        },
        {
          "id": "syl_77",
          "topic": "Syllogisms",
          "level": "Medium",
          "company": "MSFT",
          "q": "Statements: All laptops are machines. All machines need power. Which conclusion follows?",
          "options": [
            "All laptops need power",
            "All students are coders",
            "Some bugs are features",
            "None follows"
          ],
          "answer": "All laptops need power",
          "explain": "The relation passes through both statements: laptops → machines → need power."
        },
        {
          "id": "sea_84",
          "topic": "Seating Arrangement",
          "level": "Hard",
          "company": "Infosys",
          "q": "L sits at one end of a row. Which statement must be true?",
          "options": [
            "L has only one adjacent seat",
            "A",
            "Position 5",
            "No one"
          ],
          "answer": "L has only one adjacent seat",
          "explain": "At an end position, there is only one neighbor."
        },
        {
          "id": "sta_91",
          "topic": "Statement and Conclusion",
          "level": "Easy",
          "company": "General",
          "q": "Statement: All interview-ready candidates revise regularly. Rohan revises regularly. Conclusion: Rohan is interview-ready.",
          "options": [
            "Conclusion does not definitely follow",
            "Neither statement nor conclusion",
            "Both follow",
            "Conclusion is opposite"
          ],
          "answer": "Conclusion does not definitely follow",
          "explain": "The statement gives a one-way condition; revising regularly alone does not prove interview-readiness."
        },
        {
          "id": "sta_98",
          "topic": "Statement and Conclusion",
          "level": "Medium",
          "company": "General",
          "q": "Statement: Some graduates know Python. Every Python learner can write scripts. Conclusion: Some graduates can write scripts.",
          "options": [
            "Conclusion follows",
            "Neither statement nor conclusion",
            "Both follow",
            "Conclusion is opposite"
          ],
          "answer": "Conclusion follows",
          "explain": "Graduates who know Python belong to the Python learner set and can write scripts."
        },
        {
          "id": "tech_5",
          "topic": "C++",
          "level": "Medium",
          "company": "AMD",
          "q": "Which keyword prevents a derived class method from overriding a base class method further?",
          "options": [
            "final",
            "const",
            "virtual",
            "static"
          ],
          "answer": "final",
          "explain": "The final specifier prevents further overriding."
        },
        {
          "id": "tech_12",
          "topic": "C++",
          "level": "Hard",
          "company": "AMD",
          "q": "What is the default access specifier in a class?",
          "options": [
            "public",
            "protected",
            "private",
            "internal"
          ],
          "answer": "private",
          "explain": "Members of a class are private by default."
        },
        {
          "id": "tech_19",
          "topic": "C++",
          "level": "Easy",
          "company": "AMD",
          "q": "Which container stores unique sorted keys?",
          "options": [
            "vector",
            "queue",
            "set",
            "stack"
          ],
          "answer": "set",
          "explain": "A set stores unique keys in sorted order."
        },
        {
          "id": "tech_26",
          "topic": "C++",
          "level": "Medium",
          "company": "AMD",
          "q": "Which OOP concept hides implementation details?",
          "options": [
            "Abstraction",
            "Friendship",
            "Compilation",
            "Templates"
          ],
          "answer": "Abstraction",
          "explain": "Abstraction exposes essentials and hides internal details."
        }
      ]
    },
    {
      "id": "mock_9",
      "title": "Placement Mock Test 9",
      "desc": "30-minute mixed mock covering aptitude, logic, and technical basics. Difficulty blend tuned for fresher interviews.",
      "durationMinutes": 30,
      "questions": [
        {
          "id": "tim_89",
          "topic": "Time and Work",
          "level": "Easy",
          "company": "AMD",
          "q": "If A alone can complete a piece of work in 4 days, what fraction of the work does A complete in one day?",
          "options": [
            "1/4",
            "1/3",
            "1/5",
            "1/6"
          ],
          "answer": "1/4",
          "explain": "If total work is 1, daily work = 1/4. So A completes 1/4 of the work per day."
        },
        {
          "id": "tim_96",
          "topic": "Time and Work",
          "level": "Medium",
          "company": "AMD",
          "q": "If A alone can complete a piece of work in 11 days, what fraction of the work does A complete in one day?",
          "options": [
            "1/11",
            "1/10",
            "1/12",
            "1/13"
          ],
          "answer": "1/11",
          "explain": "If total work is 1, daily work = 1/11. So A completes 1/11 of the work per day."
        },
        {
          "id": "tim_103",
          "topic": "Time, Speed and Distance",
          "level": "Medium",
          "company": "TCS",
          "q": "A car travels 120 km in 5 hours. What is its speed?",
          "options": [
            "24",
            "29",
            "19",
            "34"
          ],
          "answer": "24",
          "explain": "Speed = distance/time = 120/5 = 24 km/h."
        },
        {
          "id": "tim_110",
          "topic": "Time, Speed and Distance",
          "level": "Hard",
          "company": "TCS",
          "q": "A car travels 225 km in 7 hours. What is its speed?",
          "options": [
            "32",
            "37",
            "27",
            "42"
          ],
          "answer": "32",
          "explain": "Speed = distance/time = 225/7 = 32 km/h."
        },
        {
          "id": "tim_117",
          "topic": "Time, Speed and Distance",
          "level": "Easy",
          "company": "TCS",
          "q": "A car travels 330 km in 4 hours. What is its speed?",
          "options": [
            "82",
            "87",
            "77",
            "92"
          ],
          "answer": "82",
          "explain": "Speed = distance/time = 330/4 = 82 km/h."
        },
        {
          "id": "num_4",
          "topic": "Number Series",
          "level": "Easy",
          "company": "MSFT",
          "q": "Find the next number in the series: 4, 9, 14, 19, 24, ?",
          "options": [
            "29",
            "31",
            "27",
            "33"
          ],
          "answer": "29",
          "explain": "Difference is 5 each time, so next term is 29."
        },
        {
          "id": "num_11",
          "topic": "Number Series",
          "level": "Medium",
          "company": "MSFT",
          "q": "Find the next number in the series: 2, 4, 8, 16, 32, ?",
          "options": [
            "64",
            "66",
            "62",
            "68"
          ],
          "answer": "64",
          "explain": "Each term doubles. 32 × 2 = 64."
        },
        {
          "id": "num_18",
          "topic": "Number Series",
          "level": "Hard",
          "company": "MSFT",
          "q": "Find the next number in the series: 25, 36, 49, 64, ?",
          "options": [
            "81",
            "83",
            "79",
            "85"
          ],
          "answer": "81",
          "explain": "These are consecutive squares: [25, 36, 49, 64]. The next square is 9² = 81."
        },
        {
          "id": "cod_25",
          "topic": "Coding-Decoding",
          "level": "Hard",
          "company": "General",
          "q": "If each letter in 'MIND' is shifted one step forward in the alphabet, how will it be written?",
          "options": [
            "NJOE",
            "DNIM",
            "OKPF",
            "MIND"
          ],
          "answer": "NJOE",
          "explain": "Shift every letter by +1: MIND → NJOE."
        },
        {
          "id": "cod_32",
          "topic": "Coding-Decoding",
          "level": "Easy",
          "company": "General",
          "q": "In a certain code, the word 'DATA' is written in reverse order. What is its code?",
          "options": [
            "ATAD",
            "AADT",
            "DATA",
            "EBUB"
          ],
          "answer": "ATAD",
          "explain": "Reverse the order of letters in DATA; the coded form is ATAD."
        },
        {
          "id": "cod_39",
          "topic": "Coding-Decoding",
          "level": "Medium",
          "company": "General",
          "q": "If each letter in 'GRAPH' is shifted one step forward in the alphabet, how will it be written?",
          "options": [
            "HSBQI",
            "HPARG",
            "ITCRJ",
            "GRAPH"
          ],
          "answer": "HSBQI",
          "explain": "Shift every letter by +1: GRAPH → HSBQI."
        },
        {
          "id": "blo_46",
          "topic": "Blood Relations",
          "level": "Medium",
          "company": "General",
          "q": "A is the mother of B. B is the sister of C. What is A to C?",
          "options": [
            "Mother",
            "Son",
            "Father",
            "Daughter"
          ],
          "answer": "Mother",
          "explain": "If A is mother of B and B is sister of C, then A is also C's mother."
        },
        {
          "id": "blo_53",
          "topic": "Blood Relations",
          "level": "Hard",
          "company": "General",
          "q": "M is the father of N. N is the wife of O. How is M related to O?",
          "options": [
            "Father-in-law",
            "Mother",
            "Brother",
            "Uncle"
          ],
          "answer": "Father-in-law",
          "explain": "M is father of N, and N is wife of O, so M is O's father-in-law."
        },
        {
          "id": "dir_60",
          "topic": "Direction Sense",
          "level": "Medium",
          "company": "TCS",
          "q": "Priya walks 8 km south, then 2 km east. In which direction is she from the starting point?",
          "options": [
            "South-East",
            "North-West",
            "South-West",
            "North-East"
          ],
          "answer": "South-East",
          "explain": "South plus east gives South-East."
        },
        {
          "id": "dir_67",
          "topic": "Direction Sense",
          "level": "Hard",
          "company": "TCS",
          "q": "Ravi walks 4 km south and then 4 km west. In which direction is he from the starting point?",
          "options": [
            "South-West",
            "North-West",
            "South-West",
            "North-East"
          ],
          "answer": "South-West",
          "explain": "The final point is below and left of the start, so it is South-West."
        },
        {
          "id": "syl_74",
          "topic": "Syllogisms",
          "level": "Medium",
          "company": "TCS",
          "q": "Statements: All APIs are interfaces. Some interfaces are public. Which conclusion definitely follows?",
          "options": [
            "No definite conclusion about APIs being public",
            "All students are coders",
            "Some bugs are features",
            "None follows"
          ],
          "answer": "No definite conclusion about APIs being public",
          "explain": "We only know some interfaces are public; we do not know whether those interfaces are APIs."
        },
        {
          "id": "sea_81",
          "topic": "Seating Arrangement",
          "level": "Hard",
          "company": "NVIDIA",
          "q": "Five friends A, B, C, D, and E sit in a row. A sits left of B and B sits left of C. Who is definitely to the right of A?",
          "options": [
            "B",
            "A",
            "Position 5",
            "No one"
          ],
          "answer": "B",
          "explain": "Since A is left of B, B is definitely to A's right."
        },
        {
          "id": "sea_88",
          "topic": "Seating Arrangement",
          "level": "Easy",
          "company": "NVIDIA",
          "q": "P, Q, and R sit in a row. Q is between P and R. Who is in the middle?",
          "options": [
            "Q",
            "A",
            "Position 5",
            "No one"
          ],
          "answer": "Q",
          "explain": "The statement directly says Q is between P and R."
        },
        {
          "id": "sta_95",
          "topic": "Statement and Conclusion",
          "level": "Medium",
          "company": "MSFT",
          "q": "Statement: All strong resumes are concise. This resume is concise. Conclusion: This resume is strong.",
          "options": [
            "Conclusion does not definitely follow",
            "Neither statement nor conclusion",
            "Both follow",
            "Conclusion is opposite"
          ],
          "answer": "Conclusion does not definitely follow",
          "explain": "Being concise is necessary here, but not sufficient."
        },
        {
          "id": "tech_2",
          "topic": "C++",
          "level": "Medium",
          "company": "Infosys",
          "q": "Which symbol is used to access members of an object through a pointer in C++?",
          "options": [
            ".",
            "::",
            "->",
            "*"
          ],
          "answer": "->",
          "explain": "The arrow operator is used when accessing object members via a pointer."
        },
        {
          "id": "tech_9",
          "topic": "C++",
          "level": "Hard",
          "company": "Infosys",
          "q": "Which keyword creates a reference variable?",
          "options": [
            "ptr",
            "ref",
            "&",
            "*"
          ],
          "answer": "&",
          "explain": "References are declared using the & symbol."
        },
        {
          "id": "tech_16",
          "topic": "C++",
          "level": "Easy",
          "company": "Infosys",
          "q": "Which feature enables one interface to behave differently for different objects?",
          "options": [
            "Polymorphism",
            "Inheritance",
            "Compilation",
            "Linking"
          ],
          "answer": "Polymorphism",
          "explain": "Polymorphism lets the same interface trigger different implementations."
        },
        {
          "id": "tech_23",
          "topic": "C++",
          "level": "Medium",
          "company": "Infosys",
          "q": "What happens if a base class destructor is not virtual and you delete a derived object through a base pointer?",
          "options": [
            "Always safe",
            "Only base destructor may run",
            "Compiler error",
            "Program doubles memory"
          ],
          "answer": "Only base destructor may run",
          "explain": "A virtual destructor ensures correct cleanup in inheritance hierarchies."
        },
        {
          "id": "tech_30",
          "topic": "C++",
          "level": "Hard",
          "company": "Infosys",
          "q": "Which of these is a LIFO container adaptor?",
          "options": [
            "queue",
            "stack",
            "priority_queue",
            "deque"
          ],
          "answer": "stack",
          "explain": "Stack follows last-in-first-out."
        },
        {
          "id": "tech_37",
          "topic": "Python",
          "level": "Medium",
          "company": "GOOG",
          "q": "What is a lambda?",
          "options": [
            "Named class",
            "Anonymous function",
            "Loop type",
            "Module"
          ],
          "answer": "Anonymous function",
          "explain": "lambda creates a small anonymous function."
        }
      ]
    },
    {
      "id": "mock_10",
      "title": "Placement Mock Test 10",
      "desc": "30-minute mixed mock covering aptitude, logic, and technical basics. Difficulty blend tuned for fresher interviews.",
      "durationMinutes": 30,
      "questions": [
        {
          "id": "tim_100",
          "topic": "Time and Work",
          "level": "Hard",
          "company": "Infosys",
          "q": "If A alone can complete a piece of work in 7 days, what fraction of the work does A complete in one day?",
          "options": [
            "1/7",
            "1/6",
            "1/8",
            "1/9"
          ],
          "answer": "1/7",
          "explain": "If total work is 1, daily work = 1/7. So A completes 1/7 of the work per day."
        },
        {
          "id": "tim_107",
          "topic": "Time, Speed and Distance",
          "level": "Hard",
          "company": "AMD",
          "q": "A car travels 180 km in 4 hours. What is its speed?",
          "options": [
            "45",
            "50",
            "40",
            "55"
          ],
          "answer": "45",
          "explain": "Speed = distance/time = 180/4 = 45 km/h."
        },
        {
          "id": "tim_114",
          "topic": "Time, Speed and Distance",
          "level": "Easy",
          "company": "AMD",
          "q": "A car travels 285 km in 6 hours. What is its speed?",
          "options": [
            "47",
            "52",
            "42",
            "57"
          ],
          "answer": "47",
          "explain": "Speed = distance/time = 285/6 = 47 km/h."
        },
        {
          "id": "num_1",
          "topic": "Number Series",
          "level": "Easy",
          "company": "TCS",
          "q": "Find the next number in the series: 2, 5, 8, 11, 14, ?",
          "options": [
            "17",
            "19",
            "15",
            "21"
          ],
          "answer": "17",
          "explain": "Each term increases by 3, so the next term after 14 is 17."
        },
        {
          "id": "num_8",
          "topic": "Number Series",
          "level": "Medium",
          "company": "TCS",
          "q": "Find the next number in the series: 5, 10, 15, 20, 25, ?",
          "options": [
            "30",
            "32",
            "28",
            "34"
          ],
          "answer": "30",
          "explain": "Difference is 5 each time, so next term is 30."
        },
        {
          "id": "num_15",
          "topic": "Number Series",
          "level": "Hard",
          "company": "TCS",
          "q": "Find the next number in the series: 2, 4, 8, 16, 32, ?",
          "options": [
            "64",
            "66",
            "62",
            "68"
          ],
          "answer": "64",
          "explain": "Each term doubles. 32 × 2 = 64."
        },
        {
          "id": "cod_22",
          "topic": "Coding-Decoding",
          "level": "Hard",
          "company": "MSFT",
          "q": "In a certain code, the word 'DATA' is written in reverse order. What is its code?",
          "options": [
            "ATAD",
            "AADT",
            "DATA",
            "EBUB"
          ],
          "answer": "ATAD",
          "explain": "Reverse the order of letters in DATA; the coded form is ATAD."
        },
        {
          "id": "cod_29",
          "topic": "Coding-Decoding",
          "level": "Easy",
          "company": "MSFT",
          "q": "If each letter in 'GRAPH' is shifted one step forward in the alphabet, how will it be written?",
          "options": [
            "HSBQI",
            "HPARG",
            "ITCRJ",
            "GRAPH"
          ],
          "answer": "HSBQI",
          "explain": "Shift every letter by +1: GRAPH → HSBQI."
        },
        {
          "id": "cod_36",
          "topic": "Coding-Decoding",
          "level": "Medium",
          "company": "MSFT",
          "q": "In a certain code, the word 'STACK' is written in reverse order. What is its code?",
          "options": [
            "KCATS",
            "ACKST",
            "STACK",
            "TUBDL"
          ],
          "answer": "KCATS",
          "explain": "Reverse the order of letters in STACK; the coded form is KCATS."
        },
        {
          "id": "blo_43",
          "topic": "Blood Relations",
          "level": "Medium",
          "company": "MSFT",
          "q": "M is the father of N. N is the wife of O. How is M related to O?",
          "options": [
            "Father-in-law",
            "Mother",
            "Brother",
            "Uncle"
          ],
          "answer": "Father-in-law",
          "explain": "M is father of N, and N is wife of O, so M is O's father-in-law."
        },
        {
          "id": "blo_50",
          "topic": "Blood Relations",
          "level": "Hard",
          "company": "MSFT",
          "q": "T is the husband of U. U is the mother of V. How is T related to V?",
          "options": [
            "Father",
            "Mother",
            "Brother",
            "Uncle"
          ],
          "answer": "Father",
          "explain": "If U is mother of V and T is U's husband, T is V's father."
        },
        {
          "id": "dir_57",
          "topic": "Direction Sense",
          "level": "Medium",
          "company": "AMD",
          "q": "Ravi walks 4 km south and then 4 km west. In which direction is he from the starting point?",
          "options": [
            "South-West",
            "North-West",
            "South-West",
            "North-East"
          ],
          "answer": "South-West",
          "explain": "The final point is below and left of the start, so it is South-West."
        },
        {
          "id": "dir_64",
          "topic": "Direction Sense",
          "level": "Hard",
          "company": "AMD",
          "q": "Aman walks 3 km west and then 7 km north. In which direction is he from the start?",
          "options": [
            "North-West",
            "North-West",
            "South-West",
            "North-East"
          ],
          "answer": "North-West",
          "explain": "West plus north gives North-West."
        },
        {
          "id": "syl_71",
          "topic": "Syllogisms",
          "level": "Medium",
          "company": "AMD",
          "q": "Statements: All coders are problem solvers. Some students are coders. Which conclusion follows?",
          "options": [
            "Some students are problem solvers",
            "All students are coders",
            "Some bugs are features",
            "None follows"
          ],
          "answer": "Some students are problem solvers",
          "explain": "If some students are coders and all coders are problem solvers, those students are problem solvers."
        },
        {
          "id": "syl_78",
          "topic": "Syllogisms",
          "level": "Hard",
          "company": "AMD",
          "q": "Statements: Some apps are scalable. All scalable products are tested. Which conclusion follows?",
          "options": [
            "Some apps are tested",
            "All students are coders",
            "Some bugs are features",
            "None follows"
          ],
          "answer": "Some apps are tested",
          "explain": "Some apps belong to the scalable set, and all scalable products are tested."
        },
        {
          "id": "sea_85",
          "topic": "Seating Arrangement",
          "level": "Easy",
          "company": "GOOG",
          "q": "M is second from the left in a row of five. Which position is M in?",
          "options": [
            "Position 2",
            "A",
            "Position 5",
            "No one"
          ],
          "answer": "Position 2",
          "explain": "Counting from left, second means position 2."
        },
        {
          "id": "sta_92",
          "topic": "Statement and Conclusion",
          "level": "Medium",
          "company": "TCS",
          "q": "Statement: If code is tested, defects reduce. The code was tested. Conclusion: Defects reduce.",
          "options": [
            "Conclusion follows",
            "Neither statement nor conclusion",
            "Both follow",
            "Conclusion is opposite"
          ],
          "answer": "Conclusion follows",
          "explain": "This matches the given conditional statement directly."
        },
        {
          "id": "sta_99",
          "topic": "Statement and Conclusion",
          "level": "Hard",
          "company": "TCS",
          "q": "Statement: No late candidate is selected. Amit was selected. Conclusion: Amit was not late.",
          "options": [
            "Conclusion follows",
            "Neither statement nor conclusion",
            "Both follow",
            "Conclusion is opposite"
          ],
          "answer": "Conclusion follows",
          "explain": "Contrapositive reasoning applies: selected implies not late."
        },
        {
          "id": "tech_6",
          "topic": "C++",
          "level": "Hard",
          "company": "NVIDIA",
          "q": "Which complexity is expected for lookup in unordered_map on average?",
          "options": [
            "O(1)",
            "O(n log n)",
            "O(log n)",
            "O(n²)"
          ],
          "answer": "O(1)",
          "explain": "Hash-table based unordered_map gives average constant-time lookup."
        },
        {
          "id": "tech_13",
          "topic": "C++",
          "level": "Easy",
          "company": "NVIDIA",
          "q": "Which keyword is used to define a constant member function?",
          "options": [
            "final",
            "static",
            "const",
            "volatile"
          ],
          "answer": "const",
          "explain": "A const member function promises not to modify object state."
        },
        {
          "id": "tech_20",
          "topic": "C++",
          "level": "Medium",
          "company": "NVIDIA",
          "q": "Which keyword prevents a derived class method from overriding a base class method further?",
          "options": [
            "final",
            "const",
            "virtual",
            "static"
          ],
          "answer": "final",
          "explain": "The final specifier prevents further overriding."
        },
        {
          "id": "tech_27",
          "topic": "C++",
          "level": "Hard",
          "company": "NVIDIA",
          "q": "What is the default access specifier in a class?",
          "options": [
            "public",
            "protected",
            "private",
            "internal"
          ],
          "answer": "private",
          "explain": "Members of a class are private by default."
        },
        {
          "id": "tech_34",
          "topic": "Python",
          "level": "Medium",
          "company": "General",
          "q": "Which collection stores key-value pairs?",
          "options": [
            "list",
            "set",
            "dict",
            "tuple"
          ],
          "answer": "dict",
          "explain": "A dictionary stores key-value mappings."
        },
        {
          "id": "tech_41",
          "topic": "Python",
          "level": "Hard",
          "company": "General",
          "q": "Which operator checks membership?",
          "options": [
            "->",
            "in",
            "is not",
            "@"
          ],
          "answer": "in",
          "explain": "The in operator checks whether an element exists in a container."
        },
        {
          "id": "tech_48",
          "topic": "Python",
          "level": "Easy",
          "company": "General",
          "q": "Which keyword is used to define a function?",
          "options": [
            "func",
            "define",
            "def",
            "lambda"
          ],
          "answer": "def",
          "explain": "Functions are declared with def."
        }
      ]
    },
    {
      "id": "mock_11",
      "title": "Placement Mock Test 11",
      "desc": "30-minute mixed mock covering aptitude, logic, and technical basics. Difficulty blend tuned for fresher interviews.",
      "durationMinutes": 30,
      "questions": [
        {
          "id": "tim_111",
          "topic": "Time, Speed and Distance",
          "level": "Easy",
          "company": "Infosys",
          "q": "A car travels 240 km in 3 hours. What is its speed?",
          "options": [
            "80",
            "85",
            "75",
            "90"
          ],
          "answer": "80",
          "explain": "Speed = distance/time = 240/3 = 80 km/h."
        },
        {
          "id": "tim_118",
          "topic": "Time, Speed and Distance",
          "level": "Medium",
          "company": "Infosys",
          "q": "A car travels 345 km in 5 hours. What is its speed?",
          "options": [
            "69",
            "74",
            "64",
            "79"
          ],
          "answer": "69",
          "explain": "Speed = distance/time = 345/5 = 69 km/h."
        },
        {
          "id": "num_5",
          "topic": "Number Series",
          "level": "Medium",
          "company": "AMD",
          "q": "Find the next number in the series: 2, 5, 8, 11, 14, ?",
          "options": [
            "17",
            "19",
            "15",
            "21"
          ],
          "answer": "17",
          "explain": "Each term increases by 3, so the next term after 14 is 17."
        },
        {
          "id": "num_12",
          "topic": "Number Series",
          "level": "Hard",
          "company": "AMD",
          "q": "Find the next number in the series: 6, 11, 16, 21, 26, ?",
          "options": [
            "31",
            "33",
            "29",
            "35"
          ],
          "answer": "31",
          "explain": "Difference is 5 each time, so next term is 31."
        },
        {
          "id": "num_19",
          "topic": "Number Series",
          "level": "Easy",
          "company": "AMD",
          "q": "Find the next number in the series: 2, 4, 8, 16, 32, ?",
          "options": [
            "64",
            "66",
            "62",
            "68"
          ],
          "answer": "64",
          "explain": "Each term doubles. 32 × 2 = 64."
        },
        {
          "id": "cod_26",
          "topic": "Coding-Decoding",
          "level": "Easy",
          "company": "TCS",
          "q": "In a certain code, the word 'STACK' is written in reverse order. What is its code?",
          "options": [
            "KCATS",
            "ACKST",
            "STACK",
            "TUBDL"
          ],
          "answer": "KCATS",
          "explain": "Reverse the order of letters in STACK; the coded form is KCATS."
        },
        {
          "id": "cod_33",
          "topic": "Coding-Decoding",
          "level": "Medium",
          "company": "TCS",
          "q": "If each letter in 'LOGIC' is shifted one step forward in the alphabet, how will it be written?",
          "options": [
            "MPHJD",
            "CIGOL",
            "NQIKE",
            "LOGIC"
          ],
          "answer": "MPHJD",
          "explain": "Shift every letter by +1: LOGIC → MPHJD."
        },
        {
          "id": "cod_40",
          "topic": "Coding-Decoding",
          "level": "Hard",
          "company": "TCS",
          "q": "In a certain code, the word 'DEBUG' is written in reverse order. What is its code?",
          "options": [
            "GUBED",
            "BDEGU",
            "DEBUG",
            "EFCVH"
          ],
          "answer": "GUBED",
          "explain": "Reverse the order of letters in DEBUG; the coded form is GUBED."
        },
        {
          "id": "blo_47",
          "topic": "Blood Relations",
          "level": "Hard",
          "company": "TCS",
          "q": "P is the brother of Q. Q is the daughter of R. How is P related to R?",
          "options": [
            "Son",
            "Mother",
            "Brother",
            "Uncle"
          ],
          "answer": "Son",
          "explain": "If Q is R's daughter and P is Q's brother, then P is R's son."
        },
        {
          "id": "blo_54",
          "topic": "Blood Relations",
          "level": "Easy",
          "company": "TCS",
          "q": "X is the sister of Y. Y is the son of Z. How is X related to Z?",
          "options": [
            "Daughter",
            "Mother",
            "Brother",
            "Uncle"
          ],
          "answer": "Daughter",
          "explain": "If Y is son of Z and X is Y's sister, then X is Z's daughter."
        },
        {
          "id": "dir_61",
          "topic": "Direction Sense",
          "level": "Hard",
          "company": "Infosys",
          "q": "A person walks 5 km north, then 3 km east. In which direction is the person from the starting point?",
          "options": [
            "North-East",
            "North-West",
            "South-West",
            "North-East"
          ],
          "answer": "North-East",
          "explain": "From the starting point, the final position has a north component and an east component, so it is North-East."
        },
        {
          "id": "dir_68",
          "topic": "Direction Sense",
          "level": "Easy",
          "company": "Infosys",
          "q": "Anita walks 6 km east, then 2 km north. In which direction is she from the starting point?",
          "options": [
            "North-East",
            "North-West",
            "South-West",
            "North-East"
          ],
          "answer": "North-East",
          "explain": "East plus north gives a North-East position."
        },
        {
          "id": "syl_75",
          "topic": "Syllogisms",
          "level": "Hard",
          "company": "Infosys",
          "q": "Statements: No bugs are features. Some features are requested. Which conclusion follows?",
          "options": [
            "Some requested items are not bugs",
            "All students are coders",
            "Some bugs are features",
            "None follows"
          ],
          "answer": "Some requested items are not bugs",
          "explain": "Requested features are features, and no feature is a bug."
        },
        {
          "id": "sea_82",
          "topic": "Seating Arrangement",
          "level": "Easy",
          "company": "General",
          "q": "In a row of five seats, R is to the immediate left of S. Which statement is true?",
          "options": [
            "S is to the immediate right of R",
            "A",
            "Position 5",
            "No one"
          ],
          "answer": "S is to the immediate right of R",
          "explain": "Immediate left/right relations are exact opposites."
        },
        {
          "id": "sea_89",
          "topic": "Seating Arrangement",
          "level": "Medium",
          "company": "General",
          "q": "L sits at one end of a row. Which statement must be true?",
          "options": [
            "L has only one adjacent seat",
            "A",
            "Position 5",
            "No one"
          ],
          "answer": "L has only one adjacent seat",
          "explain": "At an end position, there is only one neighbor."
        },
        {
          "id": "sta_96",
          "topic": "Statement and Conclusion",
          "level": "Hard",
          "company": "AMD",
          "q": "Statement: All interview-ready candidates revise regularly. Rohan revises regularly. Conclusion: Rohan is interview-ready.",
          "options": [
            "Conclusion does not definitely follow",
            "Neither statement nor conclusion",
            "Both follow",
            "Conclusion is opposite"
          ],
          "answer": "Conclusion does not definitely follow",
          "explain": "The statement gives a one-way condition; revising regularly alone does not prove interview-readiness."
        },
        {
          "id": "tech_3",
          "topic": "C++",
          "level": "Hard",
          "company": "GOOG",
          "q": "What does STL stand for?",
          "options": [
            "Standard Template Library",
            "Structured Type Library",
            "System Template Logic",
            "Simple Type List"
          ],
          "answer": "Standard Template Library",
          "explain": "STL in C++ expands to Standard Template Library."
        },
        {
          "id": "tech_10",
          "topic": "C++",
          "level": "Easy",
          "company": "GOOG",
          "q": "Which header is commonly used for dynamic arrays in STL?",
          "options": [
            "<queue>",
            "<vector>",
            "<map>",
            "<stack>"
          ],
          "answer": "<vector>",
          "explain": "The vector container from <vector> is a dynamic array."
        },
        {
          "id": "tech_17",
          "topic": "C++",
          "level": "Medium",
          "company": "GOOG",
          "q": "Which symbol is used to access members of an object through a pointer in C++?",
          "options": [
            ".",
            "::",
            "->",
            "*"
          ],
          "answer": "->",
          "explain": "The arrow operator is used when accessing object members via a pointer."
        },
        {
          "id": "tech_24",
          "topic": "C++",
          "level": "Hard",
          "company": "GOOG",
          "q": "Which keyword creates a reference variable?",
          "options": [
            "ptr",
            "ref",
            "&",
            "*"
          ],
          "answer": "&",
          "explain": "References are declared using the & symbol."
        },
        {
          "id": "tech_31",
          "topic": "Python",
          "level": "Medium",
          "company": "MSFT",
          "q": "Which data type is mutable?",
          "options": [
            "tuple",
            "string",
            "list",
            "frozenset"
          ],
          "answer": "list",
          "explain": "Lists can be modified in place."
        },
        {
          "id": "tech_38",
          "topic": "Python",
          "level": "Hard",
          "company": "MSFT",
          "q": "Which method adds one item to a list?",
          "options": [
            "append()",
            "add()",
            "push()",
            "insertall()"
          ],
          "answer": "append()",
          "explain": "append() adds a single item to the end of a list."
        },
        {
          "id": "tech_45",
          "topic": "Python",
          "level": "Easy",
          "company": "MSFT",
          "q": "Which method sorts a list in place?",
          "options": [
            "sorted()",
            "sort()",
            "arrange()",
            "order()"
          ],
          "answer": "sort()",
          "explain": "sort() modifies the original list; sorted() returns a new list."
        },
        {
          "id": "tech_52",
          "topic": "Python",
          "level": "Medium",
          "company": "MSFT",
          "q": "What is a lambda?",
          "options": [
            "Named class",
            "Anonymous function",
            "Loop type",
            "Module"
          ],
          "answer": "Anonymous function",
          "explain": "lambda creates a small anonymous function."
        },
        {
          "id": "tech_59",
          "topic": "Python",
          "level": "Hard",
          "company": "MSFT",
          "q": "What is list comprehension mainly used for?",
          "options": [
            "Defining classes",
            "Concise list creation",
            "Networking",
            "Exception raising"
          ],
          "answer": "Concise list creation",
          "explain": "List comprehensions create lists compactly and readably."
        }
      ]
    },
    {
      "id": "mock_12",
      "title": "Placement Mock Test 12",
      "desc": "30-minute mixed mock covering aptitude, logic, and technical basics. Difficulty blend tuned for fresher interviews.",
      "durationMinutes": 30,
      "questions": [
        {
          "id": "num_2",
          "topic": "Number Series",
          "level": "Medium",
          "company": "Infosys",
          "q": "Find the next number in the series: 1, 4, 9, 16, ?",
          "options": [
            "25",
            "27",
            "23",
            "29"
          ],
          "answer": "25",
          "explain": "These are consecutive squares: [1, 4, 9, 16]. The next square is 5² = 25."
        },
        {
          "id": "num_9",
          "topic": "Number Series",
          "level": "Hard",
          "company": "Infosys",
          "q": "Find the next number in the series: 2, 5, 8, 11, 14, ?",
          "options": [
            "17",
            "19",
            "15",
            "21"
          ],
          "answer": "17",
          "explain": "Each term increases by 3, so the next term after 14 is 17."
        },
        {
          "id": "num_16",
          "topic": "Number Series",
          "level": "Easy",
          "company": "Infosys",
          "q": "Find the next number in the series: 7, 12, 17, 22, 27, ?",
          "options": [
            "32",
            "34",
            "30",
            "36"
          ],
          "answer": "32",
          "explain": "Difference is 5 each time, so next term is 32."
        },
        {
          "id": "cod_23",
          "topic": "Coding-Decoding",
          "level": "Easy",
          "company": "AMD",
          "q": "If each letter in 'LOGIC' is shifted one step forward in the alphabet, how will it be written?",
          "options": [
            "MPHJD",
            "CIGOL",
            "NQIKE",
            "LOGIC"
          ],
          "answer": "MPHJD",
          "explain": "Shift every letter by +1: LOGIC → MPHJD."
        },
        {
          "id": "cod_30",
          "topic": "Coding-Decoding",
          "level": "Medium",
          "company": "AMD",
          "q": "In a certain code, the word 'DEBUG' is written in reverse order. What is its code?",
          "options": [
            "GUBED",
            "BDEGU",
            "DEBUG",
            "EFCVH"
          ],
          "answer": "GUBED",
          "explain": "Reverse the order of letters in DEBUG; the coded form is GUBED."
        },
        {
          "id": "cod_37",
          "topic": "Coding-Decoding",
          "level": "Hard",
          "company": "AMD",
          "q": "If each letter in 'QUEUE' is shifted one step forward in the alphabet, how will it be written?",
          "options": [
            "RVFVF",
            "EUEUQ",
            "SWGWG",
            "QUEUE"
          ],
          "answer": "RVFVF",
          "explain": "Shift every letter by +1: QUEUE → RVFVF."
        },
        {
          "id": "blo_44",
          "topic": "Blood Relations",
          "level": "Hard",
          "company": "AMD",
          "q": "X is the sister of Y. Y is the son of Z. How is X related to Z?",
          "options": [
            "Daughter",
            "Mother",
            "Brother",
            "Uncle"
          ],
          "answer": "Daughter",
          "explain": "If Y is son of Z and X is Y's sister, then X is Z's daughter."
        },
        {
          "id": "blo_51",
          "topic": "Blood Relations",
          "level": "Easy",
          "company": "AMD",
          "q": "A is the mother of B. B is the sister of C. What is A to C?",
          "options": [
            "Mother",
            "Son",
            "Father",
            "Daughter"
          ],
          "answer": "Mother",
          "explain": "If A is mother of B and B is sister of C, then A is also C's mother."
        },
        {
          "id": "dir_58",
          "topic": "Direction Sense",
          "level": "Hard",
          "company": "NVIDIA",
          "q": "Anita walks 6 km east, then 2 km north. In which direction is she from the starting point?",
          "options": [
            "North-East",
            "North-West",
            "South-West",
            "North-East"
          ],
          "answer": "North-East",
          "explain": "East plus north gives a North-East position."
        },
        {
          "id": "dir_65",
          "topic": "Direction Sense",
          "level": "Easy",
          "company": "NVIDIA",
          "q": "Priya walks 8 km south, then 2 km east. In which direction is she from the starting point?",
          "options": [
            "South-East",
            "North-West",
            "South-West",
            "North-East"
          ],
          "answer": "South-East",
          "explain": "South plus east gives South-East."
        },
        {
          "id": "syl_72",
          "topic": "Syllogisms",
          "level": "Hard",
          "company": "NVIDIA",
          "q": "Statements: All laptops are machines. All machines need power. Which conclusion follows?",
          "options": [
            "All laptops need power",
            "All students are coders",
            "Some bugs are features",
            "None follows"
          ],
          "answer": "All laptops need power",
          "explain": "The relation passes through both statements: laptops → machines → need power."
        },
        {
          "id": "syl_79",
          "topic": "Syllogisms",
          "level": "Easy",
          "company": "NVIDIA",
          "q": "Statements: All APIs are interfaces. Some interfaces are public. Which conclusion definitely follows?",
          "options": [
            "No definite conclusion about APIs being public",
            "All students are coders",
            "Some bugs are features",
            "None follows"
          ],
          "answer": "No definite conclusion about APIs being public",
          "explain": "We only know some interfaces are public; we do not know whether those interfaces are APIs."
        },
        {
          "id": "sea_86",
          "topic": "Seating Arrangement",
          "level": "Medium",
          "company": "MSFT",
          "q": "Five friends A, B, C, D, and E sit in a row. A sits left of B and B sits left of C. Who is definitely to the right of A?",
          "options": [
            "B",
            "A",
            "Position 5",
            "No one"
          ],
          "answer": "B",
          "explain": "Since A is left of B, B is definitely to A's right."
        },
        {
          "id": "sta_93",
          "topic": "Statement and Conclusion",
          "level": "Hard",
          "company": "Infosys",
          "q": "Statement: Some graduates know Python. Every Python learner can write scripts. Conclusion: Some graduates can write scripts.",
          "options": [
            "Conclusion follows",
            "Neither statement nor conclusion",
            "Both follow",
            "Conclusion is opposite"
          ],
          "answer": "Conclusion follows",
          "explain": "Graduates who know Python belong to the Python learner set and can write scripts."
        },
        {
          "id": "sta_100",
          "topic": "Statement and Conclusion",
          "level": "Easy",
          "company": "Infosys",
          "q": "Statement: All strong resumes are concise. This resume is concise. Conclusion: This resume is strong.",
          "options": [
            "Conclusion does not definitely follow",
            "Neither statement nor conclusion",
            "Both follow",
            "Conclusion is opposite"
          ],
          "answer": "Conclusion does not definitely follow",
          "explain": "Being concise is necessary here, but not sufficient."
        },
        {
          "id": "tech_7",
          "topic": "C++",
          "level": "Easy",
          "company": "General",
          "q": "What is recursion?",
          "options": [
            "A loop with break",
            "A function calling itself",
            "A sorting method only",
            "A memory leak"
          ],
          "answer": "A function calling itself",
          "explain": "Recursion solves a problem by defining it in terms of smaller subproblems."
        },
        {
          "id": "tech_14",
          "topic": "C++",
          "level": "Medium",
          "company": "General",
          "q": "What is function overloading?",
          "options": [
            "Using one function many times",
            "Same function name with different parameter lists",
            "Overwriting a file",
            "Running two functions together"
          ],
          "answer": "Same function name with different parameter lists",
          "explain": "Overloading is compile-time polymorphism using different signatures."
        },
        {
          "id": "tech_21",
          "topic": "C++",
          "level": "Hard",
          "company": "General",
          "q": "Which complexity is expected for lookup in unordered_map on average?",
          "options": [
            "O(1)",
            "O(n log n)",
            "O(log n)",
            "O(n²)"
          ],
          "answer": "O(1)",
          "explain": "Hash-table based unordered_map gives average constant-time lookup."
        },
        {
          "id": "tech_28",
          "topic": "C++",
          "level": "Easy",
          "company": "General",
          "q": "Which keyword is used to define a constant member function?",
          "options": [
            "final",
            "static",
            "const",
            "volatile"
          ],
          "answer": "const",
          "explain": "A const member function promises not to modify object state."
        },
        {
          "id": "tech_35",
          "topic": "Python",
          "level": "Hard",
          "company": "TCS",
          "q": "What is the output type of range(5)?",
          "options": [
            "list",
            "tuple",
            "range object",
            "set"
          ],
          "answer": "range object",
          "explain": "range() returns a range object in Python 3."
        },
        {
          "id": "tech_42",
          "topic": "Python",
          "level": "Easy",
          "company": "TCS",
          "q": "Which function opens a file?",
          "options": [
            "open()",
            "read()",
            "file()",
            "load()"
          ],
          "answer": "open()",
          "explain": "open() returns a file handle."
        },
        {
          "id": "tech_49",
          "topic": "Python",
          "level": "Medium",
          "company": "TCS",
          "q": "Which collection stores key-value pairs?",
          "options": [
            "list",
            "set",
            "dict",
            "tuple"
          ],
          "answer": "dict",
          "explain": "A dictionary stores key-value mappings."
        },
        {
          "id": "tech_56",
          "topic": "Python",
          "level": "Hard",
          "company": "TCS",
          "q": "Which operator checks membership?",
          "options": [
            "->",
            "in",
            "is not",
            "@"
          ],
          "answer": "in",
          "explain": "The in operator checks whether an element exists in a container."
        },
        {
          "id": "tech_63",
          "topic": "Perl",
          "level": "Medium",
          "company": "TCS",
          "q": "Which symbol prefixes a hash?",
          "options": [
            "#",
            "%",
            "&",
            "@"
          ],
          "answer": "%",
          "explain": "Hashes use the % sigil."
        },
        {
          "id": "tech_70",
          "topic": "Perl",
          "level": "Hard",
          "company": "TCS",
          "q": "Why is regex skill useful in Perl interviews?",
          "options": [
            "It is never used",
            "Many scripting tasks rely on pattern matching",
            "Only GUI design needs it",
            "Perl has no regex"
          ],
          "answer": "Many scripting tasks rely on pattern matching",
          "explain": "Pattern matching is one of Perl's strongest practical uses."
        }
      ]
    },
    {
      "id": "mock_13",
      "title": "Placement Mock Test 13",
      "desc": "30-minute mixed mock covering aptitude, logic, and technical basics. Difficulty blend tuned for fresher interviews.",
      "durationMinutes": 30,
      "questions": [
        {
          "id": "num_13",
          "topic": "Number Series",
          "level": "Easy",
          "company": "NVIDIA",
          "q": "Find the next number in the series: 2, 5, 8, 11, 14, ?",
          "options": [
            "17",
            "19",
            "15",
            "21"
          ],
          "answer": "17",
          "explain": "Each term increases by 3, so the next term after 14 is 17."
        },
        {
          "id": "num_20",
          "topic": "Number Series",
          "level": "Medium",
          "company": "NVIDIA",
          "q": "Find the next number in the series: 8, 13, 18, 23, 28, ?",
          "options": [
            "33",
            "35",
            "31",
            "37"
          ],
          "answer": "33",
          "explain": "Difference is 5 each time, so next term is 33."
        },
        {
          "id": "cod_27",
          "topic": "Coding-Decoding",
          "level": "Medium",
          "company": "Infosys",
          "q": "If each letter in 'QUEUE' is shifted one step forward in the alphabet, how will it be written?",
          "options": [
            "RVFVF",
            "EUEUQ",
            "SWGWG",
            "QUEUE"
          ],
          "answer": "RVFVF",
          "explain": "Shift every letter by +1: QUEUE → RVFVF."
        },
        {
          "id": "cod_34",
          "topic": "Coding-Decoding",
          "level": "Hard",
          "company": "Infosys",
          "q": "In a certain code, the word 'BRAIN' is written in reverse order. What is its code?",
          "options": [
            "NIARB",
            "ABINR",
            "BRAIN",
            "CSBJO"
          ],
          "answer": "NIARB",
          "explain": "Reverse the order of letters in BRAIN; the coded form is NIARB."
        },
        {
          "id": "blo_41",
          "topic": "Blood Relations",
          "level": "Hard",
          "company": "Infosys",
          "q": "A is the mother of B. B is the sister of C. What is A to C?",
          "options": [
            "Mother",
            "Son",
            "Father",
            "Daughter"
          ],
          "answer": "Mother",
          "explain": "If A is mother of B and B is sister of C, then A is also C's mother."
        },
        {
          "id": "blo_48",
          "topic": "Blood Relations",
          "level": "Easy",
          "company": "Infosys",
          "q": "M is the father of N. N is the wife of O. How is M related to O?",
          "options": [
            "Father-in-law",
            "Mother",
            "Brother",
            "Uncle"
          ],
          "answer": "Father-in-law",
          "explain": "M is father of N, and N is wife of O, so M is O's father-in-law."
        },
        {
          "id": "blo_55",
          "topic": "Blood Relations",
          "level": "Medium",
          "company": "Infosys",
          "q": "T is the husband of U. U is the mother of V. How is T related to V?",
          "options": [
            "Father",
            "Mother",
            "Brother",
            "Uncle"
          ],
          "answer": "Father",
          "explain": "If U is mother of V and T is U's husband, T is V's father."
        },
        {
          "id": "dir_62",
          "topic": "Direction Sense",
          "level": "Easy",
          "company": "GOOG",
          "q": "Ravi walks 4 km south and then 4 km west. In which direction is he from the starting point?",
          "options": [
            "South-West",
            "North-West",
            "South-West",
            "North-East"
          ],
          "answer": "South-West",
          "explain": "The final point is below and left of the start, so it is South-West."
        },
        {
          "id": "dir_69",
          "topic": "Direction Sense",
          "level": "Medium",
          "company": "GOOG",
          "q": "Aman walks 3 km west and then 7 km north. In which direction is he from the start?",
          "options": [
            "North-West",
            "North-West",
            "South-West",
            "North-East"
          ],
          "answer": "North-West",
          "explain": "West plus north gives North-West."
        },
        {
          "id": "syl_76",
          "topic": "Syllogisms",
          "level": "Easy",
          "company": "GOOG",
          "q": "Statements: All coders are problem solvers. Some students are coders. Which conclusion follows?",
          "options": [
            "Some students are problem solvers",
            "All students are coders",
            "Some bugs are features",
            "None follows"
          ],
          "answer": "Some students are problem solvers",
          "explain": "If some students are coders and all coders are problem solvers, those students are problem solvers."
        },
        {
          "id": "sea_83",
          "topic": "Seating Arrangement",
          "level": "Medium",
          "company": "TCS",
          "q": "P, Q, and R sit in a row. Q is between P and R. Who is in the middle?",
          "options": [
            "Q",
            "A",
            "Position 5",
            "No one"
          ],
          "answer": "Q",
          "explain": "The statement directly says Q is between P and R."
        },
        {
          "id": "sea_90",
          "topic": "Seating Arrangement",
          "level": "Hard",
          "company": "TCS",
          "q": "M is second from the left in a row of five. Which position is M in?",
          "options": [
            "Position 2",
            "A",
            "Position 5",
            "No one"
          ],
          "answer": "Position 2",
          "explain": "Counting from left, second means position 2."
        },
        {
          "id": "sta_97",
          "topic": "Statement and Conclusion",
          "level": "Easy",
          "company": "NVIDIA",
          "q": "Statement: If code is tested, defects reduce. The code was tested. Conclusion: Defects reduce.",
          "options": [
            "Conclusion follows",
            "Neither statement nor conclusion",
            "Both follow",
            "Conclusion is opposite"
          ],
          "answer": "Conclusion follows",
          "explain": "This matches the given conditional statement directly."
        },
        {
          "id": "tech_4",
          "topic": "C++",
          "level": "Easy",
          "company": "MSFT",
          "q": "Which container stores unique sorted keys?",
          "options": [
            "vector",
            "queue",
            "set",
            "stack"
          ],
          "answer": "set",
          "explain": "A set stores unique keys in sorted order."
        },
        {
          "id": "tech_11",
          "topic": "C++",
          "level": "Medium",
          "company": "MSFT",
          "q": "Which OOP concept hides implementation details?",
          "options": [
            "Abstraction",
            "Friendship",
            "Compilation",
            "Templates"
          ],
          "answer": "Abstraction",
          "explain": "Abstraction exposes essentials and hides internal details."
        },
        {
          "id": "tech_18",
          "topic": "C++",
          "level": "Hard",
          "company": "MSFT",
          "q": "What does STL stand for?",
          "options": [
            "Standard Template Library",
            "Structured Type Library",
            "System Template Logic",
            "Simple Type List"
          ],
          "answer": "Standard Template Library",
          "explain": "STL in C++ expands to Standard Template Library."
        },
        {
          "id": "tech_25",
          "topic": "C++",
          "level": "Easy",
          "company": "MSFT",
          "q": "Which header is commonly used for dynamic arrays in STL?",
          "options": [
            "<queue>",
            "<vector>",
            "<map>",
            "<stack>"
          ],
          "answer": "<vector>",
          "explain": "The vector container from <vector> is a dynamic array."
        },
        {
          "id": "tech_32",
          "topic": "Python",
          "level": "Hard",
          "company": "AMD",
          "q": "What does len() return?",
          "options": [
            "Index",
            "Length",
            "Type",
            "Memory size only"
          ],
          "answer": "Length",
          "explain": "len() returns the number of items in a sequence or collection."
        },
        {
          "id": "tech_39",
          "topic": "Python",
          "level": "Easy",
          "company": "AMD",
          "q": "What does __init__ do?",
          "options": [
            "Starts interpreter",
            "Initializes an object",
            "Closes file",
            "Prints object"
          ],
          "answer": "Initializes an object",
          "explain": "__init__ is the initializer called on object creation."
        },
        {
          "id": "tech_46",
          "topic": "Python",
          "level": "Medium",
          "company": "AMD",
          "q": "Which data type is mutable?",
          "options": [
            "tuple",
            "string",
            "list",
            "frozenset"
          ],
          "answer": "list",
          "explain": "Lists can be modified in place."
        },
        {
          "id": "tech_53",
          "topic": "Python",
          "level": "Hard",
          "company": "AMD",
          "q": "Which method adds one item to a list?",
          "options": [
            "append()",
            "add()",
            "push()",
            "insertall()"
          ],
          "answer": "append()",
          "explain": "append() adds a single item to the end of a list."
        },
        {
          "id": "tech_60",
          "topic": "Python",
          "level": "Easy",
          "company": "AMD",
          "q": "Which method sorts a list in place?",
          "options": [
            "sorted()",
            "sort()",
            "arrange()",
            "order()"
          ],
          "answer": "sort()",
          "explain": "sort() modifies the original list; sorted() returns a new list."
        },
        {
          "id": "tech_67",
          "topic": "Perl",
          "level": "Hard",
          "company": "AMD",
          "q": "Which keyword prints output?",
          "options": [
            "echo",
            "print",
            "show",
            "display"
          ],
          "answer": "print",
          "explain": "print is commonly used for output in Perl."
        },
        {
          "id": "tech_74",
          "topic": "Perl",
          "level": "Easy",
          "company": "AMD",
          "q": "What is Perl especially known for?",
          "options": [
            "Game engines only",
            "Text processing and regex",
            "Mobile app stores",
            "Binary firmware only"
          ],
          "answer": "Text processing and regex",
          "explain": "Perl is widely known for strong text processing capabilities."
        },
        {
          "id": "per_1",
          "topic": "Percentages",
          "level": "Easy",
          "company": "TCS",
          "q": "What is 10% of 120?",
          "options": [
            "7",
            "12",
            "17",
            "22"
          ],
          "answer": "12",
          "explain": "Convert 10% to 10/100 and multiply: 120 × 10/100 = 12."
        }
      ]
    },
    {
      "id": "mock_14",
      "title": "Placement Mock Test 14",
      "desc": "30-minute mixed mock covering aptitude, logic, and technical basics. Difficulty blend tuned for fresher interviews.",
      "durationMinutes": 30,
      "questions": [
        {
          "id": "cod_24",
          "topic": "Coding-Decoding",
          "level": "Medium",
          "company": "NVIDIA",
          "q": "In a certain code, the word 'BRAIN' is written in reverse order. What is its code?",
          "options": [
            "NIARB",
            "ABINR",
            "BRAIN",
            "CSBJO"
          ],
          "answer": "NIARB",
          "explain": "Reverse the order of letters in BRAIN; the coded form is NIARB."
        },
        {
          "id": "cod_31",
          "topic": "Coding-Decoding",
          "level": "Hard",
          "company": "NVIDIA",
          "q": "If each letter in 'CODE' is shifted one step forward in the alphabet, how will it be written?",
          "options": [
            "DPEF",
            "EDOC",
            "EQFG",
            "CODE"
          ],
          "answer": "DPEF",
          "explain": "Shift every letter by +1: CODE → DPEF."
        },
        {
          "id": "cod_38",
          "topic": "Coding-Decoding",
          "level": "Easy",
          "company": "NVIDIA",
          "q": "In a certain code, the word 'ARRAY' is written in reverse order. What is its code?",
          "options": [
            "YARRA",
            "AARRY",
            "ARRAY",
            "BSSBZ"
          ],
          "answer": "YARRA",
          "explain": "Reverse the order of letters in ARRAY; the coded form is YARRA."
        },
        {
          "id": "blo_45",
          "topic": "Blood Relations",
          "level": "Easy",
          "company": "NVIDIA",
          "q": "T is the husband of U. U is the mother of V. How is T related to V?",
          "options": [
            "Father",
            "Mother",
            "Brother",
            "Uncle"
          ],
          "answer": "Father",
          "explain": "If U is mother of V and T is U's husband, T is V's father."
        },
        {
          "id": "blo_52",
          "topic": "Blood Relations",
          "level": "Medium",
          "company": "NVIDIA",
          "q": "P is the brother of Q. Q is the daughter of R. How is P related to R?",
          "options": [
            "Son",
            "Mother",
            "Brother",
            "Uncle"
          ],
          "answer": "Son",
          "explain": "If Q is R's daughter and P is Q's brother, then P is R's son."
        },
        {
          "id": "dir_59",
          "topic": "Direction Sense",
          "level": "Easy",
          "company": "General",
          "q": "Aman walks 3 km west and then 7 km north. In which direction is he from the start?",
          "options": [
            "North-West",
            "North-West",
            "South-West",
            "North-East"
          ],
          "answer": "North-West",
          "explain": "West plus north gives North-West."
        },
        {
          "id": "dir_66",
          "topic": "Direction Sense",
          "level": "Medium",
          "company": "General",
          "q": "A person walks 5 km north, then 3 km east. In which direction is the person from the starting point?",
          "options": [
            "North-East",
            "North-West",
            "South-West",
            "North-East"
          ],
          "answer": "North-East",
          "explain": "From the starting point, the final position has a north component and an east component, so it is North-East."
        },
        {
          "id": "syl_73",
          "topic": "Syllogisms",
          "level": "Easy",
          "company": "General",
          "q": "Statements: Some apps are scalable. All scalable products are tested. Which conclusion follows?",
          "options": [
            "Some apps are tested",
            "All students are coders",
            "Some bugs are features",
            "None follows"
          ],
          "answer": "Some apps are tested",
          "explain": "Some apps belong to the scalable set, and all scalable products are tested."
        },
        {
          "id": "syl_80",
          "topic": "Syllogisms",
          "level": "Medium",
          "company": "General",
          "q": "Statements: No bugs are features. Some features are requested. Which conclusion follows?",
          "options": [
            "Some requested items are not bugs",
            "All students are coders",
            "Some bugs are features",
            "None follows"
          ],
          "answer": "Some requested items are not bugs",
          "explain": "Requested features are features, and no feature is a bug."
        },
        {
          "id": "sea_87",
          "topic": "Seating Arrangement",
          "level": "Hard",
          "company": "AMD",
          "q": "In a row of five seats, R is to the immediate left of S. Which statement is true?",
          "options": [
            "S is to the immediate right of R",
            "A",
            "Position 5",
            "No one"
          ],
          "answer": "S is to the immediate right of R",
          "explain": "Immediate left/right relations are exact opposites."
        },
        {
          "id": "sta_94",
          "topic": "Statement and Conclusion",
          "level": "Easy",
          "company": "GOOG",
          "q": "Statement: No late candidate is selected. Amit was selected. Conclusion: Amit was not late.",
          "options": [
            "Conclusion follows",
            "Neither statement nor conclusion",
            "Both follow",
            "Conclusion is opposite"
          ],
          "answer": "Conclusion follows",
          "explain": "Contrapositive reasoning applies: selected implies not late."
        },
        {
          "id": "tech_1",
          "topic": "C++",
          "level": "Easy",
          "company": "TCS",
          "q": "Which feature enables one interface to behave differently for different objects?",
          "options": [
            "Polymorphism",
            "Inheritance",
            "Compilation",
            "Linking"
          ],
          "answer": "Polymorphism",
          "explain": "Polymorphism lets the same interface trigger different implementations."
        },
        {
          "id": "tech_8",
          "topic": "C++",
          "level": "Medium",
          "company": "TCS",
          "q": "What happens if a base class destructor is not virtual and you delete a derived object through a base pointer?",
          "options": [
            "Always safe",
            "Only base destructor may run",
            "Compiler error",
            "Program doubles memory"
          ],
          "answer": "Only base destructor may run",
          "explain": "A virtual destructor ensures correct cleanup in inheritance hierarchies."
        },
        {
          "id": "tech_15",
          "topic": "C++",
          "level": "Hard",
          "company": "TCS",
          "q": "Which of these is a LIFO container adaptor?",
          "options": [
            "queue",
            "stack",
            "priority_queue",
            "deque"
          ],
          "answer": "stack",
          "explain": "Stack follows last-in-first-out."
        },
        {
          "id": "tech_22",
          "topic": "C++",
          "level": "Easy",
          "company": "TCS",
          "q": "What is recursion?",
          "options": [
            "A loop with break",
            "A function calling itself",
            "A sorting method only",
            "A memory leak"
          ],
          "answer": "A function calling itself",
          "explain": "Recursion solves a problem by defining it in terms of smaller subproblems."
        },
        {
          "id": "tech_29",
          "topic": "C++",
          "level": "Medium",
          "company": "TCS",
          "q": "What is function overloading?",
          "options": [
            "Using one function many times",
            "Same function name with different parameter lists",
            "Overwriting a file",
            "Running two functions together"
          ],
          "answer": "Same function name with different parameter lists",
          "explain": "Overloading is compile-time polymorphism using different signatures."
        },
        {
          "id": "tech_36",
          "topic": "Python",
          "level": "Easy",
          "company": "Infosys",
          "q": "Which statement handles exceptions?",
          "options": [
            "catch-except",
            "do-except",
            "try-except",
            "error-if"
          ],
          "answer": "try-except",
          "explain": "Python exception handling uses try-except."
        },
        {
          "id": "tech_43",
          "topic": "Python",
          "level": "Medium",
          "company": "Infosys",
          "q": "Which structure removes duplicates automatically?",
          "options": [
            "list",
            "tuple",
            "set",
            "str"
          ],
          "answer": "set",
          "explain": "Sets contain unique elements."
        },
        {
          "id": "tech_50",
          "topic": "Python",
          "level": "Hard",
          "company": "Infosys",
          "q": "What is the output type of range(5)?",
          "options": [
            "list",
            "tuple",
            "range object",
            "set"
          ],
          "answer": "range object",
          "explain": "range() returns a range object in Python 3."
        },
        {
          "id": "tech_57",
          "topic": "Python",
          "level": "Easy",
          "company": "Infosys",
          "q": "Which function opens a file?",
          "options": [
            "open()",
            "read()",
            "file()",
            "load()"
          ],
          "answer": "open()",
          "explain": "open() returns a file handle."
        },
        {
          "id": "tech_64",
          "topic": "Perl",
          "level": "Hard",
          "company": "Infosys",
          "q": "What is Perl especially known for?",
          "options": [
            "Game engines only",
            "Text processing and regex",
            "Mobile app stores",
            "Binary firmware only"
          ],
          "answer": "Text processing and regex",
          "explain": "Perl is widely known for strong text processing capabilities."
        },
        {
          "id": "tech_71",
          "topic": "Perl",
          "level": "Easy",
          "company": "Infosys",
          "q": "Which symbol prefixes a scalar variable in Perl?",
          "options": [
            "$",
            "@",
            "%",
            "&"
          ],
          "answer": "$",
          "explain": "Scalars use the $ sigil in Perl."
        },
        {
          "id": "tech_78",
          "topic": "Perl",
          "level": "Medium",
          "company": "Infosys",
          "q": "Which structure stores key-value pairs?",
          "options": [
            "hash",
            "array",
            "scalar",
            "filehandle"
          ],
          "answer": "hash",
          "explain": "Hashes map keys to values."
        },
        {
          "id": "per_5",
          "topic": "Percentages",
          "level": "Medium",
          "company": "AMD",
          "q": "What is 30% of 160?",
          "options": [
            "43",
            "48",
            "53",
            "58"
          ],
          "answer": "48",
          "explain": "Convert 30% to 30/100 and multiply: 160 × 30/100 = 48."
        },
        {
          "id": "per_12",
          "topic": "Percentages",
          "level": "Hard",
          "company": "AMD",
          "q": "What is 15% of 230?",
          "options": [
            "29",
            "34",
            "39",
            "44"
          ],
          "answer": "34",
          "explain": "Convert 15% to 15/100 and multiply: 230 × 15/100 = 34."
        }
      ]
    },
    {
      "id": "mock_15",
      "title": "Placement Mock Test 15",
      "desc": "30-minute mixed mock covering aptitude, logic, and technical basics. Difficulty blend tuned for fresher interviews.",
      "durationMinutes": 30,
      "questions": [
        {
          "id": "cod_35",
          "topic": "Coding-Decoding",
          "level": "Easy",
          "company": "GOOG",
          "q": "If each letter in 'MIND' is shifted one step forward in the alphabet, how will it be written?",
          "options": [
            "NJOE",
            "DNIM",
            "OKPF",
            "MIND"
          ],
          "answer": "NJOE",
          "explain": "Shift every letter by +1: MIND → NJOE."
        },
        {
          "id": "blo_42",
          "topic": "Blood Relations",
          "level": "Easy",
          "company": "GOOG",
          "q": "P is the brother of Q. Q is the daughter of R. How is P related to R?",
          "options": [
            "Son",
            "Mother",
            "Brother",
            "Uncle"
          ],
          "answer": "Son",
          "explain": "If Q is R's daughter and P is Q's brother, then P is R's son."
        },
        {
          "id": "blo_49",
          "topic": "Blood Relations",
          "level": "Medium",
          "company": "GOOG",
          "q": "X is the sister of Y. Y is the son of Z. How is X related to Z?",
          "options": [
            "Daughter",
            "Mother",
            "Brother",
            "Uncle"
          ],
          "answer": "Daughter",
          "explain": "If Y is son of Z and X is Y's sister, then X is Z's daughter."
        },
        {
          "id": "dir_56",
          "topic": "Direction Sense",
          "level": "Easy",
          "company": "MSFT",
          "q": "A person walks 5 km north, then 3 km east. In which direction is the person from the starting point?",
          "options": [
            "North-East",
            "North-West",
            "South-West",
            "North-East"
          ],
          "answer": "North-East",
          "explain": "From the starting point, the final position has a north component and an east component, so it is North-East."
        },
        {
          "id": "dir_63",
          "topic": "Direction Sense",
          "level": "Medium",
          "company": "MSFT",
          "q": "Anita walks 6 km east, then 2 km north. In which direction is she from the starting point?",
          "options": [
            "North-East",
            "North-West",
            "South-West",
            "North-East"
          ],
          "answer": "North-East",
          "explain": "East plus north gives a North-East position."
        },
        {
          "id": "dir_70",
          "topic": "Direction Sense",
          "level": "Hard",
          "company": "MSFT",
          "q": "Priya walks 8 km south, then 2 km east. In which direction is she from the starting point?",
          "options": [
            "South-East",
            "North-West",
            "South-West",
            "North-East"
          ],
          "answer": "South-East",
          "explain": "South plus east gives South-East."
        },
        {
          "id": "syl_77",
          "topic": "Syllogisms",
          "level": "Medium",
          "company": "MSFT",
          "q": "Statements: All laptops are machines. All machines need power. Which conclusion follows?",
          "options": [
            "All laptops need power",
            "All students are coders",
            "Some bugs are features",
            "None follows"
          ],
          "answer": "All laptops need power",
          "explain": "The relation passes through both statements: laptops → machines → need power."
        },
        {
          "id": "sea_84",
          "topic": "Seating Arrangement",
          "level": "Hard",
          "company": "Infosys",
          "q": "L sits at one end of a row. Which statement must be true?",
          "options": [
            "L has only one adjacent seat",
            "A",
            "Position 5",
            "No one"
          ],
          "answer": "L has only one adjacent seat",
          "explain": "At an end position, there is only one neighbor."
        },
        {
          "id": "sta_91",
          "topic": "Statement and Conclusion",
          "level": "Easy",
          "company": "General",
          "q": "Statement: All interview-ready candidates revise regularly. Rohan revises regularly. Conclusion: Rohan is interview-ready.",
          "options": [
            "Conclusion does not definitely follow",
            "Neither statement nor conclusion",
            "Both follow",
            "Conclusion is opposite"
          ],
          "answer": "Conclusion does not definitely follow",
          "explain": "The statement gives a one-way condition; revising regularly alone does not prove interview-readiness."
        },
        {
          "id": "sta_98",
          "topic": "Statement and Conclusion",
          "level": "Medium",
          "company": "General",
          "q": "Statement: Some graduates know Python. Every Python learner can write scripts. Conclusion: Some graduates can write scripts.",
          "options": [
            "Conclusion follows",
            "Neither statement nor conclusion",
            "Both follow",
            "Conclusion is opposite"
          ],
          "answer": "Conclusion follows",
          "explain": "Graduates who know Python belong to the Python learner set and can write scripts."
        },
        {
          "id": "tech_5",
          "topic": "C++",
          "level": "Medium",
          "company": "AMD",
          "q": "Which keyword prevents a derived class method from overriding a base class method further?",
          "options": [
            "final",
            "const",
            "virtual",
            "static"
          ],
          "answer": "final",
          "explain": "The final specifier prevents further overriding."
        },
        {
          "id": "tech_12",
          "topic": "C++",
          "level": "Hard",
          "company": "AMD",
          "q": "What is the default access specifier in a class?",
          "options": [
            "public",
            "protected",
            "private",
            "internal"
          ],
          "answer": "private",
          "explain": "Members of a class are private by default."
        },
        {
          "id": "tech_19",
          "topic": "C++",
          "level": "Easy",
          "company": "AMD",
          "q": "Which container stores unique sorted keys?",
          "options": [
            "vector",
            "queue",
            "set",
            "stack"
          ],
          "answer": "set",
          "explain": "A set stores unique keys in sorted order."
        },
        {
          "id": "tech_26",
          "topic": "C++",
          "level": "Medium",
          "company": "AMD",
          "q": "Which OOP concept hides implementation details?",
          "options": [
            "Abstraction",
            "Friendship",
            "Compilation",
            "Templates"
          ],
          "answer": "Abstraction",
          "explain": "Abstraction exposes essentials and hides internal details."
        },
        {
          "id": "tech_33",
          "topic": "Python",
          "level": "Easy",
          "company": "NVIDIA",
          "q": "Which keyword is used to define a function?",
          "options": [
            "func",
            "define",
            "def",
            "lambda"
          ],
          "answer": "def",
          "explain": "Functions are declared with def."
        },
        {
          "id": "tech_40",
          "topic": "Python",
          "level": "Medium",
          "company": "NVIDIA",
          "q": "Which of these is immutable?",
          "options": [
            "list",
            "dict",
            "set",
            "tuple"
          ],
          "answer": "tuple",
          "explain": "Tuples cannot be changed after creation."
        },
        {
          "id": "tech_47",
          "topic": "Python",
          "level": "Hard",
          "company": "NVIDIA",
          "q": "What does len() return?",
          "options": [
            "Index",
            "Length",
            "Type",
            "Memory size only"
          ],
          "answer": "Length",
          "explain": "len() returns the number of items in a sequence or collection."
        },
        {
          "id": "tech_54",
          "topic": "Python",
          "level": "Easy",
          "company": "NVIDIA",
          "q": "What does __init__ do?",
          "options": [
            "Starts interpreter",
            "Initializes an object",
            "Closes file",
            "Prints object"
          ],
          "answer": "Initializes an object",
          "explain": "__init__ is the initializer called on object creation."
        },
        {
          "id": "tech_61",
          "topic": "Perl",
          "level": "Hard",
          "company": "NVIDIA",
          "q": "Which symbol prefixes a scalar variable in Perl?",
          "options": [
            "$",
            "@",
            "%",
            "&"
          ],
          "answer": "$",
          "explain": "Scalars use the $ sigil in Perl."
        },
        {
          "id": "tech_68",
          "topic": "Perl",
          "level": "Easy",
          "company": "NVIDIA",
          "q": "Which structure stores key-value pairs?",
          "options": [
            "hash",
            "array",
            "scalar",
            "filehandle"
          ],
          "answer": "hash",
          "explain": "Hashes map keys to values."
        },
        {
          "id": "tech_75",
          "topic": "Perl",
          "level": "Medium",
          "company": "NVIDIA",
          "q": "Which operator matches a regex pattern?",
          "options": [
            "=~",
            "==",
            "=>",
            "~~"
          ],
          "answer": "=~",
          "explain": "The =~ operator binds a string to a regex match."
        },
        {
          "id": "per_2",
          "topic": "Percentages",
          "level": "Medium",
          "company": "Infosys",
          "q": "What is 15% of 130?",
          "options": [
            "14",
            "19",
            "24",
            "29"
          ],
          "answer": "19",
          "explain": "Convert 15% to 15/100 and multiply: 130 × 15/100 = 19."
        },
        {
          "id": "per_9",
          "topic": "Percentages",
          "level": "Hard",
          "company": "Infosys",
          "q": "What is 25% of 200?",
          "options": [
            "45",
            "50",
            "55",
            "60"
          ],
          "answer": "50",
          "explain": "Convert 25% to 25/100 and multiply: 200 × 25/100 = 50."
        },
        {
          "id": "per_16",
          "topic": "Percentages",
          "level": "Easy",
          "company": "Infosys",
          "q": "What is 10% of 270?",
          "options": [
            "22",
            "27",
            "32",
            "37"
          ],
          "answer": "27",
          "explain": "Convert 10% to 10/100 and multiply: 270 × 10/100 = 27."
        },
        {
          "id": "pro_23",
          "topic": "Profit and Loss",
          "level": "Easy",
          "company": "AMD",
          "q": "An article has cost price ₹104. It is sold at a profit of 20%. What is the selling price?",
          "options": [
            "125",
            "133",
            "117",
            "137"
          ],
          "answer": "125",
          "explain": "Selling price = CP × (100 + profit%)/100 = 104 × 120/100 = ₹125."
        }
      ]
    },
    {
      "id": "mock_16",
      "title": "Placement Mock Test 16",
      "desc": "30-minute mixed mock covering aptitude, logic, and technical basics. Difficulty blend tuned for fresher interviews.",
      "durationMinutes": 30,
      "questions": [
        {
          "id": "blo_46",
          "topic": "Blood Relations",
          "level": "Medium",
          "company": "General",
          "q": "A is the mother of B. B is the sister of C. What is A to C?",
          "options": [
            "Mother",
            "Son",
            "Father",
            "Daughter"
          ],
          "answer": "Mother",
          "explain": "If A is mother of B and B is sister of C, then A is also C's mother."
        },
        {
          "id": "blo_53",
          "topic": "Blood Relations",
          "level": "Hard",
          "company": "General",
          "q": "M is the father of N. N is the wife of O. How is M related to O?",
          "options": [
            "Father-in-law",
            "Mother",
            "Brother",
            "Uncle"
          ],
          "answer": "Father-in-law",
          "explain": "M is father of N, and N is wife of O, so M is O's father-in-law."
        },
        {
          "id": "dir_60",
          "topic": "Direction Sense",
          "level": "Medium",
          "company": "TCS",
          "q": "Priya walks 8 km south, then 2 km east. In which direction is she from the starting point?",
          "options": [
            "South-East",
            "North-West",
            "South-West",
            "North-East"
          ],
          "answer": "South-East",
          "explain": "South plus east gives South-East."
        },
        {
          "id": "dir_67",
          "topic": "Direction Sense",
          "level": "Hard",
          "company": "TCS",
          "q": "Ravi walks 4 km south and then 4 km west. In which direction is he from the starting point?",
          "options": [
            "South-West",
            "North-West",
            "South-West",
            "North-East"
          ],
          "answer": "South-West",
          "explain": "The final point is below and left of the start, so it is South-West."
        },
        {
          "id": "syl_74",
          "topic": "Syllogisms",
          "level": "Medium",
          "company": "TCS",
          "q": "Statements: All APIs are interfaces. Some interfaces are public. Which conclusion definitely follows?",
          "options": [
            "No definite conclusion about APIs being public",
            "All students are coders",
            "Some bugs are features",
            "None follows"
          ],
          "answer": "No definite conclusion about APIs being public",
          "explain": "We only know some interfaces are public; we do not know whether those interfaces are APIs."
        },
        {
          "id": "sea_81",
          "topic": "Seating Arrangement",
          "level": "Hard",
          "company": "NVIDIA",
          "q": "Five friends A, B, C, D, and E sit in a row. A sits left of B and B sits left of C. Who is definitely to the right of A?",
          "options": [
            "B",
            "A",
            "Position 5",
            "No one"
          ],
          "answer": "B",
          "explain": "Since A is left of B, B is definitely to A's right."
        },
        {
          "id": "sea_88",
          "topic": "Seating Arrangement",
          "level": "Easy",
          "company": "NVIDIA",
          "q": "P, Q, and R sit in a row. Q is between P and R. Who is in the middle?",
          "options": [
            "Q",
            "A",
            "Position 5",
            "No one"
          ],
          "answer": "Q",
          "explain": "The statement directly says Q is between P and R."
        },
        {
          "id": "sta_95",
          "topic": "Statement and Conclusion",
          "level": "Medium",
          "company": "MSFT",
          "q": "Statement: All strong resumes are concise. This resume is concise. Conclusion: This resume is strong.",
          "options": [
            "Conclusion does not definitely follow",
            "Neither statement nor conclusion",
            "Both follow",
            "Conclusion is opposite"
          ],
          "answer": "Conclusion does not definitely follow",
          "explain": "Being concise is necessary here, but not sufficient."
        },
        {
          "id": "tech_2",
          "topic": "C++",
          "level": "Medium",
          "company": "Infosys",
          "q": "Which symbol is used to access members of an object through a pointer in C++?",
          "options": [
            ".",
            "::",
            "->",
            "*"
          ],
          "answer": "->",
          "explain": "The arrow operator is used when accessing object members via a pointer."
        },
        {
          "id": "tech_9",
          "topic": "C++",
          "level": "Hard",
          "company": "Infosys",
          "q": "Which keyword creates a reference variable?",
          "options": [
            "ptr",
            "ref",
            "&",
            "*"
          ],
          "answer": "&",
          "explain": "References are declared using the & symbol."
        },
        {
          "id": "tech_16",
          "topic": "C++",
          "level": "Easy",
          "company": "Infosys",
          "q": "Which feature enables one interface to behave differently for different objects?",
          "options": [
            "Polymorphism",
            "Inheritance",
            "Compilation",
            "Linking"
          ],
          "answer": "Polymorphism",
          "explain": "Polymorphism lets the same interface trigger different implementations."
        },
        {
          "id": "tech_23",
          "topic": "C++",
          "level": "Medium",
          "company": "Infosys",
          "q": "What happens if a base class destructor is not virtual and you delete a derived object through a base pointer?",
          "options": [
            "Always safe",
            "Only base destructor may run",
            "Compiler error",
            "Program doubles memory"
          ],
          "answer": "Only base destructor may run",
          "explain": "A virtual destructor ensures correct cleanup in inheritance hierarchies."
        },
        {
          "id": "tech_30",
          "topic": "C++",
          "level": "Hard",
          "company": "Infosys",
          "q": "Which of these is a LIFO container adaptor?",
          "options": [
            "queue",
            "stack",
            "priority_queue",
            "deque"
          ],
          "answer": "stack",
          "explain": "Stack follows last-in-first-out."
        },
        {
          "id": "tech_37",
          "topic": "Python",
          "level": "Medium",
          "company": "GOOG",
          "q": "What is a lambda?",
          "options": [
            "Named class",
            "Anonymous function",
            "Loop type",
            "Module"
          ],
          "answer": "Anonymous function",
          "explain": "lambda creates a small anonymous function."
        },
        {
          "id": "tech_44",
          "topic": "Python",
          "level": "Hard",
          "company": "GOOG",
          "q": "What is list comprehension mainly used for?",
          "options": [
            "Defining classes",
            "Concise list creation",
            "Networking",
            "Exception raising"
          ],
          "answer": "Concise list creation",
          "explain": "List comprehensions create lists compactly and readably."
        },
        {
          "id": "tech_51",
          "topic": "Python",
          "level": "Easy",
          "company": "GOOG",
          "q": "Which statement handles exceptions?",
          "options": [
            "catch-except",
            "do-except",
            "try-except",
            "error-if"
          ],
          "answer": "try-except",
          "explain": "Python exception handling uses try-except."
        },
        {
          "id": "tech_58",
          "topic": "Python",
          "level": "Medium",
          "company": "GOOG",
          "q": "Which structure removes duplicates automatically?",
          "options": [
            "list",
            "tuple",
            "set",
            "str"
          ],
          "answer": "set",
          "explain": "Sets contain unique elements."
        },
        {
          "id": "tech_65",
          "topic": "Perl",
          "level": "Easy",
          "company": "GOOG",
          "q": "Which operator matches a regex pattern?",
          "options": [
            "=~",
            "==",
            "=>",
            "~~"
          ],
          "answer": "=~",
          "explain": "The =~ operator binds a string to a regex match."
        },
        {
          "id": "tech_72",
          "topic": "Perl",
          "level": "Medium",
          "company": "GOOG",
          "q": "Which symbol prefixes an array?",
          "options": [
            "$",
            "@",
            "%",
            "*"
          ],
          "answer": "@",
          "explain": "Arrays use the @ sigil."
        },
        {
          "id": "tech_79",
          "topic": "Perl",
          "level": "Hard",
          "company": "GOOG",
          "q": "Which built-in function opens files?",
          "options": [
            "open",
            "readfile",
            "attach",
            "load"
          ],
          "answer": "open",
          "explain": "open is used to open files and filehandles."
        },
        {
          "id": "per_6",
          "topic": "Percentages",
          "level": "Hard",
          "company": "NVIDIA",
          "q": "What is 10% of 170?",
          "options": [
            "12",
            "17",
            "22",
            "27"
          ],
          "answer": "17",
          "explain": "Convert 10% to 10/100 and multiply: 170 × 10/100 = 17."
        },
        {
          "id": "per_13",
          "topic": "Percentages",
          "level": "Easy",
          "company": "NVIDIA",
          "q": "What is 20% of 240?",
          "options": [
            "43",
            "48",
            "53",
            "58"
          ],
          "answer": "48",
          "explain": "Convert 20% to 20/100 and multiply: 240 × 20/100 = 48."
        },
        {
          "id": "per_20",
          "topic": "Percentages",
          "level": "Medium",
          "company": "NVIDIA",
          "q": "What is 30% of 310?",
          "options": [
            "88",
            "93",
            "98",
            "103"
          ],
          "answer": "93",
          "explain": "Convert 30% to 30/100 and multiply: 310 × 30/100 = 93."
        },
        {
          "id": "pro_27",
          "topic": "Profit and Loss",
          "level": "Medium",
          "company": "Infosys",
          "q": "An article has cost price ₹152. It is sold at a profit of 15%. What is the selling price?",
          "options": [
            "175",
            "183",
            "167",
            "187"
          ],
          "answer": "175",
          "explain": "Selling price = CP × (100 + profit%)/100 = 152 × 115/100 = ₹175."
        },
        {
          "id": "pro_34",
          "topic": "Profit and Loss",
          "level": "Hard",
          "company": "Infosys",
          "q": "An article has cost price ₹236. It is sold at a profit of 25%. What is the selling price?",
          "options": [
            "295",
            "303",
            "287",
            "307"
          ],
          "answer": "295",
          "explain": "Selling price = CP × (100 + profit%)/100 = 236 × 125/100 = ₹295."
        }
      ]
    },
    {
      "id": "mock_17",
      "title": "Placement Mock Test 17",
      "desc": "30-minute mixed mock covering aptitude, logic, and technical basics. Difficulty blend tuned for fresher interviews.",
      "durationMinutes": 30,
      "questions": [
        {
          "id": "dir_57",
          "topic": "Direction Sense",
          "level": "Medium",
          "company": "AMD",
          "q": "Ravi walks 4 km south and then 4 km west. In which direction is he from the starting point?",
          "options": [
            "South-West",
            "North-West",
            "South-West",
            "North-East"
          ],
          "answer": "South-West",
          "explain": "The final point is below and left of the start, so it is South-West."
        },
        {
          "id": "dir_64",
          "topic": "Direction Sense",
          "level": "Hard",
          "company": "AMD",
          "q": "Aman walks 3 km west and then 7 km north. In which direction is he from the start?",
          "options": [
            "North-West",
            "North-West",
            "South-West",
            "North-East"
          ],
          "answer": "North-West",
          "explain": "West plus north gives North-West."
        },
        {
          "id": "syl_71",
          "topic": "Syllogisms",
          "level": "Medium",
          "company": "AMD",
          "q": "Statements: All coders are problem solvers. Some students are coders. Which conclusion follows?",
          "options": [
            "Some students are problem solvers",
            "All students are coders",
            "Some bugs are features",
            "None follows"
          ],
          "answer": "Some students are problem solvers",
          "explain": "If some students are coders and all coders are problem solvers, those students are problem solvers."
        },
        {
          "id": "syl_78",
          "topic": "Syllogisms",
          "level": "Hard",
          "company": "AMD",
          "q": "Statements: Some apps are scalable. All scalable products are tested. Which conclusion follows?",
          "options": [
            "Some apps are tested",
            "All students are coders",
            "Some bugs are features",
            "None follows"
          ],
          "answer": "Some apps are tested",
          "explain": "Some apps belong to the scalable set, and all scalable products are tested."
        },
        {
          "id": "sea_85",
          "topic": "Seating Arrangement",
          "level": "Easy",
          "company": "GOOG",
          "q": "M is second from the left in a row of five. Which position is M in?",
          "options": [
            "Position 2",
            "A",
            "Position 5",
            "No one"
          ],
          "answer": "Position 2",
          "explain": "Counting from left, second means position 2."
        },
        {
          "id": "sta_92",
          "topic": "Statement and Conclusion",
          "level": "Medium",
          "company": "TCS",
          "q": "Statement: If code is tested, defects reduce. The code was tested. Conclusion: Defects reduce.",
          "options": [
            "Conclusion follows",
            "Neither statement nor conclusion",
            "Both follow",
            "Conclusion is opposite"
          ],
          "answer": "Conclusion follows",
          "explain": "This matches the given conditional statement directly."
        },
        {
          "id": "sta_99",
          "topic": "Statement and Conclusion",
          "level": "Hard",
          "company": "TCS",
          "q": "Statement: No late candidate is selected. Amit was selected. Conclusion: Amit was not late.",
          "options": [
            "Conclusion follows",
            "Neither statement nor conclusion",
            "Both follow",
            "Conclusion is opposite"
          ],
          "answer": "Conclusion follows",
          "explain": "Contrapositive reasoning applies: selected implies not late."
        },
        {
          "id": "tech_6",
          "topic": "C++",
          "level": "Hard",
          "company": "NVIDIA",
          "q": "Which complexity is expected for lookup in unordered_map on average?",
          "options": [
            "O(1)",
            "O(n log n)",
            "O(log n)",
            "O(n²)"
          ],
          "answer": "O(1)",
          "explain": "Hash-table based unordered_map gives average constant-time lookup."
        },
        {
          "id": "tech_13",
          "topic": "C++",
          "level": "Easy",
          "company": "NVIDIA",
          "q": "Which keyword is used to define a constant member function?",
          "options": [
            "final",
            "static",
            "const",
            "volatile"
          ],
          "answer": "const",
          "explain": "A const member function promises not to modify object state."
        },
        {
          "id": "tech_20",
          "topic": "C++",
          "level": "Medium",
          "company": "NVIDIA",
          "q": "Which keyword prevents a derived class method from overriding a base class method further?",
          "options": [
            "final",
            "const",
            "virtual",
            "static"
          ],
          "answer": "final",
          "explain": "The final specifier prevents further overriding."
        },
        {
          "id": "tech_27",
          "topic": "C++",
          "level": "Hard",
          "company": "NVIDIA",
          "q": "What is the default access specifier in a class?",
          "options": [
            "public",
            "protected",
            "private",
            "internal"
          ],
          "answer": "private",
          "explain": "Members of a class are private by default."
        },
        {
          "id": "tech_34",
          "topic": "Python",
          "level": "Medium",
          "company": "General",
          "q": "Which collection stores key-value pairs?",
          "options": [
            "list",
            "set",
            "dict",
            "tuple"
          ],
          "answer": "dict",
          "explain": "A dictionary stores key-value mappings."
        },
        {
          "id": "tech_41",
          "topic": "Python",
          "level": "Hard",
          "company": "General",
          "q": "Which operator checks membership?",
          "options": [
            "->",
            "in",
            "is not",
            "@"
          ],
          "answer": "in",
          "explain": "The in operator checks whether an element exists in a container."
        },
        {
          "id": "tech_48",
          "topic": "Python",
          "level": "Easy",
          "company": "General",
          "q": "Which keyword is used to define a function?",
          "options": [
            "func",
            "define",
            "def",
            "lambda"
          ],
          "answer": "def",
          "explain": "Functions are declared with def."
        },
        {
          "id": "tech_55",
          "topic": "Python",
          "level": "Medium",
          "company": "General",
          "q": "Which of these is immutable?",
          "options": [
            "list",
            "dict",
            "set",
            "tuple"
          ],
          "answer": "tuple",
          "explain": "Tuples cannot be changed after creation."
        },
        {
          "id": "tech_62",
          "topic": "Perl",
          "level": "Easy",
          "company": "General",
          "q": "Which symbol prefixes an array?",
          "options": [
            "$",
            "@",
            "%",
            "*"
          ],
          "answer": "@",
          "explain": "Arrays use the @ sigil."
        },
        {
          "id": "tech_69",
          "topic": "Perl",
          "level": "Medium",
          "company": "General",
          "q": "Which built-in function opens files?",
          "options": [
            "open",
            "readfile",
            "attach",
            "load"
          ],
          "answer": "open",
          "explain": "open is used to open files and filehandles."
        },
        {
          "id": "tech_76",
          "topic": "Perl",
          "level": "Hard",
          "company": "General",
          "q": "What does chomp do?",
          "options": [
            "Deletes file",
            "Removes trailing newline",
            "Sorts array",
            "Adds whitespace"
          ],
          "answer": "Removes trailing newline",
          "explain": "chomp removes a trailing input record separator, usually a newline."
        },
        {
          "id": "per_3",
          "topic": "Percentages",
          "level": "Hard",
          "company": "GOOG",
          "q": "What is 20% of 140?",
          "options": [
            "23",
            "28",
            "33",
            "38"
          ],
          "answer": "28",
          "explain": "Convert 20% to 20/100 and multiply: 140 × 20/100 = 28."
        },
        {
          "id": "per_10",
          "topic": "Percentages",
          "level": "Easy",
          "company": "GOOG",
          "q": "What is 30% of 210?",
          "options": [
            "58",
            "63",
            "68",
            "73"
          ],
          "answer": "63",
          "explain": "Convert 30% to 30/100 and multiply: 210 × 30/100 = 63."
        },
        {
          "id": "per_17",
          "topic": "Percentages",
          "level": "Medium",
          "company": "GOOG",
          "q": "What is 15% of 280?",
          "options": [
            "37",
            "42",
            "47",
            "52"
          ],
          "answer": "42",
          "explain": "Convert 15% to 15/100 and multiply: 280 × 15/100 = 42."
        },
        {
          "id": "pro_24",
          "topic": "Profit and Loss",
          "level": "Medium",
          "company": "NVIDIA",
          "q": "An article has cost price ₹116. It is sold at a profit of 25%. What is the selling price?",
          "options": [
            "145",
            "153",
            "137",
            "157"
          ],
          "answer": "145",
          "explain": "Selling price = CP × (100 + profit%)/100 = 116 × 125/100 = ₹145."
        },
        {
          "id": "pro_31",
          "topic": "Profit and Loss",
          "level": "Hard",
          "company": "NVIDIA",
          "q": "An article has cost price ₹200. It is sold at a profit of 10%. What is the selling price?",
          "options": [
            "220",
            "228",
            "212",
            "232"
          ],
          "answer": "220",
          "explain": "Selling price = CP × (100 + profit%)/100 = 200 × 110/100 = ₹220."
        },
        {
          "id": "pro_38",
          "topic": "Profit and Loss",
          "level": "Easy",
          "company": "NVIDIA",
          "q": "An article has cost price ₹284. It is sold at a profit of 20%. What is the selling price?",
          "options": [
            "341",
            "349",
            "333",
            "353"
          ],
          "answer": "341",
          "explain": "Selling price = CP × (100 + profit%)/100 = 284 × 120/100 = ₹341."
        },
        {
          "id": "ave_45",
          "topic": "Averages",
          "level": "Easy",
          "company": "Infosys",
          "q": "Find the average of 14, 18, 22, and 26.",
          "options": [
            "20",
            "21",
            "22",
            "19"
          ],
          "answer": "20",
          "explain": "Average = sum of observations / number of observations = 80/4 = 20."
        }
      ]
    },
    {
      "id": "mock_18",
      "title": "Placement Mock Test 18",
      "desc": "30-minute mixed mock covering aptitude, logic, and technical basics. Difficulty blend tuned for fresher interviews.",
      "durationMinutes": 30,
      "questions": [
        {
          "id": "dir_68",
          "topic": "Direction Sense",
          "level": "Easy",
          "company": "Infosys",
          "q": "Anita walks 6 km east, then 2 km north. In which direction is she from the starting point?",
          "options": [
            "North-East",
            "North-West",
            "South-West",
            "North-East"
          ],
          "answer": "North-East",
          "explain": "East plus north gives a North-East position."
        },
        {
          "id": "syl_75",
          "topic": "Syllogisms",
          "level": "Hard",
          "company": "Infosys",
          "q": "Statements: No bugs are features. Some features are requested. Which conclusion follows?",
          "options": [
            "Some requested items are not bugs",
            "All students are coders",
            "Some bugs are features",
            "None follows"
          ],
          "answer": "Some requested items are not bugs",
          "explain": "Requested features are features, and no feature is a bug."
        },
        {
          "id": "sea_82",
          "topic": "Seating Arrangement",
          "level": "Easy",
          "company": "General",
          "q": "In a row of five seats, R is to the immediate left of S. Which statement is true?",
          "options": [
            "S is to the immediate right of R",
            "A",
            "Position 5",
            "No one"
          ],
          "answer": "S is to the immediate right of R",
          "explain": "Immediate left/right relations are exact opposites."
        },
        {
          "id": "sea_89",
          "topic": "Seating Arrangement",
          "level": "Medium",
          "company": "General",
          "q": "L sits at one end of a row. Which statement must be true?",
          "options": [
            "L has only one adjacent seat",
            "A",
            "Position 5",
            "No one"
          ],
          "answer": "L has only one adjacent seat",
          "explain": "At an end position, there is only one neighbor."
        },
        {
          "id": "sta_96",
          "topic": "Statement and Conclusion",
          "level": "Hard",
          "company": "AMD",
          "q": "Statement: All interview-ready candidates revise regularly. Rohan revises regularly. Conclusion: Rohan is interview-ready.",
          "options": [
            "Conclusion does not definitely follow",
            "Neither statement nor conclusion",
            "Both follow",
            "Conclusion is opposite"
          ],
          "answer": "Conclusion does not definitely follow",
          "explain": "The statement gives a one-way condition; revising regularly alone does not prove interview-readiness."
        },
        {
          "id": "tech_3",
          "topic": "C++",
          "level": "Hard",
          "company": "GOOG",
          "q": "What does STL stand for?",
          "options": [
            "Standard Template Library",
            "Structured Type Library",
            "System Template Logic",
            "Simple Type List"
          ],
          "answer": "Standard Template Library",
          "explain": "STL in C++ expands to Standard Template Library."
        },
        {
          "id": "tech_10",
          "topic": "C++",
          "level": "Easy",
          "company": "GOOG",
          "q": "Which header is commonly used for dynamic arrays in STL?",
          "options": [
            "<queue>",
            "<vector>",
            "<map>",
            "<stack>"
          ],
          "answer": "<vector>",
          "explain": "The vector container from <vector> is a dynamic array."
        },
        {
          "id": "tech_17",
          "topic": "C++",
          "level": "Medium",
          "company": "GOOG",
          "q": "Which symbol is used to access members of an object through a pointer in C++?",
          "options": [
            ".",
            "::",
            "->",
            "*"
          ],
          "answer": "->",
          "explain": "The arrow operator is used when accessing object members via a pointer."
        },
        {
          "id": "tech_24",
          "topic": "C++",
          "level": "Hard",
          "company": "GOOG",
          "q": "Which keyword creates a reference variable?",
          "options": [
            "ptr",
            "ref",
            "&",
            "*"
          ],
          "answer": "&",
          "explain": "References are declared using the & symbol."
        },
        {
          "id": "tech_31",
          "topic": "Python",
          "level": "Medium",
          "company": "MSFT",
          "q": "Which data type is mutable?",
          "options": [
            "tuple",
            "string",
            "list",
            "frozenset"
          ],
          "answer": "list",
          "explain": "Lists can be modified in place."
        },
        {
          "id": "tech_38",
          "topic": "Python",
          "level": "Hard",
          "company": "MSFT",
          "q": "Which method adds one item to a list?",
          "options": [
            "append()",
            "add()",
            "push()",
            "insertall()"
          ],
          "answer": "append()",
          "explain": "append() adds a single item to the end of a list."
        },
        {
          "id": "tech_45",
          "topic": "Python",
          "level": "Easy",
          "company": "MSFT",
          "q": "Which method sorts a list in place?",
          "options": [
            "sorted()",
            "sort()",
            "arrange()",
            "order()"
          ],
          "answer": "sort()",
          "explain": "sort() modifies the original list; sorted() returns a new list."
        },
        {
          "id": "tech_52",
          "topic": "Python",
          "level": "Medium",
          "company": "MSFT",
          "q": "What is a lambda?",
          "options": [
            "Named class",
            "Anonymous function",
            "Loop type",
            "Module"
          ],
          "answer": "Anonymous function",
          "explain": "lambda creates a small anonymous function."
        },
        {
          "id": "tech_59",
          "topic": "Python",
          "level": "Hard",
          "company": "MSFT",
          "q": "What is list comprehension mainly used for?",
          "options": [
            "Defining classes",
            "Concise list creation",
            "Networking",
            "Exception raising"
          ],
          "answer": "Concise list creation",
          "explain": "List comprehensions create lists compactly and readably."
        },
        {
          "id": "tech_66",
          "topic": "Perl",
          "level": "Medium",
          "company": "MSFT",
          "q": "What does chomp do?",
          "options": [
            "Deletes file",
            "Removes trailing newline",
            "Sorts array",
            "Adds whitespace"
          ],
          "answer": "Removes trailing newline",
          "explain": "chomp removes a trailing input record separator, usually a newline."
        },
        {
          "id": "tech_73",
          "topic": "Perl",
          "level": "Hard",
          "company": "MSFT",
          "q": "Which symbol prefixes a hash?",
          "options": [
            "#",
            "%",
            "&",
            "@"
          ],
          "answer": "%",
          "explain": "Hashes use the % sigil."
        },
        {
          "id": "tech_80",
          "topic": "Perl",
          "level": "Easy",
          "company": "MSFT",
          "q": "Why is regex skill useful in Perl interviews?",
          "options": [
            "It is never used",
            "Many scripting tasks rely on pattern matching",
            "Only GUI design needs it",
            "Perl has no regex"
          ],
          "answer": "Many scripting tasks rely on pattern matching",
          "explain": "Pattern matching is one of Perl's strongest practical uses."
        },
        {
          "id": "per_7",
          "topic": "Percentages",
          "level": "Easy",
          "company": "General",
          "q": "What is 15% of 180?",
          "options": [
            "22",
            "27",
            "32",
            "37"
          ],
          "answer": "27",
          "explain": "Convert 15% to 15/100 and multiply: 180 × 15/100 = 27."
        },
        {
          "id": "per_14",
          "topic": "Percentages",
          "level": "Medium",
          "company": "General",
          "q": "What is 25% of 250?",
          "options": [
            "57",
            "62",
            "67",
            "72"
          ],
          "answer": "62",
          "explain": "Convert 25% to 25/100 and multiply: 250 × 25/100 = 62."
        },
        {
          "id": "pro_21",
          "topic": "Profit and Loss",
          "level": "Medium",
          "company": "GOOG",
          "q": "An article has cost price ₹80. It is sold at a profit of 10%. What is the selling price?",
          "options": [
            "88",
            "96",
            "80",
            "100"
          ],
          "answer": "88",
          "explain": "Selling price = CP × (100 + profit%)/100 = 80 × 110/100 = ₹88."
        },
        {
          "id": "pro_28",
          "topic": "Profit and Loss",
          "level": "Hard",
          "company": "GOOG",
          "q": "An article has cost price ₹164. It is sold at a profit of 20%. What is the selling price?",
          "options": [
            "197",
            "205",
            "189",
            "209"
          ],
          "answer": "197",
          "explain": "Selling price = CP × (100 + profit%)/100 = 164 × 120/100 = ₹197."
        },
        {
          "id": "pro_35",
          "topic": "Profit and Loss",
          "level": "Easy",
          "company": "GOOG",
          "q": "An article has cost price ₹248. It is sold at a profit of 12%. What is the selling price?",
          "options": [
            "278",
            "286",
            "270",
            "290"
          ],
          "answer": "278",
          "explain": "Selling price = CP × (100 + profit%)/100 = 248 × 112/100 = ₹278."
        },
        {
          "id": "ave_42",
          "topic": "Averages",
          "level": "Easy",
          "company": "NVIDIA",
          "q": "Find the average of 11, 15, 19, and 23.",
          "options": [
            "17",
            "18",
            "19",
            "16"
          ],
          "answer": "17",
          "explain": "Average = sum of observations / number of observations = 68/4 = 17."
        },
        {
          "id": "ave_49",
          "topic": "Averages",
          "level": "Medium",
          "company": "NVIDIA",
          "q": "Find the average of 18, 22, 26, and 30.",
          "options": [
            "24",
            "25",
            "26",
            "23"
          ],
          "answer": "24",
          "explain": "Average = sum of observations / number of observations = 96/4 = 24."
        },
        {
          "id": "ave_56",
          "topic": "Averages",
          "level": "Hard",
          "company": "NVIDIA",
          "q": "Find the average of 25, 29, 33, and 37.",
          "options": [
            "31",
            "32",
            "33",
            "30"
          ],
          "answer": "31",
          "explain": "Average = sum of observations / number of observations = 124/4 = 31."
        }
      ]
    },
    {
      "id": "mock_19",
      "title": "Placement Mock Test 19",
      "desc": "30-minute mixed mock covering aptitude, logic, and technical basics. Difficulty blend tuned for fresher interviews.",
      "durationMinutes": 30,
      "questions": [
        {
          "id": "syl_79",
          "topic": "Syllogisms",
          "level": "Easy",
          "company": "NVIDIA",
          "q": "Statements: All APIs are interfaces. Some interfaces are public. Which conclusion definitely follows?",
          "options": [
            "No definite conclusion about APIs being public",
            "All students are coders",
            "Some bugs are features",
            "None follows"
          ],
          "answer": "No definite conclusion about APIs being public",
          "explain": "We only know some interfaces are public; we do not know whether those interfaces are APIs."
        },
        {
          "id": "sea_86",
          "topic": "Seating Arrangement",
          "level": "Medium",
          "company": "MSFT",
          "q": "Five friends A, B, C, D, and E sit in a row. A sits left of B and B sits left of C. Who is definitely to the right of A?",
          "options": [
            "B",
            "A",
            "Position 5",
            "No one"
          ],
          "answer": "B",
          "explain": "Since A is left of B, B is definitely to A's right."
        },
        {
          "id": "sta_93",
          "topic": "Statement and Conclusion",
          "level": "Hard",
          "company": "Infosys",
          "q": "Statement: Some graduates know Python. Every Python learner can write scripts. Conclusion: Some graduates can write scripts.",
          "options": [
            "Conclusion follows",
            "Neither statement nor conclusion",
            "Both follow",
            "Conclusion is opposite"
          ],
          "answer": "Conclusion follows",
          "explain": "Graduates who know Python belong to the Python learner set and can write scripts."
        },
        {
          "id": "sta_100",
          "topic": "Statement and Conclusion",
          "level": "Easy",
          "company": "Infosys",
          "q": "Statement: All strong resumes are concise. This resume is concise. Conclusion: This resume is strong.",
          "options": [
            "Conclusion does not definitely follow",
            "Neither statement nor conclusion",
            "Both follow",
            "Conclusion is opposite"
          ],
          "answer": "Conclusion does not definitely follow",
          "explain": "Being concise is necessary here, but not sufficient."
        },
        {
          "id": "tech_7",
          "topic": "C++",
          "level": "Easy",
          "company": "General",
          "q": "What is recursion?",
          "options": [
            "A loop with break",
            "A function calling itself",
            "A sorting method only",
            "A memory leak"
          ],
          "answer": "A function calling itself",
          "explain": "Recursion solves a problem by defining it in terms of smaller subproblems."
        },
        {
          "id": "tech_14",
          "topic": "C++",
          "level": "Medium",
          "company": "General",
          "q": "What is function overloading?",
          "options": [
            "Using one function many times",
            "Same function name with different parameter lists",
            "Overwriting a file",
            "Running two functions together"
          ],
          "answer": "Same function name with different parameter lists",
          "explain": "Overloading is compile-time polymorphism using different signatures."
        },
        {
          "id": "tech_21",
          "topic": "C++",
          "level": "Hard",
          "company": "General",
          "q": "Which complexity is expected for lookup in unordered_map on average?",
          "options": [
            "O(1)",
            "O(n log n)",
            "O(log n)",
            "O(n²)"
          ],
          "answer": "O(1)",
          "explain": "Hash-table based unordered_map gives average constant-time lookup."
        },
        {
          "id": "tech_28",
          "topic": "C++",
          "level": "Easy",
          "company": "General",
          "q": "Which keyword is used to define a constant member function?",
          "options": [
            "final",
            "static",
            "const",
            "volatile"
          ],
          "answer": "const",
          "explain": "A const member function promises not to modify object state."
        },
        {
          "id": "tech_35",
          "topic": "Python",
          "level": "Hard",
          "company": "TCS",
          "q": "What is the output type of range(5)?",
          "options": [
            "list",
            "tuple",
            "range object",
            "set"
          ],
          "answer": "range object",
          "explain": "range() returns a range object in Python 3."
        },
        {
          "id": "tech_42",
          "topic": "Python",
          "level": "Easy",
          "company": "TCS",
          "q": "Which function opens a file?",
          "options": [
            "open()",
            "read()",
            "file()",
            "load()"
          ],
          "answer": "open()",
          "explain": "open() returns a file handle."
        },
        {
          "id": "tech_49",
          "topic": "Python",
          "level": "Medium",
          "company": "TCS",
          "q": "Which collection stores key-value pairs?",
          "options": [
            "list",
            "set",
            "dict",
            "tuple"
          ],
          "answer": "dict",
          "explain": "A dictionary stores key-value mappings."
        },
        {
          "id": "tech_56",
          "topic": "Python",
          "level": "Hard",
          "company": "TCS",
          "q": "Which operator checks membership?",
          "options": [
            "->",
            "in",
            "is not",
            "@"
          ],
          "answer": "in",
          "explain": "The in operator checks whether an element exists in a container."
        },
        {
          "id": "tech_63",
          "topic": "Perl",
          "level": "Medium",
          "company": "TCS",
          "q": "Which symbol prefixes a hash?",
          "options": [
            "#",
            "%",
            "&",
            "@"
          ],
          "answer": "%",
          "explain": "Hashes use the % sigil."
        },
        {
          "id": "tech_70",
          "topic": "Perl",
          "level": "Hard",
          "company": "TCS",
          "q": "Why is regex skill useful in Perl interviews?",
          "options": [
            "It is never used",
            "Many scripting tasks rely on pattern matching",
            "Only GUI design needs it",
            "Perl has no regex"
          ],
          "answer": "Many scripting tasks rely on pattern matching",
          "explain": "Pattern matching is one of Perl's strongest practical uses."
        },
        {
          "id": "tech_77",
          "topic": "Perl",
          "level": "Easy",
          "company": "TCS",
          "q": "Which keyword prints output?",
          "options": [
            "echo",
            "print",
            "show",
            "display"
          ],
          "answer": "print",
          "explain": "print is commonly used for output in Perl."
        },
        {
          "id": "per_4",
          "topic": "Percentages",
          "level": "Easy",
          "company": "MSFT",
          "q": "What is 25% of 150?",
          "options": [
            "32",
            "37",
            "42",
            "47"
          ],
          "answer": "37",
          "explain": "Convert 25% to 25/100 and multiply: 150 × 25/100 = 37."
        },
        {
          "id": "per_11",
          "topic": "Percentages",
          "level": "Medium",
          "company": "MSFT",
          "q": "What is 10% of 220?",
          "options": [
            "17",
            "22",
            "27",
            "32"
          ],
          "answer": "22",
          "explain": "Convert 10% to 10/100 and multiply: 220 × 10/100 = 22."
        },
        {
          "id": "per_18",
          "topic": "Percentages",
          "level": "Hard",
          "company": "MSFT",
          "q": "What is 20% of 290?",
          "options": [
            "53",
            "58",
            "63",
            "68"
          ],
          "answer": "58",
          "explain": "Convert 20% to 20/100 and multiply: 290 × 20/100 = 58."
        },
        {
          "id": "pro_25",
          "topic": "Profit and Loss",
          "level": "Hard",
          "company": "General",
          "q": "An article has cost price ₹128. It is sold at a profit of 12%. What is the selling price?",
          "options": [
            "143",
            "151",
            "135",
            "155"
          ],
          "answer": "143",
          "explain": "Selling price = CP × (100 + profit%)/100 = 128 × 112/100 = ₹143."
        },
        {
          "id": "pro_32",
          "topic": "Profit and Loss",
          "level": "Easy",
          "company": "General",
          "q": "An article has cost price ₹212. It is sold at a profit of 15%. What is the selling price?",
          "options": [
            "244",
            "252",
            "236",
            "256"
          ],
          "answer": "244",
          "explain": "Selling price = CP × (100 + profit%)/100 = 212 × 115/100 = ₹244."
        },
        {
          "id": "pro_39",
          "topic": "Profit and Loss",
          "level": "Medium",
          "company": "General",
          "q": "An article has cost price ₹296. It is sold at a profit of 25%. What is the selling price?",
          "options": [
            "370",
            "378",
            "362",
            "382"
          ],
          "answer": "370",
          "explain": "Selling price = CP × (100 + profit%)/100 = 296 × 125/100 = ₹370."
        },
        {
          "id": "ave_46",
          "topic": "Averages",
          "level": "Medium",
          "company": "GOOG",
          "q": "Find the average of 15, 19, 23, and 27.",
          "options": [
            "21",
            "22",
            "23",
            "20"
          ],
          "answer": "21",
          "explain": "Average = sum of observations / number of observations = 84/4 = 21."
        },
        {
          "id": "ave_53",
          "topic": "Averages",
          "level": "Hard",
          "company": "GOOG",
          "q": "Find the average of 22, 26, 30, and 34.",
          "options": [
            "28",
            "29",
            "30",
            "27"
          ],
          "answer": "28",
          "explain": "Average = sum of observations / number of observations = 112/4 = 28."
        },
        {
          "id": "ave_60",
          "topic": "Averages",
          "level": "Easy",
          "company": "GOOG",
          "q": "Find the average of 29, 33, 37, and 41.",
          "options": [
            "35",
            "36",
            "37",
            "34"
          ],
          "answer": "35",
          "explain": "Average = sum of observations / number of observations = 140/4 = 35."
        },
        {
          "id": "rat_67",
          "topic": "Ratio and Proportion",
          "level": "Easy",
          "company": "TCS",
          "q": "The ratio of boys to girls is 3:6. If the total number of students is 54, how many boys are there?",
          "options": [
            "18",
            "27",
            "9",
            "20"
          ],
          "answer": "18",
          "explain": "Total parts = 9. One part = 54/(9) = 6. Boys = 3 × 6 = 18."
        }
      ]
    },
    {
      "id": "mock_20",
      "title": "Placement Mock Test 20",
      "desc": "30-minute mixed mock covering aptitude, logic, and technical basics. Difficulty blend tuned for fresher interviews.",
      "durationMinutes": 30,
      "questions": [
        {
          "id": "sea_90",
          "topic": "Seating Arrangement",
          "level": "Hard",
          "company": "TCS",
          "q": "M is second from the left in a row of five. Which position is M in?",
          "options": [
            "Position 2",
            "A",
            "Position 5",
            "No one"
          ],
          "answer": "Position 2",
          "explain": "Counting from left, second means position 2."
        },
        {
          "id": "sta_97",
          "topic": "Statement and Conclusion",
          "level": "Easy",
          "company": "NVIDIA",
          "q": "Statement: If code is tested, defects reduce. The code was tested. Conclusion: Defects reduce.",
          "options": [
            "Conclusion follows",
            "Neither statement nor conclusion",
            "Both follow",
            "Conclusion is opposite"
          ],
          "answer": "Conclusion follows",
          "explain": "This matches the given conditional statement directly."
        },
        {
          "id": "tech_4",
          "topic": "C++",
          "level": "Easy",
          "company": "MSFT",
          "q": "Which container stores unique sorted keys?",
          "options": [
            "vector",
            "queue",
            "set",
            "stack"
          ],
          "answer": "set",
          "explain": "A set stores unique keys in sorted order."
        },
        {
          "id": "tech_11",
          "topic": "C++",
          "level": "Medium",
          "company": "MSFT",
          "q": "Which OOP concept hides implementation details?",
          "options": [
            "Abstraction",
            "Friendship",
            "Compilation",
            "Templates"
          ],
          "answer": "Abstraction",
          "explain": "Abstraction exposes essentials and hides internal details."
        },
        {
          "id": "tech_18",
          "topic": "C++",
          "level": "Hard",
          "company": "MSFT",
          "q": "What does STL stand for?",
          "options": [
            "Standard Template Library",
            "Structured Type Library",
            "System Template Logic",
            "Simple Type List"
          ],
          "answer": "Standard Template Library",
          "explain": "STL in C++ expands to Standard Template Library."
        },
        {
          "id": "tech_25",
          "topic": "C++",
          "level": "Easy",
          "company": "MSFT",
          "q": "Which header is commonly used for dynamic arrays in STL?",
          "options": [
            "<queue>",
            "<vector>",
            "<map>",
            "<stack>"
          ],
          "answer": "<vector>",
          "explain": "The vector container from <vector> is a dynamic array."
        },
        {
          "id": "tech_32",
          "topic": "Python",
          "level": "Hard",
          "company": "AMD",
          "q": "What does len() return?",
          "options": [
            "Index",
            "Length",
            "Type",
            "Memory size only"
          ],
          "answer": "Length",
          "explain": "len() returns the number of items in a sequence or collection."
        },
        {
          "id": "tech_39",
          "topic": "Python",
          "level": "Easy",
          "company": "AMD",
          "q": "What does __init__ do?",
          "options": [
            "Starts interpreter",
            "Initializes an object",
            "Closes file",
            "Prints object"
          ],
          "answer": "Initializes an object",
          "explain": "__init__ is the initializer called on object creation."
        },
        {
          "id": "tech_46",
          "topic": "Python",
          "level": "Medium",
          "company": "AMD",
          "q": "Which data type is mutable?",
          "options": [
            "tuple",
            "string",
            "list",
            "frozenset"
          ],
          "answer": "list",
          "explain": "Lists can be modified in place."
        },
        {
          "id": "tech_53",
          "topic": "Python",
          "level": "Hard",
          "company": "AMD",
          "q": "Which method adds one item to a list?",
          "options": [
            "append()",
            "add()",
            "push()",
            "insertall()"
          ],
          "answer": "append()",
          "explain": "append() adds a single item to the end of a list."
        },
        {
          "id": "tech_60",
          "topic": "Python",
          "level": "Easy",
          "company": "AMD",
          "q": "Which method sorts a list in place?",
          "options": [
            "sorted()",
            "sort()",
            "arrange()",
            "order()"
          ],
          "answer": "sort()",
          "explain": "sort() modifies the original list; sorted() returns a new list."
        },
        {
          "id": "tech_67",
          "topic": "Perl",
          "level": "Hard",
          "company": "AMD",
          "q": "Which keyword prints output?",
          "options": [
            "echo",
            "print",
            "show",
            "display"
          ],
          "answer": "print",
          "explain": "print is commonly used for output in Perl."
        },
        {
          "id": "tech_74",
          "topic": "Perl",
          "level": "Easy",
          "company": "AMD",
          "q": "What is Perl especially known for?",
          "options": [
            "Game engines only",
            "Text processing and regex",
            "Mobile app stores",
            "Binary firmware only"
          ],
          "answer": "Text processing and regex",
          "explain": "Perl is widely known for strong text processing capabilities."
        },
        {
          "id": "per_1",
          "topic": "Percentages",
          "level": "Easy",
          "company": "TCS",
          "q": "What is 10% of 120?",
          "options": [
            "7",
            "12",
            "17",
            "22"
          ],
          "answer": "12",
          "explain": "Convert 10% to 10/100 and multiply: 120 × 10/100 = 12."
        },
        {
          "id": "per_8",
          "topic": "Percentages",
          "level": "Medium",
          "company": "TCS",
          "q": "What is 20% of 190?",
          "options": [
            "33",
            "38",
            "43",
            "48"
          ],
          "answer": "38",
          "explain": "Convert 20% to 20/100 and multiply: 190 × 20/100 = 38."
        },
        {
          "id": "per_15",
          "topic": "Percentages",
          "level": "Hard",
          "company": "TCS",
          "q": "What is 30% of 260?",
          "options": [
            "73",
            "78",
            "83",
            "88"
          ],
          "answer": "78",
          "explain": "Convert 30% to 30/100 and multiply: 260 × 30/100 = 78."
        },
        {
          "id": "pro_22",
          "topic": "Profit and Loss",
          "level": "Hard",
          "company": "MSFT",
          "q": "An article has cost price ₹92. It is sold at a profit of 15%. What is the selling price?",
          "options": [
            "106",
            "114",
            "98",
            "118"
          ],
          "answer": "106",
          "explain": "Selling price = CP × (100 + profit%)/100 = 92 × 115/100 = ₹106."
        },
        {
          "id": "pro_29",
          "topic": "Profit and Loss",
          "level": "Easy",
          "company": "MSFT",
          "q": "An article has cost price ₹176. It is sold at a profit of 25%. What is the selling price?",
          "options": [
            "220",
            "228",
            "212",
            "232"
          ],
          "answer": "220",
          "explain": "Selling price = CP × (100 + profit%)/100 = 176 × 125/100 = ₹220."
        },
        {
          "id": "pro_36",
          "topic": "Profit and Loss",
          "level": "Medium",
          "company": "MSFT",
          "q": "An article has cost price ₹260. It is sold at a profit of 10%. What is the selling price?",
          "options": [
            "286",
            "294",
            "278",
            "298"
          ],
          "answer": "286",
          "explain": "Selling price = CP × (100 + profit%)/100 = 260 × 110/100 = ₹286."
        },
        {
          "id": "ave_43",
          "topic": "Averages",
          "level": "Medium",
          "company": "General",
          "q": "Find the average of 12, 16, 20, and 24.",
          "options": [
            "18",
            "19",
            "20",
            "17"
          ],
          "answer": "18",
          "explain": "Average = sum of observations / number of observations = 72/4 = 18."
        },
        {
          "id": "ave_50",
          "topic": "Averages",
          "level": "Hard",
          "company": "General",
          "q": "Find the average of 19, 23, 27, and 31.",
          "options": [
            "25",
            "26",
            "27",
            "24"
          ],
          "answer": "25",
          "explain": "Average = sum of observations / number of observations = 100/4 = 25."
        },
        {
          "id": "ave_57",
          "topic": "Averages",
          "level": "Easy",
          "company": "General",
          "q": "Find the average of 26, 30, 34, and 38.",
          "options": [
            "32",
            "33",
            "34",
            "31"
          ],
          "answer": "32",
          "explain": "Average = sum of observations / number of observations = 128/4 = 32."
        },
        {
          "id": "rat_64",
          "topic": "Ratio and Proportion",
          "level": "Easy",
          "company": "AMD",
          "q": "The ratio of boys to girls is 5:3. If the total number of students is 56, how many boys are there?",
          "options": [
            "35",
            "43",
            "27",
            "37"
          ],
          "answer": "35",
          "explain": "Total parts = 8. One part = 56/(8) = 7. Boys = 5 × 7 = 35."
        },
        {
          "id": "rat_71",
          "topic": "Ratio and Proportion",
          "level": "Medium",
          "company": "AMD",
          "q": "The ratio of boys to girls is 2:5. If the total number of students is 42, how many boys are there?",
          "options": [
            "12",
            "19",
            "5",
            "16"
          ],
          "answer": "12",
          "explain": "Total parts = 7. One part = 42/(7) = 6. Boys = 2 × 6 = 12."
        },
        {
          "id": "rat_78",
          "topic": "Ratio and Proportion",
          "level": "Hard",
          "company": "AMD",
          "q": "The ratio of boys to girls is 4:7. If the total number of students is 55, how many boys are there?",
          "options": [
            "20",
            "31",
            "9",
            "26"
          ],
          "answer": "20",
          "explain": "Total parts = 11. One part = 55/(11) = 5. Boys = 4 × 5 = 20."
        }
      ]
    },
    {
      "id": "mock_21",
      "title": "Placement Mock Test 21",
      "desc": "30-minute mixed mock covering aptitude, logic, and technical basics. Difficulty blend tuned for fresher interviews.",
      "durationMinutes": 30,
      "questions": [
        {
          "id": "tech_1",
          "topic": "C++",
          "level": "Easy",
          "company": "TCS",
          "q": "Which feature enables one interface to behave differently for different objects?",
          "options": [
            "Polymorphism",
            "Inheritance",
            "Compilation",
            "Linking"
          ],
          "answer": "Polymorphism",
          "explain": "Polymorphism lets the same interface trigger different implementations."
        },
        {
          "id": "tech_8",
          "topic": "C++",
          "level": "Medium",
          "company": "TCS",
          "q": "What happens if a base class destructor is not virtual and you delete a derived object through a base pointer?",
          "options": [
            "Always safe",
            "Only base destructor may run",
            "Compiler error",
            "Program doubles memory"
          ],
          "answer": "Only base destructor may run",
          "explain": "A virtual destructor ensures correct cleanup in inheritance hierarchies."
        },
        {
          "id": "tech_15",
          "topic": "C++",
          "level": "Hard",
          "company": "TCS",
          "q": "Which of these is a LIFO container adaptor?",
          "options": [
            "queue",
            "stack",
            "priority_queue",
            "deque"
          ],
          "answer": "stack",
          "explain": "Stack follows last-in-first-out."
        },
        {
          "id": "tech_22",
          "topic": "C++",
          "level": "Easy",
          "company": "TCS",
          "q": "What is recursion?",
          "options": [
            "A loop with break",
            "A function calling itself",
            "A sorting method only",
            "A memory leak"
          ],
          "answer": "A function calling itself",
          "explain": "Recursion solves a problem by defining it in terms of smaller subproblems."
        },
        {
          "id": "tech_29",
          "topic": "C++",
          "level": "Medium",
          "company": "TCS",
          "q": "What is function overloading?",
          "options": [
            "Using one function many times",
            "Same function name with different parameter lists",
            "Overwriting a file",
            "Running two functions together"
          ],
          "answer": "Same function name with different parameter lists",
          "explain": "Overloading is compile-time polymorphism using different signatures."
        },
        {
          "id": "tech_36",
          "topic": "Python",
          "level": "Easy",
          "company": "Infosys",
          "q": "Which statement handles exceptions?",
          "options": [
            "catch-except",
            "do-except",
            "try-except",
            "error-if"
          ],
          "answer": "try-except",
          "explain": "Python exception handling uses try-except."
        },
        {
          "id": "tech_43",
          "topic": "Python",
          "level": "Medium",
          "company": "Infosys",
          "q": "Which structure removes duplicates automatically?",
          "options": [
            "list",
            "tuple",
            "set",
            "str"
          ],
          "answer": "set",
          "explain": "Sets contain unique elements."
        },
        {
          "id": "tech_50",
          "topic": "Python",
          "level": "Hard",
          "company": "Infosys",
          "q": "What is the output type of range(5)?",
          "options": [
            "list",
            "tuple",
            "range object",
            "set"
          ],
          "answer": "range object",
          "explain": "range() returns a range object in Python 3."
        },
        {
          "id": "tech_57",
          "topic": "Python",
          "level": "Easy",
          "company": "Infosys",
          "q": "Which function opens a file?",
          "options": [
            "open()",
            "read()",
            "file()",
            "load()"
          ],
          "answer": "open()",
          "explain": "open() returns a file handle."
        },
        {
          "id": "tech_64",
          "topic": "Perl",
          "level": "Hard",
          "company": "Infosys",
          "q": "What is Perl especially known for?",
          "options": [
            "Game engines only",
            "Text processing and regex",
            "Mobile app stores",
            "Binary firmware only"
          ],
          "answer": "Text processing and regex",
          "explain": "Perl is widely known for strong text processing capabilities."
        },
        {
          "id": "tech_71",
          "topic": "Perl",
          "level": "Easy",
          "company": "Infosys",
          "q": "Which symbol prefixes a scalar variable in Perl?",
          "options": [
            "$",
            "@",
            "%",
            "&"
          ],
          "answer": "$",
          "explain": "Scalars use the $ sigil in Perl."
        },
        {
          "id": "tech_78",
          "topic": "Perl",
          "level": "Medium",
          "company": "Infosys",
          "q": "Which structure stores key-value pairs?",
          "options": [
            "hash",
            "array",
            "scalar",
            "filehandle"
          ],
          "answer": "hash",
          "explain": "Hashes map keys to values."
        },
        {
          "id": "per_5",
          "topic": "Percentages",
          "level": "Medium",
          "company": "AMD",
          "q": "What is 30% of 160?",
          "options": [
            "43",
            "48",
            "53",
            "58"
          ],
          "answer": "48",
          "explain": "Convert 30% to 30/100 and multiply: 160 × 30/100 = 48."
        },
        {
          "id": "per_12",
          "topic": "Percentages",
          "level": "Hard",
          "company": "AMD",
          "q": "What is 15% of 230?",
          "options": [
            "29",
            "34",
            "39",
            "44"
          ],
          "answer": "34",
          "explain": "Convert 15% to 15/100 and multiply: 230 × 15/100 = 34."
        },
        {
          "id": "per_19",
          "topic": "Percentages",
          "level": "Easy",
          "company": "AMD",
          "q": "What is 25% of 300?",
          "options": [
            "70",
            "75",
            "80",
            "85"
          ],
          "answer": "75",
          "explain": "Convert 25% to 25/100 and multiply: 300 × 25/100 = 75."
        },
        {
          "id": "pro_26",
          "topic": "Profit and Loss",
          "level": "Easy",
          "company": "TCS",
          "q": "An article has cost price ₹140. It is sold at a profit of 10%. What is the selling price?",
          "options": [
            "154",
            "162",
            "146",
            "166"
          ],
          "answer": "154",
          "explain": "Selling price = CP × (100 + profit%)/100 = 140 × 110/100 = ₹154."
        },
        {
          "id": "pro_33",
          "topic": "Profit and Loss",
          "level": "Medium",
          "company": "TCS",
          "q": "An article has cost price ₹224. It is sold at a profit of 20%. What is the selling price?",
          "options": [
            "269",
            "277",
            "261",
            "281"
          ],
          "answer": "269",
          "explain": "Selling price = CP × (100 + profit%)/100 = 224 × 120/100 = ₹269."
        },
        {
          "id": "pro_40",
          "topic": "Profit and Loss",
          "level": "Hard",
          "company": "TCS",
          "q": "An article has cost price ₹308. It is sold at a profit of 12%. What is the selling price?",
          "options": [
            "345",
            "353",
            "337",
            "357"
          ],
          "answer": "345",
          "explain": "Selling price = CP × (100 + profit%)/100 = 308 × 112/100 = ₹345."
        },
        {
          "id": "ave_47",
          "topic": "Averages",
          "level": "Hard",
          "company": "MSFT",
          "q": "Find the average of 16, 20, 24, and 28.",
          "options": [
            "22",
            "23",
            "24",
            "21"
          ],
          "answer": "22",
          "explain": "Average = sum of observations / number of observations = 88/4 = 22."
        },
        {
          "id": "ave_54",
          "topic": "Averages",
          "level": "Easy",
          "company": "MSFT",
          "q": "Find the average of 23, 27, 31, and 35.",
          "options": [
            "29",
            "30",
            "31",
            "28"
          ],
          "answer": "29",
          "explain": "Average = sum of observations / number of observations = 116/4 = 29."
        },
        {
          "id": "rat_61",
          "topic": "Ratio and Proportion",
          "level": "Easy",
          "company": "Infosys",
          "q": "The ratio of boys to girls is 2:5. If the total number of students is 28, how many boys are there?",
          "options": [
            "8",
            "15",
            "1",
            "10"
          ],
          "answer": "8",
          "explain": "Total parts = 7. One part = 28/(7) = 4. Boys = 2 × 4 = 8."
        },
        {
          "id": "rat_68",
          "topic": "Ratio and Proportion",
          "level": "Medium",
          "company": "Infosys",
          "q": "The ratio of boys to girls is 4:7. If the total number of students is 77, how many boys are there?",
          "options": [
            "28",
            "39",
            "17",
            "32"
          ],
          "answer": "28",
          "explain": "Total parts = 11. One part = 77/(11) = 7. Boys = 4 × 7 = 28."
        },
        {
          "id": "rat_75",
          "topic": "Ratio and Proportion",
          "level": "Hard",
          "company": "Infosys",
          "q": "The ratio of boys to girls is 6:4. If the total number of students is 60, how many boys are there?",
          "options": [
            "36",
            "46",
            "26",
            "42"
          ],
          "answer": "36",
          "explain": "Total parts = 10. One part = 60/(10) = 6. Boys = 6 × 6 = 36."
        },
        {
          "id": "tim_82",
          "topic": "Time and Work",
          "level": "Hard",
          "company": "AMD",
          "q": "If A alone can complete a piece of work in 5 days, what fraction of the work does A complete in one day?",
          "options": [
            "1/5",
            "1/4",
            "1/6",
            "1/7"
          ],
          "answer": "1/5",
          "explain": "If total work is 1, daily work = 1/5. So A completes 1/5 of the work per day."
        },
        {
          "id": "tim_89",
          "topic": "Time and Work",
          "level": "Easy",
          "company": "AMD",
          "q": "If A alone can complete a piece of work in 4 days, what fraction of the work does A complete in one day?",
          "options": [
            "1/4",
            "1/3",
            "1/5",
            "1/6"
          ],
          "answer": "1/4",
          "explain": "If total work is 1, daily work = 1/4. So A completes 1/4 of the work per day."
        }
      ]
    },
    {
      "id": "mock_22",
      "title": "Placement Mock Test 22",
      "desc": "30-minute mixed mock covering aptitude, logic, and technical basics. Difficulty blend tuned for fresher interviews.",
      "durationMinutes": 30,
      "questions": [
        {
          "id": "tech_12",
          "topic": "C++",
          "level": "Hard",
          "company": "AMD",
          "q": "What is the default access specifier in a class?",
          "options": [
            "public",
            "protected",
            "private",
            "internal"
          ],
          "answer": "private",
          "explain": "Members of a class are private by default."
        },
        {
          "id": "tech_19",
          "topic": "C++",
          "level": "Easy",
          "company": "AMD",
          "q": "Which container stores unique sorted keys?",
          "options": [
            "vector",
            "queue",
            "set",
            "stack"
          ],
          "answer": "set",
          "explain": "A set stores unique keys in sorted order."
        },
        {
          "id": "tech_26",
          "topic": "C++",
          "level": "Medium",
          "company": "AMD",
          "q": "Which OOP concept hides implementation details?",
          "options": [
            "Abstraction",
            "Friendship",
            "Compilation",
            "Templates"
          ],
          "answer": "Abstraction",
          "explain": "Abstraction exposes essentials and hides internal details."
        },
        {
          "id": "tech_33",
          "topic": "Python",
          "level": "Easy",
          "company": "NVIDIA",
          "q": "Which keyword is used to define a function?",
          "options": [
            "func",
            "define",
            "def",
            "lambda"
          ],
          "answer": "def",
          "explain": "Functions are declared with def."
        },
        {
          "id": "tech_40",
          "topic": "Python",
          "level": "Medium",
          "company": "NVIDIA",
          "q": "Which of these is immutable?",
          "options": [
            "list",
            "dict",
            "set",
            "tuple"
          ],
          "answer": "tuple",
          "explain": "Tuples cannot be changed after creation."
        },
        {
          "id": "tech_47",
          "topic": "Python",
          "level": "Hard",
          "company": "NVIDIA",
          "q": "What does len() return?",
          "options": [
            "Index",
            "Length",
            "Type",
            "Memory size only"
          ],
          "answer": "Length",
          "explain": "len() returns the number of items in a sequence or collection."
        },
        {
          "id": "tech_54",
          "topic": "Python",
          "level": "Easy",
          "company": "NVIDIA",
          "q": "What does __init__ do?",
          "options": [
            "Starts interpreter",
            "Initializes an object",
            "Closes file",
            "Prints object"
          ],
          "answer": "Initializes an object",
          "explain": "__init__ is the initializer called on object creation."
        },
        {
          "id": "tech_61",
          "topic": "Perl",
          "level": "Hard",
          "company": "NVIDIA",
          "q": "Which symbol prefixes a scalar variable in Perl?",
          "options": [
            "$",
            "@",
            "%",
            "&"
          ],
          "answer": "$",
          "explain": "Scalars use the $ sigil in Perl."
        },
        {
          "id": "tech_68",
          "topic": "Perl",
          "level": "Easy",
          "company": "NVIDIA",
          "q": "Which structure stores key-value pairs?",
          "options": [
            "hash",
            "array",
            "scalar",
            "filehandle"
          ],
          "answer": "hash",
          "explain": "Hashes map keys to values."
        },
        {
          "id": "tech_75",
          "topic": "Perl",
          "level": "Medium",
          "company": "NVIDIA",
          "q": "Which operator matches a regex pattern?",
          "options": [
            "=~",
            "==",
            "=>",
            "~~"
          ],
          "answer": "=~",
          "explain": "The =~ operator binds a string to a regex match."
        },
        {
          "id": "per_2",
          "topic": "Percentages",
          "level": "Medium",
          "company": "Infosys",
          "q": "What is 15% of 130?",
          "options": [
            "14",
            "19",
            "24",
            "29"
          ],
          "answer": "19",
          "explain": "Convert 15% to 15/100 and multiply: 130 × 15/100 = 19."
        },
        {
          "id": "per_9",
          "topic": "Percentages",
          "level": "Hard",
          "company": "Infosys",
          "q": "What is 25% of 200?",
          "options": [
            "45",
            "50",
            "55",
            "60"
          ],
          "answer": "50",
          "explain": "Convert 25% to 25/100 and multiply: 200 × 25/100 = 50."
        },
        {
          "id": "per_16",
          "topic": "Percentages",
          "level": "Easy",
          "company": "Infosys",
          "q": "What is 10% of 270?",
          "options": [
            "22",
            "27",
            "32",
            "37"
          ],
          "answer": "27",
          "explain": "Convert 10% to 10/100 and multiply: 270 × 10/100 = 27."
        },
        {
          "id": "pro_23",
          "topic": "Profit and Loss",
          "level": "Easy",
          "company": "AMD",
          "q": "An article has cost price ₹104. It is sold at a profit of 20%. What is the selling price?",
          "options": [
            "125",
            "133",
            "117",
            "137"
          ],
          "answer": "125",
          "explain": "Selling price = CP × (100 + profit%)/100 = 104 × 120/100 = ₹125."
        },
        {
          "id": "pro_30",
          "topic": "Profit and Loss",
          "level": "Medium",
          "company": "AMD",
          "q": "An article has cost price ₹188. It is sold at a profit of 12%. What is the selling price?",
          "options": [
            "211",
            "219",
            "203",
            "223"
          ],
          "answer": "211",
          "explain": "Selling price = CP × (100 + profit%)/100 = 188 × 112/100 = ₹211."
        },
        {
          "id": "pro_37",
          "topic": "Profit and Loss",
          "level": "Hard",
          "company": "AMD",
          "q": "An article has cost price ₹272. It is sold at a profit of 15%. What is the selling price?",
          "options": [
            "313",
            "321",
            "305",
            "325"
          ],
          "answer": "313",
          "explain": "Selling price = CP × (100 + profit%)/100 = 272 × 115/100 = ₹313."
        },
        {
          "id": "ave_44",
          "topic": "Averages",
          "level": "Hard",
          "company": "TCS",
          "q": "Find the average of 13, 17, 21, and 25.",
          "options": [
            "19",
            "20",
            "21",
            "18"
          ],
          "answer": "19",
          "explain": "Average = sum of observations / number of observations = 76/4 = 19."
        },
        {
          "id": "ave_51",
          "topic": "Averages",
          "level": "Easy",
          "company": "TCS",
          "q": "Find the average of 20, 24, 28, and 32.",
          "options": [
            "26",
            "27",
            "28",
            "25"
          ],
          "answer": "26",
          "explain": "Average = sum of observations / number of observations = 104/4 = 26."
        },
        {
          "id": "ave_58",
          "topic": "Averages",
          "level": "Medium",
          "company": "TCS",
          "q": "Find the average of 27, 31, 35, and 39.",
          "options": [
            "33",
            "34",
            "35",
            "32"
          ],
          "answer": "33",
          "explain": "Average = sum of observations / number of observations = 132/4 = 33."
        },
        {
          "id": "rat_65",
          "topic": "Ratio and Proportion",
          "level": "Medium",
          "company": "NVIDIA",
          "q": "The ratio of boys to girls is 6:4. If the total number of students is 40, how many boys are there?",
          "options": [
            "24",
            "34",
            "14",
            "28"
          ],
          "answer": "24",
          "explain": "Total parts = 10. One part = 40/(10) = 4. Boys = 6 × 4 = 24."
        },
        {
          "id": "rat_72",
          "topic": "Ratio and Proportion",
          "level": "Hard",
          "company": "NVIDIA",
          "q": "The ratio of boys to girls is 3:6. If the total number of students is 63, how many boys are there?",
          "options": [
            "21",
            "30",
            "12",
            "27"
          ],
          "answer": "21",
          "explain": "Total parts = 9. One part = 63/(9) = 7. Boys = 3 × 7 = 21."
        },
        {
          "id": "rat_79",
          "topic": "Ratio and Proportion",
          "level": "Easy",
          "company": "NVIDIA",
          "q": "The ratio of boys to girls is 5:3. If the total number of students is 48, how many boys are there?",
          "options": [
            "30",
            "38",
            "22",
            "32"
          ],
          "answer": "30",
          "explain": "Total parts = 8. One part = 48/(8) = 6. Boys = 5 × 6 = 30."
        },
        {
          "id": "tim_86",
          "topic": "Time and Work",
          "level": "Easy",
          "company": "Infosys",
          "q": "If A alone can complete a piece of work in 9 days, what fraction of the work does A complete in one day?",
          "options": [
            "1/9",
            "1/8",
            "1/10",
            "1/11"
          ],
          "answer": "1/9",
          "explain": "If total work is 1, daily work = 1/9. So A completes 1/9 of the work per day."
        },
        {
          "id": "tim_93",
          "topic": "Time and Work",
          "level": "Medium",
          "company": "Infosys",
          "q": "If A alone can complete a piece of work in 8 days, what fraction of the work does A complete in one day?",
          "options": [
            "1/8",
            "1/7",
            "1/9",
            "1/10"
          ],
          "answer": "1/8",
          "explain": "If total work is 1, daily work = 1/8. So A completes 1/8 of the work per day."
        },
        {
          "id": "tim_100",
          "topic": "Time and Work",
          "level": "Hard",
          "company": "Infosys",
          "q": "If A alone can complete a piece of work in 7 days, what fraction of the work does A complete in one day?",
          "options": [
            "1/7",
            "1/6",
            "1/8",
            "1/9"
          ],
          "answer": "1/7",
          "explain": "If total work is 1, daily work = 1/7. So A completes 1/7 of the work per day."
        }
      ]
    },
    {
      "id": "mock_23",
      "title": "Placement Mock Test 23",
      "desc": "30-minute mixed mock covering aptitude, logic, and technical basics. Difficulty blend tuned for fresher interviews.",
      "durationMinutes": 30,
      "questions": [
        {
          "id": "tech_23",
          "topic": "C++",
          "level": "Medium",
          "company": "Infosys",
          "q": "What happens if a base class destructor is not virtual and you delete a derived object through a base pointer?",
          "options": [
            "Always safe",
            "Only base destructor may run",
            "Compiler error",
            "Program doubles memory"
          ],
          "answer": "Only base destructor may run",
          "explain": "A virtual destructor ensures correct cleanup in inheritance hierarchies."
        },
        {
          "id": "tech_30",
          "topic": "C++",
          "level": "Hard",
          "company": "Infosys",
          "q": "Which of these is a LIFO container adaptor?",
          "options": [
            "queue",
            "stack",
            "priority_queue",
            "deque"
          ],
          "answer": "stack",
          "explain": "Stack follows last-in-first-out."
        },
        {
          "id": "tech_37",
          "topic": "Python",
          "level": "Medium",
          "company": "GOOG",
          "q": "What is a lambda?",
          "options": [
            "Named class",
            "Anonymous function",
            "Loop type",
            "Module"
          ],
          "answer": "Anonymous function",
          "explain": "lambda creates a small anonymous function."
        },
        {
          "id": "tech_44",
          "topic": "Python",
          "level": "Hard",
          "company": "GOOG",
          "q": "What is list comprehension mainly used for?",
          "options": [
            "Defining classes",
            "Concise list creation",
            "Networking",
            "Exception raising"
          ],
          "answer": "Concise list creation",
          "explain": "List comprehensions create lists compactly and readably."
        },
        {
          "id": "tech_51",
          "topic": "Python",
          "level": "Easy",
          "company": "GOOG",
          "q": "Which statement handles exceptions?",
          "options": [
            "catch-except",
            "do-except",
            "try-except",
            "error-if"
          ],
          "answer": "try-except",
          "explain": "Python exception handling uses try-except."
        },
        {
          "id": "tech_58",
          "topic": "Python",
          "level": "Medium",
          "company": "GOOG",
          "q": "Which structure removes duplicates automatically?",
          "options": [
            "list",
            "tuple",
            "set",
            "str"
          ],
          "answer": "set",
          "explain": "Sets contain unique elements."
        },
        {
          "id": "tech_65",
          "topic": "Perl",
          "level": "Easy",
          "company": "GOOG",
          "q": "Which operator matches a regex pattern?",
          "options": [
            "=~",
            "==",
            "=>",
            "~~"
          ],
          "answer": "=~",
          "explain": "The =~ operator binds a string to a regex match."
        },
        {
          "id": "tech_72",
          "topic": "Perl",
          "level": "Medium",
          "company": "GOOG",
          "q": "Which symbol prefixes an array?",
          "options": [
            "$",
            "@",
            "%",
            "*"
          ],
          "answer": "@",
          "explain": "Arrays use the @ sigil."
        },
        {
          "id": "tech_79",
          "topic": "Perl",
          "level": "Hard",
          "company": "GOOG",
          "q": "Which built-in function opens files?",
          "options": [
            "open",
            "readfile",
            "attach",
            "load"
          ],
          "answer": "open",
          "explain": "open is used to open files and filehandles."
        },
        {
          "id": "per_6",
          "topic": "Percentages",
          "level": "Hard",
          "company": "NVIDIA",
          "q": "What is 10% of 170?",
          "options": [
            "12",
            "17",
            "22",
            "27"
          ],
          "answer": "17",
          "explain": "Convert 10% to 10/100 and multiply: 170 × 10/100 = 17."
        },
        {
          "id": "per_13",
          "topic": "Percentages",
          "level": "Easy",
          "company": "NVIDIA",
          "q": "What is 20% of 240?",
          "options": [
            "43",
            "48",
            "53",
            "58"
          ],
          "answer": "48",
          "explain": "Convert 20% to 20/100 and multiply: 240 × 20/100 = 48."
        },
        {
          "id": "per_20",
          "topic": "Percentages",
          "level": "Medium",
          "company": "NVIDIA",
          "q": "What is 30% of 310?",
          "options": [
            "88",
            "93",
            "98",
            "103"
          ],
          "answer": "93",
          "explain": "Convert 30% to 30/100 and multiply: 310 × 30/100 = 93."
        },
        {
          "id": "pro_27",
          "topic": "Profit and Loss",
          "level": "Medium",
          "company": "Infosys",
          "q": "An article has cost price ₹152. It is sold at a profit of 15%. What is the selling price?",
          "options": [
            "175",
            "183",
            "167",
            "187"
          ],
          "answer": "175",
          "explain": "Selling price = CP × (100 + profit%)/100 = 152 × 115/100 = ₹175."
        },
        {
          "id": "pro_34",
          "topic": "Profit and Loss",
          "level": "Hard",
          "company": "Infosys",
          "q": "An article has cost price ₹236. It is sold at a profit of 25%. What is the selling price?",
          "options": [
            "295",
            "303",
            "287",
            "307"
          ],
          "answer": "295",
          "explain": "Selling price = CP × (100 + profit%)/100 = 236 × 125/100 = ₹295."
        },
        {
          "id": "ave_41",
          "topic": "Averages",
          "level": "Hard",
          "company": "AMD",
          "q": "Find the average of 10, 14, 18, and 22.",
          "options": [
            "16",
            "17",
            "18",
            "15"
          ],
          "answer": "16",
          "explain": "Average = sum of observations / number of observations = 64/4 = 16."
        },
        {
          "id": "ave_48",
          "topic": "Averages",
          "level": "Easy",
          "company": "AMD",
          "q": "Find the average of 17, 21, 25, and 29.",
          "options": [
            "23",
            "24",
            "25",
            "22"
          ],
          "answer": "23",
          "explain": "Average = sum of observations / number of observations = 92/4 = 23."
        },
        {
          "id": "ave_55",
          "topic": "Averages",
          "level": "Medium",
          "company": "AMD",
          "q": "Find the average of 24, 28, 32, and 36.",
          "options": [
            "30",
            "31",
            "32",
            "29"
          ],
          "answer": "30",
          "explain": "Average = sum of observations / number of observations = 120/4 = 30."
        },
        {
          "id": "rat_62",
          "topic": "Ratio and Proportion",
          "level": "Medium",
          "company": "GOOG",
          "q": "The ratio of boys to girls is 3:6. If the total number of students is 45, how many boys are there?",
          "options": [
            "15",
            "24",
            "6",
            "19"
          ],
          "answer": "15",
          "explain": "Total parts = 9. One part = 45/(9) = 5. Boys = 3 × 5 = 15."
        },
        {
          "id": "rat_69",
          "topic": "Ratio and Proportion",
          "level": "Hard",
          "company": "GOOG",
          "q": "The ratio of boys to girls is 5:3. If the total number of students is 32, how many boys are there?",
          "options": [
            "20",
            "28",
            "12",
            "26"
          ],
          "answer": "20",
          "explain": "Total parts = 8. One part = 32/(8) = 4. Boys = 5 × 4 = 20."
        },
        {
          "id": "rat_76",
          "topic": "Ratio and Proportion",
          "level": "Easy",
          "company": "GOOG",
          "q": "The ratio of boys to girls is 2:5. If the total number of students is 49, how many boys are there?",
          "options": [
            "14",
            "21",
            "7",
            "16"
          ],
          "answer": "14",
          "explain": "Total parts = 7. One part = 49/(7) = 7. Boys = 2 × 7 = 14."
        },
        {
          "id": "tim_83",
          "topic": "Time and Work",
          "level": "Easy",
          "company": "NVIDIA",
          "q": "If A alone can complete a piece of work in 6 days, what fraction of the work does A complete in one day?",
          "options": [
            "1/6",
            "1/5",
            "1/7",
            "1/8"
          ],
          "answer": "1/6",
          "explain": "If total work is 1, daily work = 1/6. So A completes 1/6 of the work per day."
        },
        {
          "id": "tim_90",
          "topic": "Time and Work",
          "level": "Medium",
          "company": "NVIDIA",
          "q": "If A alone can complete a piece of work in 5 days, what fraction of the work does A complete in one day?",
          "options": [
            "1/5",
            "1/4",
            "1/6",
            "1/7"
          ],
          "answer": "1/5",
          "explain": "If total work is 1, daily work = 1/5. So A completes 1/5 of the work per day."
        },
        {
          "id": "tim_97",
          "topic": "Time and Work",
          "level": "Hard",
          "company": "NVIDIA",
          "q": "If A alone can complete a piece of work in 4 days, what fraction of the work does A complete in one day?",
          "options": [
            "1/4",
            "1/3",
            "1/5",
            "1/6"
          ],
          "answer": "1/4",
          "explain": "If total work is 1, daily work = 1/4. So A completes 1/4 of the work per day."
        },
        {
          "id": "tim_104",
          "topic": "Time, Speed and Distance",
          "level": "Hard",
          "company": "Infosys",
          "q": "A car travels 135 km in 6 hours. What is its speed?",
          "options": [
            "22",
            "27",
            "17",
            "32"
          ],
          "answer": "22",
          "explain": "Speed = distance/time = 135/6 = 22 km/h."
        },
        {
          "id": "tim_111",
          "topic": "Time, Speed and Distance",
          "level": "Easy",
          "company": "Infosys",
          "q": "A car travels 240 km in 3 hours. What is its speed?",
          "options": [
            "80",
            "85",
            "75",
            "90"
          ],
          "answer": "80",
          "explain": "Speed = distance/time = 240/3 = 80 km/h."
        }
      ]
    },
    {
      "id": "mock_24",
      "title": "Placement Mock Test 24",
      "desc": "30-minute mixed mock covering aptitude, logic, and technical basics. Difficulty blend tuned for fresher interviews.",
      "durationMinutes": 30,
      "questions": [
        {
          "id": "tech_34",
          "topic": "Python",
          "level": "Medium",
          "company": "General",
          "q": "Which collection stores key-value pairs?",
          "options": [
            "list",
            "set",
            "dict",
            "tuple"
          ],
          "answer": "dict",
          "explain": "A dictionary stores key-value mappings."
        },
        {
          "id": "tech_41",
          "topic": "Python",
          "level": "Hard",
          "company": "General",
          "q": "Which operator checks membership?",
          "options": [
            "->",
            "in",
            "is not",
            "@"
          ],
          "answer": "in",
          "explain": "The in operator checks whether an element exists in a container."
        },
        {
          "id": "tech_48",
          "topic": "Python",
          "level": "Easy",
          "company": "General",
          "q": "Which keyword is used to define a function?",
          "options": [
            "func",
            "define",
            "def",
            "lambda"
          ],
          "answer": "def",
          "explain": "Functions are declared with def."
        },
        {
          "id": "tech_55",
          "topic": "Python",
          "level": "Medium",
          "company": "General",
          "q": "Which of these is immutable?",
          "options": [
            "list",
            "dict",
            "set",
            "tuple"
          ],
          "answer": "tuple",
          "explain": "Tuples cannot be changed after creation."
        },
        {
          "id": "tech_62",
          "topic": "Perl",
          "level": "Easy",
          "company": "General",
          "q": "Which symbol prefixes an array?",
          "options": [
            "$",
            "@",
            "%",
            "*"
          ],
          "answer": "@",
          "explain": "Arrays use the @ sigil."
        },
        {
          "id": "tech_69",
          "topic": "Perl",
          "level": "Medium",
          "company": "General",
          "q": "Which built-in function opens files?",
          "options": [
            "open",
            "readfile",
            "attach",
            "load"
          ],
          "answer": "open",
          "explain": "open is used to open files and filehandles."
        },
        {
          "id": "tech_76",
          "topic": "Perl",
          "level": "Hard",
          "company": "General",
          "q": "What does chomp do?",
          "options": [
            "Deletes file",
            "Removes trailing newline",
            "Sorts array",
            "Adds whitespace"
          ],
          "answer": "Removes trailing newline",
          "explain": "chomp removes a trailing input record separator, usually a newline."
        },
        {
          "id": "per_3",
          "topic": "Percentages",
          "level": "Hard",
          "company": "GOOG",
          "q": "What is 20% of 140?",
          "options": [
            "23",
            "28",
            "33",
            "38"
          ],
          "answer": "28",
          "explain": "Convert 20% to 20/100 and multiply: 140 × 20/100 = 28."
        },
        {
          "id": "per_10",
          "topic": "Percentages",
          "level": "Easy",
          "company": "GOOG",
          "q": "What is 30% of 210?",
          "options": [
            "58",
            "63",
            "68",
            "73"
          ],
          "answer": "63",
          "explain": "Convert 30% to 30/100 and multiply: 210 × 30/100 = 63."
        },
        {
          "id": "per_17",
          "topic": "Percentages",
          "level": "Medium",
          "company": "GOOG",
          "q": "What is 15% of 280?",
          "options": [
            "37",
            "42",
            "47",
            "52"
          ],
          "answer": "42",
          "explain": "Convert 15% to 15/100 and multiply: 280 × 15/100 = 42."
        },
        {
          "id": "pro_24",
          "topic": "Profit and Loss",
          "level": "Medium",
          "company": "NVIDIA",
          "q": "An article has cost price ₹116. It is sold at a profit of 25%. What is the selling price?",
          "options": [
            "145",
            "153",
            "137",
            "157"
          ],
          "answer": "145",
          "explain": "Selling price = CP × (100 + profit%)/100 = 116 × 125/100 = ₹145."
        },
        {
          "id": "pro_31",
          "topic": "Profit and Loss",
          "level": "Hard",
          "company": "NVIDIA",
          "q": "An article has cost price ₹200. It is sold at a profit of 10%. What is the selling price?",
          "options": [
            "220",
            "228",
            "212",
            "232"
          ],
          "answer": "220",
          "explain": "Selling price = CP × (100 + profit%)/100 = 200 × 110/100 = ₹220."
        },
        {
          "id": "pro_38",
          "topic": "Profit and Loss",
          "level": "Easy",
          "company": "NVIDIA",
          "q": "An article has cost price ₹284. It is sold at a profit of 20%. What is the selling price?",
          "options": [
            "341",
            "349",
            "333",
            "353"
          ],
          "answer": "341",
          "explain": "Selling price = CP × (100 + profit%)/100 = 284 × 120/100 = ₹341."
        },
        {
          "id": "ave_45",
          "topic": "Averages",
          "level": "Easy",
          "company": "Infosys",
          "q": "Find the average of 14, 18, 22, and 26.",
          "options": [
            "20",
            "21",
            "22",
            "19"
          ],
          "answer": "20",
          "explain": "Average = sum of observations / number of observations = 80/4 = 20."
        },
        {
          "id": "ave_52",
          "topic": "Averages",
          "level": "Medium",
          "company": "Infosys",
          "q": "Find the average of 21, 25, 29, and 33.",
          "options": [
            "27",
            "28",
            "29",
            "26"
          ],
          "answer": "27",
          "explain": "Average = sum of observations / number of observations = 108/4 = 27."
        },
        {
          "id": "ave_59",
          "topic": "Averages",
          "level": "Hard",
          "company": "Infosys",
          "q": "Find the average of 28, 32, 36, and 40.",
          "options": [
            "34",
            "35",
            "36",
            "33"
          ],
          "answer": "34",
          "explain": "Average = sum of observations / number of observations = 136/4 = 34."
        },
        {
          "id": "rat_66",
          "topic": "Ratio and Proportion",
          "level": "Hard",
          "company": "General",
          "q": "The ratio of boys to girls is 2:5. If the total number of students is 35, how many boys are there?",
          "options": [
            "10",
            "17",
            "3",
            "16"
          ],
          "answer": "10",
          "explain": "Total parts = 7. One part = 35/(7) = 5. Boys = 2 × 5 = 10."
        },
        {
          "id": "rat_73",
          "topic": "Ratio and Proportion",
          "level": "Easy",
          "company": "General",
          "q": "The ratio of boys to girls is 4:7. If the total number of students is 44, how many boys are there?",
          "options": [
            "16",
            "27",
            "5",
            "18"
          ],
          "answer": "16",
          "explain": "Total parts = 11. One part = 44/(11) = 4. Boys = 4 × 4 = 16."
        },
        {
          "id": "rat_80",
          "topic": "Ratio and Proportion",
          "level": "Medium",
          "company": "General",
          "q": "The ratio of boys to girls is 6:4. If the total number of students is 70, how many boys are there?",
          "options": [
            "42",
            "52",
            "32",
            "46"
          ],
          "answer": "42",
          "explain": "Total parts = 10. One part = 70/(10) = 7. Boys = 6 × 7 = 42."
        },
        {
          "id": "tim_87",
          "topic": "Time and Work",
          "level": "Medium",
          "company": "GOOG",
          "q": "If A alone can complete a piece of work in 10 days, what fraction of the work does A complete in one day?",
          "options": [
            "1/10",
            "1/9",
            "1/11",
            "1/12"
          ],
          "answer": "1/10",
          "explain": "If total work is 1, daily work = 1/10. So A completes 1/10 of the work per day."
        },
        {
          "id": "tim_94",
          "topic": "Time and Work",
          "level": "Hard",
          "company": "GOOG",
          "q": "If A alone can complete a piece of work in 9 days, what fraction of the work does A complete in one day?",
          "options": [
            "1/9",
            "1/8",
            "1/10",
            "1/11"
          ],
          "answer": "1/9",
          "explain": "If total work is 1, daily work = 1/9. So A completes 1/9 of the work per day."
        },
        {
          "id": "tim_101",
          "topic": "Time, Speed and Distance",
          "level": "Hard",
          "company": "NVIDIA",
          "q": "A car travels 90 km in 3 hours. What is its speed?",
          "options": [
            "30",
            "35",
            "25",
            "40"
          ],
          "answer": "30",
          "explain": "Speed = distance/time = 90/3 = 30 km/h."
        },
        {
          "id": "tim_108",
          "topic": "Time, Speed and Distance",
          "level": "Easy",
          "company": "NVIDIA",
          "q": "A car travels 195 km in 5 hours. What is its speed?",
          "options": [
            "39",
            "44",
            "34",
            "49"
          ],
          "answer": "39",
          "explain": "Speed = distance/time = 195/5 = 39 km/h."
        },
        {
          "id": "tim_115",
          "topic": "Time, Speed and Distance",
          "level": "Medium",
          "company": "NVIDIA",
          "q": "A car travels 300 km in 7 hours. What is its speed?",
          "options": [
            "42",
            "47",
            "37",
            "52"
          ],
          "answer": "42",
          "explain": "Speed = distance/time = 300/7 = 42 km/h."
        },
        {
          "id": "num_2",
          "topic": "Number Series",
          "level": "Medium",
          "company": "Infosys",
          "q": "Find the next number in the series: 1, 4, 9, 16, ?",
          "options": [
            "25",
            "27",
            "23",
            "29"
          ],
          "answer": "25",
          "explain": "These are consecutive squares: [1, 4, 9, 16]. The next square is 5² = 25."
        }
      ]
    },
    {
      "id": "mock_25",
      "title": "Placement Mock Test 25",
      "desc": "30-minute mixed mock covering aptitude, logic, and technical basics. Difficulty blend tuned for fresher interviews.",
      "durationMinutes": 30,
      "questions": [
        {
          "id": "tech_45",
          "topic": "Python",
          "level": "Easy",
          "company": "MSFT",
          "q": "Which method sorts a list in place?",
          "options": [
            "sorted()",
            "sort()",
            "arrange()",
            "order()"
          ],
          "answer": "sort()",
          "explain": "sort() modifies the original list; sorted() returns a new list."
        },
        {
          "id": "tech_52",
          "topic": "Python",
          "level": "Medium",
          "company": "MSFT",
          "q": "What is a lambda?",
          "options": [
            "Named class",
            "Anonymous function",
            "Loop type",
            "Module"
          ],
          "answer": "Anonymous function",
          "explain": "lambda creates a small anonymous function."
        },
        {
          "id": "tech_59",
          "topic": "Python",
          "level": "Hard",
          "company": "MSFT",
          "q": "What is list comprehension mainly used for?",
          "options": [
            "Defining classes",
            "Concise list creation",
            "Networking",
            "Exception raising"
          ],
          "answer": "Concise list creation",
          "explain": "List comprehensions create lists compactly and readably."
        },
        {
          "id": "tech_66",
          "topic": "Perl",
          "level": "Medium",
          "company": "MSFT",
          "q": "What does chomp do?",
          "options": [
            "Deletes file",
            "Removes trailing newline",
            "Sorts array",
            "Adds whitespace"
          ],
          "answer": "Removes trailing newline",
          "explain": "chomp removes a trailing input record separator, usually a newline."
        },
        {
          "id": "tech_73",
          "topic": "Perl",
          "level": "Hard",
          "company": "MSFT",
          "q": "Which symbol prefixes a hash?",
          "options": [
            "#",
            "%",
            "&",
            "@"
          ],
          "answer": "%",
          "explain": "Hashes use the % sigil."
        },
        {
          "id": "tech_80",
          "topic": "Perl",
          "level": "Easy",
          "company": "MSFT",
          "q": "Why is regex skill useful in Perl interviews?",
          "options": [
            "It is never used",
            "Many scripting tasks rely on pattern matching",
            "Only GUI design needs it",
            "Perl has no regex"
          ],
          "answer": "Many scripting tasks rely on pattern matching",
          "explain": "Pattern matching is one of Perl's strongest practical uses."
        },
        {
          "id": "per_7",
          "topic": "Percentages",
          "level": "Easy",
          "company": "General",
          "q": "What is 15% of 180?",
          "options": [
            "22",
            "27",
            "32",
            "37"
          ],
          "answer": "27",
          "explain": "Convert 15% to 15/100 and multiply: 180 × 15/100 = 27."
        },
        {
          "id": "per_14",
          "topic": "Percentages",
          "level": "Medium",
          "company": "General",
          "q": "What is 25% of 250?",
          "options": [
            "57",
            "62",
            "67",
            "72"
          ],
          "answer": "62",
          "explain": "Convert 25% to 25/100 and multiply: 250 × 25/100 = 62."
        },
        {
          "id": "pro_21",
          "topic": "Profit and Loss",
          "level": "Medium",
          "company": "GOOG",
          "q": "An article has cost price ₹80. It is sold at a profit of 10%. What is the selling price?",
          "options": [
            "88",
            "96",
            "80",
            "100"
          ],
          "answer": "88",
          "explain": "Selling price = CP × (100 + profit%)/100 = 80 × 110/100 = ₹88."
        },
        {
          "id": "pro_28",
          "topic": "Profit and Loss",
          "level": "Hard",
          "company": "GOOG",
          "q": "An article has cost price ₹164. It is sold at a profit of 20%. What is the selling price?",
          "options": [
            "197",
            "205",
            "189",
            "209"
          ],
          "answer": "197",
          "explain": "Selling price = CP × (100 + profit%)/100 = 164 × 120/100 = ₹197."
        },
        {
          "id": "pro_35",
          "topic": "Profit and Loss",
          "level": "Easy",
          "company": "GOOG",
          "q": "An article has cost price ₹248. It is sold at a profit of 12%. What is the selling price?",
          "options": [
            "278",
            "286",
            "270",
            "290"
          ],
          "answer": "278",
          "explain": "Selling price = CP × (100 + profit%)/100 = 248 × 112/100 = ₹278."
        },
        {
          "id": "ave_42",
          "topic": "Averages",
          "level": "Easy",
          "company": "NVIDIA",
          "q": "Find the average of 11, 15, 19, and 23.",
          "options": [
            "17",
            "18",
            "19",
            "16"
          ],
          "answer": "17",
          "explain": "Average = sum of observations / number of observations = 68/4 = 17."
        },
        {
          "id": "ave_49",
          "topic": "Averages",
          "level": "Medium",
          "company": "NVIDIA",
          "q": "Find the average of 18, 22, 26, and 30.",
          "options": [
            "24",
            "25",
            "26",
            "23"
          ],
          "answer": "24",
          "explain": "Average = sum of observations / number of observations = 96/4 = 24."
        },
        {
          "id": "ave_56",
          "topic": "Averages",
          "level": "Hard",
          "company": "NVIDIA",
          "q": "Find the average of 25, 29, 33, and 37.",
          "options": [
            "31",
            "32",
            "33",
            "30"
          ],
          "answer": "31",
          "explain": "Average = sum of observations / number of observations = 124/4 = 31."
        },
        {
          "id": "rat_63",
          "topic": "Ratio and Proportion",
          "level": "Hard",
          "company": "MSFT",
          "q": "The ratio of boys to girls is 4:7. If the total number of students is 66, how many boys are there?",
          "options": [
            "24",
            "35",
            "13",
            "30"
          ],
          "answer": "24",
          "explain": "Total parts = 11. One part = 66/(11) = 6. Boys = 4 × 6 = 24."
        },
        {
          "id": "rat_70",
          "topic": "Ratio and Proportion",
          "level": "Easy",
          "company": "MSFT",
          "q": "The ratio of boys to girls is 6:4. If the total number of students is 50, how many boys are there?",
          "options": [
            "30",
            "40",
            "20",
            "32"
          ],
          "answer": "30",
          "explain": "Total parts = 10. One part = 50/(10) = 5. Boys = 6 × 5 = 30."
        },
        {
          "id": "rat_77",
          "topic": "Ratio and Proportion",
          "level": "Medium",
          "company": "MSFT",
          "q": "The ratio of boys to girls is 3:6. If the total number of students is 36, how many boys are there?",
          "options": [
            "12",
            "21",
            "3",
            "16"
          ],
          "answer": "12",
          "explain": "Total parts = 9. One part = 36/(9) = 4. Boys = 3 × 4 = 12."
        },
        {
          "id": "tim_84",
          "topic": "Time and Work",
          "level": "Medium",
          "company": "General",
          "q": "If A alone can complete a piece of work in 7 days, what fraction of the work does A complete in one day?",
          "options": [
            "1/7",
            "1/6",
            "1/8",
            "1/9"
          ],
          "answer": "1/7",
          "explain": "If total work is 1, daily work = 1/7. So A completes 1/7 of the work per day."
        },
        {
          "id": "tim_91",
          "topic": "Time and Work",
          "level": "Hard",
          "company": "General",
          "q": "If A alone can complete a piece of work in 6 days, what fraction of the work does A complete in one day?",
          "options": [
            "1/6",
            "1/5",
            "1/7",
            "1/8"
          ],
          "answer": "1/6",
          "explain": "If total work is 1, daily work = 1/6. So A completes 1/6 of the work per day."
        },
        {
          "id": "tim_98",
          "topic": "Time and Work",
          "level": "Easy",
          "company": "General",
          "q": "If A alone can complete a piece of work in 5 days, what fraction of the work does A complete in one day?",
          "options": [
            "1/5",
            "1/4",
            "1/6",
            "1/7"
          ],
          "answer": "1/5",
          "explain": "If total work is 1, daily work = 1/5. So A completes 1/5 of the work per day."
        },
        {
          "id": "tim_105",
          "topic": "Time, Speed and Distance",
          "level": "Easy",
          "company": "GOOG",
          "q": "A car travels 150 km in 7 hours. What is its speed?",
          "options": [
            "21",
            "26",
            "16",
            "31"
          ],
          "answer": "21",
          "explain": "Speed = distance/time = 150/7 = 21 km/h."
        },
        {
          "id": "tim_112",
          "topic": "Time, Speed and Distance",
          "level": "Medium",
          "company": "GOOG",
          "q": "A car travels 255 km in 4 hours. What is its speed?",
          "options": [
            "63",
            "68",
            "58",
            "73"
          ],
          "answer": "63",
          "explain": "Speed = distance/time = 255/4 = 63 km/h."
        },
        {
          "id": "tim_119",
          "topic": "Time, Speed and Distance",
          "level": "Hard",
          "company": "GOOG",
          "q": "A car travels 360 km in 6 hours. What is its speed?",
          "options": [
            "60",
            "65",
            "55",
            "70"
          ],
          "answer": "60",
          "explain": "Speed = distance/time = 360/6 = 60 km/h."
        },
        {
          "id": "num_6",
          "topic": "Number Series",
          "level": "Hard",
          "company": "NVIDIA",
          "q": "Find the next number in the series: 4, 9, 16, 25, ?",
          "options": [
            "36",
            "38",
            "34",
            "40"
          ],
          "answer": "36",
          "explain": "These are consecutive squares: [4, 9, 16, 25]. The next square is 6² = 36."
        },
        {
          "id": "num_13",
          "topic": "Number Series",
          "level": "Easy",
          "company": "NVIDIA",
          "q": "Find the next number in the series: 2, 5, 8, 11, 14, ?",
          "options": [
            "17",
            "19",
            "15",
            "21"
          ],
          "answer": "17",
          "explain": "Each term increases by 3, so the next term after 14 is 17."
        }
      ]
    }
  ],
  "videoCategories": [
    {
      "category": "Analytical Aptitude",
      "items": [
        {
          "title": "Percentage - Shortcuts & Tricks for Placement Tests",
          "duration": "~17 min",
          "url": "https://www.youtube.com/watch?v=RWdNhJWwzSs",
          "reason": "Good for percentages and placement-style shortcuts."
        },
        {
          "title": "Aptitude Questions for Campus Placement | Quant & Logic",
          "duration": "~34 min",
          "url": "https://www.youtube.com/watch?v=ryB359bsvyA",
          "reason": "Mixed quant + logic practice for campus tests."
        },
        {
          "title": "Quantitative Aptitude Classes for Placements",
          "duration": "Long-form",
          "url": "https://www.youtube.com/watch?v=Sgc7Odbu8Gc",
          "reason": "Broader placement playlist when you want full-topic coverage."
        }
      ]
    },
    {
      "category": "Logical Reasoning",
      "items": [
        {
          "title": "Aptitude Questions for Campus Placement | Quant & Logic",
          "duration": "~34 min",
          "url": "https://www.youtube.com/watch?v=ryB359bsvyA",
          "reason": "Reasoning mixed with campus-placement style questions."
        },
        {
          "title": "TCS NQT 2025 | Aptitude 01 | Statistics + Percentage",
          "duration": "Session",
          "url": "https://www.youtube.com/watch?v=VFhVa99wdf8",
          "reason": "Useful if targeting service-company style logical/aptitude mixes."
        }
      ]
    },
    {
      "category": "C++",
      "items": [
        {
          "title": "C++ Interview Questions & Answers",
          "duration": "Interview-style",
          "url": "https://www.youtube.com/watch?v=wkp-KNcvVEM",
          "reason": "Good for fresher interview topics in C++."
        },
        {
          "title": "Top 20 Most Asked C++ Interview Questions",
          "duration": "~30+ min",
          "url": "https://www.youtube.com/watch?v=kjWwKQUJeVA",
          "reason": "Fast revision of common C++ questions."
        },
        {
          "title": "STL In C++ | C++ STL Full Course",
          "duration": "~1 hr",
          "url": "https://www.youtube.com/watch?v=ZqfoG5w36Qw",
          "reason": "Best direct revision if STL feels weak."
        }
      ]
    },
    {
      "category": "Python",
      "items": [
        {
          "title": "Top 25 Python Programming Interview Questions",
          "duration": "Interview-style",
          "url": "https://www.youtube.com/watch?v=OC31MU7VYC8",
          "reason": "Core fresher questions with code walkthroughs."
        },
        {
          "title": "Python Interview for Freshers | Core Python Questions",
          "duration": "Interview-style",
          "url": "https://www.youtube.com/watch?v=fexrWoBsFGA",
          "reason": "Good revision for core Python and OOP."
        },
        {
          "title": "50+ Python Interview Questions & Answers",
          "duration": "Long-form",
          "url": "https://www.youtube.com/watch?v=LQDKwtegwSg",
          "reason": "Useful as a broader revision session before interviews."
        }
      ]
    },
    {
      "category": "Perl",
      "items": [
        {
          "title": "Perl Basics #15: Regular Expressions",
          "duration": "Focused",
          "url": "https://www.youtube.com/watch?v=Upp1Pxm43Ok",
          "reason": "Strong starting point for regex-based Perl prep."
        },
        {
          "title": "Perl Complete Course | Full 5 Hours Tutorial",
          "duration": "5 hrs",
          "url": "https://www.youtube.com/watch?v=dKlh0QXq6nk",
          "reason": "Use this when you want a full refresher, not just interview revision."
        },
        {
          "title": "Perl - Regular Expression",
          "duration": "Focused",
          "url": "https://www.youtube.com/watch?v=-0qixZNanK4",
          "reason": "Extra regex practice and pattern matching examples."
        }
      ]
    },
    {
      "category": "Resume",
      "items": [
        {
          "title": "How to Create an ATS Friendly Resume for Fresher",
          "duration": "Guide",
          "url": "https://www.youtube.com/watch?v=ML_sZh-D5S0",
          "reason": "Practical ATS-focused fresher resume guidance."
        },
        {
          "title": "Resume to Get Job - Complete Guide & ATS Resume Format",
          "duration": "Guide",
          "url": "https://www.youtube.com/watch?v=ZcuziWFfpQY",
          "reason": "Strong resume formatting and content advice."
        },
        {
          "title": "Make a Resume That Gets Internships Fast",
          "duration": "Guide",
          "url": "https://www.youtube.com/watch?v=ebGqNneImmw",
          "reason": "Useful for project bullets and software-career positioning."
        }
      ]
    },
    {
      "category": "HR / Tell Me About Yourself",
      "items": [
        {
          "title": "TELL ME ABOUT YOURSELF for FRESHERS",
          "duration": "Focused",
          "url": "https://www.youtube.com/watch?v=HnIYqKT0hbA",
          "reason": "Good structure for fresher self-introduction."
        },
        {
          "title": "Tell Me About Yourself Best Answer (for Freshers)",
          "duration": "Focused",
          "url": "https://www.youtube.com/watch?v=ts8Ui6EFdws",
          "reason": "Alternative polished answer style for practice."
        },
        {
          "title": "Interview Question: Tell Me About Yourself (Freshers)",
          "duration": "Recent",
          "url": "https://www.youtube.com/watch?v=k_f4Mb2ARdA",
          "reason": "Recent refresher on what recruiters expect."
        }
      ]
    }
  ],
  "resumeChecklist": [
    {
      "title": "Use one-page fresher format",
      "desc": "Do not dilute impact with extra decoration or weak filler content."
    },
    {
      "title": "Write a sharp headline",
      "desc": "Example: B.E. CSE fresher | C++, Python, SQL | Built 3 academic projects."
    },
    {
      "title": "Lead with strongest skills",
      "desc": "Put interview-ready skills first: C++, Python, DSA basics, SQL, Git, OOP."
    },
    {
      "title": "Improve project bullets",
      "desc": "Use action + tech stack + what you built + metric/result."
    },
    {
      "title": "Make GitHub and LinkedIn visible",
      "desc": "Recruiters should find your code and profile in one click."
    },
    {
      "title": "Cut generic objective statements",
      "desc": "Replace vague goals with proof of skill and project work."
    },
    {
      "title": "Use ATS-friendly wording",
      "desc": "Match truthful keywords from target roles like Python, OOP, debugging, APIs, SQL."
    }
  ],
  "resumeBullets": [
    {
      "title": "Resume bullet upgrade 1",
      "desc": "Built a Python-based attendance analytics tool using pandas and CSV automation, reducing manual report creation time by 60%."
    },
    {
      "title": "Resume bullet upgrade 2",
      "desc": "Developed a modular C++ student record system with file handling, validation, and search features for 500+ sample entries."
    },
    {
      "title": "Resume bullet upgrade 3",
      "desc": "Created a placement-prep dashboard using HTML, CSS, and JavaScript with quiz scoring, progress tracking, and local persistence."
    },
    {
      "title": "Resume bullet upgrade 4",
      "desc": "Wrote Perl regex scripts to parse log files and summarize error patterns, improving debugging turnaround during lab testing."
    }
  ],
  "hr": [
    {
      "title": "Tell me about yourself",
      "desc": "Use a 3-part answer: present status, strongest projects/skills, then why this role fits."
    },
    {
      "title": "Why should we hire you?",
      "desc": "Combine trainability, coding fundamentals, project execution, and willingness to learn fast."
    },
    {
      "title": "Strengths and weaknesses",
      "desc": "Pick job-relevant strengths and one manageable weakness with a visible improvement plan."
    },
    {
      "title": "Project explanation",
      "desc": "Cover problem, your role, tech stack, key logic, result, and one challenge you solved."
    },
    {
      "title": "Behavioral clarity",
      "desc": "Use calm, structured answers instead of trying to sound overly polished or memorized."
    },
    {
      "title": "Questions to ask interviewer",
      "desc": "Ask about onboarding, success metrics in the first 90 days, and the team's tools or workflow."
    }
  ],
  "tasks": [
    {
      "id": "task1",
      "title": "Solve 20 timed aptitude MCQs",
      "desc": "Review mistakes by topic, not just score."
    },
    {
      "id": "task2",
      "title": "Solve 15 logical reasoning MCQs",
      "desc": "Focus on pattern recognition and stepwise reasoning."
    },
    {
      "id": "task3",
      "title": "Code 1 easy + 1 medium problem",
      "desc": "Explain complexity and edge cases aloud."
    },
    {
      "id": "task4",
      "title": "Revise 10 flashcards",
      "desc": "Pick weak categories first."
    },
    {
      "id": "task5",
      "title": "Improve one resume bullet",
      "desc": "Add tool, result, and action verb."
    },
    {
      "id": "task6",
      "title": "Practice self-introduction",
      "desc": "Keep it within 60–90 seconds and role-specific."
    },
    {
      "id": "task7",
      "title": "Watch one targeted video",
      "desc": "Choose based on weakest area today."
    }
  ],
  "interviewDay": [
    {
      "id": "day1",
      "title": "Resume PDF and links ready",
      "desc": "Resume, GitHub, LinkedIn, and project links should all open correctly."
    },
    {
      "id": "day2",
      "title": "Top 3 projects revised",
      "desc": "Be ready with concise problem-solution-impact explanations."
    },
    {
      "id": "day3",
      "title": "Core formulas revised",
      "desc": "Percentages, average, ratio, work, speed-distance."
    },
    {
      "id": "day4",
      "title": "Device and IDE check",
      "desc": "Browser, internet, charger, editor, and webcam tested."
    },
    {
      "id": "day5",
      "title": "Company notes ready",
      "desc": "Know role, tech stack, and why you fit the team."
    }
  ],
  "companyTests": [
    {
      "id": "goog",
      "name": "GOOG",
      "intro": "Google-style test emphasizes data structures, algorithmic thinking, complexity analysis, debugging clarity, and concise communication.",
      "questions": [
        {
          "id": "per_3",
          "topic": "Percentages",
          "level": "Hard",
          "company": "GOOG",
          "q": "What is 20% of 140?",
          "options": [
            "23",
            "28",
            "33",
            "38"
          ],
          "answer": "28",
          "explain": "Convert 20% to 20/100 and multiply: 140 × 20/100 = 28."
        },
        {
          "id": "ave_46",
          "topic": "Averages",
          "level": "Medium",
          "company": "GOOG",
          "q": "Find the average of 15, 19, 23, and 27.",
          "options": [
            "21",
            "22",
            "23",
            "20"
          ],
          "answer": "21",
          "explain": "Average = sum of observations / number of observations = 84/4 = 21."
        },
        {
          "id": "num_10",
          "topic": "Number Series",
          "level": "Easy",
          "company": "GOOG",
          "q": "Find the next number in the series: 9, 16, 25, 36, ?",
          "options": [
            "49",
            "51",
            "47",
            "53"
          ],
          "answer": "49",
          "explain": "These are consecutive squares: [9, 16, 25, 36]. The next square is 7² = 49."
        },
        {
          "id": "cod_32",
          "topic": "Coding-Decoding",
          "level": "Easy",
          "company": "General",
          "q": "In a certain code, the word 'DATA' is written in reverse order. What is its code?",
          "options": [
            "ATAD",
            "AADT",
            "DATA",
            "EBUB"
          ],
          "answer": "ATAD",
          "explain": "Reverse the order of letters in DATA; the coded form is ATAD."
        },
        {
          "id": "tech_17",
          "topic": "C++",
          "level": "Medium",
          "company": "GOOG",
          "q": "Which symbol is used to access members of an object through a pointer in C++?",
          "options": [
            ".",
            "::",
            "->",
            "*"
          ],
          "answer": "->",
          "explain": "The arrow operator is used when accessing object members via a pointer."
        },
        {
          "id": "tech_51",
          "topic": "Python",
          "level": "Easy",
          "company": "GOOG",
          "q": "Which statement handles exceptions?",
          "options": [
            "catch-except",
            "do-except",
            "try-except",
            "error-if"
          ],
          "answer": "try-except",
          "explain": "Python exception handling uses try-except."
        },
        {
          "id": "tim_102",
          "topic": "Time, Speed and Distance",
          "level": "Easy",
          "company": "General",
          "q": "A car travels 105 km in 4 hours. What is its speed?",
          "options": [
            "26",
            "31",
            "21",
            "36"
          ],
          "answer": "26",
          "explain": "Speed = distance/time = 105/4 = 26 km/h."
        },
        {
          "id": "rat_69",
          "topic": "Ratio and Proportion",
          "level": "Hard",
          "company": "GOOG",
          "q": "The ratio of boys to girls is 5:3. If the total number of students is 32, how many boys are there?",
          "options": [
            "20",
            "28",
            "12",
            "26"
          ],
          "answer": "20",
          "explain": "Total parts = 8. One part = 32/(8) = 4. Boys = 5 × 4 = 20."
        },
        {
          "id": "dir_59",
          "topic": "Direction Sense",
          "level": "Easy",
          "company": "General",
          "q": "Aman walks 3 km west and then 7 km north. In which direction is he from the start?",
          "options": [
            "North-West",
            "North-West",
            "South-West",
            "North-East"
          ],
          "answer": "North-West",
          "explain": "West plus north gives North-West."
        },
        {
          "id": "syl_73",
          "topic": "Syllogisms",
          "level": "Easy",
          "company": "General",
          "q": "Statements: Some apps are scalable. All scalable products are tested. Which conclusion follows?",
          "options": [
            "Some apps are tested",
            "All students are coders",
            "Some bugs are features",
            "None follows"
          ],
          "answer": "Some apps are tested",
          "explain": "Some apps belong to the scalable set, and all scalable products are tested."
        }
      ]
    },
    {
      "id": "msft",
      "name": "MSFT",
      "intro": "Microsoft-style test rewards clean coding, problem decomposition, OOP fundamentals, debugging, and practical implementation details.",
      "questions": [
        {
          "id": "per_4",
          "topic": "Percentages",
          "level": "Easy",
          "company": "MSFT",
          "q": "What is 25% of 150?",
          "options": [
            "32",
            "37",
            "42",
            "47"
          ],
          "answer": "37",
          "explain": "Convert 25% to 25/100 and multiply: 150 × 25/100 = 37."
        },
        {
          "id": "ave_47",
          "topic": "Averages",
          "level": "Hard",
          "company": "MSFT",
          "q": "Find the average of 16, 20, 24, and 28.",
          "options": [
            "22",
            "23",
            "24",
            "21"
          ],
          "answer": "22",
          "explain": "Average = sum of observations / number of observations = 88/4 = 22."
        },
        {
          "id": "num_11",
          "topic": "Number Series",
          "level": "Medium",
          "company": "MSFT",
          "q": "Find the next number in the series: 2, 4, 8, 16, 32, ?",
          "options": [
            "64",
            "66",
            "62",
            "68"
          ],
          "answer": "64",
          "explain": "Each term doubles. 32 × 2 = 64."
        },
        {
          "id": "cod_32",
          "topic": "Coding-Decoding",
          "level": "Easy",
          "company": "General",
          "q": "In a certain code, the word 'DATA' is written in reverse order. What is its code?",
          "options": [
            "ATAD",
            "AADT",
            "DATA",
            "EBUB"
          ],
          "answer": "ATAD",
          "explain": "Reverse the order of letters in DATA; the coded form is ATAD."
        },
        {
          "id": "tech_18",
          "topic": "C++",
          "level": "Hard",
          "company": "MSFT",
          "q": "What does STL stand for?",
          "options": [
            "Standard Template Library",
            "Structured Type Library",
            "System Template Logic",
            "Simple Type List"
          ],
          "answer": "Standard Template Library",
          "explain": "STL in C++ expands to Standard Template Library."
        },
        {
          "id": "tech_48",
          "topic": "Python",
          "level": "Easy",
          "company": "General",
          "q": "Which keyword is used to define a function?",
          "options": [
            "func",
            "define",
            "def",
            "lambda"
          ],
          "answer": "def",
          "explain": "Functions are declared with def."
        },
        {
          "id": "tim_102",
          "topic": "Time, Speed and Distance",
          "level": "Easy",
          "company": "General",
          "q": "A car travels 105 km in 4 hours. What is its speed?",
          "options": [
            "26",
            "31",
            "21",
            "36"
          ],
          "answer": "26",
          "explain": "Speed = distance/time = 105/4 = 26 km/h."
        },
        {
          "id": "rat_70",
          "topic": "Ratio and Proportion",
          "level": "Easy",
          "company": "MSFT",
          "q": "The ratio of boys to girls is 6:4. If the total number of students is 50, how many boys are there?",
          "options": [
            "30",
            "40",
            "20",
            "32"
          ],
          "answer": "30",
          "explain": "Total parts = 10. One part = 50/(10) = 5. Boys = 6 × 5 = 30."
        },
        {
          "id": "dir_59",
          "topic": "Direction Sense",
          "level": "Easy",
          "company": "General",
          "q": "Aman walks 3 km west and then 7 km north. In which direction is he from the start?",
          "options": [
            "North-West",
            "North-West",
            "South-West",
            "North-East"
          ],
          "answer": "North-West",
          "explain": "West plus north gives North-West."
        },
        {
          "id": "syl_73",
          "topic": "Syllogisms",
          "level": "Easy",
          "company": "General",
          "q": "Statements: Some apps are scalable. All scalable products are tested. Which conclusion follows?",
          "options": [
            "Some apps are tested",
            "All students are coders",
            "Some bugs are features",
            "None follows"
          ],
          "answer": "Some apps are tested",
          "explain": "Some apps belong to the scalable set, and all scalable products are tested."
        }
      ]
    },
    {
      "id": "amd",
      "name": "AMD",
      "intro": "AMD-style test favors C/C++, problem solving, low-level reasoning, memory handling, and disciplined debugging.",
      "questions": [
        {
          "id": "per_5",
          "topic": "Percentages",
          "level": "Medium",
          "company": "AMD",
          "q": "What is 30% of 160?",
          "options": [
            "43",
            "48",
            "53",
            "58"
          ],
          "answer": "48",
          "explain": "Convert 30% to 30/100 and multiply: 160 × 30/100 = 48."
        },
        {
          "id": "ave_43",
          "topic": "Averages",
          "level": "Medium",
          "company": "General",
          "q": "Find the average of 12, 16, 20, and 24.",
          "options": [
            "18",
            "19",
            "20",
            "17"
          ],
          "answer": "18",
          "explain": "Average = sum of observations / number of observations = 72/4 = 18."
        },
        {
          "id": "num_12",
          "topic": "Number Series",
          "level": "Hard",
          "company": "AMD",
          "q": "Find the next number in the series: 6, 11, 16, 21, 26, ?",
          "options": [
            "31",
            "33",
            "29",
            "35"
          ],
          "answer": "31",
          "explain": "Difference is 5 each time, so next term is 31."
        },
        {
          "id": "cod_32",
          "topic": "Coding-Decoding",
          "level": "Easy",
          "company": "General",
          "q": "In a certain code, the word 'DATA' is written in reverse order. What is its code?",
          "options": [
            "ATAD",
            "AADT",
            "DATA",
            "EBUB"
          ],
          "answer": "ATAD",
          "explain": "Reverse the order of letters in DATA; the coded form is ATAD."
        },
        {
          "id": "tech_19",
          "topic": "C++",
          "level": "Easy",
          "company": "AMD",
          "q": "Which container stores unique sorted keys?",
          "options": [
            "vector",
            "queue",
            "set",
            "stack"
          ],
          "answer": "set",
          "explain": "A set stores unique keys in sorted order."
        },
        {
          "id": "tech_48",
          "topic": "Python",
          "level": "Easy",
          "company": "General",
          "q": "Which keyword is used to define a function?",
          "options": [
            "func",
            "define",
            "def",
            "lambda"
          ],
          "answer": "def",
          "explain": "Functions are declared with def."
        },
        {
          "id": "tim_109",
          "topic": "Time, Speed and Distance",
          "level": "Medium",
          "company": "General",
          "q": "A car travels 210 km in 6 hours. What is its speed?",
          "options": [
            "35",
            "40",
            "30",
            "45"
          ],
          "answer": "35",
          "explain": "Speed = distance/time = 210/6 = 35 km/h."
        },
        {
          "id": "rat_71",
          "topic": "Ratio and Proportion",
          "level": "Medium",
          "company": "AMD",
          "q": "The ratio of boys to girls is 2:5. If the total number of students is 42, how many boys are there?",
          "options": [
            "12",
            "19",
            "5",
            "16"
          ],
          "answer": "12",
          "explain": "Total parts = 7. One part = 42/(7) = 6. Boys = 2 × 6 = 12."
        },
        {
          "id": "dir_57",
          "topic": "Direction Sense",
          "level": "Medium",
          "company": "AMD",
          "q": "Ravi walks 4 km south and then 4 km west. In which direction is he from the starting point?",
          "options": [
            "South-West",
            "North-West",
            "South-West",
            "North-East"
          ],
          "answer": "South-West",
          "explain": "The final point is below and left of the start, so it is South-West."
        },
        {
          "id": "syl_78",
          "topic": "Syllogisms",
          "level": "Hard",
          "company": "AMD",
          "q": "Statements: Some apps are scalable. All scalable products are tested. Which conclusion follows?",
          "options": [
            "Some apps are tested",
            "All students are coders",
            "Some bugs are features",
            "None follows"
          ],
          "answer": "Some apps are tested",
          "explain": "Some apps belong to the scalable set, and all scalable products are tested."
        }
      ]
    },
    {
      "id": "nvidia",
      "name": "NVIDIA",
      "intro": "NVIDIA-style test values C/C++, performance awareness, logic, and strong programming fundamentals.",
      "questions": [
        {
          "id": "per_6",
          "topic": "Percentages",
          "level": "Hard",
          "company": "NVIDIA",
          "q": "What is 10% of 170?",
          "options": [
            "12",
            "17",
            "22",
            "27"
          ],
          "answer": "17",
          "explain": "Convert 10% to 10/100 and multiply: 170 × 10/100 = 17."
        },
        {
          "id": "ave_43",
          "topic": "Averages",
          "level": "Medium",
          "company": "General",
          "q": "Find the average of 12, 16, 20, and 24.",
          "options": [
            "18",
            "19",
            "20",
            "17"
          ],
          "answer": "18",
          "explain": "Average = sum of observations / number of observations = 72/4 = 18."
        },
        {
          "id": "num_13",
          "topic": "Number Series",
          "level": "Easy",
          "company": "NVIDIA",
          "q": "Find the next number in the series: 2, 5, 8, 11, 14, ?",
          "options": [
            "17",
            "19",
            "15",
            "21"
          ],
          "answer": "17",
          "explain": "Each term increases by 3, so the next term after 14 is 17."
        },
        {
          "id": "cod_32",
          "topic": "Coding-Decoding",
          "level": "Easy",
          "company": "General",
          "q": "In a certain code, the word 'DATA' is written in reverse order. What is its code?",
          "options": [
            "ATAD",
            "AADT",
            "DATA",
            "EBUB"
          ],
          "answer": "ATAD",
          "explain": "Reverse the order of letters in DATA; the coded form is ATAD."
        },
        {
          "id": "tech_20",
          "topic": "C++",
          "level": "Medium",
          "company": "NVIDIA",
          "q": "Which keyword prevents a derived class method from overriding a base class method further?",
          "options": [
            "final",
            "const",
            "virtual",
            "static"
          ],
          "answer": "final",
          "explain": "The final specifier prevents further overriding."
        },
        {
          "id": "tech_48",
          "topic": "Python",
          "level": "Easy",
          "company": "General",
          "q": "Which keyword is used to define a function?",
          "options": [
            "func",
            "define",
            "def",
            "lambda"
          ],
          "answer": "def",
          "explain": "Functions are declared with def."
        },
        {
          "id": "tim_101",
          "topic": "Time, Speed and Distance",
          "level": "Hard",
          "company": "NVIDIA",
          "q": "A car travels 90 km in 3 hours. What is its speed?",
          "options": [
            "30",
            "35",
            "25",
            "40"
          ],
          "answer": "30",
          "explain": "Speed = distance/time = 90/3 = 30 km/h."
        },
        {
          "id": "rat_72",
          "topic": "Ratio and Proportion",
          "level": "Hard",
          "company": "NVIDIA",
          "q": "The ratio of boys to girls is 3:6. If the total number of students is 63, how many boys are there?",
          "options": [
            "21",
            "30",
            "12",
            "27"
          ],
          "answer": "21",
          "explain": "Total parts = 9. One part = 63/(9) = 7. Boys = 3 × 7 = 21."
        },
        {
          "id": "dir_58",
          "topic": "Direction Sense",
          "level": "Hard",
          "company": "NVIDIA",
          "q": "Anita walks 6 km east, then 2 km north. In which direction is she from the starting point?",
          "options": [
            "North-East",
            "North-West",
            "South-West",
            "North-East"
          ],
          "answer": "North-East",
          "explain": "East plus north gives a North-East position."
        },
        {
          "id": "syl_79",
          "topic": "Syllogisms",
          "level": "Easy",
          "company": "NVIDIA",
          "q": "Statements: All APIs are interfaces. Some interfaces are public. Which conclusion definitely follows?",
          "options": [
            "No definite conclusion about APIs being public",
            "All students are coders",
            "Some bugs are features",
            "None follows"
          ],
          "answer": "No definite conclusion about APIs being public",
          "explain": "We only know some interfaces are public; we do not know whether those interfaces are APIs."
        }
      ]
    },
    {
      "id": "tcs",
      "name": "TCS",
      "intro": "TCS-style test is balanced across aptitude, logical reasoning, coding basics, verbal clarity, and consistent execution.",
      "questions": [
        {
          "id": "per_1",
          "topic": "Percentages",
          "level": "Easy",
          "company": "TCS",
          "q": "What is 10% of 120?",
          "options": [
            "7",
            "12",
            "17",
            "22"
          ],
          "answer": "12",
          "explain": "Convert 10% to 10/100 and multiply: 120 × 10/100 = 12."
        },
        {
          "id": "ave_44",
          "topic": "Averages",
          "level": "Hard",
          "company": "TCS",
          "q": "Find the average of 13, 17, 21, and 25.",
          "options": [
            "19",
            "20",
            "21",
            "18"
          ],
          "answer": "19",
          "explain": "Average = sum of observations / number of observations = 76/4 = 19."
        },
        {
          "id": "num_8",
          "topic": "Number Series",
          "level": "Medium",
          "company": "TCS",
          "q": "Find the next number in the series: 5, 10, 15, 20, 25, ?",
          "options": [
            "30",
            "32",
            "28",
            "34"
          ],
          "answer": "30",
          "explain": "Difference is 5 each time, so next term is 30."
        },
        {
          "id": "cod_33",
          "topic": "Coding-Decoding",
          "level": "Medium",
          "company": "TCS",
          "q": "If each letter in 'LOGIC' is shifted one step forward in the alphabet, how will it be written?",
          "options": [
            "MPHJD",
            "CIGOL",
            "NQIKE",
            "LOGIC"
          ],
          "answer": "MPHJD",
          "explain": "Shift every letter by +1: LOGIC → MPHJD."
        },
        {
          "id": "tech_15",
          "topic": "C++",
          "level": "Hard",
          "company": "TCS",
          "q": "Which of these is a LIFO container adaptor?",
          "options": [
            "queue",
            "stack",
            "priority_queue",
            "deque"
          ],
          "answer": "stack",
          "explain": "Stack follows last-in-first-out."
        },
        {
          "id": "tech_49",
          "topic": "Python",
          "level": "Medium",
          "company": "TCS",
          "q": "Which collection stores key-value pairs?",
          "options": [
            "list",
            "set",
            "dict",
            "tuple"
          ],
          "answer": "dict",
          "explain": "A dictionary stores key-value mappings."
        },
        {
          "id": "tim_102",
          "topic": "Time, Speed and Distance",
          "level": "Easy",
          "company": "General",
          "q": "A car travels 105 km in 4 hours. What is its speed?",
          "options": [
            "26",
            "31",
            "21",
            "36"
          ],
          "answer": "26",
          "explain": "Speed = distance/time = 105/4 = 26 km/h."
        },
        {
          "id": "rat_80",
          "topic": "Ratio and Proportion",
          "level": "Medium",
          "company": "General",
          "q": "The ratio of boys to girls is 6:4. If the total number of students is 70, how many boys are there?",
          "options": [
            "42",
            "52",
            "32",
            "46"
          ],
          "answer": "42",
          "explain": "Total parts = 10. One part = 70/(10) = 7. Boys = 6 × 7 = 42."
        },
        {
          "id": "dir_59",
          "topic": "Direction Sense",
          "level": "Easy",
          "company": "General",
          "q": "Aman walks 3 km west and then 7 km north. In which direction is he from the start?",
          "options": [
            "North-West",
            "North-West",
            "South-West",
            "North-East"
          ],
          "answer": "North-West",
          "explain": "West plus north gives North-West."
        },
        {
          "id": "syl_73",
          "topic": "Syllogisms",
          "level": "Easy",
          "company": "General",
          "q": "Statements: Some apps are scalable. All scalable products are tested. Which conclusion follows?",
          "options": [
            "Some apps are tested",
            "All students are coders",
            "Some bugs are features",
            "None follows"
          ],
          "answer": "Some apps are tested",
          "explain": "Some apps belong to the scalable set, and all scalable products are tested."
        }
      ]
    },
    {
      "id": "infosys",
      "name": "Infosys",
      "intro": "Infosys-style test combines aptitude, puzzle solving, core coding basics, and structured communication.",
      "questions": [
        {
          "id": "per_2",
          "topic": "Percentages",
          "level": "Medium",
          "company": "Infosys",
          "q": "What is 15% of 130?",
          "options": [
            "14",
            "19",
            "24",
            "29"
          ],
          "answer": "19",
          "explain": "Convert 15% to 15/100 and multiply: 130 × 15/100 = 19."
        },
        {
          "id": "ave_45",
          "topic": "Averages",
          "level": "Easy",
          "company": "Infosys",
          "q": "Find the average of 14, 18, 22, and 26.",
          "options": [
            "20",
            "21",
            "22",
            "19"
          ],
          "answer": "20",
          "explain": "Average = sum of observations / number of observations = 80/4 = 20."
        },
        {
          "id": "num_9",
          "topic": "Number Series",
          "level": "Hard",
          "company": "Infosys",
          "q": "Find the next number in the series: 2, 5, 8, 11, 14, ?",
          "options": [
            "17",
            "19",
            "15",
            "21"
          ],
          "answer": "17",
          "explain": "Each term increases by 3, so the next term after 14 is 17."
        },
        {
          "id": "cod_34",
          "topic": "Coding-Decoding",
          "level": "Hard",
          "company": "Infosys",
          "q": "In a certain code, the word 'BRAIN' is written in reverse order. What is its code?",
          "options": [
            "NIARB",
            "ABINR",
            "BRAIN",
            "CSBJO"
          ],
          "answer": "NIARB",
          "explain": "Reverse the order of letters in BRAIN; the coded form is NIARB."
        },
        {
          "id": "tech_16",
          "topic": "C++",
          "level": "Easy",
          "company": "Infosys",
          "q": "Which feature enables one interface to behave differently for different objects?",
          "options": [
            "Polymorphism",
            "Inheritance",
            "Compilation",
            "Linking"
          ],
          "answer": "Polymorphism",
          "explain": "Polymorphism lets the same interface trigger different implementations."
        },
        {
          "id": "tech_50",
          "topic": "Python",
          "level": "Hard",
          "company": "Infosys",
          "q": "What is the output type of range(5)?",
          "options": [
            "list",
            "tuple",
            "range object",
            "set"
          ],
          "answer": "range object",
          "explain": "range() returns a range object in Python 3."
        },
        {
          "id": "tim_102",
          "topic": "Time, Speed and Distance",
          "level": "Easy",
          "company": "General",
          "q": "A car travels 105 km in 4 hours. What is its speed?",
          "options": [
            "26",
            "31",
            "21",
            "36"
          ],
          "answer": "26",
          "explain": "Speed = distance/time = 105/4 = 26 km/h."
        },
        {
          "id": "rat_68",
          "topic": "Ratio and Proportion",
          "level": "Medium",
          "company": "Infosys",
          "q": "The ratio of boys to girls is 4:7. If the total number of students is 77, how many boys are there?",
          "options": [
            "28",
            "39",
            "17",
            "32"
          ],
          "answer": "28",
          "explain": "Total parts = 11. One part = 77/(11) = 7. Boys = 4 × 7 = 28."
        },
        {
          "id": "dir_59",
          "topic": "Direction Sense",
          "level": "Easy",
          "company": "General",
          "q": "Aman walks 3 km west and then 7 km north. In which direction is he from the start?",
          "options": [
            "North-West",
            "North-West",
            "South-West",
            "North-East"
          ],
          "answer": "North-West",
          "explain": "West plus north gives North-West."
        },
        {
          "id": "syl_73",
          "topic": "Syllogisms",
          "level": "Easy",
          "company": "General",
          "q": "Statements: Some apps are scalable. All scalable products are tested. Which conclusion follows?",
          "options": [
            "Some apps are tested",
            "All students are coders",
            "Some bugs are features",
            "None follows"
          ],
          "answer": "Some apps are tested",
          "explain": "Some apps belong to the scalable set, and all scalable products are tested."
        }
      ]
    }
  ],
  "feedback": {
    "date": "April 3, 2026",
    "name": "Kalpesh Dave",
    "email": "kalpeshdave@gmail.com"
  }
};