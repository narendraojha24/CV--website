import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaLinkedin } from "react-icons/fa";


export default function Home() {

  useEffect(() => {
      AOS.init({
        duration: 1300, // Slower animation (1.5 seconds)
        once: false,    // Repeat animation every time element is in view
        mirror: true,   // Animate on scroll up as well
        easing: 'ease-in-out', // Optional: smooth easing
      });
    }, []);


  const [selectedTab, setSelectedTab] = useState("mini");

  const tabs = [
    { label: "Mini Projects", value: "mini" },
    { label: "Fullstack Projects", value: "fullstack" },
    { label: "Landing Pages", value: "landing" },
  ];

  const allProjects = {
    mini: [
      {
        title: "Signature App",
        description:
          "A simple app that converts speech into text using the Web Speech API.",
        image: "sign.jpg", // Replace with actual
        code: "https://github.com/your-mini1",
        live: "https://your-mini1-live.vercel.app",
      },
      {
        title: "Voice to Text",
        description: "A compact weather display using OpenWeather API.",
        image:"Ai.jpg", // Replace with actual
        code: "https://github.com/your-mini2",
        live: "https://your-mini2-live.vercel.app",
      },
      {
        title: "Weather Widget",
        description: "A compact weather display using OpenWeather API.",
        image: "cine.jpg", // Replace with actual
        code: "https://github.com/your-mini2",
        live: "https://your-mini2-live.vercel.app",
      },
      {
        title: "Weather Widget",
        description: "A compact weather display using OpenWeather API.",
        image: "text.jpg", // Replace with actual
        code: "https://github.com/your-mini2",
        live: "https://your-mini2-live.vercel.app",
      },
    ],
    fullstack: [
      {
        title: "FurniExpert",
        description:
          "A MERN stack AR-based shopping site for viewing and buying furniture in real-world space.",
        image: "furniExpert.jpg",
        code: "https://github.com/your-fullstack1",
        live: "https://furniexpert.vercel.app",
      },
      {
        title: "Food Delivery App",
        description:
          "Full-featured food delivery system with admin, cart, and payment modules.",
        image: "food.jpg",
        code: "https://github.com/your-fullstack2",
        live: "https://your-foodapp-live.vercel.app",
      },
      {
        title: "Food Delivery App",
        description:
          "Full-featured food delivery system with admin, cart, and payment modules.",
        image: "news.jpg",
        code: "https://github.com/your-fullstack2",
        live: "https://your-foodapp-live.vercel.app",
      },
    ],
    landing: [
      {
        title: "Portfolio Website",
        description:
          "Clean, responsive React-based personal portfolio to showcase projects and contact info.",
        image: "port.jpg",
        code: "https://github.com/your-landing1",
        live: "https://your-portfolio.vercel.app",
      },
      {
        title: "Startup Landing Page",
        description:
          "Modern landing page built using TailwindCSS and React for a fictional startup.",
        image: "/images/startup.png",
        code: "https://github.com/your-landing2",
        live: "https://startup-page.vercel.app",
      },
    ],
  };

  const selectedProjects = allProjects[selectedTab];

  return (
    <div
      className="min-h-screen flex-[3] transition-all duration-500 dark:bg-black dark:text-white"
      id="profile"
    >
      <main className="flex max-w-[1000px] flex-col gap-10 p-5 md:mx-10 md:py-14">

      <div className="space-y-5" data-aos="fade-up">
  <h1 className="text-2xl font-bold md:text-4xl" id="heading">
    About
  </h1>
  <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">
    Hi, I’m Narendra Ojha, a passionate and detail-oriented Frontend
    Developer with a strong foundation in React, JavaScript, UI/UX
    design, and modern web development practices. I enjoy turning
    complex problems into simple, beautiful, and intuitive user
    interfaces. With a deep interest in building seamless digital
    experiences, I focus on writing clean, scalable code and designing
    responsive layouts that work beautifully across all devices.
  </p>

  {/* 👇 Photo with overlay icons - Mobile only */}
  <div
    className="relative w-full max-w-sm mx-auto mt-6 md:hidden"
    data-aos="fade-up"
  >
    <img
      src="image.jpg" // Replace with your actual photo path
      alt="Narendra Ojha"
      className="w-full h-100 object-cover rounded-xl shadow-md margin-top-4"
    />

    {/* Faded overlay with icons */}
    <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-40 py-2 flex justify-center gap-6 rounded-b-xl">
      <a
        href="https://github.com/narendraojha24" // Replace with your GitHub
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-300 text-2xl transition-all duration-300"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/narendraojha24/" // Replace with your LinkedIn
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-blue-300 text-2xl transition-all duration-300"
      >
        <FaLinkedin />
      </a>
    </div>
  </div>
</div>

        <div className="space-y-10" data-aos="fade-up">
          <h1 className="text-2xl font-bold md:text-4xl" id="heading">
            Experience
          </h1>

          <div className="flex flex-col lg:flex-row lg:gap-20">
            <ul>
              <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
                <span className="text-lg font-semibold">
                Software Engineering Intern
                </span>
                <span className="font-light"> GAIL (India) Limited</span>
                <span className="text-sm text-gray-400">May 2020– July 2024</span>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                This internship has been an invaluable experience, providing me with hands-on exposure to cutting-edge AR technology and its practical applications. The project challenged me to expand my technical skills and apply my knowledge in a real-world setting.
                </p>
              </li>

           {/*   <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
                <span className="text-lg font-semibold">
                  Junior Web Developer
                </span>
                <span className="font-light">Company X</span>
                <span className="text-sm text-gray-400">2016–2018</span>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Error dolorem odio, obcaecati voluptatem suscipit tenetur
                  consectetur amet, facere ratione incidunt maiores accusantium
                  excepturi! Repellendus, animi nihil? Accusantium consequuntur
                  libero odio!
                </p>
              </li>*/}
            </ul>
          </div>
        </div>

        <div className="space-y-10 md:px-0" id="projects" data-aos="fade-up">
          <h1 className="text-2xl font-bold md:text-4xl" id="heading">
            Projects
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            A collection of projects that showcase my journey in web development
            — from beginner-level experiments to full-fledged applications. Use
            the categories below to explore.
          </p>

 {/* Tabs */}
<div className="flex flex-wrap gap-4 mt-6  " data-aos="zoom-in">
  {tabs.map((tab) => (
    <button
      key={tab.value}
      onClick={() => setSelectedTab(tab.value)}
      className={`px-4 py-1.5 text-sm font-medium border transition-all ${
        selectedTab === tab.value
          ? "bg-black-500 shadow-lg shadow-gray-900/50 bg-black text-white border-gray-900 dark:bg-white dark:text-black dark:border-gray-900 rounded-lg"
          : "bg-black-500 shadow-lg shadow-gray-700/50 bg-transparent dark:text-white text-gray-700 border-white-700 hover:bg-purple-100 dark:hover:bg-white dark:hover:text-black rounded-lg "
      }`}
    >
      {tab.label}
    </button>
  ))}
</div>



          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6" data-aos="fade-up">
            {selectedProjects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg border dark:border-gray-700 transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
                data-aos="zoom-in" >
                {/* Image */}
                <div className="relative w-full h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-5">
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-2xl hover:text-blue-400"
                    title="Code Preview"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-2xl hover:text-green-400"
                    title="Live Project"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>

                {/* Project Info */}
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4">
                  <h2 className="text-lg font-semibold text-white">{project.title}</h2>
                  <p className="text-sm text-gray-300">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>



        <div
          className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8"
          id="contact" data-aos="zoom-in">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-3xl font-bold sm:text-3xl text-gray-900 dark:text-white">
              Contact Me
            </h1>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Have any questions or want to work together? Just drop a message
              below.
            </p>
          </div>

          <form
            action="https://formspree.io/f/xlddyryg"
            method="POST"
            className="mx-auto mt-8 max-w-md space-y-4"
          >
            {/* Name Field */}
            <div>
              <label className="sr-only" htmlFor="name">
                Name
              </label>
              <div className="relative">
                <input
                  placeholder="Your name"
                  className="w-full rounded-lg border-gray-300 p-4 pe-12 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent dark:bg-black dark:text-white dark:border-gray-600"
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
                    <path
                      d="M5.121 17.804A12.001 12.001 0 0112 15c2.21 0 4.26.636 5.879 1.804M15 11a3 3 0 10-6 0 3 3 0 006 0z"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label className="sr-only" htmlFor="email">
                Email
              </label>
              <div className="relative">
                <input
                  placeholder="Your email"
                  className="w-full rounded-lg border-gray-300 p-4 pe-12 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent dark:bg-black dark:text-white dark:border-gray-600"
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
                    <path
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0z M16 12v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206A8.959 8.959 0 0112 21"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>

            {/* Message Field */}
            <div>
              <label className="sr-only" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message"
                rows="4"
                required
                className="w-full rounded-lg border-gray-300 p-4 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent dark:bg-black dark:text-white dark:border-gray-600"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                I'll get back to you shortly!
              </p>
              <button
                className="bg-black-500 shadow-lg shadow-gray-900/50 inline-block rounded-lg bg-black px-5 py-3 text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-white dark:text-black dark:hover:bg-gray-200 dark:focus:ring-gray-300"
                id="sendbutton" type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        
        <hr className="mt-10 border-gray-300 dark:border-gray-700 md:hidden" />
<div
  className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400 md:hidden"

>
  © 2025 Narendra Ojha
</div>
      </main>
    </div>
  );
}
