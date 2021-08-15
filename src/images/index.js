import React from 'react';
import CorgiImg from './corgi.jpg';
import CorgiImg2 from './corgi2.jpg';

const styles = (value) => ({
  height: `${value}px`,
  width: `${value}px`,
});

const Corgi = () => (
  <div>
    <img src={CorgiImg} style={styles(25)} alt="corgi" />
  </div>
);

const Corgi2 = () => (
  <div>
    <img src={CorgiImg2} style={styles(25)} alt="corgi" />
  </div>
);

export {
  Corgi,
  Corgi2,
};
