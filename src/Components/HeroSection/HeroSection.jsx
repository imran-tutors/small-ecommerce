import { Button } from "@material-tailwind/react";

export default function HeroSection() {
  return (
    <div className="hero-section text-center rounded-xl">
      <div className="hero-color px-10 py-[220px]  space-y-8 rounded-xl">
        <h1 className="text-5xl font-bold text-white">
          Shop fresh groceries online today
        </h1>
        <p className="text-xl font-medium  text-white">
          Fresh groceries delivered. Skip the store, <br /> fill your fridge
          with ease
        </p>
        <Button color="blue">Shop now</Button>
      </div>
    </div>
  );
}
