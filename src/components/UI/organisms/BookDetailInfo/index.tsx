import React from 'react';
import { Book } from '@/models/response';
import { FlexInLiner } from '@/components/atoms';
import * as S from './styles';

interface BookDetailInfoProps {
  item: Book;
}

const BookDetailInfo = ({ item }: BookDetailInfoProps) => {
  return (
    <S.Container>
      <FlexInLiner>
        <S.InfoTitle dangerouslySetInnerHTML={{ __html: item.title }} />
        <S.InfoAuthor dangerouslySetInnerHTML={{ __html: item.author }} />
      </FlexInLiner>
      <S.DescTitle>책 소개</S.DescTitle>
      <S.InfoDescription
        dangerouslySetInnerHTML={{ __html: item.description }}
      />
    </S.Container>
  );
};

export default BookDetailInfo;
