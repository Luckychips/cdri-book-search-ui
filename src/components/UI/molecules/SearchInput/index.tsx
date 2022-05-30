import React from 'react';
import * as S from './styles';
import { icons } from '@/assets';

const SearchInput = () => {
  return (
    <S.Container>
      <S.InputBox placeholder="검색어를 입력" />
      <S.SearchIcon src={icons.ic_search} alt="" />
      <S.SearchButton>상세검색</S.SearchButton>
    </S.Container>
  );
};

export default SearchInput;
