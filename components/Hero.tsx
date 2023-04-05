import React from 'react'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';

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
        <div>
            
        </div>

        <h1>
            <span>{text}</span>
            <Cursor cursorColor='Purple' />
        </h1>
    </div>
  );
}   