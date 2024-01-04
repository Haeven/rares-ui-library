import { Typography } from '../Typography';
import { Link } from '../../form-components/Link';
import { Flex } from '../Flex';

type Crumb = {
  label: string;
  href: string;
};
type Crumbs = Array<Crumb>;

interface BreadcrumbsProps {
  crumbs: Crumbs;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ crumbs }) => {
  const breadcrumbs = returnBreadcrumbs(crumbs);

  return <Flex gap="10px">{breadcrumbs}</Flex>;
};

const returnBreadcrumbs = (crumbs: Crumbs) => {
  return crumbs.map((crumb, index, arr) => {
    const isLastCrumb = index === arr.length - 1;

    return (
      <>
        <Link noUnderline to={crumb.href}>
          <Typography
            color={isLastCrumb ? 'black' : 'darkGrey'}
            bold={isLastCrumb}>
            {crumb.label}
          </Typography>
        </Link>

        {!isLastCrumb && <Typography color="darkGrey">&#62;</Typography>}
      </>
    );
  });
};

export { Breadcrumbs };
