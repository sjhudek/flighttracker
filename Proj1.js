
var airline = "";
var date ="";
var lat =0;
var lng=0;

var btn = document.getElementById("trackFlightBtn");

btn.addEventListener("click",flgihtInfo);

var userFlightNumber = "2334";

function flgihtInfo(){

        airline = document.getElementById("airline").value;
        flightNum =document.getElementById("flightNumber").value;
        date = document.getElementById("date").value;

    fetch("https://airlabs.co/api/v9/flights/?api_key=0a5aa20f-e5ef-4843-85f7-e6c07bcb6750")
    .then(response => response.json())
    .then(data =>{
       console.log(data);
       // console.log(data.response)
       var found =false;
       for(const temp of data.response){
      //  var temp = data.response[];
       // console.log(temp)
        var flightNum = temp.flight_number;
        if(userFlightNumber == flightNum){
            found=true
           
            console.log(temp)
            console.log(temp.lat)
            console.log(temp.lng)
            console.log(temp.status)
        //    lat = temp.lat;
            //lng =temp.lng;
            lat = temp.lat;
            lng = temp.lng;
            getmap();
            break;
        }
       
       // console.log(flightNum)
       }
       if(found == false){
        alert(userFlightNumber + "invalid")
        return;
       }
    })
    


        if(isNaN(flightNum)){
            alert("Invalid Entry")
        }

        const populateTable = (flights) =>{

            for (const flight of flights){}
            const tableRow = document.createElement('tr')

        }
  
};
function getmap(){
    // L.mapquest.key = 'KEY';

      // 'map' refers to a <div> element with the ID map
    //  L.mapquest.map('map', {
     //   center: [37.7749, -122.4194],
   //     layers: L.mapquest.tileLayer('map'),
    //    zoom: 12
    //  });
    
L.mapquest.key = '46b7bHr7XibE3juw0ihSljH70MKbUJhb';

// 'map' refers to a <div> element with the ID map
var map = L.mapquest.map('map', {

center: [lat, lng],

layers: L.mapquest.tileLayer('map'),
zoom: 12
});
alert(lat);
alert(lng)
map.addControl(L.mapquest.control());
    }

// fetch("https://airlabs.co/api/v9/airports?iata_code=CDG&api_key=0a5aa20f-e5ef-4843-85f7-e6c07bcb6750")


