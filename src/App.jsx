import { useState } from 'react';
import './App.css';
import Player from './components/Player';

const choice = {
  rock: {
    name: 'rock',
    image: 'https://img.icons8.com/?size=1000&id=VmzduRCoagln&format=png&color=000000',
  },
  paper: {
    name: 'paper',
    image: 'https://img.icons8.com/?size=1000&id=mjnDBNqCzgSV&format=png&color=000000',
  },
  scissors: {
    name: 'scissors',
    image: 'https://img.icons8.com/?size=1000&id=mi6sSFTmh2K8&format=png&color=000000',
  },
};

const App = () => {
  const [userSelect, setUserSelect] = useState(null);

  const playGame = (userChoice) => {
    setUserSelect(choice[userChoice]);
  };

  return (
    <div className='container'>
      <div className='game-board'>
        <div className='game-board__player'>
          <Player name='YOU' item={userSelect} />
          <Player name='COMPUTER' />
        </div>
        <div className='game-board__controls'>
          <button className='game-board__play-button' type='button' onClick={() => playGame('rock')}>
            <img
              className='game-board__play-button-image'
              src='https://img.icons8.com/?size=1000&id=VmzduRCoagln&format=png&color=000000'
              alt='rock'
            />
          </button>
          <button className='game-board__play-button' type='button' onClick={() => playGame('paper')}>
            <img
              className='game-board__play-button-image'
              src='https://img.icons8.com/?size=1000&id=mjnDBNqCzgSV&format=png&color=000000'
              alt='paper'
            />
          </button>
          <button className='game-board__play-button' type='button' onClick={() => playGame('scissors')}>
            <img
              className='game-board__play-button-image'
              src='https://img.icons8.com/?size=1000&id=mi6sSFTmh2K8&format=png&color=000000'
              alt='scissors'
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
