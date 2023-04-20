import styled from 'styled-components';

export const Button = styled.button`
  background-color: var(--secondary-theme-color);
  padding: 1rem;
  border: var(--border);

  cursor: pointer;

  transition: all 0.2s ease 0s;

  box-shadow: 0.1rem 0.1rem 0.4rem 0.05rem var(--grey-color);

  font-family: inherit;

  &:hover {
    box-shadow: 0.1rem 0.1rem 0.6rem 0.1rem var(--grey-color);

    transform: scale(101%);
  }
`;
