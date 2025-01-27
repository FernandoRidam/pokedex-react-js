import { Outlet } from "react-router-dom";
import { AuthSection } from "./styles";
import { Header } from "../Header";

export const AuthLayout = () => {
  return (
    <AuthSection>
      <Header
        layout="auth"
      />

      <Outlet />
    </AuthSection>
  );
};
