import React from 'react'
import { motion } from 'framer-motion';
import food from '/public/food.png'
import furniExpert from '/public/furniExpert.png'
import voice from '/public/voice.png'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useState } from 'react';
import MobileFadeInSection from './MobileFadeInSection'

export default function Home() {

  const [selectedTab, setSelectedTab] = useState("mini");

  const tabs = [
    { label: "Mini Projects", value: "mini" },
    { label: "Fullstack Projects", value: "fullstack" },
    { label: "Landing Pages", value: "landing" },
  ];

  const allProjects = {
    mini: [
      {
        title: "Voice to Text App",
        description: "A simple app that converts speech into text using the Web Speech API.",
        image: "public/furniExpert.png", // Replace with actual
        code: "https://github.com/your-mini1",
        live: "https://your-mini1-live.vercel.app",
      },
      {
        title: "Weather Widget",
        description: "A compact weather display using OpenWeather API.",
        image: "/images/weather.png",
        code: "https://github.com/your-mini2",
        live: "https://your-mini2-live.vercel.app",
      },
      {
        title: "Weather Widget",
        description: "A compact weather display using OpenWeather API.",
        image: "/images/weather.png",
        code: "https://github.com/your-mini2",
        live: "https://your-mini2-live.vercel.app",
      },
      
    ],
    fullstack: [
      {
        title: "FurniExpert",
        description: "A MERN stack AR-based shopping site for viewing and buying furniture in real-world space.",
        image: "/images/furniExpert.png",
        code: "https://github.com/your-fullstack1",
        live: "https://furniexpert.vercel.app",
      },
      {
        title: "Food Delivery App",
        description: "Full-featured food delivery system with admin, cart, and payment modules.",
        image: "/images/food.png",
        code: "https://github.com/your-fullstack2",
        live: "https://your-foodapp-live.vercel.app",
      },
    ],
    landing: [
      {
        title: "Portfolio Website",
        description: "Clean, responsive React-based personal portfolio to showcase projects and contact info.",
        image: "/images/portfolio.png",
        code: "https://github.com/your-landing1",
        live: "https://your-portfolio.vercel.app",
      },
      {
        title: "Startup Landing Page",
        description: "Modern landing page built using TailwindCSS and React for a fictional startup.",
        image: "/images/startup.png",
        code: "https://github.com/your-landing2",
        live: "https://startup-page.vercel.app",
      },
    ],
  };

  const selectedProjects = allProjects[selectedTab];

  

  return (
    <div className="min-h-screen flex-[3] transition-all duration-500 dark:bg-black dark:text-white" id='profile'>
  <main className="flex max-w-[1000px] flex-col gap-10 p-5 md:mx-10 md:py-14" >

   < MobileFadeInSection>
    <div className="space-y-5">
      <h1 className="text-2xl font-bold md:text-4xl">About</h1>
      <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        labore cum cupiditate debitis, dignissimos aliquam quisquam repudiandae
        vel ratione omnis ex odit aperiam explicabo vero repellat magnam saepe
        recusandae at consequatur nemo ipsam rem quidem. Reprehenderit,
        voluptatem excepturi, quam enim pariatur neque, debitis nam voluptate
        aliquid sit quia error repellendus doloremque molestiae! Officiis facere
        nostrum eaque aperiam architecto vel at non possimus expedita explicabo?
        Necessitatibus, quasi cumque dignissimos ex quae iusto ex rem enim
        blanditiis, dicta soluta nemo dolorem repellendus similique repudiandae
        at corporis eius repellat natus nisi? Ullam velit repellendus obcaecati
        dignissimos eligendi porro minus quo expedita officiis, dolor
        consectetur!
      </p>
    </div>
    </MobileFadeInSection>



    < MobileFadeInSection>

    <div className="space-y-10">
  <h1 className='text-2xl font-bold md:text-4xl'>Experience</h1>

  <div className="flex flex-col lg:flex-row lg:gap-20">
  <ul>
    <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
    <span className="text-lg font-semibold">
  Junior Web Developer
</span>
<span className="font-light">Company X</span>
<span className="text-sm text-gray-400">2016–2018</span>
<p className="text-sm text-gray-600 dark:text-gray-400">
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error dolorem odio, 
  obcaecati voluptatem suscipit tenetur consectetur amet, facere ratione 
  incidunt maiores accusantium excepturi! Repellendus, animi nihil? Accusantium 
  consequuntur libero odio!
</p>

    </li>

    <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
    <span className="text-lg font-semibold">
  Junior Web Developer
</span>
<span className="font-light">Company X</span>
<span className="text-sm text-gray-400">2016–2018</span>
<p className="text-sm text-gray-600 dark:text-gray-400">
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error dolorem odio, 
  obcaecati voluptatem suscipit tenetur consectetur amet, facere ratione 
  incidunt maiores accusantium excepturi! Repellendus, animi nihil? Accusantium 
  consequuntur libero odio!
</p>
    </li>
  </ul>
    
  </div>
</div>

</MobileFadeInSection>


<MobileFadeInSection>
<div className="space-y-10 md:px-0" id='projects'>
      <h1 className="text-2xl font-bold md:text-4xl">Projects</h1>
      <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
        A collection of projects that showcase my journey in web development — from beginner-level experiments to full-fledged applications. Use the categories below to explore.
      </p>

      {/* Tabs */}
      <div className="flex flex-wrap gap-4 mt-6">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setSelectedTab(tab.value)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
              selectedTab === tab.value
                ? "bg-gray-600 text-white"
                : "bg-transparent dark:text-white text-gray-700 border-gray-400 hover:bg-blue-100 dark:hover:bg-gray-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
        {selectedProjects.map((project, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl shadow-md border dark:border-gray-700 transition-transform transform hover:-translate-y-2 hover:shadow-xl"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Hover Icons */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-5">
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-xl hover:text-blue-400"
                title="Code Preview"
              >
                <FaGithub />
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-xl hover:text-green-400"
                title="Live Project"
              >
                <FaExternalLinkAlt />
              </a>
            </div>

            <div className="p-4 space-y-2">
              <h2 className="text-lg font-semibold">{project.title}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>

    </MobileFadeInSection>


    <MobileFadeInSection>

    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8" id="contact">
  <div className="mx-auto max-w-lg text-center">
    <h1 className="text-2xl font-bold sm:text-3xl text-gray-900 dark:text-white">
      Contact Me
    </h1>
    <p className="mt-4 text-gray-600 dark:text-gray-300">
      Have any questions or want to work together? Just drop a message below.
    </p>
  </div>

  <form
    action="https://formspree.io/f/xlddyryg"
    method="POST"
    className="mx-auto mt-8 max-w-md space-y-4"
  >
    {/* Name Field */}
    <div>
      <label className="sr-only" htmlFor="name">Name</label>
      <div className="relative">
        <input
          placeholder="Your name"
          className="w-full rounded-lg border-gray-300 p-4 pe-12 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent dark:bg-black dark:text-white dark:border-gray-600"
          id="name"
          name="name"
          type="text"
          required
        />
        <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
          <svg
            className="h-6 w-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5.121 17.804A12.001 12.001 0 0112 15c2.21 0 4.26.636 5.879 1.804M15 11a3 3 0 10-6 0 3 3 0 006 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </div>

    {/* Email Field */}
    <div>
      <label className="sr-only" htmlFor="email">Email</label>
      <div className="relative">
        <input
          placeholder="Your email"
          className="w-full rounded-lg border-gray-300 p-4 pe-12 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent dark:bg-black dark:text-white dark:border-gray-600"
          id="email"
          name="email"
          type="email"
          required
        />
        <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
          <svg
            className="h-6 w-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0z M16 12v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206A8.959 8.959 0 0112 21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </div>

    {/* Message Field */}
    <div>
      <label className="sr-only" htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        placeholder="Your message"
        rows="4"
        required
        className="w-full rounded-lg border-gray-300 p-4 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent dark:bg-black dark:text-white dark:border-gray-600"
      ></textarea>
    </div>

    {/* Submit Button */}
    <div className="flex items-center justify-between">
      <p className="text-sm text-gray-600 dark:text-gray-400">
        I'll get back to you shortly!
      </p>
      <button
        className="inline-block rounded-lg bg-purple-600 px-5 py-3 text-sm font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
        type="submit"
      >
        Send Message
      </button>
    </div>
  </form>
</div>
</MobileFadeInSection>





  </main>
</div>

  )
}
