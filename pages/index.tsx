import { Experience, PageInfo, Project, Skill, Social } from '@/typings'
import { fetchPageInfos } from '@/utils/fetchPageInfo'
import { fetchExperiences } from '@/utils/fetchExperiences'
import { fetchSkills } from '@/utils/fetchSkills'
import { fetchProjects } from '@/utils/fetchProjects'
import { fetchSocials } from '@/utils/fetchSocials'
import { GetStaticProps } from 'next'
import Home from './Home'

export type Props = {
	pageInfo: PageInfo
	experiences: Experience[]
	skills: Skill[]
	projects: Project[]
	socials: Social[]
}

export default function HomeRoute({
	pageInfo,
	experiences,
	projects,
	skills,
	socials,
}: Props) {
	return (
		<Home
			pageInfo={pageInfo}
			experiences={experiences}
			projects={projects}
			skills={skills}
			socials={socials}
		/>
	)
}

export const getServerSideProps: GetStaticProps<Props> = async () => {
	const pageInfo: PageInfo = await fetchPageInfos()
	const experiences: Experience[] = await fetchExperiences()
	const skills: Skill[] = await fetchSkills()
	const projects: Project[] = await fetchProjects()
	const socials: Social[] = await fetchSocials()

	return {
		props: {
			pageInfo,
			experiences,
			skills,
			projects,
			socials,
			revalidate: 10,
		},
	}
}
