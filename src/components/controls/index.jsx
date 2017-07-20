/* jshint esversion:6 */
import React,{Component} from 'react';
import './style.css';
import AudioComponent from '../audio_component/';

class ControlComponent extends Component {
  state = {
    player:null
  }

  setPlayer(player){
    this.setState({player});
  }
  render() {

    return (
      <div>
        <i className="fa fa-backward fa-5x" aria-hidden="true"></i>
        <i className="fa fa-play-circle fa-5x" onClick={()=>this.state.player.play()}></i>
        <i className="fa fa-forward fa-5x" aria-hidden="true"></i>
        <AudioComponent setPlayer={this.setPlayer.bind(this)}/>
      </div>
    );
  }
  pausePlay(){

    console.log(this);
  }
}

export default ControlComponent;

{
  state: { player: null }
}