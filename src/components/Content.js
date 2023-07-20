import React, { Component } from 'react';
import StartBtn from './StartBtn';
import '../css/Content.css'
import Area from './Area';
class Content extends Component {
    constructor(){
        super();
        this.state = {
            showArea:false
        };
        this.isShown = this.isShown.bind(this)
    }
    isShown(bool){
        this.setState({showArea:bool})
    }
    render() {
        return (
            <div className='main'>
                <StartBtn isShown = {this.isShown}/>
                <Area showArea = {this.state.showArea}/>
            </div>
        );
    }
}

export default Content;