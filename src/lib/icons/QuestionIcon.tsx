interface QuestionIconProps {
  size?: number;
  color?: string;
}

export const QuestionIcon = ({
  size = 16,
  color = 'var(--rares-purple)',
}: QuestionIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0.5 1 13 12"
      width={size}
      fill="none"
      height={size}
      color={color}>
      <path
        d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 11C7.41421 11 7.75 10.6642 7.75 10.25C7.75 9.83579 7.41421 9.5 7 9.5C6.58579 9.5 6.25 9.83579 6.25 10.25C6.25 10.6642 6.58579 11 7 11Z"
        fill={color}
      />
      <path
        d="M7 8V7.5C7.34612 7.5 7.68446 7.39736 7.97225 7.20507C8.26003 7.01278 8.48434 6.73947 8.61679 6.4197C8.74924 6.09993 8.7839 5.74806 8.71637 5.40859C8.64885 5.06913 8.48218 4.75731 8.23744 4.51256C7.9927 4.26782 7.68087 4.10115 7.34141 4.03363C7.00194 3.9661 6.65007 4.00076 6.3303 4.13321C6.01053 4.26566 5.73722 4.48997 5.54493 4.77775C5.35264 5.06554 5.25 5.40388 5.25 5.75"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
