import { Flex } from '../../components/Flex/Flex';
import { ResponsiveImage } from '../../components/ResponsiveImage/ResponsiveImage';
import { Typography, Heading } from '../../components/Typography/Typography';
import { teamData } from './team-data';
import { LinkedInAltIcon } from '../../icons/LinkedInAltIcon';
import { Link } from '../../form-components/Link/Link';
import { AppBlock } from '../../components/AppBlock';
import { Container } from '../../components/Container/Container';
import { Grid } from '../../components/Grid/Grid';
import styled from 'styled-components';
import { useState } from 'react';
import { media } from '../../media/media-queries';

const StyledFlex = styled(Flex)`
  ${media.tablet`
    filter: grayscale(0%);
  `}
`;

interface TeamCardProps {
  img: string;
  name: string;
  title: string;
  linkedInUrl: string;
}

const TeamCard = ({ img, name, title, linkedInUrl }: TeamCardProps) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <StyledFlex
      flexDirection="column"
      gap="10px"
      minWidth={{ _: '220px', tabletSm: '250px' }}
      filter={isHovering ? 'none' : 'grayscale(100%)'}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}>
      <Container position="relative" width="100%" overflow={'hidden'}>
        <Flex aspectRatio={1} width="100%" height="100%" maxHeight={'100%'}>
          <TeamCardImage width="100%" aspectRatio={1} src={img} />
        </Flex>
        {!!linkedInUrl && (
          <Container position="absolute" bottom="20px" right="20px">
            <Link to={linkedInUrl} isExternal>
              <Flex
                background={isHovering ? 'raresPurple' : 'transparent'}
                borderRadius="3px">
                <LinkedInAltIcon />
              </Flex>
            </Link>
          </Container>
        )}
      </Container>
      <Flex flexDirection="column">
        <Typography bold>{name}</Typography>
        <Typography>{title}</Typography>
      </Flex>
    </StyledFlex>
  );
};

export const MeetTheTeam = () => {
  return (
    <Container background="backgroundGrey">
      <AppBlock>
        <Flex flexDirection="column" gap="20px">
          <Heading fontStyle="H2" color="raresPurple">
            Meet the Team
          </Heading>
          <Typography>
            Our expert team with knowledge in sneaker culture
          </Typography>
          <ScrollContainer
            gridTemplateColumns="repeat(auto-fill, minmax(250px, 1fr))"
            gap="20px"
            display={{ _: 'flex', tablet: 'grid' }}
            overflow={{ _: 'auto', tablet: 'hidden' }}>
            {teamData.map((teamMember) => (
              <TeamCard key={teamMember.name} {...teamMember} />
            ))}
          </ScrollContainer>
        </Flex>
      </AppBlock>
    </Container>
  );
};

const ScrollContainer = styled(Grid)`
  &::-webkit-scrollbar-thumb {
    display: none;
  }
`;

const TeamCardImage = styled(ResponsiveImage)`
  transition: transform 0.4s ease, filter 0.4s ease;
  transform-origin: 50% 50%;

  ${media.desktop`
    &:hover {
      transform: scale(1.05);
    }
  `}
`;
