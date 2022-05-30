import React from 'react';
import { Book } from '@/models/response';

interface BookItemProps {
  item: Book;
}

const BookItem = ({ item }: BookItemProps) => {
  return <div>{item.title}</div>;
};

export default BookItem;
