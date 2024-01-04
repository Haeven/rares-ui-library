import styled from 'styled-components';
import { Container } from '../../components/Container';
import { CheckIcon } from '../../icons/CheckIcon';

export const CheckboxLabel = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: 'Space Grotesk';
  font-weight: 400;
  font-size: 18px;
  cursor: pointer;
  color: var(--text-primary);
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const CheckboxInput = styled.input`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
`;

interface CheckboxIconWrapperProps {
  isChecked: boolean;
}

const CheckboxIconWrapper = styled.div<CheckboxIconWrapperProps>`
  display: flex;
  align-items: center;
  background: ${(p) => (p.isChecked ? 'white' : 'var(--main-color3)')};
  border-radius: 10px;
  border: ${(p) =>
    p.isChecked
      ? '2px solid var(--rares-purple)'
      : '2px solid var(--main-color3)'};
  width: 20px;
  min-width: 20px;
  height: 20px;
  min-height: 20px;
  padding: 5px;
`;

interface IconWrapperProps {
  isChecked: boolean;
  color: string;
}

export const IconWrapper = ({ isChecked, color }: IconWrapperProps) => (
  <CheckboxIconWrapper isChecked={isChecked}>
    {isChecked && <CheckIcon size={24} color={color} />}
  </CheckboxIconWrapper>
);

interface CheckboxProps {
  isChecked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: FCWithChildren<CheckboxProps> = ({
  isChecked,
  onChange,
  children,
}) => {
  return (
    <CheckboxLabel>
      <CheckboxInput type="checkbox" checked={isChecked} onChange={onChange} />
      <IconWrapper color="var(--rares-purple)" isChecked={isChecked} />
      {!!children && <Container margin="0 0 0 20px">{children}</Container>}
    </CheckboxLabel>
  );
};

export { Checkbox };
