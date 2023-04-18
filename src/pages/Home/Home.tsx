import CardContainer from '../../components/CardContainer/CardContainer';
import Filter from '../../feature/Filter/Filter';
import * as Styled from './styles';

import { useEffect, useState } from 'react';
import { useRequest } from '../../hooks/use-request';

type Review = {
  title: string;
  category: string;
  designer: string;
  owner: string;
  review_img_url: string;
  created_at: Date;
  votes: number;
  comment_count: number;
};

const Home = () => {
  const [reviews, setReviews] = useState<Array<Review>>([]);

  const { sendRequest, isError, isLoading, errorMsg } = useRequest();

  useEffect(() => {
    const res = (data: Array<Review>) => {
      setReviews(data);
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
