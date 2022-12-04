const express = require('express')
const app = express()
const path = require('path')
const publicPath = path.resolve(__dirname, '../public')
const portListen = process.env.port || 3000
const mainRouter = require('./router/mainRoutes')
const alumnoRouter = require('./router/alumnoRoutes')

app.set('view engine', 'ejs')
app.set('views', './src/views')

app.use(express.static(publicPath))

app.use('/', mainRouter)
app.use('/alumno', alumnoRouter)

app.listen(portListen , () => {
    console.log(`Server on port 3000`);
})

