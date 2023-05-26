import React from 'react';
import Logo from '../assets/2.jpg'
const Header = () => {
  return( 
  <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        <a href='#'>
          <img className='h-[100px] w-[100px]' src={Logo} />
        </a>
        <button className='btn btn-sm'>Work with me</button>
      </div>
    </div>
  </header>
  
  )
};

export default Header;
