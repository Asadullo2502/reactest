const model = require('./model')
const {fetchAll} = require('../../lib/postgres')

const GET = async (req, res) => {
   try {
      res.json({results: await model.getAll()})
   }catch(err) {
      console.log(err);
   }
}
const POST = async (req, res) => {
   try {
      res.json({message: await model.postAll(req.body)})
   }catch(err) {
      console.log(err);
   }
}


const ADDITEM = async (req, res) => {
   res.json({message: await model.addItem(req.body)})
}

const ADD = async (req, res) => {
   try{
      res.json({message: await model.addA(req.body)})
   }catch(err) {
      console.log(err);
   }
}

module.exports = {
   GET,
   POST,
   ADD,
   ADDITEM
}