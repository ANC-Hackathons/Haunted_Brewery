/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('bosses', {
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
		mini: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: true
		},
		series: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		api_id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		api_name: {
			type: DataTypes.STRING,
			allowNull: true
		},
		api_active: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: true
		},
		api_info: {
			type: DataTypes.JSON,
			allowNull: true
		}
	}, {
		tableName: 'bosses'
	});
};
