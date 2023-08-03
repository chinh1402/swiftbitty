import Hero from "./components/Generic__components/home/Hero";
import Menu from "./components/Generic__components/home/Menu";
import About from "./components/Generic__components/home/About-Us";
import Contact from "./components/Generic__components/home/Contact";
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
