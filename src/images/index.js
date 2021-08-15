import React from 'react';
import CorgiImg from './corgi.jpg';
import CorgiImg2 from './corgi2.jpg';

const styles = (value) => ({
  height: `${value}px`,
  width: `${value}px`,
});

export const Corgi = (props) => (
  <div>
    <img src={CorgiImg} style={styles(props.itemHeight)} alt="corgi" />
  </div>
);

export const Corgi2 = (props) => (
  <div>
    <img src={CorgiImg2} style={styles(props.itemHeight)} alt="corgi" />
  </div>
);
