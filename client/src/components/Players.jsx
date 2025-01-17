import React from 'react';
import axios from 'axios';
import Player from './Player';

class Players extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            players: []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/api/players')
        .then(response => {
            this.setState({
                players: response.data
            })
        })
    }

    render(){
        return(
            <div className='players'>
                {this.state.players? this.state.players.map(player => (
                    <Player key={player.id} player={player}/>
                )): null }
            </div>
        )
    }
}

export default Players;