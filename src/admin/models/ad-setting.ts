import { DataTypes, Model } from 'sequelize'

import { sequelize } from '../../extensions'

export class AdSetting extends Model { }

AdSetting.init({
    key: {
        type: DataTypes.STRING(75),
        allowNull: false
    },
    value: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
    { sequelize, modelName: 'ad-settings' }
);