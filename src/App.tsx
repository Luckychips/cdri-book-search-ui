import React from 'react';
import { RecoilRoot } from 'recoil';
import { Header, MainContent } from '@/components/atoms';
import { Searcher } from '@/components/organisms';
import { SearchResult } from '@/components/templates';

/*
 *  todo
 *  5. 검색 연동 예외처리
 * */

function App() {
  return (
    <RecoilRoot>
      <main>
        <Header />
        <MainContent>
          <Searcher />
          <SearchResult />
        </MainContent>
      </main>
    </RecoilRoot>
  );
}

export default App;
