import express from 'express'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

// Creation of the server
const app = express()
app.use(express.static('public'))

// Setting up EJS to manage our views
app.set('view engine', 'ejs')
app.set('views', './models')

// 
const __dirname = dirname(fileURLToPath(import.meta.url))

const server = app.listen(8080, ()=>{
    const port = server.address().port
    console.log('Connection stablished')
    console.log(`URL: http://localhost:${port}`)
})

// GET Request
app.get('/', (req, res)=>{
    console.log('request received')
    res.render('index')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/contact-me', (req, res) => {
    res.render('contact-me')
})

app.use((req, res) => {
    res.status(404).sendFile('404.html', { root: __dirname })
})