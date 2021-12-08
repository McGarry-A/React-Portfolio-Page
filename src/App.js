import './App.css';
import { About } from './Components/About/About';
import { Contact } from './Components/Contact/Contact';
import { Intro } from './Components/Intro/Intro';
import { ProjectList } from './Components/ProjectList/ProjectList'
import JobHack from './Screens/jobhack.png'
import ReportsDashboard from './Screens/reports-dashboard.png'
import FitnessTracker from './Screens/fitness-tracker.png'
import SpotifySearch from './Screens/spotify-search.png'

function App() {

  const cardList = [
    {
      id:1,
      img:"https://hygger.io/wp-content/uploads/2020/07/7.png",
      link:""
    },
    {
      id:2,
      img:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/201810/stockvault-person-studying-and-learning---knowledge-concept178241_0-647x363.jpeg?0LocAW2E2gIBzZp0oZSWzxmQTvAPhN_v",
      link:""
    },
    {
      id:3,
      img:"https://www.globalfocusmagazine.com/wp-content/uploads/2020/02/Engaging_with_technology-scaled.jpg",
      link:""
    }, 
    {
      id:4,
      img:"https://res-3.cloudinary.com/fieldfisher/image/upload/c_lfill,g_auto/f_auto,q_auto/v1/sectors/technology/tech_neoncircuitboard_857021704_medium_lc5h05",
      link:""
    }
  ]

  const list = [
    {
      img: JobHack,
      description: "JobHack is a full stack application that helps young professionals find their way into the job market. JobHack allows users to search for jobs, and save them to your list, which you can then manage so that you do not lose track of any of your applications!",
      title: "JobHack",
      tech: "React, Mongoose, Express, RESTFul Api's, StyledComponents, React DND Beautiful",
      link: "https://jobhack.netlify.app/"
    },
    {
      img: ReportsDashboard,
      description: "This is a non-functional website I created to introduce myself to Tailwind.",
      tech: "React, Tailwind, ChartJs",
      title: "Reports Dashboard",
      link: ""
    },
    {
      img: SpotifySearch,
      description: "This website allows users to login using their spotify accounts, and search for tracks, albums and artists using the Spotify API.",
      tech: "Vanilla JS, EJS, Express, HTML, CSS, Bootstrap",
      title: "Spotify Search App",
      link: ""
    },
    {
      img: FitnessTracker,
      description: "This is a small application that helps me keep track of my 1 rep max progress over time in the gym. Generally I would use my notes app or excel for this, however, this app helps me visualize my progress and stay motivated. ",
      tech: "React, ReactRouter, ChartJS", 
      title: "React Fitness Tracker",
      link: ""
    }
  ]

  return (
    <div className="App">
      <Intro />
      <About />
      {/* <ProductList cardList={cardList} /> */}
      <ProjectList list={list}/>
      <Contact />
    </div>
  );
}

export default App;
