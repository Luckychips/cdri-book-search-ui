import React from 'react';
import * as S from './styles';

interface ItemProps {
  key: string;
  value: string;
}

interface DropDownListProps {
  setIsVisibleList: (isVisibleList: boolean) => void;
}

const DropDownList = ({ setIsVisibleList }: DropDownListProps) => {
  const list = [
    {
      value: '제목',
      key: 'd_titl',
    },
    {
      value: '저자명',
      key: 'd_auth',
    },
    {
      value: '출판사',
      key: 'd_publ',
    },
  ];

  return (
    <S.Container>
      {list.map((item, index) => (
        <S.ListItem
          key={`list-item-${item.key}`}
          onClick={() => setIsVisibleList(false)}
        >
          {item.value}
        </S.ListItem>
      ))}
    </S.Container>
  );
};

export default DropDownList;
