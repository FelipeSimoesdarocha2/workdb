// Styles
import GlobalStyle from '../styles/globals';
import type { AppProps } from 'next/app';
// Translate
import '../i18n';
// React-query
import { QueryClientProvider } from '@tanstack/react-query';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />;
    </>
  );
}
