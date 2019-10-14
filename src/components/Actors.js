import React from 'react';
import { actors } from '../data';

let actorArray = actors



const Actors = () => {
  
  return (
    <div>
      <h1>Actors Page</h1>
      {actorArray.map(actor => {
        return(
          <div className="actor">
            {actor.name}
            <br></br>
            {actor.movies}
          </div>
        )
      })}
    </div>
  );
};

export default Actors;
