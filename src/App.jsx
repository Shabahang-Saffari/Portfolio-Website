import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MyInfo from "./components/MyInfo";
import Project from "./components/Project";
import Cursor from "./components/Cursor";

function App() {
  if (false) {
    return <div className="loading">Loading</div>;
  }
  return (
    <main className={false ? "dark_mode" : "light_mode"}>
      <Cursor />
      <Navbar />
      <Hero />
      <MyInfo />
      <Project />
    </main>
  );
}

export default App;
