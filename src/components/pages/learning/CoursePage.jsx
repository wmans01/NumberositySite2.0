import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import NavHeader from "/src/components/NavHeader.jsx";

const CoursePage = () => {
  const { courseId } = useParams();
  console.log("Course ID from URL:", courseId);

  useEffect(() => {
    document.title = "Course Details | Numberosity Academy";
  }, []);

  const courseData = {
    "cad-2023": {
      title: "CAD & 3D Modeling 2023",
      caption: "This class will aim to provide an understanding of the benefits and processes of CAD, and is open to students with none or little experience in mechanics/designing. Students already familiar with CAD can still take this course, but may not find it very challenging. It will be at a relatively laid-back pace, but all class material will be shared and students should make sure they turn in homework ahead of time. For this Class, we will be using Autodesk’s Fusion 360 as a beginner CAD software in which students will write their code. ",
      category: "CAD & 3D Modeling",
      videos: [
        {
          title: "Introduction",
          url: "https://www.youtube.com/embed/TYONyCcYzak",
          caption: "Day 1 (7/25): Introduction" ,
          bullet_caption: `Introduction to CAD and F360
Download the Software
Simple Camera Movement
Creating Projects
Loading Stuff from the Internet
Joining Group Project`,
        },
        {
          title: "Day 2 (7/27): 2D Sketches",
          url: "https://www.youtube.com/embed/3LVv2QuRhes",
          caption: "Day 2 (7/27): 2D Sketches",
          bullet_caption: `Creating sketches
Sketch tools
Constraints
Trimming
Images on sketch
Circular patterns`,
        },
        {
          title: "Simple 3D Shapes",
          url: "https://www.youtube.com/embed/ksvsf8xa5OI",
          caption: "Day 3 (8/1): Simple 3D Shapes",
          bullet_caption: `Extruding
Making Holes
Fillets + Chamfers
Making construction planes`,
        },
        {
          title: "Slightly More Advanced Tools",
          url: "https://www.youtube.com/embed/yd5ZsJe-Zhk",
          caption: "Day 4 (8/3): Slightly More Advanced Tools",
          bullet_caption: `Revolving
Mirroring
Draft 
Shell 
Rib 
Split 
Face 
Scale 
Thread 
Press Pull`,
        },
        {
          title: "Assembling Things",
          url: "https://www.youtube.com/embed/qtZroGa9r6c",
          caption: "Day 5 (8/8): Assembling Things",
          bullet_caption: `Joints
Gears and stuff
Measuring
Equations`,
        },
        {
          title: "Rendering + Appearances",
          url: "https://www.youtube.com/embed/NqZwVclIQyU",
          caption: "Day 6 (8/15): Rendering + Appearance/ Making Drawings",
          bullet_caption: `Changing Appearances
Rendering
Drawings`,
        },
        {
          title: "Misc. Sketch Features",
          url: "https://www.youtube.com/embed/5qCh2EVorfk",
          caption: "Day 7 (8/15): Misc Sketch Features",
          bullet_caption: `Slots
Text
Circular pattern
Rectangular pattern
Offset`,
        },
        
        {
          title: "Last Day",
          url: "https://www.youtube.com/embed/CYOoJIqOdg4",
          caption: "Day 8 (8/22) LAST DAY",
          bullet_caption: `Loft
Constructing Planes
Automated modeling if have time`,
        },
      ],
    },
    "cad-2024": {
      title: "CAD & 3D Modeling 2024",
      caption: "Unlock the boundless possibilities of creation! We are thrilled to announce the 2nd-year summer offering of the “Intro to CAD/3D Modeling Course”! Step-by-step guidance for beginners to learn how to use CAD software, design 3D models of everyday objects, characters and more.",
      category: "CAD & 3D Modeling",
      videos: [
        {
          title: "Day 1",
          url: "https://www.youtube.com/embed/UIkvOF5CHys",
          caption: "",
          bullet_caption: `Teacher Introduction
Course Materials and Expectations
Course Assignments
Introduction to CAD
Onshape Account Setup
Navigation in Onshape Workspace`,
        },
        {
          title: "Day 2",
          url: "https://www.youtube.com/embed/QRHlLsQU2Ok",
          caption: "",
          bullet_caption: `CAD Significance and Onshape Navigation Quiz
Collaboration Features and Exporting Projects
Introduction to Sketching Techniques`,
        },
        {
          title: "Day 3",
          url: "https://www.youtube.com/embed/1kVJjP7DVoU",
          caption: "",
          bullet_caption: `2D Profiles Quiz
3D Profiles and Part Properties
Design Principles`,
        },
        {
          title: "Day 4",
          url: "https://www.youtube.com/embed/aX3bXv2bR1Q",
          caption: "",
          bullet_caption: `3D Profiles Quiz
Constraints and Assemblies
Rendering and Presentation Technique`,
        },
        {
          title: "Day 5",
          url: "https://www.youtube.com/embed/ZaVY6Xl7urk",
          caption: "",
          bullet_caption: `Assemblies Quiz
Design Analysis and Simulation
Tolerances
Documentation`,
        },
      ],
    },
    "python-2023": {
      title: "Intro to Python 2023",
      caption: "This class will aim to provide an understanding of the core mechanics of programming through the Python programming language, and is open to students with none or little experience in programming. Students already familiar with other programming languages can still take this course, but may find it not very challenging. It will be relatively fast-paced, but all class material will be shared and students should feel free to review the slides or do some additional work on their Replit repositories outside of or after the class has ended.",
      category: "Programming",
      videos: [
        {
          title: "Day 1: Data",
          url: "https://www.youtube.com/embed/e80wn-yEDVQ",
          caption: "Day 1 Data  (07/10/2023)",
          bullet_caption: `Setting up Replit
Python Shell
Basic arithmetic operations
Data types and conversion
Inputting and outputting data`,
        },
        {
          title: "Day 2: Logic",
          url: "https://www.youtube.com/embed/SIGN6d8bw5g",
          caption: "Day 2 Logic  (07/11/2023)",
          bullet_caption: `Boolean expressions
If, elif, and else statements
While loops
For loops`,
        },
        {
          title: "Day 3: Functions",
          url: "https://www.youtube.com/embed/jqMvegS1zrQ",
          caption: "Day 3 Functions  (07/12/2023)",
          bullet_caption: `Organizing programs
Function arguments
Returning data
Global and local variables`,
        },
        {
          title: "Day 4: Containers",
          url: "https://www.youtube.com/embed/Y_YARLQXvZQ",
          caption: "Day 4 Containers (07/13/2023)",
          bullet_caption: `Types of containers
Reading and writing to lists
Iterating through lists
Dictionaries`,
        },
        {
          title: "Day 5: Modules",
          url: "https://www.youtube.com/embed/Z6kOaoyUhoo",
          caption: "Day 5 Modules (07/14/2023)",
          bullet_caption: `Importing modules
Random numbers
Final project`,
        },
      ],
    },
    "weekly-math": {
      title: "Weekly 30 Min Fun Math Lecture",
      caption: "Join our Weekly 30-Minute Fun Math Lecture. Each lecture will be a time for students to explore interesting real-world problems or ones that some people are studying around the world today! We will make sure that the skill level for each lecture is appropriate for any skill level, and only very basic level thinking is required. We will guide you through everything!",
      category: "Mathematics",
      videos: [
        {
          title: "Lecture 1",
          url: "https://www.youtube.com/embed/YtKOvOEq2Qs",
          caption: "Lecture 1 (09/10/2023)",
          bullet_caption: `Simon’s Favorite Factoring Trick`,
        },
        {
          title: "Lecture 2",
          url: "https://www.youtube.com/embed/Tyzt2yS9I8U",
          caption: "Lecture 2 (09/17/2023)",
          bullet_caption: `Pathfinding on a grid`,
        },
        {
          title: "Lecture 3",
          url: "https://www.youtube.com/embed/-QzxRQMt5I4",
          caption: "Lecture 3 (09/24/2023)",
          bullet_caption: `Combinations and Hockey Stick Theorem`,
        },
        {
          title: "Lecture 4",
          url: "https://www.youtube.com/embed/zDhaQ-GXqN8",
          caption: "Lecture 4 (10/01/2023)",
          bullet_caption: `How does Mass Points work?`,
        },
        {
          title: "Lecture 5",
          url: "https://www.youtube.com/embed/3RCAS0zCX_s",
          caption: "Lecture 5 (10/15/2023)",
          bullet_caption: `Stars and Bars`,
        },
        {
          title: "Lecture 6",
          url: "https://www.youtube.com/embed/Ua5LEWKSyiU",
          caption: "Lecture 6 (10/23/2023)",
          bullet_caption: `Pathfinding on a Grid (II)`,
        },
        {
          title: "Lecture 7",
          url: "https://www.youtube.com/embed/0XxHFXz3UKI",
          caption: "Lecture 7 (10/29/2023)",
          bullet_caption: `The Bionomial Theorem`,
        },
        {
          title: "Lecture 8",
          url: "https://www.youtube.com/embed/RQWsm4PfC_A",
          caption: "Lecture 8 (11/19/2023)",
          bullet_caption: `Stars and Bars II`,
        },
        {
          title: "Lecture 9",
          url: "https://www.youtube.com/embed/v1pbQdBcG_s",
          caption: "Lecture 9 (12/03/2023)",
          bullet_caption: `The AM-GM Inequality`,
        },
        {
          title: "Lecture 10",
          url: "https://www.youtube.com/embed/XMNzMo9G_Jw",
          caption: "Lecture 10 (12/10/2023)",
          bullet_caption: `Telescoping`,
        },
        {
          title: "Lecture 12",
          url: "https://www.youtube.com/embed/hV6lCdcd0RI",
          caption: "Lecture 12 (01/07/2024)",
          bullet_caption: `Parity`,
        },
        {
          title: "Lecture 13",
          url: "https://www.youtube.com/embed/iylew6lD9jg",
          caption: "Lecture 13 (01/14/2024)",
          bullet_caption: `British Flag Theorem`,
        },
        {
          title: "Lecture 14",
          url: "https://www.youtube.com/embed/tgI-7hSm9uY",
          caption: "Lecture 14 (01/28/2024)",
          bullet_caption: `The Fibonacci Sequence`,
        },
        {
          title: "Lecture 15",
          url: "https://www.youtube.com/embed/ojYuYTWG7m4",
          caption: "Lecture 15 (03/03/2024)",
          bullet_caption: `Arithmetic and Geometric Series`,
        },
        {
          title: "Lecture 16",
          url: "https://www.youtube.com/embed/zhgTd5oDPIU",
          caption: "Lecture 16 (03/10/2024)",
          bullet_caption: `The Chinese Remainder Theorem`,
        },
        {
          title: "Lecture 17",
          url: "https://www.youtube.com/embed/1WEpIGqJ_eQ",
          caption: "Lecture 17 (03/17/2024)",
          bullet_caption: `AM/GM Inequality`,
        },
        {
          title: "Lecture 18",
          url: "https://www.youtube.com/embed/jv6Z0XmxbHc",
          caption: "Lecture 18 (03/24/2024)",
          bullet_caption: `Reflections`,
        },
        {
          title: "Lecture 19",
          url: "https://www.youtube.com/embed/ko9ibkMhpvk",
          caption: "Lecture 19 (04/07/2024)",
          bullet_caption: `SLogarithms`,
        },
        {
          title: "Lecture 20",
          url: "https://www.youtube.com/embed/HCXQeFZVwjU",
          caption: "Lecture 20 (04/28/2024)",
          bullet_caption: `Principle of Inclusion-Exclusion (PIE)`,
        },
        {
          title: "Lecture 21",
          url: "https://www.youtube.com/embed/PHBahymJnBM",
          caption: "Lecture 21 (05/12/2024)",
          bullet_caption: `Methods of Proof`,
        },
        {
          title: "Lecture 22",
          url: "https://www.youtube.com/embed/byoirn7Lj_Y",
          caption: "Lecture 22 (05/26/2024)",
          bullet_caption: `Complex Numbers`,
        },
        {
          title: "Lecture 23",
          url: "https://www.youtube.com/embed/qjVjOQguoSE",
          caption: "Lecture 23 (06/02/2024)",
          bullet_caption: `Shoelace Theorem`,
        },
      ],
    },
    "competition-math": {
      title: "Competition Math (Level 2)",
      caption: "This is a faster-paced class for those more interested in competition-based math and developing critical-thinking skills (e.g. AMC 8/Mathcounts level)",
      category: "Mathematics",
      videos: [
        {
          title: "Session 1",
          url: "https://www.youtube.com/embed/V0qgAmXcpUc",
          caption: "Numberosity Level 2 Workshop Session 1 Summary (09/09/2023)",
          bullet_caption: `Today, we started the first session of the Numberosity Level 2 class! We first went over introductions, class structure, expectations, and did a few warm-up problems. We also started a review of prealgebra, starting out with faster techniques to solve different addition/subtraction problems, as well as arithmetic sequences.`,
        },
        {
          title: "Session 2",
          url: "https://www.youtube.com/embed/D_odLEag-MI",
          caption: "Numberosity Level 2 Workshop Session 2 Summary (09/16/2023)",
          bullet_caption: `Today, we finished the 2nd session of the Numberosity Level 2 class! We started off with a review of previous topics and went on to discussing faster multiplication/division methods. Later, we discussed geometric series and sequences and finished off with some practice.`,
        },
        {
          title: "Session 3",
          url: "https://www.youtube.com/embed/uTLcRykK73Q",
          caption: "Numberosity Level 2 Workshop Session 3 Summary (09/23/2023)",
          bullet_caption: `Today was our 3rd session of the Level 2 class. We started by solving a few warm-up algebra puzzles, reviewed previous multiplication/division methods, and learned about parity. We also examined a few proofs that use parity, such as proving that one can never cycle back to the start top left room in a 3×3 grid of rooms. In our practice problems, we covered both new material and old (such as the difference of squares), making sure that the students understood everything from previous classes and today.`,
        },
        {
          title: "Session 4",
          url: "https://www.youtube.com/embed/sVQJtpiwuTM",
          caption: "Numberosity Level 2 Workshop Session 4 Summary (09/30/2023)",
          bullet_caption: `This week, we had our 4th session of the Level 2 class. We started by solving a few warm-up puzzles that involve detecting patterns and reviewing parity problems. For our lecture, we started discussing fractions, decimals, and percents, specifically looking at comparing fractions, telescoping sums, repeating decimals, and percents of change. For each concept, we also tried several different practice problems.`,
        },
        {
          title: "Session 5",
          url: "https://www.youtube.com/embed/9zFDTZjHA40",
          caption: "Numberosity Level 2 Workshop Session 5 Summary (10/14/2023)",
          bullet_caption: `This week was our 5th session of the Level 2 class. Once again, we started with a few warm-up problems and did a thorough review of what we learned before the break. Then, we focused on understanding and doing problems with precents.Stars and Bars`,
        },
        {
          title: "Session 6",
          url: "https://www.youtube.com/embed/OcRRBKQaxUU",
          caption: "Numberosity Level 2 Workshop Session 6 Summary (10/21/2023)",
          bullet_caption: `This week was our 6th session of the Level 2 class. We first warmed up with a few puzzles. Then, we learned about ratios and rates and some of the strategies to solving them, trying out some practice problems at the end.`,
        },
        {
          title: "Session 7",
          url: "https://www.youtube.com/embed/0XxHFXz3UKI",
          caption: "Numberosity Level 2 Workshop Session 7 Summary (10/28/2023)",
          bullet_caption: `This week was our 7th session of the Level 2 class. We practiced solving more problems with ratios, rates, and proportions and started talking about exponent properties. Specifically, we looked into fractional exponents and negative exponents, practicing the concepts on several challenging practice problems.`,
        },
        {
          title: "Session 8",
          url: "https://www.youtube.com/embed/v1pbQdBcG_s",
          caption: "Numberosity Level 2 Workshop Session 8 Summary (11/18/2023)",
          bullet_caption: `This was our 8th session of the Level 2 class. We looked into radicals and their relations to exponents, practicing several challenging problems that combine the two.`,
        },
        {
          title: "Session 9",
          url: "https://www.youtube.com/embed/co8qo7FWrS8",
          caption: "Numberosity Level 2 Workshop Session 9 Summary (12/2/2023)",
          bullet_caption: `This was the 9th session of the level 2 class. We reviewed linear equations, slopes, graphed the equations, and practiced solving many linear equation word problems. We also looked into median points, the distance formula, and coordinate planes.`,
        },
        {
          title: "Session 10",
          url: "https://www.youtube.com/embed/JpOyKxVtEnc",
          caption: "Numberosity Level 2 Workshop Session 10 Summary (12/9/2023)",
          bullet_caption: `Today, we learned about different forms of linear equations (slope-intercept, point-slope, and standard forms). We also discussed different types of lines (parallel, the same line, perpendicular lines, and lines that intersect at one point) and their properties.`,
        },
        {
          title: "Session 11",
          url: "https://www.youtube.com/embed/8LeL3Lhxl9M",
          caption: "Numberosity Level 2 Workshop Session 11 Summary (12/16/2023)",
          bullet_caption: `For the 11th session, we examined linear inequalities and described ways to solve them both algebraically and geometrically. Students practiced graphing their own graphs to show the regions for the solutions of the inequality while using algebra to verify results. `,
        },
        {
          title: "Session 12",
          url: "https://www.youtube.com/embed/U-dROOvYixo",
          caption: "Numberosity Level 2 Workshop Session 12 Summary (01/06/2023)",
          bullet_caption: `Today was the 12th session of the level 2 class. We focused on using inequalities to solve optimization problems with several constraints and conditions. We discussed the main strategies to deal with such problems and did some problems to practice. `,
        },
        {
          title: "Session 13",
          url: "https://www.youtube.com/embed/pPywxSFdG1A",
          caption: "Numberosity Level 2 Workshop Session 13 Summary (01/13/2024)",
          bullet_caption: `For lesson 13, we started looking into quadratics, developing an understanding and intuition for how to solve them. We learned ways to factor quadratics, as well as why we can use the method to solve them.`,
        },
        {
          title: "Session 14",
          url: "https://www.youtube.com/embed/7U_aofF3ZGI",
          caption: "Numberosity Level 2 Workshop Session 14 Summary (01/27/2024)",
          bullet_caption: `For lesson 14, we examined graphs of quadratics and how we draw them based on how we manipulate certain coefficients. We also discussed the method of “completing the square” and how it gives insight into the vertex point of the quadratic (as well as the quadratic formula).`,
        },
        {
          title: "Session 15",
          url: "https://www.youtube.com/embed/Qjjua1dcIjw",
          caption: "Numberosity Level 2 Workshop Session 15 Part 1 Summary (02/10/2024)",
          bullet_caption: `For lesson 15, we started a review of the entire algebra unit, practicing the methods and formulas that we learned from lessons 1-14. Students were able to practice with many problems on their own and we went over all other problems at the end of class.`,
        },
        {
          title: "Session 16",
          url: "https://www.youtube.com/embed/iF_lZq1h6zo",
          caption: "Numberosity Level 2 Workshop Session 16 Summary (02/24/2024)",
          bullet_caption: `Today, we went over a quick review of all the concepts from the algebra unit. Then, the students took a quiz. Please go to https://forms.gle/M5rXT8ESGsVbSVn58 if you missed the quiz during class and want to do the quiz in your own time!`,
        },
        {
          title: "Session 17",
          url: "https://www.youtube.com/embed/ZtAvPiLvgwc",
          caption: "Numberosity Level 2 Workshop Session 17 Summary (03/02/024)",
          bullet_caption: `Today was the first day of our geometry unit! We went over angles and parallel lines, practicing several angle-chasing problems along the way. We also started discussing types of congruent triangles and how to prove they are congruent.`,
        },
        {
          title: "Session 18",
          url: "https://www.youtube.com/embed/psDSeW-NpT8",
          caption: "Numberosity Level 2 Workshop Session 18 Summary (03/09/2024)",
          bullet_caption: `Today was our 18th session of the Level 2 class. We completed our discussions and practice problems on congruent triangles and moved on to special triangles (specifically, isosceles and equilateral triangle theorems).`,
        },
        {
          title: "Session 19",
          url: "https://www.youtube.com/embed/eBbIGVEM-x4",
          caption: "Numberosity Level 2 Workshop Session 19  Summary (03/16/024)",
          bullet_caption: `For session 19 of our Level 2 class, we started discussing similar triangles and the different types of similarity that we can prove (AA, SAS, and SSS similarity). All the students had some opportunities to try some problems related to triangle similarity on their own.`,
        },
        {
          title: "Session 20",
          url: "https://www.youtube.com/embed/WwSv53kCgdE",
          caption: "Numberosity Level 2 Workshop Session 20 Summary (03/23/2024)",
          bullet_caption: `For session 20, we went over the Pythagorean Theorem and special types of right triangles- specifically, the 30-60-90 and 45-45-90 triangles. We looked into special properties of their side lengths and examined how to use them in several practice problems.`,
        },
        {
          title: "Session 21",
          url: "https://www.youtube.com/embed/VKqlUpKjDVU",
          caption: "Numberosity Level 2 Workshop Session 21 Summary (04/06/2024）",
          bullet_caption: `For session 21, we started discussing perpendicular bisectors and angle bisectors of triangles. We examined and proved several of the theorems associated with either property and tried several practice problems that use the theorems that we discussed.`,
        },
        {
          title: "Session 22",
          url: "https://www.youtube.com/embed/7GLATXS3rzs",
          caption: "Numberosity Level 2 Workshop Session 22 Summary (04/27/2024)",
          bullet_caption: `Today was the 22nd session of the Level 2 class. We continued discussing angle bisectors of triangles and looked into the Angle Bisector Theorem. Students tried several problems to apply this theorem. Afterward, we also discussed proofs of the medians and heights of a triangle being concurrent, meaning that they meet at the same point.`,
        },
        {
          title: "Session 23",
          url: "https://www.youtube.com/embed/XCJxp-60SBI",
          caption: "Numberosity Level 2 Workshop Session 23 Summary (05/04/2024）",
          bullet_caption: `For the 23rd session of the course, we started discussing quadrilaterals and their special properties. We looked into trapezoids and the special case of isosceles trapezoids, parallelograms that have bisecting diagonals, and rhombi that have perpendicular diagonals. Students also had the opportunity to try out the new theorems and properties on several geometry problems.`,
        },
        {
          title: "Session 24",
          url: "https://www.youtube.com/embed/qf468g-yNoU",
          caption: "Numberosity Level 2 Workshop Session 24 Summary (05/11/2024)",
          bullet_caption: `Today was the 24th session of the Level 2 course. We reviewed several main properties of circles, including the areas and perimeters of different sectors or arcs, and discussed other strategies for finding funky areas. We also specifically looked into angles and their properties on a circle (such as inscribed angles or how they relate to outside arcs). In addition, we looked into how those theorems also applied to tangents.`,
        },
        {
          title: "Session 25",
          url: "https://www.youtube.com/embed/-nJVbno-25s",
          caption: "Numberosity Level 2 Workshop Session 25 Summary (05/25/2024）",
          bullet_caption: `Today was the 25th session of the Level 2 course. We finished up our geometry unit, adding on some new knowledge about Power of a Point and its proof. We discussed how they may use the powerful theorem to find the solutions of several different problems, as well as practiced using it in several different cases. For review for our geometry quiz next week, students can use the slides to finish their practice and overview of all the concepts we went over during the geometry unit. It is linked here <a> https://shorturl.at/by7vw. <a>`,
        },
        {
          title: "Session 26",
          url: "https://www.youtube.com/embed/ZIDCTD1ZpFc",
          caption: "Numberosity Level 2 Workshop Session 26 Summary (06/01/2024)",
          bullet_caption: `Today was the final session of the Level 2 course! We finished a quick review of all the concepts we learned about this unit and went straight into a quiz. Then, we reviewed all the next steps that students can do in order to explore further into math and said our goodbyes! If anyone missed the quiz, please do it with pencil, paper, and a calculator in 40 minutes at this link here: https://forms.gle/qz1QtQ3vCtkWk6Uo9.`,
        },
      ],
    },
    "enrichment-math": {
      title: "Enrichment Math (Level 1)",
      caption: "This is a slower-paced class for those wanting a more guided experience to learn the concepts more deeply (math enrichment)Numberosity Level 2 Workshop Session 26 Summary (06/01/2024)",
          category: "Mathematics",
      videos: [
        {
          title: "Session 1",
          url: "https://www.youtube.com/embed/c_c11pOIb1E",
          caption: "Numberosity Level 1 Workshop Session 1 Summary (09/09/2023)",
          bullet_caption: `Today, we began our first session of our Numberosity Level 1 workshop! First, we went over how the class was going to work. This class will broadly follow the Art of Problem Solving Prealgebra book, so expect to see most concepts covered there covered in this course. (You should not buy the book, it just has what we expect to cover.) We then started looking at basic operations. Today, we went over how operations work, the order of operations, exponents, negative exponents and exponents of zero. We finished off with some practice problems.`,
        
        },
        {
          title: "Session 2",
          url: "https://www.youtube.com/embed/OzWz9J4okQ0",
          caption: "Numberosity Level 1 Workshop Session 2 Summary (09/16/2023)",
          bullet_caption: `Today, we began our 2nd session of the Level 1 workshop! First, we reviewed concepts from last week such as order of operations, exponents of 0, and negative exponents. We then began looking at the distributive property and factoring. We finished by learning how to do big sums like 1+2+3+…+100 quickly.`,
        },
        {
          title: "Session 3",
          url: "https://www.youtube.com/embed/t8-UogN90Pc",
          caption: "Numberosity Level 1 Workshop Session 3 Summary (09/23/2023)",
          bullet_caption: `Today was our 3rd session of the Level 1 workshop. We first reviewed the distributive property, factoring, and adding sums like 1+2+…+100 quickly. We then began learning the basics of algebra! We defined variables, expressions, equations, simplification, coefficients, constants, and more. An important rule we went over was that you can do the same thing to both sides of the equation to still get a valid equation. We finished off with several practice problems.`,
        },
        {
          title: "Session 4",
          url: "https://www.youtube.com/embed/4L2Yy7TZxFI",
          caption: "Numberosity Level 1 Workshop Session 4 Summary (09/30/2023)",
          bullet_caption: `Today was our 4th session of the Level 1 workshop. We first reviewed basic algebra terminology and did some practice problems. We then looked at systems of equations and discussed 2 main methods of solving them: elimination and substitution. We also did several practice problems solving systems of equations ourselves.`,
        },
        {
          title: "Session 5",
          url: "https://www.youtube.com/embed/vpKdtRkSjlQ",
          caption: "Numberosity Level 1 Workshop Session 5 Summary (10/14/2023)",
          bullet_caption: `This was our 5th session of the Level 1 workshop. Today we focused on really practicing and reviewing our algebra through lots of problems. We practiced solving equations and systems of equations with elimination and substitution.`,
        },
        {
          title: "Session 6",
          url: "https://www.youtube.com/embed/Ua5LEWKSyiU",
          caption: "Numberosity Level 1 Workshop Session 6 Summary (10/21/2023)",
          bullet_caption: `This was our 6th Level 1 workshop session. Today we reviewed solving systems of equations with substitution and elimination. Then we looked at how algebra can be used to solve word problems. We broke down the general process used to convert word problems into systems of equations and solving them. We also did a few practice problems.`,
        },
        {
          title: "Session 7",
          url: "https://www.youtube.com/embed/pe4WY_qIw5Q",
          caption: "Numberosity Level 1 Workshop Session 7 Summary (10/28/2023)",
          bullet_caption: `This was our 7th Level 1 workshop session. Today we practiced solving many word problems using algebra. We then practiced a specific type word problem involving ratios and rates. We finished off with a few (quite challenging!) practice problems.`,
        },
        {
          title: "Session 8",
          url: "https://www.youtube.com/embed/GpBPq7OWaVw",
          caption: "Numberosity Level 1 Workshop Session 8 Summary (11/18/2023)",
          bullet_caption: `This was the 8th session of the Level 1 workshop. Today we continued to review and practice problems involving speed, ratios, rates, and proportions. We then introduced percents and percent of change and solved some practice problems involving those concepts. Next week we will be having a review day to prepare for the end of our Algebra unit!`,
        },
        {
          title: "Session 9",
          url: "https://www.youtube.com/embed/NfkWq3Rrruk",
          caption: "Numberosity Level 1 Workshop Session 9 Summary (12/02/2023)",
          bullet_caption: `This was the 9th session of the Level 1 workshop. Today was a review day! We reviewed the overarching concepts behind all the topics we’ve covered since the beginning of the Level 1 workshop, and did many practice problems involving these concepts. Next week will be our quiz.`,
        },
        {
          title: "Session 11",
          url: "https://www.youtube.com/embed/JfJw5N7KyLE",
          caption: "Numberosity Level 1 Workshop Session 11 Summary (12/16/2023)",
          bullet_caption: `Today was the 1st class of our new Geometry unit and the 11th session of the Numberosity Level 1 workshop! We began our unit by looking at angles, lines, parallel lines, triangles, and right triangles. We left off on practice problems on the Pythagorean Theorem.`,
        },
        {
          title: "Session 12",
          url: "https://www.youtube.com/embed/sjrMp-EEYss",
          caption: "Numberosity Level 1 Workshop Session 12 Summary (01/06/2024)",
          bullet_caption: `Today was the 12th session of the Level 1 workshop. Seeing as we just had a long 2-week holiday break, we first thoroughly reviewed our 1st class of Geometry. We went back over angles, parallel lines, triangles, and the Pythagorean Theorem. We also introduced a new concept, the Triangle Inequality.`,
        },
        {
          title: "Session 13",
          url: "https://www.youtube.com/embed/nx7kYi5PB2k",
          caption: "Numberosity Level 1 Workshop Session 13 Summary (01/13/2024)",
          bullet_caption: `Today was our 13th session of the Level 1 workshop.We quickly reviewed the Pythagorean Theorem and the Triangle Inequality with some practic problems. Then, we began to look at polygons. We went over how to find the sum of all angles in an n-sided polygon and did some problems for practice. We also went over different types of quadrilaterals.`,
        },
        {
          title: "Session 14",
          url: "https://www.youtube.com/embed/CY551kQwkWc",
          caption:"Numberosity Level 1 Workshop Session 14 Summary (01/27/2024)",
          bullet_caption: `Today was the 14th session of the Level 1 workshop.We reviewed the Triangle Inequality, polygons, and the polygon sum of angles formula. We also reviewed quadrilateral properties. We finished off by doing some practice problems.`,
        },
        {
          title: "Session 15",
          url: "https://www.youtube.com/embed/x6wjpm86kv8",
          caption: "Numberosity Level 1 Workshop Session 15 Summary (02/17/2024)",
          bullet_caption: `Today was the 15th session of the Level 1 workshop. Today, we spent the time reviewing past material (including polygons, sum of angles of polygons, quadrilateral properties, Triangle Inequality, etc.) with many practice problems.`,
        },
        {
          title: "Session 16",
          url: "https://www.youtube.com/embed/i-s3AAHaOu0",
          caption: "Lecture 16 (03/10/2024)",
          bullet_caption: `Today was the 16th session of the Level 1 workshop. Today, we introduced similar triangles. We then did a lot of practice problems involving similar triangles and thoroughly reviewing past geometry material.`,
        },
        {
          title: "Session 17",
          url: "https://www.youtube.com/embed/ztJRGOJ3HRs",
          caption: "Numberosity Level 1 Workshop Session 17 Summary (03/02/2024)",
          bullet_caption: `Today was the 17th session of the Level 1 workshop. We first reviewed similar triangles. Then we went into circles, discussing arcs, inscribed angles, tangents, and more.`,
        },
        {
          title: "Session 18",
          url: "https://www.youtube.com/embed/jUDC4raAGVc",
          caption: "Numberosity Level 1 Workshop Session 18 Summary (03/09/2024)",
          bullet_caption: `Today was the 18th session of the Level 1 workshop. We first reviewed circles and their properties, reviewing facts about arcs, inscribed angles, tangents, etc. We then began doing problems involving area and perimeter of circles.`,
        },
        {
          title: "Session 19",
          url: "https://www.youtube.com/embed/5fx_ksEOZJ0",
          caption: "Numberosity Level 1 Workshop Session 19 Summary (03/16/2024)",
          bullet_caption: `Today was the 19th session of the Level 1 workshop. We first reviewed area and perimeter of circles and did problems involving those concepts. We then briefly talked about triangle congruence.`,
        },
        {
          title: "Session 20",
          url: "https://www.youtube.com/embed/KzagGUL2vAo",
          caption: "Numberosity Level 1 Workshop Session 20 Summary (03/23/2024)",
          bullet_caption: `Today was the 20th session of the Level 1 workshop. Today, we reviewed right triangles and the Pythagorean Theorem with some practice problems. We also looked at right triangles in 3D and how to ‘unroll’ 3D shapes to find lengths, such as cones.`,
        },
        {
          title: "Session 21",
          url: "https://www.youtube.com/embed/ecqN_tKeTes",
          caption: "Numberosity Level 1 Workshop Session 21 Summary (04/06/2024)",
          bullet_caption: `Today was the 21st session of the Level 1 workshop. Today, we prepared for the upcoming quiz on our Geometry unit. We reviewed the topics of Pythagorean theorem and special right triangles by doing problems involving them.`,
        },
        {
          title: "Session 22",
          url: "https://www.youtube.com/embed/ao6pMz9TNJU",
          caption: "Numberosity Level 1 Workshop Session 22 Summary (04/27/2024)",
          bullet_caption: `Today was the 22nd session of the Level 1 workshop. Today, we continued to prepare for the upcoming quiz on our Geometry unit. As we had not met for a while, we re-reviewed the topics of Pythagorean theorem and special right triangles this week by doing problems involving them.`,
        },
        {
          title: "Session 23",
          url: "https://www.youtube.com/embed/qaGUW9Bb-0E",
          caption: "Numberosity Level 1 Workshop Session 23 Summary (05/04/2024)",
          bullet_caption: `Today was the 23rd session of the Level 1 workshop. This session we kept working to prepare for the upcoming Geometry unit quiz. We reviewed the concept of special right triangles by doing many problems involving them. We finished off with some Triangle Inequality review.`,
        },
        {
          title: "Session 24",
          url: "https://www.youtube.com/embed/FBIcm5enlDQ",
          caption: "Numberosity Level 1 Workshop Session 24 Summary (05/11/2024)",
          bullet_caption: `Today was the 24th session of the Level 1 workshop, in which we continued to prepare for the upcoming quiz on our Geometry unit. We first reviewed the Triangle Inequality, doing a few problems involving the concept. Then, we reviewed angle chasing with some problems. We went over the concepts of parallel lines creating congruent angles and the polygon angle sum formula in the process.`,
        },
        {
          title: "Session 25",
          url: "https://www.youtube.com/embed/_RdUSKqoAZQ",
          caption: "Numberosity Level 1 Workshop Session 25 Summary (05/25/2024)",
          bullet_caption: `Today was the 25th session of the Level 1 workshop. Today, we continued to prepare for the Geometry unit quiz next week. We first reviewed triangle similarity and congruence, reviewing AA, SSS, and SAS triangle similarity and SSS, SAS, ASA, and AAS congruence. We then worked on some problems involving AA, SSS, and SAS triangle similarity. We finished off with some simple 3D Pythagorean practice problems.`,
        },
      ],
    },
    mathcounts: {
      title: "Mathcounts/AMC8",
      category: "Mathematics",
      caption: "This class series is for middle school students who love math and are interested in learning more beyond the normal school curriculum. It will also provide a solid foundation for those going into competition math. Targeted toward 5th-8th grade students, the course started in Oct. 2022 and will last until the summer of 2023, covering the following two materials..",
          videos: [
        {
          title: "Session 1: Combinatorics",
          url: "https://www.youtube.com/embed/hql_qgU3GpE",
          caption: "Competition Math Workshop Session 1 Summary (11/11/2022)",
          bullet_caption: `We first reviewed problems students found hard on last week’s homework. Then, we did a timed practice test to see people’s baseline experience with competition math. Finally, we looked at some important ideas in counting, such as casework and permutations.`,
        
        },
        {
          title: "Session 2: Combinatorics",
          url: "https://www.youtube.com/embed/DEfmuXllKrk",
          caption: "Competition Math Workshop Session 2 Summary (11/18/2022)",
          bullet_caption: `First, we reviewed hard problems from last week’s homework. After that, we looked at the important idea of probability, and how to solve for it using counting techniques learned in the workshop so far such as casework. We then practiced probability problems and continued to practice our casework. For homework, students should try the 2001 AMC 8 and come to class with any questions`,
        },
        {
          title: "Session 3: Combinatorics",
          url: "https://www.youtube.com/embed/d5LSlWyTPiM",
          caption: "Competition Math Workshop Session 3 Summary (12/2/2022)",
          bullet_caption: `Today, we did a lot of practice with counting problems. Many of the problems we looked at were types of problems that will show up often in math competitions. We focused on techniques such as casework, permutations, and combinations. `,
        },
        {
          title: "Session 4: Combinatorics",
          url: "https://www.youtube.com/embed/qCGoJ1aeCaI",
          caption: "Competition Math Workshop Session 4 Summary (12/09/2022)",
          bullet_caption: `We first went over tough problems from last week’s homework. Next, we continued our practice of permutations and combinations. We reviewed factorials, kept practicing common problems such as letter-arrangement, and continued to practice casework. `,
        },
        {
          title: "Session 5: Combinatorics",
          url: "https://www.youtube.com/embed/IaS9zzVW02k",
          caption: "Competition Math Workshop Session 5 Summary (12/16/2022)",
          bullet_caption: `We first reviewed frequently missed problems on last week’s quiz. Next, we continued our review of permutations and combinations, emphasizing which types of problems would use permutations and which would use combinations. We also continued practicing other concepts, like casework. `,
        },
        {
          title: "Session 6: Combinatorics",
          url: "https://www.youtube.com/embed/8JOWSFx3bq8",
          caption: "Competition Math Workshop Session 6 Summary (1/13/2023)",
          bullet_caption: `This week, we finally moved onto our next unit, Number Theory! But because of our 3-week break, we did some Counting & Probability review first. We first reviewed hard homework problems, then did some combinations review by introducing the common competition math problem of counting paths on a grid. We then played a fun Gimkit game with Counting & Probability questions.After that, we started some Number Theory by looking at factors, prime factorization, and counting the number of factors a number has. 

NOTE: There is a correction that should be made for a Gimkit question. For the question ‘Tommy has a die that can roll a 3 on 3 of the sides and a 5 on the other 3 sides. Beatrice has a die that can roll a 2 on 4 of the sides and a 6 on the other 2 sides. What is the probability of Tommy winning?’ The answer should be 1/2×4/6+1/2×4/6=2/3, not 1/2.`,
        },
        {
          title: "Session 7: Number Theory",
          url: "https://www.youtube.com/embed/WhCCYxPBQ9I",
          caption: "Competition Math Workshop Session 7 Summary (1/21/2023)",
          bullet_caption: `This week, we continued our new unit on Number Theory. We first reviewed divisibility rules, which we learned last week. We then looked at factorization, including how to find prime factorizations with factor trees and how to count the number of factors a number has. We then started to look at GCF and LCM. For each concept, we went over some practice problems and applications of the concept you might see on competitions. `,
        },
        {
          title: "Session 8: Number Theory",
          url: "https://www.youtube.com/embed/dtRn0Ph_ngM",
          caption: "Competition Math Workshop Session 8 Summary (1/27/2023)",
          bullet_caption: `This week, we did a review of the 2023 AMC 8. We went over problems and solutions to the last ten problems, #16-25.`,
        },
        {
          title: "Session 9: Number Theory",
          url: "https://www.youtube.com/embed/1BdkvL-v7mk",
          caption: "Competition Math Workshop Session 9 Summary (2/3/2023)",
          bullet_caption: `This week, we continued our Number Theory unit. First, we went over difficult homework problems. Then we looked at number theory problems involving prime factorization, including how to find the number of factors of a number, and the product of the factors of any number.`,
        },
        {
          title: "Session 10: Number Theory",
          url: "https://www.youtube.com/embed/m2rQW4BphWs",
          caption: "Competition Math Workshop Session 10 Summary (2/10/2023)",
          bullet_caption: `This week, we continued our Number Theory unit. We kept practicing number theory problems involving prime factorization, including how to find the number of factors of a number, the product of the factors of a number, and the sum of the factors of any number. We looked at several variations of such problems, including a few challenge problems.`,
        },
        {
          title: "Session 11: Number Theory",
          url: "https://www.youtube.com/embed/NgEXzlw9w5s",
          caption: "Competition Math Workshop Session 11 Summary (2/24/2023)",
          bullet_caption: `This week, we continued our Number Theory unit. We first reviewed prime factorization and how to easily find the number of factors of a number. We then introduced some new concepts, such as different number bases and modular arithmetic. We also looked at problems involving the units digit of numbers, an important idea for math competitions. `,
        },
        {
          title: "Session 12: Number Theory",
          url: "https://www.youtube.com/embed/oIwnBkrIpZA",
          caption: "Competition Math Workshop Session 12 Summary (3/3/2023)",
          bullet_caption: `This week, we finished our Number Theory unit. We first reviewed all the concepts we covered, including: divisibility rules, prime factoring, finding the number of factors, sum of factors, and product of factors, factorials, and bases. We then had a quiz on the Number Theory unit. Next week, we will be starting our Geometry unit! `,
        },
        {
          title: "Session 13: Geometry",
          url: "https://www.youtube.com/embed/sQjlBYdvt5g",
          caption: "13 Summary (3/10/2023)",
          bullet_caption: `This week, we started our Geometry unit. We first reviewed frequently missed problems from the Number Theory quiz. Then we started looking at beginning geometry concepts, such as angles, parallel lines, and triangles. We solved several practice problems involving these concepts. `,
        },
        {
          title: "Session 14: Geometry",
          url: "https://www.youtube.com/embed/PYRkOYMRGVI",
          caption: "Competition Math Workshop Session 14 Summary (3/17/2023)",
          bullet_caption: `This week, we first reviewed the material about polygons and their angles from the first lesson. Then, we went straight into learning about different types of quadrilaterals and their properties, later applying the knowledge to some practice problems. Afterward, we learned about similar triangles and the Pythagorean Theorem, some important concepts that really form the basis for competition math in Geometry.`,
        },
        {
          title: "Session 15: Geometry",
          url: "https://www.youtube.com/embed/bFh4jqfQbdI",
          caption: "Competition Math Workshop Session 15 Summary (4/07/2023)",
          bullet_caption: `This week, we continued our Geometry unit by looking at circle problems. We talked about chords, tangents, secants, arcs, inscribed angles, cyclic quadrilaterals, and more. Then we looked at several practice problems involving these concepts. `,
        },
        {
          title: "Session 16: Geometry",
          url: "https://www.youtube.com/embed/nyA-PWXnewg",
          caption: "Competition Math Workshop Session 16 Summary (4/14/2023)",
          bullet_caption: `This week, we continued our geometry unit and practiced solving many types of problems. We first reviewed some concepts from last week, such as inscribed angles and arcs. We then practiced several problems involving finding the perimeter or area of unusual shapes. In this week we also introduced the Pythagorean theorem.`,
        },
        {
          title: "Session 17: Geometry",
          url: "https://www.youtube.com/embed/zGpJvqIlSmU",
          caption: "Competition Math Workshop Session 17 Summary (4/23/2023)",
          bullet_caption: `This week, we continued with our geometry unit and practiced solving various types of problems. We began by attempting to prove the Pythagorean theorem and then applied it to solve problems related to distance and 3D shape geometry. We also reviewed two types of special right triangles, namely the 45-45-90 and 30-60-90 triangles, and practiced solving several problems related to them.`,
        },
        {
          title: "Session 18: Geometry",
          url: "https://www.youtube.com/embed/4wVSDsm-G1E",
          caption: "Competition Math Workshop Session 18 Summary (4/28/2023)",
          bullet_caption: `This week, we continued our geometry unit and practiced solving many problems. We started by reviewing special right triangles, such as 30-60-90 triangles and 45-45-90 triangles. We practiced many problems involving these triangles, as well as problems involving the Pythagorean Theorem and/or Area formulas`,
        },
        {
          title: "Session 19: Geometry",
          url: "https://www.youtube.com/embed/FIYizginciY",
          caption: "Competition Math Workshop Session 19 Summary (05/05/2023)",
          bullet_caption: `A guest speaker, Jerry Zhang, joined us this week! We continued our geometry unit, looking at 3D topics in geometry. We practiced problems involving Polyhedron, Prisms, and Pyramids. We also looked at problems with spheres, cones, and cylinders. There is no homework this week!`,
        },
        {
          title: "Session 20: Geometry",
          url: "https://www.youtube.com/embed/49wf0evTLNE",
          caption: "Competition Math Workshop Session 20 Summary (05/12/2023)",
          bullet_caption: `A new teacher, Peter Bai, joined us this week! We continued our geometry unit, finishing up 3D geometry and getting into similarity. We practiced a lot of problems involving similar triangles especially. We also reviewed ideas such as inscribed angles.`,
        },
        {
          title: "Session 21: Geometry",
          url: "https://www.youtube.com/embed/A2zBB6Nb2kA",
          caption: "Competition Math Workshop Session 21 Summary (05/21/2023)",
          bullet_caption: `This week, we finished up looking at similar triangle relationships. We also learned the angle bisector theorem. We then did a huge review of all the concepts we’ve learned throughout this unit. Next week is our Geometry unit quiz!

Extra note: We actually made a mistake for the practice problem 1 that we discussed- because the sides that are staying constant are the 17 and 8 lengths of the triangle, the x length will actually get smaller as the angle increases. So, x must be greater than 10 and below sqrt(226), so there are only 5 possible choices for x.`,
        },
        {
          title: "Session 22: Geometry",
          url: "https://www.youtube.com/embed/a4kNFd6-ckI",
          caption: "Competition Math Workshop Session 22 Summary (05/26/2023)",
          bullet_caption: `This is the last class of our geometry unit, we tried couple of review practices at first, then had a fun Kahoot game. We concluded our Geometry unit with a comprehensive Quiz. If anyone was not able to finish it in the class,  here is the link https://forms.gle/dMUpdYePQJPjW1kU8, Please time it for 45 minutes. 

We will start our Algebra Unit Next week. In addition, I would greatly appreciate if you could fill out this short survey! https://forms.gle/2ze7W7Gwo2VbuEXm6

`,
        },
        {
          title: "Session 23: Algebra",
          url: "https://www.youtube.com/embed/Sx5kwaPcU9Y",
          caption: "Competition Math Workshop Session 23 Summary (06/04/2023)",
          bullet_caption: `This week, we began our algebra unit! We first looked at the basics of what variables were, and how to solve linear equations. We then looked at how to do some common types of problems. We finished off with many review problems.`,
        },
        {
          title: "Session 24: Algebra",
          url: "https://www.youtube.com/embed/5lPKccsBpfE",
          caption: "Competition Math Workshop Session 24 Summary (06/11/2023)",
          bullet_caption: `This week, we continued our algebra unit! We first looked at frequently missed questions of the Geometry unit quiz. Then we reviewed common problem types from last weeks. We then looked at the 3 main forms of linear equations can be written into: slope-intercept form, point-slope form, and standard form.`,
        },
        {
          title: "Session 25: Algebra",
          url: "https://www.youtube.com/embed/fVsrVFTop4E",
          caption: "Competition Math Workshop Session 25 Summary (06/18/2023)",
          bullet_caption: `This week, we continued our algebra unit. We first reviewed the ideas of linear equations from last week. Then we began learning about systems of equations and the 2 ways to solve them: substitution and elimination. Throughout, we practiced many common problem types.`,
        },
        {
          title: "Session 26: Algebra",
          url: "https://www.youtube.com/embed/lHiyRSblNYs",
          caption: "Competition Math Workshop Session 26 Summary (06/25/2023)",
          bullet_caption: `This week, we started off class with an algebra riddle. Then, we continued where we left off from last class, solving problems involving systems of equations. We also started discussing about ratios, proportions, and percents, ending with a small review of everything we have learned so far. The problems ranged from the most recent material, such as proportions and percents of change, to earlier class material, such as speed, distance, and time.`,
        },
        {
          title: "Session 27: Algebra",
          url: "https://www.youtube.com/embed/H-wi3e5Py7U",
          caption: "Competition Math Workshop Session 27 Summary (07/11/2023)",
          bullet_caption: `This week, we continued our algebra unit. We went over ways to factor equations, such as the distributive property and differences of squares. Throughout, we practiced many common problems involving such concepts. We also looked at exponents and got into some sequences and series. `,
        },
        {
          title: "Session 28: Algebra",
          url: "https://www.youtube.com/embed/PFXFx4bwUxw",
          caption: "Competition Math Workshop Session 28 Summary (07/16/2023)",
          bullet_caption: `This week, we started off with a review of the arithmetic sequence and went on to learn about the methods to solve arithmetic series, the geometric sequence, and the geometric series (both finite and infinite) problems. Later, we practiced using the formulas on various word problems and later started the review for the algebra unit.`,
        },
        {
          title: "Session 29: Algebra",
          url: "https://www.youtube.com/embed/F1ql6N1rs08",
          caption: "Competition Math Workshop Session 29 Summary (07/23/2023)",
          bullet_caption: `This week, we finished up our algebra unit, and also our very last class! We first did some review of the algebra unit, before moving on to a 45-minute algebra quiz. We finished off with a fun Blooket that covered problems from over all 4 units. Thanks to all of you for joining us in learning and practicing math!`,
        },
      ],
    },
    "intro-math": {
      title: "Fun Introductory Math",
      category: "Mathematics",
      caption: "This series provides an introduction into the Middle School Competition Math Series courses. They examine several different puzzles and problems that can be found within mathematics and are specifically created to stimulate interest in math.",
          videos: [
        {
          title: "Class 1",
          url: "https://www.youtube.com/embed/OEpPhsZ6I-4",
          
        },
        {
          title: "Class 2",
          url: "https://www.youtube.com/embed/QBucoIe_abM",
        },
      ],
    },
    "sat-workshops": {
      title: "SAT Workshops",
      category: "Mathematics",
      caption: "This 3-day SAT Math Workshop is fast-paced overview of the math portion of the SAT, covering different strategies and many topics you need to know in order to improve your score on SAT",
          videos: [
        {
          title: "Class 1",
          url: "https://www.youtube.com/embed/Vp5cVUHAV3k",
          caption: "Series Class 1",
        },
        {
          title: "Class 2",
          url: "https://www.youtube.com/embed/OxQ6_7ofUtQ",
          caption: "Series Class 2",
        },
        {
          title: "Class 3",
          url: "https://www.youtube.com/embed/97b3p-Xr5w0",
          caption: "Series Class 3",
        },
      ],
    },
  };

  console.log("Available course IDs:", Object.keys(courseData));
  const course = courseData[courseId];
  console.log("Found course:", course);

  useEffect(() => {
    document.title = "Course Details | Numberosity Academy";
  }, []);
  if (!course) {
    return (
      <div className="relative bg-white">
        <div className="absolute top-0 left-0 w-full z-10">
          <NavHeader />
        </div>
        <div className="relative pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <Link
              to="/learning/courses"
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
              Back to Courses
            </Link>
            <h1 className="font-['Roboto'] font-bold text-4xl text-gray-900 mb-12 text-center">
              Course Not Found
            </h1>
            <p className="text-center text-gray-600">
              The course "{courseId}" could not be found. Please check the URL
              and try again.
            </p>
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
          <Link
            to="/learning/courses"
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
            Back to Courses
          </Link>
          <div className="bg-blue-50 rounded-xl p-8 border border-blue-100 mb-16">
            <div className="text-sm text-[#0BA2D9] font-semibold mb-2">
              {course.category}
            </div>
            <h1 className="font-['Roboto'] font-bold text-4xl text-gray-900 mb-6">
              {course.title}
            </h1>
            <h2 className="font-['Roboto'] text-xl mt-4 text-gray-900">
              {course.caption}
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {course.videos?.map((video, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-4 border border-gray-200"
              >
                <h2 className="font-['Roboto'] font-bold text-2xl text-gray-900 mb-4">
                  {video.title}
                </h2>
                <div className="aspect-w-16 aspect-h-9 h-[200px]">
                  <iframe
                    src={video.url}
                    title={video.title}
                    className="w-full h-full rounded-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <h4 className = "font-['Roboto'] text-gray-900 mt-4">{video.caption}</h4>
                <h4 className="font-['Roboto'] text-gray-900 mt-4 whitespace-pre-line">
                  
                  {video.bullet_caption !== undefined ? ("• " + video.bullet_caption)?.replaceAll("\n", "\n • ") : <></>}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
