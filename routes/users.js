const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  // res.send('respond with a resource');a
  if (req.session.currentUser) {
    console.log('haha');
    // Train.findById({})
    //   .then((trains) => {
    res.render('/users', { title: 'Tren.io' });
    // })
    // .catch((error) => {
    //   next(error);
    // });
  } else {
    res.redirect('auth/login');
  }
});

module.exports = router;
