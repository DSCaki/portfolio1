import React from 'react';
import Image from '../assets/2.jpg'
import {FaGithub, FaYoutube, FaLinkedinIn} from 'react-icons/fa'
import {TypeAnimation} from 'react-type-animation'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
import {Link} from 'react-scroll';
const Banner = () => {
  return( 
  <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
  <div className='container mx-auto'>
    <div className='flex flex-col gap-y8 lg:flex-row lg:items-center lg:gap-x-12'>
      <div className='flex-1 text-center font-secondary lg:text-left'>
        <motion.h1 
        variants={fadeIn('up', 2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.7}}
        className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
        
          DDC-<span>CODE</span>

        </motion.h1>

        <motion.div
        variants={fadeIn('up', 1.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.7}}
        className='mb-6 text-[36px] lg;text-[60px] font-secondary font-semibold uppercase leading-[1]'>
          
            <span className='mr-4'>We are </span>
          
          <TypeAnimation sequence={[
            'Developer',
            2000,
            'UI/UX Developer',
            2000,
            'Designer',
            2000,
          ]}
          speed={50}
          className='text-accent'
          wrapper='span'
          repeat={Infinity} 
          />

        </motion.div>
          
        <motion.p 
          variants={fadeIn('up', 1.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.7}}
          className='mb-8 max-w-lg mx-auto lg:mx-0'>
          DEDSEC_CODES is a devloping platform we have exprieince on Web-Design & Development, Graphic Design and Software Development
        </motion.p>

        <motion.div 
          variants={fadeIn('up', 2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.7}}
          className='flex max-w-max gap-6 items-center mb-12 mx-auto lg:mx-0'>
            
            <button className='btn btn-lg'><Link to='contact'>Contact us</Link></button>
            
            <a href='https://www.linkedin.com/in/akthar-aki-578b45129/'className='text-gradient btn-link'>
              My Portfolio
            </a>

        </motion.div>

        <motion.div 
          variants={fadeIn('up', 2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.7}}
          className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
            <a href='https://github.com/'><FaGithub /></a>
            <a href='https://youtube.com/'><FaYoutube /></a>
            <a href='https://www.linkedin.com/in/akthar-aki-578b45129/'><FaLinkedinIn /></a>
        </motion.div>

      </div>
      
      <motion.div 
      variants={fadeIn('left', 3)}
      initial='hidden'
      whileInView={'show'}
      className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
        <img src={Image} alt='' />
      </motion.div>

    </div>
  </div>
  </section>
  )
};

export default Banner;
