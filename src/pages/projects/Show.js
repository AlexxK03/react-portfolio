import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import projectsJSON from "../../assets/data/projects.json";
const Show = () => {
  const [project, setProject] = useState(null);
  const { id } = useParams();
  

  useEffect(() => {
    let temp = projectsJSON.filter((project) => {
      return project.id === id;
      console.log(project.id)
    });
    setProject(temp);
  }, []);

  let imageCarousel = "";

  if (project.image) {
    let items = project.image.map((image, i) => {
      return (
        <div id={`item${i}`} className="carousel-item w-full">
          <img src={image.path} className="w-full" alt="#" />
        </div>
      );
    });

    let buttons = project.image.map((image, i) => {
      return (
        <a href={`#item${i}`} className="btn btn-xs">
          {i + 1}
        </a>
      );
    });

    imageCarousel = (
      <>
        <div className="carousel w-full">{items}</div>
        <div className="flex justify-center w-full py-2 gap-2">{buttons}</div>
      </>
    );
  }

  return (
    <>
      {imageCarousel}
      <p>
        <b>Title:</b>
        {project.title}
      </p>
      <p>
        <b>Description:</b>
        {project.description}
      </p>
      <p>
        <b>Date created:</b>
        {project.date}
      </p>
      <p>
        <b>Website:</b>
        {project.webiste}
      </p>
    </>
  );
};

export default Show;
