import React, { useState } from 'react';

const App = () => {
  let [counter, setCounter] = useState(5);
  
  const update = () => {
    setCounter(counter + 1);
  };

  const decrease = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <h1>ร้านชาบูเสียบไม้</h1>
      <h2>ไม้ละ 5 บาท</h2>

      <div>
        <p>5 ไม้: {counter * 5 } บาท</p>
        <p>10 ไม้: {counter * 10} บาท</p>
        <p>20 ไม้: {counter * 20} บาท</p>
        <p>30 ไม้: {counter * 30} บาท</p>
        <p>
          <button onClick={update}>+</button> 
          <button onClick={decrease}>-</button>
        </p>
      </div>
    </div>
  );
};

export default App;
