/* jshint esversion:6 */
import React,{Component} from 'react';
import './style.css';
import AudioComponent from '../audio_component/';
import $ from 'jquery';
class ControlComponent extends Component {
  state = {
    player:null,
    isPlaying:false,
  }

  setPlayer(player){
    this.setState({player});
  }

  playPause(){
    if(this.state.player.paused){
    this.state.player.play();
    console.log(this.state.player.paused);
    $('#playPause').toggleClass('fa-pause-circle');
    } else {
          this.state.player.pause();
    console.log(this.state.player.paused);
    $('#playPause').toggleClass('fa-pause-circle');
    }

  }
  render(){

    return (
      <div>
        <i className="fa fa-backward fa-5x" aria-hidden="true"></i>
        <i className="fa fa-play-circle fa-5x" aria-hidden="true" id='playPause' onClick={()=>this.playPause()}></i>
        <i className="fa fa-forward fa-5x" aria-hidden="true"></i>
        <AudioComponent setPlayer={this.setPlayer.bind(this)}/>
      </div>
    );
  }
}

export default ControlComponent;

{
  state: { player: null }
}