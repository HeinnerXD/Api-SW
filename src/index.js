const app = require('./app')
const Keys = require('./keys')

app.listen(Keys.PORT, (err,res) => {
    if (err) {
        throw err
    } else {
        console.log('Server running on port ',Keys.PORT)
        require('./database/db.connection')
    }
});