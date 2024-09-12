const express=require('express');
const controllers=require('../controllers/movieController');
const upload = require('../config/multer');

const router= express();

router.get('/',controllers.defaultCon);
router.get('/openadd',controllers.openAddform);
router.get('/singleView/:id',controllers.singleView);
router.post('/addMovies',upload.single('poster'),controllers.addMovieCon);
router.get('/singleMovie/:id',controllers.singleRecordCon);
router.post('/updateMovies/:id',upload.single('poster'),controllers.upadatedMovieCon);
router.get('/deleteMovies/:id',controllers.deleteRecCon);



module.exports= router;