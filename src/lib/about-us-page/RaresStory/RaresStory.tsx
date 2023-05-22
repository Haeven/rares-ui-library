import { AppBlock } from '../../components/AppBlock';
import { Flex } from '../../components/Flex/Flex';
import { ResponsiveImage } from '../../components/ResponsiveImage/ResponsiveImage';
import { Typography, Heading } from '../../components/Typography/Typography';

interface RaresStoryProps {
  title: string;
  textBlocks: Array<string>;
  imageCaption: string;
  imageUrl: string;
}

export const RaresStory = ({
  title,
  imageCaption,
  textBlocks,
  imageUrl,
}: RaresStoryProps) => {
  return (
    <AppBlock>
      <Flex
        gap={['40px', '40px', '40px', '8%']}
        alignItems="center"
        flexDirection={{ _: 'column', phone: 'row' }}>
        <Flex
          flexDirection="column"
          gap="10px"
          flex="1"
          px={{ _: '20px', phone: '0px' }}>
          <Flex aspectRatio={0.75} maxWidth={{ _: '250px', phone: '100%' }}>
            <ResponsiveImage width="100%" aspectRatio={0.75} src={imageUrl} />
          </Flex>
          <Typography fontStyle="BodyS">{imageCaption}</Typography>
        </Flex>
        <Flex flex="1.5" flexDirection="column" gap="20px">
          <Heading color="raresPurple" fontStyle="H2">
            {title}
          </Heading>
          <Flex flexDirection="column" gap="15px">
            {textBlocks.map((textBlock) => (
              <Typography fontStyle="BodyXL">{textBlock}</Typography>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </AppBlock>
  );
};
