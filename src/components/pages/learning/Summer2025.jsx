import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import NavHeader from "/src/components/NavHeader.jsx";

const Summer2025 = () => {
  useEffect(() => {
    document.title = "Summer Program 2025 | Numberosity Academy";
  }, []);

  return (
    <div className="relative bg-white">
      <div className="absolute top-0 left-0 w-full z-10">
        <NavHeader />
      </div>
      <div className="relative pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pb-8">
          <Link
            to="/learning/summer"
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
            Back to Summer Programs
          </Link>

          {/* Main Flyer Image */}
          <div className="mb-16">
            <img
              src="/2025-flyer.jpg"
              alt="VEX Robotics Summer Camps 2025"
              className="w-full rounded-xl shadow-lg"
              loading="lazy"
            />
          </div>

          {/* Camp Information */}
          <div className="space-y-16">
            {/* General Information */}
            <div className="bg-blue-50 rounded-xl p-8 border border-blue-100">
              <h2 className="font-['Roboto'] font-bold text-2xl text-gray-900 mb-6">
                Camp Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-['Roboto'] font-semibold text-lg text-gray-900 mb-2">
                    Staff
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>Head Coach: V5RC Certified Coach</li>
                    <li>Lead Teachers: Core team members of V5RC 8889 Teams</li>
                    <li>
                      Teaching Assistants: Members of partnered High School V5RC
                      Teams
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-['Roboto'] font-semibold text-lg text-gray-900 mb-2">
                    Location
                  </h3>
                  <p className="text-gray-700">Lexington, MA</p>
                </div>
              </div>
            </div>

            {/* Session 1 */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h2 className="font-['Roboto'] font-bold text-2xl text-gray-900 mb-6">
                Session 1: FUN-damental VEX Robotics Camp
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-['Roboto'] font-semibold text-lg text-gray-900 mb-2">
                    Details
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>Dates: August 4th - August 8th</li>
                    <li>Time: 9:00 AM - 5:00 PM</li>
                    <li>Age: Rising 6th-9th graders</li>
                    <li>Price: $549.99 (by May 4) / $599.99 (after May 4)</li>
                    <li>Lunch/Snacks: Included</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-['Roboto'] font-semibold text-lg text-gray-900 mb-2">
                    Description
                  </h3>
                  <p className="text-gray-700">
                    Students will learn robotics fundamentals such as designing,
                    coding and building robots while also gaining insights into
                    engineering processes and developing essential teamwork
                    skills. Students will be divided into groups based on age
                    and experience. Teachers will first introduce VEX Robotics
                    Competition program. Later students will gain hands on
                    experience of VRC components and learn basic mechanical
                    design, programing and control theories. At the end of the
                    summer camp, students will be able to design, build,
                    program, and drive basic VRC robots to fulfill defined
                    tasks.
                  </p>
                </div>
              </div>
            </div>

            {/* Session 2 */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h2 className="font-['Roboto'] font-bold text-2xl text-gray-900 mb-6">
                Session 2: Advanced Boot Camp
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-['Roboto'] font-semibold text-lg text-gray-900 mb-2">
                    Details
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>Dates: August 11th - August 15th</li>
                    <li>Time: 9:00 AM - 5:00 PM</li>
                    <li>Age: Rising 7th-10th graders</li>
                    <li>Price: $799.99 (by May 4) / $849.99 (after May 4)</li>
                    <li>Lunch/Snacks: Included</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-['Roboto'] font-semibold text-lg text-gray-900 mb-2">
                    Description
                  </h3>
                  <p className="text-gray-700">
                    This camp is geared towards students who have prior robotics
                    experience and who are interested in participating in the
                    2024-2025 VEX Robotics Competition. A one-week Alliance
                    style camp as a warmup for season 2025-2026. Campers will be
                    divided into teams and work together with teachers and
                    coaches to brainstorm ideas, design, build, code and test
                    new season robots. Campers will go through the engineering
                    process, learn project planning, team work, documentation,
                    troubleshooting, quality control and performing iterative
                    improvement. The camp will end with a practice of judge's
                    interview and a competition between teams.
                  </p>
                  <p className="text-gray-700 mt-4 font-bold">
                    Note: Students from this class are welcome to apply for
                    joining an 8889 team for the 2025-2026 VRC competition
                    season.
                  </p>
                </div>
              </div>
            </div>

            {/* Registration Button */}
            <div className="text-center">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSf8_aqevTA90_16qYMGTBI7YaQVygCGLmBZjiTQ-dptbs31xw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-[#0BA2D9] hover:bg-blue-700 transition-colors duration-200"
              >
                Register Now
              </a>
              <p className="mt-8 text-gray-600">
                A portion of the proceeds from this camp will be used to fund
                robotics events which we will host for the community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summer2025;
