import NextApp, { AppContext, AppProps } from 'next/app';
import { memo } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return <Component {...pageProps} />;
};

const MemoApp = memo(App);

const AppWrapper = (props: AppProps): JSX.Element => {
  const { ...resp } = props;
  return (
    <>
      <ThemeProvider theme={{}}>
        <GlobalStyle />
        <MemoApp {...resp} />
      </ThemeProvider>
    </>
  );
};

AppWrapper.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext);

  return { ...appProps };
};

export default AppWrapper;
