import React, { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentPageState, totalSearchCountState } from '@/stores/recoil';
import { PagerButton, FlexInLiner } from '@/components/atoms';
import * as S from './styles';

const Pagination = () => {
  const PER_PAGER = 10;
  const totalSearchCount = useRecoilValue(totalSearchCountState);
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);
  const totalPageCount = Math.ceil(totalSearchCount / PER_PAGER);

  const getThisPageNumber = (index: number) => {
    const pivot = (Math.ceil(currentPage / PER_PAGER) - 1) * PER_PAGER;
    return index + pivot;
  };

  return (
    <S.Container>
      <FlexInLiner>
        <PagerButton
          isDisabled={currentPage === 1}
          isPageCount={false}
          onClick={() => setCurrentPage(1)}
        />
        <PagerButton
          isDisabled={currentPage === 1}
          isPageCount={false}
          isFirst={false}
          onClick={() => {
            if (currentPage > 1) {
              setCurrentPage(currentPage - 1);
            }
          }}
        />
        {Array.from({ length: PER_PAGER }, (_, i) =>
          getThisPageNumber(i + 1),
        ).map((page) => {
          return (
            page <= totalPageCount && (
              <PagerButton
                key={`page-number-${page}`}
                pageNumber={page}
                isActive={currentPage === page}
                onClick={() => setCurrentPage(page)}
              />
            )
          );
        })}
        <PagerButton
          isDisabled={currentPage === totalPageCount}
          isPageCount={false}
          isFirst={false}
          isPrevious={false}
          onClick={() => {
            if (currentPage < totalPageCount) {
              setCurrentPage(currentPage + 1);
            }
          }}
        />
        <PagerButton
          isDisabled={currentPage === totalPageCount}
          isPageCount={false}
          isPrevious={false}
          onClick={() => setCurrentPage(totalPageCount)}
        />
      </FlexInLiner>
    </S.Container>
  );
};

export default Pagination;
