import CardContainer from '../../components/CardContainer/CardContainer';
import Filter from '../../feature/Filter/Filter';
import * as Styled from './styles';

const Home = () => {
  return (
    <Styled.Home direction="column" gap={1}>
      <Filter />

      <h2>All Reviews</h2>

      <CardContainer />
    </Styled.Home>
  );
};

export default Home;
