/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tiles_events', {
		tile: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'tiles',
				key: 'id'
			}
		},
		event: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'events',
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
		tableName: 'tiles_events'
	});
};
