import { useState, onClick } from 'react';
import Typewriter from 'typewriter-effect';
import Menu from './Menu';
import '../styles/main.scss';

// get our fontawesome imports
import { FaLinkedin, FaGithub, FaSpotify, FaYoutube } from 'react-icons/fa';

function Home() {
  return (
    <>
      <body id="bg-img">
        <Menu />

        <main id="home">
          <div className="typewriter">
            <Typewriter
              className="typewriter"
              options={{
                strings: [
                  'Hello',
                  'Welcome to my Website',
                  'To learn more click the menu button ↗',
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <h1 className="lg-heading">
            Seneli <span className="text-secondary">Seneviratne</span>
          </h1>
          <h2 className="sm-heading">
            3rd year Computer Systems Engineering student
          </h2>
          <h3 className="sm-heading">Carleton University</h3>
          <div className="icons">
            <a>
              <FaLinkedin />
            </a>
            <a>
              <FaGithub />
            </a>
            <a>
              <FaSpotify />
            </a>
            <a>
              <FaYoutube />
            </a>
          </div>
        </main>
        <footer>Made with Love ❤️ By Seneli</footer>
      </body>
    </>
  );
}

export default Home;
