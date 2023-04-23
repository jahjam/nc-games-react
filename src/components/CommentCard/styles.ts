import styled from 'styled-components';
import { flex } from '../../styled-utils/mixins';

import { ReactComponent as VotesIcon } from '../../assets/heart.svg';
import { ReactComponent as BinIcon } from '../../assets/bin.svg';

export const CommentCard = styled.div`
  height: auto;
  width: 90%;

  padding: 2rem;

  border: var(--border);

  ${flex}

  background-color: var(--hightlight-color);

  & h3 {
    font-size: 1.6rem;

    align-self: flex-start;
  }

  & p {
    font-size: 1.4rem;
  }

  & div {
    width: 100%;
    ${flex}
    // overwrite default css
    flex-direction: row;
    justify-content: space-between;

    & span {
      font-size: 1.2rem;
    }

    & div {
      width: auto;
      height: auto;
      background-color: var(--light-color);
      border: var(--border);

      padding: 0.4rem 0.6rem;

      ${flex}
      flex-direction: row;
      justify-content: flex-end;

      & span {
        margin-top: 0.2rem;
      }
    }
  }
`;

export const Votes = styled(VotesIcon)`
  height: 1.4rem;
  width: 1.4rem;

  cursor: pointer;

  &:hover {
    color: var(--tertiary-theme-color);
  }
`;

export const Bin = styled(BinIcon)`
  height: 1.4rem;
  width: 1.4rem;

  cursor: pointer;

  &:hover {
    color: var(--error-color);
  }
`;

export const Error = styled.span`
  font-size: 1.2rem;
  color: var(--error-color);
`;
