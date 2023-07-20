const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:2111'
const database = 'musicfyHomework'

const addData = async (nameCollection, data) => {
  try {
    const client = await MongoClient.connect(url)
    const db =  client.db(database)
    const collection = db.collection(nameCollection)
    await collection.insertMany(data)

    client.close()
  } catch (err) {
    console.log('Terjadi kesalahan:', err)
  }
}

module.exports = addData
