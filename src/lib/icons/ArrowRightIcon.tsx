interface ArrowRightIconProps {
  color?: string;
  height?: number;
  width?: number;
  className?: string;
  rotate?: boolean;
  disabled?: boolean;
}

export const ArrowRightIcon = ({
  color = 'var(--main-color11)',
  height = 14,
  width = 8,
  className,
  rotate,
}: ArrowRightIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 8 14"
      fill="none"
      className={className}
      style={{ rotate: rotate ? '180deg' : '0deg' }}
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.17192 7.00072L0.221924 2.05072L1.63592 0.636719L7.99992 7.00072L1.63592 13.3647L0.221924 11.9507L5.17192 7.00072Z"
        fill={color}
      />
    </svg>
  );
};
