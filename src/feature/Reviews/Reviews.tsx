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
  const [searchInput, setSearchInput] = useState('');
  const params = useParams();

  const formattedCategoryTitle =
    params.categoryQuery &&
    params.categoryQuery[0].toUpperCase() +
      params.categoryQuery.slice(1).replaceAll('-', ' ');

  const filteredResultsBasedOnSearch = reviews.filter(review =>
    review.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  const { sendRequest, isError, isLoading, errorMsg } = useRequest();

  const handleSearch = (input: string) => {
    setSearchInput(input);
  };

  const handleFilter = useCallback(
    (sortBy: string, order: string) => {
      let url = '/reviews';

      params.categoryQuery
        ? (url += `?category=${params.categoryQuery}&sort_by=${sortBy}&order=${
            order || 'asc'
          }`)
        : (url += `?sort_by=${sortBy}&order=${order || 'asc'}`);

      const res = (data: ResponseT) => {
        setReviews(data.reviews);
      };

      sendRequest('GET', url, res);
    },
    [params.categoryQuery]
  );

  return (
    <Styled.Category direction="column" gap={1}>
      <Filter handleFilter={handleFilter} handleSearch={handleSearch} />

      <h2>{formattedCategoryTitle || 'All Reviews'}</h2>

      <CardContainer
        reviews={filteredResultsBasedOnSearch}
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
