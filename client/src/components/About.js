import Menu from './Menu';
import Typewriter from 'typewriter-effect';
import ProfilePic from "../content/pfp.png";
import '../styles/main.scss';

const About = () => {
  return (
    <>
      <body id="about-bg">
        <Menu />

        <main id="home">
          <h1 className="lg-heading">
            About <span className="about">Me</span>
          </h1>
          <h2 className="sm-heading">
            <Typewriter
              className="typewriter"
              options={{
                strings: [
                  'Learn a bit about me',
                  'As you can tell I love cartoons',
                  'I also love fluffy dogs and clouds',
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <div className="about-info">
            <img
              src={ProfilePic}
              alt="Seneli Seneviratne"
              className="bio-image"
            />
            <div className="bio">
              <h3 className="title about">Bio</h3>
              <p className="text">Hey everyone, thanks for ch</p>
            </div>

            <div className="tab tab-1">
              <h3 className="about">Professional</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quaerat, quo porro eum ex debitis nobis magni aliquam explicabo
                id aperiam.
              </p>
            </div>
            <div className="tab tab-2">
              <h3 className="about">Technical</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quaerat, quo porro eum ex debitis nobis magni aliquam explicabo
                id aperiam.
              </p>
            </div>
            <div className="tab tab-3">
              <h3 className="about">Volunteering</h3>
              <p>
                I am a strong believer in using Tech as a force for good. I
                volunteer with{' '}
                <span className="about">
                  CU-WiSE (Women in Science and Engineering Carleton){' '}
                </span>
                to support other women in STEM via affirmative action and peer
                support programs.
                <br />
                <br />I am a strong believer in using Tech as a forcefor good. I
                volunteer with CU-WiSE (Women in Science and Engineering
                Carleton) to support other women in STEM via affirmative action
                and peer support programs.
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
