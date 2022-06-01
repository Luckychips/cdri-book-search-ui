import styled from '@emotion/styled';

export const WrappedAnimator = styled.section`
  height: 0;
  overflow: hidden;
  transition: height 0.5s;
  &.on {
    height: 350px;
  }

  &.off {
    height: 0;
  }
`;

export const Container = styled.section`
  padding: 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #d2d6da;
`;

export const ThumbnailSection = styled.div``;

export const BookThumb = styled.img`
  width: 200px;
  height: 264px;
`;
