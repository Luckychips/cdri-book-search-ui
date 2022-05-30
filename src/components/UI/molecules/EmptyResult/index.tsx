import React from 'react';
import * as S from './styles';
import { icons } from '@/assets';

const EmptyResult = () => {
  return (
    <S.Container>
      <S.BookIcon src={icons.ic_search_zero} alt="" />
      <S.EmptyText>검색된 결과가 없습니다.</S.EmptyText>
    </S.Container>
  );
};

export default EmptyResult;
