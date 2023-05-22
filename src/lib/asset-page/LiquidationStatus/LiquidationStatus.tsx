import { Heading, Typography } from '../../components/Typography/Typography';
import { LinkButton } from '../../buttons/LinkButton/LinkButton';
import { Spacer } from '../../form-components/Spacer/Spacer';
import { Flex } from '../../components/Flex/Flex';

export const LiquidationStatus = ({ isPending = false }) => {
  const liquidationMessage = isPending
    ? `You can no longer buy or sell shares in this asset because it is closed
    and is pending liquidation.`
    : `You can no longer buy or sell shares in this asset because it has been
    liquidated and funds have been distributed.`;

  const buttonText = isPending ? 'See Other Investments' : 'View In Stockroom';
  const headerText = isPending ? 'Pending Liquidation' : 'Liquidated';

  return (
    <Flex
      padding="20px 0 30px"
      margin="20px 0"
      borderTop={'1px var(--main-color3) solid'}
      borderBottom={'1px var(--main-color3) solid'}
      alignItems="flex-start"
      flexDirection="column">
      <Heading color="var(--rares-purple)" fontStyle="H3">
        {headerText}
      </Heading>
      <Spacer size="20px" />
      <Typography>{liquidationMessage}</Typography>
      <Spacer size="40px" />
      <LinkButton to="/portfolio" fullWidth>
        {buttonText}
      </LinkButton>
    </Flex>
  );
};
