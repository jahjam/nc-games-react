import { useCallback, useEffect, useState } from 'react';
import CardContainer from '../../components/CardContainer/CardContainer';
import Filter from '../Filter/Filter';
import * as Styled from './styles';

import { Review } from '../../types/types';
import { useRequest } from '../../hooks/use-request';
import { useParams } from 'react-router-dom';

type ResponseT = {
  reviews: Array<Review>;
};

const Reviews = () => {
  const [reviews, setReviews] = useState<Array<Review>>([]);
  const params = useParams();

  const formattedCategoryTitle =
    params.categoryQuery &&
    params.categoryQuery[0].toUpperCase() +
      params.categoryQuery.slice(1).replaceAll('-', ' ');

  const { sendRequest, isError, isLoading, errorMsg } = useRequest();

  const handleFilter = useCallback(
    (sortBy: string) => {
      let url = '/reviews';

      if (params.categoryQuery)
        url += `?category=${params.categoryQuery}&sort_by=${sortBy}`;

      const res = (data: ResponseT) => {
        setReviews(data.reviews);
      };

      sendRequest('GET', url, res);
    },
    [params.categoryQuery]
  );

  return (
    <Styled.Category direction="column" gap={1}>
      <Filter handleFilter={handleFilter} />

      <h2>{formattedCategoryTitle}</h2>

      <CardContainer
        reviews={reviews}
        isError={isError}
        isLoading={isLoading}
        errorMsg={
          errorMsg.startsWith('No category with the name')
            ? 'No reviews under this category yet! Why not write one?'
            : errorMsg
        }
      />
    </Styled.Category>
  );
};

export default Reviews;
