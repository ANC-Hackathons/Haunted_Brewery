/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('bosses_difficulties', {
		difficulty: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'difficulties',
				key: 'id'
			}
		},
		boss: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'bosses',
				key: 'id'
			}
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
		tableName: 'bosses_difficulties'
	});
};
