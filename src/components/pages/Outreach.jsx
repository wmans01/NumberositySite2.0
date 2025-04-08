import React from "react";
import { Link } from "react-router-dom";
import NavHeader from "/src/components/NavHeader.jsx";

const Outreach = () => {
  const programs = [
    {
      title: "RoboBridge",
      description:
        "Our initiative to bring robotics education to underserved communities through workshops and mentorship programs.",
      link: "/outreach/robobridge",
      icon: "🌉",
    },
    {
      title: "RoboLight",
      description:
        "A program focused on introducing young students to robotics through fun, hands-on activities and competitions.",
      link: "/outreach/robolight",
      icon: "💡",
    },
    {
      title: "MassRobotics",
      description:
        "Collaboration with MassRobotics to support STEM education and innovation in Massachusetts.",
      link: "/news/mass-robotics-block-party",
      icon: "🤖",
    },
    {
      title: "Lexington Discovery Day",
      description:
        "Annual event showcasing robotics and STEM activities for the Lexington community.",
      link: "/news/lexington-discovery-day",
      icon: "🔬",
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
            Outreach Programs
          </h1>
          <div className="bg-blue-50 rounded-xl p-8 border border-blue-100 mb-16">
            <p className="font-['Roboto'] text-lg text-gray-700 text-center">
              Our outreach programs aim to inspire and educate the next
              generation of innovators through robotics and STEM education.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {programs.map((program, index) => (
              <Link key={index} to={program.link} className="block">
                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-8 h-full border border-gray-200 hover:border-[#0BA2D9] group">
                  <div className="text-4xl mb-4">{program.icon}</div>
                  <h2 className="font-['Roboto'] font-bold text-2xl text-gray-900 mb-3 group-hover:text-[#0BA2D9] transition-colors">
                    {program.title}
                  </h2>
                  <p className="font-['Roboto'] text-gray-600">
                    {program.description}
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

export default Outreach;
