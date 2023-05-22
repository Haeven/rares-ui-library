import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Typography } from '../../components/Typography/Typography';
import { Container } from '../../components/Container/Container';
import { Line } from '../../components/Line/Line';

const StyledTabs = styled.div`
  display: flex;
  gap: 40px;
`;

const StyledLabel = styled.div`
  cursor: pointer;
  padding-bottom: 19px;
`;

interface UnderlineProps {
  isActive: boolean;
}

const Underline = styled.div<UnderlineProps>`
  background-color: ${(p) =>
    p.isActive ? 'var(--rares-purple)' : 'transparent'};
  height: 5px;
`;

interface PageTabProps {
  label: string;
  href: string;
  isActive: boolean;
}

interface PageTabsProps {
  tabs: PageTabProps[];
}

const PageTabs: React.FC<PageTabsProps> = ({ tabs }) => {
  return (
    <>
      <StyledTabs>
        {tabs.map(({ label, href, isActive }) => (
          <Link key={label} to={href}>
            <StyledLabel>
              <Typography fontStyle="H2" noBold={!isActive} color="raresPurple">
                {label}
              </Typography>
            </StyledLabel>
            <Underline isActive={isActive} />
          </Link>
        ))}
      </StyledTabs>
      <Container mt="-2px">
        <Line />
      </Container>
    </>
  );
};

export { PageTabs };
