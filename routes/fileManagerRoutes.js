const express = require('express');
const router = express.Router();
const fileManager = require('../controllers/fileManager.js');

router.post('/copySync', fileManager.copySync);
router.post('/copyAsync', fileManager.copyAsync);
router.post('/readSyncWriteAsync', fileManager.readSyncWriteAsync);
router.post('/readAsyncWriteSync', fileManager.readAsyncWriteSync);

module.exports = router;
