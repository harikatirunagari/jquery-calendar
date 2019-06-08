/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function displayDate(){
    console.log("in displayDate");
    selectedMonth = document.getElementById('monthName').innerHTML;
    var a = document.getElementById('selectYear');
    var yearOptions = a.options;
    selectedYear = yearOptions[a.selectedIndex].innerHTML;

    //console.log('selected Month' + selectedMonth);
    //console.log('selected Year ' + selectedYear);

    // MONTH ODD DAYS         

    //YEAR ODD DAYS 

    var  totalOddDays = (yearOddDays() + monthOdddDays()) % 7 +  1; //  1 as calculating the day for every first of month
    console.log("Day " + totalOddDays);
    return totalOddDays;
}
            
