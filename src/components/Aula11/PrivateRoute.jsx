import { Navigate } from "react-router-dom";

function PrivateRoute({ home }) {
  const isAuthenticated = false; 
  return isAuthenticated ? home : <Navigate to="/about" />;
}

export default PrivateRoute