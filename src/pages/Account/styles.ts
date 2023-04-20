import styled from 'styled-components';
import { flex } from '../../styled-utils/mixins';

export const Account = styled.section`
  height: auto;
  width: 80%;

  ${flex}

  div {
    height: 10rem;
    width: 10rem;

    background-color: var(--light-color);
    padding: 1rem;
    border-radius: 50%;
    border: var(--border);

    overflow: hidden;

    & img {
      height: 100%;
      width: 100%;
    }
  }
`;
