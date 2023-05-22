interface AddIconProps {
  color?: string;
  size?: number;
  className?: string;
}

const AddIcon = ({
  color = 'var(--rares-purple)',
  size = 20,
  className,
}: AddIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.5714 7.20893H12.1429V1.31071C12.1429 0.586954 11.5031 0 10.7143 0H9.28571C8.49687 0 7.85714 0.586954 7.85714 1.31071V7.20893H1.42857C0.639732 7.20893 0 7.79588 0 8.51964V9.83036C0 10.5541 0.639732 11.1411 1.42857 11.1411H7.85714V17.0393C7.85714 17.763 8.49687 18.35 9.28571 18.35H10.7143C11.5031 18.35 12.1429 17.763 12.1429 17.0393V11.1411H18.5714C19.3603 11.1411 20 10.5541 20 9.83036V8.51964C20 7.79588 19.3603 7.20893 18.5714 7.20893Z"
        fill={color}
      />
    </svg>
  );
};

export { AddIcon };
