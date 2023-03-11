;import { MdSend } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import "./contacts.css";

function Contacts() {
  return (
    <section className="contacts" id="Contacts">
      <div className="contacts_text_box">
        <h1>Send Me A Message</h1>
        <label className="name_label">
          Name
          <input type="text" className="name_input" />
        </label>
        <label className="email_label">
          Email
          <input type="email" className="email_input" />
        </label>
        <label className="textarea_label">
          Message
          <textarea type="text" className="textarea_input" />
        </label>
        <div>
          <MdSend id="icon_send" color="black" size={30} />
          <a aria-label="Telephone" href="tel:+25458685974">
            <FiPhoneCall id="icon_call" color="black" size={25} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
