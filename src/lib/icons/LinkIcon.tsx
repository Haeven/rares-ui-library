interface LinkIconProps {
  color?: string;
  viewBox?: string;
  width?: string;
  height?: string;
  className?: string;
}

const LinkIcon = ({
  color = 'var(--rares-purple)',
  viewBox = '0 0 20 19',
  className,
  height = '19',
  width = '20',
}: LinkIconProps) => {
  return (
    <svg
      viewBox={viewBox}
      height={height}
      width={width}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.25 6.875V1.25H12.625"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.5 8L18.25 1.25"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.25 11V17C15.25 17.1989 15.171 17.3897 15.0303 17.5303C14.8897 17.671 14.6989 17.75 14.5 17.75H2.5C2.30109 17.75 2.11032 17.671 1.96967 17.5303C1.82902 17.3897 1.75 17.1989 1.75 17V5C1.75 4.80109 1.82902 4.61032 1.96967 4.46967C2.11032 4.32902 2.30109 4.25 2.5 4.25H8.5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { LinkIcon };
