import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import{motion} from 'framer-motion'
import { fadeIn } from '../variants';

//service data
const services = [
  {
    name: 'UI/UX Design',
    description: ' Have expereince at UI Developing using AdopXD, Figma tools and Photoshop also',
    link: 'Learn more',
  },
  {
    name: 'Development',
    description: ' have 1 year experience at website design and devlopment using reactjs, laravel, php',
    link: 'Learn more',
  },
  {
    name: 'Freelncing',
    description: ' Have year of experience at website design and software devlopment and Graphic Design',
    link: 'Learn more',
  },
  {
    name: 'Product Branding',
    description: ' Have level of enough experience of product Branding on Digital Plateform',
    link: 'Learn more',
  },
]

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/*text and img*/}
          <motion.div 
          variants={fadeIn('right', 0.8)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
            <h2 className='h2 text-accent mb-6'>What I Do</h2>
            <h3 className='h3 max-w[455px] mb-16'>
              I'm  front-end Developer with 2 year experience
            </h3>
            <button className='btn btn-sm'>See my work</button>
          </motion.div>
          {/*service */}
          <motion.div 
          variants={fadeIn('left', 0.8)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className='flex-1'>
            {/*service list */}
            <div>
              {services.map((service, index) => {
                const{name, description, link} = service
                return (
                  <div className='border-b border-white/20 h-[146px] mb-[30px] flex' key={index}>
                    <div className='max-w-[480px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-4'>{name}</h4>
                      <p className='font-secondary leading-tight'>{description}</p>
                    </div>
                    <div className='flex flex-colflex-1 items-end'>
                      <a href='#' className='btn w-5 h-5 mb-[42px] flex justify-center items-center'>
                        <BsArrowUpRight />
                      </a>
                      <a href='#' className='text-gradient text-sm'>{link}</a>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
};

export default Services;
