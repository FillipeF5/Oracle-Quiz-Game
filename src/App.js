import './App.css'
import React, { useState } from 'react'
import Header from './Components/Header'
import Game from './Components/Game'
import Start from './Components/Start'
import Final from './Components/Final'
import 'animate.css'
import Footer from './Components/Footer'

const questions = [
  {
    questionText: 'Qual a cor da água?',
    answerOptions: [
      { option: 'Branco', value: false },
      { option: 'Azul', value: false },
      { option: 'Incolor', value: true },
      { option: 'Verde', value: false },
    ],
  },
  {
    questionText: 'Qual a moeda do Brasil?',
    answerOptions: [
      { option: 'Dolar', value: false },
      { option: 'Euro', value: false },
      { option: 'Libra', value: false },
      { option: 'Real', value: true },
    ],
  },
  {
    questionText: 'Qual nome do Batman?',
    answerOptions: [
      { option: 'Bruce', value: true },
      { option: 'Bayne', value: false },
      { option: 'Wayne', value: false },
      { option: 'Tony', value: false },
    ],
  },
  {
    questionText: 'Qual herói tem um martelo?',
    answerOptions: [
      { option: 'Hulk', value: false },
      { option: 'Super-Man', value: false },
      { option: 'Thor', value: true },
      { option: 'Spider-Man', value: false },
    ],
  }
];


export default function App() {
  const [start, setStart] = useState(true)
  const [game, setGame] = useState(false)
  const [final, setFinal] = useState(false)

  const [name, setName] = useState('')
  const [score, setScore] = useState(0)
  const [showPhrase, setShowPhrase] = useState('hidden')


  return (
    <>
      <div className="app-container">
        <Header />

        <div className="game-box">
          {start && <Start 
            setStart={setStart}
            setGame={setGame}
            name={name}
            setName={setName}
            setShowPhrase={setShowPhrase}
          />}

          {game && <Game
            questions={questions} 
            score={score}
            setScore={setScore}
            setGame={setGame}
            setFinal={setFinal}
          />}


          {final && <Final 
            questions={questions}
            score={score}
            setScore={setScore}
            setStart={setStart}
            setFinal={setFinal}
            name={name}
            setName={setName}
            showPhrase={showPhrase}
          />}
        </div>

        <Footer />
      </div>
    </>
  )
}