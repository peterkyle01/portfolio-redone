import Contacts from "../Contacts/Contacts";
import "./about.css";

function About() {
  return (
    <section className="about" id="About">
      <h1 className="about_header">About</h1>
      <div className="about_box">
        <div className="spacer">
          <div className="about_text_box">
            <p>
              Hi there! My name is Peter K.Mwangi and I'm a Software Developer
              based in Nairobi. I have always been fascinated by how technology
              works especially the software world, which led me to pursue a
              career in Software Development. I have one year of experience in
              Software Development mostly webapps and mobile apps , working with
              clients from Nairobi mostly KCA University students and beyond
              school . Aside from my work, I love reading books, which keeps me
              inspired and motivated. I believe in the power of working smart,
              and I strive to apply it to both my personal and professional
              life. If you have any questions or would like to collaborate with
              me, please feel free to contact me. I'm excited to connect with
              you!
            </p>
          </div>
        </div>
        <div className="spacer">
          <Contacts />
        </div>
      </div>
    </section>
  );
}

export default About;
