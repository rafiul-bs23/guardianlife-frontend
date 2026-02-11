import React from "react";
import { ArrowRight } from "lucide-react";

type ActionButtonProps = {
  text: string;
  icon?: React.ReactNode;
  onClick: () => void;
  variant?: "orange" | "white";
  className?: string;
};

const ActionButton: React.FC<ActionButtonProps> = ({
  text,
  icon,
  onClick,
  variant = "orange",
  className = "",
}) => {
  const isOrange = variant === "orange";

  return (
    <button
      onClick={onClick}
      className={`
        flex items-center gap-3 rounded-full px-5 py-2 font-medium transition
        ${isOrange
          ? "bg-orange-500 text-white"
          : "bg-white text-orange-500 border border-orange-500"
        }
        ${className}
      `}
    >
      {/* Optional Main Icon */}
      {icon && <span className="flex items-center">{icon}</span>}

      {/* Text */}
      <span className="whitespace-nowrap font-medium text-[20px] leading-[24px]">{text}</span>

      {/* Arrow */}
      <span
        className={`ml-2 flex h-8 w-8 items-center justify-center rounded-full
          ${isOrange ? "bg-white text-orange-500" : "bg-orange-500 text-white"}
        `}
      >
        <ArrowRight size={16} />
      </span>
    </button>
  );
};

export default ActionButton;
