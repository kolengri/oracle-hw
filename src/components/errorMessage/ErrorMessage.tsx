import * as React from 'react';

import './styles.css';

export type ErrorMessageProps = {
  children: React.ReactNode;
};

const ErrorMessageMemo: React.FC<ErrorMessageProps> = (props) => {
  const { children } = props;
  return <div className="error-message">{children}</div>;
};

export const ErrorMessage = React.memo(ErrorMessageMemo);

export default ErrorMessage;
