var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Appointment = require('../../models/Appointment.js');

router.get('/', function(req, res){
     res.render('index');
});
// first time appoint for a date is inserted
router.route('/insert')
.post( function(req, res){
    console.log('insert callled')
   var query = Appointment.findOne({$and:[{date: req.body.date},
        {month: req.body.month},{year: req.body.year}] });
       query.exec(function(err, result){
          if(err) res.send(err);
          var appointment = new Appointment();
          var objAppointment = {
            title: req.body.title,
            description: req.body.description,
            time:req.body.time,
            period:req.body.period
          };
          // if not exist
          if(!result){
              appointment.date = req.body.date;
              appointment.day = req.body.day;
              appointment.month = req.body.month;
              appointment.year = req.body.year;
              // pushing this object to subdoc array
              appointment.appointments.push(objAppointment);
              appointment.save( function(err, result){
                  if(err) res.send(err);
                  res.send(result.appointments);
                  console.log("insert"+result);
              });
               
            }
            // if exists
            if(result){
                    query.exec(function(err, result){
                        if(err) res.send(err);
                        result.appointments.push(objAppointment);
                        result.save(function(err,result){
                            if(err) res.send(err);
                            res.send(result.appointments);
                           // console.log(result);
                        });
                       
                    });
                }
          });  
    });
    
// all appointment of a date for list
router.get('/get-appointments', function(req, res){
           console.log('get-all called');
           var date = req.query.date;
           var month = req.query.month;
           var year = req.query.year;
           console.log(date +''+ month+''+year);
          var query = Appointment.findOne({$and:[{date: date},
            {month: month},{year: year}] });
              // query.select('appointments');
               query.exec(function(err,result){
                   if(err)
                   res.send(err);
                   res.send(result);
                   console.log("get-all"+result);
               });
});
router.get('/get-appointment', function(req, res){
    var date = req.query.date;
    var month = req.query.month;
    var year = req.query.year;
    //console.log(req.query.id);
    var query = Appointment.findOne({$and:[{date: date},
     {month: month},{year: year}] });
    // query.select('appointments');
     query.exec( function(err, result){
         if(err) res.send(err);
         if(!result) res.send('No Appointment Found');
          var appoint = result.appointments.filter(function(appointment){
              return appointment._id == req.query.id;
      }).pop();
         res.json(appoint);
 });
});
router.post('/update-appoint', function(req, res){
    var dateNum = req.body.dateNum;
    var monthNum = req.body.monthNum;
    var year = req.body.year;
    //console.log(req.query.id);
    var query =Appointment.findOneAndUpdate({$and:[{dateNum: dateNum},
        {monthNum: monthNum},{year: year}] });
       query.exec(function(err, result){
           if(err) res.send(err);
           if(!result) res.send('No Appointment Found');
           var appoint =result.appointments.id(req.body.id)
               appoint.title = req.body.title;
               appoint.description= req.body.description;
               appoint.time= req.body.time;
               appoint.period = req.body.period;
               result.save(function(err,result){
                  if(err) res.send(err);
                  res.send(result);
               });
              
       });
      
});
router.delete('/delete-appoint', function(req, res){
    console.log("delete called");
    var date = req.query.date;
    var month = req.query.month;
    var year = req.query.year;
    console.log(req.query.id);
    var query = Appointment.findOne({$and:[{date: date},
     {month: month},{year: year}] });
     query.select('appointments');
     query.exec(function(err, result){
         if(err) console.log(err);
         if(result.appointments){
         result.appointments.id(req.query.id).remove();
         result.save();
         res.send("Deleted Successfully");
         }
     })});
    
module.exports = router;
   


