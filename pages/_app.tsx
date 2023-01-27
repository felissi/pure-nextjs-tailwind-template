import 'styles/main.css';
import 'styles/chrome-bug.css';
import { useEffect, useState } from 'react';
import React from 'react';

import Layout from 'components/Layout';
import { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    document.body.classList?.remove('loading');
  }, []);

  return (
    <div className="bg-black">
          <Layout>
            <Component {...pageProps} />
          </Layout>
    </div>
  );
}
