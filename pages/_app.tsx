import type { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { light } from "../scss/MaterialTheme";
import { useState } from "react";
import { ApolloProvider } from "@apollo/client";
import client from "@/apollo/client";
import "../scss/app.scss";
import "../scss/pc/main.scss";
import "../scss/mobile/main.scss";

export default function App({ Component, pageProps }: AppProps) {
  // @ts-ignore
  const [theme, setTheme] = useState(createTheme(light));

  // Socket.io, Redux, Mui ... Globat integration page
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}

/**
 *  <ThemeProvider theme={theme}>  // MUI theme obyektini butun ilova bo'ylab barcha komponentlarga tarqatadi (Context orqali), shu tufayli har bir MUI komponenti bitta umumiy dizayn sozlamasini "biladi".
      <CssBaseline /> // brauzerlarning standart CSS farqlarini (margin, padding, shrift) tozalab, bir xil boshlang'ich holatga keltiradi.
      <Component {...pageProps} />
    </ThemeProvider>
 * 
 */
