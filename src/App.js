import './App.css';
import { About } from './components/About';
import { Hero } from './components/Hero';
import Navbar from './components/Navbar';
import { Projects } from './components/Projects';
import { Techstack } from './components/Techstack';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Techstack />
      <About />
      <Projects />
    </div>
  );
}

export default App;
