import React from 'react';
import { useRecoilState, useResetRecoilState, useSetRecoilState } from 'recoil';
import {
  FlexInLiner,
  RemoveFieldButton,
  AddFieldButton,
} from '@/components/atoms';
import { SearchDetailLabel, SearchDetailInput } from '@/components/molecules';
import { PARAMS } from '@/constpack/api';
import {
  shouldFetchState,
  currentPageState,
  queryKeywordState,
  queryStringState,
  detailSearchFieldListState,
  isVisiblePopUpState,
} from '@/stores/recoil';
import * as S from './styles';
import { icons } from '@/assets';

const SearchPopUp = () => {
  const resetFieldItems = useResetRecoilState(detailSearchFieldListState);
  const setIsVisiblePopUp = useSetRecoilState(isVisiblePopUpState);
  const setShouldFetch = useSetRecoilState(shouldFetchState);
  const setCurrentPage = useSetRecoilState(currentPageState);
  const setQueryString = useSetRecoilState(queryStringState);
  const resetKeyword = useResetRecoilState(queryKeywordState);
  const [searchItems, setSearchItems] = useRecoilState(
    detailSearchFieldListState,
  );

  const dismiss = () => {
    resetFieldItems();
    setIsVisiblePopUp(false);
  };

  const addSearchFieldItem = () => {
    setSearchItems(
      searchItems.concat({
        key: '제목',
        keyParams: PARAMS.TITLE,
        value: '',
      }),
    );
  };

  const updateSearchFieldItem = (index: number, newValue: string) => {
    const shallow = searchItems.slice();
    shallow.splice(index, 1, { ...searchItems[index], value: newValue });
    setSearchItems(shallow);
  };

  const removeSearchFieldItem = (index: number) => {
    const shallow = searchItems.slice();
    shallow.splice(index, 1);
    setSearchItems(shallow);
  };

  const search = () => {
    if (!!searchItems.length && !!searchItems[0].value) {
      dismiss();
      resetKeyword();
      let query = '/book_adv.json?start=1';
      for (let i = 0; i < searchItems.length; i++) {
        const item = searchItems[i];
        if (query.includes(item.keyParams)) {
          continue;
        }

        query += `&${item.keyParams}=${encodeURI(item.value)}`;
      }

      setCurrentPage(1);
      setQueryString(query);
      setShouldFetch(true);
    }
  };

  return (
    <S.Container>
      <S.PopUpContent>
        <S.DismissButton onClick={() => dismiss()}>
          <img src={icons.ic_popup_dismiss} alt="" />
        </S.DismissButton>
        {searchItems.map((item, index) => (
          <S.SearchField key={`search-field-${index}`}>
            <SearchDetailLabel itemIndex={index} keyString={item.key} keyParams={item.keyParams} />
            <SearchDetailInput
              value={item.value}
              setValue={(text) => updateSearchFieldItem(index, text)}
            />
            {index > 0 && (
              <RemoveFieldButton onClick={() => removeSearchFieldItem(index)} />
            )}
          </S.SearchField>
        ))}
        {searchItems.length < 3 && (
          <S.SearchField>
            <SearchDetailLabel
              itemIndex={-1}
              className="visibility-hidden"
              keyString=""
              keyParams=""
            />
            <AddFieldButton onClick={() => addSearchFieldItem()} />
          </S.SearchField>
        )}
        <S.ButtonContainer>
          <FlexInLiner>
            <S.SubmitButton
              className="secondary"
              onClick={() => resetFieldItems()}
            >
              초기화
            </S.SubmitButton>
            <S.Spacing />
            <S.SubmitButton className="primary" onClick={() => search()}>
              검색하기
            </S.SubmitButton>
          </FlexInLiner>
        </S.ButtonContainer>
      </S.PopUpContent>
    </S.Container>
  );
};

export default SearchPopUp;
