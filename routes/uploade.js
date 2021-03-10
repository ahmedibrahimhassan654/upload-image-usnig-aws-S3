const express = require('express');

const {
    upload
  } = require('../controllers/upload');


const router = express.Router();

const { protect, authorize } = require('../middleware/auth');

router.use(protect);

router
  .route('/')
   .post(upload)
//   .put(updateUser)
//   .delete(deleteUser);


module.exports = router;