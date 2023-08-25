import * as Styled from './styles';

import ReviewCard from '../ReviewCard/ReviewCard';

import { Review } from '../../types/types';

type ContainerProps = {
  isError: boolean;
  errorMsg: string | null;
  isLoading: boolean;
  reviews: Array<Review>;
};

const CardContainer = ({
  isError,
  errorMsg,
  isLoading,
  reviews,
}: ContainerProps) => {
  return (
    <Styled.Container direction="column">
      {isLoading && <span>Loading...<br/>(First load may take a short while, please wait.)</span>}

      {isError ? (
        <span>{errorMsg}</span>
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
            reviewId={review.review_id}
          />
        ))
      )}
    </Styled.Container>
  );
};

export default CardContainer;
