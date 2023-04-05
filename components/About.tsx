import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function About({}: Props) {
  return (
    <div className='flex flex-col relative h-screen text-center 
    md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>

        <motion.img 
            initial={{
                x: -200,
                opacity: 0,
            }}
            transition={{duration: 1.2}}
            whileInView={{x: 0 , opacity: 1,}}
            viewport={{once: true}}
            src='https://i.imgur.com/EBC4VaD.png' 
            className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
            md-rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
            // https://youtu.be/urgi2iz9P6U?t=4803
            />

            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-purple-500/50'>
                    little</span> background
                </h4>
                <p className='text-base'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>

            </div>

        

    </div>
  )
}