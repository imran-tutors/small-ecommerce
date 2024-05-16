import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import TextInputField from "../../Components/Shared/TextInputField";
import { useForm } from "react-hook-form";
import { Button } from "@material-tailwind/react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Components/firebase.init";

export default function SingleProducts() {
  const params = useParams();
  const [product, setProduct] = useState([]);
  const [user] = useAuthState(auth);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetch(`https://swiftshop-server.vercel.app/product/${params.id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  useEffect(() => {
    setValue("email", user.email);
  }, [user]);

  const onSubmit = (data) => console.log(data);

  console.log(product);

  return (
    <div>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <img
            className="object-cover w-9/12 h-[450px]"
            src={product.image}
            alt=""
          />
        </div>
        <div className="bg-white shadow-md rounded-lg p-5 text-pretty box-border">
          <form onSubmit={handleSubmit(onSubmit)}>
            <p className="text-4xl font-bold">Price: ৳ {product.price}</p>
            <h1 className="text-2xl font-bold">{product.title}</h1>
            <p className="text-gray-600 mt-8">{product.description}</p>
            <p className="text-gray-600 mt-2">
              <span className="font-semibold text-gray-800">Category:</span>{" "}
              {product.category}
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <TextInputField
                  register={register}
                  errors={errors}
                  name="email"
                  label="Your email"
                  type="email"
                  size="lg"
                  disabled
                />
              </div>
              <div>
                <TextInputField
                  register={register}
                  errors={errors}
                  name="quantity"
                  label="Enter Quantity"
                  type="number"
                  size="lg"
                />
              </div>
              <div>
                <TextInputField
                  register={register}
                  errors={errors}
                  name="address"
                  label="Enter Address"
                  type="text"
                  size="lg"
                />
              </div>
              <div>
                <Button type="submit">Make Order</Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
