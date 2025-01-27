import styled from "styled-components";

export const HeaderView = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 72px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const BackButton = styled.button`
  position: fixed;
  left: 16px;
  width: 32px;
  height: 32px;
  border: none;
  color: ${({ theme }) => theme.colors.secondary};
  background-color: transparent;
  font-size: 32px;
  transition: all .2s;

  &:active {
    opacity: .7;
  }
`;
