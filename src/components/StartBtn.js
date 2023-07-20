import React, { Component } from 'react';
import '../css/StartBtn.css'
class StartBtn extends Component {
    constructor(){
        super();
        this.state ={
            shown:false
        }
        this.startGame = this.startGame.bind(this)
    }
    startGame(){
        this.setState({shown:true})
        
        setTimeout(()=>{
            this.props.isShown(this.state.shown)
        },50)
    }
    
    render() {
        return (
            <div id='startArea' className={!this.state.shown?'d-flex':'d-none'}>
                <div className="font-effect-fire-animation">
                    Rock <br/>
                    Paper <br/>
                    Scissors
                </div>
                <button id='startBtn' onClick={this.startGame}>Start Game</button>
            </div>
        );
    }
}

export default StartBtn;