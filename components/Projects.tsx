import { motion } from 'framer-motion';
import React from 'react'

type Props = {}

function Projects({}: Props) {
  const projects = [1,2,3,4,5];
  return (
    <motion.div 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1.5}}
      
      className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/50 scrollbar-thumb-[#F7AB0A]/80'>
          {projects.map((project, index) => (
            <div key={index} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen mx-auto '>

              <motion.img
                key = {index}
                initial={{
                  y: -300,
                  opacity: 0
                }}
                transition={{duration: 1.2}}
                whileInView={{opacity:1, y: 0}}
                viewport={{once: true}}
                src='https://i.imgur.com/HIkbNGX.png' />
              
              <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                <h4 className='text-4xl font-semibold text-center'>
                Virtual Mouse using {" "}
                  <span className='underline decoration-[#F7AB0A]/50'>Python</span>
                </h4>

                <p className='text-lg text-center md:text-left'>
                This project uses computer vision to gain images from a camera and interpret these images as inputs to the computer mouse. By simply moving your hand in front of the camera the computer will gain the inputs of moving the mouse pointer according to the motion of hand. Furthermore, inputs like left mouse button, right mouse button and scroll wheel actions can be given by various hand gestures
                </p>


              </div>


            </div>
          ))}
          
        </div>

        <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'></div>


    </motion.div>
  )
}

export default Projects