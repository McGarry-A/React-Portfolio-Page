import { Project } from "../Project/Project";
import "./ProjectList.css";
import { NavLink, Routes, Route } from "react-router-dom";
import JobHack from "../../Screens/jobhack.png";
import BabaJohns from "../../Screens/BabaJohns.png";
import Bookmark from "../../Screens/Bookmark-landing-page.png";
import Manage from "../../Screens/Manage-landing-page.png";
import Sunnyside from "../../Screens/Sunnyside-agency-landing-page.png";
import ReportsDashboard from "../../Screens/reports-dashboard.png";
import FitnessTracker from "../../Screens/fitness-tracker.png";
import SpotifySearch from "../../Screens/spotify-search.png";

export const ProjectList = () => {
  const sections = [
    {
      name: "Front-end",
      path: "React-Portfolio-Page/",
    },
    {
      name: "Full-stack",
      path: "React-Portfolio-Page/full-stack",
    },
    {
      name: "Mini Projects",
      path: "React-Portfolio-Page/mini-projects",
    },
  ];
  const fullStackList = [
    {
      img: JobHack,
      description:
        "JobHack is a full stack application that helps young professionals find their way into the job market. JobHack allows users to search for jobs, and save them to your list, which you can then manage so that you do not lose track of any of your applications!",
      title: "JobHack",
      tech: "React, Mongoose, Express, RESTFul Api's, StyledComponents, React DND Beautiful",
      link: "https://jobhack.netlify.app/",
      github: "https://github.com/james-arn/JobHack-Frontend",
      github2: "https://github.com/james-arn/JobHack-Backend",
      disabled: false,
    },
    {
      img: BabaJohns,
      description:
        "Baba-Johns is a food ordering application which allows users to login and create orders. Baskets are saved for when users log out and then log back in.",
      title: "Baba-Johns",
      tech: "Vue, Express, Typescript, RESTFul API's",
      link: "Pending",
      github: "https://github.com/McGarry-A/Vue-Baba-Johns",
      github2: "https://github.com/McGarry-A/Express-Typescript-Backend",
      disabled: true,
    },
  ];

  const miniProjects = [
    {
      img: ReportsDashboard,
      description:
        "This is a non-functional website I created to introduce myself to Tailwind.",
      tech: "React, Tailwind, ChartJs",
      title: "Reports Dashboard",
      link: "https://mcgarry-a.github.io/Report-dashboard-tailwind/",
      github: "https://github.com/McGarry-A/Report-dashboard-tailwind",
      disabled: false,
    },
    {
      img: SpotifySearch,
      description:
        "This website allows users to login using their spotify accounts, and search for tracks, albums and artists using the Spotify API.",
      tech: "Vanilla JS, EJS, Express, HTML, CSS, Bootstrap",
      title: "Spotify Search App",
      link: "This app is complete but not yet deployed, please contact me for more information on this project.",
      github: "https://github.com/McGarry-A/Spotify-Search-Project",
      disabled: true,
    },
    {
      img: FitnessTracker,
      description:
        "This is a small application that helps me keep track of my 1 rep max progress over time in the gym. Generally I would use my notes app or excel for this, however, this app helps me visualize my progress and stay motivated. ",
      tech: "React, ReactRouter, ChartJS, SASS",
      title: "React Fitness Tracker",
      link: "https://mcgarry-a.github.io/ReactFitnesstracker/",
      github: "https://github.com/McGarry-A/ReactFitnesstracker",
      disabled: false,
    },
  ];

  const frontEndList = [
    {
      title: "Sunny Side Agency",
      img: Sunnyside,
      tech: "React, SASS",
      link: "https://mcgarry-a.github.io/SunnysideAgency",
      github: "https://github.com/McGarry-A/SunnysideAgency",
      disabled: false,
    },
    {
      title: "Bookmark Landing Page",
      img: Bookmark,
      tech: "React, SASS, React Router",
      link: "https://mcgarry-a.github.io/bookmark-landing-page",
      github: "https://github.com/McGarry-A/bookmark-landing-page",
      disabled: false,
    },
    {
      title: "Manage Landing Page",
      img: Manage,
      tech: "React, SASS, Swiper",
      link: "https://mcgarry-a.github.io/ManageLandingPage",
      github: "https://github.com/McGarry-A/ManageLandingPage",
      disabled: false,
    },
  ];
  return (
    <div className="project-list-container">
      <h2 className="project-list-title">
        Click one of the links to see some of my most recent work
      </h2>
      <nav>
        <ul className="features-nav-list">
          {sections.map((el, index) => {
            return (
              <li className="project-section">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active navLink" : "inactive navLink"
                  }
                  to={el.path}
                >
                  {el.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
      <Routes>
        <Route path={"/"} element={<Project arr={frontEndList} />} />
        <Route path={"/full-stack"} element={<Project arr={fullStackList} />} />
        <Route
          path={"/mini-projects"}
          element={<Project arr={miniProjects} />}
        />
      </Routes>
    </div>
  );
};
