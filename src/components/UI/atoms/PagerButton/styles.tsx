import styled from '@emotion/styled';

export const ButtonContainer = styled.div<CssProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  border: ${(props) => `1px solid ${props.borderColor}`};
  border-radius: 4px;
  margin-right: 8px;
  padding: 2px 7.5px;

  &:hover {
    cursor: ${(props) => props.cursor};
  }
`;
