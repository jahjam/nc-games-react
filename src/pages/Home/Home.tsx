import CardContainer from '../../components/CardContainer/CardContainer';
import Filter from '../../feature/Filter/Filter';
import * as Styled from './styles';

import { useEffect, useState } from 'react';
import { useRequest } from '../../hooks/use-request';

import { Review } from '../../types/types';

type ResponseT = {
  reviews: Array<Review>;
};

const Home = () => {
  const [reviews, setReviews] = useState<Array<Review>>([]);

  const { sendRequest, isError, isLoading, errorMsg } = useRequest();

  useEffect(() => {
    const res = (data: ResponseT) => {
      setReviews(data.reviews);
    };

    sendRequest('GET', '/reviews', res);
  }, []);

  return (
    <Styled.Home direction="column" gap={1}>
      <Filter />

      <h2>All Reviews</h2>

      <CardContainer
        reviews={reviews}
        isError={isError}
        isLoading={isLoading}
        errorMsg={errorMsg}
      />
    </Styled.Home>
  );
};

export default Home;
