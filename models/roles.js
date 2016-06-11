/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('roles', {
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
		flavor: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		ability: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		icon: {
			type: DataTypes.STRING,
			allowNull: true
		},
		imgPath: {
	    type     : DataTypes.STRING,
	    allowNull: true,
	    get : function() {  return '/img/roles/' + this.icon + '.png' }
	  },
		imgPathDis: {
	    type     : DataTypes.STRING,
	    allowNull: true,
	    get : function() {  return '/img/roles/' + this.icon + '_dis.png' }
	  }
	},
  {
		tableName: 'roles'
	});
};
