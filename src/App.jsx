import { ThemeProvider } from "styled-components";
import {
  RouterProvider,
} from "react-router-dom";

import { AuthLayout } from "./components/layouts/authLayout";

import theme from "./theme";

import router from "./routes";

import './global.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthLayout>
        <RouterProvider router={router} />
      </AuthLayout>
    </ThemeProvider>
  );
}

export default App;
