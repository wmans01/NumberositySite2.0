import React from "react";
import NavHeader from "/src/components/NavHeader.jsx";

const Join = () => {
  return (
    <div className="relative bg-white min-h-screen">
      <div className="absolute top-0 left-0 w-full z-10">
        <NavHeader />
      </div>
      <div className="relative pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Join Our Community
          </h1>
          <div className="bg-blue-50 rounded-xl p-8 border border-blue-100 mb-16">
            <p className="font-['Roboto'] text-lg text-gray-700 text-center">
              Become part of our growing community of innovators and educators.
              Whether you're interested in joining our robotics teams or
              volunteering your time, there's a place for you at Numberosity
              Academy.
            </p>
          </div>

          {/* Volunteering Section */}
          <section className="mb-20 bg-gray-50 rounded-2xl p-8">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/2 space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Become a Volunteer
                  </h2>
                  <p className="text-gray-700 mb-6">
                    As a volunteer, you'll play a crucial role in supporting our
                    robotics programs and community initiatives. You'll have the
                    opportunity to mentor students, assist with events, and help
                    create an inclusive environment for learning and innovation.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Requirements
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Must be at least 16 years old</li>
                    <li>Pass a background check</li>
                    <li>Commit to at least 4 hours per month</li>
                    <li>Complete our volunteer training program</li>
                    <li>Have a passion for STEM education</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    President's Volunteer Service Award (PVSA)
                  </h3>
                  <div className="bg-white p-6 rounded-lg space-y-4">
                    <p className="text-gray-700">
                      Numberosity Academy is an official Certifying Organization
                      for the President's Volunteer Service Award since March,
                      2024. This prestigious award recognizes outstanding
                      volunteers whose service positively impacts communities.
                    </p>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        Eligibility Requirements:
                      </h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>
                          United States citizen or lawful permanent resident
                        </li>
                        <li>Must be at least five years old</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        Important Dates:
                      </h4>
                      <p className="text-gray-700">
                        Volunteer Service Hours Period: September 1 of previous
                        year – August 31 of current year (12 months)
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        How to Apply:
                      </h4>
                      <ol className="list-decimal list-inside space-y-2 text-gray-700">
                        <li>
                          Download and complete the Community Service Hour Log
                        </li>
                        <li>
                          At least 20% of hours must come from Numberosity
                          Academy
                        </li>
                        <li>
                          Submit completed forms to{" "}
                          <a href="mailto:numberosityacademy@gmail.com">
                            numberosityacademy@gmail.com
                          </a>
                        </li>
                      </ol>
                    </div>
                    <a
                      href="https://drive.google.com/file/d/18gUVGBoFGl5KWZG08OwvuwxhVf6-E6D7/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#0BA2D9] text-white px-4 py-2 rounded-lg hover:bg-[#0A8AB9] transition-colors"
                    >
                      Download Hour Log (PDF)
                    </a>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2">
                <div className="relative h-[600px] rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="/2024-volunteers.jpg"
                    alt="Volunteers working with students"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Robotics Team Section */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Join Our Robotics Team
            </h2>

            <div className="space-y-12">
              {/* Description Section */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  About Our Teams
                </h3>
                <p className="text-gray-700">
                  Our robotics teams compete in VEX Robotics competitions at
                  local, regional, and international levels. We offer
                  opportunities for students of all skill levels to learn, grow,
                  and excel in robotics and STEM fields.
                </p>
              </div>

              {/* Application Section */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Applying for the Team
                </h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    Application Process
                  </h4>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    <li>Submit an online application form</li>
                    <li>Attend an orientation session</li>
                    <li>Complete a basic skills assessment</li>
                    <li>Participate in a team interview</li>
                    <li>Begin the onboarding process</li>
                  </ol>
                  <button className="mt-6 bg-[#0BA2D9] text-white px-6 py-3 rounded-lg hover:bg-[#0A8AB9] transition-colors">
                    Start Application
                  </button>
                </div>
              </div>

              {/* What We Do Section */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  What We Do
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      Competition
                    </h4>
                    <p className="text-gray-700">
                      Participate in VEX Robotics competitions, developing
                      robots that can complete complex tasks and challenges.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      Community Outreach
                    </h4>
                    <p className="text-gray-700">
                      Engage with the community through demonstrations,
                      workshops, and educational events.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      Innovation
                    </h4>
                    <p className="text-gray-700">
                      Design and build innovative solutions to real-world
                      problems using robotics technology.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      Teamwork
                    </h4>
                    <p className="text-gray-700">
                      Collaborate with team members to develop strategies, solve
                      problems, and achieve common goals.
                    </p>
                  </div>
                </div>
              </div>

              {/* What You Can Learn Section */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  What You Can Learn
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      Technical Skills
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Robot design and construction</li>
                      <li>Programming and automation</li>
                      <li>CAD and 3D modeling</li>
                      <li>Electronics and wiring</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      Soft Skills
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Teamwork and collaboration</li>
                      <li>Problem-solving</li>
                      <li>Project management</li>
                      <li>Public speaking</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      Professional Development
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Resume building</li>
                      <li>Networking opportunities</li>
                      <li>Leadership skills</li>
                      <li>Industry connections</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* WeChat Section */}
          <section className="mt-20 bg-gray-50 rounded-2xl p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2 space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900">
                  Join Our WeChat Community
                </h2>
                <p className="text-gray-700">
                  Stay connected with our community through WeChat! Scan the QR
                  code to join our group and get updates about:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Upcoming events and workshops</li>
                  <li>Team announcements and news</li>
                  <li>Volunteer opportunities</li>
                  <li>Community discussions</li>
                </ul>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <img
                    src="/current_weChat_QR.png"
                    alt="WeChat QR Code"
                    className="w-64 h-64 object-contain"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Join;
