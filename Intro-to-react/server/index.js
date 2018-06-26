const express = require('express')
const fs = require('fs')
const cors = require('cors')
const port = 9999
let app = express()

let contactsCollectionDB = fs.readFileSync('./db/contacts.json')

contactsCollection = JSON.parse(contactsCollectionDB.toString())


app.use(cors())

app.get('/contacts',(req,res)=>{
    res.send(contactsCollection)
})
app.listen(port, () => console.log(`Server is up and running on port: ${port}`))