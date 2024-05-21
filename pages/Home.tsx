import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import WorkExperience from '@/components/WorkExperience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import ContactMe from '@/components/ContactMe'
import Link from 'next/link'
import { NextSeo } from 'next-seo'
import { Props } from '.'

export default function Home({
	pageInfo,
	experiences,
	projects,
	skills,
	socials,
}: Props) {
	return (
		<>
			<NextSeo
				title="Chirag's portfolio"
				description="Chirag Dhameja is a Software Engineer"
				canonical="https://chiragdhameja.dev"
			/>
			<div className="bg-purple-5 text-purple-8 h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-purple-6 scrollbar-thumb-purple-7">
				<Head>
					<title>{`${pageInfo?.name} - Portfolio`}</title>
				</Head>

				<Header socials={socials} />

				<section id="hero" className="snap-start">
					<Hero pageInfo={pageInfo} />
				</section>

				<section id="about" className="snap-center">
					<About pageInfo={pageInfo} />
				</section>

				{/* Exp */}
				<section id="experience" className="snap-center">
					<WorkExperience experiences={experiences} />
				</section>

				{/* Skills */}
				<section id="skills" className="snap-start">
					<Skills skills={skills} />
				</section>

				{/* Projects */}
				<section id="projects" className="snap-start">
					<Projects projects={projects} />
				</section>

				{/* Contact */}
				<section id="contact" className="snap-start">
					<ContactMe pageInfo={pageInfo} />
				</section>

				<footer className="sticky bottom-5 w-full">
					<div className="flex items-center justify-center z-10">
						<Link href="#hero">
							<h5 className="font-semibold text-sm opacity-30 hover:opacity-80 cursor-pointer">
								Designed & Developed by{' '}
								<span className="decoration-purple-9 underline">
									Chirag Dhameja
								</span>
							</h5>
						</Link>
					</div>
				</footer>
			</div>
		</>
	)
}
