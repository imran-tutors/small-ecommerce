import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { Navigate, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function RequireAuth({ children }) {
  const [user, loading] = useAuthState(auth);

  const location = useLocation();

  if (loading) {
    return "Loading...";
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
