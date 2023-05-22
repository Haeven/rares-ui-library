interface DocumentsIconProps {
  color?: string;
  size?: number;
  className?: string;
}

export const DocumentsIcon = ({
  color = '#E0DEEB',
  size = 20,
  className,
}: DocumentsIconProps) => {
  return (
    <svg
      fill={color}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M3,21V11a1,1,0,0,1,1-1h8a1,1,0,0,1,1,1V21a1,1,0,0,1-1,1H4A1,1,0,0,1,3,21ZM20,2H10A1,1,0,0,0,9,3V4h9.5a.5.5,0,0,1,.5.5V15h1a1,1,0,0,0,1-1V3A1,1,0,0,0,20,2ZM16,19a1,1,0,0,0,1-1V7a1,1,0,0,0-1-1H6A1,1,0,0,0,5,7V8h9.5a.5.5,0,0,1,.5.5V19Z"></path>
    </svg>
  );
};
