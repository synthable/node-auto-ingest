"use strict";

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('UserApp', {
    userId: {
      type: DataTypes.STRING
    },
    appId: {
      type: DataTypes.TEXT
    },
    /** Set FK relationship (hasMany) with `Trainer`
      trainer_id: {
        type: DataTypes.INTEGER,
        references: "Trainer",
        referencesKey: 'id'
      }**/
  });
};