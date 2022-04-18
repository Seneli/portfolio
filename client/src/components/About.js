import Menu from './Menu';
import Typewriter from 'typewriter-effect';
import ProfilePic from '../content/pfp.png';
import '../styles/main.scss';

const About = () => {
  return (
    <>
      <div id="about-bg">
        <Menu />

        <main id="about-home">
          <div className="column">
            <h1 className="lg-heading">
              About <span className="about about-color">Me</span>
            </h1>
            <h2 className="sm-heading">
              <Typewriter
                className="typewriter"
                options={{
                  strings: [
                    'Learn a bit about me',
                    'As you can tell I love cartoons',
                    'I also love fluffy dogs and clouds'
                  ],
                  autoStart: true,
                  loop: true
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
                <h3 className="title about-color">Bio</h3>
                <p className="text">
                  Hey everyone, my name is Seneli,{' '}
                  <span className="about-sec-color">
                    (pronounced "Seh-nuh-lee")
                  </span>
                  , and I go by <span className="about-sec-color">She/Her</span>{' '}
                  pronouns. I'm a{' '}
                  <span className="about-sec-color">
                    Computer Engineering Student
                  </span>{' '}
                  at Carleton University and I'm passionate about web
                  development and using tech for social good. In my spare time
                  you can find me reading, playing the piano, watching anime or
                  painting!
                </p>
              </div>

              <div className="tab tab-1">
                <h3>Professional</h3>
                <p>
                  This summer I will be working at{' '}
                  <span className="about-sec-color">
                    Amazon as a SDE Intern
                  </span>
                  .
                  <br />
                  <br />
                  In the past two years I have completed internships at{' '}
                  <span className="about-sec-color">Bell </span>
                  and <span className="about-sec-color">CDW Canada</span>.
                  <br />
                  <br />
                  I've also been a <span className="about-sec-color">
                    TA
                  </span>{' '}
                  and <span className="about-sec-color">PASS Facilitator</span>{' '}
                  at Carleton University. I'm very passionate about making
                  education more accessible for others.
                  <br />
                  <br />
                  To learn more, check out my{' '}
                  <a
                    className="dark-hover"
                    href="https://drive.google.com/file/d/1szJtQAY7jR46DOy1x0ukWuj78PR_ZGLi/view?usp=sharing"
                  >
                    <u className="about-sec-color">resume</u>
                  </a>{' '}
                  and
                  <a
                    className="dark-hover"
                    href="https://drive.google.com/file/d/1szJtQAY7jR46DOy1x0ukWuj78PR_ZGLi/view?usp=sharing"
                  >
                    <u className="about-sec-color"> Linkedin</u>
                  </a>
                  !
                </p>
              </div>
              <div className="tab tab-2">
                <h3>Technical</h3>
                <p>
                  My main interests are{' '}
                  <span className="about-sec-color">Web Development </span>
                  and
                  <span className="about-sec-color">Cloud Computing.</span>
                  <br />
                  To learn more, check out my{' '}
                  <a className="dark-hover" href="/projects">
                    <u className="about-sec-color">past projects</u>
                  </a>
                  !
                </p>
              </div>
              <div className="tab tab-3">
                <h3>Volunteering</h3>
                <p>
                  I am a strong believer in using Tech as a force for good. I
                  volunteer with{' '}
                  <span className="about-sec-color">
                    CU-WiSE (Women in Science and Engineering Carleton){' '}
                  </span>{' '}
                  and <span className="about-sec-color">CU-Blueprint </span>.
                  WISE
                  <br />
                </p>
              </div>
            </div>
          </div>
        </main>
        <footer>Made with Love ❤️ By Seneli</footer>
      </div>
    </>
  );
};

export default About;
