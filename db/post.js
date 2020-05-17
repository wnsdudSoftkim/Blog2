const MongoClient = require('mongodb').MongoClient
const assert = require('assert')
const url = "mongodb://localhost:27017"
const dbname = "post"
const ObjectId = require('mongodb').ObjectId

module.exports= {
    addPost:(title,body,callback) => {
        MongoClient.connect(url,(err,client) => {
            assert.equal(null,err)
            console.log('connected Successfully post server ')
            const db = client.db(dbname)
            db.collection('text').insertOne({
                "title":title,
                "body":body
            },(err,result)=> {
                if(title&&body) {
                    callback(result)
                }else {
                    callback(null)
                }
            })
           
            
            client.close()
        })
    },
    getPost:(callback) => {
        MongoClient.connect(url,(err,client) => {
            assert.equal(null,err)
            const db = client.db(dbname)
            db.collection('text',(err,collection) => {
                collection.find().toArray((err,list)=> {
                    callback(list)
                })
            })
            client.close()
        })
    },
    findPost:(id,callback) => {
        MongoClient.connect(url,(err,client)=> {
            assert.equal(err,null)
            const db = client.db(dbname)
            db.collection('text',(err,collection)=> {
                collection.find({
                    _id : new ObjectId(id),
                }).toArray((err,list) => {
                    callback(list)
                })
            })
            client.close()
          
        })
    },
    DelPost:(id,callback) => {
        MongoClient.connect(url,(err,client)=> {
            assert.equal(err,null)
            const db = client.db(dbname)
            db.collection('text').deleteOne({
                _id : new ObjectId(id)
            })
            client.close()
        })
    }
           
           
   
}