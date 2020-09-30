import React from 'react';
import { Link } from 'react-router-dom';

function Game(props) {
  const { game } = props;
  return (
    <div className='Game col-4'>
      <div className="card">
        <img className="card-img-top" src={game.box_art_url} />
        <div className="card-body">
          <h5 className="card-title">{game.name}</h5>
          <button className="btn btn-success">
            <Link className="link"
              to={{
                pathname: `game/${game.name}`,
                state: {
                  gameId: game.id
                }
              }}
            >
              {game.name} Streams
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Game;