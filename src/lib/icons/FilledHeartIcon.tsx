interface FilledHeartIconProps {
  color?: string;
  width?: number;
  height?: number;
  className?: string;
}

const FilledHeartIcon = ({
  color = '#E0DEEB',
  width = 22,
  height = 20,
  className,
}: FilledHeartIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.8038 0C12.6485 0 10.8992 2.27793 10.8992 2.27793C10.8992 2.27793 9.14986 0 5.99455 0C2.68338 0 0 2.68338 0 5.99455C0 10.5406 5.35368 14.946 6.84578 16.3379C8.56458 17.9401 10.8992 20 10.8992 20C10.8992 20 13.2338 17.9401 14.9526 16.3379C16.4447 14.946 21.7984 10.5406 21.7984 5.99455C21.7984 2.68338 19.115 0 15.8038 0Z"
        fill={color}
      />
    </svg>
  );
};

export { FilledHeartIcon };
