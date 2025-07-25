import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import { UserProvider } from "./context/UserContex";

// Pages
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import LevelPage from "./pages/LevelPage";
import LandingCourse from "./pages/LandingCourse";
import Login from "./pages/Login";

const App: React.FC = () => {
  return (
    <UserProvider>
      <Router>
        <div className="flex">
          <Sidebar />
          <div className="flex-1 flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-1 bg-gray-50 p-6">
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Dashboard />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/levels/:coursePath" element={<LevelPage />} />
                <Route
                  path="/course/:coursePath/level/:levelId"
                  element={<LandingCourse />}
                />
              </Routes>
            </main>

            <Footer />
          </div>
        </div>
      </Router>
    </UserProvider>
  );
};

export default App;
