import { Flex } from '../../components/Flex/Flex';
import { Heading, Typography } from '../../components/Typography/Typography';
import { ResponsiveImage } from '../../components/ResponsiveImage/ResponsiveImage';
import { AppBlock } from '../../components/AppBlock';
import { LinkButton } from '../../buttons/LinkButton/LinkButton';

interface ReadyToInvestProps {
  image: {
    src: string;
    alt: string;
    caption: string;
  };
  heading: string;
  text: string;
}

export const ReadyToInvest = ({ image, heading, text }: ReadyToInvestProps) => {
  return (
    <Flex width="100%" position="relative">
      <Flex
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        alignItems={['flex-end', 'flex-end', 'center']}>
        <Flex
          background="backgroundGrey"
          width="100%"
          height={['70%', '65%', '60%', '55%']}
        />
      </Flex>
      <AppBlock position="relative">
        <Flex
          alignItems="center"
          gap={['40px', '40px', '40px', '8%']}
          width="100%"
          flexDirection={['column', 'column', 'row']}>
          <Flex
            flex="1"
            flexDirection="column"
            gap="10px"
            maxWidth={{ _: '250px', tabletSm: '100%' }}>
            <ResponsiveImage
              width="100%"
              aspectRatio={456 / 608}
              alt={image.alt}
              src={image.src}
            />
            <Typography textAlign={['center', 'center', 'left']}>
              {image.caption}
            </Typography>
          </Flex>
          <Flex
            flex="1.5"
            flexDirection="column"
            gap="20px"
            alignItems={['center', 'center', 'flex-start']}>
            <Heading
              color="raresPurple"
              fontStyle="H2"
              textAlign={['center', 'center', 'left']}>
              {heading}
            </Heading>
            <Typography
              fontStyle="BodyXL"
              textAlign={['center', 'center', 'left']}>
              {text}
            </Typography>
            <LinkButton to="/invest">Show me the sneakers</LinkButton>
          </Flex>
        </Flex>
      </AppBlock>
    </Flex>
  );
};
