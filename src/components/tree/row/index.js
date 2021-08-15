import React from 'react';

import {
  RowContainer,
  ShadowRow,
  Container,
} from './styles';

const Row = (props) => {
  const {
    marginLeft,
    label,
    isLast,
  } = props;

  return (
    <Container>

      {/* <ShadowRow marginLeft={marginLeft} /> */}

      <RowContainer
        marginLeft={marginLeft}
      >
        {label}
      </RowContainer>

      {/* {isLast && (
        <ShadowRow noMargin marginLeft={marginLeft} />
      )} */}

    </Container>
  );
};

export default Row;
