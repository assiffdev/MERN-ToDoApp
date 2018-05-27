import React from 'react';
 import * as dateLogic from '../logic/dateLogic.js';      
class MonthDays extends React.Component{
    constructor(props){
        super(props);
        this.listItemClick = this.listItemClick.bind(this);
    }
    listItemClick(e){
          let val =e.currentTarget.dataset.value
          let valArray = val.split(' ');
           let date = valArray[0];
           let day = valArray[1];
           let month =  valArray[2];
           let year = valArray[3];
         // console.log( date+month+year);
          this.props.HandleItemClick(day,date,month,year);
      }
   // getMonthDaysList( month, year){
       //   let  daysArray =''; 
       //   return daysArray = dateLogic.getMonthDays(month, year);
   // }
    render(){
         var nameOfMonth = (this.props.MonthName).slice(0,3);
         // console.log(nameOfMonth);
           var objToday = dateLogic.getToday();
            var todayMonthName = objToday.MonthName;
            var todayYear = objToday.Year;
         let daysList = (dateLogic.getMonthDays(this.props.MonthName,
            this.props.YearName)).map(
                val => {
                    return(
                        <li key={val.Date} 
                        className="list-inline-item monthdays-li"
                          style={((todayMonthName.slice(0,3)) == ((val.Month).slice(0,3)) && 
                          (this.props.CurrentDate == val.Date) && (todayYear == val.Year) ) ? {backgroundColor:'rgb(206, 206, 209)'} : {} }
                          data-value={(val.Date)+' '+(val.Day)+' '+(val.Month)+' '+(val.Year)}
                          onClick={this.listItemClick}>
                            <p>{val.Date}</p>
                            <p> {val.Day}</p>
                        </li>
                        );
                    }
                );
     return(
                    <div>
                        <ul className=" list-inline monthdays-ul">{daysList}</ul>
                    </div>
                );
            }
        }
        export default MonthDays;
                            
                        
            
    
    
       