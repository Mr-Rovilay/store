import React from 'react'
import HeaderMenu from './HeaderMenu'
import Logo from './Logo'
import Container from './Container'

const Header = () => {
  return (
    <header className="border-b border-gray-200 bg-white shadow-sm py-5">
    <Container className='flex justify-between items-center gap-7 text-lightColor dark:text-darkColor'>
   
        <HeaderMenu />
        <Logo />
    
      <div className="">
        {/* Add any additional header elements here, like search or cart */}
        right
      </div>
    </Container>
    </header>
  )
}

export default Header