import React from 'react';
import CorgiImg from '../images/corgi.jpg';
import CorgiImg2 from '../images/corgi2.jpg';

const styles = {
  img: {
    height: '58px', 
    width: '58px',
  }
};

export const Corgi = () => {
 return (
   <div>
     <img src={CorgiImg} style={styles.img} alt="corgi" />
   </div>
 )
};

export const Corgi2 = () => {
 return (
   <div>
     <img src={CorgiImg2} style={styles.img} alt="corgi" />
   </div>
 )
};