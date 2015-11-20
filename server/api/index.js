/**
 * Created by robertzzy on 19/11/15.
 */
import express from 'express';

/*eslint-disable new-cap*/
let router = express.Router();
/*eslint-enable new-cap*/

let picture = require('endpoints/picture');


router.use('/api/picture/:id', (req, res, next)=>{
	picture.getPicture(req, res, next);
});

export default router;