import { Flex } from '../../components/Flex/Flex';
import { Typography, Heading } from '../../components/Typography/Typography';
import { AppBlock } from '../../components/AppBlock';
import { Container } from '../../components/Container/Container';
import { Button } from '../../buttons/Button/Button';
import { ResponsiveValue, Theme, TLengthStyledSystem } from 'styled-system';

interface InfoImageHeroProps {
  title: string;
  textBlock: string;
  rightSide: React.ReactNode;
  buttons?: {
    label: string;
    onClick?: () => void;
  }[];
  flexDirection?: ResponsiveValue<
    'row' | 'row-reverse' | 'column' | 'column-reverse',
    Theme<TLengthStyledSystem>
  >;
}

export const InfoImageHero = ({
  title,
  textBlock,
  rightSide,
  buttons,
  flexDirection,
}: InfoImageHeroProps) => {
  return (
    <Container background="backgroundGrey">
      <AppBlock>
        <Flex
          flexDirection={flexDirection}
          gap={['40px', '40px', '40px', '8%']}
          alignItems="center">
          <Flex flexDirection="column" gap="20px" flex="1">
            <Heading
              color="raresPurple"
              fontStyle="H2"
              textAlign={{ _: 'center', tabletSm: 'left' }}>
              {title}
            </Heading>
            <Typography
              fontStyle="BodyXL"
              textAlign={{ _: 'center', tabletSm: 'left' }}>
              {textBlock}
            </Typography>
            <Flex
              gap="20px"
              flexWrap="wrap"
              justifyContent={{ _: 'center', tabletSm: 'flex-start' }}>
              {buttons?.map(({ label, onClick }) => (
                <Button key={label} onClick={onClick}>
                  {label}
                </Button>
              ))}
            </Flex>
          </Flex>
          {rightSide}
        </Flex>
      </AppBlock>
    </Container>
  );
};
