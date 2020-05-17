const MongoClient = require('mongodb').MongoClient
const assert = require('assert')
const url = 'mongodb://localhost:27017'
const dbname = 'admin'

module.exports = {
    SignUp: (name,email,password) => {
        MongoClient.connect(url,(err,client) => {
           assert.equal(null,err)
           console.log('connected successfully to server')
           const db = client.db(dbname)
           db.collection('user').insertOne({
               "name":name,
               "email":email,
               "password":password
           })
           client.close()
        })
    },
    ValidateSignin: (email,password,callback) => {
        MongoClient.connect(url,(err,client) => {
            assert.equal(null,err)
            console.log('connected successfully to  login server')
            const db = client.db(dbname)
            db.collection('user').findOne({
                "email":email,
                "password":password
            },(err,result) => {
                if(err===null) {
                    callback(result)
                }
            })
            client.close()
        })
    }
}