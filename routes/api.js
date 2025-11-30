const express = require('express');
const router = express.Router();
const komikController = require('../controllers/komikController');

router.get('/komik', komikController.getAll);
router.get('/komik/:id', komikController.getById);
router.post('/komik', komikController.create);
router.put('/komik/:id', komikController.update);
router.delete('/komik/:id', komikController.delete);

module.exports = router;