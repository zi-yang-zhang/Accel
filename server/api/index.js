/**
 * Created by robertzzy on 19/11/15.
 */
import express from 'express';
import renderer from '../renderer/renderer';
/*eslint-disable new-cap*/
let router = express.Router();

/*eslint-enable new-cap*/

let picture = require('../api/endpoints/picture');

router.use('/api/picture/:id', (req, res, next)=>{
	picture.getPicture(req, res, next);
});

router.use('/api/pictures/:count', (req, res, next)=>{
	picture.getRecentPictures(req, res, next);
});

router.use('/', (req, res, next)=>{
	renderer.render(req,res,next);
});


export default router;