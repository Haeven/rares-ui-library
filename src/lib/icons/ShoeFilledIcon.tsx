import React from 'react';

interface ShoeFilledIconProps {
  color?: string;
  fill?: string;
  className?: string;
}

const ShoeFilledIcon: React.FC<ShoeFilledIconProps> = ({
  color = 'white',
  fill = 'black',
  className,
}) => {
  return (
    <svg
      viewBox="0 0 50 50"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <rect width={50} height={50} rx="10" fill={fill} />
      <path
        d="M34.6111 13C33.1153 13 31.8 13.7806 30.4444 14.6833V19.9444H27.6667V16.4153C26.7889 16.8583 25.8722 17.1667 24.8889 17.1667V21.3333H22.1111V17.1667H17.9444C16.5972 17.1667 15.1667 18.1403 15.1667 19.9444C15.1667 21.1708 15.9736 22.4667 17.4806 22.6889C16.5556 26.8889 11 26.8889 11 26.8889C11 31.6597 16.8569 38 19.5361 38C23.8958 38 25.8667 33.4208 27.4236 31.8639C29.4417 29.6972 31.2958 28.2486 32.9347 26.9694C36.1986 24.4194 38.7778 19.9444 38.7778 17.1667C38.7778 15.4917 37.6681 13 34.6111 13Z"
        fill={color}
      />
    </svg>
  );
};

export { ShoeFilledIcon };
