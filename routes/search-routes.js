const { Router } = require('express');
const searchController = require('../controllers/search-controller');

const router = Router();

router.get('/search',searchController.searchByTitle );

module.exports = router;