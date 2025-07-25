import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContex";

// Pages
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import LevelPage from "./pages/LevelPage";
import LandingCourse from "./pages/LandingCourse";
import Login from "./pages/Login";

// Layout
import Layout from "./components/Layout";

const App: React.FC = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>
          {/* Login page without layout */}
          <Route path="/login" element={<Login />} />

          {/* All other pages with layout */}
          <Route
            path="*"
            element={
              <Layout>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/courses" element={<Courses />} />
                  <Route path="/levels/:coursePath" element={<LevelPage />} />
                  <Route
                    path="/course/:coursePath/level/:levelId"
                    element={<LandingCourse />}
                  />
                </Routes>
              </Layout>
            }
          />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;
