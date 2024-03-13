import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { Experience } from '@/typings'

type Props = {
  experiences: Experience[]
}

function WorkExperience({experiences}: Props) {
  return (
  <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center scroll-smooth">
    <h3 className='absolute top-24 uppercase tracking-[20px] text-purple-9 text-2xl'>
    Experience
    </h3>

    <div className='mx-auto flex items-center h-fit mt-20 space-x-5 overflow-x-scroll sm:overflow-x-scroll md:overflow-x-scroll snap-x p-20 scrollbar scrollbar-track-purple-6 scrollbar-thumb-purple-7 sm:pt-25'>
        {experiences?.map(experience => (
          <ExperienceCard key={experience._id} experience={experience}/>
        
        ))}
        
    </div>

    </motion.div>
  ) 
}

export default WorkExperience