import React, { useState } from 'react';
import { DropDownList } from '@/components/molecules';
import * as S from './styles';
import { icons } from '@/assets';

interface SearchDetailLabelProps {
  className?: string;
  itemIndex: number;
  keyString: string;
}

const SearchDetailLabel = ({
  className = '',
  itemIndex,
  keyString,
}: SearchDetailLabelProps) => {
  const [isVisibleList, setIsVisibleList] = useState(false);

  return (
    <>
      <S.Container
        className={className}
        onClick={() => setIsVisibleList(!isVisibleList)}
      >
        <div>{keyString}</div>
        <img
          src={isVisibleList ? icons.ic_chevron_up : icons.ic_chevron_down}
          alt=""
        />
      </S.Container>
      {isVisibleList && (
        <DropDownList
          itemIndex={itemIndex}
          setIsVisibleList={setIsVisibleList}
        />
      )}
    </>
  );
};

export default SearchDetailLabel;
