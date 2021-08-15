import styled from 'styled-components';

const Container = styled.div`
`;

const RowContainer = styled.div`
  margin-left: ${({ marginLeft }) => `${marginLeft}px`};
  margin-bottom: 6px;
  border: 1px solid #CECECE;
  cursor: pointer;
`;

const ShadowRow = styled.div`
  margin-left: ${({ marginLeft }) => `${marginLeft}px`};
  border: 1px dashed #CECECE;
  height: 4px;
  /* margin-top: ${({ noMargin }) => !noMargin && '4px'}; */
  background: #F2F2F2;
  &:hover {
    height: 16px;
    transition: 1ms;
  }
`;

export {
  RowContainer,
  ShadowRow,
  Container,
};