import "./App.css";
import { About } from "./Components/About/About";
import { Contact } from "./Components/Contact/Contact";
import { Intro } from "./Components/Intro/Intro";
import { ProjectList } from "./Components/ProjectList/ProjectList";
import JobHack from "./Screens/jobhack.png";
import ReportsDashboard from "./Screens/reports-dashboard.png";
import FitnessTracker from "./Screens/fitness-tracker.png";
import SpotifySearch from "./Screens/spotify-search.png";
import BabaJohns from "./Screens/BabaJohns.png";

function App() {
  const list = [
    {
      img: JobHack,
      description:
        "JobHack is a full stack application that helps young professionals find their way into the job market. JobHack allows users to search for jobs, and save them to your list, which you can then manage so that you do not lose track of any of your applications!",
      title: "JobHack",
      tech: "React, Mongoose, Express, RESTFul Api's, StyledComponents, React DND Beautiful",
      link: "https://jobhack.netlify.app/",
    },
    {
      img: BabaJohns,
      description:
        "Baba-Johns is a food ordering application which allows users to login and create orders. Baskets are saved for when users log out and then log back in.",
      title: "Baba-Johns",
      tech: "Vue, Express, Typescript, RESTFul API's",
      link: "Pending",
    },
    {
      img: ReportsDashboard,
      description:
        "This is a non-functional website I created to introduce myself to Tailwind.",
      tech: "React, Tailwind, ChartJs",
      title: "Reports Dashboard",
      link: "https://mcgarry-a.github.io/Report-dashboard-tailwind/",
    },
    {
      img: SpotifySearch,
      description:
        "This website allows users to login using their spotify accounts, and search for tracks, albums and artists using the Spotify API.",
      tech: "Vanilla JS, EJS, Express, HTML, CSS, Bootstrap",
      title: "Spotify Search App",
      link: "This app is complete but not yet deployed, please contact me for more information on this project.",
    },
    {
      img: FitnessTracker,
      description:
        "This is a small application that helps me keep track of my 1 rep max progress over time in the gym. Generally I would use my notes app or excel for this, however, this app helps me visualize my progress and stay motivated. ",
      tech: "React, ReactRouter, ChartJS, SASS",
      title: "React Fitness Tracker",
      link: "https://mcgarry-a.github.io/ReactFitnesstracker/",
    },
  ];

  return (
    <div className="App">
      <Intro />
      <About />
      <ProjectList list={list} />
      <Contact />
    </div>
  );
}

export default App;
