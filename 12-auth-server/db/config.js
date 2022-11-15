const mongoose = require('mongoose');
const { use } = require('../routes/auth');


const dbConnection = async() => {

    try {

        await mongoose.connect(process.env.BD_CNN,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
           
        });

        console.log("Base de datos Online");
        
    } catch (error) {
        console.log(error);
        throw new Error(' Error a la hora de inicializar BD');
    }
}



module.exports = {
    dbConnection

}