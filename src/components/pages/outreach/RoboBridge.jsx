import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import NavHeader from "/src/components/NavHeader.jsx";

const RoboBridge = () => {
  useEffect(() => {
    document.title = "RoboBridge Program | Numberosity Academy";
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
              src="/src/assets/outreach/robobridge-main.jpg"
              alt="RoboBridge Program"
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Program Description */}
          <div className="space-y-16">
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h2 className="font-['Roboto'] font-bold text-2xl text-gray-900 mb-6">
                About RoboBridge
              </h2>
              <p className="text-gray-700 mb-6">
                At Numerosity Academy, we believe that STEM education should be
                for everyone, including kids with special needs. That's why we
                started RoboBridge, a program where we use robotics to create a
                bridge for special needs children to learn, grow, and build
                important life skills while having fun. Through this program,
                we're not just teaching STEM—we're opening doors to new
                opportunities and experiences for kids who need it most.
              </p>
            </div>

            {/* How It All Began */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h2 className="font-['Roboto'] font-bold text-2xl text-gray-900 mb-6">
                How It All Began
              </h2>
              <p className="text-gray-700 mb-6">
                The idea for RoboBridge originated from our summer camp earlier
                this year. One of our participants was a boy with ADHD, and his
                mother shared insightful feedback about his learning challenges.
                Our dedicated instructors brainstormed strategies, held group
                meetings, and created a tailored plan to help him learn robotics
                in a way that suited his needs. Their efforts paid off—not only
                did the boy thrive in the program, but his mother expressed her
                heartfelt gratitude.
              </p>
              <p className="text-gray-700">
                This experience was deeply rewarding for our volunteers, who
                found it fulfilling to help special needs children learn and
                grow. It also inspired us to do more.
              </p>
            </div>

            {/* What We're Doing Now */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h2 className="font-['Roboto'] font-bold text-2xl text-gray-900 mb-6">
                What We're Doing Now
              </h2>
              <p className="text-gray-700 mb-6">
                To bring this vision to life, we partnered with our local
                nonprofit organization, I Can Fly, to create RoboBridge. The
                program provides bi-weekly workshops for special needs kids,
                focusing on both STEM education and life skills development.
                Using robotics as a tool, we aim to empower these children with
                hands-on learning experiences that are both educational and
                enjoyable.
              </p>
              <p className="text-gray-700">
                With funding from our summer camp, we've been able to purchase
                teaching materials like VEX GO learning kits and art supplies.
                These tools play a crucial role in making our workshops engaging
                and effective.
              </p>
            </div>

            {/* Our Mission */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h2 className="font-['Roboto'] font-bold text-2xl text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-gray-700 mb-6">
                Through RoboBridge, we hope to make a small but meaningful
                impact in the lives of special needs family. By fostering
                special needs kids' curiosity and confidence, we aim to create
                positive change and inspire them to reach their full potential.
              </p>
              <p className="text-gray-700 mb-8">
                Together, with the support of our community, we believe that
                every effort counts and even small actions can make a big
                difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://gofund.me/fae129e5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#0BA2D9] hover:bg-blue-700 transition-colors duration-200"
                >
                  Visit GoFundMe
                </a>
                <a
                  href="/donate"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#0BA2D9] hover:bg-blue-700 transition-colors duration-200"
                >
                  Donate Directly
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoboBridge;
