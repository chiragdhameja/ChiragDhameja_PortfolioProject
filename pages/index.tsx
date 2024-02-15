import Head from 'next/head'
import type { NextPage } from 'next'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import ContactMe from '@/components/ContactMe'
import Link from 'next/link'


const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/50 scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>Chirag's Portfolio</title>
      </Head>
      
      <Header />

      
      <section id="hero" className='snap-start'>
        <Hero />
      </section>

      
      <section id='about' className='snap-center'>
        <About />
      </section>

      {/* Exp */}
      <section id='experience' className='snap-center'>
        <Experience />
      </section>

      {/* Skills */}
      <section id="skills" className='snap-start'>
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects" className='snap-start'>
        <Projects />
      </section>

      {/* Contact */}
      <section id="contact" className='snap-start'>
        <ContactMe />
      </section>

      <Link href='#hero'>
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <h5 className='font-semibold text-sm opacity-30 hover:opacity-80'>
              Designed & Developed by {" "}
            <span className='decoration-[#F7AB0A]/50 underline'>Chirag Dhameja</span>
            </h5>
          </div>
        </footer>
      </Link>


    </div>
  )    
  
}

export default Home;
