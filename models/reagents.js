/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('reagents', {
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
		kind: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		boss: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'bosses',
				key: 'id'
			}
		},
		api_id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		api_name: {
			type: DataTypes.STRING,
			allowNull: true
		},
		api_active: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: true
		},
		api_info: {
			type: DataTypes.JSON,
			allowNull: true
		}
	}, {
		tableName: 'reagents'
	});
};
