import React, { Component } from 'react';
import '../css/Card.css'
import r from '../img/r.png'
import p from '../img/p.png'
import s from '../img/s.png'

class Card extends Component {

    render() {
        // console.log(this.props);
        return (
            <div id='cards'>
                <div className='card' id="player-card">
                    <p id='player'>Player</p>
                    <img src={this.props.gameData.playerChoice==='r'? r:this.props.gameData.playerChoice==='p'? p:this.props.gameData.playerChoice==='s'? s:p} alt=''/>
                    <p id='player-win' className={this.props.gameData.player1==='WIN'?'text-success':this.props.gameData.player1==='LOSE'?'text-danger':'text-dark'}>{!this.props.gameData.player1?'DRAFT':this.props.gameData.player1}</p>
                    <p id='player-score'>{this.props.gameData.playerScore}</p>
                </div>
                <div className='card' id="bot-card">
                    <p id='bot'>Bot</p>
                    <img src={this.props.gameData.botChoice==='r'? r:this.props.gameData.botChoice==='p'? p:this.props.gameData.botChoice==='s'? s:p}  alt=''/>
                    <p id='bot-win' className={this.props.gameData.player2==='WIN'?'text-success':this.props.gameData.player2==='LOSE'?'text-danger':'text-dark'}>{!this.props.gameData.player2?'DRAFT':this.props.gameData.player2}</p>
                    <p id='bot-score'>{this.props.gameData.botScore}</p>
                </div>
            </div>
        );
    }
}

export default Card;