import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flex } from '../Flex';
import { ReadMore } from '.';

export default {
  title: 'Read More',
  component: ReadMore,
} as ComponentMeta<typeof ReadMore>;

export const Default: ComponentStory<typeof ReadMore> = () => {
  return (
    <Flex flexDirection="column" gap="20px">
      <ReadMore
        fontStyle="BodyXL"
        text="Nike Air Force One was the first Nike shoe to feature Air Sole Technology, an encapsulated air unit within the midsole that made lorem upsumde selcim seunc flentel delco. Nike Air Force One was the first Nike shoe to feature Air Sole Technology, an encapsulated air unit within the midsole that made lorem upsumde selcim seunc flentel delco. Nike Air Force One was the first Nike shoe to feature Air Sole Technology, an encapsulated air unit within the midsole that made lorem upsumde selcim seunc flentel delco"
      />
      <ReadMore
        fontStyle="BodyL"
        text="Nike Air Force One was the first Nike shoe to feature Air Sole Technology, an encapsulated air unit within the midsole that made lorem upsumde selcim seunc flentel delco. Nike Air Force One was the first Nike shoe to feature Air Sole Technology, an encapsulated air unit within the midsole that made lorem upsumde selcim seunc flentel delco. Nike Air Force One was the first Nike shoe to feature Air Sole Technology, an encapsulated air unit within the midsole that made lorem upsumde selcim seunc flentel delco"
      />
      <ReadMore
        fontStyle="BodyM"
        text="Nike Air Force One was the first Nike shoe to feature Air Sole Technology, an encapsulated air unit within the midsole that made lorem upsumde selcim seunc flentel delco. Nike Air Force One was the first Nike shoe to feature Air Sole Technology, an encapsulated air unit within the midsole that made lorem upsumde selcim seunc flentel delco. Nike Air Force One was the first Nike shoe to feature Air Sole Technology, an encapsulated air unit within the midsole that made lorem upsumde selcim seunc flentel delco"
      />
      <ReadMore
        fontStyle="BodyS"
        text="Nike Air Force One was the first Nike shoe to feature Air Sole Technology, an encapsulated air unit within the midsole that made lorem upsumde selcim seunc flentel delco. Nike Air Force One was the first Nike shoe to feature Air Sole Technology, an encapsulated air unit within the midsole that made lorem upsumde selcim seunc flentel delco. Nike Air Force One was the first Nike shoe to feature Air Sole Technology, an encapsulated air unit within the midsole that made lorem upsumde selcim seunc flentel delco"
      />
      <ReadMore
        fontStyle="BodyXS"
        text="Nike Air Force One was the first Nike shoe to feature Air Sole Technology, an encapsulated air unit within the midsole that made lorem upsumde selcim seunc flentel delco. Nike Air Force One was the first Nike shoe to feature Air Sole Technology, an encapsulated air unit within the midsole that made lorem upsumde selcim seunc flentel delco. Nike Air Force One was the first Nike shoe to feature Air Sole Technology, an encapsulated air unit within the midsole that made lorem upsumde selcim seunc flentel delco"
      />
    </Flex>
  );
};
