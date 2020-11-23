import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/global";
import main from "../theme/main";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={main}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}
