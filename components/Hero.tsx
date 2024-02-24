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
            className='relative rounded-full h-32 w-32 mx-auto object-cover' 
            src={urlFor(pageInfo?.heroImage).url()}
            alt='' />
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[5px]'>
                {pageInfo?.role}
            </h2>
        

            <h1 className='text-4xl lg:text-5xl font-semibold px-10'>
                <span>{text}</span>
                <Cursor cursorColor='Purple' />
            </h1>

            <div className='pt-5'>
                <Link href="#about">
                    <button className='heroButton'>About</button>
                </Link>
                <Link href="#experience">
                <button className='heroButton'>Experience</button>
                </Link>
                <Link href="#skills">
                <button className='heroButton'>Skills</button>
                </Link>
                <Link href="#projects">
                <button className='heroButton'>Projects</button>  
                </Link>         
            </div>
        </div>
    </div>
  );
}   