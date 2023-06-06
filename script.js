var lat =0;
var lng=0;
var departureAirport=""



var airportDepart = [];
var userFlightNumber ="";
var airline = "";


var userAirDepart = "";
var userAirArr="";
var userTimeDepartES="";
var userTimeArrES = "";
var userTimeDepartREAL="";
var userTimeArrREAL = "";
var userTerminalDepart = "";
var userGateDepart ="";
var userTerminalArr = "";
var userGateArr ="";

var x ="";
var y="";

var a ="";
var b ="";

var sts ="";
 




function flgihtInfo(){

    userFlightNumber = document.getElementById("flightNumber")
    airline =document.getElementById("airline1")
    x =userFlightNumber.value;
    y =airline.value;
    
    
      

    fetch("https://airlabs.co/api/v9/flights/?api_key=0a5aa20f-e5ef-4843-85f7-e6c07bcb6750")
    .then(response => response.json())
    .then(data =>{

      
      
       var found =false;
       for(const temp of data.response){

        if(temp.airline_iata == y){

         if(x == temp.flight_number){
   

            found=true
           
            console.log(temp)
            console.log(temp.lat)
            console.log(temp.lng)
            console.log(temp.status)
            console.log(temp.dep_iata);
            departureAirport = temp.dep_iata;
            lat = temp.lat;
            lng = temp.lng;
            sts = temp.status;
            
          
          
          saveData3()
          getFlightTime();
          
            break;
         }
        }
        
       
     
       }
       
       if(found == false){
        //alert(x + " invalid")
        return;
       }
       

    
    })
    


      

};

function getFlightTime(){
   //alert("104 " + departureAirport)
    fetch("https://airlabs.co/api/v9/schedules?dep_iata="+ departureAirport +"&api_key=0a5aa20f-e5ef-4843-85f7-e6c07bcb6750")
    .then(response => response.json())
    .then(data =>{
        var found =false;
        //alert(departureAirport)
        
        for(const temp of data.response){
       // alert(temp.airline_iata + " " + "118")
       //alert(temp.flight_number)
        //console.log(y);
        //console.log(x);
            if(temp.airline_iata == y){
                //(temp.airline_iata + " " + "122")
               // alert(temp.flight_number +" "+ x + " 123")
                if(temp.flight_number==x){
                 //   alert("116")
                  
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
                    //alert("109")
                    saveData1();
                    break;
            }
        }
        }
        if(found=false){
            //alert("False 125")
        }
        else{
            console.log(userAirArr)
        }
    });
}

function depart(){

    var airline2 = document.getElementById("airline2").value;
    var userAirport =document.getElementById("userAirport").value;
    a = airline2;
    b =userAirport;
   



   saveData2()
   newPage2()

}




function saveData2(){
   // alert("197")
  //  alert(a + " " + b)
    var departure={};

    departure["AirportAirline"] = a;
    departure["DepAirport"] = b;
    localStorage.setItem('ProjectAirport', JSON.stringify(departure));
    

}



   


/*function getmap(){
   
    
L.mapquest.key = '46b7bHr7XibE3juw0ihSljH70MKbUJhb';


var map = L.mapquest.map('map', {

center: [lat, lng],

layers: L.mapquest.tileLayer('map'),
zoom: 12
});

map.addControl(L.mapquest.control());


var imageUrl ='https://images.app.goo.gl/JhKmzVxYm8nCHnQm7';
var imageBounds = [
    [36.99, -102.05],
    [37, -109.05],
    [41, -109.05],
    [41, -102.05]
  ];

L.imageOverlay(imageUrl, imageBounds).setOpacity(0.8).addTo(map);


    }*/




    function saveData1(){
        var departure={};
      
    
       // alert(" 239")
        departure["userAirDepart"] = userAirDepart;
        departure["userAirArr"] =userAirArr;
        departure["userTimeDepartES"] = userTimeDepartES;
        departure["userTimeArrES"] = userTimeArrES;
        departure["userTimeDepartREAL"] = userTimeDepartREAL;
        departure["userTimeArrREAL"] =userTimeArrREAL;
        departure["userTerminalDepart"] = userTerminalDepart;
        departure["userGateDepart"] = userGateDepart;
        departure["userTerminalArr"] = userTerminalArr;
        departure["userGateArr"] = userGateArr;
    
        localStorage.setItem('ProjectFlight', JSON.stringify(departure));

        newPage()
    }

    function saveData3(){
       // alert("280 Save 3")
        var d ={};
        d["UserAirline"]=y;
        d["UserFlightNumber"]=x;
        d["Lat"]=lat;
        d["Lng"]=lng;
        d["sts"]=sts;

        localStorage.setItem('Project1UserInfo', JSON.stringify(d));

    }


   function newPage(){
    
    window.location.replace("flightdetailsv2.html")
   }

   function newPage2(){
    window.location.replace("flightresults.html")
   }