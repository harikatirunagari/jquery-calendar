/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function monthOdddDays(){    
                    
    for(var i = 0; i < monthArray.length; i++ ){
        if(selectedMonth == monthArray[i]){
            selectedmonthIndex = i;
            break;
        }
    }
    console.log(selectedmonthIndex + " " + selectedMonth);
    var monthOddDays = 0;  
    for(var i = 0; i < selectedmonthIndex; i++){
        monthOddDays = monthOddDays + parseInt((DaysInMonth(monthArray[i],selectedYear)) % 7);
    }

    //monthOddDays = parseInt(monthOddDays % 7);
    console.log("Month Odd Days " + monthOddDays);
    return monthOddDays;
}
