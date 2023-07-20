import React, { Component } from 'react';
import '../css/Consol.css'
import rock from '../img/rock-icon.png'
import paper from '../img/paper-icon.png'
import scissors from '../img/scissors-icon.png'
class Consol extends Component {
    
    
    constructor(){
        super();
        this.showUi = this.showUi.bind(this)
    }
    showUi(e){
        let chosiseArr = ['r','s','p']
        let index = Math.floor(Math.random()*3);
        let randomSelector = chosiseArr[index]
        let player1;
        let player2;
        const chose = e.target.alt
        if ((chose==="r" && randomSelector==="s")||
        (chose==="p" && randomSelector==="r")||
        (chose==="s" && randomSelector==="p")){
            player1 = "WIN";
            player2 = "LOSE";
            this.props.callBack(chose,randomSelector,player1,player2,)

        }
        else if (chose===randomSelector){
            player1 = "DRAFT";
            player2 = "DRAFT";
            this.props.callBack(chose,randomSelector,player1,player2,)
        }
        else {
            player1 = "LOSE"
            player2 = "WIN"
            this.props.callBack(chose,randomSelector,player1,player2,)
        }
    }
    render(){
        return (
            <div id='consol'>
                <img onClick={this.showUi} src={rock} alt='r'/>
                <img onClick={this.showUi} src={paper} alt='p'/>
                <img onClick={this.showUi} src={scissors} alt='s'/>
            </div>
        );
    }
}

export default Consol;