import './App.css'
import React, { useState } from 'react'
import Header from './Components/Header'
import Game from './Components/Game'
import Start from './Components/Start'
import 'animate.css'

// const questions = [
//   {
//     questionText: 'Qual a cor da água?',
//     answerOptions: [
//       { option: 'Branco', value: false },
//       { option: 'Azul', value: false },
//       { option: 'Incolor', value: true },
//       { option: 'Amarelo', value: false },
//     ],
//   },
//   {
//     questionText: 'Quem é você?',
//     answerOptions: [
//       { option: 'Um artista', value: false },
//       { option: 'Um jogador', value: false },
//       { option: 'Um animal', value: false },
//       { option: 'Ninguém', value: true },
//     ],
//   },
//   {
//     questionText: 'Qual sua idade?',
//     answerOptions: [
//       { option: '26', value: true },
//       { option: '22', value: false },
//       { option: '21', value: false },
//       { option: '16', value: false },
//     ],
//   }
// ];


export default function App(props) {
  const [name, setName] = useState('')
  const [inputAnimation, setInputAnimation] = useState('')
  const [stateForm, setStateForm] = useState('')
  const [containerHidden, setContainerHidden] = useState('') 
  const [state, setState] = useState(<Start />)

  function handleStart() {
    if (!name) {
      setInputAnimation('animate__animated animate__tada')
    } else {
      console.log(name)
      setState(<Game />)
      setStateForm('hidden_form')
    }
  }

  return (
    <>
      <div className="app-container">
        <Header />

        <div className="game-box">

          {state}

          <div className='under_container' id={stateForm}>

            <div className="form" action="">
              <input type="text"
                value={name}
                className={inputAnimation}
                placeholder='enter your name here'
                onChange={(e) => setName(e.target.value)}
              >
              </input>

              <button
                onClick={handleStart}
              >
                start
              </button>
            </div>

          </div>

        </div>

      </div>
    </>
  )
}