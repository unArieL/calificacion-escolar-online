const express = require('express')
const app = express()
const path = require('path')
const publicPath = path.resolve(__dirname, '../public')
const portListen = process.env.port || 3000
//const mainRouter = require('./router/mainRoutes')
const alumnoRouter = require('./router/alumnoRoutes')
const ghpages= require('gh-pages')

app.set('view engine', 'ejs')
app.set('views', './src/views')

app.use(express.static(publicPath))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './views/index.html'));
});

//app.use('/', mainRouter)
app.use('/alumno', alumnoRouter)

ghpages.publish('src', {add: true}, callback)

app.listen(portListen , () => {
    console.log(`Server on port 3000`);
})

