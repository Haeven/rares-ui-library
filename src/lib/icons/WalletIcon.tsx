interface WalletIconProps {
  color?: string;
  size?: number;
  className?: string;
}

const WalletIcon = ({
  color = '#E0DEEB',
  size = 20,
  className,
}: WalletIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.33333 0C1.50559 0 0 1.50559 0 3.33333V17.7778C0 19.0056 0.994444 20 2.22222 20H17.7778C19.0056 20 20 19.0056 20 17.7778V6.66667C20 5.43889 19.0056 4.44444 17.7778 4.44444H5.55556H3.33333C2.70552 4.44444 2.22222 3.96114 2.22222 3.33333C2.22222 2.70552 2.70552 2.22222 3.33333 2.22222H18.8889V0H3.33333ZM16.6667 11.1111C17.28 11.1111 17.7778 11.6089 17.7778 12.2222C17.7778 12.8356 17.28 13.3333 16.6667 13.3333C16.0533 13.3333 15.5556 12.8356 15.5556 12.2222C15.5556 11.6089 16.0533 11.1111 16.6667 11.1111Z"
        fill={color}
      />
    </svg>
  );
};

export { WalletIcon };
