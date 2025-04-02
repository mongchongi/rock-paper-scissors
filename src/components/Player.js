const Player = (props) => {
  let result = '';
  let color = '';

  if (props.name === 'COMPUTER' && props.result !== 'TIE' && props.result !== '') {
    result = props.result === 'WIN' ? 'LOSE' : 'WIN';
  } else {
    result = props.result;
  }

  if (result === '' || result === 'TIE') {
    color = 'black';
  } else if (result === 'WIN') {
    color = '#43972A';
  } else {
    color = '#EB483F';
  }

  return (
    <div className='player' style={{ borderColor: `${color}` }}>
      <h1>{props.name}</h1>
      <img src={props.item && props.item.imgUrl} alt={props.item && props.item.name} className='player__choice-image' />
      <h2>{result}</h2>
    </div>
  );
};

export default Player;
