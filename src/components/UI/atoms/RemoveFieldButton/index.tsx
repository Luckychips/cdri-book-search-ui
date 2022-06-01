import React from 'react';
import * as S from './styles';
import { icons } from '@/assets';

const RemoveFieldButton = ({ onClick }: ButtonProps) => {
  return (
    <S.Container onClick={onClick}>
      <S.ButtonImage src={icons.ic_remove_field} alt="" />
    </S.Container>
  );
};

export default RemoveFieldButton;
