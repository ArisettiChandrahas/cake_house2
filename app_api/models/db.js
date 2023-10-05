var mongoose=require('mongoose');
require('dotenv').config();
const PORT=process.env.PORT||3000;


var gracefulShutdown;
var dbURI='mongodb://0.0.0.0:27017/Cake_House';
if(process.env.NODE_ENV==='production'){
    dbURI=process.env.MONGODB_URI;
}
mongoose.connect(dbURI);

mongoose.connection.on('connected',()=>{
    console.log(`Mongoose connected to ${dbURI}`);
});
mongoose.connection.on('error',err=>{
    console.log('Mongoose connecion error:',err)
});
mongoose.connection.on('disconnected',()=>{
    console.log('Mongoose disconnected');
});
require('./cakes');