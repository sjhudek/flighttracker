
s1= localStorage.getItem('ProjectAirport');
dep = JSON.parse(s1)
airportAirline=dep["AirportAirline"];
airportUser=dep["DepAirport"] ;

document.getElementById("t").innerHTML=airportUser;


getFlightTime()


var table = document.getElementById("myTable")


function getFlightTime(){
   
 fetch("https://airlabs.co/api/v9/schedules?dep_iata="+airportUser +"&api_key=0a5aa20f-e5ef-4843-85f7-e6c07bcb6750")
 .then(response => response.json())
 .then(data =>{
     

     for(const temp of data.response){
        
         if(temp.airline_iata == airportAirline){
         
                 found=true;

               

                 userAirDepart = temp.dep_iata;
                 userAirArr=temp.arr_iata;
                 userTimeDepartES=temp.dep_time;
                 userTimeArrES = temp.arr_time;
                 userTimeDepartREAL=temp.dep_actual;
                 userTimeArrREAL = temp.arr_actual;
                 userTerminalDepart = temp.dep_terminal;
                 userGateDepart = temp.dep_gate;
                 userTerminalArr = temp.arr_terminal;
                 userGateArr = temp.arr_gate;
               
                //console.log(userAirArr)
                tableInsert(temp.flight_number, userTimeDepartES, userAirArr)
            
             
         }
     }
var row = table.insertRow(0);
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
cell1.innerHTML = "Flight Number";
cell2.innerHTML = "Departure Time";
cell3.innerHTML = "Arrival Airport";
    
    
 
     
 });
}

function tableInsert(para1,para2,para3){
    table = document.getElementById("myTable")
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = para1;
    cell2.innerHTML = para2;
    cell3.innerHTML = para3;
    
}

