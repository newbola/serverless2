const express = require('express')
const app = express()

app.get('*', (req,res) => {
    res.send({mensaje: 'chanchito feliz'})
})

module.exports = app