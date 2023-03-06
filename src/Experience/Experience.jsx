import "./experience.css";

function Experience() {
  return (
    <section className="experience" id="Experience">
      <h1 className="experience_header">Experience</h1>
      <div className="experience_text_box">
        <div className="experience_wrapper">
          <div className="left">
            <p>JANUARY 2023:</p>
            <p>PRESENT</p>
          </div>
          <div className="right">
            <h1>IT Software Technician</h1>
            <i>APPRENTISHIP</i>
            <p>
              Lead junior technicians in troubleshooting, installation and configuration of software.
              Testing software as well as deployment, documentation and providing technical support.
            </p>
          </div>
        </div>
        <div className="experience_wrapper">
          <div className="left">
            <p>DECEMBER 2022:</p>
            <p>JANUARY 2023</p>
          </div>
          <div className="right">
            <h1>Web Designer</h1>
            <i>VOLUNTEER</i>
            <p>
              Designed Nairobi Website Profile page from login/register page to payment page.
            </p>
          </div>
        </div>
        <div className="experience_wrapper">
          <div className="left">
            <p>SEPTEMBER 2021:</p>
            <p>AUGUST 2022</p>
          </div>
          <div className="right">
            <h1>TUTORING</h1>
            <i>VOLUNTEER</i>
            <p>
              Tutored KCA students various programming languages like Java,Python,Javascript,HTML,CSS and React js.
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
}
export default Experience;
