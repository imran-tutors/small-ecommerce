import { Outlet } from "react-router-dom";

export default function Admin() {
  //   useEffect(() => {
  //     navigate("/dashboard/admin/orders");
  //   });

  return (
    <>
      admin route
      <Outlet />
    </>
  );
}
