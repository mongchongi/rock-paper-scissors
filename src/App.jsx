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
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState('');

  const judge = (user, computer) => {
    if (user.name === computer.name) {
      return 'tie';
    } else if (user.name === 'rock') {
      return computer.name === 'scissors' ? 'win' : 'lose';
    } else if (user.name === 'paper') {
      return computer.name === 'rock' ? 'win' : 'lose';
    } else if (user.name === 'scissors') {
      return computer.name === 'paper' ? 'win' : 'lose';
    }
  };

  const randomChoice = () => {
    const choices = Object.keys(choice);

    const randomIndex = Math.floor(Math.random() * choices.length);
    const randomKey = choices[randomIndex];

    return choice[randomKey];
  };

  const playGame = (selectedChoice) => {
    const userChoice = choice[selectedChoice];
    setUserSelect(userChoice);

    const computerChoice = randomChoice();
    setComputerSelect(computerChoice);

    setResult(judge(userChoice, computerChoice));
  };

  return (
    <div className='container'>
      <div className='game-board'>
        <div className='game-board__player'>
          <Player player='you' item={userSelect} result={result} />
          <Player player='computer' item={computerSelect} result={result} />
        </div>
        <div className='game-board__controls'>
          <button className='game-board__play-button' type='button' onClick={() => playGame('rock')}>
            <img className='game-board__play-button-image' src={choice.rock.image} alt={choice.rock.name} />
          </button>
          <button className='game-board__play-button' type='button' onClick={() => playGame('paper')}>
            <img className='game-board__play-button-image' src={choice.paper.image} alt={choice.paper.name} />
          </button>
          <button className='game-board__play-button' type='button' onClick={() => playGame('scissors')}>
            <img className='game-board__play-button-image' src={choice.scissors.image} alt={choice.rock.name} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
