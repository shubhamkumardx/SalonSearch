const express = require("express");
const router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.json({ extended: true });
const  Usercontoller = require('../Controllers/UserController')
const BusinessTypeController = require('../Controllers/BusinessTypeController')
const cors = require ('cors');
const ServiceType = require("../Controllers/ServiceType");
router.use(cors({origin:'http://localhost:3000'}))


//USER ROUTES
router.post('/login',cors(),urlencodedParser, Usercontoller.LoginUser)
router.put('/Updateuser/:_id',cors(),urlencodedParser, Usercontoller.UpdateUser)


// BUSINESS TYPE
router.post('/create',cors(),urlencodedParser, BusinessTypeController.CreateType)
router.get('/getbusinesslist',cors(),urlencodedParser, BusinessTypeController.GetAllList)
router.put('/updatelist',cors(),urlencodedParser, BusinessTypeController.UpdateBusinessList)
router.get('/getbusinesstype',cors(),urlencodedParser, BusinessTypeController.GetUserType)
router.delete('/deletebusinesstype',cors(), urlencodedParser, BusinessTypeController.DeleteType)

// SERVICE TYPE 
router.post('/servicecreate',cors(),urlencodedParser, ServiceType.CreateServiceType)
router.get('/getservicelist',cors(),urlencodedParser, ServiceType.ServiceList)
router.put('/updateservicelist',cors(),urlencodedParser, ServiceType.UpdateServiceList)
router.get('/getservicetype',cors(),urlencodedParser, ServiceType.GetServiceUserType)
router.delete('/deleteservicetype',cors(), urlencodedParser, ServiceType.DeleteServiceType)






module.exports = router;