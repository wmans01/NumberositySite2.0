import React from "react";
import { useParams } from "react-router-dom";
import NavHeader from "/src/components/NavHeader.jsx";

const TeamPage = () => {
  const { teamId } = useParams();

  // Team data - this would be replaced with actual data fetching
  const teamData = {
    "8889A": {
      name: "99%",
      grade: "High School",
      logo: "/src/assets/teams/8889A.png",
      teamPhoto: "/src/assets/teams/8889A_team.jpg",
      description:
        "Team 8889A, known as 99%, is our premier high school team. They consistently demonstrate excellence in robotics competitions and serve as mentors to younger teams.",
      achievements: [
        "Souther New England Regional Champions 2023",
        "Lobstah Bowl Signature Event Excellence Award Winners",
        "Launch Signature Event Tournament and Skills Challenge Champions",
        "2x Worlds Qualified",
      ],
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
      logo: "/src/assets/teams/blackjack.png",
      teamPhoto: "/src/assets/teams/8889B_team.jpg",
      description:
        "Team 8889B, Blackjack, is known for their innovative designs and strategic gameplay. They bring a unique perspective to every competition.",
      achievements: [
        "High Stakes Winter Classic at Mashpee Tournament Champions",
        "Framingham V5RC High Stakes December Design Award Winners",
        "Worlds Qualified",
      ],
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
      logo: "/src/assets/teams/8889C.png",
      teamPhoto: "/src/assets/teams/8889C_team.jpg",
      description:
        "Team 8889C, 98%, represents our middle school division. They show great promise and dedication to robotics.",
      achievements: [
        "Framingham January MS Event Tournament and Skills Champions",
        "Framingham December MS Event Tournament Finalists",
        "Worlds Qualified",
      ],
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
      logo: "/src/assets/teams/8889S.png",
      teamPhoto: "/src/assets/teams/8889S_team.jpg",
      description:
        "Team 8889S is a newly-formed competitive robotics team driven by creativity, precision, and a passion for learning. Though new, they are committed to engineering high-performing robots and making a strong impact both on the field and in our community.",
      achievements: [
        "Mashpee Winter Classic Excellence Award and Tournament Champions",
        "ALA Winter Classic Innovate Award Winners",
        "Worlds Qualified",
      ],
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
      logo: "/src/assets/teams/8889X.jpg",
      teamPhoto: "/src/assets/teams/8889X_team.jpg",
      description:
        "Team 8889X, 1%, pushes the boundaries of what's possible in robotics, always striving for that extra 1% of performance.",
      achievements: [
        "Massachusetts State Championship Build Award Winners",
        "Mashpee Winter Classic Excellence Award and Tournament Champions",
        "Worlds Qualified",
      ],
      members: [
        "Bojro Das - Programmer and Driver",
        "Takeru Endo - Builder",
        "Varun Khedkar- Builder",
        "Eric Li - Builder",
        "Jeff Li - Builder",
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
            <div className="relative rounded-xl overflow-hidden shadow-lg h-[600px]">
              <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
              <img
                src={team.teamPhoto}
                alt={`${team.name} team photo`}
                className="w-full h-full object-cover relative z-10"
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
              <ul className="list-disc list-inside font-['Roboto'] text-gray-600">
                {team.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
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
