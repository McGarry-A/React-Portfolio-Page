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
              Junior developer based in Preston, UK. 
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
