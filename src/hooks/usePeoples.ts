import { useEffect } from 'react';

import { hooks } from '../store';

const { useStoreActions, useStoreState } = hooks;

export const usePeoples = () => {
  const state = useStoreState((s) => s.peoples);
  const { fetch } = useStoreActions((s) => s.peoples);

  useEffect(() => {
    fetch({});
  }, [fetch]);

  return {
    state,
    fetch
  };
};
