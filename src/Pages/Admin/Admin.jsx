import { Outlet } from "react-router-dom";
import AdminNavbar from "../../Components/Admin/AdminNavbar";
import AdminSidebar from "../../Components/Admin/AdminSidebar";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Components/firebase.init";

export default function Admin() {
  const [user] = useAuthState(auth);

  console.log({ user });
  return (
    <div>
      <AdminNavbar />
      <div className="flex">
        <AdminSidebar />
        <div className="bg-gray-100 h-[90vh] w-full p-10 overflow-y-scroll">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
