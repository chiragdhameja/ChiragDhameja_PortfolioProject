import { urlFor } from '@/sanity';
import { Project } from '@/typings';
import { motion } from 'framer-motion';
import React from 'react'

type Props = {
  projects: Project[];
};

function Projects({projects}: Props) {
  return (
    <motion.div 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1.5}}
      
      className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/50 scrollbar-thumb-[#F7AB0A]/80'>
          {projects?.map((project, index) => (
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
                className='h-60 w-40'
                src={urlFor(project?.image).url()} alt='' />
              
              <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                <h4 className='text-4xl font-semibold text-center'>
                {project?.title}
                </h4>
                
                <div className='flex items-center space-x-2 justify-center'>
                  {project?.technologies.map(technology => (
                      <img
                          className='h-10 w-10' 
                          key={technology._id} 
                          src={urlFor(technology.image).url()}
                          alt='' />
                    ))}
                </div>

                <p className='text-lg text-center md:text-left'>
                  {project?.summary}
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