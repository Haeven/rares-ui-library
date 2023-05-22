import { Avatar } from '../../components/Avatar/Avatar';
import { Flex } from '../../components/Flex/Flex';
import { Typography, Heading } from '../../components/Typography/Typography';

type Expert = {
  name: string;
  role: string;
  email: string;
  avatar: string;
};

const experts: Expert[] = [
  {
    name: 'Jordan',
    role: 'Curated',
    email: 'jordan@rares.io',
    avatar:
      'https://s3.us-west-1.amazonaws.com/io.gentrify.images.staging/media/meet-the-team/jordan.png',
  },
  {
    name: 'Austin',
    role: 'Verified',
    email: 'austin@rares.io',
    avatar:
      'https://s3.us-west-1.amazonaws.com/io.gentrify.images.staging/media/meet-the-team/austin.png',
  },
];

interface AskOurExpertsProps {
  blurb: string;
}

export const AskOurExperts = ({ blurb }: AskOurExpertsProps) => {
  return (
    <Flex flexDirection="column">
      <Heading fontStyle="H4" mb="20px">
        Ask Our Experts
      </Heading>
      <Typography mb="30px">{blurb}</Typography>
      <Flex flexWrap="wrap" gap="16px">
        {experts.map(({ name, avatar, role, email }) => (
          <Flex flex={1} gap="15px" key={name}>
            <Avatar src={avatar} size={60} alt={`Expert ${name}`} />
            <Flex flexDirection="column">
              <Typography fontStyle="BodyL">{name}</Typography>
              <Typography color="darkGrey">{role} by</Typography>
              <Typography color="darkGrey">{email}</Typography>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};
