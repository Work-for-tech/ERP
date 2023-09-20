const mongoose = require("mongoose")
const scehma = mongoose.Schema

const indentSchema = new scehma({
    clientId: {
        type: scehma.Types.ObjectId,
        ref: 'client'
    },
    projectId: {
        type: scehma.Types.ObjectId,
        ref: 'project'
    },
    items: [{
        subcomponent: {
            type: scehma.Types.ObjectId,
            ref: 'offersubcomponent'
        },
        quantity: {
            type: "Number"
        }
    }],
    vendorId:{
        type:scehma.Types.ObjectId,
        ref:'vendor'
    }
})

module.exports =mongoose.model('indent',indentSchema)