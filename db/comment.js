const MongoClient = require('mongodb').MongoClient
const assert = require('assert')
const url = 'mongodb://localhost:27017'
const dbname = 'admin'
module.exports = {
    Comment: (email,password,body) => {
        MongoClient.connect(url,(err,client)=> {
            assert.equal(err,null)
            const db = client.db(dbname)
            db.collection('comment').insert({
                email,
                password,
                body
            })
            client.close()
        })
    }
}