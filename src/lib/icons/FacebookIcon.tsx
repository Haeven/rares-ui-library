import React from 'react';

interface FacebookIconProps {
  color?: string;
  size?: number;
  className?: string;
}

const FacebookIcon: React.FC<FacebookIconProps> = ({
  color = 'black',
  size = 20,
  className,
}) => {
  const width = size / 2;
  const height = size;
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.525 7.00006H7V5.00006C7 3.96806 7.084 3.31806 8.563 3.31806H10.431V0.138063C9.522 0.0440625 8.608 -0.0019375 7.693 6.25e-05C4.98 6.25e-05 3 1.65706 3 4.69906V7.00006H0V11.0001L3 10.9991V20.0001H7V10.9971L10.066 10.9961L10.525 7.00006Z"
        fill={color}
      />
    </svg>
  );
};

export { FacebookIcon };
