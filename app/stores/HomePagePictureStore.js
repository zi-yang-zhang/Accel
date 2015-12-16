/**
 * Created by robertzzy on 23/11/15.
 */

import PictureActions from '../actions/HomePagePictureActions';
import Immutable, {List, Map} from 'immutable';
import PictureEndpoints from '../endpoints/PictureEndpoints';
import alt from '../alt';

class HomePagePictureStore {
	constructor(){
		this.state = {
			pictures: []
		};
		this.bindActions(PictureActions)
	}

	onUpdatePictures(count) {
		PictureEndpoints
			.fetchMostRecent(count)
			.then((res) => {
				return res.json();
			}).then((json) => {
				var pictures = [];
				json.forEach((pictureUrl)=>{
				  pictures.push({original:pictureUrl})
				});
				this.setState({pictures:pictures})
			});
		};
}

export default alt.createStore(HomePagePictureStore)