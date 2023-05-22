import React from 'react';
import styled from 'styled-components';
import { Container } from '../../components/Container/Container';
import { Flex } from '../../components/Flex/Flex';
import { Typography } from '../../components/Typography/Typography';
import { LockIcon } from '../../icons/LockIcon';

const OpaqueBackground = styled(Container)``;

const KycRequirementMessage: FCWithChildren = ({ children }) => {
  return (
    <Flex
      position="relative"
      alignItems="center"
      padding={{ _: '20px', tabletSm: '40px' }}
      gap={{ _: '20px', tabletSm: '40px' }}>
      <OpaqueBackground
        background="raresPurple"
        opacity={0.1}
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        borderRadius="10px"
      />
      <div>
        <LockIcon color="var(--rares-purple)" size={25} />
      </div>
      <Typography>{children}</Typography>
    </Flex>
  );
};

export { KycRequirementMessage };
