import { Provider } from "react-redux";
import { SessionProvider } from 'next-auth/react';
import { store } from "../store/Store";
import FullLayout from "../layouts/FullLayout";
import BlankLayout from "../layouts/BlankLayout";
import Head from "next/head";
import "../styles/style.scss";

const layouts = {
  Blank: BlankLayout,
};

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const Layout = layouts[Component.layout] || FullLayout;
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Head>
          <title>Entrepreneurs.place</title>
          <meta
            name="description"
            content="Entrepreneurs.place"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
  </SessionProvider>
  );
}

export default MyApp;
