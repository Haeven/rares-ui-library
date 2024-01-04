import styled from 'styled-components';

interface TextAreaProps {
  invalid: boolean;
}

export const TextArea = styled.textarea<TextAreaProps>`
  width: 100%;
  box-sizing: border-box;
  padding: 16px 20px;
  background: var(--main-color3);
  border: solid 2px transparent;
  border-radius: 10px !important;
  font-size: 14px;
  line-height: 18px;
  &:focus {
    border: solid 2px var(--main-color5);
    outline: none;
    background: white;
  }
  ${({ invalid }) =>
    invalid &&
    `
    border: solid 2px var(--error-primary);
    background: white;
    `}
`;
