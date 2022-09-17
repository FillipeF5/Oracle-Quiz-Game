import React, { useState } from 'react'
import 'animate.css'
import './style.css'

const questions = [
  {
    questionText: 'Qual a cor da água?',
    answerOptions: [
      { option: 'Branco', value: false },
      { option: 'Azul', value: false },
      { option: 'Incolor', value: true },
      { option: 'Amarelo', value: false },
    ],
  },
  {
    questionText: 'Quem é você?',
    answerOptions: [
      { option: 'Um artista', value: false },
      { option: 'Um jogador', value: false },
      { option: 'Um animal', value: false },
      { option: 'Ninguém', value: true },
    ],
  },
  {
    questionText: 'Qual sua idade?',
    answerOptions: [
      { option: '26', value: true },
      { option: '22', value: false },
      { option: '21', value: false },
      { option: '16', value: false },
    ],
  }
]

export default function Game(props) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [scoreAnimation, setScoreAnimation] = useState('')
  const [answerAnimation, setAnswerAnimation] = useState('')


  const nextQuestion = currentQuestion + 1
  // const correct = questions[currentQuestion].answerOptions.filter(item => {
  //   return item.value === true
  // })

  function handleAnswer(value) {
    setTimeout((e) => {
      if (value) {
        setScoreAnimation('animate__animated animate__shakeY')
        setScore(score + 1)
      } else { setScoreAnimation('animate__animated animate__wobble') }
      if (nextQuestion < questions.length) {
        setAnswerAnimation('animate__animated animate__fadeIn')
        setCurrentQuestion(nextQuestion)
      }
    }, 1000);
  }

  return (

    <>

      <div className="up_container">
        <h4 className='opacity_text'> Question {nextQuestion} / {questions.length} </h4>
        <p>
          {questions[currentQuestion].questionText}
        </p>
      </div>


      <div className="under_container">

        <div className='answers'>
          {questions[currentQuestion].answerOptions.map((answerOption, index) => {
            return (
              <button
                onClick={() => handleAnswer(answerOption.value)}
                className={answerAnimation}
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