/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('games_players', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		turn: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		role: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'roles',
				key: 'id'
			}
		},
		game: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'games',
				key: 'id'
			}
		},
		active: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false
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
		tableName: 'games_players'
	});
};
