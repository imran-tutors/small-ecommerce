import { Outlet } from "react-router-dom";
import CustomerNavbar from "../../Components/Customer/CustomerNavbar";
import CustomerSidebar from "../../Components/Customer/CustomerSidebar";

export default function Dashboard() {
  return (
    <div>
      <CustomerNavbar />
      <div className="flex">
        <CustomerSidebar />
        <div className="bg-gray-100 min-h-[90vh] w-full p-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
