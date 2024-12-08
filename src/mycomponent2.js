import React, { useEffect } from 'react';

const myComponent2 = () => {
  useEffect(() => {
    console.log('Component has mounted!');
  }, []); 
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
};

export default myComponent2;
