import { useState } from 'react';
import * as Styled from './styles';
import { useRequest } from '../../hooks/use-request';
import { Review } from '../../types/types';

type Props = {
  reviewId: string | undefined;
  votes: number | undefined;
};

type ResponseT = {
  review: Array<Review>;
};

const Votes = ({ reviewId, votes }: Props) => {
  const [addedVotes, setAddedVotes] = useState(votes);
  const { sendRequest, isError, errorMsg } = useRequest();

  const handleOnDownClick = () => {
    if (addedVotes) {
      setAddedVotes(addedVotes - 1);
    }

    const res = (data: ResponseT | number) => {
      return 0;
    };

    sendRequest('PATCH', `/reviews/${reviewId}`, res, {
      inc_votes: -1,
    });
  };

  const handleOnUpClick = () => {
    if (addedVotes) {
      setAddedVotes(addedVotes + 1);
    }

    const res = (data: ResponseT | number) => {
      return 0;
    };

    sendRequest('PATCH', `/reviews/${reviewId}`, res, { inc_votes: 1 });
  };

  return (
    <Styled.Votes gap={0.6} isError={isError}>
      {isError && <Styled.Error>{errorMsg}</Styled.Error>}
      <Styled.ThumbsUpIcon onClick={handleOnUpClick} />
      <span>{addedVotes}</span>
      <Styled.ThumbsDownIcon onClick={handleOnDownClick} />
    </Styled.Votes>
  );
};

export default Votes;
