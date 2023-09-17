const express =require('express')
const router = express.Router()

const drawingController=require('../controller/drawingController')

router.post('/adddrawing',drawingController.addDrawing)
router.get('/getdrawing/:clientId/:projectId',drawingController.getDrawing)

module.exports=router