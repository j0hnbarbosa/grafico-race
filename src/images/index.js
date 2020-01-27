import React from 'react';
import CorgiImg from '../images/corgi.jpg';
import CorgiImg2 from '../images/corgi2.jpg';

const styles = (value) => {
  return {
    height: `${value}px`, 
    width: `${value}px`,
  }
};

export const Corgi = (props) => {
 return (
   <div>
     <img src={CorgiImg} style={styles(props.itemHeight)} alt="corgi" />
   </div>
 )
};

export const Corgi2 = (props) => {
 return (
   <div>
     <img src={CorgiImg2} style={styles(props.itemHeight)} alt="corgi" />
   </div>
 )
};