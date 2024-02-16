import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/About me/AboutMe";
import Project from "./components/Project/Project";
import Cursor from "./components/Cursor/Cursor";

function App() {
  if (false) {
    return <div className="loading">Loading</div>;
  }
  return (
    <main className={false ? "dark_mode" : "light_mode"}>
      <Cursor />
      <Navbar />
      <Hero />
      <AboutMe />
      <Project />
    </main>
  );
}

export default App;
