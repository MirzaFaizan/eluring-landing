import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import OrderProcess from 'sections/order-process';
import CoreFeature from 'sections/core-features';
import Features from 'sections/features';
import Plan from 'sections/plan';
import Faq from 'sections/faq';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Eluring" />
          <Banner />
          <OrderProcess />
          <Features />
          <Plan />
          <Faq />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
