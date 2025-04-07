/**
 * AboutMentor Component
 *
 * Displays information about the mentorship program and how to get involved.
 *
 * @component
 * @returns {JSX.Element} The rendered AboutMentor component
 */

import React from "react";
import NavHeader from "/src/components/NavHeader.jsx";
import Footer from "/src/components/Footer.jsx";

const AboutMentor = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="absolute top-0 left-0 w-full z-10">
        <NavHeader />
      </div>
      <main className="flex-grow relative pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="font-['Roboto'] font-bold text-4xl text-gray-900 mb-12 text-center">
            Mentorship Program
          </h1>
          <p className="font-['Roboto'] text-gray-600 text-center">
            Content about our mentorship program and how to get involved coming
            soon...
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutMentor;
