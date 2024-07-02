import React, { useState } from 'react';

function App() {
  const [lottoNumbers, setLottoNumbers] = useState([]);

  // 로또 번호 생성 함수
  const generateLottoNumbers = () => {
    let numbers = [];
    while (numbers.length < 6) {
      let randomNumber = Math.floor(Math.random() * 45) + 1;
      if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
      }
    }
    numbers.sort((a, b) => a - b); // 오름차순 정렬
    setLottoNumbers(numbers);
  };

  return (
      <div className="container mt-5">
        <div className="card">
          <div className="card-header">
            <h1 className="text-center">랜덤 로또 번호 생성기</h1>
            <h2><strong style={{ fontSize: '20px' }}>Made by 규성</strong></h2>
          </div>
          <div className="card-body">
            <button id="generateButton" className="button" onClick={generateLottoNumbers}>
              로또 번호 생성
            </button>
            <p id="lottoNumbersDisplay" className="text-center mt-3">
              생성된 로또 번호: {lottoNumbers.join(", ")}
            </p>
          </div>
        </div>
      </div>
  );
}

export default App;
