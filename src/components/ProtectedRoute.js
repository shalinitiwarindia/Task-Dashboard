import { Navigate } from "react-router-dom";
import { getUser } from "../utils/auth";

function ProtectedRoute({ children }) {
  const user = getUser();
  return user ? children : <Navigate to="/" />;
}

export default ProtectedRoute;
