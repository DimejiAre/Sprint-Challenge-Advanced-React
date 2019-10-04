import React from 'react';

class Player extends React.Component {
    render(){
        const {player} = this.props;
        return(
            <div className="player">
                <h2>{"Name: " + player.name}</h2>
                <p>{"Country: " + player.country}</p>
                <p>{"Searches: " + player.searches}</p>
            </div>
        )
    }
}

export default Player;