import Navbar from "./components/navbar/navbar"
import About from "./components/about/about";
import Intro from "./components/intro/intro";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
import "./app.scss";

function App() {

  return (
    <main>
      <Navbar />
      <Intro />
      <About />
      <Projects />
      <Contact />
    </main>
  )
}

export default App
