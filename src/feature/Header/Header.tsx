import { useNavigate } from 'react-router-dom';
import * as Styled from './styles';
import { useContext } from 'react';
import AuthContext from '../../store/auth-context';

const Header = () => {
  const navigate = useNavigate();

  const authContext = useContext(AuthContext);

  const { isLoggedIn } = authContext;

  const handleHeadingClick = () => {
    navigate('/');
  };

  const handleSignInAccountClick = () => {
    navigate('/sign-in');
  };

  const handleAccountClick = () => {
    navigate('/me');
  };

  return (
    <Styled.Header justify="space-between">
      <Styled.MenuIcon />
      <Styled.HeadingContainer direction="column" gap={0.2}>
        <Styled.Heading onClick={handleHeadingClick}>
          Rer
          <Styled.DiceIcon />
          ll
        </Styled.Heading>
        <span>board game reviews</span>
      </Styled.HeadingContainer>
      {isLoggedIn ? (
        <Styled.AccountIcon onClick={handleAccountClick} />
      ) : (
        <Styled.AccountLoginIcon onClick={handleSignInAccountClick} />
      )}
    </Styled.Header>
  );
};

export default Header;
