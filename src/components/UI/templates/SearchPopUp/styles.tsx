import styled from '@emotion/styled';

export const Container = styled.main`
  position: absolute;
  right: 0;
  top: 45px;
  min-width: 350px;
`;

export const PopUpContent = styled.section`
  position: relative;
  background: #ffffff;
  box-shadow: 0 4px 14px 6px rgba(151, 151, 151, 0.15);
  border-radius: 8px;
  padding: 24px;
`;

export const DismissButton = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 12px;

  &:hover {
    cursor: pointer;
  }

  & > img {
    width: 12px;
    height: 12px;
  }
`;

export const SearchField = styled.fieldset`
  display: flex;
  border: none;
  margin: 12px 0 0;
  padding: 0;
`;

export const FieldAddButton = styled.div``;

export const Spacing = styled.div`
  padding: 0 7px;
`;

export const ButtonContainer = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 45px;
`;

export const SubmitButton = styled.div`
  width: 64px;
  border-radius: 8px;
  padding: 5px 0;
  text-align: center;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;

  &:hover {
    cursor: pointer;
  }

  &.primary {
    color: white;
    background-color: #4880ee;
  }

  &.secondary {
    color: #6d7582;
    background-color: #f2f4f6;
  }
`;
