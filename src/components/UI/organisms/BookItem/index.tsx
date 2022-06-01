import React, { useState } from 'react';
import { FlexInLiner } from '@/components/atoms';
import { BookDetail } from '@/components/organisms';
import { Book } from '@/models/response';
import * as S from './styles';
import { icons } from '@/assets';

interface BookItemProps {
  item: Book;
}

const BookItem = ({ item }: BookItemProps) => {
  const [isOpenDetail, setIsOpenDetail] = useState(false);
  console.log(item);

  const goToPurchase = () => {
    window.open(item.link, '_blank');
  };

  return (
    <>
      <S.ItemContainer>
        <FlexInLiner>
          <S.BookThumb src={item.image} alt="" />
          <S.BookTitle dangerouslySetInnerHTML={{ __html: item.title }} />
          <S.BookAuthor dangerouslySetInnerHTML={{ __html: item.author }} />
        </FlexInLiner>
        <FlexInLiner>
          {item.price && (
            <S.BookPrice>{parseInt(item.price).toLocaleString()}원</S.BookPrice>
          )}
          <S.PurchaseButton onClick={goToPurchase}>구매하기</S.PurchaseButton>
          <S.ViewDetailButton onClick={() => setIsOpenDetail(!isOpenDetail)}>
            <FlexInLiner>
              <div>상세보기</div>
              <img
                src={isOpenDetail ? icons.ic_chevron_up : icons.ic_chevron_down}
                alt=""
              />
            </FlexInLiner>
          </S.ViewDetailButton>
        </FlexInLiner>
      </S.ItemContainer>
      {isOpenDetail && <BookDetail item={item} />}
    </>
  );
};

export default BookItem;
