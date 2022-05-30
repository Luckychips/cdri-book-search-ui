import React from 'react';
import { Header, MainContent } from '@/components/atoms';
import { Searcher } from '@/components/organisms';

function App() {
  return (
    <main>
      <Header />
      <MainContent>
        <Searcher />
      </MainContent>
    </main>
  );
}

export default App;
