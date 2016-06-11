/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('games_bosses', {
		game: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'games',
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
		round: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		cur_hp: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		cur_bac: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	}, {
		tableName: 'games_bosses'
	});
};
