/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('bosses_abilities', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		boss: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'bosses',
				key: 'id'
			}
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		ability: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		tableName: 'bosses_abilities'
	});
};
