const {Router}=require('express')
const router = Router();
const controllers = require('../controllers')
const middlewares=require('../middlewares')

router.get('/planets',controllers.getPlanets);
router.get("planets/:id",controllers.getPlanets)
router.post('/planets',middlewares.planetValidation, controllers.createPlanet)

module.exports=router;