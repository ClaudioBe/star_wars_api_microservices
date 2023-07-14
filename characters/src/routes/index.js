const {Router} = require("express");
const controllers=require('../controllers')
const router=Router();
const middlewares=require('../middlewares')

router.get("/characters",controllers.getCharacters)
router.get("/characters/:id",controllers.getCharacters)
router.post('/characters',middlewares.characterValidation,controllers.createCharacter)

module.exports=router;