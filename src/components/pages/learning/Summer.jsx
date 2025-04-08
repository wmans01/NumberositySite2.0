import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import NavHeader from "/src/components/NavHeader.jsx";

const Summer = () => {
  useEffect(() => {
    document.title = "Summer Programs | Numberosity Academy";
  }, []);
  return (
    <div className="relative bg-white">
      <div className="absolute top-0 left-0 w-full z-10">
        <NavHeader />
      </div>
      <div className="relative pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link
            to="/learning"
            className="inline-flex items-center text-[#0BA2D9] hover:text-blue-700 mb-8"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Learning Resources
          </Link>
          <h1 className="font-['Roboto'] font-bold text-4xl text-gray-900 mb-12 text-center">
            Summer Programs
          </h1>
          <div className="bg-blue-50 rounded-xl p-8 border border-blue-100 mb-16">
            <p className="font-['Roboto'] text-lg text-gray-700 text-center">
              Experience hands-on learning in our summer programs. Each year
              brings new challenges, workshops, and opportunities to develop
              your STEM skills in a fun and engaging environment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* 2024 Program */}
            <Link to="/news/four-students-to-four-teams" className="block">
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-8 h-full border border-gray-200 hover:border-[#0BA2D9] group">
                <div className="text-4xl mb-4">☀️</div>
                <h2 className="font-['Roboto'] font-bold text-2xl text-gray-900 mb-3 group-hover:text-[#0BA2D9] transition-colors">
                  Summer Program 2024
                </h2>
                <p className="font-['Roboto'] text-gray-600">
                  The 2024 Summer Program was a success! Check out the the
                  highlights.
                </p>
              </div>
            </Link>

            {/* 2025 Program */}
            <Link to="/learning/summer/2025" className="block">
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-8 h-full border border-gray-200 hover:border-[#0BA2D9] group">
                <div className="text-4xl mb-4">☀️</div>
                <h2 className="font-['Roboto'] font-bold text-2xl text-gray-900 mb-3 group-hover:text-[#0BA2D9] transition-colors">
                  Summer Program 2025
                </h2>
                <p className="font-['Roboto'] text-gray-600">
                  Join us for our VEX Robotics Summer Camps! Two sessions
                  available: FUN-damental Camp and Advanced Boot Camp.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summer;
