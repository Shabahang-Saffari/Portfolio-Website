import Cursor from "./components/Cursor/Cursor";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/About me/AboutMe";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

import { useGlobalContext } from "./Context";
import ScrollBar from "./components/ScrollBar/ScrollBar";

function App() {
  const { dark_mode } = useGlobalContext();

  if (false) {
    return <div className="loading">Loading</div>;
  }
  return (
    <main className={dark_mode ? "dark_mode" : "light_mode"}>
      <ScrollBar />
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
      <Cursor />
    </main>
  );
}

export default App;
