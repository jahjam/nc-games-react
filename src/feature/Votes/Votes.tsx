import { useEffect, useState } from 'react';
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
  const [addedVotes, setAddedVotes] = useState(0);
  const { sendRequest, isError, errorMsg } = useRequest();

  const handleOnDownClick = () => {
    const res = (data: ResponseT) => {
      setAddedVotes(data.review[0].votes);
    };

    if (votes) {
      sendRequest('PATCH', `/reviews/${reviewId}`, res, {
        inc_votes: -1,
      });
    }
  };

  const handleOnUpClick = () => {
    const res = (data: ResponseT) => {
      setAddedVotes(data.review[0].votes);
    };

    sendRequest('PATCH', `/reviews/${reviewId}`, res, { inc_votes: 1 });
  };

  return (
    <Styled.Votes gap={0.6} isError={isError}>
      {isError && <Styled.Error>{errorMsg}</Styled.Error>}
      <Styled.ThumbsUpIcon onClick={handleOnUpClick} />
      <span>{addedVotes || votes}</span>
      <Styled.ThumbsDownIcon onClick={handleOnDownClick} />
    </Styled.Votes>
  );
};

export default Votes;
