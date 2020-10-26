const config = require('config.json');
const mongoose = require('mongoose');
const connectionOptions = { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false };
mongoose.connect(process.env.MONGODB_URI || config.connectionString, connectionOptions, (err) => {
    if(err) {
        return console.log(err);
    }
    console.log('DB connected');
});
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../users/user.model')
};