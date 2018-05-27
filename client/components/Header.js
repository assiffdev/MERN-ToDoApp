import React from 'react';
const months = ['January','February','March','April','May','June', 'July',
'August','September','October','November','December'];
class Header extends React.Component{
    constructor(props){
        super(props);
        this.handleLeftbtn = this.handleLeftbtn.bind(this);
        this.handleRightbtn = this.handleRightbtn.bind(this);
    };
    
    handleLeftbtn(){
        let monthIndex = months.indexOf(this.props.MonthName);
        let prevMonthName = '';
        if(monthIndex === 0){
            monthIndex= 11;
           let prevYear = (this.props.YearName)-1;
            prevMonthName = months[monthIndex];
            this.props.btnLeftClick(prevMonthName, prevYear);
        } else{
           prevMonthName = months[monthIndex-1];
             this.props.btnLeftClick(prevMonthName,this.props.YearName);
          }
    }
         
    handleRightbtn(){
        let monthIndex = (months.indexOf(this.props.MonthName));
        let nextMonthName = '';
       if(monthIndex === 11){
           monthIndex = 0;
           let nextYear = (this.props.YearName)+1;
           nextMonthName = months[monthIndex];
           this.props.btnRightClick(nextMonthName, nextYear);
     } else{
       nextMonthName = months[monthIndex+1];
        this.props.btnRightClick(nextMonthName,this.props.YearName);
          }
     }      
    render(){
        return(
           <React.Fragment>
            <div className="col-md-3 arrow-btn">
                <button name="btnLeft"
                 onClick={this.handleLeftbtn} > 
                 <span className="glyphicon glyphicon-menu-left"></span>
                  </button>
            </div>
            <div className="col-md-6 monthname">
                 <h2>{this.props.MonthName} {this.props.YearName}</h2>
            </div>
            <div className="col-md-3 arrow-btn">
                <button  name="btnRight"
                onClick={this.handleRightbtn}>
                 <span className="glyphicon glyphicon-menu-right"></span>
                 </button>
            </div>
            </React.Fragment>
        );
    };
}
export default Header;