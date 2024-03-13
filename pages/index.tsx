import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WorkExperience from '@/components/WorkExperience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import ContactMe from '@/components/ContactMe';
import Link from 'next/link';
import { Experience, PageInfo, Project, Skill, Social } from '@/typings';
import { fetchPageInfos } from '@/utils/fetchPageInfo';
import { fetchExperiences } from '@/utils/fetchExperiences';
import { fetchSkills } from '@/utils/fetchSkills';
import { fetchProjects } from '@/utils/fetchProjects';
import { fetchSocials } from '@/utils/fetchSocials';
import { GetStaticProps } from 'next';

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

export default function Home ({pageInfo, experiences, projects, skills, socials}: Props) {
  return (
    <div className='bg-purple-5 text-purple-8 h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-purple-6 scrollbar-thumb-purple-7'>
      <Head>
        <title>{`${pageInfo?.name} - Portfolio`}</title>
      </Head>
      
      <Header socials={socials} />
      
      <section id="hero" className='snap-start'>
        <Hero pageInfo={pageInfo} />
      </section>

      <section id='about' className='snap-center'>
        <About pageInfo={pageInfo} />
      </section>

      {/* Exp */}
      <section id='experience' className='snap-center'>
        <WorkExperience experiences={experiences}/>
      </section>

      {/* Skills */}
      <section id="skills" className='snap-start'>
        <Skills skills={skills}/>
      </section>

      {/* Projects */}
      <section id="projects" className='snap-start'>
        <Projects projects={projects}/>
      </section>

      {/* Contact */}
      <section id="contact" className='snap-start'>
        <ContactMe />
      </section>
    
      <footer className='sticky bottom-5 w-full'>
          <div className='flex items-center justify-center'>
            <Link href='#hero'>
              <h5 className='font-semibold text-sm opacity-30 hover:opacity-80 cursor-pointer'>
                Designed & Developed by {" "}
                <span className='decoration-purple-9 underline'>Chirag Dhameja</span>
              </h5>
            </Link>
          </div>         
      </footer>
    </div>
  )    
  
}



export const getServerSideProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfos();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

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