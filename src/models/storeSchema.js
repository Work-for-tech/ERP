const mongoose = require("mongoose")
const scehma=mongoose.Schema

const storeSchema = new mongoose.Schema({
    // subComponentId:{
    //     type:scehma.Types.ObjectId,
    //     ref:'subcomponent',
    //     unique:true
    // },
    desc:{
        type:"String"
    },
    catalog_number:{
        type:"String",
    },
    rating_value:{
        type:"String"
    },
    companyId:{
        type:scehma.Types.ObjectId,
        ref:'company'
    },
    quantity:{
        type:"Number",
        default :0
    }
})

module.exports=mongoose.model('store',storeSchema)