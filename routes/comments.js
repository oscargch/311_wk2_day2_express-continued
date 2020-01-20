const express = require('express')
const router = express.Router()

const commentsController = require('../controllers/comments.js')

router.get("/comments", commentsController.list);

router.get('/comments/:commentsIds', commentsController.show);

router.post('/comments', commentsController.create);

module.exports = router;