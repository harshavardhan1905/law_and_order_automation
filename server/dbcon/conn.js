const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();
const { MongoClient } = require('mongodb');
// app.use(express.json());

// Middleware
app.use(express.json());
app.use(express.json()); 

app.use(cors())
// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/laworder", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("mongodb is connected"))
    .catch((err) => console.log("Mongodb error:", err))



// Mongoose Schema and Model
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    gmail: {
        type: String,
        required: true
    },
    password: {
        type: String

    }
});
const adminUserModel = mongoose.model("admins", UserSchema);

//userSchema for officers
const officersSchema = new mongoose.Schema({
    officer_id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    working: {
        type: String,
        required: true
    }

})
const OfficersModel = mongoose.model('officers', officersSchema);

//api for officers details
app.get('/api/officers', async (req, res) => {
    const client = new MongoClient('mongodb://127.0.0.1:27017');
    await client.connect();
    const db = client.db('laworder');
    const user = await db.collection('officers').find().toArray();
    res.json(user);
})
app.get('/api/officers/location', async (req, res) =>{
    try{
        const client = new MongoClient('mongodb://127.0.0.1:27017');
        await client.connect();
        const {location} = "Dundhigal";
        console.log(location)
        const db = client.db('laworder');
        const user = await db.collection('officers').findOne({location}).toArray();
        res.json(user)
        }
    catch(err){
        console.log(err)
    }
})
app.post('/add/officer', async (req, res) => {
    // const len_offficer_data = db.officers.countDocuments();
    // console.log(len_offficer_data);
    try{
        const count = await OfficersModel.countDocuments();
    // console.log(count)
    const data = new OfficersModel({
        officer_id: count + 1,
        name: req.body.officer_name,
        email: req.body.email,
        address: req.body.officer_address,
        role: req.body.officer_role,
        working: req.body.officer_working
    });
    // console.log(data)
    const OfficersData = await data.save();
    console.log(OfficersData)
    res.status(201).json(OfficersData);
    const user = await db.collection('officers').find().toArray();
    res.json(user)
    }
    catch(err){
        console.log(err)
    }
})
//api for fetching citizen data 
app.get('/api/citizens', async (req, res) => {
    const client = new MongoClient('mongodb://127.0.0.1:27017');
    await client.connect();
    const db = client.db('laworder');
    const citizens = await db.collection('citizens').find().toArray();
    res.json(citizens);
})

app.get("/api/admin", async (req, res) => {
    try {
        const data = await adminUserModel.find({});
        // console.log(data)
        res.json(data); // send data to client
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Something went wrong" });
    }
})
//contacts fetch
app.get('/api/law_order/contacts', async (req, res) => {
    try {
        const client = new MongoClient('mongodb://127.0.0.1:27017');
        await client.connect();
        const db = client.db('laworder');
        // const location, department;
        // const[location, department]= req.query;
        //    const location = "Gandimaisamma";
        //    const department ="law_order";
        // const location = req.query.location;
        // const department = req.query.department;
        const { location, department } = req.query;
        console.log(location);
        console.log(department);
        const contacts = await db.collection('lawOrder_contacts').find({ location: location } && { department: department }).toArray();
        res.json(contacts)
    }
    catch (err) {
        console.log(err);
    }
})

const reportSchema = new mongoose.Schema({
    victim_id:{
        type:Number
    },
    
    victim_name:{
        type:String
    },
    victim_contact:{
        type: Number
    },
    date_of_incident:{
        type: Date
    },
    criminal_name:{
        type:String
    },
    location:{
        type:String
    },
    criminal_type:{
        type: String
    },
    description:{
        type:String
    }
})

const reportModel = mongoose.model("firs", reportSchema);
// const  count = await reportModel.countDocuments();
// console.log(count)
app.post('/api/post/firs/case', async (req, res)=>{
    try{
        const count = await reportModel.countDocuments();
        const data = new reportModel({
        victim_id: count+1,
        victim_name: req.body.victim_name,        
        victim_contact: req.body.victim_contact,
        date_of_incident: req.body.date,
        criminal_name: req.body.criminalName,
        location: req.body.victim_location,
        criminal_type: req.body.criminalType,
        description: req.body.victim_description

    })
    const reportsData = await  data.save();
    console.log(reportsData);
    res.json(reportsData);

    }
    catch(error){
        console.log(error);
        res.status(500).json({error:"failed to post case"})
    }
})
//api for getting complaints

