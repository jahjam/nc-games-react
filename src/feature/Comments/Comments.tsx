import { useContext, useEffect, useRef, useState } from 'react';
import { useRequest } from '../../hooks/use-request';
import * as Styled from './styles';

import { Comment } from '../../types/types';
import CommentCard from '../../components/CommentCard/CommentCard';
import { Button } from '../../components/Button/styles';
import AuthContext from '../../store/auth-context';

type Props = {
  reviewId: number;
};

type ResponseT = {
  comments: Array<Comment>;
};

type PostResponseT = {
  comment: Array<Comment>;
};

const Comments = ({ reviewId }: Props) => {
  const body = useRef<HTMLTextAreaElement>(null);
  const [comments, setComments] = useState<Array<Comment>>();
  const { sendRequest, isError, isLoading, errorMsg } = useRequest();

  const authContext = useContext(AuthContext);

  const { isLoggedIn, userDetails } = authContext;

  useEffect(() => {
    const res = (data: ResponseT) => {
      setComments(data.comments);
    };

    sendRequest('GET', `/reviews/${reviewId}/comments`, res);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = (data: PostResponseT) => {
      setComments(prevComments => {
        return [...data.comment, ...(prevComments as Comment[])];
      });

      body!.current!.value = '';
    };

    const reqBody = {
      username: userDetails.username,
      body: body.current?.value,
    };

    sendRequest('POST', `/reviews/${reviewId}/comments`, res, reqBody);
  };

  return (
    <Styled.Comments direction="column">
      {isLoggedIn ? (
        <>
          <h3>Add A Comment</h3>
          <Styled.Form onSubmit={handleSubmit} direction="column" gap={0.8}>
            <label htmlFor="body">Comment:</label>
            <textarea ref={body} id="body"></textarea>
            {isError && <span>{errorMsg}</span>}
            {isLoading ? (
              <Button type="button">Loading...</Button>
            ) : (
              <Button type="submit">Add Comment</Button>
            )}
          </Styled.Form>
        </>
      ) : (
        <span>Please sign in to leave a comment</span>
      )}

      {comments && !comments.length && (
        <span>No comments for this reviews yet</span>
      )}

      {isLoading && <span>Loading...</span>}

      {comments &&
        comments.map((comment, i) => (
          <CommentCard
            key={i}
            author={comment.author}
            body={comment.body}
            date={new Date(comment?.created_at as Date)}
            votes={comment.votes}
          />
        ))}

      {isError && <span>{errorMsg}</span>}
    </Styled.Comments>
  );
};

export default Comments;
