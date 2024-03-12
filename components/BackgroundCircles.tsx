import React from 'react'
import { motion } from "framer-motion"

function BackgroundCircles() {
  return (
    <motion.div 
    initial={{
        opacity: 0,
    }}
    animate={{
        scale: [1,2,2,3,1],
        opacity: [0.1, 0.2, 0.2, 0.3, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "60%", "20%",],
    }}
    transition={{
        duration: 0.1,
    }}
    className='relative flex justify-center items-center'>
        <div className='absolute border border-purple-7 rounded-full h-[100px] w-[100px] mt-52 animate-ping' />
        <div className='absolute border border-purple-8 rounded-full h-[200px] w-[200px] mt-52 animate-ping' />
        <div className='absolute border border-purple-7 rounded-full h-[400px] w-[400px] mt-52 animate-ping' />
        <div className='absolute border border-purple-8 rounded-full opacity-80 h-[500px] w-[500px] mt-52 animate-pulse' />
        {/*<div className='absolute border border-red-500 rounded-full h-[500px] w-[500px] mt-52 animate-ping' />*/}
    </motion.div>
  )
}

export default BackgroundCircles