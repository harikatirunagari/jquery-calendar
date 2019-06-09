var countriesList = ['India','China','Spain','Ukraine'];

var indiaStates = ['Telanagana','Andhra Pradesh','Uttar Pradesh','West Bengal'];
var chinaStates = ['Beijing Municipality','Liaoning Province','Jilin Province'];
var spainStates = ['Palma','Barcelona','Burgos'];
var ukrianeStates = ['ua','ub','sfhsgfuksfuisuksfvbhkbubguergbuoergborrgh'];

// END LIST OF STATES
var States = [ indiaStates , chinaStates , spainStates, ukrianeStates ];  // States Length will always be equal to countriesList

// INDIA
var telDistricts = ['Adilabad','Hyderabad','Karimnagar','kadapa'];
var andDistricts = ['Ananthapur','krishna','Guntur'];
var uttDistricts = ['Mainpuri','Mathura','Firozabad'];
var WBDistricts = ['Kolkata','Kharagpur'];

var indiaDistricts = [ telDistricts ,andDistricts , uttDistricts, WBDistricts ]; // no.of stateName defned in country india

// China
var beijingDistricts = ['Dongcheng','Xicheng','Fengtai'];
var liaoningDistricts = ['Shenyang','Dalian','Dandong'];
var jilinDistricts = ['Liaoyuan','Tonghua','Songyuan'];

var chinaDistricts = [ beijingDistricts, liaoningDistricts ,jilinDistricts ]; // no.of stateName defned in country china

// Spain
var palmaDistricts = ['Llotja','Convento de Santa Clara','Palau de lAlmudaina'];
var barceDistricts = ['ABS','ARD','fdf'];
var burDistricts = ['adf','dfd','fgf'];

var spainDistricts = [ palmaDistricts, barceDistricts, burDistricts]; // no. of stateName defined in country spain

// Ukraine
var uaDistricts = ['a1','a2'];
var ubDistricts = ['b1','b2'];

var ukraineDistricts = [uaDistricts , ubDistricts];

// END LIST OF DISTRICTS
var Districts = [indiaDistricts, chinaDistricts, spainDistricts, ukraineDistricts];  // Disticts length = no. of country i.e no. of countries

var dropDownListofCountries = [];

// Dynamic assigning of data to dropDownListofCountries  
// one drawback : (by dynamic assigning) we need to append the arrays of according to the order in parent
// like Telanagana is first in indianSates then Telanagana districts should only be first appended to indianDistricts
// Assigning Countries to dropDownListofCountries from countriesList 
for(var i in countriesList){
    dropDownListofCountries[i] = {};
    dropDownListofCountries[i].states = [];
    dropDownListofCountries[i].country = countriesList[i];
}

// Assigning States to dropDownListofCountries
// States Length will always be equal to countriesList i.e no. of countries
for(var i in States){
    for(var j in States[i]){
        dropDownListofCountries[i].states[j] = {};
        dropDownListofCountries[i].states[j].districtList = [];
        dropDownListofCountries[i].states[j].stateName = States[i][j];
    }
}

// Assigning distircts to dropDownListofCountries
// outer loop has to iterate for the no. of countries
// next inner loop has to run for no. of states. No. of states may vary from country to country. So "for loop" can't be used
// innermost loop has to run for no. of district in each state. No. of districts may vary from state to state. So "for loop" can't be used

for(var i in Districts){
    for(var j in Districts[i]){
        for(var k in Districts[i][j]){
            dropDownListofCountries[i].states[j].districtList[k] = Districts[i][j][k];
        }            
    }
}


console.log(dropDownListofCountries);

/* Static way of assigning data to dropDownListofCountries
var dropDownListofCountries = [
    {
        country : 'India',
        states : [
                    {
                        stateName : 'Telanagana',
                        districtList : ['Adilabad','Hyderabad','Karimnagar']
                    },
                    {
                        stateName : 'Andhra Pradesh',
                        districtList : ['Ananthapur','krishna','Guntur']
                    },
                    {
                        stateName : 'Uttar Pradesh',
                        districtList : ['Mainpuri','Mathura','Firozabad']
                    }
            ]

    },
    {
        country : 'China',
        states : [
                    {
                        stateName : 'Beijing Municipality',
                        districtList : ['Dongcheng','Xicheng','Fengtai']
                    },
                    {
                        stateName : 'Liaoning Province',
                        districtList : ['Shenyang','Dalian','Dandong']
                    },
                    {
                        stateName : 'Jilin Province',
                        districtList : ['Liaoyuan','Tonghua','Songyuan']
                    }
                ]		
    },
    {
        country : 'Spain',
        states : [
                    {
                        stateName : 'Palma',
                        districtList : ['Llotja','Convento de Santa Clara','Palau de lAlmudaina']
                    },
                    {
                        stateName : 'Barcelona',
                        districtList : ['ABS','ARD','fdf']
                    },
                    {
                        stateName : 'Burgos',
                        districtList : ['adf','dfd','fgf']
                    }
            ]

    }

];

*/

