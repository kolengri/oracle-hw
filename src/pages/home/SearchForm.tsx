import * as React from 'react';

import { Field, useFormikContext } from 'formik';
import useDebounce from 'react-use/lib/useDebounce';

import { nameOfFabric } from '../../helpers';

export type SearchFormProps = {};
export type SearchFormValues = {
  search?: string;
};

const names = nameOfFabric<SearchFormValues>();

const SearchFormMemo: React.FC<SearchFormProps> = (props) => {
  const { values, handleSubmit } = useFormikContext<SearchFormValues>();

  useDebounce(
    () => {
      handleSubmit();
    },
    700,
    [values.search]
  );

  return (
    <>
      <Field autoFocus placeholder="Search for hero" className="home__search-field" name={names('search')} />
    </>
  );
};

export const SearchForm = React.memo(SearchFormMemo);

export default SearchForm;
