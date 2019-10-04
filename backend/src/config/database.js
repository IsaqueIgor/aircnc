const mongoose = require('mongoose');

module.exports = () => {
  mongoose.connect('mongodb+srv://usuario:usuario@cluster0-ehilu.mongodb.net/admin?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => console.log('MongoDB Connected!')) //If success!
    .catch((error) => console.log('MongoDB Error: ', error));
};