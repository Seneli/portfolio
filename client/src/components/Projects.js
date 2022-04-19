import { useState } from 'react';
import Menu from './Menu';
import Typewriter from 'typewriter-effect';
import { skills, projects, map } from '../content/jsons/projects';
import '../styles/main.scss';
import { FaGithub } from 'react-icons/fa';

import todo_list_img from '../content/images/projects/to-do-list.png';

const Projects = () => {
  const [state, setState] = useState();

  const toggleSelected = (index) => {
    if (skills[index].selected) {
      skills[index].selected = false;
    } else {
      skills[index].selected = true;
    }
    state ? setState(false) : setState(true);
  };

  const isProjectVisible = (projSkills) => {
    for (var i = 0; i < projSkills.length; i++) {
      var projSkill = projSkills[i];
      var skill = skills[map[projSkill]];
      if (skill && skill.selected) {
        return true;
      }
    }
    return false;
  };

  const clearSelected = () => {
    skills.forEach((skill) => {
      skill.selected = false;
    });
    state ? setState(false) : setState(true);
  };

  const selectAll = () => {
    skills.forEach((skill) => {
      skill.selected = true;
    });
    state ? setState(false) : setState(true);
  };

  return (
    <>
      <div id="projects-bg">
        <Menu />

        <main id="proj-home">
          <div className="proj column">
            <h1 className="lg-heading">
              My <span className="proj-color">Projects</span>
            </h1>
            <h2 className="sm-heading">
              <Typewriter
                className="typewriter"
                options={{
                  strings: [
                    'Projects and technical skills',
                    'Click the following skills to see where I used them'
                  ],
                  autoStart: true,
                  loop: true
                }}
              />
            </h2>

            <div className="skills">
              {skills.map((skill, index) => {
                return (
                  <div
                    key={index}
                    className={`skill ${skill.area} ${skill.selected}`}
                    onClick={() => {
                      toggleSelected(index);
                    }}
                  >
                    {skill.name}
                  </div>
                );
              })}
              <div className={`skill all-skills`} onClick={clearSelected}>
                Clear Selection
              </div>
              <div className={`skill all-skills`} onClick={selectAll}>
                Select All
              </div>
            </div>

            <div className="projects">
              {projects.map((project, index) => {
                return (
                  isProjectVisible(project.skills) && (
                    <div key={index} className="project">
                      <h3 className="title">{project.name}</h3>

                      <div className="skills">
                        {project.skills.map((skill, index) => {
                          return (
                            <p key={index} className={`skill ${skill}`}>
                              {skill}
                            </p>
                          );
                        })}
                      </div>
                      <p className="description">{project.description}</p>
                      <img
                        src={project.media}
                        className="image"
                        alt="project media"
                      />
                      <a className="github" href={project.github}>
                        <FaGithub />
                      </a>
                    </div>
                  )
                );
              })}
            </div>
          </div>
        </main>
        <footer>Made with Love ❤️ By Seneli</footer>
      </div>
    </>
  );
};

export default Projects;
