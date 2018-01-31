import React, {Component} from 'react';
import Video from './Video';
import _ from 'lodash';
import firebase from './fire';
import '../css/App.css';

class VideoList extends Component {
  
  constructor(props){
    super(props);
    this.state  = {
      videos: []
    };
    
    let app = this.props.db.database().ref('videos');
    app.on('value', snapshot => {
      this.getData(snapshot.val());
    });

  }

  getData(values){
    let videosVal = values;
    let videos = _(videosVal)
                      .keys()
                      .map(videoKey => {
                          let cloned = _.clone(videosVal[videoKey]);
                          cloned.key = videoKey;
                          return cloned;
                      })
                      .value();
      this.setState({
        videos: videos
      });
  }

render() {
    let videosNodes = this.state.videos.map((video) => {
      return (   
            <Video 
              db={this.props.db}
              name = {video.name}
              url = {video.url}
              description = {video.description} 
              ref={ el => (this.currentVideo = el) }
            />
      )
    });
    return (
      <div class="row">
        {videosNodes}
      </div>
    );
  }
}

export default VideoList