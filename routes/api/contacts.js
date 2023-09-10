const express = require('express')

const ctrl = require('../../controllers/contacts');

const { validateBody, isValidId } = require('../../middlewares');

const schemas = require('../../schemas/contacts');

const router = express.Router()

router.get('/', ctrl.getAll);

router.get('/:contactId', isValidId, ctrl.getById);

router.post('/', validateBody(schemas.schemaPost), ctrl.addContact);

router.delete('/:contactId', isValidId, ctrl.deleteContact);

router.put('/:contactId', isValidId, validateBody(schemas.schemaPut), ctrl.updateContact);

router.patch('/:contactId/favorite', isValidId, validateBody(schemas.schemaUpdateFavorite), ctrl.updateStatusContact);

module.exports = router;
