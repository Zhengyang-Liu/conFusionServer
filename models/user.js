var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passpostLocalMongoos = require('passport-local-mongoose');

var User = new Schema({
    firstname: {
      type: String,
        default: ''
    },
    lastname: {
      type: String,
        default: ''
    },
    admin:   {
        type: Boolean,
        default: false
    }
});

User.plugin(passpostLocalMongoos);

module.exports = mongoose.model('User', User);