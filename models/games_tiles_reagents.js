/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('games_tiles_reagents', {
		game: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'games',
				key: 'id'
			}
		},
		tile: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'tiles',
				key: 'id'
			}
		},
		reagent: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'reagents',
				key: 'id'
			}
		},
		found: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false
		}
	}, {
		tableName: 'games_tiles_reagents'
	});
};
