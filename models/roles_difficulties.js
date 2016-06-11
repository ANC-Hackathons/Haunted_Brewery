/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('roles_difficulties', {
		role: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'roles',
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
		base_hp: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		base_bac: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	}, {
		tableName: 'roles_difficulties'
	});
};
