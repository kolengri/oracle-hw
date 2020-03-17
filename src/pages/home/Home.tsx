import * as React from 'react';

import { FormikProvider, useFormik } from 'formik';

import { ErrorMessage, Loader, People } from '../../components';
import { usePeoples } from '../../hooks';
import { StoreStatus } from '../../models';
import { SearchForm, SearchFormValues } from './SearchForm';

import logo from './logo.png';
import './styles.css';

export type HomeProps = {};

const HomeMemo: React.FC<HomeProps> = (props) => {
  const { fetch, state } = usePeoples();
  const { status, content, error } = state;
  const [page, setPage] = React.useState(1);
  const showTotal = content?.count;

  const formik = useFormik<SearchFormValues>({
    enableReinitialize: true,
    initialValues: {},
    onSubmit: async (values, helpers) => {
      try {
        setPage(1);
        helpers.setSubmitting(true);
        await fetch(values);
        helpers.setSubmitting(false);
      } catch (error) {
        helpers.setSubmitting(false);
      }
    }
  });

  const updatePage = (p: number) => {
    fetch({ page: p, search: formik.values.search });
    setPage(p);
    window.scrollTo(0, 0);
  };

  const nextPage = () => {
    updatePage(page + 1);
  };
  const prevPage = () => {
    updatePage(page - 1);
  };

  return (
    <div className="home">
      <div className="home__logo">
        <img src={logo} alt="" height="50" />
        <div className="home__logo__text">Hero finder</div>
      </div>
      <FormikProvider value={formik}>
        <SearchForm />
      </FormikProvider>
      {status === StoreStatus.Fetching && <Loader />}
      {status === StoreStatus.Error && <ErrorMessage>{error || 'Unknown Error'}</ErrorMessage>}
      <main className="home__content">
        {content?.results.map((item, index) => (
          <People {...item} key={index} />
        ))}
        <footer className="home__footer">
          <div>{showTotal && <div>Total: {content?.count}</div>}</div>
          <div className="home__footer__pagination">
            <div>{content?.previous && <button onClick={prevPage}>prev page</button>}</div>
            <div>{content?.next && <button onClick={nextPage}>next page</button>}</div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export const Home = React.memo(HomeMemo);
