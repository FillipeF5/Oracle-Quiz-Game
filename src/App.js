import './App.css'
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Header from './Components/Header'
import Game from './Components/Game'
import Start from './Components/Start'
import Final from './Components/Final'
import 'animate.css'
import Footer from './Components/Footer'


// const questions = [
//   {
//     questionText: 'Qual a cor da água?',
//     answerOptions: [
//       { option: 'Branco', value: false },
//       { option: 'Azul', value: false },
//       { option: 'Incolor', value: true },
//       { option: 'Verde', value: false },
//     ],
//   },
//   {
//     questionText: 'Qual a moeda do Brasil?',
//     answerOptions: [
//       { option: 'Dolar', value: false },
//       { option: 'Euro', value: false },
//       { option: 'Libra', value: false },
//       { option: 'Real', value: true },
//     ],
//   },
//   {
//     questionText: 'Qual nome do Batman?',
//     answerOptions: [
//       { option: 'Bruce', value: true },
//       { option: 'Bayne', value: false },
//       { option: 'Wayne', value: false },
//       { option: 'Tony', value: false },
//     ],
//   },
//   {
//     questionText: 'Qual herói tem um martelo?',
//     answerOptions: [
//       { option: 'Hulk', value: false },
//       { option: 'Super-Man', value: false },
//       { option: 'Thor', value: true },
//       { option: 'Spider-Man', value: false },
//     ],
//   }
// ];


export default function App() {

  const [start, setStart] = useState(true)
  const [game, setGame] = useState(false)
  const [final, setFinal] = useState(false)

  const [name, setName] = useState('')
  const [score, setScore] = useState(0)
  const [showPhrase, setShowPhrase] = useState('hidden')

  const [questions, setQuestions] = useState([])

  const [statement, setStatement] = useState()



  useEffect(() => {
    axios.get('https://api-sa-east-1.hygraph.com/v2/cl4syg68z2n3t01zcg8wmdhau/master?operationName=Questions&query=query%20Questions%20%7B%0A%20%20questions%20%7B%0A%20%20%20%20questionText%0A%20%20%20%20identify%0A%20%20%20%20id%0A%20%20%7D%0A%20%20answers(last%3A%2014)%20%7B%0A%20%20%20%20answerOption%0A%20%20%20%20identify%0A%20%20%20%20isCorrect%0A%20%20%20%20id%0A%20%20%7D%20%20%20%0A%7D%0A')
      .then(function (res) {
        setQuestions(res.data.data)
        setStatement(res.data.data.questions)
      })
      .catch(function (err) {
        console.log(err.message)
      })
  }, [])

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
            statement={statement}
            setScore={setScore}
            setGame={setGame}
            setFinal={setFinal}
          />}


          {final && <Final
            score={score}
            setScore={setScore}
            setStart={setStart}
            setFinal={setFinal}
            statement={statement}
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