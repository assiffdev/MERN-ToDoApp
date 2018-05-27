import React from 'react';
import NewAppointment from './NewAppointment';
import AppointList from './AppointList';
import '../css/App.css';
const display = {
    display: 'block'
  };
  const hide = {
    display: 'none'
  };
class AppointModal extends React.Component{
    constructor(props){
        super(props);
        this.handlebtnClose = this.handlebtnClose.bind(this);
        this.addNewAppoint = this.addNewAppoint.bind(this);
        this.TitleChange = this.TitleChange.bind(this);
        this.DescriptionChange = this.DescriptionChange.bind(this);
        this.hourChange = this.hourChange.bind(this);
        this.minuteChange = this.minuteChange.bind(this);
        this.periodChange = this.periodChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
    }
    handleDeleteItem(id){
       let date = this.props.ClickedDate
       let month = this.props.ClickedMonth;
       let year = this.props.ClickedYear;
        this.props.DeleteAppointment(id,date,month, year);
    }
    onSubmit(title, description, time , period){
        let date = this.props.ClickedDate;
        let month = this.props.ClickedMonth;
        let year = this.props.ClickedYear;
        let day = this.props.ClickedDay;
        this.props.AddAppoint(day, date, month,year, title,
        description, time, period );
    }
    periodChange(value){
        this.props.PeriodChange(value);
    }
    minuteChange(value){
        this.props.MinuteChange(value);
    }
    hourChange(value){
        this.props.HourChange(value);
    }
    TitleChange(value){
        this.props.TitleChange(value);
    }
    DescriptionChange(value){
        this.props.DescriptionChange(value);
    }
    addNewAppoint(){
        let show = !this.props.ShowNewForm;
        this.props.BtnNewFormClick(show);
    };
    handlebtnClose(){
        var x = false;
        this.props.HandleModalClose(x);
    }
    componentDidMount(){
        const appoints = this.props.AppointmentList;
          // console.log("yeh1"+(appoints.appointments));
    }
    render(){
        var modal = [];
        modal.push(
            
            <div className="container">
            <div className="modal" tabIndex="-1" role="dialog"
            style={this.props.toggle ? display : hide}
            aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered"
             role="document">
            <div className="modal-content">
                <div className="modal-header">
                <button type="button" className="close" onClick={this.handlebtnClose}
                  data-dismiss="modal" aria-label="Close">
                 <span aria-hidden="true">&times;</span>
                 </button>
                 <div className="modal-title">
                     <h4>
                    {this.props.ClickedDay} {this.props.ClickedDate} {this.props.ClickedMonth} {this.props.ClickedYear}
                     </h4>
                     </div>
                 
                 </div>
                 <div className="modal-body">
                 <div className="comp-appointmentlist">
                <AppointList
                DeleteItemClick={this.handleDeleteItem}
                 AppointmentList={this.props.AppointmentList} />
                 </div>
                 </div>
                 <div className="modal-footer">
                 <button type="button" onClick={this.addNewAppoint}  className="btn btn-default">
                 <span className={(this.props.ShowNewForm)? "glyphicon glyphicon-chevron-up": "glyphicon glyphicon-plus"}
                  aria-hidden="true"></span>
                 </button>
                 <button type="button" onClick={this.handlebtnClose} className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <div style={(this.props.ShowNewForm)? {display:'block'}:{display:'none'}}>
                        <NewAppointment 
                        Title={this.props.Title}
                        HourValue={this.props.Hour}
                        MinuteValue={this.props.Minute}
                        Period={this.props.Period}
                        Description={this.props.Description}
                        TitleChange={this.TitleChange}
                        DescriptionChange={this.DescriptionChange}
                        HourChange={this.hourChange}
                        MinuteChange={this.minuteChange}
                        PeriodChange={this.periodChange} 
                        OnSubmit={this.onSubmit}/>
                        </div>
                 </div>
                 
            </div>
             </div>
            </div>
            </div>
       );
       
        return(
            <div>{modal}</div>
        );
    }
}
export default AppointModal;
        
       