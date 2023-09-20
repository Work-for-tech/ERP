const mongoose = require("mongoose")
const scehma=mongoose.Schema

const storeSchema = new mongoose.Schema({
    // desc: {
    //     type: String,
    //     required: true,
    //     message: "Name is required.",
    // },

    // catalog_number: {
    //     type: String,
    //     required: false,
    // },

    // rating_value: {
    //     type: String,
    //     required: false,
    // },


    // company_name: {
    //     type: Schema.Types.ObjectId,
    //     ref: "Companies",
    // },

    // quantity: {
    //     type: Number,
    //     default: 1,
    // },
    subComponentId:{
        type:scehma.Types.ObjectId,
        ref:'subcomponent'
    },
    quantity:{
        type:"Number",
        default :0
    }
})

module.exports=mongoose.model('store',storeSchema)