import React from 'react';
import styled from 'styled-components';
import { Heading, Typography } from '../../components/Typography/Typography';

const StyledTabs = styled.div`
  display: flex;
  gap: 5px;
  margin-bottom: 40px;
`;

const StyledTab = styled.div`
  flex: 1;
`;

const StyledLabel = styled.button`
  cursor: pointer;
  text-decoration: none;
  background-color: transparent;
  border: none;
  padding: 5px 20px 25px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
`;

interface UnderlineProps {
  isActive: boolean;
}

const Underline = styled.div<UnderlineProps>`
  background-color: ${(p) =>
    p.isActive ? 'var(--rares-purple)' : 'transparent'};
  height: 5px;
  border-radius: 50px;
  transition: all 0.2s ease-in-out;
`;

interface FormTabProps {
  label: string;
  onClick: () => void;
  isActive: boolean;
}

interface FormTabsProps {
  tabs: FormTabProps[];
}

const FormTabs: React.FC<FormTabsProps> = ({ tabs }) => {
  return (
    <StyledTabs>
      {tabs.map(({ label, onClick, isActive }) => (
        <StyledTab key={label}>
          <StyledLabel onClick={onClick}>
            {isActive ? (
              <Heading fontStyle="H4" color="raresPurple">
                {label}
              </Heading>
            ) : (
              <Typography fontStyle="BodyL">{label}</Typography>
            )}
          </StyledLabel>
          <Underline isActive={isActive} />
        </StyledTab>
      ))}
    </StyledTabs>
  );
};

export { FormTabs };
