import Menu from './Menu';
import Typewriter from 'typewriter-effect';
import '../styles/main.scss';

const About = () => {
  return (
    <>
      <body id="about-bg">
        <Menu />

        <main id="home">
          <h1 className="lg-heading">
            About <span className="text-secondary">Me</span>
          </h1>
          <h2 className="sm-heading">
            <Typewriter
              className="typewriter"
              options={{
                strings: [
                  'Learn a bit about me',
                  'As you can tell I love cartoons',
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <div className="about-info">
            <img
              src="https://pyxis.nymag.com/v1/imgs/168/564/d268eaf1cb956c02eba2edf728663887ce-19-bojack-todd.rsquare.w700.jpg"
              alt="Seneli Seneviratne"
              className="bio-image"
            />
            <div className="bio">
              <h3 className="title">Bio</h3>
              <p>
                some text about me will go in here! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Iusto et dolorem itaque
                voluptatibus natus necessitatibus odit tempora sapiente nemo
                excepturi!
              </p>
            </div>

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

export default About;
