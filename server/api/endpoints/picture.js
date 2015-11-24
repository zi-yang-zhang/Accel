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
		console.log(req.params.count);
		res.send(['/image/1.jpg','/image/2.jpg','/image/3.jpg','/image/4.jpg','/image/5.jpg'])
	}
};

export default picture;