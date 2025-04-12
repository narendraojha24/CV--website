import React from 'react'
import { motion } from 'framer-motion';
import food from '/public/food.png'
import furniExpert from '/public/furniExpert.png'
import voice from '/public/voice.png'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useState } from 'react';

export default function Home() {

  const [selectedTab, setSelectedTab] = useState("all");

  const tabs = [
    { label: "Mini Projects", value: "mini" },
    { label: "Fullstack Projects", value: "fullstack" },
    { label: "Landing Pages", value: "landing" }
  ];

  const handleTabChange = (tab) => setSelectedTab(tab);
  return (
    <div className="min-h-screen flex-[3] transition-all duration-500 dark:bg-black dark:text-white">
  <main className="flex max-w-[1000px] flex-col gap-10 p-5 md:mx-10 md:py-14">
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

<div className="space-y-10 px-4 md:px-10">
      <h1 className="text-2xl font-bold md:text-4xl">Projects</h1>
      <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
        Here are some of the projects I’ve worked on — ranging from basic web components to complete full-stack applications. Each project was a learning journey, enhancing my understanding of React, design, and problem-solving.
      </p>

      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-4 mt-6">
        {tabs.map(tab => (
          <button
            key={tab.value}
            onClick={() => handleTabChange(tab.value)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
              selectedTab === tab.value
                ? "bg-blue-600 text-white"
                : "bg-transparent dark:text-white text-gray-700 border-gray-400 hover:bg-blue-100 dark:hover:bg-gray-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
        {[food, furniExpert, voice].map((src, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl shadow-md border dark:border-gray-700 transition-transform transform hover:-translate-y-2 hover:shadow-xl"
          >
            <img
              src={src}
              alt={`Project ${index + 1}`}
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Hover Icons */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-5">
              <a
                href="https://github.com/yourrepo" // Replace with actual
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-xl hover:text-blue-400"
                title="Code Preview"
              >
                <FaGithub />
              </a>
              <a
                href="https://liveproject.com" // Replace with actual
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-xl hover:text-green-400"
                title="Live Project"
              >
                <FaExternalLinkAlt />
              </a>
            </div>

            <div className="p-4 space-y-2">
              <h2 className="text-lg font-semibold">Project Title {index + 1}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Short description about the project goes here. Highlight key features or tech used.
              </p>
              <a
                href="#"
                className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>


{/* Contact Section */}
<div className="space-y-10" id="contact">
  <h1 className="text-2xl font-bold md:text-4xl text-center">Get in Touch</h1>

  <motion.form
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    action="https://formsubmit.co/your-email@example.com"
    method="POST"
    className="space-y-6 max-w-2xl mx-auto bg-white dark:bg-zinc-900 p-8 rounded-xl shadow-xl"
  >
    <motion.div
      whileFocus={{ scale: 1.02 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <label htmlFor="name" className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
        Name
      </label>
      <input
        type="text"
        id="name"
        name="name"
        required
        placeholder="Your full name"
        className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
      />
    </motion.div>

    <motion.div
      whileFocus={{ scale: 1.02 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <label htmlFor="email" className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        required
        placeholder="you@example.com"
        className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
      />
    </motion.div>

    <motion.div
      whileFocus={{ scale: 1.02 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <label htmlFor="message" className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        rows="5"
        required
        placeholder="Type your message here..."
        className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
      ></textarea>
    </motion.div>

    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
      type="submit"
      className="w-full py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors duration-300"
    >
      Send Message
    </motion.button>
  </motion.form>
</div>




  </main>
</div>

  )
}
