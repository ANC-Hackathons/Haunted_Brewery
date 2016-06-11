/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('items', {
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
		max_qty: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: '4'
		},
		optional: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: true
		},
		alignment: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		flavor: {
			type: DataTypes.TEXT,
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
		tableName: 'items'
	});
};
