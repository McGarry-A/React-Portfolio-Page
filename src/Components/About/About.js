import "./About.css"
import teamwork from "../../img/teamwork.svg"
import award from "../../img/award.png"

export const About = () => {
    return <div className="a">
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src={teamwork} className="a-img" alt="teamwork"></img>
            </div>
        </div>
        <div className="a-right">
            <h1 className="a-title">About Me</h1>
            <p className="a-sub">This is my subtitle</p>
            <p className="a-desc">Handed the largest account of my company after 1 year of service.
              Managing the implementation of CleanCloud software in over 500
              branches in the Middle East. Working on technical documents such
              as the scope of work, which would be reviewed and approved by my
              company's CEO and CTO, as well as the CEO of the client company.</p>
              <div className="a-award">
                  <img className="a-award-img" src={award} alt="award"></img>
                  <div className="award-texts">
                  <h4 className="a-award-title">Award Title</h4>
                  <p className="a-award-text">This is some random text</p>
                  </div>
              </div>
        </div>
    </div>
}