import React from 'react';
import '../css/App.css';
class AppointList extends React.Component{
    constructor(props){
        super(props);
        this.btnTrashedClick = this.btnTrashedClick.bind(this);
    };
    btnTrashedClick(e){
       // console.log("trashed called");
        this.props.DeleteItemClick(e.currentTarget.value);
     };
        
    
    render(){
        var appoints = (this.props.AppointmentList);
        // var listItems = JSON.stringify(appoints.appointments);
        var num = appoints.appointments;
        var count =0;
        if(num){
        num.forEach(item => {
            if(!item.__proto__.__proto__)
            count++
        });
    }
        if(count > 0){
        var items = (appoints.appointments).map(
              
              item => {
                   
                   return(
                      <li className="list-group-item clearfix" key={item._id}>
                          <div className="time-list-item">
                          {(item.time)}
                          </div>
                          <div className="title-list-item">
                          {item.title}
                          </div>
                          <div className="btn-list-item">
                              <div className="btn-detail-item">
                              <button className="btn btn-default">
                                  <span className="glyphicon glyphicon-chevron-down" aria-hidden="true"></span>
                              </button>
                              </div>
                              <div className="btn-trash-item">
                              <button className="btn btn-default"
                               value={item._id}
                               onClick={this.btnTrashedClick}>
                                  <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
                              </button>
                              </div>
                          </div>
                      </li>
                   );
               }
           );
           return(
             
            <ul className="list-group">{items}</ul>
           );
         } 
         return(
             <div>No Result Found</div>
         )
        
    };
}
export default AppointList;
                              