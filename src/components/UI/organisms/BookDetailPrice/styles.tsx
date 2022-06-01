import styled from '@emotion/styled';

export const Container = styled.section`
  position: relative;
`;

export const DetailButtonContainer = styled.div`
  position: absolute;
  top: -12.5px;
  right: -40px;
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
  position: absolute;
  width: 60px;
  text-align: center;
  right: -30px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: white;
  background-color: #4880ee;
  border-radius: 8px;
  padding: 12px 87.5px;

  &:hover {
    cursor: pointer;
  }
`;
