import {lazy, Suspense} from 'react'
import { NavLink } from 'react-router-dom';
import Spinner from '../components/Spinner/Spinner';
const Education = lazy(() => import("../Education/Education"));
const Experience = lazy(() => import("../Experience/Experience"));
const Skills = lazy(() => import("../Skills/Skills"));
const About = lazy(() => import("../About/About"));
const Contacts = lazy(()=> import("../Contacts/Contacts"))
import "./home.css"

function Home() {
  return (
    <main className="background">
      <section className="home">
        <div className="text_box">
          <p className="p_one">
            Hello,my name is Peter <br /> K.Mwangi
          </p>
          <p className="p_two">Software Developer</p>
          <div className="btn_wrapper">
            <NavLink to="/projects" >
              <button className="projects_btn">Projects</button>
            </NavLink>
            <a
              aria-label="Linkedin"
              href="https://www.linkedin.com/in/peter-mwangi-08a312265/"
              target="_blank">
              <button className="linkedIn_btn">LinkedIn</button>
            </a>
          </div>
        </div>
        <div className="profile_pic_wrapper">
          <div className="profile_pic"></div>
        </div>
      </section>
      <Suspense fallback={<Spinner />}>
        <Education />
        <Experience />
        <Skills />
        <About />
        <Contacts />
      </Suspense>
    </main>
  );
}

export default Home;
