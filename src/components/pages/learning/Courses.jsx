import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavHeader from "/src/components/NavHeader.jsx";

const Courses = () => {
  useEffect(() => {
    document.title = "STEM Courses | Numberosity Academy";
  }, []);
  const [searchTerm, setSearchTerm] = useState("");

  const courses = [
    {
      category: "CAD & 3D Modeling",
      title: "CAD & 3D Modeling 2023",
      description:
        "Learn the fundamentals of 3D design and modeling with Fusion 360. Perfect for beginners and intermediate learners.",
      link: "/learning/courses/cad-2023",
      icon: "🖥️",
    },
    {
      category: "CAD & 3D Modeling",
      title: "CAD & 3D Modeling 2024",
      description:
        'Unlock the boundless possibilities of creation! We are thrilled to announce the 2nd-year summer offering of the "Intro to CAD/3D Modeling Course"! Step-by-step guidance for beginners to learn how to use CAD software, design 3D models of everyday objects, characters and more.',
      link: "/learning/courses/cad-2024",
      icon: "🖥️",
    },
    {
      category: "Programming",
      title: "Intro to Python 2023",
      description:
        "Learn the fundamentals of programming through Python—no experience needed. This fast-paced course covers core concepts like variables, loops, and functions with hands-on coding in Replit. Materials will be shared for review, and students are encouraged to practice outside of class. Suitable for beginners; those with prior experience may find it less challenging.",
      link: "/learning/courses/python-2023",
      icon: "💻",
    },
    {
      category: "Mathematics",
      title: "Weekly 30 Min Fun Math Lecture",
      description:
        "Want to explore the Fascinating World of Mathematics? Join our Weekly 30-Minute Fun Math Lecture. Each lecture will be a time for students to explore interesting real-world problems or ones that some people are studying around the world today! We will make sure that the skill level for each lecture is appropriate for any skill level, and only very basic level thinking is required. We will guide you through everything!",
      link: "/learning/courses/weekly-math",
      icon: "📐",
    },
    {
      category: "Mathematics",
      title: "Competition Math (Level 2)",
      description:
        "This is a faster-paced class for those more interested in competition-based math and developing critical-thinking skills (e.g. AMC 8/Mathcounts level)",
      link: "/learning/courses/competition-math",
      icon: "📐",
    },
    {
      category: "Mathematics",
      title: "Enrichment Math (Level 1)",
      description:
        "This is a slower-paced class for those wanting a more guided experience to learn the concepts more deeply (math enrichment)",
      link: "/learning/courses/enrichment-math",
      icon: "📐",
    },
    {
      category: "Mathematics",
      title: "Mathcounts/AMC8",
      description:
        "This class series is for middle school students who love math and are interested in learning more beyond the normal school curriculum. It will also provide a solid foundation for those going into competition math. Targeted toward 5th-8th grade students, the course started in Oct. 2022 and will last until the summer of 2023, covering the following two materials..",
      link: "/learning/courses/mathcounts",
      icon: "📐",
    },
    {
      category: "Mathematics",
      title: "Fun Introductory Math",
      description:
        "This series provides an introduction into the Middle School Competition Math Series courses. They examine several different puzzles and problems that can be found within mathematics and are specifically created to stimulate interest in math.",
      link: "/learning/courses/intro-math",
      icon: "📐",
    },
    {
      category: "Mathematics",
      title: "SAT Workshops",
      description:
        "This 3-day SAT Math Workshop is fast-paced overview of the math portion of the SAT, covering different strategies and many topics you need to know in order to improve your score on SAT",
      link: "/learning/courses/sat-workshops",
      icon: "📐",
    },
  ];

  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = [...new Set(courses.map((course) => course.category))];

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
            Online STEM Courses
          </h1>
          <div className="bg-blue-50 rounded-xl p-8 border border-blue-100 mb-16">
            <p className="font-['Roboto'] text-lg text-gray-700 text-center mb-6">
              Browse our comprehensive selection of STEM courses. Use the search
              bar to find specific courses.
            </p>
            <div className="max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0BA2D9] focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <Link key={index} to={course.link} className="block">
                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-8 h-full border border-gray-200 hover:border-[#0BA2D9] group">
                  <div className="text-4xl mb-4">{course.icon}</div>
                  <div className="text-sm text-[#0BA2D9] font-semibold mb-2">
                    {course.category}
                  </div>
                  <h2 className="font-['Roboto'] font-bold text-2xl text-gray-900 mb-3 group-hover:text-[#0BA2D9] transition-colors">
                    {course.title}
                  </h2>
                  <p className="font-['Roboto'] text-gray-600">
                    {course.description}
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

export default Courses;
