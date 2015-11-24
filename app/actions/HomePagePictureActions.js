/**
 * Created by robertzzy on 23/11/15.
 */
import alt from '../alt';

class HomePagePictureActions {
	constructor(){
		this.generateActions(
				'updatePictures'
		)
	}
}

export default alt.createActions(HomePagePictureActions);