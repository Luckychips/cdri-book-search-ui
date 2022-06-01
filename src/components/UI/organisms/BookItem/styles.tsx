import styled from '@emotion/styled';

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #d2d6da;
  padding: 15px 0 15px 40px;
`;

export const BookThumb = styled.img`
  width: 48px;
  height: 68px;
`;

export const BookTitle = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  margin-left: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 350px;
`;

export const BookAuthor = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #8d94a0;
  margin-left: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100px;
`;

export const BookPrice = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  color: #353c49;
  margin-right: 55px;
`;

export const PurchaseButton = styled.span`
  padding: 12px 28px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
  background-color: #4880ee;
  border-radius: 8px;

  &:hover {
    cursor: pointer;
  }
`;
