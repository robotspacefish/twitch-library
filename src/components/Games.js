import React, { useState, useEffect } from 'react';
import { CLIENT_ID, AUTH } from '../apiKey';

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
        setGames(data.data)
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