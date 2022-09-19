import React, { useState } from 'react'
import 'animate.css'
import './style.css'


export default function Start({
    setStart,
    setGame,
    name,
    setName,
    setShowPhrase
}) {
    
    const [inputAnimation, setInputAnimation] = useState('')
    

    function handleStart(e) {
        if (name) {
            setStart(false)
            setGame(true)
            if (name === "ketryn") {
                setShowPhrase('final-text')
            }
        } else { setInputAnimation('animate__animated animate__tada') }
        e.preventDefault()
    }


    return (
        <>
            <div className="up-container">

                <h5 className='welcome-text'>Welcome to Oracle Quiz Game</h5>
                <p className='opacity-text'>The game will show you how close you are to your crush.
                    Below you will find more about the game. When ready, enter your name and click start</p>

            </div>

            <div className='under-container'>

                <div className="form" action="">
                    <input type="text"
                        value={name}
                        className={inputAnimation}
                        placeholder='enter your name'
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

        </>
    )
}