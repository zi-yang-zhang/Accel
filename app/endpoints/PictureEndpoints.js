/**
 * Created by robertzzy on 23/11/15.
 */
import fetch from'node-fetch'


let PictureEndpoints = {
	fetchById:(id) =>{

	},
	fetchMostRecent:(count)=>{
		return fetch('http://127.0.0.1:3000/api/pictures/'+count, {method: 'GET'})
	}
};

export default PictureEndpoints;