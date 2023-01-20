import React from 'react'
import './style.css'

export default function Final({
    score,
    setScore,
    setStart,
    setFinal,
    name,
    setName,
    showPhrase,
    statement
}) {
    

    const handleRestart = (e) => {
        setFinal(false)
        setStart(true)
        setScore(0)
        setName('')
        e.preventDefault()
    }

    return (
        <div className="under-container">
            <h3 className="congrats">Congrats !!!</h3>

            <h2 className={showPhrase}>Noivamento de {name} & Lipe</h2>


            <p>Final score: <span>{score}</span> / {statement.length} </p>
            <button
                className='btn-restart'
                onClick={handleRestart}
            >Play again</button>
        </div>
    )
}