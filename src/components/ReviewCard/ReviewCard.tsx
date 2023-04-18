import * as Styled from './styles';

import { format } from 'date-fns';

type Props = {
  title: string;
  designer: string;
  owner: string;
  createdAt: Date;
  numComments: number;
  votes: number;
  img: string;
};

const ReviewCard = ({
  title,
  designer,
  owner,
  createdAt,
  numComments,
  votes,
  img,
}: Props) => {
  const formattedYear = format(createdAt, 'dd/MM/yyyy');

  return (
    <Styled.Card>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Names direction="column" gap={0.4} align="flex-start">
        <span>Created by: {designer}</span>
        <span>Review by: {owner}</span>
      </Styled.Names>
      <Styled.Date direction="column" gap={0.2} align="flex-start">
        <span>Posted:</span>
        <span>{formattedYear}</span>
      </Styled.Date>
      <Styled.Data direction="column" gap={0.8}>
        <Styled.Comments gap={0.4}>
          <Styled.Comment />
          <span>{numComments}</span>
        </Styled.Comments>
        <Styled.Votes gap={0.4}>
          <Styled.Vote />
          <span>{votes}</span>
        </Styled.Votes>
      </Styled.Data>
      <Styled.Img>
        <img src={img} alt="img" />
      </Styled.Img>
    </Styled.Card>
  );
};

export default ReviewCard;
