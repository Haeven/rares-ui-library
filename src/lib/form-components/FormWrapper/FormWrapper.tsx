import { Flex } from '../../components/Flex/Flex';

const FormWrapper: FCWithChildren = ({ children }) => {
  return (
    <Flex flexDirection="column" gap="20px" flex={1}>
      {children}
    </Flex>
  );
};

export { FormWrapper };
