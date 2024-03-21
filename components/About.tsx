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
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="flex flex-col relative h-screen text-center 
      md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
		>
			<h3 className="absolute top-20 sm:top-24 uppercase tracking-[10px] sm:tracking-[20px] text-purple-9 text-2xl">
				About
			</h3>

			<motion.img
				initial={{
					x: -100,
					opacity: 0,
				}}
				transition={{ duration: 1.2 }}
				whileInView={{ x: 0, opacity: 1 }}
				viewport={{ once: true }}
				src={urlFor(pageInfo?.profilePic).url()}
				className="mt-20 mob:mt-0 flex-shrink-0 w-28 h-28 xs:w-36 xs:h-36 mob:w-40 mob:h-40 sm:w-56 sm:h-56 rounded-full object-cover md:w-64 md:h-64 xl:w-80 xl:h-80 z-20"
			/>

			<div className="space-y-1 mob:space-y-5 -mt-10 mob:-mt-40 sm:-mt-0 px-0 md:px-10 z-20">
				<h4 className="text-2xl sm:text-4xl font-semibold text-purple-9">
					Here is a{' '}
					<span className="underline decoration-purple-8">
						little
					</span>{' '}
					background
				</h4>
				<p className="text-[0.8rem] xs:text-sm sm:text-lg text-purple-9">
					{pageInfo?.backgroundInformation}
				</p>
			</div>

			<div className="w-full absolute top-[30%] bg-purple-6 left-0 h-1/2 skew-y-12 z-0"></div>
		</motion.div>
	)
}
