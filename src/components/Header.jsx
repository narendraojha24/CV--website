import React from 'react'
import { BiMoon } from 'react-icons/bi'
import { BiSun } from 'react-icons/bi'
import image from '/public/image.jpg'
import { BiCurrentLocation, BiEnvelope, BiPhone } from 'react-icons/bi'
import { BiLogoGithub, BiLogoTwitter, BiLogoLinkedin } from 'react-icons/bi'

export default function Header({darkMode, toggleDarkMode}) {
  return (
    <div className="min-h-screen flex-1 relative p-10 transition-all duration-500 dark:bg-black dark:text-white sm:border-r dark:border-gray-700">
 
<div class="menu">
  <a href="#" class="link">
    <span class="link-icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="192"
        height="192"
        fill="currentColor"
        viewBox="0 0 256 256"
      >
        <rect width="256" height="256" fill="none"></rect>
        <path
          d="M213.3815,109.61945,133.376,36.88436a8,8,0,0,0-10.76339.00036l-79.9945,72.73477A8,8,0,0,0,40,115.53855V208a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V115.53887A8,8,0,0,0,213.3815,109.61945Z"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></path>
      </svg>
    </span>
    <span class="link-title">Home</span>
  </a>
  <a href="#" class="link">
    <span class="link-icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="192"
        height="192"
        fill="currentColor"
        viewBox="0 0 256 256"
      >
        <rect width="256" height="256" fill="none"></rect>
        <polyline
          points="76.201 132.201 152.201 40.201 216 40 215.799 103.799 123.799 179.799"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></polyline>
        <line
          x1="100"
          y1="156"
          x2="160"
          y2="96"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></line>
        <path
          d="M82.14214,197.45584,52.201,227.397a8,8,0,0,1-11.31371,0L28.603,215.11268a8,8,0,0,1,0-11.31371l29.94113-29.94112a8,8,0,0,0,0-11.31371L37.65685,141.65685a8,8,0,0,1,0-11.3137l12.6863-12.6863a8,8,0,0,1,11.3137,0l76.6863,76.6863a8,8,0,0,1,0,11.3137l-12.6863,12.6863a8,8,0,0,1-11.3137,0L93.45584,197.45584A8,8,0,0,0,82.14214,197.45584Z"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></path>
      </svg>
    </span>
    <span class="link-title">Projects</span>
  </a>
  <a href="#" class="link">
    <span class="link-icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="192"
        height="192"
        fill="currentColor"
        viewBox="0 0 256 256"
      >
        <rect width="256" height="256" fill="none"></rect>
        <path
          d="M45.42853,176.99811A95.95978,95.95978,0,1,1,79.00228,210.5717l.00023-.001L45.84594,220.044a8,8,0,0,1-9.89-9.89l9.47331-33.15657Z"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></path>
        <line
          x1="96"
          y1="112"
          x2="160"
          y2="112"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></line>
        <line
          x1="96"
          y1="144"
          x2="160"
          y2="144"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></line>
      </svg>
    </span>
    <span class="link-title">Contact</span>
  </a>

  <a href="#" class="link">
    <span class="link-icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="192"
        height="192"
        fill="currentColor"
        viewBox="0 0 256 256"
      >
        <rect width="256" height="256" fill="none"></rect>
        <circle
          cx="128"
          cy="96"
          r="64"
          fill="none"
          stroke="currentColor"
          stroke-miterlimit="10"
          stroke-width="16"
        ></circle>
        <path
          d="M30.989,215.99064a112.03731,112.03731,0,0,1,194.02311.002"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></path>
      </svg>
    </span>
    <span class="link-title">Profile</span>
  </a>
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

