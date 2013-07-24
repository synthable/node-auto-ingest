"use strict";

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Apps', {
    provider: {
      type: DataTypes.STRING
    },
    providerCountry: {
      type: DataTypes.STRING
    },
    sku: {
      type: DataTypes.STRING
    },
    title: {
      type: DataTypes.STRING
    },
    version: {
      type: DataTypes.STRING
    },
    productTypeIdentifier: {
      type: DataTypes.TEXT
    },
    units: {
      type: DataTypes.INTEGER
    },
    beginDate: {
      type: DataTypes.STRING
    },
    endDate: {
      type: DataTypes.STRING
    },
    custCurr: {
      type: DataTypes.STRING
    },
    country: {
      type: DataTypes.STRING
    },
    proceedsCurrency: {
      type: DataTypes.STRING
    },
    appid: {
      type: DataTypes.STRING
    },
    custPrice: {
      type: DataTypes.STRING
    },
    promoCode: {
      type: DataTypes.STRING
    },
    parentIdentifier: {
      type: DataTypes.STRING
    },
    subscription: {
      type: DataTypes.STRING
    },
    period: {
      type: DataTypes.STRING
    },
    /** Set FK relationship (hasMany) with `Trainer`
      trainer_id: {
        type: DataTypes.INTEGER,
        references: "Trainer",
        referencesKey: 'id'
      }**/
  });
};
