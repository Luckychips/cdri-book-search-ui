import React from 'react';
import * as S from './styles';
import { icons } from '@/assets';

interface PagerButtonProps {
  isActive?: boolean;
  isDisabled?: boolean;
  isPageCount?: boolean;
  isFirst?: boolean;
  isPrevious?: boolean;
  pageNumber?: number;
  onClick: () => void;
}

const PagerButton = ({
  isActive = false,
  isDisabled = false,
  isPageCount = true,
  isFirst = true,
  isPrevious = true,
  pageNumber = 1,
  onClick,
}: PagerButtonProps) => {
  const getOtherButtons = () => {
    let element = null;
    if (isFirst) {
      if (isPrevious) {
        element = (
          <>
            <img src={icons.ic_chevron_left} alt="" />
            <img src={icons.ic_chevron_left} alt="" />
          </>
        );
      } else {
        element = (
          <>
            <img src={icons.ic_chevron_right} alt="" />
            <img src={icons.ic_chevron_right} alt="" />
          </>
        );
      }
    } else {
      if (isPrevious) {
        element = (
          <>
            <img src={icons.ic_chevron_left} alt="" />
          </>
        );
      } else {
        element = (
          <>
            <img src={icons.ic_chevron_right} alt="" />
          </>
        );
      }
    }
    return element;
  };

  return (
    <S.ButtonContainer
      borderColor={isActive ? '#4880EE' : '#DADADA'}
      backgroundColor={isActive ? '#4880EE' : 'white'}
      color={isActive ? 'white' : '#8D94A0'}
      cursor={isDisabled ? 'not-allowed' : 'pointer'}
      onClick={() => !isDisabled && onClick()}
    >
      {isPageCount ? <div>{pageNumber}</div> : getOtherButtons()}
    </S.ButtonContainer>
  );
};

export default PagerButton;
