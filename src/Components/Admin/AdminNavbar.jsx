import { useAuthState } from "react-firebase-hooks/auth";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
import auth from "../firebase.init";

export default function AdminNavbar() {
  const [user] = useAuthState(auth);
  return (
    <div className="border-b">
      <div className="flex justify-between px-10 py-6">
        <div>
          <Link to="/">Small E-commerce</Link>
        </div>
        <div className="flex gap-4 items-center">
          <div>
            <CiUser className="text-2xl" />
          </div>
          <div>
            <p className="text-sm">{user && user.displayName}</p>
            <p className="text-sm">{user && user.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
