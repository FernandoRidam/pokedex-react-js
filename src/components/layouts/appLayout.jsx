import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { AppSection, Main } from "./styles";

export const AppLayout = () => {
  return (
    <AppSection>
      <Header
        layout="app"
      />

      <Main>
        <Outlet />
      </Main>
    </AppSection>
  );
};
