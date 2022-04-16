import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Updates from './components/Updates';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/updates" element={<Updates />} />
      </Routes>
    </>
  );
}

export default App;
