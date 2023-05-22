interface CheckIconProps {
  color?: string;
  viewBox?: string;
  className?: string;
  size?: number;
}

const CheckIcon = ({
  color = 'black',
  viewBox = '0 0 20 15',
  className,
  size = 15,
}: CheckIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      fill="none"
      className={className}
      height={size}
      width={size}>
      <path
        d="M4.47621 14.6796L0.311785 10.5672C-0.0605954 10.1866 -0.104562 9.59308 0.207674 9.16175C0.378434 8.9075 0.65735 8.7467 0.962945 8.72632C1.26854 8.70595 1.56633 8.8283 1.76933 9.05764L5.20499 12.4933L17.49 0.208233C17.9045 -0.102633 18.4845 -0.0614129 18.8509 0.304945C19.2172 0.671301 19.2585 1.25129 18.9476 1.66578L5.93376 14.6796C5.74644 14.8838 5.48206 15 5.20499 15C4.92791 15 4.66353 14.8838 4.47621 14.6796Z"
        fill={color}
      />
    </svg>
  );
};

export { CheckIcon };
