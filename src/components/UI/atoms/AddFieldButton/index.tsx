import React from 'react';
import * as S from './styles';
import { icons } from '@/assets';

const AddFieldButton = ({ className, onClick }: ButtonProps) => {
  return (
    <S.Container className={className} onClick={onClick}>
      <S.Icon src={icons.ic_plus} alt="" />
      <S.Text>검색 조건 추가</S.Text>
    </S.Container>
  );
};

export default AddFieldButton;
