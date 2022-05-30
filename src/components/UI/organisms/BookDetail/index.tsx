import React from 'react';
import { Book } from '@/models/response';
import { BookDetailInfo, BookDetailPrice } from '@/components/organisms';
import * as S from './styles';

interface BookDetailProps {
  item: Book;
}

const BookDetail = ({ item }: BookDetailProps) => {
  return (
    <S.Container>
      <S.ThumbnailSection>
        <S.BookThumb src={item.image} alt="" />
      </S.ThumbnailSection>
      <BookDetailInfo item={item} />
      <BookDetailPrice item={item} />
    </S.Container>
  );
};

export default BookDetail;
