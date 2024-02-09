import './App.css';
import { About } from './components/About';
import { Hero } from './components/Hero';
import Navbar from './components/Navbar';
import { Techstack } from './components/Techstack';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Techstack />
      <About />
    </div>
  );
}

export default App;
