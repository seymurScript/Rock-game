import React, { Component } from 'react';
import Card from './Card';
import Consol from './Consol'
import '../css/Area.css'
class Area extends Component {
   
    constructor(){
        super();
        this.state ={
            playerChoice:'',
            botChoice:'',
            player1:'DRAFT',
            playerScore:0,
            botScore:0,
            player2:'DRAFT',
        }
        this.callBack = this.callBack.bind(this)
    }
    callBack(el,randomselect,player1,player2){
        // console.log(el);
        if(player1==='WIN'){
            this.setState({playerScore: this.state.playerScore+1})
        }
        else if(player1 === "LOSE"){
            this.setState({botScore :  this.state.botScore + 1 })
        }

        this.setState({playerChoice:el,botChoice:randomselect,player1,player2})
        
    }
    render() {
        const {showArea} = this.props
        // console.log(showArea);
        const playerData ={
            playerChoice:this.state.playerChoice,
            botChoice:this.state.botChoice,
            player1:this.state.player1,
            player2:this.state.player2,
            playerScore:this.state.playerScore,
            botScore:this.state.botScore
        }
        return (
            <div id='gameArea' className={showArea?'d-flex':'d-none'}>
                <Card gameData ={playerData}/>
                <Consol callBack ={this.callBack}/>
            </div>
        );
    }
}

export default Area;