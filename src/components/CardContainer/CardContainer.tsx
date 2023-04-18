import * as Styled from './styles';

import ReviewCard from '../ReviewCard/ReviewCard';
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

const CardContainer = () => {
  const [reviews, setReviews] = useState<Array<Review>>([]);

  const { sendRequest, isError, isLoading, errorMsg } = useRequest();

  useEffect(() => {
    const res = (data: Array<Review>) => {
      setReviews(data);
    };

    sendRequest('GET', '/reviews', res);
  }, []);

  return (
    <Styled.Container direction="column">
      {isError && <span>{errorMsg}</span>}
      {isLoading && !isError ? (
        <span>Loading...</span>
      ) : (
        reviews.map((review, i) => (
          <ReviewCard
            key={i}
            title={review.title}
            designer={review.designer}
            owner={review.owner}
            createdAt={new Date(review.created_at)}
            numComments={review.comment_count}
            votes={review.votes}
            img={review.review_img_url}
          />
        ))
      )}
    </Styled.Container>
  );
};

export default CardContainer;
