import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./navbar.scss";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

export default function Navbar() {

   const checkboxRef = useRef<HTMLInputElement>(null);

   const handleClick = () => {
      if (checkboxRef.current) {
         checkboxRef.current.checked = false;
      }
   }

   return (
      <nav>
         <h1>Alex Wilson</h1>

         <input type="checkbox" id="checkbox" ref={checkboxRef}></input>
         <label htmlFor="checkbox">
            <FontAwesomeIcon icon={faBars} />
         </label>
         <ul>
            <li><a href="#about-section" onClick={handleClick}>About</a></li>
            <li><a href="#projects-section" onClick={handleClick}>Projects</a></li>
            <li><a href="#contact-section" onClick={handleClick}>Contact</a></li>
            <li><a href="https://drive.google.com/file/d/1YfTX3Kr3tJVIO1BV4UiDRIT2UwBeL1UT/view?usp=sharing" target="_blank"
               onClick={handleClick}>Resume</a></li>
         </ul>
      </nav>
   )
}