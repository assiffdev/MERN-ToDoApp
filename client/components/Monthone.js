import React from 'react';
var now = new Date();
const months = ['January','February','March','April','May','June', 'July',
'August','September','October','November','December'];
const currentMonth = months[now.getMonth()];
const currentYear = now.getFullYear();
class MonthOne extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            monthName:'',
            yearName:''
        };
        this.handleLeftbtn = this.handleLeftbtn.bind(this);
        this.handleRightbtn = this.handleRightbtn.bind(this);
    };
    
    handleLeftbtn(){
        let monthIndex = months.indexOf(this.state.monthName);
        let prevMonthName = '';
        if(monthIndex === 0){
            monthIndex= 11;
           let prevYear = (this.state.yearName)-1;
            prevMonthName = months[monthIndex];
            this.setState({monthName:prevMonthName,yearName:prevYear});
        } else{
           prevMonthName = months[monthIndex-1];
          this.setState({monthName:prevMonthName});
          }
    }
         
    handleRightbtn(){
          let monthIndex = (months.indexOf(this.state.monthName));
           let nextMonthName = '';
          //console.log(monthIndex);
          if(monthIndex === 11){
              monthIndex = 0;
              let nextYear = (this.state.yearName)+1;
              //console.log(nextYear);
              nextMonthName = months[monthIndex];
            this.setState({monthName:nextMonthName,yearName: nextYear});
        } else{
          nextMonthName = months[monthIndex+1];
          this.setState({monthName:nextMonthName});
        }
      }
              
    componentDidMount(){
            this.setState({monthName:currentMonth, yearName:currentYear});
        }
          
         
          
    render(){
        return(
            <div className="row">
            <div className="col-md-2">
                <button name="btnLeft"
                 onClick={this.handleLeftbtn} > Left </button>
            </div>
            <div className="col-md-6">
                 <h2>{this.state.monthName} {this.state.yearName}</h2>
            </div>
            <div className="col-md-2">
                <button name="btnRight"
                onClick={this.handleRightbtn}> Right </button>
            </div>
            </div>
        );
    };
}
export default Monthone;

