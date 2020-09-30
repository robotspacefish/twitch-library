import React, { useState, useEffect } from 'react';
import { CLIENT_ID, AUTH } from '../api';

function Games() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch('https://api.twitch.tv/helix/games/top', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'Client-ID': CLIENT_ID,
        'Authorization': `Bearer ${AUTH}`
      }
    })
      .then(res => res.json())
      .then(data => {
        const formattedData = data.data.map(game => {
          // add dimensions to box art
          let gameCopy = { ...game };
          gameCopy.box_art_url = game.box_art_url.replace('{width}', 300).replace('{height}', 400);

          return gameCopy;
        });

        setGames(formattedData);
      })
      .catch(e => console.log)

  }, []);

  return (
    <div>
      <h1>Most Popular Games</h1>

    </div>
  );
};

export default Games;