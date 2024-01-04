import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Link } from '.';

export default {
  title: 'Forms/Form Components/Link',
  component: Link,
} as ComponentMeta<typeof Link>;

export const Default: ComponentStory<typeof Link> = () => {
  return (
    <Link to="/?path=/story/form-link--default" color="raresPurple">
      Forgot password?
    </Link>
  );
};
