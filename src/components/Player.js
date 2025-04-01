const Player = (props) => {
  let result = '';

  if (props.name === 'COMPUTER' && props.result !== 'TIE' && props.result !== '') {
    result = props.result === 'WIN' ? 'LOSE' : 'WIN';
  } else {
    result = props.result;
  }

  return (
    <div
      className='player'
      style={{
        borderColor: `${result === '' || result === 'TIE' ? 'black' : result === 'WIN' ? '#43972A' : '#EB483F'}`,
      }}
    >
      <h1>{props.name}</h1>
      <img src={props.item && props.item.imgUrl} alt={props.item && props.item.name} className='player__choice-image' />
      <h2>{result}</h2>
    </div>
  );
};

export default Player;
