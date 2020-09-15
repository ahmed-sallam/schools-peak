import { Sequelize } from 'sequelize'
import { Application } from 'express'
import config from './config'

export const sequelize: Sequelize = new Sequelize(config.databaseURL, { timezone: '+3' })


export default async (app: Application) => {

    // Load sequelize
    try {
        await sequelize.authenticate();
        console.log("The DB is connected");

    } catch (error) {
        console.log('there is an error in db connection');

    }
}