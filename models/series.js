/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('series', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		flavor: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		tableName: 'series'
	});
};
