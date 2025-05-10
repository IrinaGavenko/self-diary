import React from 'react';

import HomePage from './views/HomePage';
import Header from './shared/Header';
import Layout from './shared/Layout';

function App() {
  return (
      <>
            <Layout>

                <Header />
                <HomePage/>

            </Layout>
      </>
  );
}

export default App;
