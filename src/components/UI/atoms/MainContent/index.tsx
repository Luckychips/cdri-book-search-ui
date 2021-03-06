import React from 'react';
import * as S from './styles';

const MainContent = ({ className, children }: StyledComponentProps) => {
  return <S.Container className={className}>{children}</S.Container>;
};

export default MainContent;
