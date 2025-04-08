import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import NavHeader from "/src/components/NavHeader.jsx";

const Learning = () => {
  useEffect(() => {
    document.title = "Learning Programs | Numberosity Academy";
  }, []);

  const sections = [
    {
      title: "Online STEM Courses",
      description:
        "Explore our comprehensive online courses in CAD, programming, and mathematics. Learn at your own pace with expert instruction.",
      link: "/learning/courses",
      icon: "💻",
    },
    {
      title: "Summer Programs",
      description:
        "Discover our exciting summer programs for 2024 and 2025. Hands-on learning experiences in robotics and STEM.",
      link: "/learning/summer",
      icon: "☀️",
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
            Learning Resources
          </h1>
          <div className="bg-blue-50 rounded-xl p-8 border border-blue-100 mb-16">
            <p className="font-['Roboto'] text-lg text-gray-700 text-center">
              Explore our comprehensive learning resources designed to help you
              excel in STEM fields. From online courses to summer programs, we
              offer various ways to enhance your skills and knowledge.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {sections.map((section, index) => (
              <Link key={index} to={section.link} className="block">
                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-8 h-full border border-gray-200 hover:border-[#0BA2D9] group">
                  <div className="text-4xl mb-4">{section.icon}</div>
                  <h2 className="font-['Roboto'] font-bold text-2xl text-gray-900 mb-3 group-hover:text-[#0BA2D9] transition-colors">
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

export default Learning;
