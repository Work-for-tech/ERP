const store = require('../models/storeSchema')

exports.addToStore = (async (req, res) => {
    try {
        var data = await store.findOneAndUpdate({ $and: [{ desc: req.body.desc }, { catalog_number: req.body.catalog_number }, { rating_value: req.body.rating_value }, { companyId: req.body.companyId }] }, { $inc: { quantity: req.body.quantity } }, { upsert: true }).exec()
        if (data != null) {
            res.status(200).josn({ message: "Stored succesfully", data: data })
        }
        else {
            res.status(400).josn({ message: "failed" })
        }
    }
    catch (err) {
        res.status(500).json({
            message: "Error in adding store",
            data: err
        })
    }
})

exports.getStore=(async(req,res)=>{
    try{
        store.find().then((data)=>{
            res.status(200).josn({ message: "Store fetch succesfully", data: data })
        }).catch((error)=>{
            res.status(400).josn({ message: "failed",error:error })
        })
    }
    catch(error)
    {
        res.status(500).json({
            message: "Error in fetching store",
            data: error
        })
    }
})