import React from 'react';

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import HomePage from './views/HomePage';
import AchievementsPage from './views/AchievementsPage';
import Header from './shared/Header';
import Layout from './shared/Layout';

function App() {
  return (
      <BrowserRouter>
      <Layout>
          <Header />

              <Routes>
                  <Route
                      path="/self-diary"
                      element={<HomePage />}
                  />
                  <Route
                      path="/achievements"
                      element={<AchievementsPage />}
                  />
              </Routes>
      </Layout>
      </BrowserRouter>
  );
}

export default App;
