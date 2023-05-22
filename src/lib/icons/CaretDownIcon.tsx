import styled from 'styled-components';

const StyledSvg = styled.svg<{ rotate: number }>`
  transition: transform 0.2s ease-in-out;
  transform: rotate(${({ rotate }) => rotate}deg);
`;

interface CaretDownIconProps {
  color?: string;
  viewBox?: string;
  size?: number;
  rotate?: number;
}

const CaretDownIcon = ({
  color = 'var(--rares-purple',
  viewBox = '0 0 15 14',
  size = 15,
  rotate = 0,
}: CaretDownIconProps) => {
  return (
    <StyledSvg
      rotate={rotate}
      width={size}
      height={size}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M15 0.333313H0V13.6666H15V0.333313Z" fill="transparent" />
      <path
        d="M12.1875 5.33331L7.5 9.49998L2.8125 5.33331"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSvg>
  );
};

export { CaretDownIcon };
