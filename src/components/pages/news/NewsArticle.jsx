import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import NavHeader from "/src/components/NavHeader.jsx";

const NewsArticle = () => {
  const { articleId } = useParams();
  const [selectedMedia, setSelectedMedia] = useState(null);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [articleId]);

  // Helper function to get YouTube thumbnail URL
  const getYouTubeThumbnail = (url) => {
    const videoId = url.split("/embed/")[1];
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  // This would typically come from an API or database
  const articles = {
    "google-award": {
      title:
        "8889A – Proud Recipient of the VEX Google Community Challenge Award",
      description: `"Doing this alongside competing as one of the best teams in the world is crazy."
— Killer_Instinct_Robotics

"8889A has been an amazing inspiration to many and a great member of the VEX community."
— madisoglrobotics`,
      coverImage: "/src/assets/news/google-award-cover.png",
      date: "March 16, 2025",
      content: `These comments, shared on 8889A's YouTube channel, reflect something deeper than trophies or rankings—they're a testament to the team's lasting impact on the VEX community.

While 8889A has competed fiercely on the global stage, they've never lost sight of the bigger picture. Over the past few years, the team has committed themselves to outreach, education, and inclusion—making STEM more accessible and inspiring the next generation of innovators. Some highlights include:

• Launching a summer camp to introduce younger students to VEX and STEM concepts in a hands-on, engaging environment.

• Creating the RoboLight program, an outreach initiative designed to spark curiosity in underserved communities.

• Hosting RoboBridge, a STEAM-focused program tailored to help children with special needs explore robotics through inclusive, personalized experiences.

• Expanding their nonprofit, growing from a 4-member team into a full-fledged VEX club with five active teams and a diverse membership.

• Volunteering at local VEX events, giving back to the competition that helped shape their journey.

Their hard work and dedication recently earned them the prestigious GOOGLE Community Award—a powerful recognition of their efforts both on and off the field.

For 8889A, VEX isn't just an extracurricular. It's a platform to lead, inspire, and build a better future through STEM. As the team continues to grow, so does their impact—and their journey is far from over. 🚀💡`,
      gallery: [
        {
          type: "video",
          url: "https://www.youtube.com/embed/DNOUIqcYSa0",
          caption: "Video that won the award",
        },
      ],
    },
    "clean-sweep": {
      title: "A Clean Sweep! 8889 Teams Punch Tickets to World Championship",
      description: "All our teams qualify for the World Championship.",
      coverImage: "/src/assets/news/clean-sweep-cover.jpg",
      date: "February 15, 2025",
      content: `📅 February 15, 2025 – 8889C Qualifies for the VEX World Championship!
We're thrilled to announce that 8889C has officially qualified for the VEX World Championship! With an impressive 98% skills score, our youngest team has proven themselves among the best—earning this honor in their very first year of VEX. What an incredible debut!

📅 February 23-24, 2025 – A Massive Weekend for Numberosity Academy!
At the Massachusetts Regional Championships, three more teams—8889B, 8889S, and 8889X—secured their tickets to Dallas by finishing among the top contenders. Their performance showcases the depth of talent and determination across our club.

Additional Highlights from the Event:
🏆 8889A – Skills Champion
🔧 8889X – Build Award Winner
🌍 8889A – Sets the VEX AI Skills World Record!

As a student-led organization, these victories reflect more than just competition—they highlight the months of hard work, late nights, and unwavering dedication each team member has poured into this season.

Let's give a huge round of applause to every single team for their accomplishments, and for lifting each other up every step of the way. All roads now lead to Dallas, May 2025—and we couldn't be more excited. 🎉🚀`,
      gallery: [
        {
          type: "image",
          url: "/src/assets/news/clean-sweep-1.jpg",
          caption: "8889X Build award",
        },
        {
          type: "image",
          url: "/src/assets/news/clean-sweep-2.jpg",
          caption: "8889A at the skills field",
        },
        {
          type: "image",
          url: "/src/assets/news/clean-sweep-3.jpg",
          caption: "8889A Skills champion",
        },
      ],
    },
    "launch-sig": {
      title: "Hard Work Pays Off at the LAUNCH Signature Event!",
      description:
        "From Lexington, MA to Cleveland, OH—two cities, the same endless snowfall. But no amount of snow could cool down our fire for robotics!",
      coverImage: "/src/assets/news/launch-sig-cover.jpg",
      date: "February 1, 2025",
      content: `This year, three Numberosity Academy teams—8889A, 8889B, and 8889S—traveled to Cleveland, Ohio to compete at the LAUNCH Signature Event. Last season, only 8889A attended, making an unforgettable run as Tournament Finalists alongside powerhouse team Boogie Woogie, who held the Skills World Record at the time.

This time, 8889A returned to continue their legacy, while 8889B and 8889S stepped up to the plate, determined to make their own mark on one of the most competitive stages in VEX.

Hosted by Team 2011, one of the top-ranked VEX programs in the world and Division Champions at the 2024 VEX World Championship, LAUNCH brought together elite teams like Overclocked, Boogie Woogie, Full Circle, and Run It Back. The stakes were high—but so was the energy.

Despite a tough start and a string of early losses that placed them #27 in rankings, 8889A didn't back down. They came roaring back, clinching the Skills Champion title and catching the attention of 2011D Dopamine, who chose them as an alliance partner for the elimination rounds.

In the finals, facing off against the formidable duo of Boogie Woogie and Full Circle, the underdogs rose to the occasion. With a perfect blend of strategy and robot reliability, 8889A and Dopamine emerged victorious as Tournament Champions, punching their ticket to the 2025 VEX World Championship in Dallas!

But the celebration didn't end there:

    8889B and 8889S, both first-timers at a Signature Event, made it into the elimination rounds and gained invaluable experience competing among the world's best.

We're beyond proud of all three teams for representing Numberosity Academy with resilience, sportsmanship, and heart. A special shoutout goes to our coach and chaperones, whose time and support made this incredible journey possible.

With LAUNCH behind us, all teams are fired up to continue their VEX journey—aiming higher and pushing harder toward the challenges ahead. 🚀💪`,
      gallery: [
        {
          type: "video",
          url: "https://www.youtube.com/embed/sCLrrza61Zc",
          caption: "Our video recap of the event",
        },
        {
          type: "image",
          url: "/src/assets/news/launch-sig-1.jpg",
          caption: "Tournament Champions",
        },
        {
          type: "image",
          url: "/src/assets/news/launch-sig-2.jpg",
          caption: "Skills Champion",
        },
        {
          type: "image",
          url: "/src/assets/news/launch-sig-3.jpg",
          caption: "8889S at the airport",
        },
        {
          type: "image",
          url: "/src/assets/news/launch-sig-4.jpg",
          caption: "8889S at the practice field",
        },
        {
          type: "image",
          url: "/src/assets/news/launch-sig-5.jpg",
          caption: "8889B at the pits",
        },
        {
          type: "image",
          url: "/src/assets/news/launch-sig-6.jpg",
          caption: "8889S at the competition field",
        },
        {
          type: "image",
          url: "/src/assets/news/launch-sig-7.jpg",
          caption: "Alliance selection",
        },
        {
          type: "image",
          url: "/src/assets/news/launch-sig-8.jpg",
          caption: "8889S getting ready for a match",
        },
        {
          type: "image",
          url: "/src/assets/news/launch-sig-9.jpg",
          caption: "8889B at the competition field",
        },
      ],
    },
    "gateway-to-west": {
      title: "8889C 98%'s 1st Signature Event – Gateway to the West!",
      description: "Team 8889C attends their first signature event.",
      coverImage: "/src/assets/news/gateway-to-west-cover.jpg",
      date: "January 25, 2025",
      content: `Our youngest middle school team, 8889C, kicked off their Signature Event journey in 2025. This was their first time traveling far from home to compete. The youngest team member, Mason, is only in 6th grade, yet the team held their own against experienced competitors throughout the intense two-day schedule.

In the qualification rounds, 8889C ranked #24 with 6 wins and 4 losses. They were fortunate to be picked by 13697H Stakehouse, earning a spot in the elimination rounds. Though 8889C fell short in the first round, this experience was a valuable stepping stone, setting the foundation for their growth and future success.`,
      gallery: [
        {
          type: "image",
          url: "/src/assets/news/gateway-to-west-1.jpg",
          caption: "8889C at the competition field",
        },
        {
          type: "image",
          url: "/src/assets/news/gateway-to-west-2.jpg",
          caption: "8889C working on their robot",
        },
        {
          type: "image",
          url: "/src/assets/news/gateway-to-west-3.jpg",
          caption: "8889C getting interviewed",
        },
        {
          type: "image",
          url: "/src/assets/news/gateway-to-west-4.jpg",
          caption: "8889C at the airport",
        },
        {
          type: "image",
          url: "/src/assets/news/gateway-to-west-5.jpg",
          caption: "Logan coding on the practice field",
        },
        {
          type: "image",
          url: "/src/assets/news/gateway-to-west-6.jpg",
          caption: "Opening ceremony",
        },
      ],
    },
    "killingly-robotics": {
      title: "Killingly Robotics HS 2nd Annual V5RC – High Stakes Qualifier",
      description:
        "8889A and 8889C compete in the high-stakes qualifier at Killingly Robotics.",
      coverImage: "/src/assets/news/killingly-robotics-cover.jpg",
      date: "January 11, 2025",
      content: `January 11, 2025 – At the only event we attended in Connecticut this season, Numberosity Academy made it count—bringing home the Triple Crown!

8889A dominated the competition, taking home all three of the event's top honors:

    🏆 Tournament Champions

    🧠 Excellence Award

    🤖 Skills Champion

It was a day full of teamwork, high-level performance, and unforgettable moments. We're proud of our teams for showing up strong and making the most of every opportunity—proving once again that it's not about how many events you attend, but how you show up when it matters.`,
      gallery: [
        {
          type: "image",
          url: "/src/assets/news/killingly-robotics-1.jpg",
          caption: "Skills Champion",
        },
        {
          type: "image",
          url: "/src/assets/news/killingly-robotics-2.jpg",
          caption: "8889A and their alliance partner 4478B Blizzard",
        },
        {
          type: "image",
          url: "/src/assets/news/killingly-robotics-3.jpg",
          caption: "Excellence Award",
        },
      ],
    },
    "robobridge-4": {
      title: "Continuing the Journey: RoboBridge Section 4",
      description:
        "The fourth session of RoboBridge continues to make an impact in our community.",
      coverImage: "/src/assets/news/robobridge4-cover.png",
      date: "January 10, 2025",
      content: `RoboBridge Reaches Session #4!
We're excited to share that the RoboBridge program has officially reached its fourth session—a major milestone as we plan for its long-term success and growth!

Even though this session was held on a Friday evening, the energy was electric as we welcomed both new participants and familiar faces who've been with us since the beginning. Each session continues to build on our mission: making STEM and robotics more inclusive, engaging, and accessible for children with special needs.

We're incredibly proud of the progress so far and can't wait to see how RoboBridge continues to grow and evolve in the months ahead!`,
      gallery: [
        {
          type: "image",
          url: "/src/assets/news/robobridge4-1.jpg",
          caption: "Jeremy",
        },
        {
          type: "image",
          url: "/src/assets/news/robobridge4-2.jpg",
          caption: "The field",
        },
        {
          type: "image",
          url: "/src/assets/news/robobridge4-3.jpg",
          caption: "Building a robot",
        },
        {
          type: "image",
          url: "/src/assets/news/robobridge4-4.jpg",
          caption: "Luke",
        },
        {
          type: "image",
          url: "/src/assets/news/robobridge4-5.jpg",
          caption: "Jason and Ryan",
        },
      ],
    },
    "teams-face-off": {
      title: "8889 Teams Face Off in the Finals!",
      description:
        "An exciting showdown between our teams in the championship finals.",
      coverImage: "/src/assets/news/teams-face-off-cover.jpg",
      date: "January 4, 2025",
      content: `📅 January 4, 2025 – Three of our 8889 teams kicked off the new year with an unforgettable showing at the High Stakes Winter Classic at Mashpee Middle High School. The day was filled with strategy, excitement, and huge accomplishments for all involved!

The most thrilling moment came during the finals, when 8889B, allied with 8889S, faced off against 8889X and their partner, 20203Z Robo Turtle. For many of our team members, it was their first time competing against fellow clubmates in an official match—turning friendly rivalry into a valuable opportunity for strategic growth.

After a nail-biting match, 8889B and 8889S emerged victorious, securing 8889S a spot at the Massachusetts Regional Championship! But the success didn't stop there—8889S also brought home the Excellence Award, earning a second qualification that extended to 8889X, who then officially secured their Regionals ticket as well.

Despite finishing as finalists, 8889X—made up entirely of LHS seniors—earned the No. 1 Skills ranking of the day, showcasing their consistency, precision, and leadership in every match.

This event was especially meaningful for members competing in their first-ever tournament. The atmosphere of camaraderie, teamwork, and shared celebration made the experience all the more memorable.

With this milestone, we're proud to announce that all five 8889 teams are now officially qualified for the Massachusetts Regional Championship in February 2025!

With Regionals just around the corner, our teams are already setting their sights on the next big challenge: the 2025 VEX World Championship. Through hard work, innovation, and collaboration, we know they'll continue pushing boundaries and reaching new heights.

Here's to the incredible achievements of our teams—and the exciting journey ahead! 🚀🤖🎉`,
      gallery: [
        {
          type: "image",
          url: "/src/assets/news/teams-face-off-1.jpg",
          caption: "8889B and 8889S",
        },
        {
          type: "image",
          url: "/src/assets/news/teams-face-off-2.jpg",
          caption: "8889S Excellence Award",
        },
      ],
    },
    "robobridge-christmas": {
      title: "Building Holiday Joy: RoboBridge Christmas Special",
      description:
        "A special holiday edition of RoboBridge brings joy and learning to our students.",
      coverImage: "/src/assets/news/robobridge-christmas-cover.jpg",
      date: "December 23, 2024",
      content: `Jingle bells, jingle bells, jingle all the way… Christmas cheer was in the air as RoboBridge celebrated its third session with a holiday twist that made it extra meaningful and memorable!

On this joyful day, 18 special guests and 20 amazing volunteers gathered in Room 139 at Lexington Center for an experience filled with creativity, laughter, and connection. Each student was paired with at least one dedicated volunteer to help guide them through an exciting hands-on robotics activity using VEX GO education kits.

This time, we introduced something new—a full VEX GO field—allowing students to test and refine their creations just like real roboticists! With step-by-step support and encouragement, they explored engineering and programming concepts, building custom bots and writing simple code to bring their designs to life.

Meanwhile, the art section was buzzing with energy, led by Allison Xu, a member of our very own 8889A team. With her infectious enthusiasm and kind heart, Allison guided students through drawing activities and creative play. Even parents got involved, joining in to craft some truly unique and colorful artwork alongside their children.

To top it all off, thanks to generous donations and community support, we prepared 18 personalized gift bags for our guests. As the day came to a close, Jason Ma donned the role of a young Santa, handing out presents and spreading smiles that lit up the entire room.

RoboBridge isn't just an event—it's a mission. A mission to bring joy, spark curiosity, and create an inclusive space where every child feels seen, celebrated, and inspired. These moments aren't just meaningful for our students—they're transformative for our volunteers, too.

We look forward to many more sessions of connection, discovery, and heart. Here's to building more than just robots—here's to building joy, confidence, and community. ❤️🎁`,
      gallery: [
        {
          type: "image",
          url: "/src/assets/news/robobridge-christmas-1.png",
          caption: "Cluster 1",
        },
        {
          type: "image",
          url: "/src/assets/news/robobridge-christmas-2.png",
          caption: "Cluster 2",
        },
      ],
    },
    riverbots: {
      title: "The RiverBots VRC High Stakes Signature Event",
      description:
        "Our teams compete in the prestigious RiverBots VRC Signature Event.",
      coverImage: "/src/assets/news/riverbots-cover.jpg",
      date: "December 8, 2024",
      content: `The RiverBots III V5RC High Stakes Signature Event marked the third national Signature Event that 8889A attended during the 2023–2025 VEX season—and what a memorable experience it was!

Held at the River Raisin National Battlefield Park, the only VEX Signature Event hosted at a U.S. National Park, the venue was steeped in history and natural beauty. The park commemorates the Battle of Frenchtown and the War of 1812, and its proximity to Lake Erie added a scenic touch to an already unforgettable trip.

The event brought together 64 elite teams from across the U.S. and Canada, including some of the top-ranked teams in the world. It was a fantastic opportunity for 8889A to connect, collaborate, and compete at the highest level.

Split into two divisions—Winchester and Protector—the tournament was filled with fierce matchups. Team 8889A, paired with 74947K Fenix – Karma, battled their way to the semi-finals of the Winchester Division. There, they faced off against their friends Team Holy Cow from Ontario, Canada, in a high-energy showdown that came down to just a few points.

While we didn't advance to the finals, the event was about more than just the scoreboard. We had the opportunity to speak with university teams, learning about their design processes, strategies, and innovations. These inspiring conversations sparked new ideas that may shape our own future robots!

We were also featured in an interview by Pits and Parts, marking our first spotlight since the WPI WAVE event—be sure to check it out!

This trip wasn't just another competition—it was a milestone in our season and a moment of growth. From new friendships to fresh inspiration, RiverBots reminded us of why we love VEX: the challenge, the collaboration, and the never-ending journey of improvement.

Stay tuned—8889A has more to come. 🚀`,
      gallery: [
        {
          type: "video",
          url: "https://www.youtube.com/embed/SZ1s24I9O34",
          caption: "Our video recap of the event",
        },
        {
          type: "image",
          url: "/src/assets/news/riverbots-1.jpg",
          caption: "8889A watching skills matches",
        },
        {
          type: "image",
          url: "/src/assets/news/riverbots-2.jpg",
          caption: "Peter talking to Purdue UniversityBLRS team members",
        },
        {
          type: "image",
          url: "/src/assets/news/riverbots-3.jpg",
          caption: "team picture",
        },
        {
          type: "video",
          url: "https://www.youtube.com/embed/KEeRMLanVO0",
          caption: "8889A Pits & Parts Interview",
        },
      ],
    },
    "robobridge-2": {
      title:
        "RoboBridge - Empowering Special Needs Students Through STEAM and Robotics (Session 2)",
      description:
        "The second session of RoboBridge continues to make an impact in our community.",
      coverImage: "/src/assets/news/robobridge2-cover.jpg",
      date: "November 15, 2024",
      content: `In our second session of the RoboBridge program, we made a purposeful shift from the variety of STEAM games offered in Session 1—where students explored different subjects to discover their interests—to a more focused approach using VEX GO learning kits. This transition allowed us to dive deeper into robotics and center our learning around the engaging and interactive VEX GO game.

To provide the best support for our special needs students, we adopted a one-to-one teaching model, pairing each child with a dedicated instructor. This approach, developed with expert guidance from I Can Fly, created a nurturing and focused learning environment where each student could thrive.

The results have been truly inspiring. Many of our students successfully built functional VEX GO carts, coded simple programs, and even drove their creations across the field with confidence and excitement. The joy on their faces—and the sense of accomplishment in their work—was a powerful reminder of why this program matters.

Our young instructors were equally moved. Seeing their students light up with curiosity and pride left a lasting impact and strengthened their passion for giving back.

Looking ahead, we're thrilled to announce our third RoboBridge session on December 21st—a Christmas Robotics Party to celebrate the season with our special students. With creativity, laughter, and learning in the air, we know it will be another unforgettable and meaningful experience for all involved.`,
      gallery: [
        {
          type: "image",
          url: "/src/assets/news/robobridge2-1.jpg",
          caption: "Robobridge 2",
        },
      ],
    },
    "regional-nationals": {
      title: "Three 8889 Teams Shine at Regional and National Competitions",
      description:
        "Our teams achieve remarkable success at both regional and national levels.",
      coverImage: "/src/assets/news/regional-nationals-cover.jpg",
      date: "November 30, 2024",
      content: `Big Win Last Year, Big Lesson This Year — Team 8889A
After being unexpectedly removed from the WAVE waitlist just days before the event, Team 8889A dove straight into preparation for their debut at a Signature Event. Despite limited time to fine-tune their robot, they debuted a brand-new design and a fresh autonomous routine, pushing the boundaries of their performance.

The team worked tirelessly to boost their robot's speed and tackle more complex autonomous tasks—so much so that their robot even followed them into their dreams! However, despite their best efforts, 8889A ranked 34th in the tournament. But there was a silver lining. They were selected by the #1 seed 10102A from Vinic Robotics, a team with personal significance to 8889A (they had once shared the same team number in middle school). Together, they advanced to the second round of eliminations, where they faced off against strong Texas teams who went on to become finalists.

While the tournament didn't end as they hoped, the team has reflected on their performance and remains confident in their new robot's potential. This setback has only motivated them further, and they're more determined than ever to improve and continue pushing the limits of their design.

Congratulations to Void and Zero Gravity for winning the tournament championship and qualifying for the 2025 VEX World Championship!

First Match, First Big Win — Team 8889C
In a truly exciting turn of events, 8889C, our middle school team, made a spectacular debut at Walsh Middle School in Framingham, MA. The team, led by James (a former hockey player with incredible driving skills), made their presence known by securing a spot as finalists in the middle school division.

This first big win marks an unforgettable moment for 8889C and sets a strong foundation for their journey in VEX Robotics. Their success has inspired the entire team to continue pushing forward as they strive for even greater accomplishments.

First Award, First Step Forward — Team 8889B
Finally, 8889B, a newly formed team consisting of just two members, had their first competitive outing this weekend and came away with a remarkable achievement: the Creative Award at a local event!

For a team just getting started, this is a fantastic milestone, and we are incredibly proud of their ingenuity and teamwork. With their talent and drive, we look forward to seeing how they continue to grow and build toward the World Championship.

This weekend's events were filled with incredible moments, from big wins to valuable lessons learned. We are beyond proud of our teams for their dedication, hard work, and passion. As they continue to grow and develop their skills, we are excited to see how they will take on the challenges ahead.

Keep building, keep learning, and keep having fun! We're just getting started!`,
      gallery: [
        {
          type: "image",
          url: "/src/assets/news/regional-nationals-1.jpg",
          caption: "8889C getting inspected",
        },
        {
          type: "image",
          url: "/src/assets/news/regional-nationals-2.jpg",
          caption: "8889C on the queueing table",
        },
        {
          type: "image",
          url: "/src/assets/news/regional-nationals-3.jpg",
          caption: "8889C at the practice field",
        },
        {
          type: "image",
          url: "/src/assets/news/regional-nationals-4.jpg",
          caption: "8889B at the pits",
        },
        {
          type: "image",
          url: "/src/assets/news/regional-nationals-5.jpg",
          caption: "8889B winning design award",
        },
        {
          type: "image",
          url: "/src/assets/news/regional-nationals-6.jpg",
          caption: "8889A's robot at the WPI venue",
        },
        {
          type: "image",
          url: "/src/assets/news/regional-nationals-7.jpg",
          caption: "8889A at the practice field",
        },
        {
          type: "image",
          url: "/src/assets/news/regional-nationals-8.jpg",
          caption: "The practice fields",
        },
      ],
    },
    "north-andover": {
      title:
        "Numberosity Academy's Teams Shine at North Andover VEX Robotics Event",
      description:
        "Our teams demonstrate excellence at the North Andover VEX Robotics competition.",
      coverImage: "/src/assets/news/north-andover-cover.jpg",
      date: "November 23, 2024",
      content: `Numberosity Academy's VEX Robotics teams recently participated in a pivotal competition at North Andover High School, a qualifier for the Massachusetts Regional Event, leading to the prestigious VEX World Championship in Dallas, TX, in April 2025.

Team 8889B had already secured their spot at the Regional Event before this competition, but they didn't rest on their laurels. The team showcased incredible creativity and innovation, earning the Innovate Award for their impressive problem-solving skills.

Meanwhile, Team 8889A delivered an extraordinary performance, achieving a Triple Crown by winning the Tournament Champion, Skills Champion, and Excellence Award!

In a thrilling alliance with 2602K Hopkinetics KryptoKnights, the 2024 VEX IQ World Champion, Team 8889A clinched the Tournament Champion title in a nail-biting 3-point victory. We extend our heartfelt thanks to Hopkinetics KryptoKnights for selecting us as their alliance partner, and we look forward to future collaborations.

A special shoutout goes to Allison Xu, whose meticulous work on the team's engineering notebook played a crucial role in securing the Excellence Award. The notebook perfectly captured our team's dedication and the comprehensive design and research process.

Congratulations to all our team members for their remarkable achievements! With this momentum, we are excited to continue working toward even greater milestones as we set our sights on the 2025 World Championship.`,
      gallery: [
        {
          type: "video",
          url: "https://www.youtube.com/embed/bpuME6tyITM",
          caption: "Our video recap of the event",
        },
        {
          type: "image",
          url: "/src/assets/news/north-andover-2.jpg",
          caption: "8889A Excellence Award",
        },
        {
          type: "image",
          url: "/src/assets/news/north-andover-3.jpg",
          caption: "8889B with their certificate",
        },
      ],
    },
    "belmont-hill": {
      title: "Belmont Hill V5RC Blended High Stakes Tournament",
      description:
        "Our teams compete in the high-stakes tournament at Belmont Hill.",
      coverImage: "/src/assets/news/belmont-hill-cover.jpg",
      date: "November 2, 2024",
      content: `Congratulations to Team 8889B on their impressive victory at the Belmont Hill V5RC Blended High Stakes Tournament on November 2nd, 2024! This remarkable win not only secured the Tournament Champion title but also made 8889B one of the first teams in Massachusetts to qualify for the Regional Championship.

This victory is particularly special as it marks the first trophy won by the new team, which was formed just last August. Guided by senior members from 8889A, the young and energetic team members have gained invaluable insights into the world of VEX Robotics—insights that go far beyond the trophy.

Their dedication and teamwork continue to pave the way for more success, and we can't wait to see where their journey takes them. Congratulations once again to Team 8889B on this remarkable achievement!`,
      gallery: [
        {
          type: "image",
          url: "/src/assets/news/belmont-hill-1.jpg",
          caption: "8889B's robot with their alliance partner, 2602E",
        },
        {
          type: "image",
          url: "/src/assets/news/belmont-hill-2.jpg",
          caption: "Giant robosaurus",
        },
      ],
    },
    "robobridge-1": {
      title:
        "RoboBridge - Empowering Special Needs Students Through STEAM and Robotics (Session 1)",
      description:
        "The first session of RoboBridge brings robotics education to special needs students.",
      coverImage: "/src/assets/news/robobridge1-cover.jpg",
      date: "October 25, 2024",
      content: `On Saturday, November 9th, 2024, we successfully hosted the inaugural session of RoboBridge, our biweekly program designed to provide adaptive robotics education and creative activities for students with special needs. The event was attended by 10 students, each paired with a dedicated volunteer teacher for one-on-one guidance, making it a truly personalized learning experience.
Activities and Stations

The session featured a variety of engaging and enriching stations:

    Logic Games: Strengthening problem-solving and critical thinking skills.

    Digital Arts: Unleashing creativity through technology-based art tools.

    Oil Painting: Exploring traditional art forms in a calming, hands-on activity.

    LEGO EV3 and VEX Robotics (GO & IQ): Introducing students to building and programming robotics systems.

    Coding Games: Developing foundational programming skills through interactive play.

Each station was carefully designed to cater to individual needs and interests, ensuring an inclusive and stimulating environment for all participants.
Positive Feedback from Parents and Volunteers

The event received glowing feedback from parents of participating students, including:

    Parents were thrilled with the opportunity for their children to explore robotics-related activities, many of which they had never experienced before.

    Students thoroughly enjoyed the program, expressing excitement and curiosity throughout the day.

    Volunteers were praised for their patience and support, creating a welcoming and positive atmosphere for everyone involved.

    Many parents expressed enthusiasm for future classes and were eager to see their children continue learning and exploring through RoboBridge.

Looking Ahead

A heartfelt thank you to our 10 dedicated volunteers, whose efforts and compassion made this event a success. We are excited to continue hosting future sessions and fostering a love for learning, creativity, and robotics among students with special needs. Together, we are bridging gaps and building brighter futures!`,
      gallery: [
        {
          type: "image",
          url: "/src/assets/news/robobridge1-1.jpg",
          caption: "Robobridge 1",
        },
      ],
    },
    "mcc-robotics": {
      title: "MCC Robotics VEX V5 Robotics Competition",
      description:
        "Our teams showcase their skills at the MCC Robotics VEX V5 competition.",
      coverImage: "/src/assets/news/mcc-robotics-cover.jpg",
      date: "October 19, 2024",
      content: `Team 8889A Triumphs at the MCC Robotics VEX V5 Kickoff

On October 11, 2024, Team 8889A competed at the MCC Robotics VEX V5 Kickoff in Manchester, NH, where they achieved an incredible milestone by winning a Triple Crown—securing the Tournament Champion, Skills Champion, and Excellence Awards. The team was proud to compete alongside 74947K Fenix – Karma from Cowansville, Quebec, Canada, showcasing their technical expertise, strategic thinking, and exemplary teamwork in a series of high-stakes matches.
A Celebration of Global Collaboration

Beyond the excitement of the competition, the event provided an invaluable opportunity for cultural exchange and collaboration. Team 8889A had the chance to connect with robotics enthusiasts from across borders, sharing insights about robot design, programming, and innovation. The international camaraderie fostered at the event further emphasized the global community within the VEX Robotics family.
Reflecting on a Meaningful Experience

The journey to Manchester wasn't just about the victories—it was about the learning, the laughter, and the memories made along the way. Team 8889A not only honed their skills but also celebrated the spirit of competition and cooperation that defines the VEX Robotics community.

As they look ahead, the team is excited to build on this experience and continue to grow, innovate, and inspire others through robotics.`,
      gallery: [
        {
          type: "image",
          url: "/src/assets/news/mcc-robotics-1.jpg",
          caption: "8889A with their alliance partner, 74947K Fenix – Karma",
        },
      ],
    },
    "mass-robotics-block-party": {
      title: "Mass Robotics Block Party",
      description:
        "Join us at the Mass Robotics Block Party for an exciting showcase of robotics innovation.",
      coverImage: "/src/assets/news/mass-robotics-block-cover.jpg",
      date: "September 28, 2024",
      content: `Numberosity Robotics Teams Shine at MassRobotics Block Party

On September 28th, Numberosity Robotics teams 8889A and 8889B had the exciting opportunity to participate in the MassRobotics Block Party at Seaport in Boston, MA. As the first VEX robotics teams ever invited to this prestigious event, our team members were honored and thrilled to attend.

The event brought together university robotics teams, FTC, FRC, and VEX teams, along with some of the most innovative robotics companies in Massachusetts. The festivities kicked off with a robot parade, where our teams proudly showcased their VEX robots alongside cutting-edge creations from other participants. The exhibition lasted for four hours, offering an excellent platform for showcasing robots, sharing insights, and engaging with robotics professionals.
A Unique Learning Experience

This event provided an incredible learning experience for all involved. Our teams had the chance to interact with industry leaders, gain knowledge about the latest advancements in robotics, and collaborate with fellow participants. The energy and innovation on display were contagious, leaving everyone with fresh ideas and excitement for the future of robotics.
Looking Forward to the Future

As the event concluded, 8889A and 8889B left with a renewed sense of purpose and drive. The connections made and lessons learned during the day will undoubtedly fuel our teams as they continue to innovate and contribute to the evolving field of robotics.

It was an unforgettable experience, and we're excited to see where this journey will take us next!`,
      gallery: [
        {
          type: "image",
          url: "/src/assets/news/mass-robotics-block-1.jpg",
          caption: "8889A with their robot in the parade",
        },
        {
          type: "image",
          url: "/src/assets/news/mass-robotics-block-2.jpg",
          caption: "Numberosity's booth",
        },
        {
          type: "image",
          url: "/src/assets/news/mass-robotics-block-3.jpg",
          caption: "People trying out the robots",
        },
        {
          type: "image",
          url: "/src/assets/news/mass-robotics-block-4.jpg",
          caption: "Spot the robot dog",
        },
        {
          type: "image",
          url: "/src/assets/news/mass-robotics-block-5.jpg",
          caption: "FRC Robots",
        },
        {
          type: "image",
          url: "/src/assets/news/mass-robotics-block-6.jpg",
          caption: "Representing VEX",
        },
        {
          type: "image",
          url: "/src/assets/news/mass-robotics-block-7.jpg",
          caption: "Passserbys checking out the robots",
        },
        {
          type: "image",
          url: "/src/assets/news/mass-robotics-block-8.jpg",
          caption: "8889B",
        },
        {
          type: "image",
          url: "/src/assets/news/mass-robotics-block-9.jpg",
          caption: "The event",
        },
        {
          type: "image",
          url: "/src/assets/news/mass-robotics-block-10.jpg",
          caption: "Robots on the field",
        },
      ],
    },
    "lobstah-bowl": {
      title: "The Lobstah Bowl Signature Event @Maine",
      description:
        "Our teams compete in the prestigious Lobstah Bowl Signature Event in Maine.",
      coverImage: "/src/assets/news/lobstah-bowl-cover.jpg",
      date: "September 12, 2024",
      content: `On September 12th, Numberosity Robotics teams 8889A and 8889B participated in the VEX Lobstah Bowl Signature Event, held on the campus of the University of Maine in Orono. Our teams dedicated extensive time and effort in preparation for this challenging competition, which brought together numerous teams, including participants from Canada.

The event was hosted in collaboration with the university's engineering department, giving our students the incredible opportunity to learn from the Dean of Engineering. They were inspired by the university's cutting-edge research innovations and were particularly impressed by the world's largest 3D printer, housed on the campus.
A Journey of Skill and Perseverance

After three intense days of competition, Team 8889B reached the quarterfinals, showcasing their skill and perseverance. Team 8889A went even further, advancing to the finals and achieving an impressive robot skills score of 101, which ranked them No. 1 in the United States and No. 2 globally immediately after the event.

In recognition of their outstanding performance, Team 8889A was awarded the Excellence Award, the highest honor of the competition, solidifying their position as the event's final winner.
Building Lasting Connections

Beyond the fierce competition, our teams made lasting friendships through collaboration with other participants. These connections will carry forward well beyond the event, creating a community of like-minded innovators.

To celebrate their hard work and achievements, all the winners, including the tournament champions, were invited to a special lobster dinner with event staff, members of the engineering department, and volunteer VEX team members. This thoughtful gesture made the experience even more memorable for everyone involved.
A Heartfelt Thanks

A big thanks to all our alliances, volunteers, event staff, and everyone else involved in making this event such an incredible experience. We look forward to the exciting challenges ahead!`,
      gallery: [
        {
          type: "video",
          url: "https://www.youtube.com/embed/bpuME6tyITM&",
          caption: "Our video recap of the event",
        },
        {
          type: "video",
          url: "https://www.youtube.com/embed/vlP5HywwSdQ",
          caption: "8889A and 8889B robot reveal for the event",
        },
        {
          type: "image",
          url: "/src/assets/news/lobstah-bowl-1.jpg",
          caption: "8889A Excellence Award",
        },
        {
          type: "image",
          url: "/src/assets/news/lobstah-bowl-2.jpg",
          caption: "8889A with their alliance partner, 8829C Cat-alyst",
        },
        {
          type: "image",
          url: "/src/assets/news/lobstah-bowl-3.jpg",
          caption: "8889A Skills Champion",
        },
        {
          type: "image",
          url: "/src/assets/news/lobstah-bowl-4.jpg",
          caption: "Match fields",
        },
        {
          type: "image",
          url: "/src/assets/news/lobstah-bowl-5.jpg",
          caption: "8889A at the pits",
        },
      ],
    },
    "four-students-to-four-teams": {
      title:
        "From Four Students to Four Teams: Expanding Our VEX Robotics Program",
      description:
        "Our journey from a small group of four students to a thriving program with four competitive teams.",
      coverImage: "/src/assets/news/team-expansion-cover.jpg",
      date: "September 1, 2024",
      content: `What began with just four passionate middle school students has grown into something much bigger. Over the past two years, our dedication and commitment have led to the creation of our very own nonprofit organization. We are excited to announce the expansion of our program to four VEX Robotics teams: 8889A, 8889B, 8889C, and 8889X.

Our journey from a small group of robotics enthusiasts to a thriving organization has been incredibly rewarding. Along the way, we've connected with students who share the same passion for robotics, and together, we're excited to introduce more young engineers to this field. Our mission goes beyond building and coding robots—we strive to provide students with valuable opportunities to develop practical skills that will benefit them in the future. Robotics not only enhances technical abilities but also fosters creativity, teamwork, and critical thinking, all while making a positive impact on our community.
Expanding Our Impact

To further this mission, we will be hosting more community events and working to provide underprivileged kids with the chance to explore and grow through robotics. We're committed to using our skills and resources to make a meaningful difference in the lives of aspiring young engineers.
Gratitude and Growth

We also want to extend a heartfelt thank you to our dedicated volunteers for their hard work and support. Without them, none of this would be possible. As we continue this exciting journey, we are looking forward to making an even greater impact together.

Stay tuned for more updates and opportunities to get involved!`,
      gallery: [
        {
          type: "image",
          url: "/src/assets/news/team-expansion-1.jpg",
          caption: "Image Cluster 1",
        },
        {
          type: "image",
          url: "/src/assets/news/team-expansion-2.jpg",
          caption: "Image Cluster 2",
        },
        {
          type: "image",
          url: "/src/assets/news/team-expansion-3.jpg",
          caption: "Image Cluster 3",
        },
        {
          type: "image",
          url: "/src/assets/news/team-expansion-4.jpg",
          caption: "Image Cluster 4",
        },
      ],
    },
    // Add more articles here...
  };

  const article = articles[articleId];

  if (!article) {
    return (
      <div className="relative bg-white min-h-screen">
        <div className="absolute top-0 left-0 w-full z-10">
          <NavHeader />
        </div>
        <div className="relative pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Article Not Found
            </h1>
            <Link to="/news" className="text-[#0BA2D9] hover:underline">
              Return to News
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-white min-h-screen">
      <div className="absolute top-0 left-0 w-full z-10">
        <NavHeader />
      </div>
      <div className="relative pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link
            to="/news"
            className="text-[#0BA2D9] hover:underline mb-8 inline-block"
          >
            ← Back to News
          </Link>

          <article className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
              {article.title}
            </h1>
            <div className="text-sm text-gray-500 mb-8">{article.date}</div>

            <div className="mb-12">
              <img
                src={article.coverImage}
                alt={article.title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            <div className="mb-12">
              <p className="text-xl text-gray-700 whitespace-pre-line">
                {article.description}
              </p>
            </div>

            <div className="mb-12">
              <p className="text-gray-700 whitespace-pre-line">
                {article.content}
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {article.gallery.map((item, index) => (
                  <div
                    key={index}
                    className="relative group cursor-pointer"
                    onClick={() => setSelectedMedia(item)}
                  >
                    {item.type === "image" ? (
                      <img
                        src={item.url}
                        alt={item.caption}
                        className="w-full h-48 object-cover rounded-lg shadow-md group-hover:shadow-xl transition-shadow duration-300"
                      />
                    ) : (
                      <div className="relative w-full h-48 rounded-lg shadow-md group-hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                        <img
                          src={getYouTubeThumbnail(item.url)}
                          alt={item.caption}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                          <svg
                            className="w-16 h-16 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-lg">
                      {item.caption}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* Modal for viewing media */}
      {selectedMedia && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setSelectedMedia(null)}
        >
          <div className="max-w-4xl w-full mx-4">
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              onClick={() => setSelectedMedia(null)}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {selectedMedia.type === "image" ? (
              <img
                src={selectedMedia.url}
                alt={selectedMedia.caption}
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            ) : (
              <div className="relative pb-[56.25%]">
                <iframe
                  src={selectedMedia.url}
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
            <div className="text-white text-center mt-4">
              {selectedMedia.caption}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsArticle;
