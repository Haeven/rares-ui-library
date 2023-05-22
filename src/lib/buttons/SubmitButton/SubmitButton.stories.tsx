import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from 'styled-components';
import { CheckIcon } from '../../icons/CheckIcon';
import { SubmitButton } from './SubmitButton';

export default {
  title: 'Buttons/Submit Buttons',
  component: SubmitButton,
} as ComponentMeta<typeof SubmitButton>;

const StyledSubmitButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Primary: ComponentStory<typeof SubmitButton> = () => {
  return (
    <StyledSubmitButtons>
      <SubmitButton>Submit</SubmitButton>
      <SubmitButton loading>Submit</SubmitButton>
      <SubmitButton disabled>Submit</SubmitButton>
      <SubmitButton leftIcon={<CheckIcon size={15} color="white" />}>
        Submit
      </SubmitButton>
      <SubmitButton loading leftIcon={<CheckIcon size={15} color="white" />}>
        Submit
      </SubmitButton>
      <SubmitButton disabled leftIcon={<CheckIcon size={15} color="white" />}>
        Submit
      </SubmitButton>
    </StyledSubmitButtons>
  );
};

export const Secondary: ComponentStory<typeof SubmitButton> = () => {
  return (
    <StyledSubmitButtons>
      <SubmitButton variant="secondary">Submit</SubmitButton>
      <SubmitButton variant="secondary" loading>
        Submit
      </SubmitButton>
      <SubmitButton variant="secondary" disabled>
        Submit
      </SubmitButton>
      <SubmitButton
        variant="secondary"
        leftIcon={<CheckIcon size={15} color="var(--rares-purple)" />}>
        Submit
      </SubmitButton>
      <SubmitButton
        variant="secondary"
        loading
        leftIcon={<CheckIcon size={15} color="var(--rares-purple)" />}>
        Submit
      </SubmitButton>
      <SubmitButton
        variant="secondary"
        disabled
        leftIcon={<CheckIcon size={15} color="var(--rares-purple)" />}>
        Submit
      </SubmitButton>
    </StyledSubmitButtons>
  );
};

export const Text: ComponentStory<typeof SubmitButton> = () => {
  return (
    <StyledSubmitButtons>
      <SubmitButton variant="text">Submit</SubmitButton>
      <SubmitButton variant="text" loading>
        Submit
      </SubmitButton>
      <SubmitButton variant="text" disabled>
        Submit
      </SubmitButton>
      <SubmitButton
        variant="text"
        leftIcon={<CheckIcon size={15} color="var(--rares-purple)" />}>
        Submit
      </SubmitButton>
      <SubmitButton
        variant="text"
        loading
        leftIcon={<CheckIcon size={15} color="var(--rares-purple)" />}>
        Submit
      </SubmitButton>
      <SubmitButton
        variant="text"
        disabled
        leftIcon={<CheckIcon size={15} color="var(--rares-purple)" />}>
        Submit
      </SubmitButton>
    </StyledSubmitButtons>
  );
};
