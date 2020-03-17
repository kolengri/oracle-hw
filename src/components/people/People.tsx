import * as React from 'react';

import { createPath } from '../../api/createPath';
import { usePlanet } from '../../hooks';
import { People as PeopleModel, ResourceType } from '../../models';
import './styles.css';

export type PeopleProps = PeopleModel;

export const getPlanetId = (str: string) => {
  const [, idStr] = str.split(createPath(ResourceType.Planet));
  const [, id] = idStr.split('/');
  return id;
};

const PeopleMemo: React.FC<PeopleProps> = (props) => {
  const { name, gender, height, homeworld } = props;
  const homeWorldId = getPlanetId(homeworld);
  const { planet } = usePlanet(homeWorldId);
  const homeworldName = planet?.content?.name;

  return (
    <article className="people">
      <header className="people__header">
        <h4>{name}</h4>
      </header>
      <ul className="people__main">
        {Object.entries({ gender, height }).map(([name, value]) => (
          <li key={name}>
            {name}: {value}
          </li>
        ))}
        {homeworldName && <li>homeworld: {homeworldName}</li>}
      </ul>
    </article>
  );
};

export const People = React.memo(PeopleMemo);

export default People;
