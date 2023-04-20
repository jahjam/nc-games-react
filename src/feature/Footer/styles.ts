import styled, { css } from 'styled-components';
import { ReactComponent as Dice } from '../../assets/cube.svg';
import { ReactComponent as Instagram } from '../../assets/instagram.svg';
import { ReactComponent as Twitter } from '../../assets/twitter.svg';
import { ReactComponent as Facebook } from '../../assets/facebook.svg';
import { flex } from '../../styled-utils/mixins';

const IconStyles = css`
  height: 2rem;
  width: 2rem;

  &:hover {
    color: var(--tertiary-theme-color);
  }

  cursor: pointer;
`;

export const Footer = styled.section`
  height: 10rem;
  width: 100%;

  border-top: var(--border);
  background-color: var(--primary-theme-color);

  padding: 2rem;
  margin-top: auto;

  ${flex}
`;

export const Heading = styled.h1`
  font-size: 2.6rem;

  text-transform: uppercase;
  letter-spacing: 0.2rem;
  line-height: 1rem;

  cursor: pointer;
`;

export const DiceIcon = styled(Dice)`
  height: 1.8rem;
  width: 1.8rem;

  color: var(--tertiary-theme-color);

  margin-right: 0.4rem;
`;

export const InstagramIcon = styled(Instagram)`
  ${IconStyles}
`;

export const TwitterIcon = styled(Twitter)`
  ${IconStyles}
`;

export const FacebookIcon = styled(Facebook)`
  ${IconStyles}
`;

export const Brand = styled.div`
  ${flex}
`;

export const Socials = styled.div`
  ${flex}
`;

export const Map = styled.div`
  text-decoration: underline;

  font-size: 1.4rem;

  & ul {
    list-style: none;

    ${flex}

    & li {
      cursor: pointer;

      &:hover {
        color: var(--tertiary-theme-color);
        text-decoration: none;
      }
    }
  }
`;
