import { atom } from 'recoil';

export const shouldFetchState = atom({
  key: 'ShouldFetch',
  default: false,
});

export const queryKeywordState = atom({
  key: 'QueryKeyword',
  default: '',
});

export const queryStringState = atom({
  key: 'QueryString',
  default: '',
});
