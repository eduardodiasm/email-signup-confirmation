module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('UserModel', {
    
  }, {
    tableName: 'users'
  })

  User.associate = function (models) {

  }

  return User
}