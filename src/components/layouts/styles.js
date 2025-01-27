import styled from "styled-components";
import pokeball from '../../assets/pokeball.svg';

export const AuthSection = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  background: url(${pokeball});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-clip: border-box;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const AppSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
  padding-top: 72px;
`;
