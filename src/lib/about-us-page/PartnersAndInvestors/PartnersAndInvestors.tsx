import { UnstyledLink } from '../../form-components/Link/UnstyledLink';
import { AppBlock } from '../../components/AppBlock';
import { Flex } from '../../components/Flex/Flex';
import { Heading } from '../../components/Typography/Typography';

const partners = [
  {
    url: 'https://cdn.rares.io/production/assets/photos/partners-and-investors/macvc.jpg',
    altText: 'macvc',
    width: 214,
    height: 72,
    link: 'https://macventurecapital.com/portfolio/rares/',
  },
  {
    url: 'https://cdn.rares.io/production/assets/photos/partners-and-investors/sothesbys.jpg',
    altText: 'sothesbys',
    width: 135,
    height: 36,
    link: 'https://www.sothebys.com/en/buy/fashion/sneaker',
  },
  {
    url: 'https://cdn.rares.io/production/assets/photos/partners-and-investors/warnermg.jpg',
    altText: 'warner music group',
    width: 171,
    height: 72,
    link: 'https://www.wmg.com/',
  },
  {
    url: 'https://cdn.rares.io/production/assets/photos/partners-and-investors/dapperlabs.jpg',
    altText: 'dapper labs',
    width: 219,
    height: 36,
    link: 'https://www.dapperlabs.com/',
  },
  {
    url: 'https://amazon-cloudfront-secure-static-site-s3bucketroot-1m4j3j43rbytl.s3.amazonaws.com/production/assets/photos/partners-and-investors/nbaf.jpg',
    altText: 'national basketball players association foundation',
    width: 218,
    height: 100,
    link: 'https://nbpa.com/playercon/',
  },
];

export const PartnersAndInvestors = () => {
  return (
    <AppBlock>
      <Flex flexDirection="column" gap="40px">
        <Heading fontStyle="H2" color="raresPurple" textAlign="center">
          Partners & Investors
        </Heading>
        <Flex
          justifyContent="center"
          gap="40px"
          alignItems="center"
          flexWrap="wrap">
          {partners.map(({ url, altText, width, height, link }) => (
            <UnstyledLink to={link} isExternal>
              <img
                key={url}
                height={height}
                width={width}
                alt={altText}
                src={url}
              />
            </UnstyledLink>
          ))}
        </Flex>
      </Flex>
    </AppBlock>
  );
};
