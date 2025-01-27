import { ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";

import theme from "./theme";

import authRouter from "./routes/authRouter";
import appRouter from "./routes/appRouter";

import './global.css';
import { AppLayout } from "./components/layouts/appLayout";
import { StateProvider, useStore } from "./store";
import { Alert } from "./components/Alert";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StateProvider>
        <Layout />

        <Alert />
      </StateProvider>
    </ThemeProvider>
  );
}

function Layout() {
  const {
    user,
  } = useStore();

  return <RouterProvider router={ user.name !== '' ? appRouter : authRouter} />;
}

export default App;
