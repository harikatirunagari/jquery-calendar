/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// Moves the month to next or previous 
function makeMove(move){                
    var monthIndex;
    var monthName = document.getElementById('monthName').innerHTML;
    for(var i = 0; i < monthArray.length; i++){
        if(monthName === monthArray[i]){
            monthIndex = i;
            break;
        }                        
    }
    //console.log(monthName);
    //console.log(monthIndex);
    if(move === 'back'){
        if(monthIndex === 0){
            monthIndex = 11;
        }
        else {
            monthIndex--;
        }
    }
    else if(move === 'front'){
        if(monthIndex === 11){
            monthIndex = 0;
        }
        else{
            monthIndex++;
        }                        
    }

   document.getElementById('monthName').innerHTML = monthArray[monthIndex]; 
}
