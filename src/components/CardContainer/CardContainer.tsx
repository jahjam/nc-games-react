import * as Styled from './styles';

import ReviewCard from '../ReviewCard/ReviewCard';

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
      {isLoading && <span>Loading...</span>}

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
          />
        ))
      )}
    </Styled.Container>
  );
};

export default CardContainer;
