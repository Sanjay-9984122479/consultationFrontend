import { Navigate, Outlet } from "react-router-dom";

// Mock authentication function (replace with real authentication logic)
const useAuth = () => {
  return localStorage.getItem("token") ? true : false;
};

const PrivateRoute = () => {
  return useAuth() ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
