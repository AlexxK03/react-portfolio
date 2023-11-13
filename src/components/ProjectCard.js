import React from "react";

const ProjectCard = ({ project }) => {
  const tags = project.tags.map((tag, i) => {
    return (
      <div key={i} className="badge badge-outline badge-accent">
        {tag}
      </div>
    );
  });
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={project.image[0].path} alt={project.image[0].caption} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{project.title}</h2>
        <p>{project.description}</p>
        <div className="card-actions justify-end">{tags}</div>
        <div>
          {project.github ? (
            <a href={project.github} target="_blank" className="btn btn-secondary mr-2">Github</a>
          ) : (
            ""
          )}
          {project.website ? (
            <a href={project.website} target="_blank" className="btn btn-secondary">Website</a>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
