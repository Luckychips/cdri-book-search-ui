import React from 'react';
import { FlexInLiner } from '@/components/atoms';
import * as S from './styles';
import { icons } from '@/assets';

interface ViewDetailButtonProps {
  isOpenDetail: boolean;
  setIsOpenDetail: (v: boolean) => void;
}

const ViewDetailButton = ({
  isOpenDetail,
  setIsOpenDetail,
}: ViewDetailButtonProps) => {
  return (
    <S.ViewDetailButton onClick={() => setIsOpenDetail(!isOpenDetail)}>
      <FlexInLiner>
        <div>상세보기</div>
        <img
          src={isOpenDetail ? icons.ic_chevron_up : icons.ic_chevron_down}
          alt=""
        />
      </FlexInLiner>
    </S.ViewDetailButton>
  );
};

export default ViewDetailButton;
