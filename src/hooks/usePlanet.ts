import { useEffect } from 'react';

import { hooks } from '../store';

const { useStoreActions, useStoreState } = hooks;

export const usePlanet = (planetId: string) => {
  const state = useStoreState((s) => s.planetsItems);
  const { fetch } = useStoreActions((s) => s.planetsItems);
  const planet = state.content.find(({ id }) => id === planetId);

  useEffect(() => {
    fetch(planetId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [planetId]);

  return {
    planet,
    fetch
  };
};
