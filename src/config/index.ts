import dotenv from 'dotenv'

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const env = dotenv.config()

if (!env) {
    throw new Error('Could not find .env file !!')
}

export default {
    port: parseInt(process.env.PORT),
    databaseURL: process.env.POSTGRESQLURL,
    sessionSecret: process.env.SESSION_SECRET,
    modulesPath: process.env.MODULES_PATH
}