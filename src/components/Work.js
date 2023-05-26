import React from 'react';
import{motion} from 'framer-motion'
import { fadeIn } from '../variants';
import Img1 from'../assets/portfolio-img1.png'
import Img2 from'../assets/portfolio-img2.png'
import Img3 from'../assets/portfolio-img3.png'


const Work = () => {
  return (
    <sectoin className='section'id='work'>
      <div className='container mx-auto'>
        <motion.div 
        variants={fadeIn('up', 0.8)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        className='flex flex-col lg:flex-row gap-x-10'>
          <div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            {/*text */}
            <div>
              <h2 className='h2 leading-tight text-accent'>
                My Latest<br /> Work.
              </h2>
              <p className='max-w-sm mb-16'>
              I had complete some Client Projects and Campus Projects used Latest Technology like reactjs, Java and Graphic Design created business Card, Logo and Brand Design.
              </p>
              <button className='btn btn-sm'>View all projects</button>
            </div>
            {/*imgs */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/*overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/*img */}
              <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt='' />
              {/*title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>UI/UX Design</span>
              </div>
              {/*dec */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Project title</span>
              </div>
            </div>
          </div>
          <div className='flex-1 flex flex-col gap-y-10'>

            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/*overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/*img */}
              <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt='' />
              {/*title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>UI/UX Design</span>
              </div>
              {/*dec */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Project title</span>
              </div>
            </div>

            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/*overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/*img */}
              <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt='' />
              {/*title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>UI/UX Design</span>
              </div>
              {/*dec */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Project title</span>
              </div>
            </div>
            
          </div>
        </motion.div>
      </div>
    </sectoin>
  )
};

export default Work;
