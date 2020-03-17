import * as React from 'react';

import './styles.css';

export type LoaderProps = {};

const LoaderMemo: React.FC<LoaderProps> = (props) => {
  return <div className="loader">Loading...</div>;
};

export const Loader = React.memo(LoaderMemo);

export default Loader;
