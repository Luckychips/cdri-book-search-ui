import styled from '@emotion/styled';

export const Container = styled.ul`
  position: absolute;
  top: 55px;
  width: 105px;
  background-color: #ffffff;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
  list-style: none;
  padding-left: 0;
`;

export const ListItem = styled.li`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #8d94a0;
  padding: 4px 8px;

  &:hover {
    cursor: pointer;
    background-color: #4880ee;
    color: white;
  }
`;
