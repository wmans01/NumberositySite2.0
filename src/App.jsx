import React from "react";
import Home from "/src/components/pages/Home";
import About from "/src/components/pages/About";
import AboutPeople from "/src/components/pages/AboutPeople";
import AboutVex from "/src/components/pages/AboutVex";
import Teams from "/src/components/pages/Teams";
import Learning from "/src/components/pages/Learning";
import Courses from "/src/components/pages/learning/Courses";
import CoursePage from "/src/components/pages/learning/CoursePage";
import Summer from "/src/components/pages/learning/Summer";
import Outreach from "/src/components/pages/Outreach";
import News from "/src/components/pages/News";
import NewsArticle from "/src/components/pages/news/NewsArticle";
import Join from "/src/components/pages/Join";
import Donate from "/src/components/pages/Donations";
import Footer from "/src/components/Footer";
import PageNotFound from "/src/components/pages/PageNotFound";
import PageTitle from "/src/components/PageTitle";
import TeamPage from "/src/components/pages/teams/TeamPage";
import { Route, Routes } from "react-router-dom";
import Summer2025 from "/src/components/pages/learning/Summer2025";
import RoboBridge from "/src/components/pages/outreach/RoboBridge";
import RoboLight from "/src/components/pages/outreach/RoboLight";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <PageTitle />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/people" element={<AboutPeople />} />
          <Route path="/about/vex" element={<AboutVex />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/teams/:teamId" element={<TeamPage />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/learning/courses" element={<Courses />} />
          <Route path="/learning/courses/:courseId" element={<CoursePage />} />
          <Route path="/learning/summer" element={<Summer />} />
          <Route path="/learning/summer/2024" element={<Summer />} />
          <Route path="/learning/summer/2025" element={<Summer2025 />} />
          <Route path="/outreach" element={<Outreach />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:articleId" element={<NewsArticle />} />
          <Route path="/join" element={<Join />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/error" element={<Error />} />
          <Route path="/outreach" element={<Outreach />} />
          <Route path="/outreach/robobridge" element={<RoboBridge />} />
          <Route path="/outreach/robolight" element={<RoboLight />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
