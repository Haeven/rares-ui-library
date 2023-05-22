import styled from 'styled-components';
import { Flex } from '../../components/Flex/Flex';
import { Heading, Typography } from '../../components/Typography/Typography';
import { Link } from '../../form-components/Link/Link';
import { LinkIcon } from '../../icons/LinkIcon';

type Resource = { label: string; link: string; isExternal?: boolean };

interface InvestmentResourcesProps {
  resources: Array<Resource>;
}

export const InvestmentResources = ({
  resources,
}: InvestmentResourcesProps) => {
  return (
    <Flex flexDirection="column">
      <Heading fontStyle="H4" mb="20px">
        Investment Resources
      </Heading>
      <Flex flexDirection="column" gap="15px">
        {resources.map(({ label, link, isExternal }) => (
          <Flex key={label} alignItems="center" gap="10px">
            <Typography fontStyle="BodyL">{label}</Typography>
            <BorderedLink>
              <Link to={link} isExternal={isExternal}>
                <LinkIcon />
              </Link>
            </BorderedLink>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

const BorderedLink = styled.span`
  border: 0.125px solid rgba(82, 60, 206, 0.2);
  padding: 1.75px;
`;
