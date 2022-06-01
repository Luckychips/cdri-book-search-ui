import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import useSWR from 'swr';
import axios from 'axios';
import * as S from './styles';
import { icons } from '@/assets';
import { ResponseData } from '@/models/response';
import {
  shouldFetchState,
  queryKeywordState,
  queryStringState,
  totalSearchCountState,
  bookItemListState,
  currentPageState,
  isVisiblePopUpState,
  backUpSearchFieldListState, detailSearchFieldListState,
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
  const setSearchItems = useSetRecoilState(detailSearchFieldListState);
  const [backUpSearchFieldList, setBackUpSearchFieldList] = useRecoilState(backUpSearchFieldListState);
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);
  const [isVisiblePopUp, setIsVisiblePopUp] =
    useRecoilState(isVisiblePopUpState);
  const [queryString, setQueryString] = useRecoilState(queryStringState);
  const [shouldFetch, setShouldFetch] = useRecoilState(shouldFetchState);
  const [keyword, setKeyword] = useRecoilState(queryKeywordState);
  const url = `${queryString}`;
  const { data, error } = useSWR(shouldFetch ? url : null, fetcher);

  useEffect(() => {
    if (!shouldFetch) {
      const startIndex = currentPage + (9 * (currentPage - 1));
      if (queryString.includes('book.json')) {
        setQueryString(
          `/book.json?query=${encodeURI(keyword)}&start=${startIndex}`,
        );
      }

      if (
        queryString.includes('book_adv.json') &&
        !!backUpSearchFieldList.length
      ) {
        let newQuery = `/book_adv.json?start=${startIndex}`;
        for (let i = 0; i < backUpSearchFieldList.length; i++) {
          const item = backUpSearchFieldList[i] as {
            key: string;
            keyParams: string;
            value: string;
          };
          if (newQuery.includes(item.keyParams)) {
            continue;
          }

          newQuery += `&${item.keyParams}=${encodeURI(item.value)}`;
        }

        setQueryString(newQuery);
      }

      setShouldFetch(true);
    }
  }, [currentPage]);

  useEffect(() => {
    setShouldFetch(false);

    if (data) {
      const response = data as ResponseData;
      setResultCount(response.total);
      setBookItemList(response.items as []);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      console.log(error);
      setQueryString('');
      setShouldFetch(false);
      setResultCount(0);
      setBookItemList([]);
      setKeyword('');
      setCurrentPage(1);
      setBackUpSearchFieldList([]);
      setSearchItems([]);
    }
  }, [error]);

  return (
    <S.Container>
      <S.InputBox
        placeholder="검색어를 입력"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyUp={(e) => {
          if (!!keyword.length && e.key === 'Enter') {
            setQueryString(`/book.json?query=${encodeURI(keyword)}&start=1`);
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
