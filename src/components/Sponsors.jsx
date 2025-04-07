/**
 * Sponsors Component
 *
 * Displays sponsor information in a responsive grid layout.
 * Features:
 * - Interactive sponsor cards with hover effects
 * - Clickable links to sponsor websites
 * - Responsive grid layout (1 column on mobile, 2 on tablet, 3 on desktop)
 * - Consistent styling with the rest of the website
 *
 * @component
 * @param {Array} sponsors - Array of sponsor objects containing:
 *   @param {string} image - Path to sponsor logo
 *   @param {string} name - Sponsor company name
 *   @param {string} description - Brief description of sponsor
 *   @param {string} link - URL to sponsor's website
 * @returns {JSX.Element} The rendered Sponsors component
 */

import React from "react";

const SponsorCard = ({ image, name, description, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block">
      <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-200">
        <div className="w-48 h-48 mb-4">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain"
          />
        </div>
        <h3 className="font-['Roboto'] font-bold text-xl text-gray-900 mb-2">
          {name}
        </h3>
        <p className="font-['Roboto'] text-gray-600 text-center">
          {description}
        </p>
      </div>
    </a>
  );
};

const Sponsors = ({ sponsors }) => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-['Roboto'] font-bold text-3xl text-gray-900 mb-12 text-center">
          Our Sponsors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sponsors.map((sponsor, index) => (
            <SponsorCard
              key={index}
              image={sponsor.image}
              name={sponsor.name}
              description={sponsor.description}
              link={sponsor.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
