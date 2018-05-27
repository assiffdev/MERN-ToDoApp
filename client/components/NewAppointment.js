import React from 'react';
import * as datelogic from '../logic/dateLogic';

class NewAppointment extends React.Component{
    constructor(props){
        super(props);
        this.titleChange = this.titleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleHourChange = this.handleHourChange.bind(this);
        this.handleDescriptChange = this.handleDescriptChange.bind(this);
        this.handleMinuteChange = this.handleMinuteChange.bind(this);
        this.handlePeriodChange = this.handlePeriodChange.bind(this);
    }
    handlePeriodChange(e){
        //console.log(e.target.value);
        this.props.PeriodChange(e.target.value);
    }
    handleMinuteChange(e){
       // console.log(e.target.value);
        this.props.MinuteChange(e.target.value);
    }
    handleHourChange(e){
       // console.log(e.target.value);
        this.props.HourChange(e.target.value);
    }
    titleChange(e){
         this.props.TitleChange(e.target.value);
    }
    handleDescriptChange(e){
        this.props.DescriptionChange(e.target.value);
    }
    handleSubmit(e){
        e.preventDefault();
       var title = this.props.Title;
       var description = this.props.Description;
       var time = this.props.HourValue+':'+this.props.MinuteValue;
       var period = this.props.Period;
       this.props.OnSubmit(title, description, time , period);
    }
    render(){
        const hoursList = (datelogic.getHours()).map(
            hour => {
                return(
                    <option key={hour} value={hour}>
                         {hour}
                    </option>
                );
            }
        );
        const minutesList = (datelogic.getMinutes()).map(
            minute => {
                return(
                    <option key={minute} value={minute}>
                        {minute}
                    </option>
                );
            }
        );
        return(
            <div>
               <div className="newForm-title"> <h3>New Appointment</h3></div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                    
                        <input type="text" value={this.props.Title}
                         placeholder="Enter Title..."
                         onChange={this.titleChange}
                         className="form-control"/> 
                    
                    </div>
                    <div className="form-row">
                    <div className="form-group col-md-4">
                       <select value={this.props.HourValue} 
                        onChange={this.handleHourChange}
                        className="form-control">
                        <option value="-1">HH</option>
                        {hoursList}
                        </select>
                    </div>
                    <div className="form-group col-md-4">    
                        <select value={this.props.MinuteValue}
                         onChange={this.handleMinuteChange}
                         className="form-control">
                         <option value="-1">MM</option>
                         {minutesList}
                         </select>
                    </div>
                    <div className="form-group col-md-4">     
                         <select className="form-control"
                          value={this.props.Period}
                          onChange={this.handlePeriodChange}>
                             <option value="AM">AM</option>
                             <option value="PM">PM</option>
                         </select>
                    </div>
                    </div>
                    <div className="form-group">
                    
                        <textarea className="form-control"
                         placeholder="Enter Description..."
                         value={this.props.Description}
                         onChange={this.handleDescriptChange}/>
                    
                    </div>
                    <input type="submit" value="submit" className="btn btn-primary"/>
                </form>
            </div>
        );
    }
}
export default NewAppointment;
                    