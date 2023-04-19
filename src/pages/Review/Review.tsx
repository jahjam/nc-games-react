import { useParams } from 'react-router-dom';
import * as Styled from './styles';
import { useEffect, useState } from 'react';
import { useRequest } from '../../hooks/use-request';

import { Review as ReviewT } from '../../types/types';
import { format } from 'date-fns';

type ResponseT = {
  review: Array<ReviewT>;
};

const Review = () => {
  const params = useParams();

  const [review, setReview] = useState<ReviewT>();

  const { sendRequest, isLoading, isError, errorMsg } = useRequest();

  let formattedDate;

  if (review?.created_at) {
    formattedDate = format(new Date(review?.created_at as Date), 'dd/MM/yyyy');
  }

  useEffect(() => {
    const res = (data: ResponseT) => {
      setReview(data.review[0]);
    };

    sendRequest('GET', `/reviews/${params.reviewId}`, res);
  }, []);

  return (
    <>
      {isLoading && <span>Loading...</span>}
      {review && !isError && (
        <Styled.Review direction="column">
          <h2>{review.title}</h2>
          <Styled.Container direction="column">
            <Styled.Img>
              <img src={review.review_img_url} />
            </Styled.Img>
            <Styled.Info justify="space-between">
              <span>{formattedDate}</span>
              <span>By: {review.owner}</span>
            </Styled.Info>
            <Styled.Body>
              <p>{review.review_body}</p>
            </Styled.Body>
          </Styled.Container>
        </Styled.Review>
      )}
      {isError && <span>{errorMsg}</span>}
    </>
  );
};

export default Review;
