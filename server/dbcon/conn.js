const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();
const { MongoClient } = require('mongodb');

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/laworder", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=> console.log("mongodb is connected"))
  .catch((err)=> console.log("Mongodb error:", err))

// Middleware
app.use(express.json());
app.use(cors())

// Mongoose Schema and Model
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
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
    officer_id:{
        type: Number,
        required:true
    },
    name:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    role:{
        type: String,
        required: true
    },
    working:{
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
app.get('/api/officers', async (req, res)=>{
    const client = new MongoClient('mongodb://127.0.0.1:27017');
    await client.connect();
    const db = client.db('laworder');
    const user = await db.collection('officers').find().toArray();
    res.json(user);
})
app.post('/add/officer', async(req, res)=>{
        // const len_offficer_data = db.officers.countDocuments();
        // console.log(len_offficer_data);
        const count = await OfficersModel.countDocuments();
        console.log(count)

        const data = new OfficersModel({
            officer_id: count+1,
            name: req.body.officer_name,
            address: req.body.officer_address,
            role: req.body.officer_role,
            working: req.body.officer_working
    });
        const OfficersData = await data.save();
        res.status(201).json(OfficersData);
        const user = await db.collection('officers').find().toArray();
        res.json(user) 
})
//api for fetching citizen data 
app.get('/api/citizens', async(req, res)=>{
    const client = new MongoClient('mongodb://127.0.0.1:27017');
    await client.connect();
    const db = client.db('laworder');
    const citizens = await db.collection('citizens').find().toArray();
    res.json(citizens);
})

app.get("/api/admin", async (req, res)=>{
  try {
        const data = await adminUserModel.find({});
        // console.log(data)
        res.json(data); // send data to client
    } catch(err){
        console.error(err);
        res.status(500).json({ error: "Something went wrong" });
    }
})
// Start the server
app.listen(3001, () => {
    console.log("Server is running on port 3001");
})
