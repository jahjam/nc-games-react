import * as Styled from './styles';

import ReviewCard from '../ReviewCard/ReviewCard';
import { useContext } from 'react';
import { ReviewContext } from '../../store/review-context';

const CardContainer = () => {
  const reviewContext = useContext(ReviewContext);

  const { reviews } = reviewContext;

  return (
    <Styled.Container direction="column">
      {reviews.map((review, i) => (
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
      ))}
    </Styled.Container>
  );
};

export default CardContainer;
