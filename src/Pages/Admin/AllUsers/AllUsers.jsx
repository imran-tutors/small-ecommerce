import { Button, Card, Typography } from "@material-tailwind/react";
import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import auth from "../../../Components/firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";

const TABLE_HEAD = ["Email", "Role"];

export default function AllUsers() {
  const [users, setUsers] = useState([]);
  const [userRole, setUserRole] = useState("");
  const [user] = useAuthState(auth);

  useEffect(() => {
    fetch("http://localhost:5000/all-users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          signOut(auth);
          localStorage.removeItem("accessToken");
        }
        return res.json();
      })
      .then((data) => setUsers(data));
  }, []);

  console.log({ users });

  const handleUpdateRole = (id) => {
    console.log({ role: userRole, id });
    const isProceed = window.confirm("Are you sure?");
    if (isProceed) {
      const promise = fetch(`http://localhost:5000/user/admin/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({ role: userRole }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));

      toast.promise(promise, {
        loading: "Updating...",
        success: "Role updated successfully",
        error: "Failed to update role",
      });
    }
  };

  return (
    <div>
      <Card className="h-full w-6/12 overflow-scroll">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[...users].reverse().map((user) => (
              <tr key={user._id}>
                <td className="p-2">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {user.email}
                  </Typography>
                </td>
                <td>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal capitalize"
                  >
                    {/* {user.role ? user.role : "Customer"} */}
                    <div className="space-x-1 p-1.5">
                      <select
                        className="border p-2 rounded-md "
                        defaultValue={
                          user.role === "admin" ? "admin" : "customer"
                        }
                        onChange={(e) => setUserRole(e.target.value)}
                      >
                        <option value="customer">Customer</option>
                        <option value="admin">Admin</option>
                      </select>
                      <Button
                        size="sm"
                        onClick={() => handleUpdateRole(user._id)}
                      >
                        Save
                      </Button>
                    </div>
                  </Typography>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
