import React from 'react';
import { connect } from 'react-redux';
import { playAgain } from '../redux/actions';

const Round = ({ round, playAgain }) => {
  const clickRefresh = () => {
    playAgain();
    window.location.reload();
  };
  return (
    <React.Fragment>
      {round === 9 ? <button onClick={clickRefresh}>PLAY MORE</button> : <h2>ROUND : {round}</h2>}
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    playAgain: () => dispatch(playAgain()),
  };
};

export default connect(null, mapDispatchToProps)(Round);
