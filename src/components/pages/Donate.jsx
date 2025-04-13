import React, { useState } from "react";
import NavHeader from "/src/components/NavHeader.jsx";
import Sponsors from "/src/components/Sponsors.jsx";
import Confetti from "react-confetti";

const Donate = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [confettiConfig, setConfettiConfig] = useState({
    numberOfPieces: 0,
    recycle: false,
  });

  const handleTierHover = (tier) => {
    let pieces = 0;
    switch (tier) {
      case "platinum":
        pieces = 200;
        break;
      case "gold":
        pieces = 150;
        break;
      case "silver":
        pieces = 100;
        break;
      case "bronze":
        pieces = 50;
        break;
      default:
        pieces = 0;
    }
    setConfettiConfig({ numberOfPieces: pieces, recycle: true });
    setShowConfetti(true);
  };

  const handleTierLeave = () => {
    setShowConfetti(false);
  };

  const sponsors = [
    {
      image: "/sponsors/prepEDU.png",
      name: "PrepEdu Educational Consulting",
      description:
        "PrepEdu Consulting, a premier educational consulting firm founded by Dr. Jing Jing, has supported Numberosity Academy through generous sponsorship, empowering our mission to make STEM education accessible to diverse learners.",
      link: "https://prepedu.org",
    },
    {
      image: "/sponsors/phoenix.png",
      name: "Phoenix Real Estate",
      description:
        "Phoenix Real Estate, led by the dedicated and community-focused agent Wenny, has generously sponsored Numberosity Academy, helping us expand educational opportunities and resources for students across Massachusetts.",
      link: "https://vow.mlspin.com//default.aspx?id=82372&PageType=0&PageId=524851",
    },
    {
      image: "/sponsors/diyiboston.png",
      name: "Diyi Boston",
      description:
        "Diyi Education, a trusted academic support provider for students in grades 3–12 since 2013, has supported Numberosity Academy through a generous sponsorship that furthers our mission to empower young learners of all backgrounds.",
      link: "https://diyiboston.com",
    },
  ];

  return (
    <div className="relative bg-white min-h-screen">
      {showConfetti && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            numberOfPieces={confettiConfig.numberOfPieces}
            recycle={confettiConfig.recycle}
            gravity={0.5}
            initialVelocityY={10}
            wind={0}
          />
        </div>
      )}
      <div className="absolute top-0 left-0 w-full z-10">
        <NavHeader />
      </div>
      <div className="relative pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pb-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Support Our Mission
          </h1>
          <div className="bg-blue-50 rounded-xl p-8 border border-blue-100 mb-16">
            <p className="font-['Roboto'] text-lg text-gray-700 text-center">
              Help us inspire the next generation of innovators through robotics
              and STEM education. Your support enables us to provide
              opportunities for students to learn, grow, and excel in the world
              of technology.
            </p>
          </div>

          {/* Personal Donations Section */}
          <section className="mb-12 bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Supporting Us is easy!
            </h2>
            <p className="text-gray-700 mb-6 text-center">
              Numberosity Academy is always in need of support, and we greatly
              appreciate any help you can give us.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Mail a Check
                </h3>
                <p className="text-gray-700 mb-4">
                  You may send a check (payable to Numberosity Academy) to:
                </p>
                <address className="text-gray-700 not-italic bg-gray-100 p-4 rounded-lg">
                  Numberosity Academy
                  <br />
                  28 Solomon Pierce Rd
                  <br />
                  Lexington, MA 02420
                </address>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Online Donation
                </h3>
                <div className="flex justify-center">
                  <a
                    href="https://www.paypal.com/donate/?hosted_button_id=5WTZXE9RJ9XE8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#0BA2D9] text-white px-8 py-4 mt-12 rounded-lg hover:bg-[#0A8AB9] transition-colors"
                  >
                    Donate with PayPal
                  </a>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Donate With Zelle
                </h3>
                <p className="text-gray-700 mb-4">
                  To donate using Zelle, you may pay to the account under:
                </p>
                <address className="text-gray-700 not-italic bg-gray-100 p-4 rounded-lg text-[10pt] lg:text-[12pt]">
                  numberosityacademy@gmail.com
                </address>
              </div>
            </div>
          </section>

          {/* Corporate Sponsorship Section */}
          <section className="mb-0">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Sponsor Numberosity
            </h2>
            <p className="text-xl text-gray-600 text-center mb-8">
              We Appreciate Your Support!
            </p>

            <div className="bg-gray-50 rounded-2xl p-8 mb-12">
              <p className="text-gray-700 mb-6">
                You may be able to utilize your company's matching policy to
                double your supporting power. Numberosity Academy is a 501(c)3
                non-profit organization and your donation is tax deductible. Our
                non-profit tax ID (EIN) is #93-4759884
              </p>
              <p className="text-gray-700 mb-6">
                Partnering with Numerosity Academy helps us bring STEM and
                robotics opportunities to K-12 students, nurturing an interest
                in Science, Technology, Engineering, and Math. Support from
                individuals and companies like yours allows us to offer
                meaningful technical experiences to students, equipping them
                with skills they can use in the future. Donations help us cover
                the costs of robotic parts, event registration fees, equipment,
                uniforms, and shipping expenses, as well as supporting community
                service projects, summer camps, and STEM programs for children
                with special needs. Through these efforts, we're able to reach
                more students, share STEM learning within our communities, and
                ensure that all students, including those with special needs,
                from different backgrounds, have the chance to explore and enjoy
                STEM.
              </p>
              <p className="text-gray-700">
                If you would like to become a corporate or individual sponsor,
                please contact us at{" "}
                <a
                  href="mailto:numberosityacademy@gmail.com"
                  className="text-[#0BA2D9] hover:underline"
                >
                  numberosityacademy@gmail.com
                </a>
                . Sponsorship can be made at any level.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                Sponsorship Tiers and Donations
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div
                  className="bg-gradient-to-br from-gray-100 to-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-t-4 border-[#0BA2D9]"
                  onMouseEnter={() => handleTierHover("platinum")}
                  onMouseLeave={handleTierLeave}
                >
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                    Platinum ($5000+)
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 text-[#0BA2D9] mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Sponsor logo on robot
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 text-[#0BA2D9] mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Event invitations
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 text-[#0BA2D9] mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Prominent logo on materials
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 text-[#0BA2D9] mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Large logo on all materials
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 text-[#0BA2D9] mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Quarterly updates
                    </li>
                  </ul>
                </div>

                <div
                  className="bg-gradient-to-br from-gray-100 to-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-t-4 border-yellow-500"
                  onMouseEnter={() => handleTierHover("gold")}
                  onMouseLeave={handleTierLeave}
                >
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                    Gold ($3000+)
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 text-yellow-500 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Event invitations
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 text-yellow-500 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Prominent logo on materials
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 text-yellow-500 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Large logo on materials
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 text-yellow-500 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Quarterly updates
                    </li>
                  </ul>
                </div>

                <div
                  className="bg-gradient-to-br from-gray-100 to-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-t-4 border-gray-400"
                  onMouseEnter={() => handleTierHover("silver")}
                  onMouseLeave={handleTierLeave}
                >
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                    Silver ($1000+)
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 text-gray-400 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Medium logo on materials
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 text-gray-400 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Quarterly updates
                    </li>
                  </ul>
                </div>

                <div
                  className="bg-gradient-to-br from-gray-100 to-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-t-4 border-amber-700"
                  onMouseEnter={() => handleTierHover("bronze")}
                  onMouseLeave={handleTierLeave}
                >
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                    Bronze ($500+)
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 text-amber-700 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Logo on website and uniforms
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 text-amber-700 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Logo on sponsorship banner
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="max-w-4xl mx-auto bg-white rounded-lg overflow-hidden">
                <iframe
                  src="https://docs.google.com/presentation/d/e/2PACX-1vQd4tqvvgxq35UoJTdTsNM_9VX9DSLhcw8Fsro5BsCVDhV1l0gyFgygbkgugxR_vQ/embed?start=false&amp;loop=false&amp;delayms=3000"
                  className="aspect-[0.8/1] md:aspect-[0.8/1] h-[400px] md:h-[600px] lg:h-[800px] mx-auto"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            </div>
            <Sponsors sponsors={sponsors} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Donate;
