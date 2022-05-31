import styled from '@emotion/styled';

export const Container = styled.section`
  position: relative;
`;

export const ViewDetailButton = styled.div`
  position: absolute;
  right: 0;
  padding: 12px 28px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #6d7582;
  background-color: #f2f4f6;
  border-radius: 8px;

  &:hover {
    cursor: pointer;
  }
`;

export const PriceContainer = styled.div`
  padding-top: 137px;

  & > .flex-end {
    justify-content: flex-end;

    & > s {
      width: 85px;
      text-align: right;
      font-style: normal;
      font-weight: 300;
      font-size: 18px;
      color: #353c49;
    }

    & > b {
      width: 85px;
      text-align: right;
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      color: #353c49;
    }
  }

  & > .spacing {
    margin: 10px 0 30px 0;
  }
`;

export const PriceLabel = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  color: #8d94a0;
`;

export const PurchaseButton = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: white;
  background-color: #4880ee;
  border-radius: 8px;
  padding: 12px 90.5px;
`;
