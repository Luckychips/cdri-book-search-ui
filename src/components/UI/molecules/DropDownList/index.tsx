import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { detailSearchFieldListState } from '@/stores/recoil';
import { PARAMS } from '@/constpack/api';
import * as S from './styles';

interface ListItemType {
  keyString: string;
  params: string;
}

interface DropDownListProps {
  itemIndex: number;
  keyParams: string;
  setIsVisibleList: (isVisibleList: boolean) => void;
}

const DropDownList = ({ itemIndex, keyParams, setIsVisibleList }: DropDownListProps) => {
  const defaultList = [
    {
      keyString: '제목',
      params: PARAMS.TITLE,
    },
    {
      keyString: '저자명',
      params: PARAMS.AUTHOR,
    },
    {
      keyString: '출판사',
      params: PARAMS.PUBLISHER,
    },
  ];
  const [searchItems, setSearchItems] = useRecoilState(
    detailSearchFieldListState,
  );
  const [list, setList] = useState<ListItemType[]>([]);

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

  useEffect(() => {
    if (searchItems.length > 0) {
      const newList = defaultList.slice();
      let targetIndex = -1;
      for (let i = 0; i < newList.length; i++) {
        if (newList[i].params === keyParams) {
          targetIndex = i;
          break;
        }
      }

      if (targetIndex >= 0) {
        newList.splice(targetIndex, 1);
      }

      setList(newList);
    }
  }, [searchItems]);

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
