import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./contact.module.scss";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
   return (
      <section id="contact-section" className={styles.contact_section}>
         <h1>Contact</h1>
         <p>Feel free to contact me, view my resume, or view my various account profiles.</p>
         <div className={styles.contact_options}>
            <div className={styles.option}>
               <a href="mailto:apreswilson@gmail.com" target="_blank">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <p>Email</p>
               </a>
            </div>
            <div className={styles.option}>
               <a href="https://drive.google.com/file/d/1YfTX3Kr3tJVIO1BV4UiDRIT2UwBeL1UT/view?usp=sharing" target="_blank" aria-label="Resume">
                  <FontAwesomeIcon icon={faFileAlt} />
                  <p>Resume</p>
               </a>
            </div>
            <div className={styles.option}>
               <a href="https://github.com/apreswilson" target="_blank" aria-label="GitHub">
                  <FontAwesomeIcon icon={faGithub} />
                  <p>GitHub</p>
               </a>
            </div>
            <div className={styles.option}>
               <a href="https://www.linkedin.com/in/awilsofl/" target="_blank" aria-label="LinkedIn">
                  <FontAwesomeIcon icon={faLinkedin} />
                  <p>LinkedIn</p>
               </a>
            </div>
         </div>
      </section>
   )
}