const server = require('./app.js')
const PORT = 3001;
const {conn} = require('./db.js')


conn.sync({force: true})
.then(()=>{
    server.listen(PORT, () => console.log(`Lintening on the port: ${PORT}`))
})
