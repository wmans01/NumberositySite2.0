import React from "react";
import { useParams, Link } from "react-router-dom";
import NavHeader from "/src/components/NavHeader.jsx";

const CoursePage = () => {
  const { courseId } = useParams();
  console.log("Course ID from URL:", courseId);

  const courseData = {
    "cad-2023": {
      title: "CAD & 3D Modeling 2023",
      category: "CAD & 3D Modeling",
      videos: [
        {
          title: "Introduction",
          url: "https://www.youtube.com/embed/TYONyCcYzak",
        },
        {
          title: "2D Sketches",
          url: "https://www.youtube.com/embed/3LVv2QuRhes",
        },
        {
          title: "Slightly More Advanced Tools",
          url: "https://www.youtube.com/embed/ksvsf8xa5OI",
        },
        {
          title: "Assembling Things",
          url: "https://www.youtube.com/embed/yd5ZsJe-Zhk",
        },
        {
          title: "Rendering + Appearance",
          url: "https://www.youtube.com/embed/qtZroGa9r6c",
        },
        {
          title: "Misc. Sketch Features",
          url: "https://www.youtube.com/embed/5qCh2EVorfk",
        },
        {
          title: "Last Day",
          url: "https://www.youtube.com/embed/CYOoJIqOdg4",
        },
      ],
    },
    "cad-2024": {
      title: "CAD & 3D Modeling 2024",
      category: "CAD & 3D Modeling",
      videos: [
        {
          title: "Day 1",
          url: "https://www.youtube.com/embed/UIkvOF5CHys",
        },
        {
          title: "Day 2",
          url: "https://www.youtube.com/embed/QRHlLsQU2Ok",
        },
        {
          title: "Day 3",
          url: "https://www.youtube.com/embed/1kVJjP7DVoU",
        },
        {
          title: "Day 4",
          url: "https://www.youtube.com/embed/aX3bXv2bR1Q",
        },
        {
          title: "Day 5",
          url: "https://www.youtube.com/embed/ZaVY6Xl7urk",
        },
      ],
    },
    "python-2023": {
      title: "Intro to Python 2023",
      category: "Programming",
      videos: [
        {
          title: "Day 1: Data",
          url: "https://www.youtube.com/embed/e80wn-yEDVQ",
        },
        {
          title: "Day 2: Logic",
          url: "https://www.youtube.com/embed/SIGN6d8bw5g",
        },
        {
          title: "Day 3: Functions",
          url: "https://www.youtube.com/embed/jqMvegS1zrQ",
        },
        {
          title: "Day 4: Containers",
          url: "https://www.youtube.com/embed/Y_YARLQXvZQ",
        },
        {
          title: "Day 5: Modules",
          url: "https://www.youtube.com/embed/Z6kOaoyUhoo",
        },
      ],
    },
    "weekly-math": {
      title: "Weekly 30 Min Fun Math Lecture",
      category: "Mathematics",
      videos: [
        {
          title: "Lecture 1",
          url: "https://www.youtube.com/embed/YtKOvOEq2Qs",
        },
        {
          title: "Lecture 2",
          url: "https://www.youtube.com/embed/Tyzt2yS9I8U",
        },
        {
          title: "Lecture 3",
          url: "https://www.youtube.com/embed/-QzxRQMt5I4",
        },
        {
          title: "Lecture 4",
          url: "https://www.youtube.com/embed/zDhaQ-GXqN8",
        },
        {
          title: "Lecture 5",
          url: "https://www.youtube.com/embed/3RCAS0zCX_s",
        },
        {
          title: "Lecture 6",
          url: "https://www.youtube.com/embed/Ua5LEWKSyiU",
        },
        {
          title: "Lecture 7",
          url: "https://www.youtube.com/embed/0XxHFXz3UKI",
        },
        {
          title: "Lecture 8",
          url: "https://www.youtube.com/embed/RQWsm4PfC_A",
        },
        {
          title: "Lecture 9",
          url: "https://www.youtube.com/embed/v1pbQdBcG_s",
        },
        {
          title: "Lecture 10",
          url: "https://www.youtube.com/embed/XMNzMo9G_Jw",
        },
        {
          title: "Lecture 12",
          url: "https://www.youtube.com/embed/hV6lCdcd0RI",
        },
        {
          title: "Lecture 13",
          url: "https://www.youtube.com/embed/iylew6lD9jg",
        },
        {
          title: "Lecture 14",
          url: "https://www.youtube.com/embed/tgI-7hSm9uY",
        },
        {
          title: "Lecture 15",
          url: "https://www.youtube.com/embed/ojYuYTWG7m4",
        },
        {
          title: "Lecture 16",
          url: "https://www.youtube.com/embed/zhgTd5oDPIU",
        },
        {
          title: "Lecture 17",
          url: "https://www.youtube.com/embed/1WEpIGqJ_eQ",
        },
        {
          title: "Lecture 18",
          url: "https://www.youtube.com/embed/jv6Z0XmxbHc",
        },
        {
          title: "Lecture 19",
          url: "https://www.youtube.com/embed/ko9ibkMhpvk",
        },
        {
          title: "Lecture 20",
          url: "https://www.youtube.com/embed/HCXQeFZVwjU",
        },
        {
          title: "Lecture 21",
          url: "https://www.youtube.com/embed/PHBahymJnBM",
        },
        {
          title: "Lecture 22",
          url: "https://www.youtube.com/embed/byoirn7Lj_Y",
        },
        {
          title: "Lecture 23",
          url: "https://www.youtube.com/embed/qjVjOQguoSE",
        },
      ],
    },
    "competition-math": {
      title: "Competition Math (Level 2)",
      category: "Mathematics",
      videos: [
        {
          title: "Session 1",
          url: "https://www.youtube.com/embed/V0qgAmXcpUc",
        },
        {
          title: "Session 2",
          url: "https://www.youtube.com/embed/D_odLEag-MI",
        },
        {
          title: "Session 3",
          url: "https://www.youtube.com/embed/uTLcRykK73Q",
        },
        {
          title: "Session 4",
          url: "https://www.youtube.com/embed/sVQJtpiwuTM",
        },
        {
          title: "Session 5",
          url: "https://www.youtube.com/embed/9zFDTZjHA40",
        },
        {
          title: "Session 6",
          url: "https://www.youtube.com/embed/OcRRBKQaxUU",
        },
        {
          title: "Session 7",
          url: "https://www.youtube.com/embed/0XxHFXz3UKI",
        },
        {
          title: "Session 8",
          url: "https://www.youtube.com/embed/v1pbQdBcG_s",
        },
        {
          title: "Session 9",
          url: "https://www.youtube.com/embed/co8qo7FWrS8",
        },
        {
          title: "Session 10",
          url: "https://www.youtube.com/embed/JpOyKxVtEnc",
        },
        {
          title: "Session 11",
          url: "https://www.youtube.com/embed/8LeL3Lhxl9M",
        },
        {
          title: "Session 12",
          url: "https://www.youtube.com/embed/U-dROOvYixo",
        },
        {
          title: "Session 13",
          url: "https://www.youtube.com/embed/pPywxSFdG1A",
        },
        {
          title: "Session 14",
          url: "https://www.youtube.com/embed/7U_aofF3ZGI",
        },
        {
          title: "Session 15",
          url: "https://www.youtube.com/embed/Qjjua1dcIjw",
        },
        {
          title: "Session 16",
          url: "https://www.youtube.com/embed/iF_lZq1h6zo",
        },
        {
          title: "Session 17",
          url: "https://www.youtube.com/embed/ZtAvPiLvgwc",
        },
        {
          title: "Session 18",
          url: "https://www.youtube.com/embed/psDSeW-NpT8",
        },
        {
          title: "Session 19",
          url: "https://www.youtube.com/embed/eBbIGVEM-x4",
        },
        {
          title: "Session 20",
          url: "https://www.youtube.com/embed/WwSv53kCgdE",
        },
        {
          title: "Session 21",
          url: "https://www.youtube.com/embed/VKqlUpKjDVU",
        },
        {
          title: "Session 22",
          url: "https://www.youtube.com/embed/7GLATXS3rzs",
        },
        {
          title: "Session 23",
          url: "https://www.youtube.com/embed/XCJxp-60SBI",
        },
        {
          title: "Session 24",
          url: "https://www.youtube.com/embed/qf468g-yNoU",
        },
        {
          title: "Session 25",
          url: "https://www.youtube.com/embed/-nJVbno-25s",
        },
        {
          title: "Session 26",
          url: "https://www.youtube.com/embed/ZIDCTD1ZpFc",
        },
      ],
    },
    "enrichment-math": {
      title: "Enrichment Math (Level 1)",
      category: "Mathematics",
      videos: [
        {
          title: "Session 1",
          url: "https://www.youtube.com/embed/c_c11pOIb1E",
        },
        {
          title: "Session 2",
          url: "https://www.youtube.com/embed/OzWz9J4okQ0",
        },
        {
          title: "Session 3",
          url: "https://www.youtube.com/embed/t8-UogN90Pc",
        },
        {
          title: "Session 4",
          url: "https://www.youtube.com/embed/4L2Yy7TZxFI",
        },
        {
          title: "Session 5",
          url: "https://www.youtube.com/embed/vpKdtRkSjlQ",
        },
        {
          title: "Session 6",
          url: "https://www.youtube.com/embed/Ua5LEWKSyiU",
        },
        {
          title: "Session 7",
          url: "https://www.youtube.com/embed/pe4WY_qIw5Q",
        },
        {
          title: "Session 8",
          url: "https://www.youtube.com/embed/GpBPq7OWaVw",
        },
        {
          title: "Session 9",
          url: "https://www.youtube.com/embed/NfkWq3Rrruk",
        },
        {
          title: "Session 11",
          url: "https://www.youtube.com/embed/JfJw5N7KyLE",
        },
        {
          title: "Session 12",
          url: "https://www.youtube.com/embed/sjrMp-EEYss",
        },
        {
          title: "Session 13",
          url: "https://www.youtube.com/embed/nx7kYi5PB2k",
        },
        {
          title: "Session 14",
          url: "https://www.youtube.com/embed/CY551kQwkWc",
        },
        {
          title: "Session 15",
          url: "https://www.youtube.com/embed/x6wjpm86kv8",
        },
        {
          title: "Session 16",
          url: "https://www.youtube.com/embed/i-s3AAHaOu0",
        },
        {
          title: "Session 17",
          url: "https://www.youtube.com/embed/ztJRGOJ3HRs",
        },
        {
          title: "Session 18",
          url: "https://www.youtube.com/embed/jUDC4raAGVc",
        },
        {
          title: "Session 19",
          url: "https://www.youtube.com/embed/5fx_ksEOZJ0",
        },
        {
          title: "Session 20",
          url: "https://www.youtube.com/embed/KzagGUL2vAo",
        },
        {
          title: "Session 21",
          url: "https://www.youtube.com/embed/ecqN_tKeTes",
        },
        {
          title: "Session 22",
          url: "https://www.youtube.com/embed/ao6pMz9TNJU",
        },
        {
          title: "Session 23",
          url: "https://www.youtube.com/embed/qaGUW9Bb-0E",
        },
        {
          title: "Session 24",
          url: "https://www.youtube.com/embed/FBIcm5enlDQ",
        },
        {
          title: "Session 25",
          url: "https://www.youtube.com/embed/_RdUSKqoAZQ",
        },
      ],
    },
    mathcounts: {
      title: "Mathcounts/AMC8",
      category: "Mathematics",
      videos: [
        {
          title: "Session 1: Combinatorics",
          url: "https://www.youtube.com/embed/hql_qgU3GpE",
        },
        {
          title: "Session 2: Combinatorics",
          url: "https://www.youtube.com/embed/DEfmuXllKrk",
        },
        {
          title: "Session 3: Combinatorics",
          url: "https://www.youtube.com/embed/d5LSlWyTPiM",
        },
        {
          title: "Session 4: Combinatorics",
          url: "https://www.youtube.com/embed/qCGoJ1aeCaI",
        },
        {
          title: "Session 5: Combinatorics",
          url: "https://www.youtube.com/embed/IaS9zzVW02k",
        },
        {
          title: "Session 6: Combinatorics",
          url: "https://www.youtube.com/embed/8JOWSFx3bq8",
        },
        {
          title: "Session 7: Number Theory",
          url: "https://www.youtube.com/embed/WhCCYxPBQ9I",
        },
        {
          title: "Session 8: Number Theory",
          url: "https://www.youtube.com/embed/dtRn0Ph_ngM",
        },
        {
          title: "Session 9: Number Theory",
          url: "https://www.youtube.com/embed/1BdkvL-v7mk",
        },
        {
          title: "Session 10: Number Theory",
          url: "https://www.youtube.com/embed/m2rQW4BphWs",
        },
        {
          title: "Session 11: Number Theory",
          url: "https://www.youtube.com/embed/NgEXzlw9w5s",
        },
        {
          title: "Session 12: Number Theory",
          url: "https://www.youtube.com/embed/oIwnBkrIpZA",
        },
        {
          title: "Session 13: Geometry",
          url: "https://www.youtube.com/embed/sQjlBYdvt5g",
        },
        {
          title: "Session 14: Geometry",
          url: "https://www.youtube.com/embed/PYRkOYMRGVI",
        },
        {
          title: "Session 15: Geometry",
          url: "https://www.youtube.com/embed/bFh4jqfQbdI",
        },
        {
          title: "Session 16: Geometry",
          url: "https://www.youtube.com/embed/nyA-PWXnewg",
        },
        {
          title: "Session 17: Geometry",
          url: "https://www.youtube.com/embed/zGpJvqIlSmU",
        },
        {
          title: "Session 18: Geometry",
          url: "https://www.youtube.com/embed/4wVSDsm-G1E",
        },
        {
          title: "Session 19: Geometry",
          url: "https://www.youtube.com/embed/FIYizginciY",
        },
        {
          title: "Session 20: Geometry",
          url: "https://www.youtube.com/embed/49wf0evTLNE",
        },
        {
          title: "Session 21: Geometry",
          url: "https://www.youtube.com/embed/A2zBB6Nb2kA",
        },
        {
          title: "Session 22: Geometry",
          url: "https://www.youtube.com/embed/a4kNFd6-ckI",
        },
        {
          title: "Session 23: Algebra",
          url: "https://www.youtube.com/embed/Sx5kwaPcU9Y",
        },
        {
          title: "Session 24: Algebra",
          url: "https://www.youtube.com/embed/5lPKccsBpfE",
        },
        {
          title: "Session 25: Algebra",
          url: "https://www.youtube.com/embed/fVsrVFTop4E",
        },
        {
          title: "Session 26: Algebra",
          url: "https://www.youtube.com/embed/lHiyRSblNYs",
        },
        {
          title: "Session 27: Algebra",
          url: "https://www.youtube.com/embed/H-wi3e5Py7U",
        },
        {
          title: "Session 28: Algebra",
          url: "https://www.youtube.com/embed/PFXFx4bwUxw",
        },
        {
          title: "Session 29: Algebra",
          url: "https://www.youtube.com/embed/F1ql6N1rs08",
        },
      ],
    },
    "intro-math": {
      title: "Fun Introductory Math",
      category: "Mathematics",
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
      videos: [
        {
          title: "Class 1",
          url: "https://www.youtube.com/embed/Vp5cVUHAV3k",
        },
        {
          title: "Class 2",
          url: "https://www.youtube.com/embed/OxQ6_7ofUtQ",
        },
        {
          title: "Class 3",
          url: "https://www.youtube.com/embed/97b3p-Xr5w0",
        },
      ],
    },
  };

  console.log("Available course IDs:", Object.keys(courseData));
  const course = courseData[courseId];
  console.log("Found course:", course);

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
          </div>

          <div className="grid grid-cols-1 gap-8">
            {course.videos?.map((video, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-8 border border-gray-200"
              >
                <h2 className="font-['Roboto'] font-bold text-2xl text-gray-900 mb-4">
                  {video.title}
                </h2>
                <div className="aspect-w-16 aspect-h-9 h-[500px]">
                  <iframe
                    src={video.url}
                    title={video.title}
                    className="w-full h-full rounded-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
