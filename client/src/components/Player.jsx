import React from 'react';

class Player extends React.Component {
    render(){
        const {player} = this.props;
        return(
            <div>
                <h3>{player.name}</h3>
                <p>{"Country: " + player.country}</p>
                <p>{"Searches: " + player.searches}</p>
            </div>
        )
    }
}

export default Player;