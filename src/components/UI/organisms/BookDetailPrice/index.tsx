import React from 'react';
import * as S from './styles';
import { Book } from '@/models/response';
import { FlexInLiner } from '@/components/atoms';

interface BookDetailPriceProps {
  item: Book;
}

const BookDetailPrice = ({ item }: BookDetailPriceProps) => {
  return (
    <S.Container>
      <S.ViewDetailButton>상세보기</S.ViewDetailButton>
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
      <S.PurchaseButton>구매하기</S.PurchaseButton>
    </S.Container>
  );
};

export default BookDetailPrice;
