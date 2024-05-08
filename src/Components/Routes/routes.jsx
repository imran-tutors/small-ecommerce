import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Main from "../Layout/Main";
import Products from "../../Pages/Products/Products";
import Cart from "../../Pages/Cart/Cart";
import Checkout from "../../Pages/Checkout/Checkout";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Profile from "../../Pages/Profile/Profile";
import Orders from "../../Pages/Orders/Orders";
import Admin from "../../Pages/Admin/Admin";
import AdminDashboard from "../../Pages/Admin/AdminDashboard/AdminDashboard";
import Inventory from "../../Pages/Admin/Inventory/Inventory";
import ProductUpload from "../../Pages/Admin/ProductUpload/ProductUpload";
import AllOrders from "../../Pages/Admin/AllOrders/AllOrders";
import AllUsers from "../../Pages/Admin/AllUsers/AllUsers";
import AdminProfile from "../../Pages/Admin/AdminProfile/AdminProfile";
import { LoginCard } from "../../Pages/Login/Login";
import { Register } from "../../Pages/Register/Register";
import RequireAuth from "../RequiredAuth/RequireAuth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:id",
        element: <Products />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
    ],
  },
  {
    path: "/dashboard",
    index: <Dashboard />,
    children: [
      {
        path: "profile",
        element: (
          <RequireAuth>
            <Profile />
          </RequireAuth>
        ),
      },
      {
        path: "orders",
        element: (
          <RequireAuth>
            <Orders />
          </RequireAuth>
        ),
      },
    ],
  },
  {
    path: "/dashboard/admin",
    element: <Admin />,
    children: [
      {
        path: "/dashboard/admin",
        element: <AdminDashboard />,
      },
      {
        path: "inventory",
        element: <Inventory />,
      },
      {
        path: "product-upload",
        element: <ProductUpload />,
      },
      {
        path: "orders",
        element: <AllOrders />,
      },
      {
        path: "users",
        element: <AllUsers />,
      },
      {
        path: "profile",
        element: <AdminProfile />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginCard />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/forgot-password",
    element: <div>Forgot Password</div>,
  },
  {
    path: "*",
    element: <div>404 Not Found</div>,
  },
]);

export default router;
