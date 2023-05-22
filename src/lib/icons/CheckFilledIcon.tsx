import React from 'react';

interface CheckFilledIconProps {
  color?: string;
  fill?: string;
  className?: string;
}

const CheckFilledIcon: React.FC<CheckFilledIconProps> = ({
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
        d="M24.5 13C17.5963 13 12 18.5963 12 25.5C12 32.4037 17.5963 38 24.5 38C31.4037 38 37 32.4037 37 25.5C37 18.5963 31.4037 13 24.5 13ZM22 32.2675L16.1163 26.3837L17.8837 24.6163L22 28.7325L31.1162 19.6163L32.8838 21.3837L22 32.2675Z"
        fill={color}
      />
    </svg>
  );
};

export { CheckFilledIcon };
