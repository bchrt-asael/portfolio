import { useEffect, useState } from 'react';
import './App.css'
import Hero from "./components/Hero.tsx";
import Navbar from "./components/Navbar.tsx";
import Projects from './components/Projects.tsx';
import About from './components/About.tsx';
import Technologies from './components/Technologies.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = isDarkMode ? "dark" : "light";
  }, [isDarkMode]);

  return (
    <>
      <Navbar
        isDarkMode={isDarkMode}
        onToggleTheme={() => setIsDarkMode(!isDarkMode)} />

      <main>
        <Hero />
        <Projects />
        <About />
        <Technologies />
        <Contact />
        <Footer />
      </main>

    </>
  );
}

export default App;
