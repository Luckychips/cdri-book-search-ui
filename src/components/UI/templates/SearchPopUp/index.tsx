import React from 'react';
import { useRecoilState, useResetRecoilState, useSetRecoilState } from 'recoil';
import {
  FlexInLiner,
  RemoveFieldButton,
  AddFieldButton,
} from '@/components/atoms';
import { SearchDetailLabel, SearchDetailInput } from '@/components/molecules';
import {
  detailSearchFieldListState,
  isVisiblePopUpState,
} from '@/stores/recoil';
import * as S from './styles';
import { icons } from '@/assets';

const SearchPopUp = () => {
  const resetFieldItems = useResetRecoilState(detailSearchFieldListState);
  const setIsVisiblePopUp = useSetRecoilState(isVisiblePopUpState);
  const [searchItems, setSearchItems] = useRecoilState(
    detailSearchFieldListState,
  );

  const addSearchFieldItem = () => {
    setSearchItems(
      searchItems.concat({
        key: '제목',
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
    console.log(searchItems);
  };

  return (
    <S.Container>
      <S.PopUpContent>
        <S.DismissButton onClick={() => setIsVisiblePopUp(false)}>
          <img src={icons.ic_popup_dismiss} alt="" />
        </S.DismissButton>
        {searchItems.map((item, index) => (
          <S.SearchField key={`search-field-${index}`}>
            <SearchDetailLabel keyString={item.key} />
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
            <SearchDetailLabel className="visibility-hidden" keyString="" />
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
