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

// const officersUserModel = mongoose.model("officers", UserSchema)

// async function getData() {
//     const client = new MongoClient('mongodb://127.0.0.1:27017');
//     await client.connect();
//     const db = client.db('laworder');
//     const user = await db.collection('officers').find().toArray();
//     return user

// }
// getData().then(user =>{
//     console.log(user)
// })
//api for officers details
app.get('/api/officers', async (req, res) => {
    const client = new MongoClient('mongodb://127.0.0.1:27017');
    await client.connect();
    const db = client.db('laworder');
    const user = await db.collection('officers').find().toArray();
    res.json(user);
})
app.post('/add/officer', async (req, res) => {
    // const len_offficer_data = db.officers.countDocuments();
    // console.log(len_offficer_data);
    const count = await OfficersModel.countDocuments();
    // console.log(count)
    const data = new OfficersModel({
        officer_id: count + 1,
        name: req.body.officer_name,
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
    victim_contact:{
        type: Number
    },
    victim_name:{
        type:String
    },
    location:{
        type:String
    },
    description:{
        type:String
    }
})

const reportModel = mongoose.model("womenProtectionReports", reportSchema);
// const  count = await reportModel.countDocuments();
// console.log(count)
app.post('/api/post/women_protection/case', async (req, res)=>{
    try{
        const count = await reportModel.countDocuments();
        const data = new reportModel({
        victim_id: count+1,
        victim_name: req.body.victim_name,
        victim_contact: req.body.victim_contact,
        location: req.body.victim_location,
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
// Start the server
app.listen(3001, () => {
    console.log("Server is running on port 3001");
})
