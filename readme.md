# Interview assignment 

* Create an API to enable system users to securely upload images provided that they are 
authenticated.




## required and installed 

• The API  written using Nodejs & express js & mongo db 


•  The API  deployable to AWS Lambda 

endpoints:
 
  ANY - https://qttli3q1aa.execute-api.us-east-1.amazonaws.com/production


• The images stored into AWS S3 if the user is authorized
  and store URL image in mongo db as Json 


• register and login user api

•  securing  APIs 

- prevent nosql injection sanitize data 
- xss protection security headers
- rate limiting ,hpps cors
- create git ignore file and add all major securtiy file befour deploy in github

•  Create a GitHub repository with your projec

- https://github.com/ahmedibrahimhassan654/upload-image-usnig-aws-S3


## Documentation 

*Document api by post man 

Extensive documentation with examples [here](https://documenter.getpostman.com/view/7173620/Tz5p6dMb)


*Document API by Js doc 

-open docs folder in the root of app ,open inex.html file 


## Install Dependencies

```
npm install
```

## Run App

```
# Run in dev mode

npm run dev

# Run in prod mode

npm start

#Run app in deployment mode with aws

npm run deploy


#Run app in test  mode with jest

npm run test



- Version: 1.0.0
- License: MIT
- developer: ahmed ibrahim 

