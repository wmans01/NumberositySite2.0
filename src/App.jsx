import React from "react";
import Home from "/src/components/pages/Home";
import About from "/src/components/pages/About";
import Teams from "/src/components/pages/Teams";
import Learning from "/src/components/pages/Learning";
import Outreach from "/src/components/pages/Outreach";
import News from "/src/components/pages/News";
import Resources from "/src/components/pages/Resources";
import Join from "/src/components/pages/Join";
import Donate from "/src/components/pages/Donations";
import Footer from "/src/components/Footer";
import PageNotFound from "/src/components/pages/PageNotFound";
import PageTitle from "/src/components/PageTitle";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <PageTitle />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/outreach" element={<Outreach />} />
          <Route path="/news" element={<News />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/join" element={<Join />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/error" element={<Error />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
