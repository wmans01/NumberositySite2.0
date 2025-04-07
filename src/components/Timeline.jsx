/**
 * Timeline Component
 *
 * A horizontal timeline showing key events from 2023 to present.
 * Features:
 * - Interactive hover points
 * - Animated popup panels
 * - Responsive design
 * - Key milestones in Numberosity Academy's history
 *
 * @component
 * @returns {JSX.Element} The rendered Timeline component
 */

import React, { useState } from "react";

const Timeline = () => {
  const [activePoint, setActivePoint] = useState(null);

  const timelinePoints = [
    {
      year: 2023,
      month: "Spring",
      title: "Numberosity Academy Founded",
      description:
        "Established as a student-run nonprofit dedicated to making STEM education accessible through hands-on learning and real-world application.",
    },
    {
      year: 2023,
      month: "Spring",
      title: "First Robotics Team Formed",
      description:
        "Launched our inaugural VEX Robotics team, setting the foundation for future competitive and educational success.",
    },
    {
      year: 2023,
      month: "Summer",
      title: "STEM Camps Raised $20,000+",
      description:
        "Held three impactful camps—Intro to VEX IQ, Python for Beginners, and Hands-on Engineering—raising over $20,000 to support our programs and outreach.",
    },
    {
      year: 2023,
      month: "Fall",
      title: "RoboBridge Mentorship Program Launched",
      description:
        "Introduced RoboBridge to mentor younger students and help new teams thrive—sparking growth that expanded our program to five competitive robotics teams.",
    },
    {
      year: 2025,
      month: "Present",
      title: "All Five Teams Qualified for VEX Worlds",
      description:
        "Today, every Numberosity team has qualified for the VEX World Championship, a testament to our students' innovation, dedication, and teamwork.",
    },
  ];

  return (
    <div className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-['Roboto'] font-bold text-3xl text-gray-900 mb-12 text-center">
          Our History
        </h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#0BA2D9]/20 transform -translate-y-1/2 z-0"></div>

          {/* Timeline points */}
          <div className="flex justify-between relative z-10">
            {timelinePoints.map((point, index) => (
              <div
                key={index}
                className="relative flex-1"
                onMouseEnter={() => setActivePoint(index)}
                onMouseLeave={() => setActivePoint(null)}
              >
                {/* Point container */}
                <div className="flex flex-col items-center">
                  {/* Point */}
                  <div className="w-4 h-4 rounded-full bg-[#0BA2D9] border-2 border-white shadow-md z-20 mb-2"></div>

                  {/* Date */}
                  <div className="text-sm font-medium text-gray-600 mt-1 z-20">
                    {point.month} {point.year}
                  </div>

                  {/* Content */}
                  <div
                    className={`absolute top-8 left-1/2 transform -translate-x-1/2 w-64 p-4 rounded-lg transition-all duration-300 z-[1000] ${
                      activePoint === index
                        ? "bg-blue-50 shadow-lg opacity-100"
                        : "bg-white opacity-0 pointer-events-none"
                    }`}
                  >
                    <h3 className="font-['Roboto'] font-bold text-lg text-gray-900">
                      {point.title}
                    </h3>
                    <p className="font-['Roboto'] mt-2 text-sm text-gray-600">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
