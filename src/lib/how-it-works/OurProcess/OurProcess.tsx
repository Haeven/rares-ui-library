import { Flex } from '../../components/Flex/Flex';
import { Heading, Typography } from '../../components/Typography/Typography';
import { CheckFilledIcon } from '../../icons/CheckFilledIcon';
import { LockFilledIcon } from '../../icons/LockFilledIcon';
import { ShoeFilledIcon } from '../../icons/ShoeFilledIcon';
import { SecondaryMarketFilledIcon } from '../../icons/SecondaryMarketFilledIcon';
import { LiquidatedFilledIcon } from '../../icons/LiquidatedFilledIcon';
import { CustomerSupportFilledIcon } from '../../icons/CustomerSupportFilledIcon';
import { ResponsiveImage } from '../../components/ResponsiveImage/ResponsiveImage';
import { AppBlock } from '../../components/AppBlock';
import { Container } from '../../components/Container/Container';
import { LinkButton } from '../../buttons/LinkButton/LinkButton';

const processData = [
  {
    icon: <CheckFilledIcon />,
    title: 'Rares Verified',
    description:
      'Assets go through the verification process with our team of authentication and valuation experts',
  },
  {
    icon: <LockFilledIcon />,
    title: 'Securitized',
    description:
      "Once assets are vetted by our team, it's sent to the U.S. Securities & Exchange Commission (SEC) for securitization",
  },
  {
    icon: <ShoeFilledIcon />,
    title: 'Offered on Rares',
    description:
      'After assets are verified and securitized, they get offered on Rares as a public offering and investors can buy shares',
  },
  {
    icon: <SecondaryMarketFilledIcon />,
    title: 'Secondary Market',
    description:
      'Assets are moved into the secondary market on Rares where investors can sell shares they own or buy more as they become available',
  },
  {
    icon: <LiquidatedFilledIcon />,
    title: 'Liquidated',
    description:
      'When the secondary market is closed, assets get sold and investors have the potential to earn a return on their investments',
  },
  {
    icon: <CustomerSupportFilledIcon />,
    title: 'Customer Support',
    description:
      "We're here to help you with any questions you may have about your investment",
  },
];

export const OurProcess = () => {
  return (
    <>
      <AppBlock>
        <Flex
          flexDirection={{ _: 'column', phone: 'row' }}
          gap={['40px', '40px', '40px', '8%']}
          alignItems="center">
          <Flex
            flex="1"
            flexDirection="column"
            gap="10px"
            maxWidth={{ _: '275px', phone: '100%' }}>
            <ResponsiveImage
              width="100%"
              height="100%"
              aspectRatio={1}
              src={
                'https://amazon-cloudfront-secure-static-site-s3bucketroot-1m4j3j43rbytl.s3.amazonaws.com/production/assets/photos/how-it-works/aj1_cover.jpg'
              }
            />
            <Typography>Air Jordan 1 Chicago</Typography>
          </Flex>
          <Flex
            flex="1.5"
            flexDirection="column"
            gap="20px"
            alignItems={{ _: 'center', phone: 'normal' }}>
            <Heading color="raresPurple" fontStyle="H2">
              Our Process
            </Heading>
            <Typography
              fontStyle="BodyXL"
              textAlign={{ _: 'center', phone: 'left' }}>
              Our process guarantees the authenticity of each listing on our
              platform
            </Typography>
            <LinkButton to="https://youtu.be/_fbDgNjTzGU" isExternal>
              Watch 1-minute explainer
            </LinkButton>
          </Flex>
        </Flex>
      </AppBlock>
      <AppBlock>
        <Flex flexDirection="column">
          {processData.map(({ icon, title, description }, index) => (
            <Flex key={title} gap={['40px', '40px', '40px', '8%']}>
              <Flex flex="1" gap="32px">
                <Flex flexDirection="column" alignItems="center" height="100%">
                  <Flex
                    width={{ _: '30px', phone: '40px', tabletSm: '50px' }}
                    height={{ _: '30px', phone: '40px', tabletSm: '50px' }}>
                    {icon}
                  </Flex>
                  {index !== processData.length - 1 && (
                    <Container
                      height="100%"
                      width="1px"
                      borderRight="1px dotted #000"
                    />
                  )}
                </Flex>
                <Flex flexDirection="column">
                  <Typography fontStyle="H2">{title}</Typography>
                  <Flex
                    flex="2"
                    mb="30px"
                    display={{ _: 'flex', tabletSm: 'none' }}>
                    <Typography fontStyle="BodyXL">{description}</Typography>
                  </Flex>
                </Flex>
              </Flex>
              <Flex
                flex="1.5"
                mb="80px"
                display={{ _: 'none', tabletSm: 'flex' }}>
                <Typography fontStyle="BodyXL">{description}</Typography>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </AppBlock>
    </>
  );
};
