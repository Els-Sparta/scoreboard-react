const Header = (props) => {
 return (
   <header>
      <h1>{ props.title }</h1>
      <span className="stats">Players: { props.totalPlayers }</span>
   </header>
 );
}

const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={ () => props.removePlayer(props.id)}>✖</button>
        { props.name }
      </span>
      <Counter />
    </div>
  );
}

// const Counter = (props) => {
//   return (
//     <div className="counter">
//       <button className="counter-action decrement"> - </button>
//       <span className="counter-score">{props.score}</span>
//       <button className="counter-action decrement"> + </button>
//     </div>
//   );
// }

class Counter extends React.Component {
  state = {
    score: 0
  };

  incrementScore = () => {
    this.setState( prevState => ({
        score: prevState.score + 1
    }));
  }

  decrementScore = () => {
    this.setState( prevState => ({
        score: prevState.score - 1
    }));
  }

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
        <span className="counter-score">{this.state.score}</span>
        <button className="counter-action decrement" onClick={this.incrementScore}> + </button>
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    players: [
      {
        name: "Ealilan",
        id: 1
      },
      {
        name: "Els",
        id: 2
      },
      {
        name: "Meh",
        id: 3
      },
      {
        name: "James",
        id: 4
      }
    ]
  };

  handleRemovePlayer = (id) => {
    this.setState( prevState => ({
      players: prevState.players.filter( p => p.id !== id )
    }));
  }

  render() {
    return (
      <div className="scoreboard">
        <Header
          title="My Scoreboard"
          totalPlayers={this.state.players.length}
        />
        {/*Players List*/}
        {this.state.players.map( player =>
          <Player
            name={player.name}
            id={player.id}
            key={player.id.toString()}
            removePlayer={this.handleRemovePlayer}
            />
        )}
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
