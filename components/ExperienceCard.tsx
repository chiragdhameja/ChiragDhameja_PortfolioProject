import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function ExperienceCard({ }: Props) {
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
        src='https://i.imgur.com/eWiWDKA.jpeg'
      />

      <div className='px-0 md:px-10'>
        <h1 className='text-3xl font-light'>Web Developer: Internship Associate</h1>
        <p className='font-bold text-:2xl mt-1'>The Entreprunership Network</p>
        <div className='flex space-x-2 my-2'>
          <img
            className='h-10 w-10 rounded-full'
            src='https://i.imgur.com/frGwXTz.png'
          />
          <img
            className='h-10 w-10 rounded-full'
            src='https://i.imgur.com/sdXtbbY.png'
          />
          <img
            className='h-10 w-10 rounded-full'
            src='https://i.imgur.com/iV9if91.png'
          />
          <img
            className='h-10 w-10 rounded-full'
            src='https://i.imgur.com/a2HPODi.png'
          />

        </div>
        <p className='py-3 text-gray-500'>May 2021 - July 2021</p>

        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>Worked with Wix Web Development team</li>
          <li>Managed Bootstrap and Wordpress modules</li>
          <li>Attended several workshops for hands-on CSS editing</li>
        </ul>

      </div>






    </article>
  )
}

export default ExperienceCard