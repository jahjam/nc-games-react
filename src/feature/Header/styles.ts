import styled from 'styled-components';
import { ReactComponent as BurgerMenu } from '../../assets/burger-menu.svg';
import { ReactComponent as Account } from '../../assets/account.svg';
import { ReactComponent as AccountLogin } from '../../assets/user-login.svg';
import { ReactComponent as Dice } from '../../assets/cube.svg';
import { flex } from '../../styled-utils/mixins';

export const Header = styled.section`
  height: 10rem;
  width: 100%;

  padding: 1rem 2.6rem;

  border-bottom: var(--border);

  ${flex}
`;

export const HeadingContainer = styled.div`
  ${flex}

  & span {
    font-size: 1.2rem;
    display: inline-block;

    align-self: flex-end;
  }
`;

export const Heading = styled.h1`
  font-size: 3.6rem;

  text-transform: uppercase;
  letter-spacing: 0.4rem;
  line-height: 1rem;

  cursor: pointer;
`;

export const DiceIcon = styled(Dice)`
  height: 2.5rem;
  width: 2.5rem;

  color: var(--tertiary-theme-color);

  margin-right: 0.4rem;
`;

export const MenuIcon = styled(BurgerMenu)`
  height: 2.4rem;
  width: 2.4rem;

  color: var(--dark-color);

  &:hover {
    color: var(--tertiary-theme-color);
  }

  cursor: pointer;
`;

export const AccountIcon = styled(Account)`
  height: 2.6rem;
  width: 2.6rem;

  color: var(--dark-color);

  &:hover {
    color: var(--tertiary-theme-color);
  }

  cursor: pointer;
`;

export const AccountLoginIcon = styled(AccountLogin)`
  height: 2.6rem;
  width: 2.6rem;

  color: var(--dark-color);

  &:hover {
    color: var(--tertiary-theme-color);
  }

  cursor: pointer;
`;
