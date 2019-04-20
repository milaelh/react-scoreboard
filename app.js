const Header = (props) => {
    return (
        <header>
            <h1>{ props.title }</h1>
            <span className='stats'>Players: { props.totalPlayers }</span>
        </header>
    );
}


const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">
                { props.name }
            </span>

            <Counter playerScore={3} />
        </div>
    );
}

const Counter = (props) => {
    return (
        <div className="counter">
            <button className="counter-action decriment"> - </button>
            <span className="counter-score">{ props.playerScore } </span>
            <button className="counter-action incriment"> + </button>
        </div>
    );
}

const App = () => {
    return (
        <div className="scoreboard">
            <Header title="Scoreboard" totalPlayers={1} />
            {/* Start Player List */}
            <Player name="Jamila" playerScore={5} />
        </div>
    );
}
ReactDOM.render(
    <App />,
    document.getElementById('root') //container
);