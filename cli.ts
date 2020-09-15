import { Sequelize } from 'sequelize'
import config from './src/config'

const sequelize: Sequelize = new Sequelize(config.databaseURL, { timezone: '+3' })

console.log('Starting cli');
const choose = process.argv[0];
console.log(choose);

// if (choose == '1') {
//     sequelize.sync({ alter: true }).then(() => {
//         console.log('done')
//     })
// }

