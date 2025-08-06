const express = require('express');
const fileManagerRoutes = require('./routes/fileManagerRoutes.js')
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/file-manager', fileManagerRoutes);

app.get('/',(req,res)=>{
    res.send("Hello rocco")
})

app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});



module.exports = app;