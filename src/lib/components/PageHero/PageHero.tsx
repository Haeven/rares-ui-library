import React from 'react';
import { LinkButton } from '../../buttons/LinkButton/LinkButton';
import { Spacer } from '../../form-components/Spacer/Spacer';
import { AppBlock } from '../AppBlock';
import { Container } from '../Container/Container';
import { Flex } from '../Flex/Flex';
import { Typography } from '../Typography/Typography';

interface LeftContainerProps {
  title: string;
  textBlock: React.ReactNode;
  linkButton: {
    to: string;
    label: string;
  };
}

const LeftContainer = ({
  title,
  textBlock,
  linkButton,
}: LeftContainerProps) => (
  <Flex flex={1} mt={[34, 34, 0]}>
    <Flex
      flexDirection="column"
      justifyContent="center"
      height="100%"
      minWidth="50%"
      maxWidth="454px">
      <Typography fontStyle="H2" as="h1" color="raresPurple">
        {title}
      </Typography>
      <Spacer size="15px" />
      {textBlock}
      <Spacer size="24px" />
      <Flex justifyContent={['center', 'center', 'flex-start']}>
        <LinkButton to={linkButton.to}>{linkButton.label}</LinkButton>
      </Flex>
    </Flex>
  </Flex>
);

interface DesktopContentsProps {
  rightSide: React.ReactNode;
  title: string;
  textBlock: React.ReactNode;
  linkButton: {
    label: string;
    to: string;
  };
}

const DesktopContents = ({
  title,
  textBlock,
  linkButton,
  rightSide,
}: DesktopContentsProps) => (
  <Container background="backgroundGrey" display={['none', 'none', 'flex']}>
    <AppBlock pt={0} pb={0}>
      <Flex
        gap="32px"
        flexDirection={['column-reverse', 'column-reverse', 'row']}
        flexWrap={['wrap', 'wrap', 'nowrap']}>
        <LeftContainer
          title={title}
          textBlock={textBlock}
          linkButton={linkButton}
        />
        {rightSide}
      </Flex>
    </AppBlock>
  </Container>
);

interface MobileContentsProps {
  rightSide: React.ReactNode;
  title: string;
  textBlock: React.ReactNode;
  linkButton: {
    label: string;
    to: string;
  };
}

const MobileContents = ({
  title,
  textBlock,
  linkButton,
  rightSide,
}: MobileContentsProps) => {
  return (
    <Container display={['block', 'block', 'none']}>
      {rightSide}
      <AppBlock paddingBottom="0px" paddingTop="32px">
        <LeftContainer
          title={title}
          textBlock={textBlock}
          linkButton={linkButton}
        />
      </AppBlock>
    </Container>
  );
};

interface PageHeroProps {
  rightSide: React.ReactNode;
  title: string;
  textBlock: React.ReactNode;
  linkButton: {
    label: string;
    to: string;
  };
}

export const PageHero: React.FC<PageHeroProps> = (props) => {
  return (
    <>
      <DesktopContents {...props} />
      <MobileContents {...props} />
    </>
  );
};
