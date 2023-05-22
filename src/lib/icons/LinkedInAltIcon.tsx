import React from 'react';

interface LinkedInAltProps {
  color?: string;
  size?: number;
  className?: string;
}

export const LinkedInAltIcon: React.FC<LinkedInAltProps> = ({
  size = 17,
  color = 'white',
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
        d="M14.8868 0.39624H2.20756C1.20681 0.39624 0.39624 1.20681 0.39624 2.20756V14.8868C0.39624 15.8876 1.20681 16.6981 2.20756 16.6981H14.8868C15.8876 16.6981 16.6981 15.8876 16.6981 14.8868V2.20756C16.6981 1.20681 15.8876 0.39624 14.8868 0.39624ZM5.83021 13.0755H3.54522V6.73587H5.83021V13.0755ZM4.64741 5.5739C3.94915 5.5739 3.48273 5.10839 3.48273 4.48711C3.48273 3.86583 3.94824 3.40032 4.72439 3.40032C5.42266 3.40032 5.88907 3.86583 5.88907 4.48711C5.88907 5.10839 5.42356 5.5739 4.64741 5.5739ZM13.9812 13.0755H11.7695V9.61043C11.7695 8.65224 11.1799 8.43126 10.959 8.43126C10.738 8.43126 10.0008 8.57889 10.0008 9.61043C10.0008 9.75806 10.0008 13.0755 10.0008 13.0755H7.71579V6.73587H10.0008V7.6207C10.2951 7.10447 10.8847 6.73587 11.9905 6.73587C13.0963 6.73587 13.9812 7.6207 13.9812 9.61043V13.0755Z"
        fill={color}
      />
    </svg>
  );
};
