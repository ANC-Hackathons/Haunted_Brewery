/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('roles', {
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
		},
		ability: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		tableName: 'roles'
	});
};
