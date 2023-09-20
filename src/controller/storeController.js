const store=require('../models/storeSchema')

exports.addToStore=(async(req,res)=>{
    var data=await store.create(req.body)
})