import { Button } from "@material-tailwind/react";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import auth from "../firebase.init";
import { IoIosLogOut } from "react-icons/io";

export default function AdminSidebar() {
  return (
    <div className="w-[250px] flex flex-col justify-between py-8 px-6 bg-[rgb(24,46,16)] text-white">
      <div>
        <div className="flex flex-col gap-8">
          <Link to="/dashboard/admin/orders" className="text-xl">
            All Orders
          </Link>
          <Link to="/dashboard/admin/inventory" className="text-xl">
            Inventory
          </Link>
          <Link to="/dashboard/admin/users" className="text-xl">
            Users
          </Link>

          <Link to="/dashboard/admin/profile" className="text-xl">
            Profile
          </Link>
        </div>
      </div>
      <div>
        <Button
          color="white"
          className=""
          fullWidth
          onClick={() => signOut(auth)}
        >
          <span className="flex gap-3 justify-center items-center">
            Logout <IoIosLogOut className="text-lg text-[rgb(14,12,47)]" />
          </span>
        </Button>
      </div>
    </div>
  );
}
