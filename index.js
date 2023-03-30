require('dotenv').config()
const express = require('express')
const app = express()
let methodOverride = require(`method-override`)

app.set(`view`.__dirname+`/views`)
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

app.use('/places', require('./controllers/places'))
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    res.render('home')
  })
  

app.get('*', (req, res) => {
  res.render('404 page')
})

app.listen(process.env.PORT, () => { 
  console.log("Listening on port ", process.env.PORT)
})