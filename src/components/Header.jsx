import React from 'react'
import { useState } from 'react'
import { BiMoon } from 'react-icons/bi'
import { BiSun } from 'react-icons/bi'
import image from '/public/image.jpg'
import { BiCurrentLocation, BiEnvelope, BiPhone } from 'react-icons/bi'
import { BiLogoGithub, BiLogoTwitter, BiLogoLinkedin } from 'react-icons/bi'
import { BiMenu, BiHome, BiUser, BiCodeAlt } from 'react-icons/bi';

export default function Header({darkMode, toggleDarkMode}) {
  
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeIcon, setActiveIcon] = useState(null);

  const icons = [
    { href: "#home", icon: <BiHome />, title: "Home", angle: 90 },
    { href: "#projects", icon: <BiCodeAlt />, title: "Projects", angle: 60 },
    { href: "#profile", icon: <BiUser />, title: "Profile", angle: 30 },
    { href: "#contact", icon: <BiPhone />, title: "Contact", angle: 0 },
  ];

  const toggleMenu = () => {
    if (activeIcon !== null) {
      setActiveIcon(null);
    } else {
      setMenuOpen(!menuOpen);
    }
  };

  const handleIconClick = (index) => {
    if (activeIcon === index) {
      setActiveIcon(null); // Reopen the semi-circle
    } else {
      setActiveIcon(index); // Show only selected icon
      setMenuOpen(false);
    }
  };


  return (
    <div className="min-h-screen flex-1 relative p-10 transition-all duration-500 dark:bg-black dark:text-white sm:border-r dark:border-gray-700" id='home'>

<div className="fixed top-6 left-4 z-50 sm:hidden" >
      <div className="relative w-16 h-16">
        {/* Toggle/Menu Button */}
        <button
          onClick={toggleMenu}
          className="w-16 h-16 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center"
        >
          {activeIcon === null ? (
            <BiMenu className="text-2xl" />
          ) : (
            icons[activeIcon].icon
          )}
        </button>

        {/* Curved Icons */}
        {(menuOpen || activeIcon !== null) &&
          icons.map((item, index) => {
            if (activeIcon !== null && activeIcon !== index) return null;

            const angle = item.angle;
            const radius = activeIcon !== null ? 0 : 80; // Collapse if one icon is active
            const x = radius * Math.cos((angle * Math.PI) / 180);
            const y = radius * Math.sin((angle * Math.PI) / 180);

            return (
              <a
                key={index}
                href={item.href}
                title={item.title}
                onClick={() => handleIconClick(index)}
                className="absolute left-1/2 top-1/2 transition-all duration-500 ease-out"
                style={{
                  transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                }}
              >
                <div className="w-10 h-10 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full shadow-md hover:text-blue-500 text-xl">
                  {item.icon}
                </div>
              </a>
            );
          })}
      </div>
    </div>
          




    <div className="flex flex-col gap-5">

      <div className="flex flex-col items-center justify-center gap-5">
        <img src={image} alt="" className="w-32 rounded-full"/>

        <div className="text-center space-y-1">
          <h1 className="text-4xl font-light">
            Narendra <span className="font-semibold">Ojha</span>
          </h1>
          <h3 className="text-xl font-light">Web Developer</h3>
        </div>

        <button
  className={`
    fixed right-4 top-4 z-50 
    sm:absolute sm:right-10 sm:top-10 
    bg-white dark:bg-gray-800 p-2 rounded-full shadow-md 
  `}
  onClick={toggleDarkMode}
>
  {darkMode ? (
    <BiSun className="text-2xl text-yellow-500" />
  ) : (
    <BiMoon className="text-2xl text-blue-500" />
  )}
</button>

      </div>

      <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
  <ul className="space-y-3">
    <li className="flex items-center gap-2">
      <BiCurrentLocation className="text-xl" />
      <span>Guna , (MP)</span>
    </li>
    <li className="flex items-center gap-2">
      <BiEnvelope className="text-xl" />
      <span>narendraojha997@gmail.com</span>
    </li>
    <li className="flex items-center gap-2">
      <BiPhone className="text-xl" />
      <span>+91 7987627973</span>
    </li>
  </ul>
</div>

<div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
  <h1 className="text-base font-semibold md:text-2xl">SOCIAL</h1>

  <ul className="space-y-3">
    <li className="flex items-center gap-2">
      <BiLogoGithub className="text-xl" />
      <span>@githubuser</span>
    </li>
    <li className="flex items-center gap-2">
      <BiLogoTwitter className="text-xl" />
      <span>@twitteruser</span>
    </li>
    <li className="flex items-center gap-2">
      <BiLogoLinkedin className="text-xl" />
      <span>@linkedinuser</span>
    </li>
  </ul>
</div>

<div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
  <h1 className="text-base font-semibold md:text-2xl">EDUCATION</h1>

  <ul>
    <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
      <span className="font-semibold md:text-lg">Computer Science</span>
      <span className="font-light">University of X</span>
      <span className="text-sm text-gray-400">2016–2020</span>
    </li>

    <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
      <span className="font-semibold md:text-lg">Computer Science</span>
      <span className="font-light">University of X</span>
      <span className="text-sm text-gray-400">2016–2020</span>
    </li>

  </ul>
</div>


<div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
  <h1 className="text-base font-semibold md:text-2xl">SKILLS</h1>

  <div className="flex flex-wrap gap-3">
    <div className="flex flex-wrap gap-3">
      <span className="rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black">HTML</span>
      <span className="rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black">CSS</span>
      <span className="rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black">JavaScript</span>
      <span className="rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black">React</span>
    </div>
  </div>
  <div className="flex flex-wrap gap-3">
    <div className="flex flex-wrap gap-3">
      <span className="rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black">HTML</span>
      <span className="rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black">CSS</span>
      <span className="rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black">JavaScript</span>
      <span className="rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black">React</span>
    </div>
  </div>
</div>



<div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
  <h1 className="text-base font-semibold md:text-2xl">HOBBIES</h1>

  <div className="flex flex-wrap gap-16 p-3">
    <ul className="flex list-disc flex-col gap-3">
      <li>Skiing</li>
      <li>Reading Books</li>
      <li>Workout</li>
    </ul>

    <ul className="flex list-disc flex-col gap-3">
      <li>Boxing</li>
      <li>Hiking</li>
      <li>Gaming</li>
    </ul>
  </div>
</div>

<div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
  <h1 className="text-base font-semibold md:text-2xl">LANGUAGES</h1>

  <ul className="flex list-disc flex-wrap gap-12 md:text-lg">
    <li>English</li>
    <li>German</li>
    <li>Spanish</li>
  </ul>
</div>



    </div>
  </div>
  )
}

