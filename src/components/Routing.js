import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Login from "./Login";
import Dashboard from "../pages/patient/Dashboard";
import HeroSection from "../HeroSection";
import Profile from "../pages/patient/Profile";
import DoctorProfile from "../pages/doctor/Profile"
import DoctorDashboard from "../pages/doctor/Dashboard"

function Routing() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HeroSection />} />

        {/* Protected Routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/clientProfile" element={<Profile />} />
          <Route path="/doctorProfile" element={<DoctorProfile />} />
          <Route path="/doctorDashboard" element={<DoctorDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default Routing;
