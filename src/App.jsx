import { ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";

import { AuthLayout } from "./components/layouts/authLayout";

import theme from "./theme";

import authRouter from "./routes/authRoutes";

import './global.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthLayout>
        <RouterProvider router={authRouter} />
      </AuthLayout>
    </ThemeProvider>
  );
}

export default App;
