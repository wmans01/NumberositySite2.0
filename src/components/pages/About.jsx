/**
 * About Page Component
 *
 * Displays a grid of cards linking to different sections:
 * - People: Information about team members and leadership
 * - VEX: Details about VEX Robotics program
 * - Mentor: Information about mentorship program
 *
 * @component
 * @returns {JSX.Element} The rendered About page
 */

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import NavHeader from "/src/components/NavHeader.jsx";

const About = () => {
  useEffect(() => {
    document.title = "About Us | Numberosity Academy";
  }, []);

  const sections = [
    {
      title: "People",
      description:
        "Meet our team members, leaders, and the people behind Numberosity Academy",
      link: "/about/people",
      icon: "👥",
    },
    {
      title: "VEX",
      description: "Learn about what VEX Robotics is and how it works",
      link: "/about/vex",
      icon: "🤖",
    },
  ];

  return (
    <div className="relative bg-white">
      <div className="absolute top-0 left-0 w-full z-10">
        <NavHeader />
      </div>
      <div className="relative pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="font-['Roboto'] font-bold text-4xl text-gray-900 mb-12 text-center">
            About Numberosity
          </h1>
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-blue-50 rounded-xl p-8 border border-blue-100">
              <h2 className="font-['Roboto'] font-bold text-2xl text-[#0BA2D9] mb-4 text-center">
                Our Mission
              </h2>
              <p className="font-['Roboto'] text-lg text-gray-700 text-center">
                At Numberosity Academy, we are dedicated to inspiring and
                empowering the next generation of innovators through robotics
                education. Our mission is to provide students with the skills,
                knowledge, and confidence to excel in STEM fields while
                fostering creativity, teamwork, and problem-solving abilities.
              </p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative">
              <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-xl"></div>
              <img
                src="/assets/about.jpg"
                alt="RoboLight 2024"
                className="w-full h-auto rounded-xl shadow-md relative z-10"
                loading="lazy"
                width={800}
                height={450}
                style={{
                  contentVisibility: "auto",
                }}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8">
            {sections.map((section, index) => (
              <Link key={index} to={section.link} className="block">
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-8 h-full border border-gray-200 hover:border-blue-300">
                  <div className="text-4xl mb-4">{section.icon}</div>
                  <h2 className="font-['Roboto'] font-bold text-2xl text-gray-900 mb-3">
                    {section.title}
                  </h2>
                  <p className="font-['Roboto'] text-gray-600">
                    {section.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
