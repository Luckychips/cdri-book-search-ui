import styled from '@emotion/styled';

export const Container = styled.section`
  display: flex;
  align-items: center;
  position: relative;
`;

export const SearchIcon = styled.img`
  position: absolute;
  left: 15px;
  top: 10px;
`;

export const InputBox = styled.input`
  width: 70%;
  outline: none;
  background-color: #f2f4f6;
  border: 0;
  border-radius: 100px;
  padding: 13px 0 13px 50px;
  margin-right: 15px;

  &::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #8d94a0;
  }
`;

export const SearchButton = styled.div`
  display: inline-block;
  padding: 5px 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #8d94a0;
  border: 1px solid #8d94a0;
  border-radius: 8px;

  &:hover {
    cursor: pointer;
  }
`;
