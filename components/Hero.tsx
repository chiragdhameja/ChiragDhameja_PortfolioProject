import React from 'react'
import { Analytics } from '@vercel/analytics/react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'
import { PageInfo } from '@/typings'
import { urlFor } from '@/sanity'
import Image from 'next/image'

type Props = {
	pageInfo: PageInfo
}

export default function Hero({ pageInfo }: Props) {
	const [text, count] = useTypewriter({
		words: [
			`Hi, The Name's ${pageInfo?.name}`,
			'A Guy who loves Coffee',
			'But loves gaming more ;)',
			"Can't even deny <CODING/>",
		],

		loop: true,
		delaySpeed: 1800,
	})

	return (
		<div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
			<BackgroundCircles />
			<Image
				className="relative rounded-full h-28 w-28 md:h-36 md:w-36 mx-auto object-cover"
				src="/profile-pic.webp"
				width={612}
				height={612}
				alt=""
			/>
			<div className="z-20 min-h-24">
				<h2 className="text-[0.55rem] xs:text-[0.7rem] sm:text-sm uppercase font-semibold text-purple-9 pb-2 tracking-[3px] md:tracking-[5px]">
					{pageInfo?.role}
				</h2>

				<h1 className="text-lg lg:text-4xl md:text-2xl font-semibold px-5 text-purple-9">
					<span>{text}</span>
					<Cursor cursorStyle="|" cursorColor="#9067C6" />
				</h1>
			</div>

			<div className="flex flex-col md:flex-row md:pt-6  z-10 font-semibold">
				<div className="flex flex-row  justify-center py-2 md:py-0">
					<Link href="#about" className="px-1">
						<button className="heroButton">About</button>
					</Link>
				</div>
				<div className="flex flex-row">
					<Link href="#experience" className="px-1">
						<button className="heroButton">Experience</button>
					</Link>
					<Link href="#projects" className="px-1">
						<button className="heroButton">Projects</button>
					</Link>
				</div>
				<div className="flex flex-row justify-center py-2 md:py-0">
					<Link href="#skills" className="px-1">
						<button className="heroButton">Skills</button>
					</Link>
				</div>
			</div>

			<Analytics />
		</div>
	)
}
