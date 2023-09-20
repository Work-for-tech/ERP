const express = require("express")
const cors = require("cors")
const app = express()

// dot env config and database config
require("dotenv").config()
require("./config/dbConfig").dbConnect()

// const userMiddleware = require("./middleware/users.middleware")

// enable statements
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

var base_url = "/inventoryManagment/api/v1/public"

// users routes 
const clientRouters = require("./routes/clientRoutes")
app.use(base_url+"/client", clientRouters);

// Employees routes
const employeeRouters = require("./routes/employeeRoutes");
app.use(base_url+"/employee", employeeRouters)

// machine routes
const machineRouters = require("./routes/machineRoutes");
app.use(base_url+"/machine", machineRouters)

// model wise machine adding controller
const modelByMachineRoutes = require("./routes/modelNumberRoutes")
app.use(base_url+"/model", modelByMachineRoutes)

const projectRoutes = require('./routes/ProjectRoutes')
app.use(base_url+'/project',projectRoutes)

const companyRoutes = require('./routes/CompanyRoutes')
app.use(base_url+'/company',companyRoutes)

const subComponentRoutes = require('./routes/SubComponentRoutes')
app.use(base_url+'/subcomponent',subComponentRoutes)

const project_offerRoutes=require('./models/offer_projectSchema');
app.use(base_url+'/project_offer',project_offerRoutes)

const drawingRoutes=require('./routes/drawingRoutes')
app.use(base_url+'/drawing',drawingRoutes)

const storeRoutes=require('./routes/storeRoutes')
app.use(base_url+'/store',storeRoutes)

const vendorRoutes=require('./routes/vendorRoutes')
app.use(base_url+'/vendor',vendorRoutes)

const PORT=process.env.PORT || 3000
app.listen(PORT , () => {
    console.log("server listen on port no ", PORT);
})