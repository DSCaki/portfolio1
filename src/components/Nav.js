import React from 'react';

//import icons
import {BiHomeAlt, BiUser} from 'react-icons/bi';
import {BsClipboardData, BsBriefcase, BsChatSquare} from 'react-icons/bs';
import {Link} from 'react-scroll';

const Nav = () => {
  return( 
  <nav className='fixed bottom-2 lg:bottom-5 w-full overflow-hidden z-50'>
    <div className='conainer mx-auto'>
      <div className='w-full bg-black/20 h-[80px] backdrop-blur-2xl rounded-full max-w-[350px] mx-auto px-4 flex items-center justify-between text-2xl text-white/50'>
        <Link 
          to='home' 
          activeClass='active'
          smooth={true}
          spy={true}
          offset={-200}
          className='cursor-pointer w-[50px] h-[50px] flex items-center jusify-center'>
        <BiHomeAlt />
        </Link>
        <Link 
          to='about' 
          activeClass='active'
          smooth={true}
          spy={true}
          className='cursor-pointer w-[50px] h-[50px] flex items-center jusify-center'>
        <BiUser />
        </Link>
        <Link 
          to='services' 
          activeClass='active'
          smooth={true}
          spy={true}
          className='cursor-pointer w-[50px] h-[50px] flex items-center jusify-center'>
        <BsClipboardData />
        </Link>
        <Link 
          to='work' 
          activeClass='active'
          smooth={true}
          spy={true}
          className='cursor-pointer w-[50px] h-[50px] flex items-center jusify-center'>
        <BsBriefcase />
        </Link>
        <Link 
          to='contact' 
          activeClass='active'
          smooth={true}
          spy={true}
          className='cursor-pointer w-[50px] h-[50px] flex items-center jusify-center'>
        <BsChatSquare />
        </Link>
      </div>
    </div>

  </nav>
  )
};

export default Nav;
