import { Outlet } from "react-router-dom";
import AdminNavbar from "../../Components/Admin/AdminNavbar";
import AdminSidebar from "../../Components/Admin/AdminSidebar";

export default function Admin() {
  return (
    <div>
      <AdminNavbar />
      <div className="flex">
        <AdminSidebar />
        <div className="bg-gray-100 min-h-[90vh] w-full p-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
