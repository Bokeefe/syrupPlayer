/* jshint esversion:6 */
import React, { Component } from 'react';
import './App.css';
import PlaylistComponent from './components/playlist_component/playlist_component';
import ControlComponent from './components/controls/';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <ControlComponent />
        </div>
        <div>
         <PlaylistComponent song='named'/>
        </div>
      </div>
    );
  }
}

export default App;
