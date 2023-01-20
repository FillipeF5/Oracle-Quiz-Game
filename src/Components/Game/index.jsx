import React, { useState } from 'react'
import './style.css'


export default function Game({
  score,
  setScore,
  setGame,
  setFinal,
  questions,
  statement
}) {

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [currentAnswers, setCurrentAnswers] = useState(1)
  const [scoreAnimation, setScoreAnimation] = useState('')

  const answers = questions.answers
  const filtered = answers.filter((item) => {
    return item.identify === currentAnswers;
  })

  function handleAnswer(isCorrect) {
    setTimeout(() => {

      if (currentQuestion + 1 < statement.length) {
        if (isCorrect) {
          setScoreAnimation('animate__animated animate__shakeY')
          setScore(score + 1)
        } else { setScoreAnimation('animate__animated animate__shakeX') }

        setCurrentQuestion(currentQuestion + 1)
        setCurrentAnswers(currentAnswers + 1)
      } else {
        if (isCorrect) {
          setScoreAnimation('animate__animated animate__shakeY')
          setScore(score + 1)
        }

        setGame(false)
        setFinal(true)
      }
    }, 500);
  }


  return (

    <>

      <div className="up-container">
        <h4 className='opacity-text'> Question {currentQuestion + 1} / {statement.length} </h4>
        <p className="question-text">
          {statement[currentQuestion].questionText}
        </p>
      </div>


      <div className="under-container">

        <div id='answers'>
          {filtered.map((item) => {
            return (
              <button
                onClick={() => handleAnswer(item.isCorrect)}
                key={item}
                id='btn'
              >
                {item.answerOption}
              </button>
            )
          })}
          <p id="score" className={scoreAnimation}>score : {score}  / {statement.length} </p>
        </div>


      </div>

    </>

  )
}