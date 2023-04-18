import styled from 'styled-components';
import { flex } from '../../styled-utils/mixins';

import { ReactComponent as Arrow } from '../../assets/search.svg';

export const Container = styled.section`
  height: 7rem;
  width: 100%;

  ${flex}
`;

export const Filter = styled.div`
  height: 5rem;
  width: 96%;

  padding: 1.6rem;

  background-color: var(--tertiary-theme-color);

  border: var(--border);

  ${flex}

  & div {
    height: 2.4rem;
    width: 9rem;

    border: var(--border);
    background-color: var(--light-color);

    position: relative;

    /* ${flex} */

    & input {
      height: 2rem;
      width: 8.6rem;

      position: absolute;

      border: none;
      background-color: transparent;

      font-family: inherit;

      text-align: start;
      padding: 0.6rem;
      font-size: 1rem;

      &::placeholder {
        color: var(--grey-color);
        opacity: 1;
      }
    }
  }
`;

export const ArrowIcon = styled(Arrow)`
  height: 1.4rem;
  width: 1.4rem;

  position: absolute;
  top: 0.3rem;
  left: 6.8rem;

  color: var(--grey-color);
`;
