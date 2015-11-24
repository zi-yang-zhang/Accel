/**
 * Created by robertzzy on 23/11/15.
 */


export default class Endpoints{

	constructor(production){
		this.production = production
	}

	getServer() {
		if(this.production){
			return '/'
		}else{
			return 'http://127.0.0.1:3000'
		}
	}

	getPicture(){
		return this.getServer() + '/api/picture/'
	}

}



