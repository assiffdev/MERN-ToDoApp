const months = ['January','February','March','April','May',
'June', 'July', 'August','September','October','November','December'];
const daysInWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const daysIndex = { 'Sun': 0, 'Mon': 1, 'Tue': 2, 'Wed': 3, 'Thu': 4,
 'Fri': 5, 'Sat': 6 };


export function getToday(){
    let now = new Date();
    let month= now.getMonth();// get Month give number of month based zero
    let monthName = months[now.getMonth()];// gives month Name like April
    let year = now.getFullYear();// 2018
    let date = now.getDate();// 21 it it 21st of a month
    let dayNum = now.getDay();// day number
    let monthAbbriv = monthName.toString().slice(0,3);//like Apr
    return { "MonthNum":month,"MonthName":monthName,"Date":date, "Year":year}
 }
export function getMonthLength(month, year){
    var monthLength;
    var monthStart = new Date(year, month, 1);
    var monthEnd = new Date(year, month+1, 1);
    return monthLength = Math.round ((monthEnd - monthStart) /(1000 * 60 * 60 * 24));
}

export function getMonthDays(month, year){
   var index, i;
   //console.log(month);
   let daysArray = [];
   var monthLength = getMonthLength(months.indexOf(month), year);
        // if month=4 year=2018 day=1 => month=3 as months are zero based
        // for above aruguments inner expression return daysIndex[Tue] where
        // Tue is the name of first day name of month of April
        // daysIndex[tue] set index = 2
        index = daysIndex[(new Date(year, months.indexOf(month), 1)).toString().split(' ')[0]];
        for (i = 0 ; i < monthLength ; i++) {
            daysArray.push({"Date":(i + 1),"Day":daysInWeek[index++],
            "Year": year, "Month": month});
            if (index == 7) index = 0;
        }
        return daysArray;
}
export function getHours(){
     let hoursList = []
     for(var i=1 ; i <= 12 ; i++){
         hoursList.push(i);
     }
     return hoursList;
}
export function getMinutes(){
        let minutesList = [];
        for(var i =0 ; i <= 60; i = i+10){
            minutesList.push(i);
        }
        return minutesList;
}
        
        