app.get('/api/get/complaints', async (req, res)=>{
    try{    
        const client = new MongoClient('mongodb://127.0.0.1:27017')
        await client.connect();
        const db = client.db('laworder');
        const complaints = await db.collection('firs').find().toArray();
        res.json(complaints)
        // console.log(db)
    }
    catch(err){
        console.log(err)
    }
})

//api to get the criminal as area wise
app.get('/api/get/criminal/data', async (req, res)=>{
    try{
        const client = new  MongoClient('mongodb://127.0.0.1:27017')
        await client.connect();
        const db = client.db('laworder')
        const criminal = await db.collection('firs').find().toArray();
        res.json(criminal)
    }
    catch(err){
        console.log("Error:", err)
    }
})
//posting licence applications
const licenceSchema = new mongoose.Schema({
    licence_id:{
        type: Number
    },
    applicant_name:{
        type: String
    },
    contact:{
        type: Number
    },
    application_type:{
        type: String
    },
    event_date:{
        type: Date
    },
    adress:{
        type: String
    },
    purpose:{
        type: String
    },
    attachments:{
        type: String
    }
});
const licenceModel = mongoose.model('licences', licenceSchema);
app.post('/api/post/licence_applications', async(req, res)=>{
    try{
        const count = await licenceModel.countDocuments();
        const data = new licenceModel({
            licence_id: count+1,
            applicant_name: req.body.applicant_name,
            contact: req.body.contact,
            application_type: req.body.application_type,
            event_date: req.body.event_date,
            adress: req.body.address,
            purpose: req.body.purpose,
            attachments: req.body.attachments

    });
    console.log(req.body)
    const licenceData = await data.save();
    console.log(licenceData)
    res.json(licenceData)
    }
    catch(err){
        console.log(err)
    }

})
//get the licences
app.get('/api/get/licences', async(req, res)=>{
    const client = new MongoClient('mongodb://127.0.0.1:27017');
    await client.connect();
    const db = client.db('laworder');
    const licences = await db.collection('licences').find().toArray();
    res.json(licences)
})
//API for citizen sign up
const signUpSchema = new mongoose.Schema({
    citizen_id:{
        type: Number
    },
    citizen_name:{
        type: String
    },
    citizen_email:{
        type:String
    },
    password:{
        type: String
    },
    citizen_phone:{
        type: Number
    },
    citizen_address:{
        type: String
    }
})
const citizenSignModel = new  mongoose.model('citizens', signUpSchema);
app.post('/api/post/citizen-signup', async (req, res)=>{
    try{
        const count = await citizenSignModel.countDocuments();
        const data = new citizenSignModel({
            citizen_id: count+1,
            citizen_name: req.body.name,
            citizen_email: req.body.email,   
            citizen_phone: req.body.phone,
            password: req.body.password,
            citizen_address: req.body.address
        })
        console.log(req.body)
        const citizenData = await data.save();
        console.log(citizenData)
        res.json(citizenData)
    }
    catch(err){
        console.log(err)
    }
})
//api for login citizen
app.post('/api/citizen/login', async(req, res)=>{
    const email = req.body.userName;
    const pass = req.body.password;
    // const password = +pass;
    // console.log(email, password)
    try{
        citizenSignModel.findOne({citizen_email: email})
    .then(user =>{
        if(user){
            if(user.password === pass){
                res.json("success")
                // console.log("sucess")
                // console.log()
            }
            else{
                res.json("password incorrect!")
                console.log("pass incor")
                // console.log(typeof user.password, typeof password)
            }
        }
        else{
            res.json("user not exist")
            console.log("user not in")
        }
    })
    }  
    catch(err){
        console.log(err)
    }  
})





// Start the server
app.listen(3001, () => {
    console.log("Server is running on port 3001");
})
