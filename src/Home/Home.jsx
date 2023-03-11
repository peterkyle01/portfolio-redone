import {lazy, Suspense} from 'react'
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import Spinner from '../components/Spinner/Spinner';
const Education = lazy(() => import("../Education/Education"));
const Experience = lazy(() => import("../Experience/Experience"));
const Skills = lazy(() => import("../Skills/Skills"));
const About = lazy(() => import("../About/About"));
import "./home.css"

function Home() {
  return (
    <main className="background">
      <section className="home" id="Home">
        <div className="text_box">
          <p className="p_one">
            Hello,my name is Peter <br /> K.Mwangi
          </p>
          <p className="p_two">Web Developer</p>
          <div className="btn_wrapper">
            <NavLink to="/projects">
              <button className="projects_btn">Projects</button>
            </NavLink>
            <a
              aria-label="Resume"
              href="https://drive.google.com/file/d/1ZUqW1y5sWrHLPRVC__toO11k5ONT_wwV/view?usp=sharing"
              target="_blank">
              <button className="resume_btn">Resume</button>
            </a>
          </div>
        </div>
        <div className="profile_pic_wrapper">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              default: {
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
              },
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
            className="profile_pic"></motion.div>
        </div>
      </section>
      <Suspense fallback={<Spinner />}>
        <Education />
        <Experience />
        <Skills />
        <About />
      </Suspense>
    </main>
  );
}

export default Home;
