const mongoose = require('mongoose')
const Keys = require('../keys')
mongoose.connect(Keys.URI, { useNewUrlParser: true }).then(db => console.log('Db connected')).catch(err => console.log(err))
