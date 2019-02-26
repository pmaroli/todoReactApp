import React from 'react'

const Navbar = ({clearAll}) => {
    return (
        <div className="navbar">
            <a href="#">HOME</a>
            <a href="about.html" class="right">ABOUT</a>
            <a href="#" onClick={()=>{clearAll()}} class="right clearall" id="clearall">CLEAR ALL TODOS</a>
        </div>
    )
}

export default Navbar