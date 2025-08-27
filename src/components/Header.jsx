import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { BiMoon } from 'react-icons/bi'
import { BiSun } from 'react-icons/bi'
import image from '/public/image2.jpg'
import { BiCurrentLocation, BiEnvelope, BiPhone } from 'react-icons/bi'
import { BiLogoGithub, BiLogoTwitter, BiLogoLinkedin } from 'react-icons/bi'
import { BiMenu, BiHome, BiUser, BiCodeAlt } from 'react-icons/bi';
import { FaBootstrap } from 'react-icons/fa';
import { SiVisualstudiocode } from 'react-icons/si';
import { FaXTwitter } from "react-icons/fa6"; 

import AOS from 'aos';
import 'aos/dist/aos.css';


import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiCplusplus, SiTailwindcss, SiMongodb } from "react-icons/si";

export default function Header({darkMode, toggleDarkMode}) {

  useEffect(() => {
    AOS.init({
      duration: 1300, // Slower animation (1.3 seconds)
      once: false,    // Repeat animation every time element is in view
      mirror: true,   // Animate on scroll up as well
      easing: 'ease-in-out', // Optional: smooth easing
    });
  }, []);
  

  const SkillBadge = ({ icon, label }) => (
    <div className="flex items-center gap-2.5 rounded-xl bg-black text-white p-3 text-sm font-medium dark:bg-white dark:text-black shadow-md">
      {icon}
      {label}
    </div>
  );
  
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
<div className="fixed top-6 left-4 z-50 sm:hidden">
  <div className="relative w-14 h-14 rounded-full bg-opacity-40 dark:bg-opacity-40 transparent bg-white text-black dark:bg-black dark:text-white flex items-center justify-center text-4xl font-bold not-italic">N.</div>
</div>

{/*

<div className="fixed top-6 left-4 z-50 sm:hidden" >
      <div className="relative w-14 h-14 flex items-center justify-center">
        <button
          onClick={toggleMenu}
          className="w-14 h-14 bg-black text-white dark:bg-white dark:text-black rounded-full shadow-lg flex items-center justify-center"
        >
          {activeIcon === null ? (
            <BiMenu className="text-2xl" />
          ) : (
            icons[activeIcon].icon
          )}
        </button>

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
                <div className="w-8 h-8 flex items-center justify-center bg-black  dark:bg-white rounded-full shadow-md  hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black text-white dark:text-black hover:scale-110 transition-transform duration-200 text-xl">
                  {item.icon}
                </div>
              </a>
            );
          })}
      </div>
    </div>
    */}

<div
  className="fixed bottom-8 left-4 right-4 bg-black bg-opacity-90 dark:bg-opacity-80 dark:bg-white rounded-3xl shadow-lg shadow-gray-900/50 flex justify-around items-center py-3 z-50 sm:hidden"
>
  {icons.map((item, index) => (
    <a
      key={index}
      href={item.href}
      title={item.title}
      className="relative flex items-center justify-center text-white dark:text-black hover:text-gray-300 dark:hover:text-gray-700 transition-colors"
    >
      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white dark:bg-black text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
        {item.icon}
      </div>
      {/* Tooltip for icon name */}
      <span className="absolute bottom-[-25px] text-xs text-gray-700 dark:text-gray-300 opacity-0 hover:opacity-100 transition-opacity">
        {item.title}
      </span>
    </a>
  ))}
</div>
          




    <div className="flex flex-col gap-5" >

      <div className="flex flex-col items-center justify-center gap-5 ">
        <img src={image} alt="" className="w-32 rounded-full" id='myimage'/>


        
        <div className="text-center space-y-2">
  {/* Static "Hi, I'm" */}
  <h2 className="text-lg md:text-xl text-black dark:text-white font-[Poppins]">
    Hi, I'm
  </h2>

  {/* Animated Name */}
  <h1 className="text-3xl md:text-3xl font-light text-black dark:text-white animate-typing-once overflow-hidden whitespace-nowrap border-r-4 border-black dark:border-white mx-auto font-[Poppins]">
    Narendra <span className="font-semibold">Ojha</span>
  </h1>

  {/* Subheading */}
  <h3 className="text-xl font-light" id='heading1'>
  Full Stack Developer
  </h3>

</div>



        <div className="text-center mt-4 flex justify-center gap-4">
      <a
        href="https://drive.google.com/file/d/1F-KhbNeiYUkW5z8FseCp9s6ZPQf0FY2p/view?usp=drivesdk" // Replace with the actual path to your resume file
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-block px-6 py-2 text-sm font-medium rounded-lg shadow-lg shadow-gray-900/50 focus:outline-none focus:ring-2 ${
          darkMode
            ? "text-black bg-white hover:bg-gray-200 focus:ring-gray-400"
            : "text-white bg-black hover:bg-gray-900 focus:ring-gray-700"
        }`}
      >
      Resume
      </a>
      <a
    href="#contact" // Replace with the actual section or link for connecting
    className={`inline-block px-6 py-2 text-sm font-medium rounded-lg shadow-md focus:outline-none focus:ring-2 ${
      darkMode
        ? "text-black bg-white hover:bg-gray-200 focus:ring-gray-400"
        : "text-black bg-white hover:bg-white focus:ring-pink-500 border-2 border-black"
    }`}
  >
    Contact
  </a>
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

<div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700" data-aos="fade-up">
  <h1 className="text-base font-semibold md:text-2xl" id='heading1'>SOCIAL</h1>

  <ul className="space-y-3">
    <li className="flex items-center gap-2">
      <BiLogoGithub className="text-xl" />
      <a href="https://github.com/narendraojha24"><span>Github</span></a>
    </li>

<li className="flex items-center gap-2">
  <FaXTwitter className="text-xl" />
  <span>X</span>
</li>

    <li className="flex items-center gap-2">
      <BiLogoLinkedin className="text-xl" />
      <a href="https://www.linkedin.com/in/narendraojha24/"><span>Linkedin</span></a>
    </li>
  </ul>
</div>



<div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700" data-aos="fade-up">
  <h1 className="text-base font-semibold md:text-2xl" id='heading1'>EDUCATION</h1>

  <ul>
    <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform" data-aos="fade-in">
      <span className="font-semibold md:text-lg">B.Tech <br />(Computer Science)</span>
      <span className="font-light">Jaypee University Of Engineering And Technology</span>
      <span className="text-sm text-gray-400">2022–2026</span>
    </li>

    <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform" data-aos="fade-in">
      <span className="font-semibold md:text-lg">Senior Secondary  <br />
      ( Class 12)</span>
      <span className="font-light">Sri Sathya Sai Vidya Vihar , Gail</span>
      <span className="text-sm text-gray-400">2021–2022</span>
    </li>

  </ul>
</div>



<div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700" data-aos="fade-up">
      <h1 className="text-base font-semibold md:text-2xl" id='heading1'>SKILLS</h1>
      
      <div className="flex flex-wrap gap-3">
        <div className='bg-black-500 shadow-lg shadow-gray-900/50 rounded-xl' data-aos="zoom-out"><SkillBadge icon={<FaHtml5 className="text-orange-500" />} label="HTML" /></div>
        <div className='bg-black-500 shadow-lg shadow-gray-900/50 rounded-xl' data-aos="zoom-in"><SkillBadge icon={<FaCss3Alt className="text-blue-500" />} label="CSS" /></div>
        <div className='bg-black-500 shadow-lg shadow-gray-900/50 rounded-xl' data-aos="zoom-out"><SkillBadge icon={<FaJs className="text-yellow-400" />} label="JavaScript" /></div>
        <div className='bg-black-500 shadow-lg shadow-gray-900/50 rounded-xl' data-aos="zoom-in"><SkillBadge icon={<FaReact className="text-cyan-400" />} label="React" /></div>
        <div className='bg-black-500 shadow-lg shadow-gray-900/50 rounded-xl'data-aos="zoom-out"><SkillBadge icon={<FaNodeJs className="text-green-600" />} label="Node.js" /></div>
        <div className='bg-black-500 shadow-lg shadow-gray-900/50 rounded-xl' data-aos="zoom-in"><SkillBadge icon={<SiMongodb className="text-green-500" />} label="MongoDB" /></div>
      </div>

      <div className="flex flex-wrap gap-3">
      <div className='bg-black-500 shadow-lg shadow-gray-900/50 rounded-xl' data-aos="zoom-out"><SkillBadge icon={<FaGithub className="text-white bg-black rounded-full" />} label="GitHub" /></div>
      <div className='bg-black-500 shadow-lg shadow-gray-900/50 rounded-xl' data-aos="zoom-in"><SkillBadge icon={<SiCplusplus className="text-blue-600" />} label="C++" /></div>
      <div className='bg-black-500 shadow-lg shadow-gray-900/50 rounded-xl' data-aos="zoom-out"><SkillBadge icon={<FaFigma className="text-pink-500" />} label="Figma" /></div>
      <div className='bg-black-500 shadow-lg shadow-gray-900/50 rounded-xl' data-aos="zoom-in"><SkillBadge icon={<SiTailwindcss className="text-sky-400" />} label="Tailwind CSS" /></div>
      <div className='bg-black-500 shadow-lg shadow-gray-900/50 rounded-xl' data-aos="zoom-out">
      <SkillBadge icon={<FaBootstrap className="text-purple-600" />} label="Bootstrap" />
    </div>
    <div className='bg-black-500 shadow-lg shadow-gray-900/50 rounded-xl' data-aos="zoom-in">
      <SkillBadge icon={<SiVisualstudiocode className="text-blue-400" />} label="VS Code" />
    </div>
      </div>
    </div>

  
<div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700" data-aos="fade-up">
  <h1 className="text-base font-semibold md:text-2xl" id='heading1'>ACHIEVEMENTS</h1>

  <ul>
    <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform" data-aos="fade-in">
      <span className="font-semibold md:text-lg">Cummins Scholarship Recipient</span>
      <span className="font-light">Awarded by Cummins India Foundation for academic merit and Granted full reimbursement of academic fees for the entire course duration.</span>
      <span className="text-sm text-gray-400">2023–2026</span>
    </li>

    <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform" data-aos="fade-in">
      <span className="font-semibold md:text-lg"> Contributor</span>
      <span className="font-light">GirlScript Summer of Code (GSSoC) – Extended Edition</span>
      <span className="text-sm text-gray-400">2024</span>
    </li>

  </ul>
</div>




{/*
<div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
  <h1 className="text-base font-semibold md:text-2xl">LANGUAGES</h1>

  <ul className="flex list-disc flex-wrap gap-12 md:text-lg">
    <li>English</li>
    <li>German</li>
    <li>Spanish</li>
  </ul>
</div>*/}




    </div>
  </div>
  )
}

