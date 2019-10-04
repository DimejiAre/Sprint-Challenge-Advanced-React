import React from 'react';

class Player extends React.Component {
    render(){
        const {player} = this.props;
        return(
            <div className="player">
                <h2>{<strong>Name</strong>}: {player.name}</h2>
                <p>{<strong>Country</strong>}: {player.country}</p>
                <p>{<strong>Searches</strong>}: {player.searches}</p>
            </div>
        )
    }
}

export default Player;