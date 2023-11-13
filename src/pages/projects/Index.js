import { useState } from "react" 
import projectsJSON from "../../assets/data/projects.json"
import ProjectCard from "../../components/ProjectCard.js"

const Index = () => {
  const [projects, setProjects] = useState(projectsJSON)

  const projectList = projects.map((project, i) => {
    return <ProjectCard key ={i} project={project} />
  })
  return (
    <>
    <div className="grid grid-cols-2 gap-4 justify-items-centre">
    {projectList}
    </div>
    </>
  )
}

export default Index