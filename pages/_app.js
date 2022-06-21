import 'antd/dist/antd.css';
import 'react-image-gallery/styles/css/image-gallery.css';
import 'react-dates/lib/css/_datepicker.css';
import 'react-multi-carousel/lib/styles.css';
import '@glidejs/glide/dist/css/glide.core.min.css';
import 'antd/lib/date-picker/style/index.css';
import { ThemeProvider } from 'styled-components';
import theme from 'themes/default.theme';
import GlobalStyles from 'themes/global.style';
import Layout from 'containers/Layout/Layout';
import { SearchProvider } from 'context/SearchProvider';
import { CartProvider } from 'context/CartProvider';
import 'public/global.css';
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';
import 'setimmediate';
import { UserDateProvider } from "context/DateContext";

function App({ Component, router, pageProps }) {
  const { query } = router;

  useEffect(() => {
    const tagManagerArgs = {
      gtmId: 'GTM-MQL6WRV',
      dataLayerName: 'PageDataLayer',
    };

    TagManager.initialize(tagManagerArgs);
  }, []);

  return (
      <SearchProvider query={query}>
        <CartProvider query={query}>
          <ThemeProvider theme={theme}>
            <UserDateProvider>
              <Layout>
                <GlobalStyles />
                <Component {...pageProps} />
              </Layout>
            </UserDateProvider>
          </ThemeProvider>
        </CartProvider>
      </SearchProvider>
  );
}

export default App;
