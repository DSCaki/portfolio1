import React from 'react';
import CountUp from 'react-countup';
import{useInView} from 'react-intersection-observer'
import{motion} from 'framer-motion'
import{fadeIn} from '../variants'
import {Link} from 'react-scroll';

const About = () => {
  
  const [ref, inView] = useInView({
    threshold: 0.5,
  })
  
  return (
  <section className='section' id='about' ref={ref}>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        {/*img*/}
        <motion.div 
        variants={fadeIn('right', 0.4)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'>
        </motion.div>
        {/*text */}
        <motion.div 
        variants={fadeIn('left', 0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        className='flex-1'>
          <h2 className='h2 text-accent'>About me</h2>
          <h3 className='h3 mb-4'>I'm a Front-end Developer with over 1year of Experience.</h3>
          <p className='mb-6'>A solid record of health, safety and environment focus when working on projects, and a commitment to personal and professional a development.</p>
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div>
              <div className='text-[30px] font-tertiary text-gradient mb-2'>
                { inView ? <CountUp start={-4} end={3} duration={4} /> : null }
              </div>
              <div className='font-primarytext-sm tracking-[2px]'>
                Years of Experience
              </div>
            </div>
                   
            <div>
              <div className='text-[30px] font-tertiary text-gradient mb-2'>
                { inView ? <CountUp start={-3} end={8} duration={4} /> : null} 
              </div>
              <div className='font-primarytext-sm tracking-[2px]'>
                Project Completed
              </div>
            </div>
                    
            <div>
              <div className='text-[30px] font-tertiary text-gradient mb-2'>
                { inView ? <CountUp start={0} end={12} duration={3} /> : null}
              </div>
              <div className='font-primarytext-sm tracking-[2px]'>
                Satisfied Clients
              </div>
            </div>
          </div>
          <div className='flex gap-x-8 items-center'>
            <button className='btn btn-lg'><Link to='contact'>Contact us</Link></button>
            <a href='https://www.linkedin.com/in/akthar-aki-578b45129/'className='text-gradient btn-link'>
              My Portfolio
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
  )
};

export default About;
