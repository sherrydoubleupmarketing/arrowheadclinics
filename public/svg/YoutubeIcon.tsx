import React from "react";

interface YoutubeIconProps {
  className?: string;
}

const YoutubeIcon: React.FC<YoutubeIconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="17"
      height="20"
      viewBox="0 0 26 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M25.5 14.1667L0 0V28.3333" fill="#fff" />
    </svg>
  );
};

export default YoutubeIcon;
export { YoutubeIcon as ReactComponent };
