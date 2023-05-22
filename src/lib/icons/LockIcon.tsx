interface LockIconProps {
  size?: number;
  color?: string;
}

const LockIcon = ({
  size = 20,
  color = 'var(--text-primary)',
}: LockIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0,0,256,256"
      width={size}
      height={size}>
      <g fill={color}>
        <g transform="scale(8,8)">
          <path d="M16,3c-3.84375,0 -7,3.15625 -7,7v3h-3v16h20v-16h-3v-3c0,-3.84375 -3.15625,-7 -7,-7zM16,5c2.75391,0 5,2.24609 5,5v3h-10v-3c0,-2.75391 2.24609,-5 5,-5zM8,15h16v12h-16z"></path>
        </g>
      </g>
    </svg>
  );
};

export { LockIcon };
