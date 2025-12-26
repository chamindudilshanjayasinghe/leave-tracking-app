import React from "react";


type CommonInputProps = {
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  className?: string;
  [key: string]: any;
};

const CustomInput = ({
  type = "text",
  value,
  onChange,
  placeholder = "",
  required = false,
  className = "",
  ...props
}: CommonInputProps) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className={`block w-full pl-10 pr-3 py-2.5 border border-gray-300 text-black rounded-lg 
        focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
        transition-all text-sm outline-none ${className}`}
      {...props}
    />
  );
};

export default CustomInput;
