import { atom } from 'recoil';
import { PARAMS } from '@/constpack/api';

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
      keyParams: PARAMS.TITLE,
      value: '',
    },
  ],
});

export const backUpSearchFieldListState = atom({
  key: 'BackUpSearchFieldList',
  default: [],
});
