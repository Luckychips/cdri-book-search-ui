import React from 'react';
import { Header, MainContent } from '@/components/atoms';
import { EmptyResult } from "@/components/molecules";
import { Searcher } from '@/components/organisms';

function App() {
  return (
    <main>
      <Header />
      <MainContent>
        <Searcher />
        <EmptyResult />
      </MainContent>
    </main>
  );
}

export default App;
