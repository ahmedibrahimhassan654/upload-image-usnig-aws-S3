
/**
 * @file server is the root  app
 * @author Ahmed ibrahim
 * @see <a href="https://github.com/ahmedibrahimhassan654/upload-image-usnig-aws-S3">project repo</a>
 */


const path = require('path');

/**
 * express Frame work npm imported
 * @type {NPM}
 */
const express = require('express');
const dotenv = require('dotenv');

/**
 * import morgan npm for development purpose 
 * @type {NPM}
 */
const morgan = require('morgan');
const colors = require('colors');

const cookieParser = require('cookie-parser');
const mongoSanitize = require('express-mongo-sanitize');
/**
 * helmet for Secure ExpressJS Application 
 * @type {NPM}
 */
const helmet = require('helmet');
/**
 * xss for Secure ExpressJS Application (avoid XSS Attacks)
 * @type {NPM}
 */
const xss = require('xss-clean');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');
const cors = require('cors');

/**
 * TO mange error response 
 * @type {Error-midleware}
 */
const errorHandler = require('./middleware/error');

/**
 * connect with mongo db 
 * @type {string}
 */
const connectDB = require('./config/db');




// Load env vars
dotenv.config({ path: './config/config.env' });

// Connect to database
connectDB();

//Route files
/**
 * import auth route
 * @type {Route}
 */
const auth = require('./routes/auth');
/**
 * import users route
 * @type {Route}
 */
const users = require('./routes/users');

const upload=require('./routes/uploade')

const app = express();

//Body parser
app.use(express.json());

// Cookie parser
app.use(cookieParser());

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}



// Sanitize data
app.use(mongoSanitize());

// Set security headers
app.use(helmet());

// Prevent XSS attacks
app.use(xss());

// Rate limiting
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 mins
  max: 100
});
app.use(limiter);

// Prevent http param pollution
app.use(hpp());

// Enable CORS
app.use(cors());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Mount routers


app.use('/api/v1/auth', auth);
app.use('/api/v1/users', users);

app.use('/api/v1/upload', upload);

 app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

//Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server & exit process
  server.close(() => process.exit(1));
});
