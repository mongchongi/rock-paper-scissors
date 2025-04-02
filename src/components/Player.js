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
      <h1 className='player__name'>{props.name}</h1>
      {result === '' ? (
        <img
          src='https://img.icons8.com/?size=1000&id=EtlPmfgnN7sW&format=png&color=0000000'
          alt='Question mark'
          className='player__default-image'
        />
      ) : (
        <img
          src={props.item && props.item.imgUrl}
          alt={props.item && props.item.name}
          className='player__choice-image'
        />
      )}
      <h2 className='player__result'>{result}</h2>
    </div>
  );
};

export default Player;
