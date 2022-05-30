import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { totalSearchCountState } from '@/stores/recoil';
import { SearchInput } from '@/components/molecules';
import * as S from './styles';

const Searcher = () => {
  const resultCount = useRecoilValue(totalSearchCountState);
  return (
    <S.Container>
      <S.SearchTitle>도서 검색</S.SearchTitle>
      <SearchInput />
      <S.SearchResult>
        <span>도서 검색 결과&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span>
          총&nbsp;<b>{resultCount}</b>건
        </span>
      </S.SearchResult>
    </S.Container>
  );
};

export default Searcher;
