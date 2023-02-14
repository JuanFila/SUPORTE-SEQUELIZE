const {DataTypes} = require("sequelize")
const sequelize = require("../config/sequelize")

const Satalete = require.define("./Satelite", {
    name: DataTypes.STRING,
    serial_number: DataTypes.INTEGER,
    planetId: DataTypes.INTEGER,
});

module.exports = Satalete