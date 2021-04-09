const express = require('express')

const app = express()
app.get('/', (req, res) => {
    const pd={
        product:'Ginger',
        price:200
    }
    res.send(pd)
})
app.get('/fruits/banana',(req,res)=>{
    res.send({fruit:'banana',quantiity:1200,priice:12000})
})
app.listen(3000, () => console.log('Listening port 3000'))