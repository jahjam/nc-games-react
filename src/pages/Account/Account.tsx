import { useContext, useEffect } from 'react';
import * as Styled from './styles';
import AuthContext from '../../store/auth-context';
import { Button } from '../../components/Button/styles';
import { useNavigate } from 'react-router-dom';

const Account = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    userDetails,
    setIsLoggedInHandler,
    setUserDetailsHandler,
    isLoggedIn,
  } = authContext;

  const handleSignOut = () => {
    setUserDetailsHandler(null);
    setIsLoggedInHandler(false);

    navigate('/');
  };

  return (
    <Styled.Account direction="column">
      {isLoggedIn ? (
        <>
          <h2>Hey, {userDetails.name}!</h2>
          <span>username: {userDetails.username}</span>
          <div>
            <img src={userDetails.avatar_url} alt="User avatar" />
          </div>
          <Button onClick={handleSignOut}>Sign Out</Button>
        </>
      ) : (
        <span>Please sign in to view your account</span>
      )}
    </Styled.Account>
  );
};

export default Account;
