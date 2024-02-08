import Navbar from "./Navbar";
import Hero from "./Hero";
import MyInfo from "./MyInfo";
import Projects from "./Projects";
import Project from "./Project";

function App() {
  if (false) {
    return <div className="loading">Loading</div>;
  }
  return (
    <main>
      <Navbar />
      <Hero />
      <MyInfo />
      <Projects />
    </main>
  );
}

export default App;
