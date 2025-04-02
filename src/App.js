import { useState } from 'react';
import './App.css';
import Player from './components/Player';

const choice = {
  rock: {
    name: 'rock',
    imgUrl: 'https://img.icons8.com/?size=1000&id=WhjOB64acCd0&format=png&color=000000',
  },
  paper: {
    name: 'paper',
    imgUrl: 'https://img.icons8.com/?size=1000&id=FXMQoDW7KHma&format=png&color=000000',
  },
  scissors: {
    name: 'scissors',
    imgUrl: 'https://img.icons8.com/?size=1000&id=MzcVIhXVJv5P&format=png&color=000000',
  },
};

const App = () => {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState('');

  const randomChoice = () => {
    const itemArray = Object.keys(choice); // 객체의 key들을 배열화
    const randomItem = Math.floor(Math.random() * itemArray.length); // 랜덤 숫자 생성
    const final = itemArray[randomItem];
    return choice[final];
  };

  const judgement = (user, computer) => {
    if (user.name === computer.name) {
      return 'TIE';
    } else if (user.name === 'rock') {
      return computer.name === 'scissors' ? 'WIN' : 'LOSE';
    } else if (user.name === 'scissors') {
      return computer.name === 'paper' ? 'WIN' : 'LOSE';
    } else if (user.name === 'paper') {
      return computer.name === 'rock' ? 'WIN' : 'LOSE';
    }
  };

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);

    const computerChoice = randomChoice();
    setComputerSelect(computerChoice);

    setResult(judgement(choice[userChoice], computerChoice));
  };

  return (
    <div className='container'>
      <div className='players'>
        <Player name='YOU' item={userSelect} result={result} />
        <Player name='COMPUTER' item={computerSelect} result={result} />
      </div>
      <div className='choices'>
        <button className='choices__button' onClick={() => play('scissors')}>
          가위
        </button>
        <button className='choices__button' onClick={() => play('rock')}>
          바위
        </button>
        <button className='choices__button' onClick={() => play('paper')}>
          보
        </button>
      </div>
    </div>
  );
};

export default App;
