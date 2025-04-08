import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import NavHeader from "/src/components/NavHeader.jsx";

const RoboLight = () => {
  useEffect(() => {
    document.title = "RoboLight Program | Numberosity Academy";
  }, []);

  return (
    <div className="relative bg-white">
      <div className="absolute top-0 left-0 w-full z-10">
        <NavHeader />
      </div>
      <div className="relative pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link
            to="/outreach"
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
            Back to Outreach Programs
          </Link>

          {/* Main Image */}
          <div className="mb-16">
            <img
              src="/assets/outreach/robolight-main.jpg"
              alt="RoboLight Program"
              className="w-full object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Program Description */}
          <div className="space-y-16">
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h2 className="font-['Roboto'] font-bold text-2xl text-gray-900 mb-6">
                About RoboLight
              </h2>
              <p className="text-gray-700 mb-6">
                RoboLight is our community outreach initiative that brings the
                excitement of VEX Robotics to young minds. Hosted by Numberosity
                Academy and featuring our High School National Champion Team
                8889A, these events are designed to ignite curiosity, inspire
                creativity, and introduce students to the thrilling
                possibilities of robotics and STEM.
              </p>
            </div>

            {/* Event Series */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h2 className="font-['Roboto'] font-bold text-2xl text-gray-900 mb-6">
                Event Series
              </h2>
              <div className="space-y-12">
                {/* Series 1 */}
                <div>
                  <h3 className="font-['Roboto'] font-bold text-xl text-gray-900 mb-4">
                    Series 1
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Our first RoboLight event introduced participants to the
                    world of VEX Robotics through an engaging and interactive
                    program.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-['Roboto'] font-semibold text-lg text-gray-900 mb-4">
                      Event Highlights
                    </h4>
                    <ul className="space-y-3 text-gray-700">
                      <li>• Welcome and Introduction with Team 8889A</li>
                      <li>
                        • Overview of VEX Robotics competition and STEM
                        education
                      </li>
                      <li>• Demonstration of this year's VEX Robotics game</li>
                      <li>• Introduction to robot design and construction</li>
                      <li>• Overview of VEXcode programming</li>
                      <li>• Hands-on robot test driving experience</li>
                      <li>• Q&A session with team members</li>
                    </ul>
                  </div>
                </div>

                {/* Series 2 */}
                <div>
                  <h3 className="font-['Roboto'] font-bold text-xl text-gray-900 mb-4">
                    Series 2
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Building on the success of our first event, Series 2
                    provided an even more immersive experience with advanced
                    demonstrations and interactive sessions.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-['Roboto'] font-semibold text-lg text-gray-900 mb-4">
                      Event Highlights
                    </h4>
                    <ul className="space-y-3 text-gray-700">
                      <li>• Welcome and Introduction with Team 8889A</li>
                      <li>
                        • Overview of VEX Robotics competition and STEM
                        education
                      </li>
                      <li>• Demonstration of this year's VEX Robotics game</li>
                      <li>• Introduction to robot design and construction</li>
                      <li>• Overview of VEXcode programming</li>
                      <li>• Hands-on robot test driving experience</li>
                      <li>• Q&A session with team members</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Program Impact */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h2 className="font-['Roboto'] font-bold text-2xl text-gray-900 mb-6">
                Program Impact
              </h2>
              <p className="text-gray-700 mb-6">
                Through our RoboLight events, we've reached hundreds of
                students, providing them with hands-on experience in robotics
                and inspiring them to explore STEM fields. Our events are free
                to attend, making robotics education accessible to all
                interested students.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoboLight;
