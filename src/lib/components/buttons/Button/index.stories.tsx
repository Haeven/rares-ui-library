import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from 'styled-components';
import { Flex } from '../../components/Flex';
import { Typography } from '../../components/Typography';
import { CheckIcon } from '../../icons/CheckIcon';
import { Button } from '.';

export default {
  title: 'Buttons/Buttons',
  component: Button,
} as ComponentMeta<typeof Button>;

const StyledButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Primary: ComponentStory<typeof Button> = () => {
  return (
    <Flex gap="40px">
      <StyledButtons>
        <Typography fontStyle="H2">Size md</Typography>
        <Button size="md" onClick={() => null}>
          Login
        </Button>
        <Button size="md" onClick={() => null} loading>
          Login
        </Button>
        <Button size="md" onClick={() => null} disabled>
          Login
        </Button>
        <Button
          size="md"
          onClick={() => null}
          leftIcon={<CheckIcon size={15} color="white" />}>
          Login
        </Button>
        <Button
          size="md"
          onClick={() => null}
          loading
          leftIcon={<CheckIcon size={15} color="white" />}>
          Login
        </Button>
        <Button
          size="md"
          onClick={() => null}
          disabled
          leftIcon={<CheckIcon size={15} color="white" />}>
          Login
        </Button>
      </StyledButtons>
      <StyledButtons>
        <Typography fontStyle="H2">Size lg</Typography>
        <Button onClick={() => null}>Login</Button>
        <Button onClick={() => null} loading>
          Login
        </Button>
        <Button onClick={() => null} disabled>
          Login
        </Button>
        <Button
          onClick={() => null}
          leftIcon={<CheckIcon size={15} color="white" />}>
          Login
        </Button>
        <Button
          onClick={() => null}
          loading
          leftIcon={<CheckIcon size={15} color="white" />}>
          Login
        </Button>
        <Button
          onClick={() => null}
          disabled
          leftIcon={<CheckIcon size={15} color="white" />}>
          Login
        </Button>
      </StyledButtons>
    </Flex>
  );
};

export const Secondary: ComponentStory<typeof Button> = () => {
  return (
    <Flex gap="40px">
      <StyledButtons>
        <Typography fontStyle="H2">Size md</Typography>
        <Button size="md" variant="secondary" onClick={() => null}>
          Cancel
        </Button>
        <Button size="md" variant="secondary" onClick={() => null} loading>
          Cancel
        </Button>
        <Button size="md" variant="secondary" onClick={() => null} disabled>
          Cancel
        </Button>
        <Button
          size="md"
          variant="secondary"
          onClick={() => null}
          leftIcon={<CheckIcon size={15} color="var(--rares-purple)" />}>
          Cancel
        </Button>
        <Button
          size="md"
          variant="secondary"
          onClick={() => null}
          loading
          leftIcon={<CheckIcon size={15} color="var(--rares-purple)" />}>
          Cancel
        </Button>
        <Button
          size="md"
          variant="secondary"
          onClick={() => null}
          disabled
          leftIcon={<CheckIcon size={15} color="var(--rares-purple)" />}>
          Cancel
        </Button>
      </StyledButtons>
      <StyledButtons>
        <Typography fontStyle="H2">Size lg</Typography>
        <Button variant="secondary" onClick={() => null}>
          Cancel
        </Button>
        <Button variant="secondary" onClick={() => null} loading>
          Cancel
        </Button>
        <Button variant="secondary" onClick={() => null} disabled>
          Cancel
        </Button>
        <Button
          variant="secondary"
          onClick={() => null}
          leftIcon={<CheckIcon size={15} color="var(--rares-purple)" />}>
          Cancel
        </Button>
        <Button
          variant="secondary"
          onClick={() => null}
          loading
          leftIcon={<CheckIcon size={15} color="var(--rares-purple)" />}>
          Cancel
        </Button>
        <Button
          variant="secondary"
          onClick={() => null}
          disabled
          leftIcon={<CheckIcon size={15} color="var(--rares-purple)" />}>
          Cancel
        </Button>
      </StyledButtons>
    </Flex>
  );
};

export const Text: ComponentStory<typeof Button> = () => {
  return (
    <Flex gap="40px">
      <StyledButtons>
        <Typography fontStyle="H2">Size md</Typography>
        <Button size="md" variant="text" onClick={() => null}>
          Go back
        </Button>
        <Button size="md" variant="text" onClick={() => null} loading>
          Go back
        </Button>
        <Button size="md" variant="text" onClick={() => null} disabled>
          Go back
        </Button>
        <Button
          size="md"
          variant="text"
          onClick={() => null}
          leftIcon={<CheckIcon size={15} color="var(--rares-purple)" />}>
          Go back
        </Button>
        <Button
          size="md"
          variant="text"
          onClick={() => null}
          loading
          leftIcon={<CheckIcon size={15} color="var(--rares-purple)" />}>
          Go back
        </Button>
        <Button
          size="md"
          variant="text"
          onClick={() => null}
          disabled
          leftIcon={<CheckIcon size={15} color="var(--rares-purple)" />}>
          Go back
        </Button>
      </StyledButtons>
      <StyledButtons>
        <Typography fontStyle="H2">Size lg</Typography>
        <Button variant="text" onClick={() => null}>
          Go back
        </Button>
        <Button variant="text" onClick={() => null} loading>
          Go back
        </Button>
        <Button variant="text" onClick={() => null} disabled>
          Go back
        </Button>
        <Button
          variant="text"
          onClick={() => null}
          leftIcon={<CheckIcon size={15} color="var(--rares-purple)" />}>
          Go back
        </Button>
        <Button
          variant="text"
          onClick={() => null}
          loading
          leftIcon={<CheckIcon size={15} color="var(--rares-purple)" />}>
          Go back
        </Button>
        <Button
          variant="text"
          onClick={() => null}
          disabled
          leftIcon={<CheckIcon size={15} color="var(--rares-purple)" />}>
          Go back
        </Button>
      </StyledButtons>
    </Flex>
  );
};
