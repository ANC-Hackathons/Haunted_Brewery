/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tiles', {
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
		kind: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		room: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'rooms',
				key: 'id'
			}
		}
	}, {
		tableName: 'tiles'
	});
};
