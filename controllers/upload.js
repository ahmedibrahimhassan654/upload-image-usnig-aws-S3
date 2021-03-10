const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const AWS=require('aws-sdk')
const uuid=require('uuid/v1')
const Upload = require('../models/Upload');

const s3=new AWS.S3({
    accessKeyId:process.env.accessKeyId,
    secretAccessKey:process.env.secretAccessKey
})



// @desc      upload image to aws-s3
// @route     GET /api/v1/upload
// @access    auth user
exports.upload = asyncHandler(async (req, res, next) => {
    const key=`${req.user.id}/${uuid()}.jpeg`
    const file = req.files.file;
    
    if (!file) {
        return next(new ErrorResponse(`Please upload a file`, 400));
      }
    
     

    //    contentType=file.mimetype

    


       const params = {
        Bucket: 'upload-image-1', 
        Key: key, 
        Expires: 60, 
        ResponseContentType: 'image/png'
      };

      
      s3.getSignedUrl('getObject', params, async (err, url) =>{
        if (url) {
           //save to data base 
           const file = await Upload.create({url,key});
        res.status(201).json({
                success: true,
                // data: {url,key},
                file
              })}
        else {return next(new ErrorResponse(err, 400))}
      }
      );



  });