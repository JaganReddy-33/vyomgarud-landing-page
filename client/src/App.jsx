import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Capabilities from './components/Capabilities';
import Highlights from './components/Highlights';
import Showcase from './components/Showcase';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Capabilities />
      <Highlights />
      <Showcase />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
