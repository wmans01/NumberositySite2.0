import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import NavHeader from "/src/components/NavHeader.jsx";

const TeamPage = () => {
  const { teamId } = useParams();

  useEffect(() => {
    document.title = "Team Details | Numberosity Academy";
    window.scrollTo(0, 0);
  }, []);

  // Team data - this would be replaced with actual data fetching
  const teamData = {
    "8889A": {
      name: "99%",
      grade: "High School",
      logo: "/teams/8889A.png",
      teamPhoto: "/teams/8889A_team.jpg",
      description:
        "Team 8889A, known as 99%, is our premier high school team. They consistently demonstrate excellence in robotics competitions and serve as mentors to younger teams.",
      achievements: [
        "VEX Skills #1 New England (2024-2025)",
        "Launch Signature Event Tournament and Skills Champions 2025",
        "Southern New England Regional Tournament Champion 2024",
        "Lobstah Bowl Signature Event Excellence Award Winners 2024",
        "WAVE @ WPI Signature Event Tournament and Skills Champions 2023",
        "Worlds Qualified",
      ],
      historicalAchievements: {
        "2024-2025": [
          {
            achievement: [
              `🏆Skills Challenge Champion 
               🏆Tournament Semifinalists`,
            ],

            event: "Massachusetts State Championship",
            date: "March 2025",
          },
          {
            achievement: [
              `🏆 Tournament Champion 
               🏆 Skills Challenge Champion`,
            ],

            event: "Launch National Signature Event HS VEX V5",
            date: "Feb 2025",
          },
          {
            achievement: [
              `🏆 Excellence Award 
               🏆 Skills Challenge Champion
               `,
            ],

            event: "North Andover High School VEX V5 High Stakes",
            date: "Jan 2025",
          },
          {
            achievement: [
              `🏆 Excellence Award 
               🏆 Tournament Champion
               🏆 Skills Challenge Champion`,
            ],

            event: "Killingly Robotics HS 2nd Annual V5RC",
            date: "Jan 2025",
          },
          {
            achievement: [
              `🏆 Excellence Award 
               🏆 Skills Challenge Champion
               🏆 Tournament Champion`,
            ],

            event: "North Andover High School VEX V5 High Stakes",
            date: "Nov 2024",
          },
          {
            achievement: [
              `🏆 Excellence Award 
               🏆 Skills Challenge Champion
               🏆 Tournament Champion`,
            ],

            event: "MCC Robotics VEX V5 Robotics Competition",
            date: "Oct 2025",
          },
          {
            achievement: [
              `🏆 Excellence Award 
               🏆 Skills Challenge Champion
               🏆 Tournament Finalist`,
            ],

            event: "The Lobstah Bowl National Signature Event",
            date: "Oct 2024",
          },
        ],
        "2023-2024": [
          {
            achievement: [`🏆Tournament Champion`],

            event: "Southern New England Regional Championships",
            date: "Feb 2025",
          },
          {
            achievement: [
              `🏆 Tournament Finalist 
              `,
            ],

            event: "Launch National Signature Event HS VEX V5",
            date: "Feb 2025",
          },
          {
            achievement: [
              `🏆 Excellence Award
               🏆 Tournament Champion
               🏆 Skill Challenge Champion`,
            ],

            event: "Framingham VRC Over Under January HS Tournament",
            date: "Feb 2024",
          },
          {
            achievement: [
              `🏆 Tournament Finalist
               🏆 Skills 3rd Overall
               `,
            ],

            event: "Gateway to the West VRC Signature Event",
            date: "Feb 2024",
          },
          {
            achievement: [
              `🏆 Tournament Quarter Finalist
               
               `,
            ],

            event: "Kalahari Classic VRC Signature Event",
            date: "Jan 2024",
          },
          {
            achievement: [
              `🏆 Tournament Champion
               🏆 Sportsmanship Award`,
            ],

            event: "Framingham VRC Over Under January HS Tournament",
            date: "Jan 2024",
          },
          {
            achievement: [
              `🏆 Tournament Champion
               🏆 Skills Challenge Champion
               🏆 Think Award`,
            ],

            event: "WAVE at WPI VRC National Signature Event",
            date: "Dec 2023",
          },
          {
            achievement: [
              `🏆 Excellence Award 
               🏆 Tournament Champion
               🏆 Skills Challenge Champion`,
            ],

            event: "Marlborough Robotics VRC Over/Under (HS)",
            date: "Jan 2025",
          },
          {
            achievement: [
              `🏆 Tournament Finalist
               🏆 Robot Skills Champion
               
               `,
            ],

            event: "Ridgefield VRC Over Under Qualifying Tournament",
            date: "Jan 2024",
          },
          {
            achievement: [
              `🏆 Skills Challenge Champion
               `,
            ],

            event: "Rip Tide! – Framingham/Hopkinton HS Tournament ",
            date: "Dec 2023",
          },
        ],
      },
      members: [
        "Jeremy Wang - Captain and Builder",
        "Peter Bai - Programmer",
        "Charles Tang - Builder",
        "Ryan Zhang - Programmer",
        "Allison Xu - Notebooker",
        "Caillou Wang - Media Manager",
      ],
    },
    "8889B": {
      name: "Blackjack",
      grade: "High School",
      logo: "/teams/blackjack.png",
      teamPhoto: "/teams/8889B_team.jpg",
      description:
        "Team 8889B, Blackjack, is known for their innovative designs and strategic gameplay. They bring a unique perspective to every competition.",
      achievements: [
        "High Stakes Winter Classic at Mashpee Tournament Champions",
        "Framingham V5RC High Stakes December Design Award Winners",
        "Worlds Qualified",
      ],
      historicalAchievements: {
        "2024-2025": [
          {
            achievement: [
              `
               🏆 Skills Challenge Champion
               `,
            ],
            event: "High Stakes Winter Classic at Mashpee",
            date: "2024 Season",
          },
          {
            achievement: [
              `
               🏆 Design Award
               `,
            ],
            event: "Framingham V5RC High Stakes ",
            date: "2024 Season",
          },
          {
            achievement: [
              `
               🏆 Innovate Award
               `,
            ],
            event: "North Ander High School",
            date: "2024 Season",
          },
          {
            achievement: [
              `
               🏆 Tournament Champion
               `,
            ],
            event: "Belmont Hill VRC High Stakes Tournament ",
            date: "2024 Season",
          },
        ],
      },
      members: [
        "Jason Ma - Builder and Designer",
        "Ralph Wang - Programmer",
        "Andrew Pan - Programmer",
        "Harry Huang - Programmer",
        "Olina Liu - Notebooker",
      ],
    },
    "8889C": {
      name: "98%",
      grade: "Middle School",
      logo: "/teams/8889C.png",
      teamPhoto: "/teams/8889C_team.jpg",
      description:
        "Team 8889C, 98%, represents our middle school division. They show great promise and dedication to robotics.",
      achievements: [
        "Framingham January MS Event Tournament and Skills Champions",
        "Framingham December MS Event Tournament Finalists",
        "Worlds Qualified",
      ],

      historicalAchievements: {
        "2024-2025": [
          {
            achievement: [
              `🏆 Tournament Champions 
               🏆 Robot Skills Champion  `,
            ],
            event: "Framingham V5RC High Stakes MS Tournament  ",
            date: "Jan 2025",
          },
          {
            achievement: [`🏆 Tournament Finalist`],

            event: "Framingham V5RC High Stakes MS Tournament",
            date: "Dec 2024",
          },
        ],
      },
      members: [
        "Jack Li - Builder and Designer",
        "Mason Wu - Builder",
        "James Jin - Builder and Driver",
        "Logan Wang - Coder",
      ],
    },
    "8889S": {
      name: "shhh...",
      grade: "High School",
      logo: "/teams/8889S.png",
      teamPhoto: "/teams/8889S_team.jpg",
      description:
        "Team 8889S is a newly-formed competitive robotics team driven by creativity, precision, and a passion for learning. Though new, they are committed to engineering high-performing robots and making a strong impact both on the field and in our community.",
      achievements: [
        "Mashpee Winter Classic Excellence Award and Tournament Champions",
        "ALA Winter Classic Innovate Award Winners",
        "Worlds Qualified",
      ],
      historicalAchievements: {
        "2024-2025": [
          {
            achievement: [
              `🏆 Excellence Award 
               🏆 Tournament Champion  `,
            ],
            event: "High Stakes Winter Classic at Mashpee   ",
            date: "2025",
          },
          {
            achievement: [`🏆 Innovate Award`],

            event: "The Winter Classic at Abbott Lawrence Academy ",
            date: "2025",
          },
          {
            achievement: [
              `🏆 Tournament Finalists
               🏆 Innovate Award`,
            ],

            event: "North Ander High School   ",
            date: "2025",
          },
        ],
      },
      members: [
        "Jacob Seo - Builder and Driver",
        "Bryant Wang - Builder and Scout",
        "Abinav Kumar - Programmer",
        "Brandon Ni - Programmer",
        "Claire Zhang - Notebooker",
      ],
    },
    "8889X": {
      name: "1%",
      grade: "High School",
      logo: "/teams/8889X.jpg",
      teamPhoto: "/teams/8889X_team.jpg",
      description:
        "Team 8889X, 1%, pushes the boundaries of what's possible in robotics, always striving for that extra 1% of performance.",
      achievements: [
        "Massachusetts State Championship Build Award Winners",
        "Mashpee Winter Classic Excellence Award and Tournament Champions",
        "Worlds Qualified",
      ],
      historicalAchievements: {
        "2024-2025": [
          {
            achievement: [
              `🏆 Robot Skills Champion 
              
              `,
            ],

            event: "High Stakes Winter Classic at Mashpee Middle High School",
            date: "Jan 2025",
          },
          {
            achievement: [
              `🏆 Robot Skills Champion 
               `,
            ],

            event:
              "Framingham/iSTEAM V5RC High Stakes MS/HS Invitational: January MS/HS Invitational Tournament",
            date: "Jan 2025",
          },
          {
            achievement: [
              `🏆 Create Award 
               
              `,
            ],

            event:
              "Gateway to the West VEX V5 Robotics Competition Signature Event: High School",
            date: "Jan 2025",
          },
          {
            achievement: [
              `🏆 Tournament Champions
               🏆 Robot Skills Champion 
              
               `,
            ],

            event: "Bancroft V5RC High Stakes HS Tournament",
            date: "Feb 2025",
          },
          {
            achievement: [
              `🏆 Build Award 
               
              `,
            ],

            event: "Massachusetts VEX V5 High School State Championship",
            date: "Feb 2025",
          },
        ],
      },
      members: [
        "Bojro Das - Programmer and Driver",
        "Takeru Endo - Builder",
        "Varun Khedkar- Builder",
        "Eric Li - ESA",
      ],
    },
  };

  const team = teamData[teamId];

  if (!team) {
    return (
      <div className="relative bg-white">
        <div className="absolute top-0 left-0 w-full z-10">
          <NavHeader />
        </div>
        <div className="relative pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="font-['Roboto'] font-bold text-4xl text-gray-900 mb-12 text-center">
              Team Not Found
            </h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-white">
      <div className="absolute top-0 left-0 w-full z-10">
        <NavHeader />
      </div>
      <div className="relative pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-blue-50 rounded-xl p-8 border border-blue-100 mb-16">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-48 h-48 relative">
                <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-full"></div>
                <img
                  src={team.logo}
                  alt={`${team.name} logo`}
                  className="w-full h-full object-contain rounded-full relative z-10"
                  loading="lazy"
                />
              </div>
              <div className="text-center md:text-left">
                <h1 className="font-['Roboto'] font-bold text-4xl text-gray-900 mb-2">
                  Team {teamId}
                </h1>
                <h2 className="font-['Roboto'] font-semibold text-2xl text-[#0BA2D9] mb-4">
                  {team.name}
                </h2>
                <p className="font-['Roboto'] text-lg text-gray-600">
                  {team.grade}
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <div className="relative rounded-xl overflow-hidden shadow-lg md:h-[600px] h-[250px]">
              <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
              <img
                src={team.teamPhoto}
                alt={`${team.name} team photo`}
                className="md:w-full w-screen h-full object-cover relative z-10"
                loading="lazy"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
              <h3 className="font-['Roboto'] font-bold text-2xl text-gray-900 mb-4">
                About
              </h3>
              <p className="font-['Roboto'] text-gray-600">
                {team.description}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
              <h3 className="font-['Roboto'] font-bold text-2xl text-gray-900 mb-4">
                Notable Achievements
              </h3>
              <div className="space-y-4">
                {team.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <svg
                        className="w-5 h-5 text-[#0BA2D9]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="font-['Roboto'] text-gray-700">
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 col-span-full">
              <h3 className="font-['Roboto'] font-bold text-2xl text-gray-900 mb-4">
                Historical Achievements
              </h3>
              <div className="space-y-6">
                {Object.entries(team.historicalAchievements).map(
                  ([year, achievements]) => (
                    <div key={year} className="space-y-3">
                      <h4 className="font-['Roboto'] font-semibold text-lg text-gray-800 border-b border-gray-200 pb-2">
                        {year}
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                        {achievements.map((achievement, index) => (
                          <div
                            key={index}
                            className="bg-gray-50 rounded-lg p-3"
                          >
                            <div className="flex items-start gap-2 mb-1">
                              <div className="flex-shrink-0 mt-0.5">
                                {/* <svg
                                  className="w-3 h-3 text-gray-400"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                  />
                                </svg> */}
                              </div>
                              <p className="font-['Roboto'] text-gray-700 text-xs whitespace-pre-line">
                                {achievement.achievement}
                              </p>
                            </div>
                            <div className="flex justify-between items-center mt-1">
                              <span className="font-['Roboto'] text-gray-500 text-[10px] bg-gray-100 px-2 py-0.5 rounded">
                                {achievement.event}
                              </span>
                              <span className="font-['Roboto'] text-gray-400 text-[10px]">
                                {achievement.date}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 md:col-span-2">
              <h3 className="font-['Roboto'] font-bold text-2xl text-gray-900 mb-4">
                Team Members
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {team.members.map((member, index) => (
                  <div key={index} className="bg-blue-50 rounded-lg p-4">
                    <p className="font-['Roboto'] text-gray-700">{member}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
