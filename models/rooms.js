/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('rooms', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		room_name: {
			type: DataTypes.STRING,
			allowNull: false
		}
	}, {
		tableName: 'rooms'
	});
};
