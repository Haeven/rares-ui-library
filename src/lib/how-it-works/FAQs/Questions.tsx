import { useState } from 'react';
import { Flex } from '../../components/Flex/Flex';
import { Typography } from '../../components/Typography/Typography';
import { FaqQuestion } from './faq-data';

interface QuestionsProps {
  questions: FaqQuestion[];
}

export const Questions = ({ questions }: QuestionsProps) => {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);
  return (
    <Flex flexDirection="column">
      {questions.map(({ question, answer }) => {
        const active = question === openQuestion;
        const px = [20, 20, 60];
        const py = [20, 20, 40];
        return (
          <Flex key={question} flexDirection="column">
            <Flex
              flex={1}
              flexDirection="column"
              borderTopColor="grey"
              borderTopStyle="solid"
              borderTopWidth={1}>
              <Flex
                alignItems="center"
                justifyContent="space-between"
                onClick={() => setOpenQuestion(active ? null : question)}
                px={px}
                py={py}
                cursor="pointer">
                <Typography
                  bold={active}
                  color={active ? 'raresPurple' : 'textPrimary'}>
                  {question}
                </Typography>
                <Typography>{active ? '-' : '+'}</Typography>
              </Flex>
              {active && (
                <Flex flex={1} maxWidth={500} px={px} pb={py}>
                  {answer}
                </Flex>
              )}
            </Flex>
          </Flex>
        );
      })}
    </Flex>
  );
};
