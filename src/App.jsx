import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MyInfo from "./components/MyInfo";
import Projects from "./components/Projects";
import Project from "./components/Project";
import Cursor from "./components/Cursor";

function App() {
  if (false) {
    return <div className="loading">Loading</div>;
  }
  return (
    <main>
      <Cursor />
      <Navbar />
      <Hero />
      <MyInfo />
      <Projects />
    </main>
  );
}

export default App;
