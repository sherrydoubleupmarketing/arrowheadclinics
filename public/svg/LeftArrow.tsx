import React from "react";

interface LeftArrowProps {
  className?: string;
}

const LeftArrow: React.FC<LeftArrowProps> = ({ className }) => {
  return (
    <svg
      width="18"
      height="14"
      viewBox="0 0 18 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.86606 0.198409C7.60151 -0.0661363 7.17265 -0.0661363 6.9081 0.198409L0.585505 6.52094C0.458421 6.64793 0.387066 6.82027 0.387066 6.99992C0.387066 7.17957 0.458421 7.35191 0.585505 7.47899L6.9081 13.8016C7.17265 14.0661 7.60151 14.0661 7.86606 13.8016C8.13062 13.537 8.13062 13.1081 7.86606 12.8435L2.69996 7.67734L17.3226 7.67734C17.6967 7.67734 18 7.37404 18 6.99992C18 6.6258 17.6967 6.3225 17.3226 6.3225L2.69996 6.3225L7.86606 1.15643C8.13062 0.89188 8.13062 0.462965 7.86606 0.198409Z"
        fill="#C3322D"
      />
    </svg>
  );
};

export default LeftArrow;
export { LeftArrow as ReactComponent };
