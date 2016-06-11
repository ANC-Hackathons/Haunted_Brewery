/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('games_players_games_items', {
		game_player: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'games_players',
				key: 'id'
			}
		},
		game_item: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'games_items',
				key: 'id'
			}
		},
		qty: {
			type: DataTypes.INTEGER,
			allowNull: true
		}
	}, {
		tableName: 'games_players_games_items'
	});
};
