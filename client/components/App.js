import React, { Component } from 'react';
import Header from './Header';
import MonthDays from './MonthDays';
import '../css/App.css';
import AppointModal from './AppointModal';
import  * as dateLogic from '../logic/dateLogic.js';
import axios from 'axios';
var queryString = require('querystring') ;
import * as data from '../components/data/data.js';
const today = dateLogic.getToday();
    

class App extends Component {
  constructor(props){
    super(props);
    
    this.state ={ currentMonth:'', currentYear: '',
     toggle:false, currentDay:today.Date, listItemArrow: false,
     title:'', description:'', hour:'', minute:'', 
     period: 'AM' , showNewForm: false, appointments:'',
     clickedDate:'', clickedMonth:'', clickedYear:'',clickedDay:''
    };
    this.handleLeftClick= this.handleLeftClick.bind(this);
    this.handleRightClcik = this.handleRightClcik.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleHourChange = this.handleHourChange.bind(this);
    this.handleMinuteChange = this.handleMinuteChange.bind(this);
    this.handlePeriodChange = this.handlePeriodChange.bind(this);
    this.btnNewFormClick = this.btnNewFormClick.bind(this);
    this.AddNewAppint = this.AddNewAppint.bind(this);
    this.getAllAppointments= this.getAllAppointments.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  };
  deleteItem(id,date, month, year){ 
    console.log(" Client deletItem Called");  
     axios.delete('/delete-appoint',
    {params:{id: id, date:date, month:month, year:year}}).then( (response) => {
      //console.log('Deleted item Successfully');
     this.getAllAppointments(date,month,year);
    }).catch( function(err){
      console.log(err);
    }
    );
  };
  AddNewAppint(day, date, month, year,title, description, time, period){
    console.log(" Client addNewAppint Called");
    
    axios.post('/insert',{day:day, date: date, month: month, year:year,  
       title: title, description: description,
       time: time, period: period})
       .then( () =>{
        this.getAllAppointments(date, month, year);
       })
        .catch( function(err){
        console.log(err);
      });
  };
  btnNewFormClick(val){
      this.setState({showNewForm: val});
  };
  handlePeriodChange(val){
    this.setState({period: val});
  };
  handleMinuteChange(val){
    this.setState({minute: val});
  };
  handleHourChange(val){
    this.setState({hour: val});
  };
  handleDescriptionChange(val){
    this.setState({description: val});
  };
  handleTitleChange(val){
    this.setState({title: val});
  };
  getAllAppointments( date, month, year){
    console.log(' Client getAllAppointments Called');
    axios.get('/get-appointments',
     {params:{ date: date, month: month, year:year}})
    .then( (response) => {
         console.log("client get all"+response);
        this.setState({appointments: response.data});
    })
    .catch(function(err){
        console.error(err);
    });
  };
  handleItemClick(day,date,month, year){
    axios.get('/get-appointments',
    {params:{ date: date, month: month, year:year}})
    .then( (response) => {
      this.setState({appointments:response.data,
        toggle: true,clickedDay: day, clickedDate:date,
        clickedMonth:month, clickedYear: year});
    })
    .catch(function(err){
        console.error(err);
    });
  }
  handleLeftClick(month,year){
       //console.log(month+''+year);
       this.setState({currentMonth: month, currentYear: year});
  };
  handleRightClcik(month,year){
    //console.log(month+''+year);
    this.setState({currentMonth: month, currentYear: year});
  };
  handleModalClose(val){
   // console.log(val);
    this.setState({toggle: val, showNewForm:'',title:'', description:'',
     hour:'', minute:'',period: 'AM',appointments:''});
    
  }
  componentDidMount(){
    
   this.setState({ currentMonth:today.MonthName,
                   currentYear: today.Year });
  }
  render() {
    return (
      <div className="App">
      <div className="container">
         <div className="row">
            <div className=" page-header app-component">
            <h1>Appointment Manager</h1>
            </div>
        </div>
        <div></div>
        <div className="container  ">
          <div className="row header-component">
          <Header  MonthName={this.state.currentMonth}
            YearName={this.state.currentYear} 
            btnLeftClick={this.handleLeftClick}
            btnRightClick={this.handleRightClcik} />
            </div>
         </div>
         <div className="container">
           <div className="row">
         <MonthDays MonthName={this.state.currentMonth}
         YearName={this.state.currentYear}
         CurrentDate={this.state.currentDay}
         HandleItemClick={this.handleItemClick} />
            </div>
         </div>
         <div className="container">
           <AppointModal
            ClickedDay = {this.state.clickedDay} 
            ClickedDate={this.state.clickedDate}
            ClickedMonth={this.state.clickedMonth}
            ClickedYear = {this.state.clickedYear}
            toggle={this.state.toggle}
            HandleModalClose={this.handleModalClose}
            Title={this.state.title}
            Description={this.state.description}
            Hour={this.state.hour}
            Minute={this.state.minute}
            Period={this.state.period}
            TitleChange={this.handleTitleChange}
            DescriptionChange={this.handleDescriptionChange} 
            HourChange={this.handleHourChange}
            MinuteChange={this.handleMinuteChange}
            PeriodChange={this.handlePeriodChange}
            ShowNewForm = {this.state.showNewForm}
            BtnNewFormClick={this.btnNewFormClick}
            AddAppoint={this.AddNewAppint}
            AppointmentList={this.state.appointments}
            DeleteAppointment ={this.deleteItem}
            />
         </div>
         <div className="container">
           
            
         </div>
      </div>
      </div>
    );
  }
}

export default App;
