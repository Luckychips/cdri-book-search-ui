import React from 'react';
import { useRecoilState } from 'recoil';
import { detailSearchFieldListState } from '@/stores/recoil';
import * as S from './styles';

interface DropDownListProps {
  itemIndex: number;
  setIsVisibleList: (isVisibleList: boolean) => void;
}

const DropDownList = ({ itemIndex, setIsVisibleList }: DropDownListProps) => {
  const list = [
    {
      keyString: '제목',
      params: 'd_titl',
    },
    {
      keyString: '저자명',
      params: 'd_auth',
    },
    {
      keyString: '출판사',
      params: 'd_publ',
    },
  ];
  const [searchItems, setSearchItems] = useRecoilState(
    detailSearchFieldListState,
  );

  const updateSearchFieldItem = (item: {
    keyString: string;
    params: string;
  }) => {
    const shallow = searchItems.slice();
    shallow.splice(itemIndex, 1, {
      ...searchItems[itemIndex],
      key: item.keyString,
      keyParams: item.params,
    });
    setSearchItems(shallow);
    setIsVisibleList(false);
  };

  return (
    <S.Container>
      {list.map((item) => (
        <S.ListItem
          key={`list-item-${item.params}`}
          onClick={() => updateSearchFieldItem(item)}
        >
          {item.keyString}
        </S.ListItem>
      ))}
    </S.Container>
  );
};

export default DropDownList;
