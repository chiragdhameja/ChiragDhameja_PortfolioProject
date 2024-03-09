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
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
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
        <h1 className='text-3xl font-light'>
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
            />
          ))}

        </div>
        <p className='py-3 text-gray-500'>
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
          ? "Present"
          : new Date(experience.dateEnded).toDateString()}
        </p>

        <ul className='list-disc space-y-4 ml-5 text-lg'>
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
          
        </ul>

      </div>






    </article>
  )
}

export default ExperienceCard