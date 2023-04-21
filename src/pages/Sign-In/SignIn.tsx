import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button/styles';
import * as Styled from './styles';
import { useContext } from 'react';
import AuthContext from '../../store/auth-context';

const SignIn = () => {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  const { setUserDetailsHandler, setIsLoggedInHandler } = authContext;

  const handleSignInClick = () => {
    setUserDetailsHandler({
      user: {
        username: 'tickle122',
        name: 'Tom Tickle',
        avatar_url:
          'https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953',
      },
    });
    setIsLoggedInHandler(true);

    navigate('/');
  };

  return (
    <Styled.SignIn direction="column">
      <span>Please sign into your account</span>
      <Button onClick={handleSignInClick}>Sign In</Button>
    </Styled.SignIn>
  );
};

export default SignIn;
