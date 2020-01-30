var orm = require("../config/orm.js");

var burger = {
    selectAll: function(callback) {
        orm.selectAll("burgers", function(res) {
            callback(res);
        });
    },

    insertOne: function (burgerName, callback) {
        orm.insertOne("burgers", "burger_name", burgerName, function (res) {
            console.log("Name: ", burgerName, "buns: ", res);
            callback(res);
        });
    },

    updateOne: function(colVal, id, callback) {
        orm.updateOne(colVal, id, function(res) {
            callback(res);
        });
    },

    deleteOne: function(id, callback) {
        orm.deleteOne(id, function(res) {
            callback(res);
        });
    }
};

module.exports = burger;