import { atom } from 'recoil';

export const currentPageState = atom({
  key: 'CurrentPage',
  default: 1,
});

export const totalSearchCountState = atom({
  key: 'TotalSearchCount',
  default: 0,
});

export const bookItemListState = atom({
  key: 'BookItemList',
  default: [],
});

export const detailSearchFieldListState = atom({
  key: 'DetailSearchFieldList',
  default: [
    {
      key: '제목',
      keyParams: 'd_titl',
      value: '',
    },
  ],
});
