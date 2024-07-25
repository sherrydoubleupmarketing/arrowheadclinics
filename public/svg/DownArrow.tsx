import React from "react";

interface DownArrowProps {
  className?: string;
}

const DownArrow: React.FC<DownArrowProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20 9L12 17L4 9L6 7L12 13L18 7L20 9Z"
        fill="black"
      />
    </svg>
  );
};

export default DownArrow;
export { DownArrow as ReactComponent };
