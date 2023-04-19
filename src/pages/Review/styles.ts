import styled from 'styled-components';
import { flex } from '../../styled-utils/mixins';

export const Review = styled.section`
  height: auto;
  width: 32rem;

  ${flex}

  & h2 {
    text-align: center;
  }
`;

export const Container = styled.div`
  border: var(--border);

  padding: 2rem;

  background-color: var(--light-color);

  ${flex}
`;

export const Img = styled.div`
  height: 20rem;
  width: 28rem;

  border: var(--border);

  & img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const Info = styled.div`
  height: auto;
  width: 100%;

  font-size: 1.4rem;

  ${flex};
`;

export const Body = styled.div``;
