import React from 'react';

interface LinkedInFilledIconProps {
  color?: string;
  backgroundColor?: string;
  size?: number;
  className?: string;
}

export const LinkedInFilledIcon: React.FC<LinkedInFilledIconProps> = ({
  size = 50,
  color = 'black',
  backgroundColor = 'white',
  className,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 10C0 4.47715 4.47715 0 10 0H40C45.5228 0 50 4.47715 50 10V40C50 45.5228 45.5228 50 40 50H10C4.47715 50 0 45.5228 0 40V10Z"
        fill={backgroundColor}
      />
      <path
        d="M17.5961 38H12.413V21.3088H17.5961V38ZM15.0017 19.0319C13.3443 19.0319 12 17.6591 12 16.0017C12 15.2056 12.3163 14.4421 12.8792 13.8792C13.4421 13.3163 14.2056 13 15.0017 13C15.7979 13 16.5614 13.3163 17.1243 13.8792C17.6872 14.4421 18.0035 15.2056 18.0035 16.0017C18.0035 17.6591 16.6586 19.0319 15.0017 19.0319ZM31.823 38V29.8748C31.823 27.9384 31.7839 25.4551 29.1282 25.4551C26.4334 25.4551 26.0204 27.5589 26.0204 29.7353V38H20.8428V21.3088H25.8139V23.5856H25.8865C26.5785 22.2742 28.2688 20.8902 30.7906 20.8902C36.0363 20.8902 37.0006 24.3446 37.0006 28.8313V38H31.823Z"
        fill={color}
      />
    </svg>
  );
};
