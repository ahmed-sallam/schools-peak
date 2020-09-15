import { DataTypes, Model } from 'sequelize'

import { sequelize } from '../../extensions'

export class AdModule extends Model { }

AdModule.init({
    name: {
        type: DataTypes.STRING(75),
        allowNull: false
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    install: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
},
    { sequelize, modelName: 'ad-modules' }
);