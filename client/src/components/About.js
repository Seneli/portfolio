import { useState } from 'react';
import Menu from './Menu';
import Typewriter from 'typewriter-effect';
import ProfilePic from '../content/images/pfp.png';
import '../styles/main.scss';
import { volunteering } from '../content/jsons/about.js';

const About = () => {
  const [volunteerContent, setVolunteerContent] = useState('WISE');

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
                    'I also love fluffy dogs and meeting new people'
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
                    (pronounced "Seh-neh-lee")
                  </span>
                  , and I go by <span className="about-sec-color">She/Her</span>{' '}
                  pronouns. I like learning about web development and using tech
                  for social good. In my spare time you can find me reading,
                  playing the piano, watching anime or painting! ____________
                </p>
              </div>

              {/* 
              I didn't always know what I wanted to do professionally, which is why I'm really happy to have found a passion for tech the way I have. 
              Over the past two years I have completed internships at Bell Canada and CDW, where I worked in automation and enterprise Sales. 
              Both internships were a lot of fun in their own way and taught me a lot. It was through these experiences that I met people like Glenn and Sam and __ who influenced me to switch programs into Computer Systems Engineering and pursue a career in software. 
              
              This summer I will be working at Amazon as an SDE intern on an AWS team, which I am really excited about. 
              
              Over the last year, I got my AWS Certified Cloud Practitioner Certificate and this summer I wanted to get the next one, which is the AWS Certified Developer - Associate certificate. I'm pretty stoked to be able to study for it while contributing to the AWS code base. {emoji}
              */}
              <div className="tab tab-1">
                <h3>Professional</h3>
                <p>
                  I didn't always know what I wanted to do professionally, which
                  is why I'm really happy to have found a passion for tech the
                  way I have.
                  <br />
                  <br />
                  Over the past two years{' '}
                  <span className="about-sec-color">
                    I have completed internships at Bell Canada and CDW
                  </span>
                  , where I worked in automation and enterprise Sales. Both
                  internships were a lot of fun and taught me a lot in their own
                  way .
                  <br />
                  <br />
                  It was through these experiences that I met people like Glenn
                  and Sam, who influenced me to switch programs into Computer
                  Systems Engineering and pursue a career in software.
                  <br />
                  <br />
                  <span className="about-sec-color">
                    This summer I will be working at Amazon as an SDE intern on
                    an AWS team
                  </span>
                  , which I am really excited about.
                  <br />
                  <br />
                  Over the last year, I got my{' '}
                  <span className="about-sec-color">
                    AWS Certified Cloud Practitioner Certificate
                  </span>{' '}
                  and this summer I wanted to get the next one, which is the{' '}
                  <span className="about-sec-color">
                    AWS Certified Developer - Associate certificate
                  </span>
                  . I'm pretty stoked to be able to study for it while
                  contributing to the AWS code base.{' '}
                </p>
              </div>

              {/* 
              My current technical interests are Web Development and I also want to learn more about cloud computing. I'm open to learning pretty much anything though, since there aren't many areas of tech I find boring. 
              
              To learn more about projects I've done, check out the projects page!
              Its hard to put my finger on one particular thing that got me into tech. It was probably a mix of my coding classes in 1st year, my internship at Bell and the community of friends I made in software. 
              There was such a community to being able to talk about projects or things you were learning about or working on with others that I really enjoyed. I also like being able to make something and seeing others use it, which was harder to do in the major I started with - Architectural Engineering. 
              
              */}
              <div className="tab tab-2">
                <h3>Technical</h3>
                <p>
                  My current technical interests are{' '}
                  <span className="about-sec-color">
                    Full Stack Web Development
                  </span>{' '}
                  and <span className="about-sec-color">cloud computing</span>.
                  I'd love to learn more about computer networking and AI/ML as
                  well! There aren't many areas of tech I find boring.
                  <br />
                  <br />
                  To learn more about projects I've done, check out the{' '}
                  <a href="/projects" className="about-sec-color">
                    <u>projects page</u>
                  </a>
                  !
                  <br />
                  <br />
                  <hr />
                  <br />
                  Its hard to put my finger on one particular thing that got me
                  into tech. If I had to guess, it was probably a mix of my
                  coding classes in 1st year, my internship at Bell and the
                  community of friends I made in software.
                  <br />
                  <br />
                  There was such a community to being able to talk about
                  projects or things you were learning about or working on with
                  others that I really enjoyed. I also like being able to make
                  something and see others use it, which was harder to do in the
                  major I started with - Architectural Engineering.
                  <br />
                  <br />
                  Overall, I'm very happy to be here and I'm excited to see how
                  much our industry grows in my lifetime.
                </p>
              </div>

              {/* 
              I'm also a strong believer in giving back to the community. 
              In my spare time this year I volunteered for CU-WiSE (Carleton's Women in Science and Engineering),  CU-Blueprint (Carleton's Blueprint chapter) and PTC (Project Tech Conferences).
              -------
              At WiSE, I started a mentorship program that paired 1st year women and gender minority students in STEM to upper year mentors to provide advice and support during the transition to university. I created this program to support international students and students like me, who started university without a direction or felt imposter syndrome in male dominate fields.
              
              At WiSE I also supported most of the events held in the 2021-2022 academic year including a series of networking nights with industry hosts in February. 
              -------
              At Blueprint, I volunteered as a dev to recreate the old club website with a more modern stack of React and Styled Components. Blueprint is a group of students who create pro bono apps for non-profits, so I wanted to support this mission statement in any way I could. 
              -------
              PTC is a ______. Over the past two years, I've helped build full stack web applications for them to host their events and announce launches. I also volunteer as part of their mentorship program to give back. 
              */}
              <div className="tab tab-3">
                <h3>Volunteering</h3>
                <p>
                  I'm also a strong believer in giving back to the community.
                  <br />
                  <br />
                  In my spare time this year I volunteered for the following
                  groups. Click on each tab to learn more about them!
                  <ul>
                    <li onClick={() => setVolunteerContent('WISE')}>
                      <span className="about-sec-color">CU-WiSE</span> -
                      Carleton's Women in Science and Engineering
                    </li>
                    <li onClick={() => setVolunteerContent('Blueprint')}>
                      <span className="about-sec-color">CU-Blueprint</span> -
                      Carleton's Blueprint chapter
                    </li>
                    <li onClick={() => setVolunteerContent('PTC')}>
                      <span className="about-sec-color">PTC</span> - Project
                      Tech Conferences
                    </li>
                  </ul>
                  <hr />
                  <br />
                  {volunteering[volunteerContent].map((content, index) => {
                    if (content === <br />) {
                      return <br key={index} />;
                    } else {
                      return <p key={index}>{content}</p>;
                    }
                  })}
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