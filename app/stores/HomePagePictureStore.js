/**
 * Created by robertzzy on 23/11/15.
 */

import PictureActions from '../actions/HomePagePictureActions';
import Immutable, {List} from 'immutable';
import PictureEndpoints from '../endpoints/PictureEndpoints';
import alt from '../alt';

export default alt.createStore(class HomePagePictureStore {
	constructor(){
		this.state = {
			pictures: new List([])
		};
		this.bindActions(PictureActions)
	}

	onUpdatePictures(count){
		PictureEndpoints
				.fetchMostRecent(count)
				.then((pictures) => {
					this.state.pictures.clear();
					pictures.forEach((picture)=>{
						this.setState.pictures.push(
								{
									original:"http://127.0.0.1:3000"+picture
								}
						)

					});
		})
	}

})