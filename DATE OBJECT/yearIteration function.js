/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// creating drop down for year
function yearIteration(){ 
    // setInterval to update the year  ??
    var presentYear = new Date().getFullYear();
    for(var i = 1970; i <= presentYear ; i++){
        var option = document.createElement('option');
        option.innerHTML = i;
        document.getElementById('selectYear').appendChild(option);
    }
}
            
yearIteration();
