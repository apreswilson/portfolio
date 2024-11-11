import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./projects.module.scss";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Projects() {
   return (
      <section id="projects-section" className={styles.projects_section}>
         <h1>Projects</h1>
         <p>View the live website or source code of various web projects I have made.</p>
         <div className={styles.project_list}>
            <div className={styles.project}>
               <h2>Portfolio</h2>
               <p>This is the current portfolio you are viewing. </p>
               <h3>Technologies/Languages</h3>
               <div className={styles.technologies}>
                  <p>HTML</p>
                  <p>SASS</p>
                  <p>Docker</p>
                  <p>React</p>
                  <p>TypeScript</p>
               </div>
               <h3>View</h3>
               <div className={styles.links}>
                  <a href="https://github.com/apreswilson/portfolio" target="_blank">
                     <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a href="#">
                     <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </a>
               </div>
            </div>
            <div className={styles.project}>
               <h2>Tabz</h2>
               <p>Tabz is a minimal business management platform that allows users to create and/or join organizations they are invited to. <b>Work-In-Progress</b></p>
               <h3>Technologies/Languages</h3>
               <div className={styles.technologies}>
                  <p>HTML</p>
                  <p>SASS</p>
                  <p>React</p>
                  <p>Next.js</p>
                  <p>MongoDB</p>
                  <p>TypeScript</p>
                  <p>Jest</p>
               </div>
               <h3>View</h3>
               <div className={styles.links}>
                  <a href="https://github.com/apreswilson/tabz" target="_blank">
                     <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a href="#">
                     <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </a>
               </div>
            </div>
            <div className={styles.project}>
               <h2>Foodshop</h2>
               <p>Foodshop is an online grocery store where customers can purchase groceries and/or add savings all online.</p>
               <h3>Technologies/Languages</h3>
               <div className={styles.technologies}>
                  <p>HTML</p>
                  <p>CSS</p>
                  <p>React</p>
                  <p>TypeScript</p>
                  <p>Vite</p>
               </div>
               <h3>View</h3>
               <div className={styles.links}>
                  <a href="https://github.com/apreswilson/foodshop" target="_blank">
                     <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a href="https://foodshop-weld.vercel.app/" target="_blank">
                     <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </a>
               </div>
            </div>
            <div className={styles.project}>
               <h2>Calendar</h2>
               <p>Calendar is a minimal calendar website that allows you to make an account, and add events to your calendar.</p>
               <h3>Technologies/Languages</h3>
               <div className={styles.technologies}>
                  <p>HTML</p>
                  <p>CSS</p>
                  <p>React</p>
                  <p>TypeScript</p>
                  <p>Vite</p>
               </div>
               <h3>View</h3>
               <div className={styles.links}>
                  <a href="https://github.com/apreswilson/calendar" target="_blank">
                     <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a href="https://apreswilson.github.io/calendar/home" target="_blank">
                     <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </a>
               </div>
            </div>
            <div className={styles.project}>
               <h2>Time Clock</h2>
               <p>Time clock is a simple time clock to use for when clocking in or clocking out for a shift between a set period.</p>
               <h3>Technologies/Languages</h3>
               <div className={styles.technologies}>
                  <p>HTML</p>
                  <p>CSS</p>
                  <p>React</p>
                  <p>TypeScript</p>
                  <p>Vite</p>
               </div>
               <h3>View</h3>
               <div className={styles.links}>
                  <a href="https://github.com/apreswilson/alextimeclock" target="_blank">
                     <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a href="https://apreswilson.github.io/alextimeclock/" target="_blank">
                     <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </a>
               </div>
            </div>
            <div className={styles.project}>
               <h2>Schedule Generator</h2>
               <p>Schedule generator is a web page that allows you to generate a random schedule based on a set of inpur parameters.</p>
               <h3>Technologies/Languages</h3>
               <div className={styles.technologies}>
                  <p>HTML</p>
                  <p>CSS</p>
                  <p>React</p>
                  <p>TypeScript</p>
                  <p>Vite</p>
               </div>
               <h3>View</h3>
               <div className={styles.links}>
                  <a href="https://github.com/apreswilson/alexschedulegenerator" target="_blank">
                     <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a href="https://apreswilson.github.io/alexschedulegenerator/" target="_blank" >
                     <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </a>
               </div>
            </div>
            <div className={styles.project}>
               <h2>E-portfolio</h2>
               <p>E-portfolio is my senior capstone project that is a very similar website to this, but contains assignment artifacts completed throughout the semester. <b>Work-In-Progress</b></p>
               <h3>Technologies/Languages</h3>
               <div className={styles.technologies}>
                  <p>HTML</p>
                  <p>SASS</p>
                  <p>React</p>
                  <p>TypeScript</p>
                  <p>Vite</p>
               </div>
               <h3>View</h3>
               <div className={styles.links}>
                  <a href="https://github.com/apreswilson/eportfolio" target="_blank">
                     <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a href="https://eportfolio-eight.vercel.app/" target="_blank" >
                     <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </a>
               </div>
            </div>
         </div>
      </section>
   )
}