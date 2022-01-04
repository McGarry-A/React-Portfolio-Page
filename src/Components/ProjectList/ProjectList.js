import { Project } from "../Project/Project";

export const ProjectList = ({ list }) => {
  return (
    <div>
      {list.map((el, index) => (
        <Project
          title={el.title}
          description={el.description}
          image={el.img}
          tech={el.tech}
          link={el.link}
          index={index}
          github={el.github}
          github2={el.github2}
        />
      ))}
    </div>
  );
};
