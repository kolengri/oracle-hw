import { useEffect } from 'react';

import { hooks } from '../store';

const { useStoreActions, useStoreState } = hooks;

export const usePeople = () => {
  const state = useStoreState((s) => s.people);
  const { fetch } = useStoreActions((s) => s.people);

  useEffect(() => {
    fetch({});
  }, [fetch]);

  return {
    state,
    fetch
  };
};
