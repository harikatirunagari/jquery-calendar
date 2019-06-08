/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var days = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
var tablebody = document.getElementsByTagName("tbody")[0];
var rows = tablebody.getElementsByTagName("tr");

function DayCalculation(){                
    //tablebody.innerHTML = "";       
    for(var i = 0; i < 6; i++){
        var trElement = document.createElement("tr");
        for(var j = 0; j < 7 ; j++){
            var tdElement = document.createElement("td");
            if(i == 0){
                tdElement.innerHTML = days[j];
            }

            trElement.appendChild(tdElement);
        }
        if(i == 0){
            (document.getElementsByTagName("thead")[0]).appendChild(trElement);
        }
        else
            (document.getElementsByTagName("tbody")[0]).appendChild(trElement);
    }
    
}

DayCalculation();
function AssigningDate(){               
    // Emptying td elements in table
    var tdElements = tablebody.getElementsByTagName("td");
    for(var i = 0; i < tdElements.length; i++){
        tdElements[i].innerHTML = "";
    }
    var day = displayDate(); 

    var dateS = 1;
    var dateEnd = DaysInMonth(selectedMonth,selectedYear);
    console.log("SELECTED MONTH " + selectedMonth );
    console.log("SELECTED YEAR " + selectedYear);
    console.log("DATE END " + dateEnd);
    console.log(rows);

    for(var i = 0; i < rows.length; i++){
        var tds = rows[i].getElementsByTagName("td");
        if(i == 0){
            for(var j = day; j < tds.length; j++){
                tds[j].innerHTML = dateS;
                dateS++;
            }
        }
        else{
            for(var j = 0; j < tds.length; j++){                       
                tds[j].innerHTML = dateS;                        
                if(dateS == dateEnd)
                    break;
                dateS++;
            }
        }

    }
}
            
