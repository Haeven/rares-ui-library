import React from 'react';

interface LockFilledIconProps {
  color?: string;
  fill?: string;
  className?: string;
}

const LockFilledIcon: React.FC<LockFilledIconProps> = ({
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
        d="M31.6667 21.3333H30.4762V18.9524C30.4762 15.6667 27.8095 13 24.5238 13C21.2381 13 18.5714 15.6667 18.5714 18.9524V21.3333H17.381C16.0714 21.3333 15 22.4048 15 23.7143V35.619C15 36.9286 16.0714 38 17.381 38H31.6667C32.9762 38 34.0476 36.9286 34.0476 35.619V23.7143C34.0476 22.4048 32.9762 21.3333 31.6667 21.3333ZM24.5238 32.0476C23.2143 32.0476 22.1429 30.9762 22.1429 29.6667C22.1429 28.3571 23.2143 27.2857 24.5238 27.2857C25.8333 27.2857 26.9048 28.3571 26.9048 29.6667C26.9048 30.9762 25.8333 32.0476 24.5238 32.0476ZM28.2143 21.3333H20.8333V18.9524C20.8333 16.9167 22.4881 15.2619 24.5238 15.2619C26.5595 15.2619 28.2143 16.9167 28.2143 18.9524V21.3333Z"
        fill={color}
      />
    </svg>
  );
};

export { LockFilledIcon };
