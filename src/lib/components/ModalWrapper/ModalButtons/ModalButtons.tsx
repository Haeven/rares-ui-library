import { Button } from '../../../buttons/Button/Button';
import { LinkButton } from '../../../buttons/LinkButton/LinkButton';
import { Flex } from '../../Flex/Flex';

export interface ModalButtonProps {
  label: string;
  fullWidth?: boolean;
  to?: string;
  isExternal?: boolean;
  onClick?: () => void;
  noCloseOnClick?: boolean;
  loading?: boolean;
}

export interface FinalModalButtonProps extends ModalButtonProps {
  onClose: () => void;
  variant: 'primary' | 'secondary';
}

const ModalButton = ({
  label,
  fullWidth,
  to,
  onClick,
  noCloseOnClick,
  loading,
  isExternal,
  variant,
  onClose,
}: FinalModalButtonProps) => {
  const localOnClick = () => {
    !!onClick && onClick();
    if (loading !== undefined || noCloseOnClick) return;
    onClose();
  };

  if (to) {
    return (
      <LinkButton
        to={to}
        isExternal={isExternal}
        variant={variant}
        fullWidth={fullWidth}>
        {label}
      </LinkButton>
    );
  }

  return (
    <Button
      onClick={localOnClick}
      loading={loading}
      variant={variant}
      fullWidth={fullWidth}>
      {label}
    </Button>
  );
};

interface ModalButtonsProps {
  buttons: {
    primary?: ModalButtonProps;
    secondary?: ModalButtonProps;
  };
  onClose: () => void;
}

export const ModalButtons = ({ buttons, onClose }: ModalButtonsProps) => {
  return (
    <Flex gap="12px" justifyContent="flex-end">
      {!!buttons.secondary && (
        <ModalButton
          {...buttons.secondary}
          variant="secondary"
          onClose={onClose}
        />
      )}
      {!!buttons.primary && (
        <ModalButton {...buttons.primary} variant="primary" onClose={onClose} />
      )}
    </Flex>
  );
};
