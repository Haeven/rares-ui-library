import { Link, LinkProps } from './Link';

export const UnstyledLink: FCWithChildren<LinkProps> = ({
  children,
  ...rest
}) => {
  return (
    <Link unstyled {...rest}>
      {children}
    </Link>
  );
};
