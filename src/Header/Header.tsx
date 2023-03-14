import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import { StyledHeader } from './style'


function Header() {
  return (
    <StyledHeader>
        <img src={logo} alt="" />
        <div className='link__container'>
            <Link to={'/'}>Login</Link>
            <Link to={'/register'}>Register</Link>
        </div>
    </StyledHeader>
  )
}

export default Header