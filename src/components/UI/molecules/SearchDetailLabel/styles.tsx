import styled from '@emotion/styled';

export const Container = styled.label`
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  color: #353c49;
  border-bottom: 1px solid #d2d6da;
  padding: 5px;

  &:hover {
    cursor: pointer;
  }

  &.visibility-hidden {
    visibility: hidden;
  }

  & div {
    width: 25px;
  }

  & img {
    width: 10.5px;
    height: 6px;
    margin-left: 45px;
  }
`;
