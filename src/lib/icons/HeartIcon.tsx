import React from 'react';

interface HeartIconProps {
  color?: string;
  viewBox?: string;
  size?: string;
  className?: string;
  style?: React.CSSProperties;
  outlined?: boolean;
}

const HeartIcon: React.FC<HeartIconProps> = ({
  color = 'var(--main-color5)',
  viewBox = '0 -1 15 15',
  size = '15',
  className,
  style,
  outlined,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={viewBox}
      className={className}
      style={style}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      {outlined ? (
        <path
          d="M8.79514 1.99232L8.7956 1.99185C9.94648 0.804355 11.7384 0.672369 12.8957 1.65857C14.2897 2.84897 14.3667 4.9989 13.1133 6.29238L13.1131 6.29259L7.49889 12.0896L1.88514 6.29302C1.88507 6.29295 1.88501 6.29289 1.88494 6.29282C0.633821 4.99917 0.710974 2.84871 2.1053 1.65835C3.26296 0.672055 5.05718 0.805026 6.20443 1.99113L6.20558 1.99232L6.78273 2.58704L7.50036 3.32653L8.21799 2.58704L8.79514 1.99232Z"
          stroke={color}
          strokeWidth="2"
        />
      ) : (
        <path
          d="M8.79514 1.99232L8.7956 1.99185C9.94648 0.804355 11.7384 0.672369 12.8957 1.65857C14.2897 2.84897 14.3667 4.9989 13.1133 6.29238L13.1131 6.29259L7.49889 12.0896L1.88514 6.29302C1.88507 6.29295 1.88501 6.29289 1.88494 6.29282C0.633821 4.99917 0.710974 2.84871 2.1053 1.65835C3.26296 0.672055 5.05718 0.805026 6.20443 1.99113L6.20558 1.99232L6.78273 2.58704L7.50036 3.32653L8.21799 2.58704L8.79514 1.99232Z"
          fill={color}
        />
      )}
    </svg>
  );
};

export { HeartIcon };
