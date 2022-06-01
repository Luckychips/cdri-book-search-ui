import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import useSWR from 'swr';
import axios from 'axios';
import * as S from './styles';
import { icons } from '@/assets';
import { ResponseData } from '@/models/response';
import {
  totalSearchCountState,
  bookItemListState,
  currentPageState,
  isVisiblePopUpState,
} from '@/stores/recoil';

import { SearchPopUp } from '@/components/templates';

const fetcher = (url: string) =>
  axios
    .get(url, {
      headers: {
        'X-Naver-Client-Id': 'spT7e4fr9Fv0p2YvkrOX',
        'X-Naver-Client-Secret': 'TlD7RpKb9p',
      },
    })
    .then((res) => res.data);

const SearchInput = () => {
  const setResultCount = useSetRecoilState(totalSearchCountState);
  const setBookItemList = useSetRecoilState(bookItemListState);
  const currentPage = useRecoilValue(currentPageState);
  const [isVisiblePopUp, setIsVisiblePopUp] =
    useRecoilState(isVisiblePopUpState);
  const [shouldFetch, setShouldFetch] = useState(false);
  const [keyword, setKeyword] = useState('');
  const url = `/book.json?query=${encodeURI(keyword)}&start=${currentPage}`;
  const { data, error } = useSWR(shouldFetch ? url : null, fetcher);

  useEffect(() => {
    if (data) {
      const response = data as ResponseData;
      setResultCount(response.total);
      setBookItemList(response.items as []);
    }
  }, [data]);

  return (
    <S.Container>
      <S.InputBox
        placeholder="검색어를 입력"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyUp={(e) => {
          if (!!keyword.length && e.key === 'Enter') {
            setShouldFetch(true);
          }
        }}
      />
      <S.SearchIcon src={icons.ic_search} alt="" />
      <S.SearchButton onClick={() => setIsVisiblePopUp(true)}>
        상세검색
      </S.SearchButton>
      {isVisiblePopUp && <SearchPopUp />}
    </S.Container>
  );
};

export default SearchInput;
