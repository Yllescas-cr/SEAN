const express = require('express');
const router = express.Router();
const _citas = require('../services/citas');
const dbContext = require('../database/dbContext');
//router.get('/index/:id', auth(), id_padron.get)
const citas = _citas(dbContext);

router.get('/citas', citas.getAll);



module.exports = router;