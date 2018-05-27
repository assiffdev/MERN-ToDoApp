import axios from 'axios';
var queryString = require('querystring') ;
export function getAllAppointment(date,month,year){
    axios.get('/get-appointments',
    {params:{ date: date, month: month, year:year}})
    .then( (response) => {
       return response.data;
    })
    .catch(function(err){
        console.error(err);
    });
}
   