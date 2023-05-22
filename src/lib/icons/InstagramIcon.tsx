interface InstagramIconProps {
  color?: string;
  viewBox?: string;
  width?: string;
  height?: string;
  className?: string;
}

const InstagramIcon = ({
  color = 'var(--main-color5)',
  viewBox = '0 0 37 38',
  className,
  height = '38',
  width = '37',
}: InstagramIconProps) => {
  return (
    <svg
      viewBox={viewBox}
      height={height}
      width={width}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.5 26.5C22.6421 26.5 26 23.1421 26 19C26 14.8579 22.6421 11.5 18.5 11.5C14.3579 11.5 11 14.8579 11 19C11 23.1421 14.3579 26.5 18.5 26.5Z"
        stroke={color}
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M26.7499 1.75H10.2499C5.27937 1.75 1.24993 5.77944 1.24993 10.75V27.25C1.24993 32.2206 5.27937 36.25 10.2499 36.25H26.7499C31.7205 36.25 35.7499 32.2206 35.7499 27.25V10.75C35.7499 5.77944 31.7205 1.75 26.7499 1.75Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28.25 11.5C29.4927 11.5 30.5 10.4926 30.5 9.25C30.5 8.00736 29.4927 7 28.25 7C27.0074 7 26 8.00736 26 9.25C26 10.4926 27.0074 11.5 28.25 11.5Z"
        fill={color}
      />
    </svg>
  );
};

export { InstagramIcon };
