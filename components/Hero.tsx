import React from 'react'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';

type Props = {}

export default function Hero({}: Props) {

    const[text, count] = useTypewriter({
        words: ["Hi, The Name's Chirag Dhameja", 
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
            src='https://i.imgur.com/HIkbNGX.png' 
            alt='' />
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
                Network Admin
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