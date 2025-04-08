/**
 * Home Component
 *
 * The main landing page of the website featuring:
 * - A full-screen slideshow background
 * - A centered "Numberosity Academy" title
 * - Description text and social media links
 * - About Us section with text and image
 * - Interactive timeline of key events
 * - Sponsor showcase section
 *
 * @component
 * @returns {JSX.Element} The rendered Home component
 */

import React from "react";
import HomeNavBar from "/src/components/HomeNavBar.jsx";
import Slideshow from "/src/components/Slideshow.jsx";
import Timeline from "/src/components/Timeline.jsx";
import Sponsors from "/src/components/Sponsors.jsx";
import { FaYoutube, FaInstagram, FaEnvelope } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";

const Home = () => {
  const sponsors = [
    {
      image: "/sponsors/prepEDU.png",
      name: "PrepEdu Educational Consulting",
      description:
        "PrepEdu Consulting, a premier educational consulting firm founded by Dr. Jing Jing, has supported Numberosity Academy through generous sponsorship, empowering our mission to make STEM education accessible to diverse learners.",
      link: "https://prepedu.org",
    },
    {
      image: "/sponsors/phoenix.png",
      name: "Phoenix Real Estate",
      description:
        "Phoenix Real Estate, led by the dedicated and community-focused agent Wenny, has generously sponsored Numberosity Academy, helping us expand educational opportunities and resources for students across Massachusetts.",
      link: "https://vow.mlspin.com//default.aspx?id=82372&PageType=0&PageId=524851",
    },
    {
      image: "/sponsors/diyiboston.png",
      name: "Diyi Boston",
      description:
        "Diyi Education, a trusted academic support provider for students in grades 3–12 since 2013, has supported Numberosity Academy through a generous sponsorship that furthers our mission to empower young learners of all backgrounds.",
      link: "https://diyiboston.com",
    },
  ];

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full z-10">
        <HomeNavBar />
      </div>
      <Slideshow />
      <div className="absolute top-[50vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10">
        <h1 className="font-['Roboto'] font-bold text-white text-6xl text-center transition-all duration-300 ease-in-out mb-3">
          Numberosity Academy
        </h1>
        <p className="font-['Roboto'] text-white text-sm sm:text-base md:text-lg text-center max-w-2xl mx-auto mb-3.5">
          A 501(c)(3) non-profit based in Lexington, MA founded in 2023
          dedicated to making STEM more accessible to everyone.
        </p>
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://www.youtube.com/@vex8889A"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-300 transition-colors duration-300"
          >
            <FaYoutube size={32} />
          </a>
          <a
            href="https://www.instagram.com/vex8889a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-300 transition-colors duration-300"
          >
            <FaInstagram size={32} />
          </a>
          <a
            href="mailto:vex8889a@gmail.com"
            className="text-white hover:text-blue-300 transition-colors duration-300"
          >
            <FaEnvelope size={32} />
          </a>
        </div>
        <div className="flex justify-center mt-1">
          <BiChevronDown className="text-white bounce" size={32} />
        </div>
      </div>
      <div className="relative bg-white">
        {/* About Us Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Text Content */}
            <div className="md:w-1/2">
              <h2 className="font-['Roboto'] font-bold text-3xl text-gray-900 mb-6">
                About Us
              </h2>
              <p className="font-['Roboto'] text-gray-600 mb-4">
                Numberosity Academy is a student-run non-profit organization
                dedicated to making STEM education accessible to all students.
                Founded in 2023, we believe in the power of diversity, hands-on
                learning and, real-world applications of STEM.
              </p>
              <p className="font-['Roboto'] text-gray-600 mb-4">
                Our five VEX Robotics teams have earned top honors at state,
                national, and international levels, including multiple
                championship titles. Beyond competition, experienced team
                members mentor younger students, fostering a supportive
                community focused on growth, innovation, and leadership in STEM.
              </p>
              <p className="font-['Roboto'] text-gray-600">
                Based in Lexington, MA, we serve students across the region
                through workshops and mentorship programs that inspire curiosity
                and build lasting STEM skills.
              </p>
            </div>
            {/* Image */}
            <div className="md:w-1/2">
              <div className="bg-gray-200 rounded-lg overflow-hidden aspect-video">
                <img
                  src="/about/lobstah.jpg"
                  alt="Numberosity Academy Team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Timeline Section */}
        <div className="hidden md:block">
          <Timeline />
        </div>
        {/* Sponsors Section */}
        <Sponsors sponsors={sponsors} />
      </div>
    </div>
  );
};

export default Home;
