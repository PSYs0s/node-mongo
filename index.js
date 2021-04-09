const express = require('express')

const app = express()
app.get('/', (req, res) => res.send('Thanks for calling'))
app.listen(3000, () => console.log('Listening port 3000'))