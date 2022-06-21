import React from 'react';
import Wrapper, { IconWrapper, TextWrapper } from './style';

export default function BloB({ icon, heading, text }) {
  return (
    <Wrapper>
      <IconWrapper>{icon}</IconWrapper>
      <h3>{heading}</h3>
      <TextWrapper>{text}</TextWrapper>
    </Wrapper>
  );
}
