import React from 'react';
import * as S from './styles';

const MainContent = ({ className, children }: StyledComponentProps) => {
  return <S.Container>{children}</S.Container>;
};

export default MainContent;
