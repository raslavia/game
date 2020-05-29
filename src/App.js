import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { roundUp } from './redux/actions';
import Board from './components/board';
import Round from './components/round';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstColor: '',
      stateTiles: [],
    };
  }

  componentDidMount() {
    const { tiles, round } = this.props;
    if (round === 1) {
      const newTiles = tiles.map((tile) => ({
        ...tile,
        bc: 'grey',
        id: Math.random().toString(34).slice(2),
      }));
      const soretedTiles = newTiles.sort((x, y) => (x.id > y.id ? 1 : y.id > x.id ? -1 : 0));
      this.setState({ stateTiles: [...soretedTiles] });
    }
  }

  clickTry = (color, id) => {
    const { firstColor, stateTiles } = this.state;
    const { roundUp } = this.props;
    let singleTile = stateTiles.find((tile) => tile.id === id);
    let index = stateTiles.indexOf(singleTile);
    stateTiles[index]['bc'] = color;
    this.setState({
      stateTiles: stateTiles,
    });

    if (firstColor === '') {
      this.setState({ firstColor: color });
    } else if (firstColor === color) {
      const newStateTiles = stateTiles.filter((i) => i.color !== color);
      this.setState({ firstColor: '', stateTiles: newStateTiles });
      roundUp(newStateTiles);
      stateTiles.map((tile) => (tile.bc = 'grey'));
    } else {
      this.setState({ firstColor: '' });
      stateTiles.map((tile) => (tile.bc = 'grey'));
    }
  };

  render() {
    const { round } = this.props;
    const { stateTiles } = this.state;
    return (
      <div className="App">
        <Board stateTiles={stateTiles} clickTry={this.clickTry} />
        <Round round={round} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  round: state.round,
  tiles: state.tiles,
});

const mapDispatchToProps = (dispatch) => {
  return {
    roundUp: (newTiles) => dispatch(roundUp(newTiles)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
