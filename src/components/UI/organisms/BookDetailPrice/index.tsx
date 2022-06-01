import React from 'react';
import * as S from './styles';
import { Book } from '@/models/response';
import { FlexInLiner, ViewDetailButton } from '@/components/atoms';

interface BookDetailPriceProps {
  item: Book;
  isOpenDetail: boolean;
  setIsOpenDetail: (v: boolean) => void;
}

const BookDetailPrice = ({
  item,
  isOpenDetail,
  setIsOpenDetail,
}: BookDetailPriceProps) => {
  const goToPurchase = () => {
    window.open(item.link, '_blank');
  };

  return (
    <S.Container>
      <S.DetailButtonContainer>
        <ViewDetailButton
          isOpenDetail={isOpenDetail}
          setIsOpenDetail={setIsOpenDetail}
        />
      </S.DetailButtonContainer>
      <S.PriceContainer>
        <FlexInLiner className="flex-end">
          <S.PriceLabel>원가</S.PriceLabel>
          {item.price && <s>{parseInt(item.price).toLocaleString()}원</s>}
        </FlexInLiner>
        <FlexInLiner className="flex-end spacing">
          <S.PriceLabel>할인가</S.PriceLabel>
          {item.discount && <b>{parseInt(item.discount).toLocaleString()}원</b>}
        </FlexInLiner>
      </S.PriceContainer>
      <S.PurchaseButton onClick={goToPurchase}>구매하기</S.PurchaseButton>
    </S.Container>
  );
};

export default BookDetailPrice;
