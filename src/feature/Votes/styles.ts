import styled, { css } from 'styled-components';

import { ReactComponent as ThumbsUp } from '../../assets/thumb-up.svg';
import { ReactComponent as ThumbsDown } from '../../assets/thumb-down.svg';
import { flex } from '../../styled-utils/mixins';

const IconStyles = css`
  height: 1.4rem;
  width: 1.4rem;

  cursor: pointer;
`;

interface VotesProps {
  readonly isError?: boolean;
  readonly gap: number;
}

const ComplimentBackground = css`
  background-color: var(--compliment-color);
`;

const ErrorBackground = css`
  background-color: var(--error-color);
`;

export const Votes = styled.div<VotesProps>`
  height: auto;
  width: auto;

  border: var(--border);

  ${({ isError }) =>
    isError ? `${ErrorBackground}` : `${ComplimentBackground}`};

  padding: 0.4rem 0.6rem;

  align-self: flex-end;

  ${flex}
`;

export const ThumbsUpIcon = styled(ThumbsUp)`
  ${IconStyles}

  &:hover {
    color: var(--tertiary-theme-color);
  }
`;

export const ThumbsDownIcon = styled(ThumbsDown)`
  ${IconStyles}

  &:hover {
    color: var(--error-color);
  }
`;

export const Error = styled.span`
  font-size: 1.2rem;
`;
