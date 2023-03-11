import { HiAcademicCap } from "react-icons/hi";
import { GiSandsOfTime } from "react-icons/gi";
import {GoLocation} from "react-icons/go"
import "./education.css";

function Education() {
  return (
    <section className="education" id="Education">
      <h1 className="education_header">EDUCATION</h1>
      <div className="school_wrapper">
        <div className="university">      
          <div className="university_text_box">
            <span>
              <HiAcademicCap size={23} color="black" />
              <h2>BSc in Software Development</h2>
            </span>
            <span>
              <GiSandsOfTime size={22} color="orange" />
              <h3>2021-2025</h3>
            </span>
            <span>
              <GoLocation size={20} color="black" />
              <h2>Nairobi,Kenya</h2>
            </span>
          </div>
        </div>
        <div className="high_school">
          <div className="high_school_text_box">
            <span>
              <HiAcademicCap size={23} color="black" />
              <h2>High School Certificate</h2>
            </span>
            <span>
              <GiSandsOfTime size={22} color="orange" />
              <h3>2015-2019</h3>
            </span>
            <span>
              <GoLocation size={20} color="black" />
              <h2>Eldoret,Kenya</h2>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
