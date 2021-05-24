const router = require('express').Router();
const { shapeController } = require('../controllers');
const { validate, isAuthorizedAdmin } = require('../middlewares');
const {
  validationSchemas: { general, shape },
} = require('../validations');

router.get('/', validate(general.listName), shapeController.list);
router.get('/:id', validate(general.get), shapeController.get);

router.use(isAuthorizedAdmin);
router.post('/', validate(shape.create), shapeController.create);
router.put('/:id', validate(shape.update), shapeController.update);
router.delete('/:id', validate(general.destroy), shapeController.destroy);

module.exports.shapes = router;
