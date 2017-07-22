/* jshint esversion:6 */
import React,{Component} from 'react';
import Sound from '../../audio/blah.mp3';
import $ from 'jquery';


class AudioComponent extends Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){
    const player = $('#player');
    this.props.setPlayer(player[0]);

  }
  render() {
    return (
      <div>
        <audio id='player'  src={Sound}></audio>
      </div>
    );
  }

}

export default AudioComponent;

