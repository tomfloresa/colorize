import styled from "styled-components";

export const PaginatorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(p) => p.theme.color.white};
  padding: 8px;
  max-width: 280px;
  border-radius: 40px;
`;

export const PaginatorArrow = styled.button`
  appearance: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  background-color: ${(p) => p.theme.color.ok};
  color: white;
  border: none;
  display: block;
  padding: 8px;
  height: 46px;
  width: 46px;

  &:disabled {
    background-color: ${(p) => p.theme.colors.disabledColor};
    cursor: not-allowed;
  }
`;

export const PaginatorPage = styled.div`
  font-size: 24px;
  font-weight: 800;
`;
