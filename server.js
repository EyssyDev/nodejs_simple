const express = require('express')

const app = express()
app.set('port', process.env.PORT || 7000)

app.use(express.json())

app.get('/', (req, res)=>{
    res.send('Christiano Ronaldo.')
})

app.get('/Bulldog', (req, res)=>{
    res.json(
        {
            "Tamaño": "Pequeño",
            "Tiempo de Vida": "8 años",
            "Velocidad": "27Km/h"
        }
    )
})

app.get('/Labrador', (req, res)=>{
    res.json(
        {
            "Tamaño": "Grande",
            "Tiempo de Vida": "7 años",
            "Velocidad": "44Km/h"
        }
    )
})

app.get('/Pastor_Aleman', (req, res)=>{
    res.json(
        {
            "Tamaño": "Grande",
            "Tiempo de Vida": "7 años",
            "Velocidad": "42Km/h"
        }
    )
})

app.get('/Poodle', (req, res)=>{
    res.json(
        {
            "Tamaño": "Mediano",
            "Tiempo de Vida": "10 años",
            "Velocidad": "32Km/h"
        }
    )
})

app.get('/Chihuahua', (req, res)=>{
    res.json(
        {
            "Tamaño": "Pequeño",
            "Tiempo de Vida": "13 años",
            "Velocidad": "20Km/h"
        }
    )
})

app.get('/Pug', (req, res)=>{
    res.json(
        {
            "Tamaño": "Pequeño",
            "Tiempo de Vida": "10 años",
            "Velocidad": "23Km/h"
        }
    )
})

app.get('/Shiba', (req, res)=>{
    res.json(
        {
            "Tamaño": "Mediano",
            "Tiempo de Vida": "7 años",
            "Velocidad": "30Km/h"
        }
    )
})

app.get('/Galgo', (req, res)=>{
    res.json(
        {
            "Tamaño": "Mediano",
            "Tiempo de Vida": "9 años",
            "Velocidad": "72Km/h"
        }
    )
})


app.listen(app.get('port'), ()=>{
    console.log('server running on port', app.get('port'))
})
// Recuerda iniciar la API con npm run start.
