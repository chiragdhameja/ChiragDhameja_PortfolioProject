import React from 'react'
import { motion } from 'framer-motion'
import { PageInfo } from '@/typings'
import { urlFor } from '@/sanity'

type Props = {
  pageInfo: PageInfo
}

export default function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1.5}}
      className='flex flex-col relative h-screen text-center 
      md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>

      <h3 className='absolute top-24 uppercase tracking-[20px] text-purple-9 text-2xl'>About</h3>

      <motion.img
        initial={{
          x: -400,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1, }}
        viewport={{ once: true }}
        src={urlFor(pageInfo?.profilePic).url()}
        className="-mb-20 md:mb-0 flex-shrink-0 w-40 h-40 sm:w-56 sm:h-56 rounded-full object-cover 
                     md:w-64 md:h-64 xl:w-[400px] xl:h-[400px] z-20"
  
      />

      <div className='space-y-10 px-0 md:px-10 z-10'>
        <h4 className='text-4xl font-semibold text-purple-9'>Here is a <span className='underline decoration-purple-8'>
            little</span> background
        </h4>
        <p className='text-base text-purple-9'>
          {pageInfo?.backgroundInformation}
        </p>

      </div>

      <div className='w-full absolute top-[30%] bg-purple-6 left-0 h-[500px] skew-y-12 z-0'></div>


    </motion.div>
  )
  
}