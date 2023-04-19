import * as Styled from './styles';

const Footer = () => {
  return (
    <Styled.Footer justify="space-between">
      <Styled.Brand direction="column" gap={1.4}>
        <Styled.Heading>
          Rer
          <Styled.DiceIcon />
          ll
        </Styled.Heading>
        <Styled.Socials gap={1.4}>
          <Styled.FacebookIcon />
          <Styled.InstagramIcon />
          <Styled.TwitterIcon />
        </Styled.Socials>
      </Styled.Brand>
      <Styled.Map direction="column" gap={0.4} align="flex-end">
        <ul>
          <li>Home</li>
          <li>Account</li>
          <li>Contact</li>
        </ul>
      </Styled.Map>
    </Styled.Footer>
  );
};

export default Footer;
