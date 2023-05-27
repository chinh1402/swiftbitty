import Hero from "./components/Hero";
import Menu from "./components/Menu";
import About from "./components/About-Us";
import Contact from "./components/Contact";
import "./globals.css";
import "./css/grid.css";
import "./css/responsive.css";

export default function Home() {
  return (
    <>
      <Hero />
      <Menu />
      <About />
      <Contact />
    </>
  )
}
