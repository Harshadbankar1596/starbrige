import React from 'react'
import "./nav.css"
const nav = () => {
  return (
    <div className='nav'>
      <div className="logosectio">
        <p id="logoname">StarBridge India</p>
      </div>
      <div className="homes">
        <a href="" id="homes">home</a>
        <a href="" id="homes">about</a>
        <a href="" id="homes">contact</a>
      </div>
      <div className="login">
        <button className='btn'>login</button>
      </div>
      <div className="menu">| | |</div>
    </div>
  )
}
export default nav
