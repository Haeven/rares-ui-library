import styled from 'styled-components';
import { Flex } from '../Flex';

interface StyledImageProps {
  src: string;
  alt: string;
}

const StyledImage = styled.img<StyledImageProps>`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
`;

interface AvatarProps {
  src: string;
  alt: string;
  size?: number | number[];
}

export const Avatar = ({ src, alt, size }: AvatarProps) => {
  return (
    <Flex height={size} width={size}>
      <StyledImage src={src} alt={alt} />
    </Flex>
  );
};
