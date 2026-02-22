const express = require('express')
// const mongoose = require('mongoose')
// const bodyParser = require('body-parser')
// const { KeyValueRouter } = require('./routes/store');
// const { healthRouter } = require('./routes/health');

const app = express();
const port = 80;
app.get('/', (req, res) => {
    res.send('<h1 style="color:blue;" > hello from color-api! </hi>');
});
app.listen(port, () => {
    console.log(`Color api listening on port: ${port}`);
});
// app.use(bodyParser.json());

// app.use('/health', healthRouter);
// app.use('/store', KeyValueRouter);



// mongoose.connect(`mongodb://${process.env.MONGODB_HOST}/${process.env.KEY_VALUE_DB}`, {
//     auth: {
//         username: process.env.KEY_VALUE_USER,
//         password: process.env.KEY_VALUE_PASSWORD
//     },
//     connectTimeoutMS: 500
// })
// .then(() => {
//     app.listen(process.env.PORT, ()=> {
//         console.log('Listening on port 3000');
//     })
//     console.log('Connected to DB');
// }) 
// .catch(err => console.error(err))