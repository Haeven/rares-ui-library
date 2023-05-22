interface CloseIconProps {
  color?: string;
  viewBox?: string;
  width?: string;
  height?: string;
  className?: string;
}

const CloseIcon = ({
  color = 'var(--main-color5)',
  viewBox = '0 0 15 15',
  className,
  height = '15px',
  width = '15px',
}: CloseIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      fill="none"
      height={height}
      width={width}
      className={className}>
      <path
        d="M20.562,18.789,25.92,13.43a1.256,1.256,0,0,0-1.775-1.776l-5.357,5.359L13.43,11.654a1.256,1.256,0,1,0-1.775,1.776l5.357,5.359-5.357,5.359a1.256,1.256,0,0,0,1.775,1.776l5.357-5.359,5.357,5.359a1.256,1.256,0,0,0,1.775-1.776Z"
        transform="translate(-11.285 -11.289)"
        fill={color}
      />
    </svg>
  );
};

export { CloseIcon };
