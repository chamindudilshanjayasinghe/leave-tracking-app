import React from "react";

type CommonInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
};

const CustomInput = React.forwardRef<HTMLInputElement, CommonInputProps>(
  ({ className = "", error, ...props }, ref) => {
    return (
      <div className="w-full">
        <input
          ref={ref}
          className={`block w-full pl-10 pr-3 py-2.5 border text-black rounded-lg 
            focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
            transition-all text-sm outline-none
            ${error ? "border-red-500" : "border-gray-300"}
            ${className}`}
          {...props}
        />

        {error && (
          <p className="mt-1 text-xs text-red-500">{error}</p>
        )}
      </div>
    );
  }
);

CustomInput.displayName = "CustomInput";

export default CustomInput;
