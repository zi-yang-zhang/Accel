/**
 * Created by robertzzy on 19/11/15.
 */
import path from 'path';

let picture = {
	getPicture:(req, res, next) => {
		var options = {
			root: './assets/image/',
			headers: {
				'Content-Type': 'image/jpg',
				'x-sent': true
			}
		};

		let fileName = req.params.id + '.jpg';
		res.sendFile(fileName, options, (err)=>{
			if(err){
				console.log(err);
				res.status(404);
			}else{
				console.log("sent " + fileName);

			}
		})

	},

	getRecentPictures:(req, res, next) => {
		res.set('Access-Control-Allow-Origin', 'http://127.0.0.1:8080');
		res.set('Access-Control-Allow-Credentials',true);
		res.send(['http://127.0.0.1:3000/image/1.jpg','http://127.0.0.1:3000/image/2.jpg','http://127.0.0.1:3000/image/3.jpg','http://127.0.0.1:3000/image/4.jpg','http://127.0.0.1:3000/image/5.jpg'])
	}
};

export default picture;