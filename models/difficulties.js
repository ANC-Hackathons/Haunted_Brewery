/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('difficulties', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false
		}
	}, {
		tableName: 'difficulties'
	});
};
