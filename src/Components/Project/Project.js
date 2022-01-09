import "./Project.css";
export const Project = ({ arr }) => {
  return (
    <div className="project-list">
      {arr.map((el, index) => {
        return (
          <div className="project-container">
            <img className="project-image" src={el.img} alt="project" />
            <div className="project-content">
              <h3 className="project-title">{el.title}</h3>
              <p className="project-description">{el.description}</p>
              <p>
                <em>Built using: </em> {el.tech}
              </p>
              <div className="project-buttons">
                <button className="project-button">
                  <a className="project-link" href={el.github}>
                    Github
                  </a>
                </button>
                <button className="project-button" style={{display: !el.disabled ? "block" : "none"}}> 
                  <a className="project-link" href={el.link}>
                    Live Demo
                  </a>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
