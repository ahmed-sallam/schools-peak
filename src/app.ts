import express, { Application } from "express"
import http, { Server as HTTPServer } from 'http'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import csrf from 'csurf'
import path from 'path'


import config from './config'
import extensions from './extensions'
import { adminRouter } from './admin/routes'

// Create App
const app: Application = express();
// Create Server
const httpServer: HTTPServer = http.createServer(app);

// load Extensions
extensions(app);

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({ secret: config.sessionSecret }));
app.use(csrf({ cookie: true }));



// Public files
app.use(express.static(path.join(__dirname, '..', 'public')));

// Set view engine
app.set('view engine', 'pug')
app.set('views', 'src/views')

// Routes
// Admin
app.use('/admin', adminRouter)



// Start Server
httpServer.listen(config.port, () => {
    console.log(`Server is running on port : 3000`);

})



