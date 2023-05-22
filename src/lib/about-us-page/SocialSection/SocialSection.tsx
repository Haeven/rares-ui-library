import { Flex } from '../../components/Flex/Flex';
import { Heading } from '../../components/Typography/Typography';
import { LinkedInFilledIcon } from '../../icons/LinkedInFilledIcon';
import { TikTokFilledIcon } from '../../icons/TikTokFilledIcon';
import { InstagramFilledIcon } from '../../icons/InstagramFilledIcon';
import { TwitterFilledIcon } from '../../icons/TwitterFilledIcon';
import { LinkButton } from '../../buttons/LinkButton/LinkButton';
import { Container } from '../../components/Container/Container';
import { AppBlock } from '../../components/AppBlock';
import { UnstyledLink } from '../../form-components/Link/UnstyledLink';

const socialIconLinks = [
  {
    Icon: InstagramFilledIcon,
    link: 'https://www.instagram.com/raresapp/',
  },
  {
    Icon: TwitterFilledIcon,
    link: 'https://twitter.com/raresapp',
  },
  {
    Icon: TikTokFilledIcon,
    link: 'https://www.tiktok.com/@raresapp',
  },
  {
    Icon: LinkedInFilledIcon,
    link: 'https://www.linkedin.com/company/rares-app/',
  },
];

interface SocialSectionProps {
  tagline: string;
  linkText: string;
  linkHref: string;
}

export const SocialSection: React.FC<SocialSectionProps> = ({
  tagline,
  linkText,
  linkHref,
}) => {
  return (
    <Container background="backgroundGrey">
      <AppBlock>
        <Flex
          flexDirection={['column', 'column', 'column', 'column', 'row']}
          justifyContent={['center', 'center', 'center', 'space-between']}
          gap="20px">
          <Heading fontStyle="H2" color="raresPurple" textAlign="center">
            {tagline}
          </Heading>
          <Flex
            gap="40px"
            flexDirection={['column', 'column', 'column', 'row', 'row']}
            justifyContent={['center']}
            alignItems="center">
            <Flex gap="20px" cursor="pointer">
              {socialIconLinks.map(({ Icon, link }) => (
                <UnstyledLink to={link} isExternal>
                  <Icon />
                </UnstyledLink>
              ))}
            </Flex>
            <LinkButton to={linkHref}>{linkText}</LinkButton>
          </Flex>
        </Flex>
      </AppBlock>
    </Container>
  );
};
