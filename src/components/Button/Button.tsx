import React from 'react';
import * as Styled from './styles';

type Props = {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  type: 'submit';
};

const Button = ({ type, onClick: propsOnClick, children }: Props) => {
  return (
    <Styled.Button type={type} onClick={propsOnClick}>
      {children}
    </Styled.Button>
  );
};

export default Button;
