/**
 * Created by robertzzy on 23/11/15.
 */

import PictureActions from '../actions/HomePagePictureActions';
import Immutable, {List, Map} from 'immutable';
import PictureEndpoints from '../endpoints/PictureEndpoints';
import alt from '../alt';

export default alt.createStore(class HomePagePictureStore {
	constructor(){
		this.state = new Map({
			pictures: []
		});
		this.bindActions(PictureActions)
	}

	onUpdatePictures(count) {
		PictureEndpoints
			.fetchMostRecent(count)
			.then((res) => {
				return res.json();
			}).then((json) => {
				this.setState(this.state.set('pictures', json))
			});
		};
})