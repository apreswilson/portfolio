import styles from "./about.module.scss";

export default function About() {
   return (
      <section id="about-section" className={styles.about_section}>
         <h1>About</h1>
         <p>I am versed in a range of programming languages and technologies, specializing in Node.js / React.js environments.</p>
         <h2>Languages</h2>
         <div className={styles.languages}>
            <div className={styles.list_item}>
               <img src="/HTML5.svg" alt="HTML"></img>
               <p>HTML</p>
            </div>
            <div className={styles.list_item}>
               <img src="/CSS3.svg" alt="CSS"></img>
               <p>CSS</p>
            </div>
            <div className={styles.list_item}>
               <img src="/JavaScript.svg" alt="JavaScript"></img>
               <p>JavaScript</p>
            </div>
            <div className={styles.list_item}>
               <img src="/TypeScript.svg" alt="TypeScript"></img>
               <p>TypeScript</p>
            </div>
            <div className={styles.list_item}>
               <img src="/Python.svg" alt="Python"></img>
               <p>Python</p>
            </div>
            <div className={styles.list_item}>
               <img src="/SQL Developer.svg" alt="SQL"></img>
               <p>SQL</p>
            </div>
            <div className={styles.list_item}>
               <img src="/Sass.svg" alt="SASS/SCSS"></img>
               <p>SASS</p>
            </div>
            <div className={styles.list_item}>
               <img src="/Java.svg" alt="Java"></img>
               <p>Java</p>
            </div>
            <div className={styles.list_item}>
               <img src="/VB.svg" alt="Visual Basic"></img>
               <p>VB</p>
            </div>
         </div>
         <h2>Technologies</h2>
         <div className={styles.technologies}>
            <div className={styles.list_item}>
               <img src="/React.svg" alt="React"></img>
               <p>React</p>
            </div>
            <div className={styles.list_item}>
               <img src="/Node.js.svg" alt="Node.js"></img>
               <p>Node.js</p>
            </div>
            <div className={styles.list_item}>
               <img src="/Express.svg" alt="Express.js"></img>
               <p>Express.js</p>
            </div>
            <div className={styles.list_item}>
               <img src="/Next.js.svg" alt="Next.js"></img>
               <p>Next.js</p>
            </div>
            <div className={styles.list_item}>
               <img src="/Docker.svg" alt="Docker"></img>
               <p>Docker</p>
            </div>
            <div className={styles.list_item}>
               <img src="/Git.svg" alt="Git"></img>
               <p>Git</p>
            </div>
            <div className={styles.list_item}>
               <img src="/GitHub.svg" alt="GitHub"></img>
               <p>GitHub</p>
            </div>

            <div className={styles.list_item}>
               <img src="/Jest.svg" alt="Jest"></img>
               <p>Jest</p>
            </div>
            <div className={styles.list_item}>
               <img src="/REST.svg" alt="REST API"></img>
               <p>REST</p>
            </div>
            <div className={styles.list_item}>
               <img src="/MongoDB.svg" alt="MongoDB"></img>
               <p>MongoDB</p>
            </div>
            <div className={styles.list_item}>
               <img src="/NPM.svg" alt="NPM"></img>
               <p>NPM</p>
            </div>
            <div className={styles.list_item}>
               <img src="/MSOffice.svg" alt="Microsoft Office"></img>
               <p>Office</p>
            </div>
         </div>
      </section>
   )
}