const { DataTypes} = require('sequelize');
const bcrypt = require ('bcrypt');

const UserModel = (sequelize) =>{
  const User = sequelize.define('users', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: DataTypes.TEXT,
  last_name: DataTypes.TEXT,
  email: DataTypes.TEXT,
  whatsapp: DataTypes.STRING,
  password: DataTypes.STRING,
  is_admin: DataTypes.BOOLEAN,
},{
  hooks: {
    beforeCreate: (user) => {
      const salt = bcrypt.genSaltSync();
      user.password = bcrypt.hashSync (user.password, salt);
    },
  },
});

User.prototype.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

return User;

};

module.exports = UserModel;