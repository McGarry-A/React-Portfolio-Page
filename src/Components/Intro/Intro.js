import "./Intro.css";
import programming from "../../img/programming.svg";
export const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Ahmed!</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Front End Developer</div>
              <div className="i-title-item">React Developer</div>
              <div className="i-title-item">Full Stack Developer</div>
              <div className="i-title-item">Javascript Wiz</div>
            </div>
          </div>

          <div className="i-desc">
            <p>
              Handed the largest account of my company after 1 year of service.
              Managing the implementation of CleanCloud software in over 500
              branches in the Middle East. Working on technical documents such
              as the scope of work, which would be reviewed and approved by my
              company's CEO and CTO, as well as the CEO of the client company.
            </p>
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={programming} className="i-img" alt="teamwork" />
      </div>
    </div>
  );
};
