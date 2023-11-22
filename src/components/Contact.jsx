import React, { useState } from "react";
import { BsFillPersonLinesFill,  } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Resume from "../assets/resume.pdf";
import "../styles/Contact.css"

const Contact = () => {
  // Added by me
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e, setValue) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the form data to the server or perform any other action here
    console.log("Form submitted:", { name, email, message });
    // Clear the form fields
    setName("");
    setEmail("");
    setMessage("");
  };
  // From here
  return (
    <div id="contact" className="contact-container">
      <div className="contact-content">
        <h2 className="contact-heading">Contact</h2>
        <div className="contact-links">
          <ul className="contact-list">
            <li className="contact-item">
              <a
                id="contact-linkedin"
                href="https://www.linkedin.com/in/prashant-som-0943b4249/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <FaLinkedin size={30} />
                <span className="contact-label">Linkedin</span>
              </a>
            </li>
            <li className="contact-item">
              <a
                id="contact-github"
                href="https://github.com/0126prashant"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <FaGithub size={30} />
                <span className="contact-label">Github</span>
              </a>
            </li>
            <li className="contact-item">
                <a
                   id="contact-phone"
                   href="tel:+91 9548848329"
                   className="contact-link"
                 >
                   <FaPhone size={30} />
                   <span className="contact-label">9548848329</span>
                 </a>
               </li>
            <li className="contact-item">
              <a
                id="contact-email"
                href="mailto:prashantsom75@gmail.com"
                className="contact-link"
              >
                <HiOutlineMail size={30} />
                <span className="contact-label">Email</span>
              </a>
            </li>
            <li className="contact-item">
              <a
                 href={Resume} download={"Prashant-Som-Resume"}
            onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1QFoxdMHiLmq0QOtwaP1iLzO7x5CvsoRv/view?usp=sharing"
            )}}
                className="contact-link"
              >
                <BsFillPersonLinesFill size={30} />
                <span className="contact-label">Resume</span>
              </a>
            </li>
          </ul>
        </div>
 {/* ... Your existing contact links ... */}
 <div className="newform">
  <div > <h2><span>Email</span>  : prashantsom75@gmail.com</h2> </div>
  <div > <h2><span>Mobile-no</span>  :+91 9548848329</h2> </div>
  <div > <h2> <span>Portfolio</span>  : https://0126prashant.github.io/</h2> </div>
  <div > <h2><span>Github</span> : https://github.com/0126prashant</h2> </div>
</div>



    {/* Add any other details you want here */}
      </div>
    </div>
  );
};

export default Contact;
