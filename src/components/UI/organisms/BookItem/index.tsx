import React, { useState } from 'react';
import { FlexInLiner, ViewDetailButton } from '@/components/atoms';
import { BookDetail } from '@/components/organisms';
import { Book } from '@/models/response';
import * as S from './styles';

interface BookItemProps {
  item: Book;
}

const BookItem = ({ item }: BookItemProps) => {
  const [isOpenDetail, setIsOpenDetail] = useState(false);

  const goToPurchase = () => {
    window.open(item.link, '_blank');
  };

  return (
    <>
      {!isOpenDetail && (
        <S.ItemContainer>
          <FlexInLiner>
            <S.BookThumb src={item.image} alt="" />
            <S.BookTitle dangerouslySetInnerHTML={{ __html: item.title }} />
            <S.BookAuthor dangerouslySetInnerHTML={{ __html: item.author }} />
          </FlexInLiner>
          <FlexInLiner>
            {item.price && (
              <S.BookPrice>
                {parseInt(item.price).toLocaleString()}원
              </S.BookPrice>
            )}
            <S.PurchaseButton onClick={goToPurchase}>구매하기</S.PurchaseButton>
            <ViewDetailButton
              isOpenDetail={isOpenDetail}
              setIsOpenDetail={setIsOpenDetail}
            />
          </FlexInLiner>
        </S.ItemContainer>
      )}
      <BookDetail
        item={item}
        isOpenDetail={isOpenDetail}
        setIsOpenDetail={setIsOpenDetail}
      />
    </>
  );
};

export default BookItem;
