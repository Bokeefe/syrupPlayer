/* jshint esversion:6 */
import React,{Component} from 'react';
import './playlist_component.css';
class PlaylistComponent extends Component {

  render(){
      return (
        <div> 
          <ul>
            <b>Playlist</b>
            <li onClick={() => this.songClick(this.props.song)}>
             'bagel'
            </li>
          </ul>
        </div>
      )
  }

  songClick = (songName) => {
    console.log(songName)
  }
};
export default PlaylistComponent;



