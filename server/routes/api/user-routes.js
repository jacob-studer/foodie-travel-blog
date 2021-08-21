const router = require('express').Router();
const {
    getSingleUser,
    login,
} = require('../../controllers/index')

const { authMiddleware } = require('../../utils/auth');

router.route('/login').post(login);

router.route('/me').get(authMiddleware, getSingleUser);

module.exports = router;
