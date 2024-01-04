import { Link, LinkProps } from '.';

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
