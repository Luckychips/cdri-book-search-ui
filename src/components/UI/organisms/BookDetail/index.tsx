import React from 'react';
import { Book } from '@/models/response';
import { BookDetailInfo, BookDetailPrice } from '@/components/organisms';
import * as S from './styles';

interface BookDetailProps {
  item: Book;
  isOpenDetail: boolean;
  setIsOpenDetail: (v: boolean) => void;
}

const BookDetail = ({
  item,
  isOpenDetail,
  setIsOpenDetail,
}: BookDetailProps) => {
  return (
    <S.WrappedAnimator className={isOpenDetail ? 'on' : 'off'}>
      <S.Container>
        <S.ThumbnailSection>
          <S.BookThumb src={item.image} alt="" />
        </S.ThumbnailSection>
        <BookDetailInfo item={item} />
        <BookDetailPrice
          item={item}
          isOpenDetail={isOpenDetail}
          setIsOpenDetail={setIsOpenDetail}
        />
      </S.Container>
    </S.WrappedAnimator>
  );
};

export default BookDetail;
