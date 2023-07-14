const {Router}=require('express')
const router=Router()
const controllers=require('../controllers')
const middlewares=require('../middlewares')

router.get('/films', controllers.getFilms);
router.get("/films/:id", controllers.getFilms)
router.post('/films',middlewares.filmValidation, controllers.createFilm)

module.exports=router;
