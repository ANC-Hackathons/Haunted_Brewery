/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('classes_difficulties', {
		class: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		difficulty: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		base_hp: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		base_bac: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	}, {
		tableName: 'classes_difficulties'
	});
};
