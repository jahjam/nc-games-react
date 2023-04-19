import { useNavigate } from 'react-router-dom';
import * as Styled from './styles';

const Header = () => {
  const navigate = useNavigate();

  const handleHeaderClick = () => {
    navigate('/');
  };

  return (
    <Styled.Header justify="space-between">
      <Styled.MenuIcon />
      <Styled.HeadingContainer direction="column" gap={0.2}>
        <Styled.Heading onClick={handleHeaderClick}>
          Rer
          <Styled.DiceIcon />
          ll
        </Styled.Heading>
        <span>board game reviews</span>
      </Styled.HeadingContainer>
      <Styled.AccountIcon />
    </Styled.Header>
  );
};

export default Header;
