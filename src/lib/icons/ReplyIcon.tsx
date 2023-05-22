interface ReplyIconProps {
  color?: string;
  viewBox?: string;
  width?: string;
  height?: string;
  className?: string;
}

const ReplyIcon = ({
  color = 'var(--main-color5)',
  viewBox = '0 0 18 15',
  width = '18',
  height = '15',
  className,
}: ReplyIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.8646 5.28468L10.9716 0.195901C10.4558 -0.249579 9.64284 0.112061 9.64284 0.804069V3.48441C4.26465 3.54598 0 4.62387 0 9.72072C0 11.7779 1.32525 13.8159 2.79016 14.8814C3.24729 15.2139 3.89879 14.7966 3.73024 14.2576C2.21203 9.40224 4.45034 8.11324 9.64284 8.03855V10.9821C9.64284 11.6752 10.4565 12.0352 10.9716 11.5903L16.8646 6.50101C17.2353 6.18086 17.2358 5.60527 16.8646 5.28468Z"
        fill={color}
      />
    </svg>
  );
};

export { ReplyIcon };
