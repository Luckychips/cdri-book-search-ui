import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  background-color: #eaf3fe;
  border-radius: 4px;
  padding: 6px 30.5px;
  margin-left: 8px;

  &:hover {
    cursor: pointer;
  }

  &.visibility-hidden {
    visibility: hidden;
  }
`;

export const Icon = styled.img``;

export const Text = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #4880ee;
  margin-left: 8px;
`;
