import {HiAcademicCap} from "react-icons/hi"
import { GiSandsOfTime } from "react-icons/gi";
import { MdGrade } from "react-icons/md";
import "./education.css";

function Education() {
  return (
    <section className="education" id="Education">
      <h1 className="education_header">EDUCATION</h1>
      <div className="school_wrapper">
        <div className="university">
          <div className="university_map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.863617038565!2d36.8572640141572!3d-1.253441135943298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f17eb1d447363%3A0x17a2d29bdcf01fda!2sKCA%20UNIVERSITY!5e0!3m2!1sen!2ske!4v1678012479979!5m2!1sen!2ske"
              width="100%"
              height="100%"
              style={{ border: "0" }}
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="university_text_box">
            <span>
              <HiAcademicCap size={25} color="black" />
              <h2>BSc in Software Development</h2>
            </span>
            <span>
              <GiSandsOfTime size={25} color="orange" />
              <h3>2021-2025</h3>
            </span>
            <span>
              <MdGrade size={27} color="yellow" />
              <h3>Average GPA 3.5 so far</h3>
            </span>
          </div>
        </div>
        <div className="high_school">
          <div className="high_school_map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6560302668413!2d35.26433431415025!3d0.5167833638308719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x178101a030f4af83%3A0x76d077dc3ea987d7!2sUasin%20Gishu%20High%20School!5e0!3m2!1sen!2ske!4v1678012760933!5m2!1sen!2ske"
              width="100%"
              height="100%"
              style={{ border: "0" }}
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="high_school_text_box">
            <span>
              <HiAcademicCap size={25} color="black" />
              <h2>High School Certificate</h2>
            </span>
            <span>
              <GiSandsOfTime size={25} color="orange" />
              <h3>2015-2019</h3>
            </span>
            <span>
              <MdGrade size={27} color="yellow" />
              <h3>Scored B Plain</h3>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
