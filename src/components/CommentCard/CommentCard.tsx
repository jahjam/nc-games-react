import * as Styled from './styles';
import { Comment } from '../../types/types';
import { format } from 'date-fns';

const CommentCard = ({ author, body, date, votes }: Comment) => {
  return (
    <Styled.CommentCard direction="column" gap={0.8}>
      <h3>{author}</h3>
      <p>{body}</p>
      <div>
        <span>{format(date as Date, 'dd/MM/yyyy')}</span>

        <div>
          <Styled.Votes />
          <span>{votes}</span>
        </div>
      </div>
    </Styled.CommentCard>
  );
};

export default CommentCard;
