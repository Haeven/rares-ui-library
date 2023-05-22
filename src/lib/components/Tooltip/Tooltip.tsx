import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { Button } from '../../buttons/Button/Button';
import { QuestionIcon } from '../../icons/QuestionIcon';
import { BottomDrawer } from '../BottomDrawer/BottomDrawer';
import { Flex } from '../Flex/Flex';
import { Typography } from '../Typography/Typography';

export type TooltipAlignProps = 'left' | 'right' | 'center';

interface TooltipProps {
  title: string;
  align?: TooltipAlignProps;
  tooltipWidth?: string;
}

const ToolTipBox = styled(Flex)<{ align: string; isOpen: boolean }>`
    background-color: white;
    bottom: 100%;
    filter: drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.3));
    transition: visibility linear 50ms, opacity 50ms;
    visibility: hidden;
    opacity: 0;
    ${({ align }) => {
      switch (align) {
        case 'right':
          return `
            right: -35px;
        `;
        case 'left':
          return `
            left: -35px;
          `;
        default:
          return;
      }
    }}

    @media (hover: none) {
      display: none;
    }

    ::after {
        content: "";
        position: absolute;
        top: 100%;
        cursor: pointer;
        ${({ align }) => {
          switch (align) {
            case 'right':
              return `
                    right: 29px;
                `;
            case 'left':
              return `
                    left: 43px;
                `;
            default:
              return `
                    left: 50%; 
                `;
          }
        }}
        margin-left: -14px;
        border-width: 14px;
        border-style: solid;
        border-color: white transparent transparent transparent;
      }
  }`;

const TooltipContainer = styled(Flex)`
  @media (hover: hover) {
    &:hover ${ToolTipBox} {
      visibility: visible;
      opacity: 1;
    }
  }
`;

const StyledButton = styled(Button)`
  display: none;
  @media (hover: none) {
    display: block;
  }
`;

const StyledBottomDrawer = styled(BottomDrawer)`
  + .EZDrawer__overlay {
    @media (hover: hover) {
      display: none !important;
    }
  }
  .EZDrawer & {
    @media (hover: hover) {
      display: none !important;
    }
  }
`;

export const Tooltip: FCWithChildren<TooltipProps> = ({
  title,
  children,
  align = 'center',
  tooltipWidth = '335px',
}) => {
  const [isTooltipOpen, setTooltipOpen] = useState(false);
  return (
    <TooltipContainer
      position="relative"
      width="16px"
      height="16px"
      justifyContent="center">
      <Flex
        cursor="pointer"
        zIndex={100}
        onClick={() => setTooltipOpen((isOpen) => !isOpen)}>
        <QuestionIcon />
      </Flex>
      <ToolTipBox
        zIndex={101}
        flexDirection="column"
        position="absolute"
        padding="15px"
        mb="15px"
        borderRadius="12px"
        width={tooltipWidth}
        align={align}
        isOpen={isTooltipOpen}>
        <Typography color="raresPurple" fontStyle="H5">
          {title}
        </Typography>
        {children}
        <Flex justifyContent="flex-end" mt="20px">
          <StyledButton
            variant="secondary"
            onClick={() => setTooltipOpen((isOpen) => !isOpen)}>
            Close
          </StyledButton>
        </Flex>
      </ToolTipBox>
      {createPortal(
        <StyledBottomDrawer
          title={title}
          isOpen={isTooltipOpen}
          onClose={() => setTooltipOpen(false)}
          buttons={{
            secondary: {
              label: 'Close',
            },
          }}>
          {children}
        </StyledBottomDrawer>,
        document.body,
      )}
    </TooltipContainer>
  );
};
