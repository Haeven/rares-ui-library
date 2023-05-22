interface BarChartIconProps {
  color?: string;
  size?: number;
  className?: string;
}

const BarChartIcon = ({
  color = '#E0DEEB',
  size = 20,
  className,
}: BarChartIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.6667 0V20H20V0H16.6667ZM11.1111 8.88889V20H14.4444V8.88889H11.1111ZM5.55556 13.3333V20H8.88889V13.3333H5.55556ZM0 15.5556V20H3.33333V15.5556H0Z"
        fill={color}
      />
    </svg>
  );
};

export { BarChartIcon };
