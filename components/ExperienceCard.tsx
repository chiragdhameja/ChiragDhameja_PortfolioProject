import { urlFor } from '@/sanity'
import { Experience } from '@/typings'
import { motion } from 'framer-motion'
import React from 'react'

type Props = {
	experience: Experience
}

function ExperienceCard({ experience }: Props) {
	return (
		<article
			className="
				flex flex-col items-center flex-shrink-0 
				rounded-lg  mt-5 sm:mt-10 space-y-5 p-4 md:p-5 overflow-y-auto z-20
				border-2 border-purple-7 
				h-[450px] mob:h-[550px] sm:h-[600px] md:h-[650px]
				w-[250px] xs:w-[300px] sm:w-[400px]  md:w-[500px] 
				scrollbar-thin
				bg-base-100 cursor-pointer transition-opacity duration-200
			"
		>
			<motion.img
				initial={{
					y: -50,
					opacity: 0,
				}}
				whileInView={{
					opacity: 1,
					y: 0,
				}}
				transition={{ duration: 1.5 }}
				viewport={{ once: true }}
				className="
					w-24 sm:w-32 
					h-24 sm:h-32 
					rounded-full xl:w-[250px] xl:h-[200px] object-cover object-center
				"
				src={urlFor(experience.companyImage).url()}
			/>

			<div className="px-0 md:px-10">
				<h1 className="text-lg mob:text-2xl font-normal">
					{experience.jobTitle}
				</h1>
				<p className="text-sm sm:text-lg font-bold my-1">
					{experience.company}
				</p>
				<div className="flex space-x-2 my-2">
					{experience.technologies.map((technology) => (
						<img
							key={technology._id}
							className="h-10 w-10 rounded-full"
							src={urlFor(technology.image).url()}
							alt=""
						/>
					))}
				</div>
				<p className="py-2 mob:py-3 text-purple-9 text-sm">
					{new Date(experience.dateStarted).toDateString()} -{' '}
					{experience.isCurrentlyWorkingHere
						? 'Present'
						: new Date(experience.dateEnded).toDateString()}
				</p>

				<ul className='list-disc class="list text-purple-9 space-y-2 ml-0 pr-2 text-left text-sm md:text-sm lg:text-sm xl:text-md h-fit overflow-auto'>
					{experience.points.map((point, i) => (
						<li key={i}>
							{'> '}
							{point}
						</li>
					))}
				</ul>
			</div>
		</article>
	)
}

export default ExperienceCard
