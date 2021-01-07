module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('UserModel', {
    
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },

    password: DataTypes.STRING,

    active: DataTypes.BOOLEAN

  }, {
    tableName: 'users'
  })

  User.associate = function (models) {

  }

  return User
}