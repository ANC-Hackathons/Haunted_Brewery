/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('games_items', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		item: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'items',
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
		qty: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: '4'
		}
	}, {
		tableName: 'games_items'
	});
};
