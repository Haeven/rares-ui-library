interface ArrowUpIconProps {
  color?: string;
  viewBox?: string;
  width?: number;
  height?: number;
  className?: string;
  rotate?: number;
}

const ArrowUpIcon = ({
  color = 'var(--rares-purple',
  viewBox = '0 0 16 9',
  height = 9,
  width = 16,
  className,
  rotate = 0,
}: ArrowUpIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      className={className}
      style={{ transform: `rotate(${rotate}deg)` }}
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.75 7.75L8 1.5L14.25 7.75"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { ArrowUpIcon };
