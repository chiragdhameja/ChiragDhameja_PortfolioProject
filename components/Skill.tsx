import { urlFor } from '@/sanity';
import { Skill } from '@/typings';
import { motion } from 'framer-motion'
import React from 'react'

type Props = {
    skill: Skill;
    directionLeft?: boolean;
};

function Skill({ skill, directionLeft}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img
            initial={{
                x: directionLeft ? -100 : 100,
                opacity: 0,
            }}
            transition={{duration: 1}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{ once: true }}
            src={urlFor(skill?.image).url()}
            className='rounded-full object-cover w-12 h-12 xs:w-16 xs:h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'            
        />
        <div className='absolute opacity-0 group-hover:opacity-85 transition duration-300 ease-in-out group-hover:bg-purple-5 w-12 h-12 xs:w-16 xs:h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-10'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-lg font-bold text-purple-9 opacity-100'>{skill.title} {skill.progress}%</p>
            </div>
        </div>
    </div>
  )
}


export default Skill