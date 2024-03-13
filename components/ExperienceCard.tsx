import { urlFor } from '@/sanity';
import { Experience } from '@/typings'
import exp from 'constants';
import { motion } from 'framer-motion'
import React from 'react'

type Props = {
  experience: Experience;
}

function ExperienceCard({ experience}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center mt-5 sm:mt-10 space-y-5 flex-shrink-0 border border-purple-7 h-[550px] w-[300px] sm:h-[650px] sm:w-[400px] md:h-[650px] md:w-[500px] lg:h-[650px] lg:w-[500px] xl:h-[650px] xl:w-[500px] snap-center snap-mandatory bg-base-100 p-4 md:p-5 cursor-pointer transition-opacity duration-200 overflow-y-auto snap-x z-20'>
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}

        className='w-32 h-32 rounded-full xl:w-[250px] xl:h-[200px] object-cover object-center'
        src={urlFor(experience.companyImage).url()}
      />

      <div className='px-0 md:px-10'>
        <h1 className='text-3xl font-normal'>
          {experience.jobTitle}
        </h1>
        <p className='font-bold text-:2xl mt-1'>
          {experience.company}
        </p>
        <div className='flex space-x-2 my-2'>
          {experience.technologies.map(technology => (
            <img
              key={technology._id}
              className='h-10 w-10 rounded-full'
              src={urlFor(technology.image).url()}
              alt=''
            />
          ))}

        </div>
        <p className='py-3 text-purple-9'>
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
          ? "Present"
          : new Date(experience.dateEnded).toDateString()}
        </p>

        <ul className='list-disc class="list text-accent font-semibold space-y-2 ml-0 pr-2 text-left text-sm md:text-sm lg:text-sm xl:text-md h-fit overflow-auto'>
          {experience.points.map((point, i) => (
            <li key={i}>{"> "}{point}</li>
          ))}
          
        </ul>

      </div>






    </article>
  )
}

export default ExperienceCard