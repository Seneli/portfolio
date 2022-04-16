import { useState, onClick } from 'react';

function Menu() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    if (!showMenu) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  };
  const showClass = showMenu ? 'show' : '';
  const closeClass = showMenu ? 'close' : '';

  return (
    <header>
      <div className={`menu-btn ${closeClass}`} onClick={toggleMenu}>
        <div className="btn-line" />
        <div className="btn-line" />
        <div className="btn-line" />
      </div>

      <div className={`menu ${showClass}`}>
        <div className={`menu-branding ${showClass}`}>
          {/* <img src="/naruto.png" /> */}
          <div className="portrait"></div>
        </div>
        <ul className={`menu-nav ${showClass}`}>
          <li className={`nav-item ${showClass}`}>
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li className={`nav-item ${showClass}`}>
            <a href="/about" className="nav-link">
              About
            </a>
          </li>
          <li className={`nav-item ${showClass}`}>
            <a href="/projects" className="nav-link">
              Projects
            </a>
          </li>
          <li className={`nav-item ${showClass}`}>
            <a href="/resume" className="nav-link">
              Resume
            </a>
          </li>
          <li className={`nav-item ${showClass}`}>
            <a href="/updates" className="nav-link">
              Updates
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Menu;
