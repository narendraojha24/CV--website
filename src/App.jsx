import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import ParticlesBackground from "./components/ParticlesBackground";
function App() {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.documentElement.classList.toggle("dark", !darkMode)
  }


  return (
    <>
 
      <div className={`min-h-screen w-full flex flex-col sm:flex-row subpixel-antialiased ${darkMode ? "bg-transparent" : "bg-transparent"}`}>
         <ParticlesBackground />
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
        <Home/>
      </div>
    </>
  );
}

export default App;
