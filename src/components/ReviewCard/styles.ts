import styled from 'styled-components';
import { flex } from '../../styled-utils/mixins';

import { ReactComponent as CommentIcon } from '../../assets/comments.svg';
import { ReactComponent as VotesIcon } from '../../assets/heart.svg';

export const Card = styled.div`
  height: 16rem;
  width: 90%;

  padding: 2rem;
  grid-gap: 1rem;
  border: var(--border);

  background-color: var(--light-color);

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto auto 1fr;
  grid-template-areas:
    'img title title'
    'img names names'
    'img date data';

  align-items: center;

  cursor: pointer;

  transition: all 0.2s ease 0s;

  box-shadow: 0.2rem 0.2rem 0.6rem 0.1rem var(--grey-color);

  &:hover {
    box-shadow: 0.2rem 0.2rem 0.8rem 0.2rem var(--grey-color);

    transform: scale(101%);
  }
`;

export const Title = styled.h2`
  grid-area: title;

  justify-self: start;

  font-size: 1.2rem;
  word-wrap: break-word;
  word-break: break-all;
`;

export const Names = styled.div`
  height: 2rem;
  grid-area: names;

  ${flex}

  font-size: 1rem;

  justify-self: start;
`;

export const Date = styled.div`
  grid-area: date;

  justify-self: start;

  font-size: 1rem;

  ${flex}
`;

export const Data = styled.div`
  ${flex}

  align-self: flex-end;
  justify-self: flex-end;

  font-size: 1rem;
`;

export const Img = styled.div`
  grid-area: img;

  height: 12rem;
  width: 12rem;

  border: var(--border);

  & img {
    height: 100%;
    width: 100%;

    object-fit: cover;
  }
`;

export const Comments = styled.div`
  ${flex}
`;

export const Votes = styled.div`
  ${flex}
`;

export const Comment = styled(CommentIcon)`
  height: 1rem;
  width: 1rem;
`;

export const Vote = styled(VotesIcon)`
  height: 1rem;
  width: 1rem;
`;
