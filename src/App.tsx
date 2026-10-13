import { useEffect, useState } from 'react';
import './App.css'
import Hero from "./components/Hero.tsx";
import Navbar from "./components/Navbar.tsx";
import Projects from './components/Projects.tsx';
import About from './components/About.tsx';

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
      </main>

    </>
  );
}

export default App;
