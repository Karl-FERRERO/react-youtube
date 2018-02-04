import React, {Component} from 'react';
import firebase from './fire';
import Rater from 'react-rater'
import axios from 'axios';
import 'react-rater/lib/react-rater.css'

class Video extends Component {
	constructor(props) {
	    super(props)

	    var viewCount;

		 this.state = {
		      viewCount: 0,
		      likeCount: 0,
		      dislikeCount: 0
		}  


		var xhr = new XMLHttpRequest();
	    xhr.open("GET", "https://www.googleapis.com/youtube/v3/videos?part=statistics&id="+this.props.url.split('embed/')[1]+"&key=%20AIzaSyD_YtgV2h5PmZNBiZyiFeemJesSqij28Vg", false);  // synchronous request
	    xhr.send(null);
		var jsonparsed = JSON.parse(xhr.responseText);

			 this.state = {
			      viewCount: jsonparsed.items[0].statistics.viewCount,
			      likeCount: jsonparsed.items[0].statistics.likeCount,
			      dislikeCount: jsonparsed.items[0].statistics.dislikeCount
			}  
	}
   
	removeVideo() {
	   	console.log(this.props.name);
	   	this.props.db.database().ref('videos').child(this.props.name).remove();	
	}

  render() {

    return (
	
    <div class="col s6 card-panel" >

		<div class="row">

	    	<iframe width="560" height="315" 
	     		src={this.props.url}
	     		frameBorder="0"
	     	/>

	     	
				<h5>{this.props.name}</h5>
				<Rater total={5} rating={0} />
				<p> Nb vues : {this.state.viewCount}</p>
				<p> Nb poce bleu : {this.state.likeCount}</p>
				<p> Nb poce rouge : {this.state.dislikeCount}</p>
                <p> Description :{this.props.description}</p>

				<button class="waves-effect waves-light btn" onClick={this.removeVideo.bind(this)}><i class="material-icons right">delete</i>Supprimer</button>

	    </div>

    </div>
    )
  }
}


export default Video;
