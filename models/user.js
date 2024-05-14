// models/user.js

const { DataTypes, Model } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/database');

class User extends Model {
  // Method to compare hashed password with plain text password
  async comparePassword(plainPassword) {
    return await bcrypt.compare(plainPassword, this.password);
  }
}

User.init(
  {
    // Define model attributes
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    // Define additional options
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: true
  }
);

// Hook to hash password before user is created or updated
User.beforeCreate(async (user, options) => {
  const hashedPassword = await bcrypt.hash(user.password, 10);
  user.password = hashedPassword;
});

module.exports = User;
