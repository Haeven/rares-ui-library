import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Grid } from '.';

export default {
  title: 'Grid',
  component: Grid,
} as ComponentMeta<typeof Grid>;

export const Default: ComponentStory<typeof Grid> = () => {
  return (
    <Grid>
      <p>Default Grid Container</p>
    </Grid>
  );
};

export const Gap: ComponentStory<typeof Grid> = () => {
  return (
    <Grid gap="20px">
      <h1>Heading 1</h1>
      <h1>Heading 2</h1>
      <h1>Heading 3</h1>
    </Grid>
  );
};
