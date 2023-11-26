import React from 'react'
import "./Navbar.css"

const Navbar = () => {
    function codeBtn(){
        window.open("https://github.com/RakeshRoy-977/Responsive-Nabbar")
    }

    function LinkedinBtn(){
        window.open("https://www.linkedin.com/in/rakeshroy977/")
    }
    const Your_Text = "DirectWP"

  return (
    <div className='mainBox'>
        <div className='rightSide'>
            <span className='titelText'>{Your_Text}</span>
            {/* <img src="" alt="" /> */}
        </div>
        <div className="leftSide">
            <button onClick={codeBtn} className='codeBtn'>Source Code</button>
            <button onClick={LinkedinBtn} className='LinkedinBtn'>Linkedin Profile</button>
        </div>
    </div>
  )
}

export default Navbar