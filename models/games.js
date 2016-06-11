/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('games', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		started: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: 'now()'
		},
		finished: {
			type: DataTypes.DATE,
			allowNull: true
		},
		won: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false
		},
		difficulty: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'difficulties',
				key: 'id'
			}
		}
	}, {
		tableName: 'games'
	});
};
