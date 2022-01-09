import "./App.css";
import { About } from "./Components/About/About";
import { Contact } from "./Components/Contact/Contact";
import { Intro } from "./Components/Intro/Intro";
import Navbar from "./Components/Navbar/Navbar";
import { ProjectList } from "./Components/ProjectList/ProjectList";


function App() {

  return (
    <div className="App">
      <Navbar />
      <Intro />
      <ProjectList />
      <About />
      <Contact />
      {/* <Navbar />
      <Home /> */}
    </div>
  );
}

export default App;
