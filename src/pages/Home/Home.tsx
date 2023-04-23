import * as Styled from './styles';

import Reviews from '../../feature/Reviews/Reviews';

const Home = () => {
  return (
    <Styled.Home direction="column" gap={1}>
      <Reviews />
    </Styled.Home>
  );
};

export default Home;
