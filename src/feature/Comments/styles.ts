import styled from 'styled-components';
import { flex } from '../../styled-utils/mixins';

export const Comments = styled.section`
  width: 30rem;
  height: auto;

  ${flex}
`;

export const Form = styled.form`
  ${flex}

  & textarea {
    width: 24rem;
    height: 6rem;

    font-size: 1.4rem;

    border: var(--border);
    background-color: var(--light-color);
    font-family: inherit;
    padding: 1rem;
  }

  & span {
    font-size: 1.4rem;
    color: var(--error-color);
  }

  & p {
    font-size: 1.4rem;
    color: var(--dark-color);
  }
`;
