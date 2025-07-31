const express = require('express')
const cors = require('cors')
//importing the officeres data here
const officers = require('./DB_json/MOCK_DATA.json')
const app = express();

const PORT = process.env.PORT || 8000;
//cors
app.use(cors())
//route apis
app.get('/api/officers', (req, res)=>{
    return res.json(officers);
})
app.listen(PORT, () => console.log("Server is running:", PORT))