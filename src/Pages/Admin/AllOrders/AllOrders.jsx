import { Button, Card, Typography } from "@material-tailwind/react";
import { signOut } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import auth from "../../../Components/firebase.init";
import toast from "react-hot-toast";

const TABLE_HEAD = [
  "Image",
  "Title",
  "Category",
  "Price",
  "Quantity",
  "Total",
  "Order Time",
  "Status",
];

const timeConverter = (timestamp) => {
  const date = new Date(timestamp);

  const hours = date.getHours();
  const minutes = date.getMinutes();
  let formattedHours = hours % 12;

  formattedHours = formattedHours === 0 ? 12 : formattedHours;

  const period = hours < 12 ? "am" : "pm";

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const formattedDate = `${formattedHours}:${
    minutes < 10 ? "0" : ""
  }${minutes}${period}, ${day}/${month}/${year}`;

  return formattedDate;
};

export default function AllOrders() {
  const [orders, setOrders] = useState([]);
  const [selectValue, setSelectValue] = useState("");
  useEffect(() => {
    fetch("http://localhost:5000/allOrders", {
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
      .then((data) => setOrders(data));
  }, []);

  // const {
  //   register,
  //   handleSubmit,

  //   formState: { isDirty },
  // } = useForm({});

  // const onSubmit = (data, productId) => {
  //   console.log({ data,productId });
  //   // const isProceed = window.confirm("Are you sure?")
  //   // if(isProceed){
  //   //   fetch(`/order-status/${}`)
  //   // }
  // };
  const handleStatusChange = (id) => {
    console.log(JSON.stringify({ status: selectValue }));
    const isProceed = window.confirm("Are you sure?");
    if (isProceed) {
      const promise = fetch(`http://localhost:5000/order-status/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({ status: selectValue }),
      })
        .then((res) => res.json())
        .then((data) => data);

      toast.promise(promise, {
        loading: "Updating...",
        success: "Status updated",
        error: "Failed to update",
      });
    }
  };
  console.log({ selectValue });

  return (
    <div>
      <Card className="h-full w-full overflow-scroll">
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
            {[...orders].reverse().map((item) => (
              <tr key={item._id}>
                <td className="p-2">
                  <Typography
                    as="div"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    <img
                      className="w-14 rounded-md"
                      src={item.productImage}
                      alt={item.productTitle}
                    />
                  </Typography>
                </td>
                <td className="p-2">
                  <Typography
                    as="div"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    {item.productTitle.split(0, 30)}...
                  </Typography>
                </td>
                <td className="p-2">
                  <Typography
                    as="div"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    {item.productCategory}
                  </Typography>
                </td>
                <td className="p-2">
                  <Typography
                    as="div"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    ৳ {item.productPrice}
                  </Typography>
                </td>
                <td className="p-2">
                  <Typography
                    as="div"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    {item.quantity}
                  </Typography>
                </td>
                <td className="p-2">
                  <Typography
                    as="div"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    ৳ {item.productTotal}
                  </Typography>
                </td>
                <td className="p-2">
                  <Typography
                    as="div"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    {timeConverter(item.createdAt)}
                  </Typography>
                </td>
                <td className="p-2">
                  <Typography
                    as="div"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    <div className="flex items-center gap-2">
                      <select
                        name=""
                        id=""
                        className="border p-1.5 rounded-md"
                        onChange={(e) => setSelectValue(e.target.value)}
                      >
                        <option
                          value="pending"
                          selected={item.status === "pending"}
                        >
                          Pending
                        </option>
                        <option
                          value="accepted"
                          selected={item.status === "accepted"}
                        >
                          Accepted
                        </option>
                        <option
                          value="processing"
                          selected={item.status === "processing"}
                        >
                          Processing
                        </option>
                        <option
                          value="on-the-way"
                          selected={item.status === "on-the-way"}
                        >
                          On the way
                        </option>
                        <option
                          value="cancel"
                          selected={item.status === "cancel"}
                        >
                          Cancel
                        </option>
                        <option
                          value="return"
                          selected={item.status === "return"}
                        >
                          Return
                        </option>
                        <option
                          value="complete"
                          selected={item.status === "complete"}
                        >
                          Complete
                        </option>
                      </select>
                      <Button
                        size="sm"
                        onClick={() => handleStatusChange(item._id)}
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
