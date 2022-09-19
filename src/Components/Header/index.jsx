import './style.css'
import React from 'react'

const appName = 'Oracle Quiz Game'

export default function Header() {
    return(
        <header>
            <h2 className="gradient-text">{appName}</h2>
        </header>
    )
}