const Player = (props) => {
  return (
    <div className='player'>
      <h2 className='player__name'>{props.name}</h2>
      <img
        className='player__image'
        src={
          props.item ? props.item.image : 'https://img.icons8.com/?size=1000&id=EtlPmfgnN7sW&format=png&color=000000'
        }
        alt={props.item ? props.item.name : 'question mark'}
      />
      <h3 className='player__result'>WIN</h3>
    </div>
  );
};

export default Player;
