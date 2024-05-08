import { yupResolver } from "@hookform/resolvers/yup";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";
import TextInputField from "../../Components/Shared/TextInputField";

const schema = yup
  .object({
    name: yup.string().required("Name is required"),
    email: yup.string().email().required("Email is required"),
    password: yup
      .string()
      .min(6, "Minimum 6 character")
      .required("Password is required"),
    retypePassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  })
  .required("Retype Password is required");

export function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleRegisterForm = (data) => {
    console.log({ data });
  };

  console.log({ errors });

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Card className="w-96">
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Register
          </Typography>
        </CardHeader>
        <form onSubmit={handleSubmit(handleRegisterForm)}>
          <CardBody className="flex flex-col gap-4">
            <TextInputField
              label="Name"
              type="text"
              size="lg"
              name="name"
              errors={errors}
              register={register}
            />
            <TextInputField
              label="Email"
              type="email"
              size="lg"
              name="email"
              errors={errors}
              register={register}
            />
            <TextInputField
              label="Password"
              type="password"
              name="password"
              size="lg"
              errors={errors}
              register={register}
            />
            <TextInputField
              label="Retype Password"
              type="password"
              size="lg"
              name="retypePassword"
              errors={errors}
              register={register}
            />
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" type="submit" fullWidth>
              Register
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Already have account?
              <Typography
                as="div"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
              >
                <Link to="/login">Login</Link>
              </Typography>
            </Typography>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
