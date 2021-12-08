import "./Project.css";
export const Project = ({ title, description, tech, link, image, index }) => {
  return (
    <div>
      {index === 0 && (
        <h1 style={{ textAlign: "center" }}>
          Here some of my most recent projects
        </h1>
      )}
      <div className="project-container">
        <div className="project-text-container">
          <h1 className="project-item project-title">{title}</h1>
          <p>Tech Stack:</p>
          <p className="project-item project-tech">{tech}</p>
          <p>Description:</p>
          <p className="project-item project-description">{description}</p>
          <p>Link: </p>
          <a href={link}>{link}</a>
        </div>
        <div className="project-image-container">
          <div className="c">
            <div className="c-browser">
              <div className="c-circle red"></div>
              <div className="c-circle yellow"></div>
              <div className="c-circle green"></div>
            </div>
            <a href={link}>
              <img src={image} className="c-img" alt="project-image" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
