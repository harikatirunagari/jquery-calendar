/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function yearOddDays(){                    
    var  century = parseInt(selectedYear / 100) * 100;  // to extract century
     //console.log('Century' + century);

     // left years after century
     var leftyears = selectedYear - century;
     //console.log('Left Years' + leftyears);

     // calculating ODD days in century
     var a = century % 400;
     //console.log('CENTURY sent' +  a);
     var centuryOddDays = calculateOddDays(a,'CENT');      // 'CENT' == 'CENTURY'
     console.log('century Odd Days ' + centuryOddDays);

     var OddDaysTillLeftYear = calculateOddDays(leftyears-1,'NOT CENT');
     console.log('Odd Days till Last year of Left year ' + OddDaysTillLeftYear);                

     var yearOddDays = centuryOddDays + OddDaysTillLeftYear;
     return yearOddDays;
}
                
function calculateOddDays(a,val){
    if(a == 0){
        return a;
    }
    else if(a == 100){
        return  5; // not understanding to calculate odd days for 100 years
    }
    else{
        //no.of Leap years till 'a'
       var leapyears =  parseInt(a / 4);
       var nonleapyears = a - leapyears;

       //console.log("No. of Leapyears " + leapyears +  " " + val);
       //console.log('No. of Non Leap years ' + nonleapyears + "  " + val);

       var leapDays = leapyears * 2;
       var nonleapDays = nonleapyears * 1;                      

       var totalDays = leapDays + nonleapDays;
       //console.log('total Days ' + totalDays + ' ' +  val);

       var totalOddDays;
       if(val === 'CENT'){
           totalOddDays = noOfOddCenturyDays(totalDays);
           return totalOddDays;
       }
       else if(val === 'NOT CENT'){
           totalOddDays = totalDays % 7;
           return totalOddDays;
       } 
    }
                    
    function noOfOddCenturyDays(days){
        var a = days;
        console.log('\n In no of Days');
        //console.log(a);
        while(a >= 7){
            a = a / 7;
            a = parseInt(a);
            //console.log(a);
        }
        return a;
     }                   
}
                
               
