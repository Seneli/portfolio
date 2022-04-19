import Typewriter from 'typewriter-effect';
import Menu from './Menu';
import '../styles/main.scss';

const Updates = () => {
  return (
    <>
      <div id="updates-bg">
        <Menu />
        <main id="home">
          <h1 className="lg-heading">
            <Typewriter
              className="typewriter"
              options={{
                strings: [
                  'This page is coming soon',
                  "I hope you have a good day!",
                  "😁 ✌️"
                ],
                autoStart: true,
                loop: true
              }}
            />
          </h1>
        </main>

        <footer>Made with Love ❤️ By Seneli</footer>
      </div>
    </>
  );
};

export default Updates;
