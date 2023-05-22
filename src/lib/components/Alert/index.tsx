import React from 'react';
// import './Alert.module.css';

type AlertStyle = 'success' | 'info' | 'warning' | 'error';

interface Props {
  bsStyle: AlertStyle;
  className: string;
  onClick?: () => void;
  onDismiss?: () => void;
}

export const Alert: FCWithChildren<Props> = (props) => {
  const { bsStyle, className, children, ...rest } = props;
  return (
    <div
      className={`${className} subst-alert subst-alert-${bsStyle}`}
      {...rest}>
      {props.children}
    </div>
  );
};

export default Alert;
