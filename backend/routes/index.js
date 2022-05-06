const router = require('express')
  .Router(); // создали роутер
const routerUser = require('./users');
const routerStorage = require('./storage');
const auth = require('../middlewares/auth');

router.use(routerStorage);
router.use(auth);
router.use(routerUser);

module.exports = router;
