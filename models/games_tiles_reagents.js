/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('games_tiles_reagents', {
		game: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		tile: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		reagent: {
			type: DataTypes.INTEGER,
			allowNull: true
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
