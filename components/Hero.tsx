import React from 'react'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';
import { PageInfo } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
    pageInfo: PageInfo
}

export default function Hero({pageInfo}: Props) {

    const[text, count] = useTypewriter({
        words: [
            `Hi, The Name's ${pageInfo?.name}`, 
            "A Guy who loves Coffee",
            "But loves gaming more ;)",
            "Can't even deny <CODING>"
            ],

            loop: true,
            delaySpeed: 1800,
    });

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <img 
            className='relative rounded-full h-36 w-36 mx-auto object-cover' 
            src={urlFor(pageInfo?.heroImage).url()}
            alt='' />
        <div className='z-20'>
            <h2 className='text-sm uppercase font-semibold text-purple-9 pb-2 tracking-[3px] md:tracking-[5px]'>
                {pageInfo?.role}
            </h2>
        

            <h1 className='text-lg lg:text-4xl md:text-2xl font-semibold px-10 text-purple-9'>
                <span>{text}</span>
                <Cursor cursorStyle='|' cursorColor='#9067C6' />
            </h1>

            
        </div>

        <div className='grid grid-cols-2 md:-space-x-5 md:grid-cols-4 gap-5 p-5 pt-3 z-10 font-semibold'>
                <Link href="#about" className='pl-2'>
                    <button className='heroButton bg-transparent border-solid border-2 border-purple-950 text-purple-9'>About</button>
                </Link>
                <Link href="#experience" className='pl-2'>
                    <button className='heroButton bg-transparent border-solid border-2 border-purple-950 text-purple-9'>Experience</button>
                </Link>
                <Link href="#skills" className='pl-2'>
                    <button className='heroButton bg-transparent border-solid border-2 border-purple-950 text-purple-9'>Skills</button>
                </Link>
                <Link href="#projects" className='pl-2'>
                    <button className='heroButton bg-transparent border-solid border-2 border-purple-950 text-purple-9'>Projects</button>  
                </Link>         
        </div>
    </div>
  );
}   