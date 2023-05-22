interface LogoutIconProps {
  color?: string;
  width?: number;
  height?: number;
  className?: string;
}

const LogoutIcon = ({
  color = 'var(--rares-purple)',
  width = 17,
  height = 20,
  className,
}: LogoutIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 0C0.897 0 0 0.897 0 2V18C0 19.103 0.897 20 2 20H14C15.103 20 16 19.103 16 18V13.25L14.002 14.748V18H2V2H14V5.25L16 6.75V2C16 0.897 15.103 0 14 0H2ZM12 6.25V9H7V11H12V13.75L17 10L12 6.25Z"
        fill={color}
      />
    </svg>
  );
};

export { LogoutIcon };
