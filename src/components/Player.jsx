const Player = (props) => {
  let result;

  if (props.player === 'computer' && props.result !== 'tie' && props.result !== '') {
    result = props.result === 'win' ? 'lose' : 'win';
  } else {
    result = props.result;
  }

  return (
    <div className={`player player--${result}`}>
      <h2 className={`player__name player__name--${result}`}>{props.player.toUpperCase()}</h2>
      <img
        className='player__image'
        src={
          props.item ? props.item.image : 'https://img.icons8.com/?size=1000&id=EtlPmfgnN7sW&format=png&color=000000'
        }
        alt={props.item ? props.item.name : 'question mark'}
      />
      <h3 className={`player__result player__result--${result}`}>{result.toUpperCase()}</h3>
    </div>
  );
};

export default Player;
