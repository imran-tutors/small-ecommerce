import { Outlet } from "react-router-dom";
import { NavbarDefault } from "./NavMenu";

export default function Main() {
  return (
    <div>
      <NavbarDefault />
      <div className="mx-auto max-w-screen-xl mt-8">
        <Outlet />
      </div>
    </div>
  );
}
