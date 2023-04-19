import { useRequest } from '../../hooks/use-request';
import * as Styled from './styles';

const Filter = () => {
  return (
    <Styled.Container>
      <Styled.Filter justify="space-between">
        <div>
          <Styled.ArrowIcon />
          <input type="text" placeholder="Category" />
        </div>
        <div>
          <Styled.ArrowIcon />
          <input type="text" placeholder="Sort" />
        </div>
        <div>
          <Styled.ArrowIcon />
          <input type="text" placeholder="Search" />
        </div>
      </Styled.Filter>
    </Styled.Container>
  );
};

export default Filter;
