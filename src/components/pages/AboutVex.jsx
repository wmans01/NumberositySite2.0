/**
 * AboutVex Component
 *
 * Displays information about the VEX Robotics program, teams, and achievements.
 *
 * @component
 * @returns {JSX.Element} The rendered AboutVex component
 */

import React, { useEffect } from "react";
import NavHeader from "/src/components/NavHeader.jsx";

const AboutVex = () => {
  useEffect(() => {
    document.title = "VEX Robotics | Numberosity Academy";
  }, []);
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="absolute top-0 left-0 w-full z-10">
        <NavHeader />
      </div>
      <main className="flex-grow relative pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="font-['Roboto'] font-bold text-4xl text-gray-900 mb-12 text-center">
            VEX Robotics Program
          </h1>
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="font-['Roboto'] font-bold text-2xl text-gray-900 mb-4">
                What is VEX Robotics?
              </h2>
              <p className="font-['Roboto'] text-gray-600 mb-4">
                VEX Robotics is a leading educational robotics platform that
                provides students with hands-on experience in STEM fields.
                Through building and programming robots, students develop
                critical thinking, problem-solving, and teamwork skills while
                competing in exciting challenges.
              </p>
              <p className="font-['Roboto'] text-gray-600">
                Our teams participate in the VEX Robotics Competition (VRC),
                where students design, build, and program robots to compete in
                an annual game challenge. The competition fosters innovation,
                creativity, and technical skills while promoting collaboration
                and sportsmanship.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="font-['Roboto'] font-bold text-2xl text-gray-900 mb-4">
                Annual Game Challenge
              </h2>
              <p className="font-['Roboto'] text-gray-600 mb-4">
                Each year, VEX Robotics introduces a new game challenge that
                teams must solve using their robots. These games are carefully
                designed to test different aspects of robotics, from mechanical
                design to programming and strategy. The annual game change keeps
                the competition fresh and exciting, requiring teams to innovate
                and adapt their approaches each season.
              </p>
              <p className="font-['Roboto'] text-gray-600 mb-4">
                Past games have included Tower Takeover (2019-2020), Change Up
                (2020-2021), Tipping Point (2021-2022), and Spin Up (2022-2023).
                Each game presents unique challenges that push teams to develop
                new skills and strategies.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="font-['Roboto'] font-bold text-2xl text-gray-900 mb-4">
                This Year's Game: High Stakes
              </h2>
              <div className="aspect-w-16 aspect-h-9 mb-4 h-[500px]">
                <iframe
                  className="w-full h-full rounded-lg shadow-lg"
                  src="https://www.youtube.com/embed/Sx6HJSpopeQ"
                  title="VEX Robotics Competition 2024-2025: High Stakes"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="font-['Roboto'] text-gray-600">
                The 2024-2025 VEX Robotics Competition game, High Stakes,
                challenges teams to score points by scoring rings onto various
                stakes at different elevations. Teams must navigate obstacles
                and work together to achieve the highest score possible.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutVex;
