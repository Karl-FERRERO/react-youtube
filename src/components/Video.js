import React, {Component} from 'react';
import firebase from './fire';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

class Video extends Component {
	constructor(props) {
	    super(props)

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
                <p>{this.props.description}</p>

				<button class="waves-effect waves-light btn" onClick={this.removeVideo.bind(this)}><i class="material-icons right">delete</i>Supprimer</button>

	    </div>

    </div>
    )
  }
}


export default Video;
