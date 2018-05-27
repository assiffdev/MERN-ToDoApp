var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var appointmentSchema =  new Schema({
    date:{type:String},  //1-31
    day: { type:String},  // Wed, Tue
    month: { type: String}, // 1-12
    year: String, //2018
    appointments:[
        {
        title:{type: String},
        description: {type: String},
        time: String, // 6:30
        period: String // AM PM
    } 
    ]   
}, {  minimize: false});
module.exports =mongoose.model('Appointment', appointmentSchema);