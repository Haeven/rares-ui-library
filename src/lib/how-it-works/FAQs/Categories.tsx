import { ReactElement } from 'react';
import { Flex } from '../../components/Flex/Flex';
import { Grid } from '../../components/Grid/Grid';
import { Typography } from '../../components/Typography/Typography';
import { IconProps, faqCategoriesData } from './faq-data';

interface CategoryCardProps {
  title: string;
  Icon: (props: IconProps) => ReactElement;
  description: string;
  onClick: () => void;
  active: boolean;
}

const CategoryCard = ({
  description,
  title,
  Icon,
  active,
  onClick,
}: CategoryCardProps) => {
  return (
    <Flex
      borderColor="grey"
      borderWidth={[1, 1, 0]}
      borderStyle="solid"
      borderBottomColor={active ? 'transparent' : 'grey'}>
      <Flex
        onClick={onClick}
        cursor="pointer"
        flexDirection="column"
        gap="10px"
        padding={[20, 20, 30]}
        borderBottomColor={active ? 'raresPurple' : 'transparent'}
        borderBottomWidth={5}
        borderBottomStyle="solid">
        <Icon color={active ? 'var(--rares-purple)' : 'black'} />
        <Typography fontStyle="H4" color={active ? 'raresPurple' : ''}>
          {title}
        </Typography>
        <Typography color="darkGrey">{description}</Typography>
      </Flex>
    </Flex>
  );
};

interface CategoriesProps {
  categorySelected: string;
  setCategorySelected: (id: string) => void;
}

export const Categories = ({
  categorySelected,
  setCategorySelected,
}: CategoriesProps) => {
  return (
    <Grid
      gap="20px"
      gridTemplateColumns={['1fr 1fr', '1fr 1fr', '1fr 1fr 1fr 1fr']}>
      {faqCategoriesData.map(({ id, title, Icon, description }) => (
        <CategoryCard
          title={title}
          Icon={Icon}
          description={description}
          onClick={() => setCategorySelected(id)}
          active={categorySelected === id}
        />
      ))}
    </Grid>
  );
};
