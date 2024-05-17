/* eslint-disable react/prop-types */
import { Input } from "@material-tailwind/react";

export default function TextInputField({
  label,
  type,
  size,
  register,
  errors,
  name,
  min,
  disabled,
}) {
  return (
    <div>
      <Input
        label={label}
        type={type}
        size={size}
        min={min}
        disabled={disabled}
        {...register(name)}
      />
      <small className="text-red-500">
        {errors[name] && errors[name].message}
      </small>
    </div>
  );
}
