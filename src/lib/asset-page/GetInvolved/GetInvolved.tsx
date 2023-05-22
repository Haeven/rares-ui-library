import { Button } from '../../buttons/Button/Button';
import { LinkButton } from '../../buttons/LinkButton/LinkButton';
import { Flex } from '../../components/Flex/Flex';
import { Heading, Typography } from '../../components/Typography/Typography';

interface GetInvolvedProps {
  onClickLater: () => void;
}

export const GetInvolved = ({ onClickLater }: GetInvolvedProps) => {
  return (
    <Flex flexDirection="column" gap="30px">
      <Heading fontStyle="H3" color="raresPurple">
        Want to get involved?
      </Heading>
      <Typography>
        SIGN UP to continue viewing or investing in assets exclusively on Rares
      </Typography>
      <Flex gap="12px">
        <Button variant="secondary" onClick={onClickLater} fullWidth>
          I'll do this later
        </Button>
        <LinkButton to="/auth/register" fullWidth>
          Sign Up
        </LinkButton>
      </Flex>
    </Flex>
  );
};
