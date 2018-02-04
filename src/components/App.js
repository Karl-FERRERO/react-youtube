import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import VideoList from './VideoList';
import firebase from './fire';

class App extends Component {

  
  addVideo(e){
    e.preventDefault(); // <- prevent form submit from reloading the page
    /* Send the message to Firebase */
    var url = this.inputUrl.value;
    var arrayOfStrings = url.split('=');

    firebase.database().ref('videos/'+this.inputName.value+'').set( {
      name: this.inputName.value+'', 
      url: 'https://www.youtube.com/embed/' + arrayOfStrings[1],
      description: this.inputDescription.value
    });
    this.inputName.value = ''; // <- clear the input
    this.inputUrl.value = ''; // <- clear the input
    this.inputDescription.value = ''; // <- clear the input
  }

  render() {
    return (
      <div className="App">
          <div>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
            </header>
          </div>

          <ul class="collapsible" data-collapsible="expandable">
            <li>
              <div class="collapsible-header"><i class="mdi-navigation-chevron-right"></i><a>Ajouter une vidéo</a></div>
              <div class="collapsible-body">
                <form class="col s12" onSubmit={this.addVideo.bind(this)}>
                  
                  <div class="row">
                    <div class="input-field col s4">
                      <input type="text" label ="nom" ref={ el => (this.inputName = el) } required/>
                      <label>Nom de la vidéo</label>
                    </div>

                    <div class="input-field col s4">
                      <input type="text" label ="youtube" ref={ el => (this.inputUrl = el) } required/>
                      <label>URL Youtube</label>
                    </div>

                     <div class="input-field col s4">
                      <input type="text" label ="description" ref={ el => (this.inputDescription = el) }/>
                      <label>Description</label>
                    </div>
                    <button class="waves-effect waves-light btn"><i class="material-icons right">save</i>Ajouter</button>

                  </div>
                  
                </form>



              </div>
            </li>               
          </ul>

          <VideoList db={firebase}></VideoList>
      </div>
    );
  }
}

export default App;
