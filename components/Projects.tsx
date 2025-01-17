import { urlFor } from '@/sanity'
import { Project } from '@/typings'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

type Props = {
	projects: Project[]
}

function Projects({ projects }: Props) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="h-full relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
		>
			<h3 className="absolute top-20 mob:top-24 uppercase tracking-[10px] sm:tracking-[20px] text-purple-9 text-2xl">
				Projects
			</h3>

			<div className="w-full h-fit flex items-center mt-20px sm:mt-10px md:mt-10px space-x-5 snap-x snap-mandatory pt-10 sm:pt-25">
				<div className="relati0ve w-full flex overflow-x-scroll snap-x snap-mandatory z-20 scrollbar scrollbar-track-purple-7/20 scrollbar-thumb-purple-7">
					{projects
						?.sort((a, b) => {
							return new Date(b._createdAt) >
								new Date(a._createdAt)
								? 1
								: -1
						})
						?.map((project, index) => (
							<div
								key={index}
								className="w-screen flex-shrink-0 snap-center flex flex-col space-y-3 mob:space-y-5 items-center justify-center p-10 md:p-44 h-screen mx-auto"
							>
								<motion.img
									key={index}
									initial={{
										y: -100,
										opacity: 0,
									}}
									transition={{ duration: 1.2 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									className="h-40 w-32 max-h-36 mob:max-h-fit md:h-60 md:w-40"
									src={urlFor(project?.image).url()}
									alt=""
								/>

								<div className="space-y-3 mob:space-y-5 sm:space-y-10 px-0 md:px-10 max-w-6xl">
									<Link href={project?.linkToBuild}>
										<h4 className="text-2xl md:text-4xl font-semibold text-center text-purple-9">
											{project?.title}
										</h4>
									</Link>

									<div className="flex items-center space-x-2 justify-center">
										{project?.technologies.map(
											(technology) => (
												<img
													className="h-12 w-12"
													key={technology._id}
													src={urlFor(
														technology.image,
													).url()}
													alt=""
												/>
											),
										)}
									</div>
									<div className="h-40 overflow-y-auto md:w-2/3 md:mx-auto scrollbar-thin">
										<p className="text-lg text-center text-purple-9 md:text-left">
											{project?.summary}
										</p>
									</div>
								</div>
							</div>
						))}
				</div>
			</div>
			<div className="w-full absolute top-[30%] bg-purple-6 left-0 h-[500px] -skew-y-12 -z-10"></div>
		</motion.div>
	)
}

export default Projects
