/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// returns no. of days in a month 
function DaysInMonth(monthName,year){
    switch(monthName){
        case 'JAN' : case 'MAR' : case 'MAY': case 'JUL' : case 'AUG' : case 'OCT' : case 'DEC' :
                               return 31;

        case  'APR' : case 'JUN' : case 'SEP':case 'NOV':
                return 30;
            case 'FEB' :
                if((year % 4 == 0 ) || (year % 400 && year % 100 == 0))
                    return 29;
                else 
                    return 28;

    }
}

