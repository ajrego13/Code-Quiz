let quiz = [{
    question: 'JavaScript can be written',
    id: 1,
    choice1: 'a) directly into JS file and included into HTML',
    choice2: 'b) directly on the server page',
    choice3: 'c) directly into HTML pages',
    choice4: 'd) all of the mentioned',
    answer: 'choice1'
  },
  {
    question: 'A proper scripting language is a',
    id: 2,
    choice1: 'a) High level programming language',
    choice2: 'b) Assembly level programming language',
    choice3: 'c) Machine level programming language',
    choice4: 'd) Low level programming language',
    answer: 'choice1'
  },
  {
    question: 'JavaScript Code can be called by using',
    id: 3,
    choice1: 'a) RMI',
    choice2: 'b) Triggering Event',
    choice3: 'c) Preprocessor',
    choice4: 'd) Function / Method',
    answer: 'choice4'
  },
  {
    question: 'Which of the following is not considered as an error in JavaScript ?',
    id: 4,
    choice1: 'a) Syntax error',
    choice2: 'b) Missing of semicolons',
    choice3: 'c) Division by zero',
    choice4: 'd) All of the mentioned',
    answer: 'choice3'
  },
  {
    question: 'The snippet that has to be used to check if “a” is not equal to “null” is',
    id: 5,
    choice1: 'a) if (a != null)',
    choice2: 'b) if (!a)',
    choice3: 'c) if (a!null)',
    choice4: 'd) if (a !== null)',
    answer: 'choice4'
  },
  {
    question: 'The statement a === b refers to',
    id: 6,
    choice1: 'a) Both a and b are equal in value, type and reference address',
    choice2: 'b) Both a and b are equal in value',
    choice3: 'c) Both a and b are equal in value and type',
    choice4: 'd) There is no such statement',
    answer: 'choice3'
  },
  {
    question: 'Assume that we have to convert “false” that is a non - string to string.The command that we use is(without invoking the “new ” operator)',
    id: 7,
    choice1: 'a) false.toString()',
    choice2: 'b) String(false)',
    choice3: 'c) String newvariable =”false”',
    choice4: 'd) Both false.toString() and String(false)',
    answer: 'choice4'
  },
  {
    question: 'Among the following, which one is a ternary operator ?',
    id: 8,
    choice1: 'a) +',
    choice2: 'b) :',
    choice3: 'c) –',
    choice4: 'd) ?:',
    answer: 'choice4'
  },
  {
    question: 'The unordered collection of properties, each of which has a name and a value is called',
    id: 9,
    choice1: 'a) String',
    choice2: 'b) Object',
    choice3: 'c) Serialized Object',
    choice4: 'd) All of the mentioned',
    answer: 'choice2'
  },
  {
    question: 'The object has three object attributes namely',
    id: 10,
    choice1: 'a) Class, parameters, object’s extensible flag',
    choice2: 'b) Prototype, class, objects’ parameters',
    choice3: 'c) Prototype, class, object’s extensible flag',
    choice4: 'd) Native object, Classes and Interfaces and Object’s extensible flag',
    answer: 'choice3'
  },
  {
    question: 'A linkage of series of prototype objects is called as :',
    id: 11,
    choice1: 'a) prototype stack',
    choice2: 'b) prototype chain',
    choice3: 'c) prototype class',
    choice4: 'd) prototypes',
    answer: 'choice2'
  },
  {
    question: `Consider the below given syntax
  book[datatype] = assignment_value;
  In the above syntax, the datatype within the square brackets must be`,
    id: 12,
    choice1: 'a) An integer',
    choice2: 'b) A String',
    choice3: 'c) An object',
    choice4: 'd) None of the mentioned',
    answer: 'choice2'
  },
  {
    question: 'To determine whether one object is the prototype of(or is part of the prototype chain of) another object, one should use the',
    id: 13,
    choice1: 'a) isPrototypeOf() method',
    choice2: 'b) equals() method',
    choice3: 'c) === operator',
    choice4: 'd) none of the mentioned',
    answer: 'choice1'
  },
  {
    question: `Consider the following code snippet
  function f() { };
  The above prototype represents a`,
    id: 14,
    choice1: 'a) Function f',
    choice2: 'b) A custom constructor',
    choice3: 'c) Prototype of a function',
    choice4: 'd) Not valid',
    answer: 'choice2'
  },
  {
    question: 'What is the purpose of a return statement in a function?',
    id: 15,
    choice1: 'a) Returns the value and continues executing rest of the statements, if any',
    choice2: 'b) Returns the value and stops the program',
    choice3: 'c) Returns the value and stops executing the function',
    choice4: 'd) Stops executing the function and returns the value',
    answer: 'choice4'
  },
  {
    question: 'What will happen if a return statement does not have an associated expression ?',
    id: 16,
    choice1: 'a) It returns the value 0',
    choice2: 'b) It will throw an exception',
    choice3: 'c) It returns the undefined value',
    choice4: 'd) None of the mentioned',
    answer: 'choice3'
  },
  {
    question: 'A function with no return value is called',
    id: 17,
    choice1: 'a) Procedures',
    choice2: 'b) Method',
    choice3: 'c) Static function',
    choice4: 'd) Dynamic function',
    answer: 'choice1'
  },
  {
    question: 'Which is an equivalent code to invoke a function m of class o that expects two arguments x and y ?',
    id: 18,
    choice1: 'a) o(x, y);',
    choice2: 'b) o.m(x) && o.m(y);',
    choice3: 'c) m(x, y);',
    choice4: 'd) o.m(x, y);',
    answer: 'choice4'
  },
  {
    question: 'Which is an equivalent code for o.m(x,y) ?',
    id: 19,
    choice1: 'a) o.m(x) && o.m(y);',
    choice2: 'b) o[“m”](x, y);',
    choice3: 'c) o(m)[“x”, ”y”];',
    choice4: 'd) o.m(x && y);',
    answer: 'choice2'
  },
  {
    question: 'The method or operator used to identify the array is',
    id: 20,
    choice1: 'a) isarrayType()',
    choice2: 'b) ==',
    choice3: 'c) ===',
    choice4: 'd) typeof',
    answer: 'choice4'
  },
  {
    question: `Consider the following code snippet:
  var grand_Total = eval(“10 * 10 + 5”);
  The output for the above statement would be:`,
    id: 21,
    choice1: 'a) 10 * 10 + 5',
    choice2: 'b) 105 as a string',
    choice3: 'c) 105 as an integer value',
    choice4: 'd) Exception is thrown',
    answer: 'choice4'
  }]
  
  
  let correctAnswers = localStorage.getItem('correctAnswers') || 0 
  let countDown = localStorage.getItem('countDown') || 120 
  let index = 0 
  let highScore = JSON.parse(localStorage.getItem('highScores')) || [] 
  let middleDisplay = document.getElementById('middle')
  let timerDisplay = document.getElementById('countDisplay')
  let leftDisplay = document.getElementById('leftSide')
  let subtractTime = 10 
  let interval
  let shuffleQuiz = []
  let shuffleChoices = []
  
  
  const renderHighScoreLink = () => {
    let lnkHighScore = document.createElement("a")
    leftDisplay.innerHTML = ""
    lnkHighScore.textContent = "High Scores"
    lnkHighScore.addEventListener('click', function () {
      clearInterval(interval)
      timerDisplay.innerHTML = ""
      middleDisplay.innerHTML = ""
      leftDisplay.innerHTML = ""
      let Card = renderHighScoreCard()
      middleDisplay.append(Card)
    })
    leftDisplay.append(lnkHighScore)
  }
  
  
  const renderQuizStartup = () => {
    renderHighScoreLink()
  
    let quizCard = document.createElement('div')
    quizCard.className = "card"
  
    let quizCardBody = document.createElement('div')
    quizCardBody.className = "card-body"
  
    let quizCardTitle = document.createElement('h1')
    quizCardTitle.className = "card-title"
    quizCardTitle.id = "quizTitle"
    quizCardTitle.textContent = "Javascript Code Quiz"
  
    let quizTitleHR = document.createElement('hr')
    quizTitleHR.id = "descriptionLine "
  
    let quizCardText = document.createElement('p')
    quizCardText.className = "card-text"
    quizCardText.textContent = "Click start quiz button to start the 2 minute Javascript Code Quiz."
  
    let quizCardStartButton = document.createElement('button')
    quizCardStartButton.classList.add('btn')
    quizCardStartButton.classList.add('btn-primary')
    quizCardStartButton.textContent = "Start"
    quizCardStartButton.id = "btnStartQuiz"
  
    let quizCardNewLine = document.createElement('br')
    quizCardBody.append(quizCardTitle)
    quizCardBody.append(quizTitleHR)
    quizCardBody.append(quizCardText)
    quizCardBody.append(quizCardNewLine)
    quizCardBody.append(quizCardStartButton)
    middleDisplay.append(quizCardBody)
  }
  const renderScoreCard = (score) => {
    let scoreCard = document.createElement('div')
    scoreCard.className = "card"
  
    let scoreCardBody = document.createElement('div')
    scoreCardBody.className = "card-body"
  
    let scoreCardTitle = document.createElement('h1')
    scoreCardTitle.className = "card-title"
    scoreCardTitle.id = "ScoreTitle"
    scoreCardTitle.textContent = "Done"
  
    let scoreTitleHR = document.createElement('hr')
    scoreTitleHR.id = "descriptionLine "
  
    let scoreCardText = document.createElement('p')
    scoreCardText.className = "card-text"
    scoreCardText.textContent = `Your final score is ${score}`
  
    let scoreCardForm = document.createElement('form')
    let scoreParagraph = document.createElement('p')
    let scoreLabel = document.createElement('label')
    scoreLabel.for = 'scoreInput'
    scoreLabel.appendChild(document.createTextNode('Please enter your Initials.'))
    scoreParagraph.append(scoreLabel)
  
    let scoreLabelNewLine = document.createElement('br')
    scoreParagraph.append(scoreLabelNewLine)
  
    let scoreInput = document.createElement('input')
    scoreInput.id = "scoreInput"
    scoreInput.name = "scoreName"
    scoreInput.type = "text"
  
    scoreParagraph.append(scoreInput)
  
    let scoreSubmitButton = document.createElement('button')
    scoreSubmitButton.classList.add('btn')
    scoreSubmitButton.classList.add('btn-primary')
    scoreSubmitButton.id = 'ScoreSubmit'
    scoreSubmitButton.value = score
    scoreSubmitButton.textContent = "Submit"
  
    let scoreCardNewLine1 = document.createElement('br')
    let scoreCardNewLine2 = document.createElement('br')
    let scoreCardNewLine3 = document.createElement('br')
  
    scoreCardBody.append(scoreCardTitle)
    scoreCardBody.append(scoreTitleHR)
    scoreCardBody.append(scoreCardText)
    scoreCardBody.append(scoreCardNewLine1)
    scoreCardBody.append(scoreCardForm)
    scoreCardBody.append(scoreParagraph)
    scoreCardBody.append(scoreCardNewLine2)
    scoreCardBody.append(scoreSubmitButton)
    scoreCardBody.append(scoreCardNewLine3)
    return scoreCardBody
  }
  
  const renderQuestionCard = function (questionItem) {
    let questionCard = document.createElement('div')
    questionCard.className = "card"
  
    let questionCardBody = document.createElement('div')
    questionCardBody.className = "card-body"
  
    let questionCardTitle = document.createElement('h1')
    questionCardTitle.className = "card-title"
    questionCardTitle.id = questionItem.id
    questionCardTitle.textContent = "Question " + questionItem.id
  
    let questionTitleHR = document.createElement('hr')
    questionTitleHR.id = "descriptionLine "
  
    let questionCardText = document.createElement('p')
    questionCardText.className = "card-text"
    questionCardText.textContent = questionItem.question
  
    let questionCardChoiceButton1 = document.createElement('button')
    questionCardChoiceButton1.classList.add('btn')
    questionCardChoiceButton1.classList.add('btn-secondary')
  
    questionCardChoiceButton1.textContent = questionItem.choice1
    questionCardChoiceButton1.id = 'Question-' + questionItem.id + '-choice1'
    questionCardChoiceButton1.value = 'choice1'
  
    let questionCardChoiceButton2 = document.createElement('button')
    questionCardChoiceButton2.classList.add('btn')
    questionCardChoiceButton2.classList.add('btn-secondary')
    questionCardChoiceButton2.textContent = questionItem.choice2
    questionCardChoiceButton2.id = 'Question-' + questionItem.id + '-choice2'
    questionCardChoiceButton2.value = 'choice2'
  
    let questionCardChoiceButton3 = document.createElement('button')
    questionCardChoiceButton3.classList.add('btn')
    questionCardChoiceButton3.classList.add('btn-secondary')
    questionCardChoiceButton3.textContent = questionItem.choice3
    questionCardChoiceButton3.id = 'Question-' + questionItem.id + '-choice3'
    questionCardChoiceButton3.value = 'choice3'
  
    let questionCardChoiceButton4 = document.createElement('button')
    questionCardChoiceButton4.classList.add('btn')
    questionCardChoiceButton4.classList.add('btn-secondary')
    questionCardChoiceButton4.textContent = questionItem.choice4
    questionCardChoiceButton4.id = 'Question-' + questionItem.id + '-choice4'
    questionCardChoiceButton4.value = 'choice4'
  
    let questionCardNewLine1 = document.createElement('br')
    let questionCardNewLine2 = document.createElement('br')
    let questionCardNewLine3 = document.createElement('br')
    let questionCardNewLine4 = document.createElement('br')
    let questionCardNewLine5 = document.createElement('br')
    let answerResult = document.createElement('div')
    answerResult.id = "Result" + questionItem.id
  
    questionCardBody.append(questionCardTitle)
    questionCardBody.append(questionTitleHR)
    questionCardBody.append(questionCardText)
    questionCardBody.append(questionCardNewLine1)
    questionCardBody.append(questionCardChoiceButton1)
    questionCardBody.append(questionCardNewLine2)
    questionCardBody.append(questionCardChoiceButton2)
    questionCardBody.append(questionCardNewLine3)
    questionCardBody.append(questionCardChoiceButton3)
    questionCardBody.append(questionCardNewLine4)
    questionCardBody.append(questionCardChoiceButton4)
    questionCardBody.append(questionCardNewLine5)
    questionCardBody.append(answerResult)
    return questionCardBody
  
  }
  const renderHighScoreCard = function () {
    let highScoreCard = document.createElement('div')
    highScoreCard.className = "card"
  
    let highScoreCardBody = document.createElement('div')
    highScoreCardBody.className = "card-body"
  
    let highScoreCardTitle = document.createElement('h1')
    highScoreCardTitle.className = "card-title"
    highScoreCardTitle.id = "HighScoreTitle"
    highScoreCardTitle.textContent = "High Scores"
    let highScoreTitleHR = document.createElement('hr')
    highScoreTitleHR.id = "descriptionLine "
  
    let highScoreList = document.createElement('ol')
    highScoreList.className = "card-text"
  
    for (let i = 0; i < highScore.length; i++) {
      let itemElem = document.createElement('li')
      itemElem.textContent = 'Initials: ' + highScore[i].initials + ' - Score: ' + highScore[i].score
      highScoreList.append(itemElem)
    }
  
    let goBackButton = document.createElement('button')
    goBackButton.classList.add('btn')
    goBackButton.classList.add('btn-info')
    goBackButton.id = 'highScoreGoBack'
    goBackButton.textContent = "Go Back"
  
    let clearButton = document.createElement('button')
    clearButton.classList.add('btn')
    clearButton.classList.add('btn-info')
    clearButton.id = 'highScoreClear'
    clearButton.textContent = "Clear"
  
    let highScoreCardNewLine1 = document.createElement('br')
    let highScoreCardNewLine2 = document.createElement('br')
    let highScoreCardNewLine3 = document.createElement('br')
  
    highScoreCardBody.append(highScoreCardTitle)
    highScoreCardBody.append(highScoreTitleHR)
    highScoreCardBody.append(highScoreCardNewLine1)
    if (highScore.length > 0) {
      highScoreCardBody.append(highScoreList)
    }
    highScoreCardBody.append(highScoreCardNewLine2)
    highScoreCardBody.append(goBackButton)
    highScoreCardBody.append(clearButton)
  
    return highScoreCardBody
  }
  const showHighScore = () => {
    timerDisplay.innerHTML = ""
    leftDisplay.innerHTML = ""
    middleDisplay.innerHTML = ""
    let finalScore = localStorage.getItem('correctAnswers')
    let Card = renderHighScoreCard()
    middleDisplay.append(Card)
  }
  const showScore = () => {
    middleDisplay.innerHTML = ""
    let Card = renderScoreCard(localStorage.getItem('correctAnswers'))
    middleDisplay.append(Card)
  }
  const shuffleArray = (a) => {
    var j, x, i
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1))
      x = a[i]
      a[i] = a[j]
      a[j] = x
    }
    return a
  }
  const idAjustQuizArray = (a) => {
    for (i = 1; i < a.length; i++) {
      a[i].id = i
      let shuffleChoiceArray = shuffleArray(a[i].choices)
      a[i].choices = shuffleChoiceArray
    }
    return a
  }
  const startTimeQuiz = () => {
    correctAnswers = 0
    index = 0
    timerDisplay.innerHTML = ""
    renderHighScoreLink()
    startCountDown()
    showQuiz(quiz[index])
  }
  const startCountDown = () => {
    setTimer(countDown, timerDisplay)
  }
  const showQuiz = (quiz) => {
    middleDisplay.innerHTML = ""
    let Card = renderQuestionCard(quiz)
    middleDisplay.append(Card)
  }
  

  const startQuiz = () => {
    startTimeQuiz()
  }
  
  const setTimer = (duration, display) => {
    let timer = duration, minutes, seconds
    interval = setInterval(() => {
      minutes = parseInt(timer / 60, 10)
      seconds = parseInt(timer % 60, 10)
      minutes = minutes < 10 ? "0" + minutes : minutes
      seconds = seconds < 10 ? "0" + seconds : seconds
      display.textContent = "Time: " + minutes + ":" + seconds
      if (timer === 0) {
        clearInterval(interval)
        showScore()
      }
      if (--timer < 0) {
        timer = duration
        clearInterval(interval)
        showScore()
      }
      else {
        localStorage.setItem('timeLeft', timer) 
      }
    }, 1000);
  }
  

  document.addEventListener('click', (event) => {
    if (event.target && event.target.id == 'btnStartQuiz') {
      startQuiz()
    }
    if (event.target.id == 'ScoreSubmit') {
      highScore.push({
        initials: document.getElementById('scoreInput').value,
        score: event.target.value
      })
      localStorage.setItem('highScores', JSON.stringify(highScore))
      showHighScore()
    }
    if (event.target.id == 'highScoreClear') {
      middleDisplay.innerHTML = ""
      highScore = []
      localStorage.setItem('highScores', JSON.stringify(highScore))
      timerDisplay.innerHTML = ""
      leftDisplay.innerHTML = ""
      let Card = renderHighScoreCard()
      middleDisplay.append(Card)
    }
    if (event.target.id == 'highScoreGoBack') {
      middleDisplay.innerHTML = ""
      renderQuizStartup()
    }
    
    if (event.target.className == 'btn btn-secondary') {
      let clickId = event.target.id
      let clickIdArray = clickId.split('-')
      index = parseInt(clickIdArray[1]) - 1
      if (index < (quiz.length)) {
        let quizAnswer = quiz[index]
        let userChoice = event.target.value
        let domID = "Result" + quizAnswer.id
        let resultDisplay = ''
        let timeLeft = parseInt(localStorage.getItem('timeLeft')) 
        if (userChoice === quizAnswer.answer) {
          resultDisplay = "Correct Answer!"
          correctAnswers++
          localStorage.setItem('correctAnswers', correctAnswers)
        }
        else {
          resultDisplay = "Incorrect Answer!"
          timeLeft = timeLeft - subtractTime 
          localStorage.setItem('timeLeft', timeLeft) 
          clearInterval(interval)
          setTimer(timeLeft, timerDisplay)
        }
        document.getElementById(domID).innerHTML = resultDisplay
        index++
        if (index < quiz.length && timeLeft > 0) {
          setTimeout(function () {
            showQuiz(quiz[index])
          }, 2000)
        }
        else {
          clearInterval(interval)
          showScore()
        }
      }
      else {
        clearInterval(interval)
        showScore()
      }
    }
  }
  )
  
  renderQuizStartup()
 
  