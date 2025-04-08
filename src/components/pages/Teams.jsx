import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import NavHeader from "/src/components/NavHeader.jsx";

const Teams = () => {
  useEffect(() => {
    document.title = "Our Teams | Numberosity Academy";
  }, []);

  const teams = [
    {
      id: 1,
      number: "8889A",
      name: "99%",
      grade: "High School",
      logo: "/teams/8889A.png",
      link: "/teams/8889A",
    },
    {
      id: 2,
      number: "8889B",
      name: "Blackjack",
      grade: "High School",
      logo: "/teams/blackjack.png",
      link: "/teams/8889B",
    },
    {
      id: 3,
      number: "8889C",
      name: "98%",
      grade: "Middle School",
      logo: "/teams/8889C.png",
      link: "/teams/8889C",
    },
    {
      id: 4,
      number: "8889S",
      name: "shhh...",
      grade: "High School",
      logo: "/teams/8889S.png",
      link: "/teams/8889S",
    },
    {
      id: 5,
      number: "8889X",
      name: "1%",
      grade: "High School",
      logo: "/teams/8889X.jpg",
      link: "/teams/8889X",
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
            Our Teams
          </h1>
          <div className="bg-blue-50 rounded-xl p-8 border border-blue-100 mb-16">
            <p className="font-['Roboto'] text-lg text-gray-700 text-center">
              Meet our competitive VEX Robotics teams, each with their unique
              strengths and achievements. From high school to middle school, our
              teams work together to push the boundaries of robotics and
              engineering excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teams.slice(0, 3).map((team) => (
              <Link key={team.id} to={team.link} className="block">
                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 h-full border border-gray-200 hover:border-[#0BA2D9] group">
                  <div className="flex flex-col items-center">
                    <div className="w-32 h-32 mb-4 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full"></div>
                      <img
                        src={team.logo}
                        alt={`${team.name} logo`}
                        className="w-full h-full object-contain rounded-full relative z-10"
                        loading="lazy"
                        width={128}
                        height={128}
                        style={{
                          contentVisibility: "auto",
                          backgroundColor: "transparent",
                        }}
                      />
                    </div>
                    <h2 className="font-['Roboto'] font-bold text-2xl text-gray-900 mb-2 text-center group-hover:text-[#0BA2D9] transition-colors">
                      {team.number}
                    </h2>
                    <h3 className="font-['Roboto'] font-semibold text-xl text-gray-700 mb-2 text-center">
                      {team.name}
                    </h3>
                    <p className="font-['Roboto'] text-gray-600 text-center">
                      {team.grade}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-2xl mx-auto">
            {teams.slice(3).map((team) => (
              <Link key={team.id} to={team.link} className="block">
                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 h-full border border-gray-200 hover:border-[#0BA2D9] group">
                  <div className="flex flex-col items-center">
                    <div className="w-32 h-32 mb-4 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full"></div>
                      <img
                        src={team.logo}
                        alt={`${team.name} logo`}
                        className="w-full h-full object-contain rounded-full relative z-10"
                        loading="lazy"
                        width={128}
                        height={128}
                        style={{
                          contentVisibility: "auto",
                          backgroundColor: "transparent",
                        }}
                      />
                    </div>
                    <h2 className="font-['Roboto'] font-bold text-2xl text-gray-900 mb-2 text-center group-hover:text-[#0BA2D9] transition-colors">
                      {team.number}
                    </h2>
                    <h3 className="font-['Roboto'] font-semibold text-xl text-gray-700 mb-2 text-center">
                      {team.name}
                    </h3>
                    <p className="font-['Roboto'] text-gray-600 text-center">
                      {team.grade}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
