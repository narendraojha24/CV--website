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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }
  return (
    <div className="min-h-screen flex-1 relative p-10 transition-all duration-500 dark:bg-black dark:text-white sm:border-r dark:border-gray-700">

        {/* Mobile-only Open Icon and Menu */}
      <div className="absolute left-5 top-10 z-20 flex flex-col items-center gap-2 sm:hidden">
        <button onClick={toggleMenu}>
          <BiMenu className="text-2xl" />
        </button>

        {menuOpen && (
          <div className="flex flex-col items-center gap-4 mt-2 bg-white dark:bg-gray-800 p-2 rounded-lg shadow-lg">
            <a href="#home" title="Home">
              <BiHome className="text-xl hover:text-blue-500" />
            </a>
            <a href="#projects" title="Projects">
              <BiCodeAlt className="text-xl hover:text-blue-500" />
            </a>
            <a href="#profile" title="Profile">
              <BiUser className="text-xl hover:text-blue-500" />
            </a>
            <a href="#contact" title="Contact">
              <BiPhone className="text-xl hover:text-blue-500" />
            </a>
          </div>
        )}
      </div>



    <div className="flex flex-col gap-5">

      <div className="flex flex-col items-center justify-center gap-5">
        <img src={image} alt="" className="w-32 rounded-full"/>

        <div className="text-center space-y-1">
          <h1 className="text-4xl font-light">
            Chris <span className="font-semibold">Josh</span>
          </h1>
          <h3 className="text-xl font-light">Web Developer</h3>
        </div>

        <button className='absolute right-10 top-10' onClick={toggleDarkMode}>
          {
            darkMode ? (
              <BiSun className='text-2xl'/>
            ) : (
              <BiMoon className='text-2xl' />
            )
          }
        
        </button>
      </div>

      <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
  <ul className="space-y-3">
    <li className="flex items-center gap-2">
      <BiCurrentLocation className="text-xl" />
      <span>Williams St. 256 Los Angeles</span>
    </li>
    <li className="flex items-center gap-2">
      <BiEnvelope className="text-xl" />
      <span>user@gmail.com</span>
    </li>
    <li className="flex items-center gap-2">
      <BiPhone className="text-xl" />
      <span>123-456-789</span>
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

