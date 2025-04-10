import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import NavHeader from "/src/components/NavHeader.jsx";

const News = () => {
  useEffect(() => {
    document.title = "News & Events | Numberosity Academy";
  }, []);

  const articles = [
    {
      id: "google-award",
      title:
        "8889A – Proud Recipient of the VEX Google Community Challenge Award",
      description:
        "Team 8889A receives prestigious recognition for their community impact.",
      coverImage: "/news/google-award-cover.png",
      date: "March 16, 2025",
    },
    {
      id: "clean-sweep",
      title: "A Clean Sweep! 8889 Teams Punch Tickets to World Championship",
      description: "All our teams qualify for the World Championship.",
      coverImage: "/news/clean-sweep-cover.jpg",
      date: "February 24, 2025",
    },
    {
      id: "launch-sig",
      title: "Hard Work Pays Off at the LAUNCH Signature Event!",
      description:
        "Our teams' dedication and hard work lead to outstanding results at the LAUNCH Signature Event.",
      coverImage: "/news/launch-sig-cover.jpg",
      date: "February 1, 2025",
    },
    {
      id: "gateway-to-west",
      title: "8889C 98%'s 1st Signature Event – Gateway to the West!",
      description: "Team 8889C attends their first signature event.",
      coverImage: "/news/gateway-to-west-cover.jpg",
      date: "January 25, 2025",
    },
    {
      id: "killingly-robotics",
      title: "Killingly Robotics HS 2nd Annual V5RC – High Stakes Qualifier",
      description:
        "Our teams compete in the high-stakes qualifier at Killingly Robotics.",
      coverImage: "/news/killingly-robotics-cover.jpg",
      date: "January 11, 2025",
    },
    {
      id: "robobridge-4",
      title: "Continuing the Journey: RoboBridge Section 4",
      description:
        "The fourth session of RoboBridge continues to make an impact in our community.",
      coverImage: "/news/robobridge4-cover.png",
      date: "January 10, 2025",
    },
    {
      id: "teams-face-off",
      title: "8889 Teams Face Off in the Finals!",
      description:
        "An exciting showdown between our teams in the championship finals.",
      coverImage: "/news/teams-face-off-cover.jpg",
      date: "January 4, 2025",
    },
    {
      id: "robobridge-christmas",
      title: "Building Holiday Joy: RoboBridge Christmas Special",
      description:
        "A special holiday edition of RoboBridge brings joy and learning to our students.",
      coverImage: "/news/robobridge-christmas-cover.jpg",
      date: "December 23, 2024",
    },
    {
      id: "riverbots",
      title: "The RiverBots VRC High Stakes Signature Event",
      description:
        "Our teams compete in the prestigious RiverBots VRC Signature Event.",
      coverImage: "/news/riverbots-cover.jpg",
      date: "December 8, 2024",
    },
    {
      id: "robobridge-2",
      title:
        "RoboBridge - Empowering Special Needs Students Through STEAM and Robotics (Session 2)",
      description:
        "The second session of RoboBridge continues to inspire and educate special needs students.",
      coverImage: "/news/robobridge2-cover.jpg",
      date: "December 1, 2024",
    },
    {
      id: "regional-nationals",
      title: "Three 8889 Teams Shine at Regional and National Competitions",
      description:
        "Our teams achieve remarkable success at both regional and national levels.",
      coverImage: "/news/regional-nationals-cover.jpg",
      date: "November 30, 2024",
    },
    {
      id: "north-andover",
      title:
        "Numberosity Academy's Teams Shine at North Andover VEX Robotics Event",
      description:
        "Our teams demonstrate excellence at the North Andover VEX Robotics competition.",
      coverImage: "/news/north-andover-cover.jpg",
      date: "November 23, 2024",
    },
    {
      id: "belmont-hill",
      title: "Belmont Hill V5RC Blended High Stakes Tournament",
      description:
        "Our teams compete in the high-stakes tournament at Belmont Hill.",
      coverImage: "/news/belmont-hill-cover.jpg",
      date: "November 2, 2024",
    },
    {
      id: "robobridge-1",
      title:
        "RoboBridge - Empowering Special Needs Students Through STEAM and Robotics",
      description:
        "The first session of our RoboBridge program brings robotics education to special needs students.",
      coverImage: "/news/robobridge1-cover.jpg",
      date: "October 25, 2024",
    },
    {
      id: "mcc-robotics",
      title: "MCC Robotics VEX V5 Robotics Competition",
      description:
        "Our teams showcase their skills at the MCC Robotics VEX V5 competition.",
      coverImage: "/news/mcc-robotics-cover.jpg",
      date: "October 19, 2024",
    },
    {
      id: "mass-robotics-block-party",
      title: "Mass Robotics Block Party",
      description:
        "Join us at the Mass Robotics Block Party for an exciting showcase of robotics innovation.",
      coverImage: "/news/mass-robotics-block-cover.jpg",
      date: "September 28, 2024",
    },
    {
      id: "lobstah-bowl",
      title: "The Lobstah Bowl Signature Event @Maine",
      description:
        "Our teams compete in the prestigious Lobstah Bowl Signature Event in Maine.",
      coverImage: "/news/lobstah-bowl-cover.jpg",
      date: "September 12, 2024",
    },
    {
      id: "four-students-to-four-teams",
      title:
        "From Four Students to Four Teams: Expanding Our VEX Robotics Program",
      description:
        "Our journey from a small group of four students to a thriving program with four competitive teams.",
      coverImage: "/news/team-expansion-cover.jpg",
      date: "September 1, 2024",
    },
    {
      id: "lexington-discovery-day",
      title: "Lexington Discovery Day",
      description: "Our teams participate in the Lexington Discovery Day.",
      coverImage: "/news/lexington-discovery-day-cover.jpg",
      date: "May 25, 2024",
    },
    {
      id: "robolight-1",
      title: "ROBOlight-Community Robo Event Series 1",
      description: "Our teams hosted a robotics showcase at the Lexington Community Center.",
      coverImage: "/news/robolight-1-cover.jpg",
      date: "March 30, 2024",
    },
    {
      id: "online-challenge",
      title: "VEX VRC 2023-2024 High School Reverse Engineering Online Challenge",
      description: "Team 8889A's reverse engineering project has been selected as one of the five finalists in the VEX VRC 2023-2024 High School Reverse Engineering Online Challenge.",
      coverImage: "/news/online-challenge-cover.jpg",
      date: "March, 2024",
    },
    {
      id: "SNE-Regional",
      title: "Southern New England VRC Regional Championships HS Division",
      description: "At the recent New England VEX Regional Championships, we clinched the tournament champion title, going undefeated in all 15 matches.",
      coverImage: "/news/SNE-Regional-cover.jpg",
      date: "Feb 26, 2024",
    },
    {
      id: "Launch",
      title: "LAUNCH VRC Signature Event @ Ohio ",
      description: "This week, we went back to Ohio for Launch, one of the strongest signature events with 72 strong teams.",
      coverImage: "/news/launch-cover.jpg",
      date: "Feb 16, 2024",
    },
    {
      id: "Framingham-2024",
      title: "Framingham VRC Over under February Tournament ",
      description: "Just one day after Gateway to the West, we attended a local competition at Framingham. ",
      coverImage: "/news/Framingham-2024-cover.jpg",
      date: "Feb 4, 2024",
    },{
      id: "Gateway-2024",
      title: "Gateway to the West VRC Signature Event @ West Virginia",
      description: "This week, we went back to Ohio for Launch, one of the strongest signature events with 72 strong teams.",
      coverImage: "/news/Gateway-2024-cover.jpg",
      date: "Feb 2th, 2024",
    },{
      id: "Kalahari-2024",
      title: "Kalahari Classic VRC Signature Event @ Ohio ",
      description: "At the highly competitive Kalahari event in Ohio, our team ranked 6th in qualifications, advanced to the quarter-finals, and placed 7th in Skills",
      coverImage: "/news/Kalahari-2024-cover.jpg",
      date: "Jan 19, 2024",
    },
    {
      id: "Marlborough-2024",
      title: "Marlborough Robotics VRC Over/Under Tournament ",
      description: "We had an incredible day at the Marlborough HS Qualifier, going 6-0, winning the event with 1898R, sweeping skills, earning Excellence, and bringing home our first-ever triple crown—see you at Kalahari!",
      coverImage: "/news/Marlborough-2024-cover.jpg",
      date: "Jan 13, 2024",
    },{
      id: "Wave-2024",
      title: "WAVE at WPI Signature Event @ Massachusetts ",
      description: "Amazing time at Wave @ WPI—after a tough start, we bounced back to finish 9-1, ranked #1 with 8 AWPs, won with 9364C, took 1st in skills, earned the Think Award, and are now #6 in the world",
      coverImage: "/news/wave-2024-cover.jpg",
      date: "Nov 30, 2023",
    },
  ];

  return (
    <div className="relative bg-white">
      <div className="absolute top-0 left-0 w-full z-10">
        <NavHeader />
      </div>
      <div className="relative pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 text-center mb-12">
              Latest Updates
            </h1>
            <div className="bg-blue-50 rounded-xl p-8 border border-blue-100 mb-16">
              <p className="font-['Roboto'] text-lg text-gray-700 text-center">
                Stay up to date with our latest achievements, events, and
                community initiatives. From competition victories to educational
                outreach, discover how we're making an impact in STEM education.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link
                key={article.id}
                to={`/news/${article.id}`}
                className="group block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.coverImage}
                    alt={article.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">
                    {article.date}
                  </div>
                  <h2 className="font-['Roboto'] font-bold text-xl text-gray-900 mb-2 group-hover:text-[#0BA2D9] transition-colors duration-300">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 line-clamp-2 whitespace-pre-line">
                    {article.description}
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

export default News;
