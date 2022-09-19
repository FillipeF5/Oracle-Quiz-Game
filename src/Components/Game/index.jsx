import React, { useState } from 'react'
import 'animate.css'
import './style.css'

export default function Game({
  score,
  setScore,
  setGame,
  setFinal,
  questions
}) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [scoreAnimation, setScoreAnimation] = useState('')

  function handleAnswer(value) {
    setTimeout(() => {

       if (currentQuestion + 1 < questions.length) {
        if (value) {
          setScoreAnimation('animate__animated animate__shakeY')
          setScore(score + 1)
        } else { setScoreAnimation('animate__animated animate__shakeX') }

        setCurrentQuestion(currentQuestion + 1)
      } else {
        if (value) {
          setScoreAnimation('animate__animated animate__shakeY')
          setScore(score + 1)
        }

        setGame(false)
        setFinal(true)
      }
    }, 1000);
  }

  return (

    <>

      <div className="up-container">
        <h4 className='opacity-text'> Question {currentQuestion + 1} / {questions.length} </h4>
        <p className="question-text">
          {questions[currentQuestion].questionText}
        </p>
      </div>


      <div className="under-container">

        <div id='answers'>
          {questions[currentQuestion].answerOptions.map((answerOption, index) => {
            return (
              <button
                onClick={() => handleAnswer(answerOption.value)}
                key={index}
                id='btn'
              >
                {answerOption.option}
              </button>
            )
          })}
          <p id="score" className={scoreAnimation}>score : {score}  / {questions.length} </p>
        </div>


      </div>

    </>

  )
}