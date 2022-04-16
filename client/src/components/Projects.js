import { useState } from 'react';
import Menu from './Menu';
import Typewriter from 'typewriter-effect';
import { skills, projects } from './project_list';
import '../styles/main.scss';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const [state, setState] = useState();

  const toggleSelected = (index) => {
    console.log(skills[index]);
    if (skills[index].selected) {
      skills[index].selected = false;
    } else {
      skills[index].selected = true;
    }
    state ? setState(false) : setState(true);
  };

  const selected = (index) => {
    return skills[index].selected ? 'selected' : '';
  };

  return (
    <>
      <body id="projects-bg">
        <Menu />

        <main id="home">
          <h1 className="lg-heading">
            My <span className="text-secondary">Projects</span>
          </h1>
          <h2 className="sm-heading">
            <Typewriter
              className="typewriter"
              options={{
                strings: [
                  'Projects and technical skills',
                  'Click the following skills to see where I used them',
                ],
                autoStart: true,
                loop: true,
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
          </div>

          <div className="projects">
            {projects.map((project, index) => {
              return (
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
                  <p className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit, modi iste. Nam, qui nisi recusandae error sint vel
                    asperiores tempore. {project.description}
                  </p>
                  <img
                    className="image"
                    src="https://pyxis.nymag.com/v1/imgs/168/564/d268eaf1cb956c02eba2edf728663887ce-19-bojack-todd.rsquare.w700.jpg"
                    // {project.media}
                    alt="project media"
                  />
                  <div className="github">
                    <FaGithub />
                  </div>
                </div>
              );
            })}
          </div>
        </main>
        <footer>Made with Love ❤️ By Seneli</footer>
      </body>
    </>
  );
};

export default Projects;
