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

const schema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

export function LoginCard() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleLoginForm = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Card className="w-96">
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Login
          </Typography>
        </CardHeader>
        <form onSubmit={handleSubmit(handleLoginForm)}>
          <CardBody className="flex flex-col gap-4">
            <TextInputField
              label="Email"
              type="email"
              name="email"
              size="lg"
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
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" type="submit" fullWidth>
              Login
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Don&apos;t have an account?
              <Typography
                as="div"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
              >
                <Link to="/register">Register</Link>
              </Typography>
            </Typography>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
