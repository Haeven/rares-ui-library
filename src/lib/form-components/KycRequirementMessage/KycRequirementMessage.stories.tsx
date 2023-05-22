import { ComponentStory, ComponentMeta } from '@storybook/react';
import { KycRequirementMessage } from './KycRequirementMessage';

export default {
  title: 'Forms/Form Components/KycRequirementMessage',
  component: KycRequirementMessage,
} as ComponentMeta<typeof KycRequirementMessage>;

export const Default: ComponentStory<typeof KycRequirementMessage> = () => {
  return (
    <div style={{ width: '500px' }}>
      <KycRequirementMessage>
        Before you can invest on Rares, we are required by the SEC to verify
        your identity and accreditation status.
      </KycRequirementMessage>
    </div>
  );
};
