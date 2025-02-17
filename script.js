document.addEventListener("DOMContentLoaded", () => {
  const quizcontainer = document.getElementById("quiz-container");
  const questionpaper = document.getElementById("question-paper");
  const qustiontext = document.getElementById("question-text");
  const choicelist = document.getElementById("choice-list");
  const nextbtn = document.getElementById("next-btn");
  const resultcontainer = document.getElementById("result-container");
  const restartbtn = document.getElementById("restart-btn");
  const startbtn = document.getElementById("start-btn");
  const scoredisplay = document.getElementById("score");
  const quizQuestions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correctAnswer: "Paris",
    },
    {
      question:
        "Which programming language is primarily used for web development?",
      options: ["Python", "C++", "JavaScript", "Java"],
      correctAnswer: "JavaScript",
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Jupiter",
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      options: ["Harper Lee", "J.K. Rowling", "Ernest Hemingway", "Mark Twain"],
      correctAnswer: "Harper Lee",
    },
    {
      question: "What is the chemical symbol for water?",
      options: ["H2O", "O2", "CO2", "NaCl"],
      correctAnswer: "H2O",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Venus", "Mercury"],
      correctAnswer: "Mars",
    },
    {
      question: "Who painted the Mona Lisa?",
      options: [
        "Vincent van Gogh",
        "Leonardo da Vinci",
        "Pablo Picasso",
        "Claude Monet",
      ],
      correctAnswer: "Leonardo da Vinci",
    },
    {
      question: "What is the smallest prime number?",
      options: ["1", "2", "3", "5"],
      correctAnswer: "2",
    },
    {
      question: "Which ocean is the largest by area?",
      options: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Pacific Ocean",
        "Arctic Ocean",
      ],
      correctAnswer: "Pacific Ocean",
    },
    {
      question: "What year did the Titanic sink?",
      options: ["1905", "1912", "1920", "1930"],
      correctAnswer: "1912",
    },
    {
    question: "What is the capital city of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    correctAnswer: "Canberra"
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
    correctAnswer: "William Shakespeare"
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Fe", "Pb"],
    correctAnswer: "Au"
  },
  ];

  let currentquestionindex = 0;
  let score = 0;
  //we just want to pass the reference of the function and not the execution of it so we used startquiz
  //and not startquiz()
  startbtn.addEventListener("click", startquiz);
  nextbtn.addEventListener("click", () => {
    currentquestionindex++;
    if (currentquestionindex < quizQuestions.length) {
      showquestion();
    } else {
      showresult();
    }
  });
  restartbtn.addEventListener("click", () => {
    currentquestionindex = 0;
    score = 0;
    resultcontainer.classList.add("hidden");
    startquiz();
  });
  function startquiz() {
    startbtn.classList.add("hidden");
    resultcontainer.classList.add("hidden");
    questionpaper.classList.remove("hidden");
    showquestion();
  }
  function showquestion() {
    nextbtn.classList.add("hidden");
    qustiontext.textContent = quizQuestions[currentquestionindex].question;
    choicelist.innerHTML = ""; //useful to clear choices when successive questions are being asked
    quizQuestions[currentquestionindex].options.forEach((choice) => {
      const li = document.createElement("li");
      li.textContent = choice;
      li.addEventListener("click", () => selectanswer(choice)); //we are not adding selectanswer fumction here because we have to pass the choice
      //and if we do so the select answer will be called before the choice is selected
      choicelist.append(li);
    });
  }
  function selectanswer(choice) {
    const correctAnswer = quizQuestions[currentquestionindex].correctAnswer;
    if (choice === correctAnswer) {
      score++;
    }
    nextbtn.classList.remove("hidden");
  }
  function showresult() {
    questionpaper.classList.add("hidden");
    nextbtn.classList.add("hidden");
    resultcontainer.classList.remove("hidden");
    scoredisplay.textContent = `${score} out of ${quizQuestions.length}`;
  }
});
