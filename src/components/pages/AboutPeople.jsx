/**
 * AboutPeople Component
 *
 * Displays information about team members, leaders, and people behind Numberosity Academy.
 *
 * @component
 * @returns {JSX.Element} The rendered AboutPeople component
 */

import React, { useState, useEffect } from "react";
import NavHeader from "/src/components/NavHeader.jsx";

const AboutPeople = () => {
  useEffect(() => {
    document.title = "Our People | Numberosity Academy";
  }, []);
  const [stars, setStars] = useState([]);
  const [eyes, setEyes] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const [isAllisonHovered, setIsAllisonHovered] = useState(false);
  const [isCaillouHovered, setIsCaillouHovered] = useState(false);
  const [isCharlesHovered, setIsCharlesHovered] = useState(false);
  const [isOtherHovered, setIsOtherHovered] = useState(false);

  const createStar = (x, y) => {
    const colors = ["#FFD700", "#FFA500", "#FF69B4", "#00FFFF", "#FF00FF"];
    const sizes = [2, 3, 4, 5, 6];
    const durations = [0.5, 0.75, 1, 1.25, 1.5];

    // Create multiple stars at once
    const newStars = Array.from({ length: 10 }, () => {
      const angle = Math.random() * Math.PI * 2;
      const velocity = 100 + Math.random() * 150;
      const tx = Math.cos(angle) * velocity;
      const ty = Math.sin(angle) * velocity;

      return {
        id: Date.now() + Math.random(),
        x: x + (Math.random() - 0.5) * 50,
        y: y + (Math.random() - 0.5) * 50,
        style: {
          "--tx": `${tx}px`,
          "--ty": `${ty}px`,
          "--size": `${sizes[Math.floor(Math.random() * sizes.length)]}px`,
          "--color": colors[Math.floor(Math.random() * colors.length)],
          "--duration": `${
            durations[Math.floor(Math.random() * durations.length)]
          }s`,
          left: x + (Math.random() - 0.5) * 50,
          top: y + (Math.random() - 0.5) * 50,
        },
      };
    });

    return newStars;
  };

  const createEmoji = (x, y, emoji) => {
    const size = 32;

    return {
      id: Date.now(),
      x,
      y,
      emoji: emoji,
      style: {
        "--size": `${size}px`,
        left: x,
        top: y,
      },
    };
  };

  const handleMouseMove = (e) => {
    if (e.target.closest(".jeremy-card") && !isHovered) {
      const newStars = createStar(e.clientX, e.clientY);
      setStars((prev) => [...prev, ...newStars]);
    }
    if (e.target.closest(".allison-card")) {
      const newEye = createEmoji(e.clientX, e.clientY, "👀");
      setEyes([newEye]);
    }
    if (e.target.closest(".caillou-card")) {
      const newEmoji = createEmoji(e.clientX, e.clientY, "📸");
      setEyes([newEmoji]);
    }
    if (e.target.closest(".charles-card")) {
      const newEmoji = createEmoji(e.clientX, e.clientY, "🔧");
      setEyes([newEmoji]);
    }
    if (e.target.closest(".other-card")) {
      const newEmoji = createEmoji(e.clientX, e.clientY, "👨‍💻");
      setEyes([newEmoji]);
    }
  };

  const handleMouseEnter = (type) => {
    if (type === "jeremy") setIsHovered(true);
    if (type === "allison") setIsAllisonHovered(true);
    if (type === "caillou") setIsCaillouHovered(true);
    if (type === "charles") setIsCharlesHovered(true);
    if (type === "other") setIsOtherHovered(true);
  };

  const handleMouseLeave = (type) => {
    if (type === "jeremy") setIsHovered(false);
    if (type === "allison") {
      setIsAllisonHovered(false);
      setEyes([]);
    }
    if (type === "caillou") {
      setIsCaillouHovered(false);
      setEyes([]);
    }
    if (type === "charles") {
      setIsCharlesHovered(false);
      setEyes([]);
    }
    if (type === "other") {
      setIsOtherHovered(false);
      setEyes([]);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setStars((prev) => prev.filter((star) => Date.now() - star.id < 1000));
      setEyes((prev) => prev.filter((eye) => Date.now() - eye.id < 1000));
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const teamMembers = [
    {
      name: "Jeremy Wang",
      role: "Co-Founder and President",
      description:
        "A junior at Lexington High School with 6+ years of VEX Robotics experience. Passionate about engineering and robotics, he serves as Vice President of New England Robotics Association, teaching CAD/3D modeling. A USACO Gold qualifier proficient in Python, C++, and Java, he created this website and enjoys mentoring students.",
      image: "/about/jeremy.jpg",
      isJeremy: true,
    },
    {
      name: "Peter Bai",
      role: "Co-Founder and Co-President",
      description:
        "A junior at Lexington High School with 3.5 years of VEX Robotics experience, specializing in programming. Passionate about mathematics and robotics, he serves as Vice President of New England Robotics Association. A 5x AIME qualifier and USAJMO/USAMO qualifier, he enjoys teaching programming and mentoring students.",
      image: "/about/peter.jpg",
    },
    {
      name: "Charles Tang",
      role: "Recruiting and Fundraising Ambassador",
      description:
        "A freshman at Lexington High School with extensive VEX experience since fourth grade. A three-time regional champion and Worlds qualifier, he previously captained Team 10102Z and teaches robotics camps. Beyond robotics, he's a competitive figure skater and has contributed to popular Roblox games.",
      image: "/about/charles.jpg",
    },
    {
      name: "Ryan Zhang",
      role: "Summer Camp Software Coach",
      description:
        "A sophomore at Lexington High School, Ryan began his robotics journey with FLL and transitioned to VEX in 2022 as a programmer and data analyst. A Life Scout working towards Eagle, he's passionate about community service and cross-country running. Proficient in Java, C++, and Python, he enjoys teaching robotics fundamentals and tutoring math.",
      image: "/about/ryan.png",
    },
    {
      name: "Allison Xu",
      role: "Summer Camp Coordinator and Coach",
      description:
        "A junior at Lexington High School, Allison is passionate about education and robotics. She organizes and leads summer camp activities, creating engaging learning experiences and fostering students' interest in STEM through interactive projects.",
      image: "/about/allison.jpg",
      isAllison: true,
    },
    {
      name: "Caillou Wang",
      role: "Media Director",
      description:
        "A sophomore at the Academy for Science and Design, Caillou brings 4 years of filmmaking experience to the team. As Media Director, he uses his passion for videography to enhance the team's digital presence and document their achievements through engaging content creation.",
      image: "/about/caillou.png",
    },
    {
      name: "Abinav Kumar",
      role: "Summer Camp Software Coach",
      description:
        "A freshman at Andover High School, Abinav is passionate about programming and teaching. He helps students develop their software development skills and enjoys making programming concepts fun and accessible through interactive lessons.",
      image: "/about/abinav.jpg",
    },
    {
      name: "Athena Wang",
      role: "Advisor, Learning Program",
      description:
        "Athena is a freshman at Princeton University. She started the Numberosity Learning Program Branch, an online STEM learning platform for underprivileged students in 2022, which evolved into the current Numberosity Academy. She loves sharing her STEM knowledge and experiences with others and is excited to continue expanding the outreach of her program!",
      image: "/about/athena.jpg",
    },
  ];

  return (
    <div className="relative bg-white" onMouseMove={handleMouseMove}>
      <div className="absolute top-0 left-0 w-full z-10">
        <NavHeader />
      </div>
      <div className="relative pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="font-['Roboto'] font-bold text-4xl text-gray-900 mb-12 text-center">
            Our People
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden ${
                  member.isJeremy
                    ? "jeremy-card spinning-card"
                    : member.isAllison
                    ? "allison-card"
                    : member.name === "Caillou Wang"
                    ? "caillou-card"
                    : member.name === "Charles Tang"
                    ? "charles-card"
                    : "other-card"
                }`}
                onMouseEnter={() => {
                  if (member.isJeremy) handleMouseEnter("jeremy");
                  if (member.isAllison) handleMouseEnter("allison");
                  if (member.name === "Caillou Wang")
                    handleMouseEnter("caillou");
                  if (member.name === "Charles Tang")
                    handleMouseEnter("charles");
                  if (
                    !member.isJeremy &&
                    !member.isAllison &&
                    member.name !== "Caillou Wang" &&
                    member.name !== "Charles Tang"
                  )
                    handleMouseEnter("other");
                }}
                onMouseLeave={() => {
                  if (member.isJeremy) handleMouseLeave("jeremy");
                  if (member.isAllison) handleMouseLeave("allison");
                  if (member.name === "Caillou Wang")
                    handleMouseLeave("caillou");
                  if (member.name === "Charles Tang")
                    handleMouseLeave("charles");
                  if (
                    !member.isJeremy &&
                    !member.isAllison &&
                    member.name !== "Caillou Wang" &&
                    member.name !== "Charles Tang"
                  )
                    handleMouseLeave("other");
                }}
              >
                <div className="w-full h-64 bg-gray-100 flex items-center justify-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="font-['Roboto'] font-bold text-xl text-gray-900 mb-2">
                    {member.name}
                  </h2>
                  <p className="font-['Roboto'] font-medium text-[#0BA2D9] mb-3">
                    {member.role}
                  </p>
                  <p className="font-['Roboto'] text-gray-600">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {stars.map((star) => (
        <div key={star.id} className="star" style={star.style} />
      ))}
      {eyes.map((eye) => (
        <div key={eye.id} className="eye" style={eye.style}>
          {eye.emoji}
        </div>
      ))}
    </div>
  );
};

export default AboutPeople;
