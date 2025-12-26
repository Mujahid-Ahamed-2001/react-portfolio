import React from 'react'
import { ExternalLink, Github, TrendingUp } from 'lucide-react'

const ProjectCard = (project) => {
  const {title, description, image, technologies, metrics, demoUrl, githubUrl} = project;

  return (
    <div className="cls">
      <div className="cls">
        <img 
          src="" 
          alt="" 
          className="cls" 
        />

        <div className='' />

        <div className="cls">
          {demoUrl && (
            <a 
              href={demoUrl}
              target='_blank'
              rel='noopener noreferrer'
              className=''
              title='View Demo'
            >
              <ExternalLink className='' />
            </a>
          )}
          {githubUrl && (
            <a 
              href={githubUrl}
              target='_blank'
              rel='noopener noreferrer'
              className=''
              title='View Demo'
            >
              <Github className='' />
            </a>
          )}
        </div>

        <div className="cls">
          <span className="cls">
            {project.category}
          </span>
        </div>
      </div>

      <div className="cls">
        <div>
          <h3>
            {title}
          </h3>
          <p className="cls">
            {description}
          </p>
        </div>

        <div className="cls">
          {technologies.map((tech, index) => {
            <span 
              key={index}
              className=''
            >
              {tech}
            </span>
          })}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard