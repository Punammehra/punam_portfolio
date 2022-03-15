import React from "react";
import { FaPhone } from "react-icons/fa";
import SocialIcon from "../SocialIcon/SocialIcon";
import { ContactWrapper, Email } from "./ContactElements";
function Contact() {
  return (
    <ContactWrapper id="contact">
      <div className="Container">
        <div className="SectionTitle">Get In Touch</div>
        <div className="BigCard">
          <Email>

          <h3 className="call">Phone: 9123114035</h3>
        
            <span>Punamkumari8986@gmail.com</span>
           
           
            <a
              className="btn PrimaryBtn"
              href="mailto:punamkumari8986@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send Mail
            </a>
            
          </Email>
        
         
       
    
        
        </div>
        <SocialIcon />
      </div>
    </ContactWrapper>
  );
}

export default Contact;
