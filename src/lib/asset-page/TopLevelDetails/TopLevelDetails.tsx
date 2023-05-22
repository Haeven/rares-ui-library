import { Avatar } from '../../components/Avatar/Avatar';
import { Flex } from '../../components/Flex/Flex';
import { Typography } from '../../components/Typography/Typography';

interface TopLevelDetailsProps {
  avatar?: { src: string; alt: string };
  symbolId: string;
  assetType: string;
  title: string;
}

export const TopLevelDetails = ({
  avatar,
  symbolId,
  assetType,
  title,
}: TopLevelDetailsProps) => {
  const formattedAssetType = assetType.toUpperCase();

  return (
    <Flex flexDirection="column" gap="20px">
      <Flex gap="15px">
        {!!avatar && <Avatar src={avatar.src} alt={avatar.alt} size={50} />}
        <Flex flexDirection="column" gap="2px">
          <Typography color="darkGrey">{symbolId}</Typography>
          <Typography color="darkGrey">{formattedAssetType}</Typography>
        </Flex>
      </Flex>
      <Typography fontStyle="H2">{title}</Typography>
    </Flex>
  );
};
