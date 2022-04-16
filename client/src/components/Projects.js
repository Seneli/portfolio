import Menu from './Menu';
import '../styles/main.scss';

const Projects = () => {
  return (
    <>
      <body id="projects-bg">
        <Menu />

        <main id="home">
          <h1 className="lg-heading">
            My <span className="text-secondary">Projects</span>
          </h1>
          <h2 className="sm-heading">
            Projects and technical skills
          </h2>

          <div className="skills">


            <div className="tab tab-1">
              <h3>Technical</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quaerat, quo porro eum ex debitis nobis magni aliquam explicabo
                id aperiam.
              </p>
            </div>
            <div className="tab tab-2">
              <h3>Volunteering</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quaerat, quo porro eum ex debitis nobis magni aliquam explicabo
                id aperiam.
              </p>
            </div>
            <div className="tab tab-3">
              <h3>Personal</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quaerat, quo porro eum ex debitis nobis magni aliquam explicabo
                id aperiam.
              </p>
            </div>
          </div>
        </main>
        <footer>Made with Love ❤️ By Seneli</footer>
      </body>
    </>
  );
};

export default Projects;
