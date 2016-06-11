/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tiles_encounters', {
		tile: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'tiles',
				key: 'id'
			}
		},
		encounter: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'encounters',
				key: 'id'
			}
		},
		difficulty: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'difficulties',
				key: 'id'
			}
		},
		probability: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: '10'
		}
	}, {
		tableName: 'tiles_encounters'
	});
};
