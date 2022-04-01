import React from 'react'
import Nav from './Nav';

function Header() {
  return (
       <header>
           <div className='logo'>
               <img src='' alt=''></img>
           </div>
           <div className='nav_header'>
               <Nav link="Entrée"/>
               <Nav link="Plat"/>
               <Nav link="Dessert"/>
           </div>
       </header>
  )
}

export default Header;