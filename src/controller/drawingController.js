const drawingSchema = require('../models/drawingSchema')
const multer = require('multer')

const storage = multer.diskStorage({
    // destination:'../uploads',
    destination: '..\\Uploads',
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
const upload1 = multer({
    storage: storage,
}).single('file')
console.log(upload1)


module.exports.addDrawing = ((req, res) => {
    try {
        upload1(req, res, async (err) => {
            if (err) {
                res.status(400).json({ message: "Some error occuerd" });
            }
            else {
                if (req.file == undefined) {
                    res.status(400).json({ message: "Some Error Occured" });
                }
                else {
                    // console.log('file uploaded')
                    // console.log(req.body)
                    // console.log(req.file)
                    req.body.drawingPath = req.file.path
                    var updated = await drawingSchema.updateMany({ clientId: req.body.clientId, adminId: req.body.adminId }, { current: false }).sort({ _id: -1 }).skip(1).exec()
                    drawingSchema.create(req.body).then(async (data) => {
                        // console.log(updated)
                        res.status(200).json({ message: "File uploaded", data: data });
                    }).catch((error) => {
                        console.log(error)
                        res.status(400).json({ message: "File not uploaded", error: error });
                    })
                }
            }
        })
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }

})

module.exports.getDrawing = ((req, res) => {
    try {
        var projectId = req.params.adminId
        var clientId = req.params.clientId
        drawingSchema.find({ clientId: clientId, adminId: projectId, current: false }).then(async (data) => {
            var current = await drawingSchema.find({ clientId: clientId, adminId: projectId, current: true })
            console.log("Data is ", current);
            res.status(200).json({ message: "File uploaded", past: data, current: current });
        }).catch((error) => {
            console.log(error)
            res.status(400).json({ message: "File not uploaded", error: error });
        })
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
})