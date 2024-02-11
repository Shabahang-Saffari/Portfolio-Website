import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MyInfo from "./components/MyInfo";
import Projects from "./components/Projects";
import Project from "./components/Project";

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
