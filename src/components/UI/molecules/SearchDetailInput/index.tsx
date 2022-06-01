import React from 'react';
import * as S from './styles';

interface SearchDetailInputProps {
  value: string;
  setValue: (text: string) => void;
}

const SearchDetailInput = ({ value, setValue }: SearchDetailInputProps) => {
  return (
    <S.InputContainer
      placeholder="검색어 입력"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default SearchDetailInput;
