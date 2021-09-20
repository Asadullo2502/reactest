const router = require('express').Router()
const {GET, POST, ADD, ADDITEM} = require('./controller')


router.route('/')
.get(GET)
.post(POST)

router.route('/list')
.post(ADD)

router.route('/item')
.post(ADDITEM)

module.exports = router