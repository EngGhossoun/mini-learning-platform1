
export const courses = [
  {
    id: 1,
    title: "JavaScript Basics",
    description: "Learn the fundamentals of JavaScript.",
    level: "Beginner",
    tags: ["Frontend", "JavaScript"],
    rating: 4,
    lessons: [
      { id: 1, title: "Variables", content: "Variables store data.", completed: false, image: "https://via.placeholder.com/800x300", video: "", quiz: [{question: "Which keyword declares a variable in JS?", options:["var","let","both"], answer:"both"}] },
      { id: 2, title: "Functions", content: "Functions perform tasks.", completed: false, image: "", video: "https://www.youtube.com/embed/W6NZfCO5SIk", quiz: [{question: "How do you define a function?", options:["function name()","def name()","fun name()"], answer:"function name()"}] },
      { id: 3, title: "Loops", content: "Loops repeat actions.", completed: false, image: "", video: "", quiz: [{question: "Which loop runs at least once?", options:["for","while","do-while"], answer:"do-while"}] }
    ],
    finalQuiz: [
      { question: "What does JS stand for?", options: ["Java Sound", "JavaScript", "Just Script"], answer: "JavaScript" },
      { question: "Which is NOT a JavaScript data type?", options: ["Undefined", "Number", "Character"], answer: "Character" },
      { question: "Which method converts JSON to object?", options: ["JSON.parse","JSON.stringify","JSON.toObject"], answer: "JSON.parse" },
      { question: "Which keyword creates a block scope variable?", options: ["var","let","const"], answer: "let" }
    ]
  },
  {
    id: 2,
    title: "React Essentials",
    description: "Understand the basics of React.js.",
    level: "Intermediate",
    tags: ["Frontend", "React"],
    rating: 5,
    lessons: [
      { id: 1, title: "Components", content: "Components are building blocks.", completed: false, image: "", video: "", quiz:[{question:"Components can be", options:["Class","Function","Both"], answer:"Both"}] },
      { id: 2, title: "Props & State", content: "Props pass data, State manages it.", completed: false, image: "", video: "", quiz:[{question:"Hook to manage state?", options:["useEffect","useState","useRef"], answer:"useState"}] },
      { id: 3, title: "React Router", content: "Navigate between pages.", completed: false, image: "", video: "", quiz:[{question:"React Router is for:", options:["Styling","Routing","Testing"], answer:"Routing"}] }
    ],
    finalQuiz: [
      { question: "Props are used to?", options: ["Manage state", "Pass data", "Style components"], answer: "Pass data" },
      { question: "Which hook manages state?", options: ["useEffect", "useState", "useMemo"], answer: "useState" },
      { question: "React uses JSX which is:", options: ["HTML", "JavaScript XML", "CSS"], answer: "JavaScript XML" }
    ]
  },
  {
    id: 3,
    title: "HTML & CSS Advanced",
    description: "Build responsive and accessible layouts.",
    level: "Beginner",
    tags: ["Frontend","HTML","CSS"],
    rating: 4,
    lessons: [
      { id: 1, title: "Semantic HTML", content: "Use proper tags.", completed: false, image: "", video: "", quiz:[{question:"<header> is used for?", options:["Footer","Header","Sidebar"], answer:"Header"}] },
      { id: 2, title: "Flexbox", content: "Layout with flex.", completed: false, image: "", video: "", quiz:[{question:"flex-direction property controls?", options:["Direction","Color","Size"], answer:"Direction"}] },
      { id: 3, title: "Grid", content: "Two-dimensional layouts.", completed: false, image: "", video: "", quiz:[{question:"grid-template-columns sets?", options:["Rows","Columns","Gaps"], answer:"Columns"}] }
    ],
    finalQuiz: [
      { question: "Which tag is for a paragraph?", options: ["<p>","<div>","<span>"], answer: "<p>" },
      { question: "CSS stands for?", options: ["Cascading Style Sheets","Computer Style Sheets","Creative Style System"], answer: "Cascading Style Sheets" }
    ]
  },
  {
    id: 4,
    title: "Data Structures Basics",
    description: "Arrays, Stacks, Queues and basic algorithms.",
    level: "Intermediate",
    tags: ["Algorithms","Data Structures"],
    rating: 4,
    lessons: [
      { id: 1, title: "Arrays", content: "Ordered collections.", completed: false, image: "", video: "", quiz:[{question:"Index of first element?", options:["0","1","-1"], answer:"0"}] },
      { id: 2, title: "Stacks", content: "LIFO data structure.", completed: false, image: "", video: "", quiz:[{question:"Pop operation removes?", options:["Top","Bottom","Middle"], answer:"Top"}] },
      { id: 3, title: "Queues", content: "FIFO data structure.", completed: false, image: "", video: "", quiz:[{question:"Enqueue adds at?", options:["Rear","Front","Middle"], answer:"Rear"}] }
    ],
    finalQuiz: [
      { question: "FIFO stands for?", options: ["First In First Out","Fast In Fast Out","First In Fast Out"], answer: "First In First Out" },
      { question: "Which is LIFO?", options: ["Queue","Stack","Array"], answer: "Stack" }
    ]
  },
  {
    id: 5,
    title: "Python for Beginners",
    description: "Intro to Python programming.",
    level: "Beginner",
    tags: ["Python","Backend"],
    rating: 5,
    lessons: [
      { id: 1, title: "Syntax", content: "Python uses indentation.", completed: false, image: "", video: "", quiz:[{question:"Python files end with?", options:[".py",".java",".js"], answer:".py"}] },
      { id: 2, title: "Lists", content: "Mutable sequences.", completed: false, image: "", video: "", quiz:[{question:"Lists are?", options:["Mutable","Immutable","Fixed"], answer:"Mutable"}] },
      { id: 3, title: "Dictionaries", content: "Key-value pairs.", completed: false, image: "", video: "", quiz:[{question:"Access by key using?", options:["dict[key]","dict.key","dict->key"], answer:"dict[key]"}] }
    ],
    finalQuiz: [
      { question: "Which is a Python keyword?", options: ["function","def","method"], answer: "def" },
      { question: "How to print in Python?", options: ["echo()","print()","console.log()"], answer: "print()" }
    ]
  }
];
