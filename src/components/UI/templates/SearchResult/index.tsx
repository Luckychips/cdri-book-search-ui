import React from 'react';
import { useRecoilValue } from 'recoil';
import { bookItemListState, totalSearchCountState } from '@/stores/recoil';
import { EmptyResult } from '@/components/molecules';
import { BookItem, Pagination } from '@/components/organisms';

const SearchResult = () => {
  const resultCount = useRecoilValue(totalSearchCountState);
  const bookItemList = useRecoilValue(bookItemListState);

  return (
    <>
      {resultCount > 0 ? (
        bookItemList.map((item, index) => (
          <BookItem key={`book-item-${index}`} item={item} />
        ))
      ) : (
        <EmptyResult />
      )}
      {resultCount > 0 && <Pagination />}
    </>
  );
};

export default SearchResult;
