"use strict";

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Users', {
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.TEXT
    },
    type: {
      type: DataTypes.INTEGER
    },
    /** Set FK relationship (hasMany) with `Trainer`
      trainer_id: {
        type: DataTypes.INTEGER,
        references: "Trainer",
        referencesKey: 'id'
      }**/
  });
};
