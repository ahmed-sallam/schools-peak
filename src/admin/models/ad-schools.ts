import { DataTypes, Model } from 'sequelize'

import { sequelize } from '../../extensions'

export class AdSchool extends Model { }

AdSchool.init({
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    adminName: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    username: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    address: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    country: {
        type: DataTypes.STRING(25),
        allowNull: true
    },
    timezone: {
        type: DataTypes.STRING(100),
        defaultValue: '+3'
    }
},
    { sequelize, modelName: 'ad-schools' }
);