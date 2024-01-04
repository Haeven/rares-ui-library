import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from 'styled-components';
import { CheckIcon } from '../../icons/CheckIcon';
import { LinkButton } from '.';

export default {
  title: 'Buttons/Link Buttons',
  component: LinkButton,
} as ComponentMeta<typeof LinkButton>;

const StyledLinkButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Primary: ComponentStory<typeof LinkButton> = () => {
  return (
    <StyledLinkButtons>
      <LinkButton to="">Invest</LinkButton>
      <LinkButton to="" loading>
        Invest
      </LinkButton>
      <LinkButton to="" disabled>
        Invest
      </LinkButton>
      <LinkButton to="" leftIcon={<CheckIcon size={15} color="white" />}>
        Invest
      </LinkButton>
      <LinkButton
        to=""
        loading
        leftIcon={<CheckIcon size={15} color="white" />}>
        Invest
      </LinkButton>
      <LinkButton
        to=""
        disabled
        leftIcon={<CheckIcon size={15} color="white" />}>
        Invest
      </LinkButton>
    </StyledLinkButtons>
  );
};

export const Secondary: ComponentStory<typeof LinkButton> = () => {
  return (
    <StyledLinkButtons>
      <LinkButton variant="secondary" to="">
        Invest
      </LinkButton>
      <LinkButton variant="secondary" to="" loading>
        Invest
      </LinkButton>
      <LinkButton variant="secondary" to="" disabled>
        Invest
      </LinkButton>
      <LinkButton
        variant="secondary"
        to=""
        leftIcon={<CheckIcon size={15} color="var(--rares-purple)" />}>
        Invest
      </LinkButton>
      <LinkButton
        variant="secondary"
        to=""
        loading
        leftIcon={<CheckIcon size={15} color="var(--rares-purple)" />}>
        Invest
      </LinkButton>
      <LinkButton
        variant="secondary"
        to=""
        disabled
        leftIcon={<CheckIcon size={15} color="var(--rares-purple)" />}>
        Invest
      </LinkButton>
    </StyledLinkButtons>
  );
};

export const Text: ComponentStory<typeof LinkButton> = () => {
  return (
    <StyledLinkButtons>
      <LinkButton variant="text" to="">
        Invest
      </LinkButton>
      <LinkButton variant="text" to="" loading>
        Invest
      </LinkButton>
      <LinkButton variant="text" to="" disabled>
        Invest
      </LinkButton>
      <LinkButton
        variant="text"
        to=""
        leftIcon={<CheckIcon size={15} color="var(--rares-purple)" />}>
        Invest
      </LinkButton>
      <LinkButton
        variant="text"
        to=""
        loading
        leftIcon={<CheckIcon size={15} color="var(--rares-purple)" />}>
        Invest
      </LinkButton>
      <LinkButton
        variant="text"
        to=""
        disabled
        leftIcon={<CheckIcon size={15} color="var(--rares-purple)" />}>
        Invest
      </LinkButton>
    </StyledLinkButtons>
  );
};
