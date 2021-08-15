import styled from 'styled-components';

const Row = styled.div`
  margin-left: ${({ marginLeft }) => `${marginLeft}px`};
  border: 1px solid #CECECE;
  padding: 5px;
  cursor: pointer;
`;

const ShadowRow = styled.div`
  margin-left: ${({ marginLeft }) => `${marginLeft}px`};
  border: 1px dashed #CECECE;
  padding: 2px;
  margin-top: ${({ noMargin }) => !noMargin && '4px'};
  background: #F2F2F2;
`;

export {
  Row,
  ShadowRow,
};
