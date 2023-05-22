import { Flex } from '../../components/Flex/Flex';
import { Heading } from '../../components/Typography/Typography';
import { faqCategoriesData } from './faq-data';
import { AppBlock } from '../../components/AppBlock';
import { Questions } from './Questions';
import { Categories } from './Categories';
import { useState } from 'react';

export const FAQs = () => {
  const [categorySelected, setCategorySelected] = useState(
    faqCategoriesData[0].id,
  );
  const questions =
    faqCategoriesData.find((category) => category.id === categorySelected)
      ?.questions || [];

  return (
    <AppBlock>
      <Flex flexDirection="column" gap="40px">
        <Heading fontStyle="H2" color="raresPurple">
          Frequently Asked Questions
        </Heading>
        <Categories
          categorySelected={categorySelected}
          setCategorySelected={setCategorySelected}
        />
        <Questions questions={questions} />
      </Flex>
    </AppBlock>
  );
};
