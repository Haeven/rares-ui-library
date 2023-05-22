interface SubtractIconProps {
  color?: string;
  size?: number;
  className?: string;
}

const SubtractIcon = ({
  color = 'var(--rares-purple)',
  size = 20,
  className,
}: SubtractIconProps) => {
  const width = size;
  const height = size / 4;
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.5714 0.165039H1.42857C0.639732 0.165039 0 0.751993 0 1.47575V2.78647C0 3.51023 0.639732 4.09718 1.42857 4.09718H18.5714C19.3603 4.09718 20 3.51023 20 2.78647V1.47575C20 0.751993 19.3603 0.165039 18.5714 0.165039Z"
        fill={color}
      />
    </svg>
  );
};

export { SubtractIcon };