// Default Option of Country
var countryDropDown = document.createElement("select");
var defaultOption1 = document.createElement("option");
defaultOption1.innerHTML = "Select Country";
countryDropDown.setAttribute("id","countries");
countryDropDown.appendChild(defaultOption1);

// Default Option of District
var districtDropDown = document.createElement("select");
districtDropDown.setAttribute("id","districtsChange");
districtDropDown.disabled = true;

var defaultOption3 = document.createElement("option");
defaultOption3.innerHTML = "Select Province"; 
districtDropDown.appendChild(defaultOption3);

// Default Option for States

var stateDropDown = document.createElement("select");
stateDropDown.setAttribute("id","statesChange");
stateDropDown.disabled = true;

// Default Option
var defaultOption2 = document.createElement("option");
defaultOption2.innerHTML = "Select State"; 
stateDropDown.appendChild(defaultOption2);

document.querySelector("#container").appendChild(stateDropDown);


// Assigning countries


for(var i in countriesList){
    var options = document.createElement("option");	
    options.innerHTML = dropDownListofCountries[i].country;
    countryDropDown.appendChild(options);
}

document.querySelector("#container").appendChild(countryDropDown);

// Assigning States


document.querySelector("#countries").addEventListener("change",function(){	

    districtDropDown.disabled = true;
    districtDropDown.options.length = 0;
    districtDropDown.appendChild(defaultOption3);
    
    stateDropDown.disabled = false;
    // Emptying DropDown
    stateDropDown.options.length = 0;
    // If above line does not work then make every option of dropdown as null before assigning new "StateName" of diff "Country"
    stateDropDown.appendChild(defaultOption2);

    var countryOptions = document.querySelector("#countries").options;
    var selectedCountryIndex = document.querySelector("#countries").selectedIndex;
    selectedCountry = countryOptions[selectedCountryIndex].innerHTML;

    console.log(selectedCountryIndex);
    console.log(selectedCountry);

    for(var i in dropDownListofCountries){
        if(dropDownListofCountries[i].country === selectedCountry){
            for(var j in dropDownListofCountries[i].states){
                var options = document.createElement("option");
                console.log(dropDownListofCountries[i].states[j].stateName);
                options.innerHTML = dropDownListofCountries[i].states[j].stateName;
                stateDropDown.appendChild(options);
            }			
        }
    }   
});


// Assigning Districts

document.querySelector("#container").appendChild(districtDropDown);

document.querySelector("#statesChange").addEventListener("change",function(){
    
    districtDropDown.disabled = false;
    // Emptying DropDown
    districtDropDown.options.length = 0;
    // If above line does not work then make every option of dropdown as null before assigning new "DistrictName" of diff "StateName"
    districtDropDown.appendChild(defaultOption3);
    
    var stateOptions = document.querySelector("#statesChange").options;
    var selectedStateIndex = document.querySelector("#statesChange").selectedIndex;
    var selectedStateName = stateOptions[selectedStateIndex].innerHTML;
    
    console.log("Selected Country " + selectedCountry);
    console.log("Selected State " + selectedStateName);
    
    for(var i in dropDownListofCountries){
        if(dropDownListofCountries[i].country === selectedCountry){
            for(var j in dropDownListofCountries[i].states){
                if(dropDownListofCountries[i].states[j].stateName === selectedStateName){                   
                    
                    for(var k in dropDownListofCountries[i].states[j].districtList){
                        var options = document.createElement("option");
                        console.log(dropDownListofCountries[i].states[j].districtList[k]);
                        options.innerHTML = dropDownListofCountries[i].states[j].districtList[k];
                        districtDropDown.appendChild(options);
                    }                    
                }
            }
        }
    }
});



