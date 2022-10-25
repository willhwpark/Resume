import React from "react";
import { BsLinkedin, BsGithub, BsFillFileEarmarkPdfFill } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";


const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-cntr">
        <div className="contact-title">
          <h1>Contact</h1>
        </div>
        <div className="contact-description">
          <div className="contact-1">
            <div className="contact-icon">
              <a href="https://github.com/willhwpark" target="_blank" rel="noreferrer">
                <BsGithub style={{ fontSize: '30px' }} />
                GitHub</a>
            </div>
            <div className="contact-icon">
              <a href="https://www.linkedin.com/in/willhwpark/" target="_blank" rel="noreferrer">
                <BsLinkedin style={{ fontSize: '30px' }} />
                LinkedIn</a>
            </div>
            <div className="contact-icon">
              <a href="mailto:williamhwpark@gmail.com" target="_blank" rel="noreferrer">
                <MdAlternateEmail style={{ fontSize: '30px' }} />
                Email</a>
            </div>
            <div className="contact-icon">
              <a href="https://drive.google.com/drive/u/0/my-drive" target="_blank" rel="noreferrer">
                <BsFillFileEarmarkPdfFill style={{ fontSize: '30px' }} />
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;