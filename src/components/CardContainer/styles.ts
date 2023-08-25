import styled from 'styled-components';
import { flex } from '../../styled-utils/mixins';

export const Container = styled.div`
  ${flex}

  margin-bottom: 2rem;

  & span {
    text-align: center;
  }
`;
