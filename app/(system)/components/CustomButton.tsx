import React from "react";

type CommonButtonProps = {
  type?: "button" | "submit" | "reset";
  isLoading?: boolean;
  fullWidth?: boolean; // 👈 add this
  disabled?: boolean;
  children: React.ReactNode;
  loadingText?: string;
  className?: string;
  [key: string]: any;
};

const CustomButton = ({
  type = "button",
  isLoading = false,
  disabled = false,
  fullWidth = false,
  children,
  loadingText = "Loading...",
  className = "",
  ...props
}: CommonButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      className={` ${fullWidth ? "w-full" : "w-auto"} flex items-center justify-center py-2.5 px-4 
        border border-transparent rounded-lg shadow-sm text-sm font-medium text-white 
        bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 
        focus:ring-offset-2 focus:ring-indigo-500 transition-all
        ${isLoading || disabled ? "opacity-70 cursor-not-allowed" : "hover:shadow-md"}
        ${className}`}
      {...props}
    >
      {isLoading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}

      {isLoading ? loadingText : children}
    </button>
  );
};

export default CustomButton;
