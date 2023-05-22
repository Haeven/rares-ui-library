import { Typography } from '../../components/Typography/Typography';
import { LoadingSpinner } from '../../components/LoadingSpinner/LoadingSpinner';
import {
  StyledButton,
  ButtonContents,
  LoadingSpinnerWrapper,
  Label,
  variantStyles,
  sizeStyles,
} from './styles';
import { ButtonProps } from './types';

export const Button = ({
  loading,
  disabled,
  variant = 'primary',
  fullWidth,
  leftIcon,
  children,
  onClick,
  type = 'button',
  size = 'lg',
  color,
  noPadding,
  className,
}: ButtonProps) => {
  const finalColor = color || variantStyles[variant].default.color;
  const backgroundColor = variantStyles[variant].default.backgroundColor;

  return (
    <StyledButton
      disabled={disabled || loading}
      onClick={onClick}
      type={type}
      styles={variantStyles[variant]}
      noPadding={noPadding}
      fullWidth={fullWidth}
      size={size}
      className={className}>
      <ButtonContents>
        {loading && (
          <LoadingSpinnerWrapper backgroundColor={backgroundColor}>
            <LoadingSpinner color={finalColor} size="18px" circleWidth="2px" />
          </LoadingSpinnerWrapper>
        )}
        <Label loading={loading}>
          {!!leftIcon && leftIcon}
          <Typography fontStyle={sizeStyles[size].fontStyle} color={finalColor}>
            {children}
          </Typography>
        </Label>
      </ButtonContents>
    </StyledButton>
  );
};
