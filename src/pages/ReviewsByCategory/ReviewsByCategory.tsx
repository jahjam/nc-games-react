import * as Styled from './styles';

import Reviews from '../../feature/Reviews/Reviews';

const ReviewsByCategory = () => {
  return (
    <Styled.ReviewsByCategory direction="column" gap={1}>
      <Reviews />
    </Styled.ReviewsByCategory>
  );
};

export default ReviewsByCategory;
