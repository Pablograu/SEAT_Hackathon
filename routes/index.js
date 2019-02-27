const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  // console.log(req.session.currentUser);
  res.render('index', { title: 'Tren.io' });
});

module.exports = router;
