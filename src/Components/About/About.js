import "./About.css";
import teamwork from "../../img/teamwork.svg";
import award from "../../img/award.png";
import {FaReact, FaHtml5, FaCss3Alt, FaSass, FaNodeJs, FaNode} from "react-icons/fa"
import {DiJavascript1, DiMongodb} from "react-icons/di"

export const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={teamwork} className="a-img" alt="teamwork"></img>
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">Skills</h1>
        <p className="a-sub">Here is my current tech stack, and my plans for future learning!</p>
        <p className="a-desc">
          My current skills include HTML, CSS, SASS, Responsive Webdesign, Javascript, NodeJs, React,
          Mongoose and MongoDB, Resful API's and more.
        </p>
        <br/>
        <p className="a-desc">
          Moving forward for my own personal projects, I am intersted in
          learning Typescript, GASP for Animation and taking my front-end skills to the next level.
        </p>
        <div className="a-stack">
          <FaReact className="a-stack-item" size="2em"/>
          <DiJavascript1 className="a-stack-item" size="2em"/>
          <FaHtml5 className="a-stack-item" size="2em"/>
          <FaCss3Alt className="a-stack-item" size="2em"/>
          <FaSass className="a-stack-item" size="2em"/> 
          <FaNode className="a-stack-item" size="2em"/>
          <DiMongodb className="a-stack-item" size="2em"/>
        </div>
      </div>
    </div>
  );
};

