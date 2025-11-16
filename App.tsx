import React, { useState } from 'react';
import Layout from './components/Layout';
import ProjectListPage from './pages/ProductListPage';
import LoadingScreen from './components/LoadingScreen';

export type Page = 'projects';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  const navigate = (page: Page) => {
    const element = document.getElementById(page);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <Layout navigate={navigate}>
      <ProjectListPage />
    </Layout>
  );
};

export default App;
