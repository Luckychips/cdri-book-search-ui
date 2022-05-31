import React from 'react';
import { RecoilRoot } from 'recoil';
import { Header, MainContent } from '@/components/atoms';
import { Searcher, Pagination } from '@/components/organisms';
import { SearchResult } from '@/components/templates';

/*
 *  todo
 *  1. 페이지네이션 컴포넌트 및 예외처리
 *  2. 상세보기 버튼 chevron arrow 추가
 *  3. 상세검색 팝업 추가
 *  4. 기타 누락된 css 및 상세보기 아코디언 애니메이션 처리
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
