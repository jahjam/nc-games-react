import styled from 'styled-components';
import { flex } from '../../styled-utils/mixins';

import { ReactComponent as Arrow } from '../../assets/search.svg';

export const Container = styled.section`
  height: 7rem;
  width: 100%;

  ${flex}
`;

export const Filter = styled.div`
  height: 5.2rem;
  width: 96%;

  padding: 1.6rem 1rem;

  background-color: var(--tertiary-theme-color);

  border: var(--border);

  ${flex}

  & div {
    height: 2.6rem;
    width: 10rem;

    border: var(--border);
    background-color: var(--light-color);

    position: relative;

    ${flex}

    & input {
      height: 2.2rem;
      width: 9.47rem;

      position: absolute;

      border: none;
      background-color: transparent;

      font-family: inherit;

      text-align: start;
      padding: 0.6rem;
      font-size: 1.1rem;

      &::placeholder {
        color: var(--grey-color);
        opacity: 1;
      }
    }
  }
`;

export const MagnifyIcon = styled(Arrow)`
  height: 1.4rem;
  width: 1.4rem;

  position: absolute;
  top: 0.3rem;
  left: 7.6rem;

  color: var(--grey-color);
`;

export const ListDiv = styled.div`
  ${flex}
  position: relative;
`;

export const List = styled.ul`
  width: 100%;
  height: 20rem;
  overflow-y: scroll;
  margin-top: -0.8rem;
  list-style: none;
  position: absolute;
  top: 3rem;
  z-index: 5;

  scrollbar-width: none;

  ::-webkit-scrollbar {
    height: 0;
    width: 0;
  }

  & li {
    width: 100%;
    padding: 1rem;
    font-size: 1rem;
    border-top: var(--border);
    background-color: var(--light-color);
    color: var(--dark-color);
    cursor: pointer;

    &:hover {
      background-color: var(--hightlight-color);
    }
  }
`;

export const OrderDiv = styled.div`
  width: 4rem !important;

  cursor: pointer;

  justify-content: center !important;

  & span {
    font-size: 1rem;
  }

  &:hover {
    background-color: var(--hightlight-color);
  }
`;
